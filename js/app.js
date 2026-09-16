/* Quiz engine.
   Modes differ along two axes: how the question set is chosen, and whether
   feedback appears immediately (practice) or only at the end (exam, like the
   real test). Everything else is shared. */
(function () {
  'use strict';

  var BANK = window.QUESTION_BANK || [];
  var $  = function (id) { return document.getElementById(id); };

  var MODES = {
    exam46:   { count: 46, pass: 38, immediate: false, shuffle: true },
    exam18:   { count: 18, pass: 15, immediate: false, shuffle: true },
    practice: { count: Infinity, pass: null, immediate: true, shuffle: true },
    wrong:    { count: Infinity, pass: null, immediate: true, shuffle: true },
    official: { count: 10, pass: 8, immediate: true, shuffle: false }
  };

  var S = {
    mode: null, cfg: null, items: [], index: 0, answers: [], officialTest: null
  };

  /* ── helpers ─────────────────────────────────────────────────────────── */

  function t() {
    var dict = window.I18N[Store.getLang()];
    var val = dict[arguments[0]];
    if (typeof val !== 'function') return val;
    return val.apply(null, [].slice.call(arguments, 1));
  }

  function lang() { return Store.getLang(); }

  /* Read a per-language field, falling back to Traditional Chinese. If an asset
     ever loads half-updated, a question shows in the wrong language rather than
     blank or throwing. */
  function pick(obj) {
    if (!obj) return '';
    return obj[lang()] || obj.hant || '';
  }

  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function show(screen) {
    ['home', 'quiz', 'results'].forEach(function (name) {
      $('screen-' + name).hidden = (name !== screen);
    });
    window.scrollTo(0, 0);
  }

  /* ── preferences ─────────────────────────────────────────────────────── */

  function applyPrefs() {
    var root = document.documentElement;
    root.setAttribute('data-size', String(Store.getSize()));
    root.lang = { hant: 'zh-Hant', hans: 'zh-Hans', en: 'en' }[lang()] || 'zh-Hant';

    document.querySelectorAll('[data-size]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(Number(b.dataset.size) === Store.getSize()));
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang()));
    });

    document.querySelectorAll('[data-t]').forEach(function (el) {
      var val = t(el.dataset.t);
      if (typeof val === 'string') el.textContent = val;
    });
  }

  /* ── home ────────────────────────────────────────────────────────────── */

  function renderHome() {
    var s = Store.summary();
    $('stats').innerHTML =
      stat(s.answered, t('statAnswered')) +
      stat(s.accuracy + '%', t('statAccuracy')) +
      stat(s.wrongCount, t('statWrong'));

    var badge = $('wrong-count');
    badge.textContent = s.wrongCount;
    badge.hidden = s.wrongCount === 0;

    document.querySelectorAll('.official-btn').forEach(function (b) {
      b.textContent = t('officialTest') + ' ' + b.dataset.official;
    });

    document.querySelectorAll('[data-source]').forEach(function (cb) {
      var key = cb.dataset.source;
      cb.checked = Store.isSourceOn(key);
      var n = BANK.filter(function (q) { return q.source === key && !q.dupeOf; }).length;
      var el = $('count-' + key);
      if (el) el.textContent = t('sourceCount', n);
    });
    show('home');
  }

  function stat(num, label) {
    return '<div class="stat"><span class="stat__num">' + num +
           '</span><span class="stat__label">' + label + '</span></div>';
  }

  /* ── building a run ──────────────────────────────────────────────────── */

  function pickQuestions(mode, officialTest) {
    if (mode === 'official') {
      return BANK
        .filter(function (q) { return q.source === 'official' && q.test === officialTest; })
        .sort(function (a, b) { return a.num - b.num; });
    }
    // Two sample-test questions repeat earlier ones verbatim. They stay inside
    // their own sample test but must not appear twice in a shuffled run.
    // Official-samples mode deliberately ignores the source filter -- picking
    // "sample test 3" should always give you sample test 3.
    var unique = BANK.filter(function (q) {
      return !q.dupeOf && Store.isSourceOn(q.source);
    });

    if (mode === 'wrong') {
      var ids = Store.wrongBookIds();
      return shuffled(unique.filter(function (q) { return ids.indexOf(q.id) >= 0; }));
    }
    var pool = shuffled(unique);
    var cfg = MODES[mode];
    return cfg.count === Infinity ? pool : pool.slice(0, cfg.count);
  }

  function start(mode, officialTest) {
    var questions = pickQuestions(mode, officialTest);
    if (!questions.length) {
      alert(mode === 'wrong' ? t('emptyWrongBook') : t('noSourcesSelected'));
      return;
    }

    var cfg = MODES[mode];
    S.mode = mode;
    S.officialTest = officialTest || null;
    S.index = 0;
    S.answers = questions.map(function () { return null; });
    S.items = questions.map(function (q) {
      // Official sample tests keep DMV's published choice order; everywhere
      // else the order is shuffled so repeat practice can't be gamed by
      // remembering "it was the second one".
      var order = q.hant.choices.map(function (_, i) { return i; });
      return { q: q, order: cfg.shuffle ? shuffled(order) : order };
    });

    // Pass mark scales when the wrong-book / practice run has no fixed length.
    S.cfg = {
      immediate: cfg.immediate,
      pass: cfg.pass === null ? null
           : (cfg.count === Infinity ? null
           : Math.round(cfg.pass * Math.min(questions.length, cfg.count) / cfg.count))
    };

    show('quiz');
    renderQuestion();
  }

  /* ── question rendering ──────────────────────────────────────────────── */

  function renderQuestion() {
    var item = S.items[S.index];
    var q = item.q;
    var text = pick(q);
    var chosen = S.answers[S.index];
    var graded = S.cfg.immediate && chosen !== null;

    $('q-counter').textContent = t('counter', S.index + 1, S.items.length);
    $('q-score').textContent = S.cfg.immediate ? t('scoreSoFar', countCorrect(), answeredCount()) : '';
    $('progress-fill').style.width = ((S.index) / S.items.length * 100) + '%';

    $('q-source').textContent =
        q.source === 'official' ? t('sourceOfficial', q.test)
      : q.source === 'provided' ? t('sourceProvided')
      : t('sourceHandbook');
    document.querySelector('.qcard').dataset.qid = q.id;

    var signBox = $('q-sign');
    var art = q.sign && window.SIGNS ? window.SIGNS[q.sign] : null;
    signBox.innerHTML = art || '';
    signBox.hidden = !art;

    $('q-text').textContent = text.q;

    var box = $('choices');
    box.innerHTML = '';
    item.order.forEach(function (origIndex, pos) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice';
      btn.setAttribute('aria-pressed', String(chosen === origIndex));

      var mark = document.createElement('span');
      mark.className = 'choice__mark';
      mark.textContent = 'ABC'.charAt(pos);

      var label = document.createElement('span');
      label.textContent = text.choices[origIndex];

      if (graded) {
        btn.disabled = true;
        if (origIndex === q.answer) { btn.classList.add('is-correct'); mark.textContent = '✓'; }
        else if (origIndex === chosen) { btn.classList.add('is-wrong'); mark.textContent = '✗'; }
      } else {
        btn.addEventListener('click', function () { choose(origIndex); });
      }

      btn.appendChild(mark);
      btn.appendChild(label);
      box.appendChild(btn);
    });

    renderFeedback(graded, item, chosen);

    var next = $('next-btn');
    var last = S.index === S.items.length - 1;
    next.textContent = last ? t('seeResults') : t('next');
    next.disabled = chosen === null;
  }

  function renderFeedback(graded, item, chosen) {
    var fb = $('feedback');
    if (!graded || chosen === item.q.answer) { fb.hidden = true; fb.innerHTML = ''; return; }

    var q = item.q;
    var why = q.whyWrong[chosen];
    var html = '';
    // Questions without a per-distractor explanation still get the "not
    // correct" row, echoing the choice that was picked -- otherwise the card
    // opens straight into the right answer and reads as a non sequitur.
    html += '<div class="fb__row fb__row--bad"><span class="fb__label">' +
            t('yourAnswer') + '</span>' +
            (why ? esc(pick(why)) : esc(pick(q).choices[chosen])) + '</div>';
    html += '<div class="fb__row fb__row--good"><span class="fb__label">' +
            t('correctAnswer') + '</span>' + esc(pick(q).choices[q.answer]) +
            ' — ' + esc(pick(q.rationale)) + '</div>';
    html += '<div class="fb__ref">' + esc(t('refLine', q.ref.page, pick(q.ref.section))) + '</div>';

    fb.innerHTML = html;
    fb.hidden = false;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function choose(origIndex) {
    if (S.answers[S.index] !== null && S.cfg.immediate) return;
    var first = S.answers[S.index] === null;
    S.answers[S.index] = origIndex;

    // Record once per question per run, on the first answer given.
    if (first) Store.record(S.items[S.index].q.id, origIndex === S.items[S.index].q.answer);
    renderQuestion();
  }

  function answeredCount() {
    return S.answers.filter(function (a) { return a !== null; }).length;
  }

  function countCorrect() {
    return S.items.reduce(function (n, item, i) {
      return n + (S.answers[i] === item.q.answer ? 1 : 0);
    }, 0);
  }

  /* ── results ─────────────────────────────────────────────────────────── */

  function finish() {
    var correct = countCorrect();
    var total = S.items.length;
    var need = S.cfg.pass;
    var passed = need === null ? null : correct >= need;

    var card = $('scorecard');
    card.className = 'scorecard' + (passed === null ? '' : passed ? ' scorecard--pass' : ' scorecard--fail');
    card.innerHTML =
      (passed === null ? '' : '<p class="scorecard__verdict">' + (passed ? t('pass') : t('fail')) + '</p>') +
      '<div class="scorecard__score">' + t('scoreLine', correct, total) + '</div>' +
      (need === null ? '' : '<p class="scorecard__note">' + t('passNote', need, total) + '</p>');

    var missed = S.items.filter(function (item, i) { return S.answers[i] !== item.q.answer; });
    var review = $('review');

    if (!missed.length) {
      review.innerHTML = '<p class="review__empty">' + t('reviewAllRight') + '</p>';
    } else {
      review.innerHTML = '<h3 class="review__title">' + t('reviewTitle') + '</h3>' +
        S.items.map(function (item, i) {
          if (S.answers[i] === item.q.answer) return '';
          return reviewItem(item.q, S.answers[i]);
        }).join('');
    }

    $('retry-wrong-btn').textContent = t('retryWrong');
    $('retry-wrong-btn').hidden = !missed.length;
    $('home-btn').textContent = t('backHome');
    show('results');
  }

  function reviewItem(q, chosen) {
    var text = pick(q);
    var why = chosen === null ? null : q.whyWrong[chosen];
    var art = q.sign && window.SIGNS ? window.SIGNS[q.sign] : null;
    return '<div class="review__item">' +
      (art ? '<div class="review__sign">' + art + '</div>' : '') +
      '<p class="review__q">' + esc(text.q) + '</p>' +
      (chosen === null ? '' :
        '<p class="review__line review__line--bad">✗ ' + esc(text.choices[chosen]) + '</p>' +
        (why ? '<p class="review__line">' + esc(pick(why)) + '</p>' : '')) +
      '<p class="review__line review__line--good">✓ ' + esc(text.choices[q.answer]) + '</p>' +
      '<p class="review__line">' + esc(pick(q.rationale)) + '</p>' +
      '<p class="review__ref">' + esc(t('refLine', q.ref.page, pick(q.ref.section))) + '</p>' +
      '</div>';
  }

  /* ── events ──────────────────────────────────────────────────────────── */

  function bind() {
    document.querySelectorAll('[data-size]').forEach(function (b) {
      b.addEventListener('click', function () {
        Store.setSize(Number(b.dataset.size));
        applyPrefs();
      });
    });

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        Store.setLang(b.dataset.lang);
        applyPrefs();
        // Re-render whatever is on screen so the switch takes effect in place,
        // without losing the current answer.
        if (!$('screen-quiz').hidden) renderQuestion();
        else if (!$('screen-results').hidden) finish();
        else renderHome();
      });
    });

    document.querySelectorAll('.mode').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.dataset.mode === 'official') {
          var picker = $('official-picker');
          picker.hidden = !picker.hidden;
          return;
        }
        start(b.dataset.mode);
      });
    });

    document.querySelectorAll('.official-btn').forEach(function (b) {
      b.addEventListener('click', function () { start('official', Number(b.dataset.official)); });
    });

    $('next-btn').addEventListener('click', function () {
      if (S.answers[S.index] === null) return;
      if (S.index === S.items.length - 1) { finish(); return; }
      S.index++;
      renderQuestion();
    });

    $('quit-btn').addEventListener('click', function () {
      if (confirm(t('quitConfirm'))) renderHome();
    });

    $('home-btn').addEventListener('click', renderHome);

    $('retry-wrong-btn').addEventListener('click', function () {
      var missed = S.items.filter(function (item, i) { return S.answers[i] !== item.q.answer; });
      S.items = missed.map(function (item) { return { q: item.q, order: item.order }; });
      S.answers = missed.map(function () { return null; });
      S.index = 0;
      S.cfg = { immediate: true, pass: null };
      show('quiz');
      renderQuestion();
    });

    document.querySelectorAll('[data-source]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        Store.setSource(cb.dataset.source, cb.checked);
        renderHome();   // re-render so a forced-on fallback shows up immediately
      });
    });

    $('reset-btn').addEventListener('click', function () {
      if (confirm(t('resetConfirm'))) { Store.reset(); renderHome(); }
    });
  }

  applyPrefs();
  bind();
  renderHome();
})();
