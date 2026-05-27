// ===================================================================
// Manabi — 일본어 학습 플랫폼
// ===================================================================

// 레슨 정의 (행 단위)
function buildLessons(prefix, scriptName, data) {
  const rows = [
    { id: 0, title: 'あ행', sub: '모음 5자' },
    { id: 1, title: 'か행', sub: 'k 시작 5자' },
    { id: 2, title: 'さ행', sub: 's 시작 5자' },
    { id: 3, title: 'た행', sub: 't 시작 5자' },
    { id: 4, title: 'な행', sub: 'n 시작 5자' },
    { id: 5, title: 'は행', sub: 'h 시작 5자' },
    { id: 6, title: 'ま행', sub: 'm 시작 5자' },
    { id: 7, title: 'や행', sub: '반모음 3자' },
    { id: 8, title: 'ら행', sub: 'r 시작 5자' },
    { id: 9, title: 'わ/ん', sub: '마지막 3자' }
  ];
  return rows.map((r, i) => {
    const slice = data.slice(i * 5, i * 5 + 5).filter(([c]) => c);
    // 마지막 레슨: わ + を + ん 묶기
    if (i === 9) {
      const wo = data[49];
      const n = data[50];
      const chars = [data[45], wo, n].filter(p => p && p[0]);
      return { ...r, key: `${prefix}-${r.id}`, script: scriptName, chars };
    }
    return { ...r, key: `${prefix}-${r.id}`, script: scriptName, chars: slice };
  });
}

const HIRA_LESSONS = buildLessons('hira', 'hira', hiraganaData);
const KATA_LESSONS = buildLessons('kata', 'kata', katakanaData);
const ALL_LESSONS = [...HIRA_LESSONS, ...KATA_LESSONS];

const PAGE_TITLES = {
  dashboard: '대시보드',
  hiragana: '히라가나',
  katakana: '가타카나',
  lesson: '레슨',
  greetings: '기본 표현',
  numbers: '숫자',
  quiz: '퀴즈',
  stats: '통계',
  kanji: '한자 (N5)',
  chat: 'AI 회화'
};

// ============= 상태 (localStorage) =============
const STATE_KEY = 'nihongo-lab-state-v2';
const LEGACY_KEY = 'nihongo-lab-state';

const defaultState = {
  // 글자별 마스터리: { 'あ': { seen: false, correct: 0, wrong: 0 } }
  mastery: {},
  // 레슨 완료: { 'hira-0': true, ... }
  lessons: {},
  // 인사/숫자 노출
  greetingClicks: 0,
  // 누적 퀴즈 통계
  quizScore: 0,
  quizTotal: 0,
  // 게이미피케이션
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  // 오늘 통계
  todayDate: null,
  todayLessonsDone: 0,
  todayQuizCount: 0,
  todayWeakReviewed: 0
};

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) {
      return { ...defaultState, ...JSON.parse(raw) };
    }
    // 구버전 마이그레이션
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const old = JSON.parse(legacy);
      const migrated = { ...defaultState };
      (old.learnedHira || []).forEach(c => {
        migrated.mastery[c] = { seen: true, correct: 0, wrong: 0 };
      });
      (old.learnedKata || []).forEach(c => {
        migrated.mastery[c] = { seen: true, correct: 0, wrong: 0 };
      });
      migrated.greetingClicks = old.greetingClicks || 0;
      migrated.quizScore = old.quizScore || 0;
      migrated.quizTotal = old.quizTotal || 0;
      return migrated;
    }
  } catch {}
  return { ...defaultState };
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

// ============= 유틸: 마스터리/XP/Streak =============
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function ensureToday() {
  const today = todayStr();
  if (state.todayDate !== today) {
    state.todayDate = today;
    state.todayLessonsDone = 0;
    state.todayQuizCount = 0;
    state.todayWeakReviewed = 0;
  }
}

function getMastery(char) {
  if (!state.mastery[char]) {
    state.mastery[char] = { seen: false, correct: 0, wrong: 0 };
  }
  return state.mastery[char];
}

function getMasteryLevel(char) {
  const m = state.mastery[char];
  if (!m) return 0;
  if (!m.seen && m.correct === 0) return 0;
  const total = m.correct + m.wrong;
  const acc = total > 0 ? m.correct / total : 0;
  if (m.correct >= 6 && acc >= 0.85) return 4;
  if (m.correct >= 4 && acc >= 0.75) return 3;
  if (m.correct >= 2) return 2;
  if (m.correct >= 1 || m.seen) return 1;
  return 0;
}

function markSeen(char) {
  if (!char) return;
  const m = getMastery(char);
  m.seen = true;
  saveState();
}

function recordAttempt(char, isCorrect) {
  if (!char) return;
  const m = getMastery(char);
  m.seen = true;
  if (isCorrect) m.correct++;
  else m.wrong++;
  saveState();
}

function addXP(amount) {
  state.xp += amount;
  saveState();
}

function getLevel() {
  // 누적 XP 필요량: 1→100, 2→250, 3→500, 4→850, 5→1300 ...
  // 공식: 100 * level * (level + 1) / 2 (삼각수 기반)
  let lv = 1;
  while (100 * lv * (lv + 1) / 2 <= state.xp) lv++;
  return lv;
}

function xpForLevel(lv) {
  return lv <= 1 ? 0 : 100 * (lv - 1) * lv / 2;
}

