/* Data-integrity checks for the question bank.
   Open tools/validate.html in a browser to run. No build tooling required.

   The failure this is really guarding against: `answer` drifting out of sync
   with a reordered choices array, which silently teaches the wrong rule. */
window.validateBank = function () {
  var bank = window.QUESTION_BANK || [];
  var errors = [];
  var warnings = [];
  var seenIds = {};
  var seenText = {};

  function err(id, msg) { errors.push(id + ': ' + msg); }
  function warn(id, msg) { warnings.push(id + ': ' + msg); }

  bank.forEach(function (q, i) {
    var id = q.id || ('[index ' + i + ']');

    if (!q.id) err(id, 'missing id');
    if (seenIds[q.id]) err(id, 'duplicate id');
    seenIds[q.id] = true;

    if (['official', 'handbook', 'provided'].indexOf(q.source) < 0) err(id, 'bad source: ' + q.source);
    if (q.source === 'official' && (!q.test || !q.num)) err(id, 'official question missing test/num');

    ['hant', 'hans', 'en'].forEach(function (s) {
      if (!q[s]) { err(id, 'missing ' + s); return; }
      if (!q[s].q || !q[s].q.trim()) err(id, s + '.q is empty');
      if (!Array.isArray(q[s].choices)) { err(id, s + '.choices is not an array'); return; }
      if (q[s].choices.length < 2) err(id, s + '.choices has fewer than 2 entries');
      q[s].choices.forEach(function (c, ci) {
        if (!c || !String(c).trim()) err(id, s + '.choices[' + ci + '] is empty');
      });
    });

    // All three languages must list the choices in the same order and count,
    // because a single `answer` index is shared across them.
    ['hans', 'en'].forEach(function (other) {
      if (q.hant && q[other] && Array.isArray(q.hant.choices) && Array.isArray(q[other].choices) &&
          q.hant.choices.length !== q[other].choices.length) {
        err(id, 'hant/' + other + ' choice counts differ (' +
                q.hant.choices.length + ' vs ' + q[other].choices.length + ')');
      }
    });

    var n = q.hant && Array.isArray(q.hant.choices) ? q.hant.choices.length : 0;
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= n) {
      err(id, 'answer index ' + q.answer + ' out of range (0-' + (n - 1) + ')');
    }

    if (!q.rationale || !q.rationale.hant || !q.rationale.hans || !q.rationale.en) err(id, 'rationale missing a language');

    if (!Array.isArray(q.whyWrong)) {
      err(id, 'whyWrong is not an array');
    } else {
      if (q.whyWrong.length !== n) {
        err(id, 'whyWrong has ' + q.whyWrong.length + ' entries but there are ' + n + ' choices');
      }
      q.whyWrong.forEach(function (w, wi) {
        if (wi === q.answer) {
          if (w !== null) err(id, 'whyWrong[' + wi + '] should be null (it is the answer)');
        } else if (q.source === 'provided') {
          // The provided bank carries a rationale and a citation but no
          // per-distractor explanation; renderFeedback() handles a null.
          if (w !== null && (!w.hant || !w.hans || !w.en)) err(id, 'whyWrong[' + wi + '] partly filled');
        } else if (!w || !w.hant || !w.hans || !w.en) {
          err(id, 'whyWrong[' + wi + '] missing a language');
        }
      });
    }

    if (!q.ref || typeof q.ref.page !== 'number') err(id, 'ref.page missing or not a number');
    else if (q.ref.page < 1 || q.ref.page > 92) err(id, 'ref.page ' + q.ref.page + ' outside 1-92');
    if (!q.ref || !q.ref.section || !q.ref.section.hant || !q.ref.section.hans || !q.ref.section.en) {
      err(id, 'ref.section missing a language');
    }

    if (q.sign && !(window.SIGNS && window.SIGNS[q.sign])) {
      err(id, 'sign "' + q.sign + '" is not defined in window.SIGNS');
    }

    if (q.dupeOf && !bank.some(function (o) { return o.id === q.dupeOf; })) {
      err(id, 'dupeOf points at unknown id ' + q.dupeOf);
    }

    // A genuine duplicate is the same stem AND the same choices -- that would
    // let the shuffled pool ask one question twice in a single run. DMV does
    // reuse a stem with different choices (see official-t2-q9 / t3-q2), which
    // is two distinct questions, so the choices have to be part of the key.
    if (q.hant && q.hant.q && Array.isArray(q.hant.choices)) {
      var key = (q.hant.q + '|' + q.hant.choices.slice().sort().join('|')).replace(/\s+/g, '');
      if (seenText[key] && !q.dupeOf && !bank.some(function (o) { return o.dupeOf === q.id; })) {
        warn(id, 'question text repeats ' + seenText[key] + ' but neither is marked dupeOf');
      }
      if (!seenText[key]) seenText[key] = q.id;
    }
  });

  // EN() called with an id that matches nothing means an overlay entry that
  // silently did nothing -- that question would render blank in English.
  (window.__enOrphans || []).forEach(function (id) {
    errors.push('[en overlay] EN("' + id + '") does not match any question id');
  });

  var pool = bank.filter(function (q) { return !q.dupeOf; });
  if (pool.length < 46) {
    err('[bank]', 'only ' + pool.length + ' unique questions; a 46-question mock exam needs 46');
  }

  return {
    total: bank.length,
    pool: pool.length,
    official: bank.filter(function (q) { return q.source === 'official'; }).length,
    handbook: bank.filter(function (q) { return q.source === 'handbook'; }).length,
    provided: bank.filter(function (q) { return q.source === 'provided'; }).length,
    signs: bank.filter(function (q) { return !!q.sign; }).length,
    errors: errors,
    warnings: warnings
  };
};
