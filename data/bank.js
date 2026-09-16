/* Question bank bootstrap.
   Each data/*.js file that follows pushes its questions onto this array via
   Q(). Splitting the bank across files keeps any single file editable by hand.

   Shape of a question:
     id        unique slug
     source    'official' (DMV sample test, wording verbatim) | 'handbook'
     test/num  official only -- which sample test, and position in it
     dupeOf    official only -- this question repeats an earlier one, so it is
               shown inside its sample test but kept out of the shuffled pool
     topic     coarse subject tag
     answer    index into hant.choices / hans.choices / en.choices
     ref       { page, section }  page = PRINTED page number, which is the same
               in the English and Chinese handbooks (verified against both)
     hant/hans/en  { q, choices[] }
     rationale why the correct answer is correct
     whyWrong  one entry per choice, null at the answer index

   Chinese is authored inline with each question. English arrives afterwards via
   EN(), from the data/en-*.js overlays -- keeping it separate means editing the
   English can never disturb the verbatim Chinese, and every question is
   guaranteed to have all three languages in the same choice order.
*/
window.QUESTION_BANK = [];
window.Q = function (question) { window.QUESTION_BANK.push(question); };

/* Compact form for the user-provided bank (source 'provided').

   Those questions arrive with an answer already attached, which this project
   verified against the handbook, so they carry a `rationale` and a page
   citation but no per-distractor `whyWrong` -- writing three languages of
   explanation for every distractor of ~190 questions buys little when many of
   them restate a rule another question already covers. renderFeedback() and
   the validator both treat whyWrong as optional for this source.

   P({ id, topic, page, sec:[hant,hans,en], answer,
       hant:[q, ...choices], hans:[...], en:[...],
       why:[hant, hans, en], sign:'<key into window.SIGNS>' })              */
window.P = function (d) {
  window.QUESTION_BANK.push({
    id: d.id, source: 'provided', topic: d.topic, answer: d.answer, sign: d.sign || null,
    ref: { page: d.page, section: { hant: d.sec[0], hans: d.sec[1], en: d.sec[2] } },
    hant: { q: d.hant[0], choices: d.hant.slice(1) },
    hans: { q: d.hans[0], choices: d.hans.slice(1) },
    en:   { q: d.en[0],   choices: d.en.slice(1) },
    rationale: { hant: d.why[0], hans: d.why[1], en: d.why[2] },
    whyWrong: d.hant.slice(1).map(function () { return null; })
  });
};

/* Attach the English rendering of one question. `whyWrong` here is a flat array
   of strings aligned with the existing choices, null at the answer index. */
window.EN = function (id, en) {
  var q = window.QUESTION_BANK.filter(function (x) { return x.id === id; })[0];
  if (!q) { (window.__enOrphans = window.__enOrphans || []).push(id); return; }
  q.en = { q: en.q, choices: en.choices };
  q.rationale.en = en.rationale;
  q.ref.section.en = en.section;
  (en.whyWrong || []).forEach(function (w, i) {
    if (q.whyWrong[i] && w) q.whyWrong[i].en = w;
  });
};