function bumpStreak() {
  const today = todayStr();
  if (state.lastActiveDate === today) return;
  const yest = new Date();
  yest.setDate(yest.getDate() - 1);
  const yestStr = `${yest.getFullYear()}-${yest.getMonth() + 1}-${yest.getDate()}`;

  if (state.lastActiveDate === yestStr) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }
  state.lastActiveDate = today;
  saveState();
}

// ============= 진도 계산 =============
function totalLearnedChars() {
  return Object.values(state.mastery).filter(m => m.seen || m.correct > 0).length;
}

function masteredCount() {
  return Object.keys(state.mastery).filter(c => getMasteryLevel(c) >= 4).length;
}

function lessonCompleted(lesson) {
  return !!state.lessons[lesson.key];
}

function lessonAllSeen(lesson) {
  return lesson.chars.every(([c]) => state.mastery[c] && state.mastery[c].seen);
}

function isLessonUnlocked(lessons, idx) {
  if (idx === 0) return true;
  return lessonCompleted(lessons[idx - 1]);
}

function completedLessonCount(lessons) {
  return lessons.filter(lessonCompleted).length;
}

function findNextLesson() {
  for (const l of HIRA_LESSONS) if (!lessonCompleted(l)) return l;
  for (const l of KATA_LESSONS) if (!lessonCompleted(l)) return l;
  return null;
}

function getWeakChars(limit = 10) {
  const entries = Object.entries(state.mastery)
    .filter(([c, m]) => (m.correct + m.wrong) > 0)
    .map(([c, m]) => {
      const total = m.correct + m.wrong;
      const acc = m.correct / total;
      // 약점 점수: 오답이 많고 정답률이 낮을수록 큼
      const weakness = m.wrong * 2 + (1 - acc) * 5;
      return { char: c, acc, total, wrong: m.wrong, weakness };
    })
    .filter(e => e.acc < 1 || e.wrong > 0)
    .sort((a, b) => b.weakness - a.weakness);
  return entries.slice(0, limit);
}

// ============= 렌더: 사이드바/대시보드 =============
function updateGlobalProgress() {
  ensureToday();
  const hiraDone = completedLessonCount(HIRA_LESSONS);
  const kataDone = completedLessonCount(KATA_LESSONS);
  const hiraPct = Math.round((hiraDone / HIRA_LESSONS.length) * 100);
  const kataPct = Math.round((kataDone / KATA_LESSONS.length) * 100);
  const overall = Math.round(((hiraDone + kataDone) / (HIRA_LESSONS.length + KATA_LESSONS.length)) * 100);

  byId('overall-percent').textContent = overall + '%';
  byId('overall-fill').style.width = overall + '%';
  byId('fill-hiragana').style.width = hiraPct + '%';
  byId('fill-katakana').style.width = kataPct + '%';
  byId('course-progress-hiragana').textContent = hiraPct + '% 완료';
  byId('course-progress-katakana').textContent = kataPct + '% 완료';
  byId('completed-hira-lessons').textContent = hiraDone;
  byId('completed-kata-lessons').textContent = kataDone;

  byId('chip-learned').textContent = totalLearnedChars();
  const acc = state.quizTotal === 0
    ? '—'
    : Math.round((state.quizScore / state.quizTotal) * 100) + '%';
  byId('chip-accuracy').textContent = acc;

  // 사이드바 streak/xp
  byId('streak-days').textContent = state.streak;
  byId('user-level').textContent = getLevel();
  byId('user-xp').textContent = state.xp;

  // 오늘의 목표
  byId('goal-1').textContent = `${Math.min(state.todayLessonsDone, 1)}/1`;
  byId('goal-2').textContent = `${Math.min(state.todayQuizCount, 10)}/10`;
  const weakTotal = getWeakChars(100).length;
  byId('goal-3').textContent = weakTotal === 0
    ? '없음 ✓'
    : `${state.todayWeakReviewed}/${Math.min(weakTotal, 5)}`;

  // 퀴즈 카드 통계
  byId('quiz-stats').textContent = state.quizTotal === 0
    ? '아직 시작 전'
    : `${state.quizScore}/${state.quizTotal} 정답 (${acc})`;

  // 약점 개수
  byId('weak-count').textContent = `약점 ${weakTotal}자`;
}

// ============= 렌더: 카나 그리드 (마스터리 색상) =============
function renderKana(gridId, data) {
  const grid = byId(gridId);
  grid.innerHTML = '';
  data.forEach(([char, romaji]) => {
    const cell = document.createElement('div');
    if (!char) {
      cell.className = 'kana-cell empty';
    } else {
      const level = getMasteryLevel(char);
      cell.className = `kana-cell mastery-${level}`;
      cell.innerHTML = `
        <div class="kana-char">${char}</div>
        <div class="kana-romaji">${romaji}</div>
        ${level > 0 ? `<div class="kana-level">L${level}</div>` : ''}
      `;
      cell.addEventListener('click', () => {
        markSeen(char);
        cell.className = `kana-cell mastery-${getMasteryLevel(char)}`;
        cell.querySelector('.kana-level')?.remove();
        const lv = getMasteryLevel(char);
        if (lv > 0) {
          const tag = document.createElement('div');
          tag.className = 'kana-level';
          tag.textContent = 'L' + lv;
          cell.appendChild(tag);
        }
        updateGlobalProgress();
      });
    }
    grid.appendChild(cell);
  });
}

