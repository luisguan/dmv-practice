/* UI strings in both Chinese scripts.
   Question text lives in data/questions.js -- this file is chrome only. */
window.I18N = {
  hant: {
    appTitle: '加州駕駛筆試練習',
    home: '主頁', quiz: '答題', results: '成績',

    statAnswered: '已練習', statAccuracy: '答對率', statWrong: '錯題',

    modeExam46: '模擬考試',
    modeExam46Desc: '46 題，答對 38 題及格。與正式筆試相同。',
    modeExam18: '續期模擬',
    modeExam18Desc: '18 題，答對 15 題及格。適用於換領駕照。',
    modePractice: '練習模式',
    modePracticeDesc: '每題立即講解，答錯會說明原因。',
    modeWrong: '錯題本',
    modeWrongDesc: '只練習做錯過的題目。連續答對兩次便移除。',
    modeOfficial: '官方樣題',
    modeOfficialDesc: 'DMV 網站公佈的四份樣本試題，原文照錄。',
    officialTest: '樣題',

    resetProgress: '清除學習紀錄',
    resetConfirm: '確定要清除所有學習紀錄嗎？此動作無法復原。',
    disclaimer: '非官方學習工具。答案與解釋均依據《加州駕駛員手冊》（中文版）編寫並標明頁碼，方便查證。正式規定以 DMV 公佈者為準。',

    counter: (i, n) => `第 ${i} 題 / 共 ${n} 題`,
    scoreSoFar: (c, t) => `答對 ${c} / ${t}`,
    sourceOfficial: (n) => `DMV 官方樣題 ${n}`,
    sourceHandbook: '依據《加州駕駛員手冊》',

    yourAnswer: '您的選擇不正確',
    correctAnswer: '正確答案',
    refLine: (p, s) => `《加州駕駛員手冊》第 ${p} 頁 · ${s}`,

    next: '下一題', finish: '完成', seeResults: '查看成績',
    quitConfirm: '離開這次練習嗎？進度不會保留。',

    pass: '及格', fail: '未及格',
    scoreLine: (c, t) => `${c} / ${t}`,
    passNote: (need, t) => `及格線：答對 ${need} / ${t} 題`,
    reviewTitle: '需要複習的題目',
    reviewAllRight: '全部答對，沒有需要複習的題目。',
    retryWrong: '重做這些錯題',
    backHome: '返回主頁',

    emptyWrongBook: '錯題本是空的。先做幾題練習吧。',
    noQuestions: '沒有可用的題目。'
  },

  hans: {
    appTitle: '加州驾驶笔试练习',
    home: '主页', quiz: '答题', results: '成绩',

    statAnswered: '已练习', statAccuracy: '答对率', statWrong: '错题',

    modeExam46: '模拟考试',
    modeExam46Desc: '46 题，答对 38 题及格。与正式笔试相同。',
    modeExam18: '续期模拟',
    modeExam18Desc: '18 题，答对 15 题及格。适用于换领驾照。',
    modePractice: '练习模式',
    modePracticeDesc: '每题立即讲解，答错会说明原因。',
    modeWrong: '错题本',
    modeWrongDesc: '只练习做错过的题目。连续答对两次就移除。',
    modeOfficial: '官方样题',
    modeOfficialDesc: 'DMV 网站公布的四份样本试题，原文照录。',
    officialTest: '样题',

    resetProgress: '清除学习记录',
    resetConfirm: '确定要清除所有学习记录吗？此操作无法撤销。',
    disclaimer: '非官方学习工具。答案与解释均依据《加州驾驶员手册》（中文版）编写并标明页码，方便查证。正式规定以 DMV 公布者为准。',

    counter: (i, n) => `第 ${i} 题 / 共 ${n} 题`,
    scoreSoFar: (c, t) => `答对 ${c} / ${t}`,
    sourceOfficial: (n) => `DMV 官方样题 ${n}`,
    sourceHandbook: '依据《加州驾驶员手册》',

    yourAnswer: '您的选择不正确',
    correctAnswer: '正确答案',
    refLine: (p, s) => `《加州驾驶员手册》第 ${p} 页 · ${s}`,

    next: '下一题', finish: '完成', seeResults: '查看成绩',
    quitConfirm: '离开这次练习吗？进度不会保留。',

    pass: '及格', fail: '未及格',
    scoreLine: (c, t) => `${c} / ${t}`,
    passNote: (need, t) => `及格线：答对 ${need} / ${t} 题`,
    reviewTitle: '需要复习的题目',
    reviewAllRight: '全部答对，没有需要复习的题目。',
    retryWrong: '重做这些错题',
    backHome: '返回主页',

    emptyWrongBook: '错题本是空的。先做几题练习吧。',
    noQuestions: '没有可用的题目。'
  },

  en: {
    appTitle: 'California DMV Practice Test',
    home: 'Home', quiz: 'Question', results: 'Results',

    statAnswered: 'Answered', statAccuracy: 'Correct', statWrong: 'To review',

    modeExam46: 'Mock exam',
    modeExam46Desc: '46 questions, 38 correct to pass. Same format as the real test.',
    modeExam18: 'Renewal exam',
    modeExam18Desc: '18 questions, 15 correct to pass. For licence renewal.',
    modePractice: 'Practice',
    modePracticeDesc: 'Every question explained as you go, with the reason wrong answers are wrong.',
    modeWrong: 'Review missed',
    modeWrongDesc: 'Only questions you got wrong. They drop off after two correct answers in a row.',
    modeOfficial: 'Official samples',
    modeOfficialDesc: 'The four sample tests published by DMV, word for word.',
    officialTest: 'Test',

    resetProgress: 'Clear study history',
    resetConfirm: 'Clear all study history? This cannot be undone.',
    disclaimer: 'Unofficial study aid. Answers and explanations are drawn from the California Driver’s Handbook and cite a page number so you can check them. DMV’s published rules are the authority.',

    counter: (i, n) => `Question ${i} of ${n}`,
    scoreSoFar: (c, t) => `${c} of ${t} correct`,
    sourceOfficial: (n) => `DMV official sample test ${n}`,
    sourceHandbook: 'From the California Driver’s Handbook',

    yourAnswer: 'Your answer is not correct',
    correctAnswer: 'Correct answer',
    refLine: (p, s) => `California Driver’s Handbook, p. ${p} · ${s}`,

    next: 'Next question', finish: 'Finish', seeResults: 'See results',
    quitConfirm: 'Leave this session? Your progress in it will not be saved.',

    pass: 'Pass', fail: 'Not a pass',
    scoreLine: (c, t) => `${c} / ${t}`,
    passNote: (need, t) => `Passing score: ${need} of ${t} correct`,
    reviewTitle: 'Questions to review',
    reviewAllRight: 'All correct — nothing to review.',
    retryWrong: 'Retry these questions',
    backHome: 'Back to home',

    emptyWrongBook: 'Nothing to review yet. Answer some practice questions first.',
    noQuestions: 'No questions available.'
  }
};
