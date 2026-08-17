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
     answer    index into hant.choices / hans.choices
     ref       { page, section }  page = PRINTED page number in the Chinese
               handbook (the number shown on the page itself)
     hant/hans { q, choices[] }
     rationale why the correct answer is correct
     whyWrong  one entry per choice, null at the answer index
*/
window.QUESTION_BANK = [];
window.Q = function (question) { window.QUESTION_BANK.push(question); };