// 통계 페이지용 — 클릭 비활성, 마스터리만 표시
function renderKanaStats(gridId, data) {
  const grid = byId(gridId);
  grid.innerHTML = '';
  data.forEach(([char, romaji]) => {
    const cell = document.createElement('div');
    if (!char) {
      cell.className = 'kana-cell empty';
    } else {
      const level = getMasteryLevel(char);
      const m = state.mastery[char] || { correct: 0, wrong: 0 };
      const total = m.correct + m.wrong;
      const acc = total > 0 ? Math.round((m.correct / total) * 100) : null;
      cell.className = `kana-cell mastery-${level} readonly`;
      cell.innerHTML = `
        <div class="kana-char">${char}</div>
        <div class="kana-romaji">${romaji}</div>
        <div class="kana-stat">${acc === null ? '—' : acc + '%'}</div>
      `;
    }
    grid.appendChild(cell);
  });
}

// ============= 렌더: 레슨 리스트 =============
function renderLessonList(gridId, lessons) {
  const grid = byId(gridId);
  grid.innerHTML = '';
  lessons.forEach((lesson, idx) => {
    const unlocked = isLessonUnlocked(lessons, idx);
    const done = lessonCompleted(lesson);
    const card = document.createElement('button');
    card.className = 'lesson-card' + (done ? ' done' : '') + (!unlocked ? ' locked' : '');
    card.disabled = !unlocked;
    const preview = lesson.chars.map(([c]) => c).join(' ');
    card.innerHTML = `
      <div class="lesson-num">${idx + 1}</div>
      <div class="lesson-info">
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-sub">${lesson.sub}</div>
        <div class="lesson-preview">${preview}</div>
      </div>
      <div class="lesson-status-icon">${done ? '✓' : unlocked ? '→' : '🔒'}</div>
    `;
    if (unlocked) {
      card.addEventListener('click', () => openLesson(lesson));
    }
    grid.appendChild(card);
  });
}

// ============= 렌더: 레슨 상세 =============
let currentLesson = null;

function openLesson(lesson) {
  currentLesson = lesson;
  navigate('lesson');
  byId('lesson-title').textContent = `${lesson.script === 'hira' ? '히라가나' : '가타카나'} · ${lesson.title}`;
  byId('lesson-desc').textContent = `${lesson.chars.length}개 글자를 학습한 후 미니퀴즈로 점검하세요.`;

  const status = lessonCompleted(lesson) ? '완료' : (lessonAllSeen(lesson) ? '퀴즈 가능' : '학습 중');
  byId('lesson-status').textContent = status;

  // 학습 카드 렌더
  const grid = byId('lesson-cards');
  grid.innerHTML = '';
  // 5칸 채우기 위해 빈 셀 추가
  const cells = [...lesson.chars];
  while (cells.length < 5) cells.push(['', '']);
  cells.forEach(([char, romaji]) => {
    const cell = document.createElement('div');
    if (!char) {
      cell.className = 'kana-cell empty';
    } else {
      const level = getMasteryLevel(char);
      cell.className = `kana-cell mastery-${level}`;
      cell.innerHTML = `
        <div class="kana-char">${char}</div>
        <div class="kana-romaji">${romaji}</div>
      `;
      cell.addEventListener('click', () => {
        markSeen(char);
        cell.className = `kana-cell mastery-${getMasteryLevel(char)}`;
        if (lessonAllSeen(lesson) && !lessonCompleted(lesson)) {
          byId('lesson-status').textContent = '퀴즈 가능';
        }
        updateGlobalProgress();
      });
    }
    grid.appendChild(cell);
  });

  // 퀴즈 버튼 라벨
  byId('lesson-quiz-btn').textContent = lessonCompleted(lesson)
    ? '미니퀴즈 다시 풀기 →'
    : '미니퀴즈 시작 →';
}

function backFromLesson() {
  if (!currentLesson) {
    navigate('dashboard');
    return;
  }
  navigate(currentLesson.script === 'hira' ? 'hiragana' : 'katakana');
}

// ============= 인사 / 숫자 =============
function renderGreetings() {
  const list = byId('greeting-list');
  list.innerHTML = '';
  greetings.forEach(g => {
    const card = document.createElement('div');
    card.className = 'greeting-card';
    card.innerHTML = `
      <div class="greeting-jp">${g.jp}</div>
      <div class="greeting-romaji">${g.romaji}</div>
      <div class="greeting-ko">${g.ko}</div>
    `;
    card.addEventListener('click', () => {
      state.greetingClicks++;
      saveState();
      updateGlobalProgress();
    });
    list.appendChild(card);
  });
}

function renderNumbers() {
  const list = byId('number-list');
  list.innerHTML = '';
  numbers.forEach(n => {
    const card = document.createElement('div');
    card.className = 'number-card';
    card.innerHTML = `
      <div class="number-digit">${n.digit}</div>
      <div class="number-jp">${n.jp}</div>
      <div class="number-romaji">${n.romaji}</div>
    `;
    card.addEventListener('click', () => {});
    list.appendChild(card);
  });
}

// ============= 퀴즈 엔진 =============
const QUIZ_MODES = {
  kanaToRomaji: { label: '글자 → 로마자', show: 'char', options: 'romaji' },
  romajiToKana: { label: '로마자 → 글자', show: 'romaji', options: 'char' },
  weak:         { label: '약점 복습',      show: 'char',  options: 'romaji' },
  lesson:       { label: '레슨 퀴즈',      show: 'char',  options: 'romaji' }
};

