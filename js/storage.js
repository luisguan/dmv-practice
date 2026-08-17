/* localStorage-backed progress and preferences.
   Everything is best-effort: private browsing and full-quota devices throw on
   write, and a study app losing its stats is never a reason to break the app. */
window.Store = (function () {
  var KEY = 'ca-dmv-practice.v1';

  var DEFAULTS = {
    script: 'hant',
    size: 1,
    // id -> { seen, wrong, streak }  streak = consecutive correct answers
    stats: {}
  };

  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return clone(DEFAULTS);
      var parsed = JSON.parse(raw);
      return {
        script: parsed.script === 'hans' ? 'hans' : 'hant',
        size: [1, 2, 3].indexOf(parsed.size) >= 0 ? parsed.size : 1,
        stats: parsed.stats && typeof parsed.stats === 'object' ? parsed.stats : {}
      };
    } catch (e) {
      return clone(DEFAULTS);
    }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function entry(id) {
    if (!state.stats[id]) state.stats[id] = { seen: 0, wrong: 0, streak: 0 };
    return state.stats[id];
  }

  return {
    getScript: function () { return state.script; },
    setScript: function (s) { state.script = (s === 'hans' ? 'hans' : 'hant'); save(); },

    getSize: function () { return state.size; },
    setSize: function (n) { state.size = n; save(); },

    /* Two consecutive correct answers retires a question from the wrong-answer
       book -- one lucky guess shouldn't clear it. */
    record: function (id, correct) {
      var e = entry(id);
      e.seen++;
      if (correct) { e.streak++; } else { e.wrong++; e.streak = 0; }
      save();
    },

    /* Missed at least once, and not yet answered right twice in a row. */
    isInWrongBook: function (id) {
      var e = state.stats[id];
      return !!e && e.wrong > 0 && e.streak < 2;
    },

    wrongBookIds: function () {
      var self = this;
      return Object.keys(state.stats).filter(function (id) { return self.isInWrongBook(id); });
    },

    summary: function () {
      var ids = Object.keys(state.stats);
      var seen = 0, wrong = 0;
      ids.forEach(function (id) {
        seen += state.stats[id].seen;
        wrong += state.stats[id].wrong;
      });
      return {
        answered: seen,
        accuracy: seen ? Math.round(((seen - wrong) / seen) * 100) : 0,
        wrongCount: this.wrongBookIds().length
      };
    },

    reset: function () {
      state.stats = {};
      save();
    }
  };
})();