let quizState = null;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildPoolForMode(mode) {
  const allKana = [...hiraganaData, ...katakanaData].filter(([c]) => c);
  if (mode === 'weak') {
    const weakSet = new Set(getWeakChars(20).map(w => w.char));
    const pool = allKana.filter(([c]) => weakSet.has(c));
    if (pool.length >= 4) return pool;
    // 약점이 부족하면 본 적 있는 글자 + 약점으로 보강
    const seen = allKana.filter(([c]) => state.mastery[c] && state.mastery[c].seen);
    return seen.length >= 4 ? seen : allKana;
  }
  // 기본/역방향/오디오: 학습한 글자가 4개 이상이면 학습한 것 위주, 아니면 전체
  const seen = allKana.filter(([c]) => state.mastery[c] && state.mastery[c].seen);
  return seen.length >= 4 ? seen : allKana;
}

function startQuizFlow(mode, options = {}) {
  const cfg = QUIZ_MODES[mode];
  if (!cfg) return;

  let pool;
  let total = options.total || 10;
  if (mode === 'lesson' && options.lesson) {
    pool = options.lesson.chars;
    total = pool.length;
  } else {
    pool = buildPoolForMode(mode);
  }

  if (pool.length < 4) {
    alert('퀴즈를 시작하려면 최소 4개 이상의 글자가 필요해요. 먼저 레슨에서 글자를 학습해주세요.');
    return;
  }

  quizState = {
    mode,
    cfg,
    pool,
    total,
    index: 0,
    correct: 0,
    wrongChars: [],
    isLesson: mode === 'lesson',
    lesson: options.lesson || null
  };

  byId('quiz-mode-grid').style.display = 'none';
  byId('quiz-summary').style.display = 'none';
  byId('quiz-box').style.display = 'block';
  byId('quiz-mode-label').textContent = cfg.label;
  byId('next-quiz').classList.remove('show');
  nextQuestion();
}

function nextQuestion() {
  const q = quizState;
  if (q.index >= q.total) return finishQuiz();
  q.index++;
  byId('quiz-progress').textContent = `${q.index} / ${q.total}`;

  const item = q.pool[Math.floor(Math.random() * q.pool.length)];
  const [char, romaji] = item;
  q.currentChar = char;
  q.currentRomaji = romaji;

  // 프롬프트 렌더
  const promptEl = byId('quiz-prompt');
  if (q.cfg.show === 'char') {
    promptEl.innerHTML = `<div class="quiz-char">${char}</div>`;
  } else if (q.cfg.show === 'romaji') {
    promptEl.innerHTML = `<div class="quiz-romaji">${romaji}</div>`;
  }

  // 옵션 4개 (정답 + 오답 3개) — 오답 풀이 부족하면 전체 카나에서 보강
  const allKana = [...hiraganaData, ...katakanaData].filter(([c]) => c);
  const wrongPool = q.pool.length >= 4 ? q.pool : allKana;
  const candidates = wrongPool.filter(([c, r]) => (q.cfg.options === 'char' ? c !== char : r !== romaji));
  const wrongs = shuffle(candidates).slice(0, 3);
  const correctOpt = q.cfg.options === 'char' ? char : romaji;
  const wrongOpts = wrongs.map(([c, r]) => q.cfg.options === 'char' ? c : r);
  const options = shuffle([correctOpt, ...wrongOpts]);

  const optionsEl = byId('quiz-options');
  optionsEl.innerHTML = '';
  optionsEl.className = 'quiz-options ' + (q.cfg.options === 'char' ? 'opt-char' : 'opt-romaji');
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => checkAnswer(btn, opt, correctOpt));
    optionsEl.appendChild(btn);
  });

  byId('quiz-result').textContent = '';
  byId('quiz-result').className = 'quiz-result';
  byId('next-quiz').classList.remove('show');
}

function checkAnswer(btn, answer, correctOpt) {
  const q = quizState;
  const isCorrect = answer === correctOpt;

  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correctOpt) b.classList.add('correct');
  });

  // 통계 갱신
  state.quizTotal++;
  state.todayQuizCount++;
  if (q.mode === 'weak') state.todayWeakReviewed++;
  if (isCorrect) {
    state.quizScore++;
    q.correct++;
    addXP(10);
  } else {
    q.wrongChars.push(q.currentChar);
    btn.classList.add('wrong');
  }
  recordAttempt(q.currentChar, isCorrect);
  bumpStreak();

  const result = byId('quiz-result');
  if (isCorrect) {
    result.textContent = '정답입니다.';
    result.className = 'quiz-result success';
  } else {
    result.textContent = `오답입니다. 정답은 "${correctOpt}"`;
    result.className = 'quiz-result fail';
  }

  saveState();
  updateGlobalProgress();
  byId('next-quiz').classList.add('show');
}

function finishQuiz() {
  const q = quizState;
  const pct = Math.round((q.correct / q.total) * 100);

  byId('quiz-box').style.display = 'none';
  byId('quiz-summary').style.display = 'block';
  byId('summary-score').textContent = `${q.correct} / ${q.total}`;
  byId('summary-pct').textContent = pct + '%';

  let msg, bonus = 0;
  if (q.isLesson) {
    if (q.correct >= Math.ceil(q.total * 0.8)) {
      // 레슨 통과
      state.lessons[q.lesson.key] = true;
      state.todayLessonsDone++;
      bonus = 50;
      addXP(bonus);
      msg = `레슨 통과 ✓ (+${bonus} XP 보너스)`;
    } else {
      msg = `정답률 80% 이상이면 레슨이 완료됩니다. 다시 시도해보세요.`;
    }
  } else {
    if (pct >= 90) msg = '완벽해요!';
    else if (pct >= 70) msg = '잘했어요. 약점 글자도 복습해보세요.';
    else if (pct >= 50) msg = '조금 더 연습이 필요해요.';
    else msg = '글자 학습부터 다시 천천히.';
  }
  byId('summary-msg').textContent = msg;
  saveState();
  updateGlobalProgress();
}

function exitQuizToModes() {
  byId('quiz-box').style.display = 'none';
  byId('quiz-summary').style.display = 'none';
  byId('quiz-mode-grid').style.display = 'grid';
}

// ============= 통계 페이지 =============
function renderStats() {
  byId('stats-streak').textContent = state.streak;
  byId('stats-level').textContent = getLevel();
  byId('stats-xp').textContent = state.xp;
  const acc = state.quizTotal === 0
    ? '—'
    : Math.round((state.quizScore / state.quizTotal) * 100) + '%';
  byId('stats-accuracy').textContent = acc;
  byId('stats-attempts').textContent = state.quizTotal;
  byId('stats-mastered').textContent = masteredCount();

  // 약점 리스트
  const weakList = byId('weak-list');
  weakList.innerHTML = '';
  const weak = getWeakChars(10);
  if (weak.length === 0) {
    weakList.innerHTML = `<div class="empty-state">아직 약점 글자가 없어요. 퀴즈를 풀면 여기에 표시됩니다.</div>`;
  } else {
    weak.forEach(w => {
      const item = document.createElement('div');
      item.className = 'weak-item';
      item.innerHTML = `
        <div class="weak-char">${w.char}</div>
        <div class="weak-stat">
          <div class="weak-acc">${Math.round(w.acc * 100)}%</div>
          <div class="weak-meta">오답 ${w.wrong}회 / 총 ${w.total}회</div>
        </div>
      `;
      item.addEventListener('click', () => {});
      weakList.appendChild(item);
    });
  }

  // 마스터리 그리드
  renderKanaStats('stats-hira-grid', hiraganaData);
  renderKanaStats('stats-kata-grid', katakanaData);
}

// ============= 네비게이션 =============
function byId(id) { return document.getElementById(id); }

function navigate(target, opts) {
  document.querySelectorAll('.side-link').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  if (opts && opts.activeLink) {
    opts.activeLink.classList.add('active');
  } else {
    const link = document.querySelector(`.side-link[data-target="${target}"]`);
    if (link) link.classList.add('active');
  }
  byId(target).classList.add('active');
  byId('crumb-current').textContent = PAGE_TITLES[target] || '';
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (target === 'stats') renderStats();
  if (target === 'hiragana') {
    renderLessonList('hira-lesson-grid', HIRA_LESSONS);
    renderKana('hiragana-grid', hiraganaData);
  }
  if (target === 'katakana') {
    renderLessonList('kata-lesson-grid', KATA_LESSONS);
    renderKana('katakana-grid', katakanaData);
  }
  if (target === 'quiz') {
    exitQuizToModes();
  }
  if (target === 'kanji') {
    setKanjiLevel(currentKanjiLevel);
  }
  if (target === 'chat' && chat.provider === 'ollama' && !chat.model) {
    fetchOllamaModels();
  }
}

function openSidebar() {
  byId('sidebar').classList.add('open');
  byId('sidebar-overlay').classList.add('show');
}

function closeSidebar() {
  byId('sidebar').classList.remove('open');
  byId('sidebar-overlay').classList.remove('show');
}

function setupNav() {
  document.querySelectorAll('.side-link').forEach(btn => {
    if (btn.classList.contains('has-sub')) return;
    btn.addEventListener('click', () => {
      const level = btn.dataset.kanjiLevel;
      if (level) {
        currentKanjiLevel = level;
      }
      navigate(btn.dataset.target, { activeLink: btn });
    });
  });
  document.querySelectorAll('[data-jump]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.jump));
  });
  byId('kanji-toggle').addEventListener('click', () => {
    byId('kanji-toggle').classList.toggle('open');
    byId('kanji-submenu').classList.toggle('open');
  });

  byId('menu-btn').addEventListener('click', openSidebar);
  byId('sidebar-overlay').addEventListener('click', closeSidebar);
  byId('lesson-back').addEventListener('click', backFromLesson);

  byId('continue-btn').addEventListener('click', () => {
    const next = findNextLesson();
    if (next) openLesson(next);
    else navigate('hiragana');
  });

  // 퀴즈 모드 카드
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => startQuizFlow(card.dataset.mode));
  });

  byId('next-quiz').addEventListener('click', nextQuestion);
  byId('quiz-exit').addEventListener('click', exitQuizToModes);
  byId('summary-retry').addEventListener('click', () => {
    const mode = quizState.mode;
    const opts = quizState.isLesson ? { lesson: quizState.lesson } : {};
    startQuizFlow(mode, opts);
  });
  byId('summary-back').addEventListener('click', () => {
    if (quizState && quizState.isLesson) {
      navigate(quizState.lesson.script === 'hira' ? 'hiragana' : 'katakana');
    } else {
      exitQuizToModes();
    }
  });

  byId('lesson-quiz-btn').addEventListener('click', () => {
    if (!currentLesson) return;
    navigate('quiz');
    startQuizFlow('lesson', { lesson: currentLesson });
  });

  byId('reset-btn').addEventListener('click', () => {
    if (confirm('학습 기록을 모두 초기화할까요? (XP/연속학습일 포함)')) {
      localStorage.removeItem(STATE_KEY);
      localStorage.removeItem(LEGACY_KEY);
      state = { ...defaultState };
      saveState();
      renderLessonList('hira-lesson-grid', HIRA_LESSONS);
      renderLessonList('kata-lesson-grid', KATA_LESSONS);
      renderKana('hiragana-grid', hiraganaData);
      renderKana('katakana-grid', katakanaData);
      updateGlobalProgress();
    }
  });
}

// ============= 한자 학습 =============
const KANJI_LEVELS = { n5: KANJI_N5, n4: KANJI_N4 };
let currentKanjiLevel = 'n5';

function getKanjiSeen() {
  const raw = localStorage.getItem('kanji-seen');
  return raw ? JSON.parse(raw) : [];
}

function markKanjiSeen(kanji) {
  const seen = getKanjiSeen();
  if (!seen.includes(kanji)) {
    seen.push(kanji);
    localStorage.setItem('kanji-seen', JSON.stringify(seen));
  }
}

function setKanjiLevel(level) {
  currentKanjiLevel = level;
  const data = KANJI_LEVELS[level];
  const label = level.toUpperCase();
  byId('kanji-page-title').textContent = `한자 漢字 · JLPT ${label}`;
  byId('kanji-page-desc').textContent = `JLPT ${label} 필수 한자 ${data.length}자. 카드를 클릭해 상세 정보를 확인하세요.`;
  byId('kanji-total-count').textContent = data.length;
  byId('kanji-search').value = '';
  renderKanjiGrid();
}

function renderKanjiGrid(filter = '') {
  const grid = byId('kanji-grid');
  grid.innerHTML = '';
  const seen = getKanjiSeen();
  const data = KANJI_LEVELS[currentKanjiLevel];
  const q = filter.toLowerCase();

  let count = 0;
  data.forEach(k => {
    if (q && !k.kanji.includes(q)
      && !k.meaning.includes(q)
      && !k.onyomi.join('').includes(q)
      && !k.kunyomi.join('').includes(q)) return;

    const card = document.createElement('div');
    const isSeen = seen.includes(k.kanji);
    card.className = 'kanji-card' + (isSeen ? ' seen' : '');
    card.innerHTML = `
      <div class="kanji-card-char">${k.kanji}</div>
      <div class="kanji-card-meaning">${k.meaning.split(',')[0]}</div>
    `;
    card.addEventListener('click', () => openKanjiModal(k));
    grid.appendChild(card);
    if (isSeen) count++;
  });
  byId('kanji-learned-count').textContent = count;
}

function openKanjiModal(k) {
  markKanjiSeen(k.kanji);

  byId('km-char').textContent = k.kanji;
  byId('km-meaning').textContent = k.meaning;
  byId('km-onyomi').textContent = k.onyomi.length ? k.onyomi.join('、') : '—';
  byId('km-kunyomi').textContent = k.kunyomi.length ? k.kunyomi.join('、') : '—';

  const wordsList = byId('km-words');
  wordsList.innerHTML = '';
  k.words.forEach(w => {
    const item = document.createElement('div');
    item.className = 'km-word-item';
    item.innerHTML = `
      <div class="km-word-jp"><ruby>${w.word}<rt>${w.reading}</rt></ruby></div>
      <div class="km-word-meaning">${w.meaning}</div>
    `;
    wordsList.appendChild(item);
  });

  byId('kanji-modal').style.display = 'flex';
  renderKanjiGrid(byId('kanji-search').value);
}

function setupKanji() {
  byId('kanji-modal-close').addEventListener('click', () => {
    byId('kanji-modal').style.display = 'none';
  });
  byId('kanji-modal').addEventListener('click', e => {
    if (e.target === byId('kanji-modal')) {
      byId('kanji-modal').style.display = 'none';
    }
  });
  byId('kanji-search').addEventListener('input', e => {
    renderKanjiGrid(e.target.value.trim());
  });
}

// ============= AI 회화 =============
const SYSTEM_PROMPT = `あなたは日本語の会話の先生です。
- 学習者は韓国語話者で、日本語の初心者です。
- やさしい日本語で話してください。
- 各返答に韓国語の翻訳を括弧で添えてください。
- 文法や表現の間違いがあれば、優しく訂正してください。
- 漢字を使う場合は必ず直後に丸括弧でふりがなを付けてください。例：日本語(にほんご)、食(た)べる、美(うつく)しい`;

const PROVIDER_MODELS = {
  ollama: [],
  openai: ['gpt-4o', 'gpt-4o-mini'],
  gemini: ['gemini-2.5-flash', 'gemini-2.5-pro'],
  claude: ['claude-sonnet-4-6', 'claude-haiku-4-5']
};

const chat = {
  provider: 'ollama',
  model: '',
  apiKeys: {},
  messages: [],
  isStreaming: false,
  controller: null
};

function setStatus(state, text) {
  const dot = byId('status-dot');
  const txt = byId('status-text');
  dot.className = 'status-dot' + (state === 'online' ? ' online' : state === 'error' ? ' error' : '');
  txt.textContent = text;
}

function updateModelTag() {
  const tag = byId('chat-model-tag');
  if (chat.model) {
    const pName = { ollama: 'Ollama', openai: 'OpenAI', gemini: 'Gemini', claude: 'Claude' }[chat.provider];
    tag.textContent = `${pName} · ${chat.model}`;
  } else {
    tag.textContent = '';
  }
}

let keyVerified = { ollama: false, openai: false, gemini: false, claude: false };
let verifyTimer = null;

function updateChatReady() {
  const needsKey = chat.provider !== 'ollama';
  const hasKey = !needsKey || !!chat.apiKeys[chat.provider];
  const verified = !needsKey ? keyVerified.ollama : keyVerified[chat.provider];
  const ready = hasKey && !!chat.model && verified;
  byId('chat-input').disabled = !ready;
  byId('chat-send').disabled = !ready;
  if (!chat.model) setStatus('', '모델을 선택하세요');
  else if (!hasKey) setStatus('', 'API 키를 입력하세요');
  else if (!verified) setStatus('', '키 검증 필요');
  else setStatus('online', '준비됨');
}

async function verifyApiKey(provider, key) {
  try {
    setStatus('', '키 검증 중...');
    if (provider === 'openai') {
      const res = await fetch('https://api.openai.com/v1/models', {
        headers: { 'Authorization': `Bearer ${key}` }
      });
      if (!res.ok) throw new Error();
    } else if (provider === 'gemini') {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
      if (!res.ok) throw new Error();
    } else if (provider === 'claude') {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5',
          messages: [{ role: 'user', content: 'hi' }],
          max_tokens: 1
        })
      });
      if (res.status === 401 || res.status === 403) throw new Error();
    }
    keyVerified[provider] = true;
    updateChatReady();
  } catch {
    keyVerified[provider] = false;
    setStatus('error', 'API 키가 유효하지 않습니다');
  }
}

function populateModels(models) {
  const sel = byId('model-select');
  sel.innerHTML = '';
  if (models.length === 0) {
    sel.innerHTML = '<option value="">모델 없음</option>';
    return;
  }
  models.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    sel.appendChild(opt);
  });
  chat.model = models[0];
  sel.value = models[0];
  updateModelTag();
  updateChatReady();
}

async function fetchOllamaModels() {
  try {
    const res = await fetch('http://localhost:11434/api/tags');
    if (!res.ok) throw new Error();
    const data = await res.json();
    const names = (data.models || []).map(m => m.name);
    if (names.length === 0) {
      setStatus('error', 'Ollama에 설치된 모델 없음');
      populateModels([]);
      return;
    }
    keyVerified.ollama = true;
    populateModels(names);
    setStatus('online', '준비됨');
  } catch {
    keyVerified.ollama = false;
    setStatus('error', 'Ollama 연결 실패 — ollama serve 실행 필요');
    populateModels([]);
  }
}

function onProviderChange() {
  const provider = byId('provider-select').value;
  chat.provider = provider;
  chat.model = '';

  const needsKey = provider !== 'ollama';
  byId('apikey-row').style.display = needsKey ? 'block' : 'none';
  byId('apikey-input').value = chat.apiKeys[provider] || '';

  if (provider === 'ollama') {
    fetchOllamaModels();
  } else {
    populateModels(PROVIDER_MODELS[provider]);
    if (chat.apiKeys[provider] && !keyVerified[provider]) {
      verifyApiKey(provider, chat.apiKeys[provider]);
    }
  }
  updateChatReady();
}

// --- streaming per provider ---

async function streamOllama(messages, onChunk, signal) {
  const res = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: chat.model,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      stream: true
    }),
    signal
  });
  if (!res.ok) throw new Error(`Ollama 오류 (${res.status})`);
  await readStream(res, line => {
    const d = JSON.parse(line);
    if (d.message?.content) onChunk(d.message.content);
  });
}

async function streamOpenAI(messages, onChunk, signal) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${chat.apiKeys.openai}`
    },
    body: JSON.stringify({
      model: chat.model,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      stream: true
    }),
    signal
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI 오류 (${res.status}): ${err}`);
  }
  await readSSE(res, payload => {
    if (payload === '[DONE]') return;
    const d = JSON.parse(payload);
    const delta = d.choices?.[0]?.delta?.content;
    if (delta) onChunk(delta);
  });
}

async function streamGemini(messages, onChunk, signal) {
  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${chat.model}:streamGenerateContent?key=${chat.apiKeys.gemini}&alt=sse`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents
    }),
    signal
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini 오류 (${res.status}): ${err}`);
  }
  await readSSE(res, payload => {
    const d = JSON.parse(payload);
    const text = d.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) onChunk(text);
  });
}

async function streamClaude(messages, onChunk, signal) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': chat.apiKeys.claude,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: chat.model,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
      max_tokens: 1024
    }),
    signal
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude 오류 (${res.status}): ${err}`);
  }
  await readSSE(res, payload => {
    const d = JSON.parse(payload);
    if (d.type === 'content_block_delta' && d.delta?.text) {
      onChunk(d.delta.text);
    }
  });
}

async function readStream(res, onLine) {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const l of lines) {
      if (l.trim()) onLine(l);
    }
  }
  if (buf.trim()) onLine(buf);
}

async function readSSE(res, onData) {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const l of lines) {
      if (l.startsWith('data: ')) {
        onData(l.slice(6));
      }
    }
  }
}

const STREAM_FN = { ollama: streamOllama, openai: streamOpenAI, gemini: streamGemini, claude: streamClaude };

function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}

function renderFurigana(text) {
  const escaped = escapeHtml(text);
  return escaped.replace(/([一-龯㐀-䶿]+)[（(]([ぁ-ゟー]+)[）)]/g, '<ruby>$1<rt>$2</rt></ruby>');
}

function appendMsg(role, content) {
  const area = byId('chat-messages');
  const welcome = area.querySelector('.chat-welcome');
  if (welcome) welcome.remove();

  const wrap = document.createElement('div');
  wrap.className = `chat-msg ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'chat-msg-avatar';
  avatar.textContent = role === 'user' ? 'You' : 'AI';

  const body = document.createElement('div');
  body.className = 'chat-msg-body';

  const bubble = document.createElement('div');
  bubble.className = 'chat-msg-content';
  bubble.textContent = content;

  body.appendChild(bubble);
  wrap.appendChild(avatar);
  wrap.appendChild(body);
  area.appendChild(wrap);
  area.scrollTop = area.scrollHeight;
  return bubble;
}

function appendError(msg) {
  const area = byId('chat-messages');
  const el = document.createElement('div');
  el.className = 'chat-error';
  el.textContent = msg;
  area.appendChild(el);
  area.scrollTop = area.scrollHeight;
}

async function sendMessage() {
  const input = byId('chat-input');
  const text = input.value.trim();
  if (!text || chat.isStreaming) return;

  input.value = '';
  input.style.height = 'auto';
  chat.messages.push({ role: 'user', content: text });
  appendMsg('user', text);

  chat.isStreaming = true;
  chat.controller = new AbortController();
  byId('chat-send').textContent = '중지';
  setStatus('online', '응답 중...');

  const bubble = appendMsg('assistant', '');
  const cursor = document.createElement('span');
  cursor.className = 'streaming-cursor';
  bubble.appendChild(cursor);

  let fullResponse = '';
  const fn = STREAM_FN[chat.provider];

  try {
    await fn(chat.messages, chunk => {
      fullResponse += chunk;
      bubble.textContent = fullResponse;
      bubble.appendChild(cursor);
      byId('chat-messages').scrollTop = byId('chat-messages').scrollHeight;
    }, chat.controller.signal);
  } catch (e) {
    if (e.name === 'AbortError') {
      if (!fullResponse) {
        bubble.closest('.chat-msg').remove();
      }
    } else {
      bubble.closest('.chat-msg').remove();
      appendError(e.message);
    }
  }

  cursor.remove();
  if (fullResponse) {
    bubble.innerHTML = renderFurigana(fullResponse);
  }
  if (fullResponse) {
    chat.messages.push({ role: 'assistant', content: fullResponse });
  }
  chat.isStreaming = false;
  chat.controller = null;
  byId('chat-send').textContent = '전송';
  updateChatReady();
}

function clearChat() {
  chat.messages = [];
  const area = byId('chat-messages');
  area.innerHTML = `
    <div class="chat-welcome">
      <div class="chat-welcome-title">AI 선생님과 일본어로 대화해보세요</div>
      <div class="chat-welcome-sub">위의 설정에서 프로바이더와 모델을 선택한 후 대화를 시작하세요.</div>
    </div>`;
}

function setupChat() {
  byId('provider-select').addEventListener('change', onProviderChange);

  byId('apikey-input').addEventListener('input', e => {
    const key = e.target.value.trim();
    chat.apiKeys[chat.provider] = key;
    keyVerified[chat.provider] = false;
    updateChatReady();
    clearTimeout(verifyTimer);
    if (key) {
      verifyTimer = setTimeout(() => verifyApiKey(chat.provider, key), 600);
    }
  });

  byId('apikey-eye').addEventListener('click', () => {
    const inp = byId('apikey-input');
    const btn = byId('apikey-eye');
    if (inp.type === 'password') {
      inp.type = 'text';
      btn.textContent = '숨기기';
    } else {
      inp.type = 'password';
      btn.textContent = '보기';
    }
  });

  byId('model-select').addEventListener('change', e => {
    chat.model = e.target.value;
    updateModelTag();
    updateChatReady();
  });

  byId('chat-settings-toggle').addEventListener('click', () => {
    const panel = byId('chat-settings');
    panel.classList.toggle('open');
    byId('chat-settings-toggle').textContent = panel.classList.contains('open') ? '설정 ▴' : '설정 ▾';
  });

  byId('chat-send').addEventListener('click', () => {
    if (chat.isStreaming) {
      chat.controller?.abort();
    } else {
      sendMessage();
    }
  });

  const input = byId('chat-input');
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!chat.isStreaming) sendMessage();
    }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  });

  byId('chat-clear').addEventListener('click', () => {
    if (chat.messages.length > 0 && confirm('대화 내용을 초기화할까요?')) {
      clearChat();
    }
  });
}

// ============= 초기화 =============
window.addEventListener('DOMContentLoaded', () => {
  ensureToday();
  renderKana('hiragana-grid', hiraganaData);
  renderKana('katakana-grid', katakanaData);
  renderLessonList('hira-lesson-grid', HIRA_LESSONS);
  renderLessonList('kata-lesson-grid', KATA_LESSONS);
  renderGreetings();
  renderNumbers();
  setupNav();
  setupKanji();
  setupChat();
  updateGlobalProgress();
});
