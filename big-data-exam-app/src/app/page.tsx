'use client';

import { useState, useEffect } from 'react';
import { studyItems, categories, StudyItem } from '@/data/studyData';
import { questionBank, subjects, getQuestionsBySubject, getRandomQuestions, Question } from '@/data/questionBank';
import diagramMap from '@/components/Diagrams';

// Icons
const Icons = {
  Sun: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Moon: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  X: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

type ViewMode = 'study' | 'bank' | 'weakness' | 'stats';

// 학습 진행률 타입
interface LearningProgress {
  quizHistory: {
    date: string;
    score: number;
    total: number;
    type: 'quick' | 'practice' | 'exam';
  }[];
  questionStats: {
    [questionId: string]: {
      correct: number;
      wrong: number;
      lastAttempt: string;
    };
  };
  subjectStats: {
    [subject: string]: {
      correct: number;
      wrong: number;
    };
  };
  studyDates: string[];
  totalStudyMinutes: number;
  lastStudyTime: string;
}

const defaultProgress: LearningProgress = {
  quizHistory: [],
  questionStats: {},
  subjectStats: {},
  studyDates: [],
  totalStudyMinutes: 0,
  lastStudyTime: '',
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('study');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });

  // Question Bank state
  const [bankSubject, setBankSubject] = useState<string>('all');
  const [bankQuestions, setBankQuestions] = useState<Question[]>([]);
  const [bankIndex, setBankIndex] = useState(0);
  const [bankSelected, setBankSelected] = useState<number | null>(null);
  const [bankShowAnswer, setBankShowAnswer] = useState(false);
  const [bankScore, setBankScore] = useState({ correct: 0, total: 0 });
  const [bankMode, setBankMode] = useState<'practice' | 'exam'>('practice');

  // 학습 진행률 state
  const [progress, setProgress] = useState<LearningProgress>(defaultProgress);
  const [sessionStartTime] = useState<Date>(new Date());

  // Load saved state
  useEffect(() => {
    const saved = localStorage.getItem('bigdata-completedItems');
    if (saved) setCompletedItems(new Set(JSON.parse(saved)));

    const darkSaved = localStorage.getItem('bigdata-darkMode');
    if (darkSaved) setDarkMode(JSON.parse(darkSaved));

    const progressSaved = localStorage.getItem('bigdata-learningProgress');
    if (progressSaved) {
      setProgress(JSON.parse(progressSaved));
    }

    const today = new Date().toISOString().split('T')[0];
    setProgress(prev => {
      if (!prev.studyDates.includes(today)) {
        return {
          ...prev,
          studyDates: [...prev.studyDates, today],
          lastStudyTime: new Date().toISOString(),
        };
      }
      return { ...prev, lastStudyTime: new Date().toISOString() };
    });
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem('bigdata-completedItems', JSON.stringify([...completedItems]));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('bigdata-darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('bigdata-learningProgress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    const updateStudyTime = () => {
      const minutes = Math.round((new Date().getTime() - sessionStartTime.getTime()) / 60000);
      if (minutes > 0) {
        setProgress(prev => ({
          ...prev,
          totalStudyMinutes: prev.totalStudyMinutes + minutes,
        }));
      }
    };

    window.addEventListener('beforeunload', updateStudyTime);
    return () => window.removeEventListener('beforeunload', updateStudyTime);
  }, [sessionStartTime]);

  useEffect(() => {
    setQuizQuestions(getRandomQuestions(5));
  }, []);

  // Filter study items
  const filteredItems = studyItems.filter(item => {
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesWeakness = viewMode !== 'weakness' || item.isWeakness;
    return matchesCategory && matchesSearch && matchesWeakness;
  });

  const studyProgress = Math.round((completedItems.size / studyItems.length) * 100);

  const toggleComplete = (id: string) => {
    const newSet = new Set(completedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedItems(newSet);
  };

  // 문제 결과 기록
  const recordQuestionResult = (question: Question, isCorrect: boolean) => {
    const questionId = `${question.subject}-${question.question.substring(0, 30)}`;
    setProgress(prev => ({
      ...prev,
      questionStats: {
        ...prev.questionStats,
        [questionId]: {
          correct: (prev.questionStats[questionId]?.correct || 0) + (isCorrect ? 1 : 0),
          wrong: (prev.questionStats[questionId]?.wrong || 0) + (isCorrect ? 0 : 1),
          lastAttempt: new Date().toISOString(),
        },
      },
      subjectStats: {
        ...prev.subjectStats,
        [question.subject]: {
          correct: (prev.subjectStats[question.subject]?.correct || 0) + (isCorrect ? 1 : 0),
          wrong: (prev.subjectStats[question.subject]?.wrong || 0) + (isCorrect ? 0 : 1),
        },
      },
    }));
  };

  // Quiz handlers
  const currentQuizQuestion = quizQuestions[currentQuizIndex];

  const handleQuizAnswer = (index: number) => {
    if (showAnswer || !currentQuizQuestion) return;
    setSelectedAnswer(index);
    setShowAnswer(true);
    const isCorrect = index === currentQuizQuestion.answer;
    setQuizScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    recordQuestionResult(currentQuizQuestion, isCorrect);
  };

  const nextQuiz = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setSelectedAnswer(null);
      setShowAnswer(false);
      setCurrentQuizIndex(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setQuizQuestions(getRandomQuestions(5));
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setQuizScore({ correct: 0, total: 0 });
  };

  // Question Bank handlers
  const startBankQuiz = (mode: 'practice' | 'exam', subject?: string) => {
    setBankMode(mode);
    setBankScore({ correct: 0, total: 0 });
    setBankIndex(0);
    setBankSelected(null);
    setBankShowAnswer(false);

    if (mode === 'exam') {
      const examQuestions: Question[] = [];
      for (const sub of subjects) {
        const subQuestions = getQuestionsBySubject(sub);
        const shuffled = [...subQuestions].sort(() => Math.random() - 0.5);
        examQuestions.push(...shuffled.slice(0, 20));
      }
      setBankQuestions(examQuestions);
    } else {
      if (subject && subject !== 'all') {
        setBankQuestions(getRandomQuestions(20, subject));
      } else {
        setBankQuestions(getRandomQuestions(20));
      }
    }
  };

  const handleBankAnswer = (index: number) => {
    if (bankShowAnswer) return;
    setBankSelected(index);
    setBankShowAnswer(true);
    const currentQ = bankQuestions[bankIndex];
    const isCorrect = index === currentQ.answer;
    setBankScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    recordQuestionResult(currentQ, isCorrect);
  };

  const nextBankQuestion = () => {
    if (bankIndex < bankQuestions.length - 1) {
      setBankIndex(prev => prev + 1);
      setBankSelected(null);
      setBankShowAnswer(false);
    }
  };

  const currentBankQuestion = bankQuestions[bankIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              빅데이터분석기사 학습앱
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {darkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-400">학습 진도</span>
              <span className="font-medium text-primary-500">{studyProgress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary-500 progress-bar rounded-full" style={{ width: `${studyProgress}%` }} />
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {[
              { id: 'study', label: '학습', icon: '📚' },
              { id: 'bank', label: '문제은행', icon: '🏦' },
              { id: 'weakness', label: '약점', icon: '🎯' },
              { id: 'stats', label: '통계/SQL', icon: '📊' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id as ViewMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
                  viewMode === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          {(viewMode === 'study' || viewMode === 'weakness') && (
            <div className="relative mt-4">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icons.Search />
              </div>
              <input
                type="text"
                placeholder="검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Category Filter */}
        {(viewMode === 'study' || viewMode === 'weakness') && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              전체
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Study View */}
        {(viewMode === 'study' || viewMode === 'weakness') && (
          <div className="grid gap-4">
            {filteredItems.map(item => (
              <StudyCard
                key={item.id}
                item={item}
                isCompleted={completedItems.has(item.id)}
                isExpanded={expandedCard === item.id}
                onToggleComplete={() => toggleComplete(item.id)}
                onToggleExpand={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                DiagramComponent={diagramMap[item.id]}
              />
            ))}
            {filteredItems.length === 0 && (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                {viewMode === 'weakness' ? '약점 항목이 없습니다.' : '검색 결과가 없습니다.'}
              </div>
            )}
          </div>
        )}

        {/* Question Bank View */}
        {viewMode === 'bank' && (
          <div className="max-w-2xl mx-auto">
            {bankQuestions.length === 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  🏦 문제 은행 <span className="text-sm font-normal text-gray-500">({questionBank.length}문제)</span>
                </h2>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {subjects.map((sub) => {
                    const count = getQuestionsBySubject(sub).length;
                    return (
                      <div key={sub} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400">{sub}</div>
                        <div className="font-bold text-gray-900 dark:text-white">{count}문제</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">연습 모드</h3>
                  <div className="mb-3">
                    <select
                      value={bankSubject}
                      onChange={(e) => setBankSubject(e.target.value)}
                      className="w-full p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="all">전체 과목</option>
                      {subjects.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => startBankQuiz('practice', bankSubject)}
                    className="w-full py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600"
                  >
                    연습 시작 (20문제)
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">모의고사 모드</h3>
                  <button
                    onClick={() => startBankQuiz('exam')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90"
                  >
                    모의고사 시작 (과목당 20문제 = 80문제)
                  </button>
                </div>
              </div>
            )}

            {bankQuestions.length > 0 && currentBankQuestion && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      bankMode === 'exam' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    }`}>
                      {bankMode === 'exam' ? '모의고사' : '연습'}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {bankIndex + 1} / {bankQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-primary-500">
                      정답률: {bankScore.total > 0 ? Math.round((bankScore.correct / bankScore.total) * 100) : 0}%
                    </span>
                    <button
                      onClick={() => setBankQuestions([])}
                      className="text-xs text-gray-500 hover:text-red-500"
                    >
                      종료
                    </button>
                  </div>
                </div>

                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all"
                    style={{ width: `${((bankIndex + 1) / bankQuestions.length) * 100}%` }}
                  />
                </div>

                <div className="mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    {currentBankQuestion.subject}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  {currentBankQuestion.question}
                </h2>

                <div className="space-y-3">
                  {currentBankQuestion.options.map((option, index) => {
                    const isCorrect = index === currentBankQuestion.answer;
                    const isSelected = index === bankSelected;
                    let buttonClass = 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-transparent';
                    if (bankShowAnswer) {
                      if (isCorrect) buttonClass = 'bg-green-100 dark:bg-green-900/50 border-green-500';
                      else if (isSelected) buttonClass = 'bg-red-100 dark:bg-red-900/50 border-red-500';
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleBankAnswer(index)}
                        disabled={bankShowAnswer}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${buttonClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="text-gray-900 dark:text-white">{option}</span>
                          {bankShowAnswer && isCorrect && <span className="ml-auto text-green-500"><Icons.Check /></span>}
                          {bankShowAnswer && isSelected && !isCorrect && <span className="ml-auto text-red-500"><Icons.X /></span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {bankShowAnswer && (
                  <>
                    <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>해설:</strong> {currentBankQuestion.explanation}
                      </p>
                    </div>

                    {bankIndex < bankQuestions.length - 1 ? (
                      <button
                        onClick={nextBankQuestion}
                        className="mt-6 w-full py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 flex items-center justify-center gap-2"
                      >
                        다음 문제 <Icons.ChevronRight />
                      </button>
                    ) : (
                      <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30">
                        <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
                          {bankMode === 'exam' ? '모의고사 완료!' : '연습 완료!'}
                        </h3>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary-500 mb-1">
                            {Math.round((bankScore.correct / bankScore.total) * 100)}점
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {bankScore.correct} / {bankScore.total} 정답
                          </div>
                        </div>
                        <button
                          onClick={() => setBankQuestions([])}
                          className="mt-4 w-full py-3 rounded-xl bg-primary-500 text-white font-medium"
                        >
                          다시 시작
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {/* Stats/SQL View */}
        {viewMode === 'stats' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                📊 통계/SQL 핵심 정리
              </h2>

              {/* 기술통계 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-500 mb-3">1. 기술통계 핵심</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">구분</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">측정치</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">특징</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold" rowSpan={3}>중심경향치</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">평균</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">이상치에 민감</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-green-600">중앙값</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-green-600">이상치에 강건 (권장)</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">최빈값</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">범주형에 적합</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold" rowSpan={3}>산포도</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">분산/표준편차</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">이상치에 민감</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-green-600">IQR</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-green-600">Q3 - Q1, 이상치에 강건</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">변동계수(CV)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">표준편차/평균 (단위 무관 비교)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-sm text-red-800 dark:text-red-300">
                    <strong>이상치 탐지:</strong> Q1 - 1.5×IQR &lt; 정상 &lt; Q3 + 1.5×IQR
                  </p>
                </div>
              </div>

              {/* 가설검정 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-500 mb-3">2. 가설검정</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">용어</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">설명</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">예시</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">귀무가설 (H0)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">차이/효과 없음</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">"평균 = 100"</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">대립가설 (H1)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">차이/효과 있음</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">"평균 ≠ 100"</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-red-600">1종 오류 (α)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">H0 참인데 기각</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">거짓 양성</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-blue-600">2종 오류 (β)</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">H0 거짓인데 채택</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">거짓 음성</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>p-value &lt; 0.05 → 귀무가설 기각 (유의미)</strong>
                  </p>
                </div>
              </div>

              {/* SQL 핵심 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-500 mb-3">3. SQL 핵심</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">절</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">역할</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">실행 순서</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">FROM</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">테이블 지정</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">1</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-blue-600">WHERE</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-blue-600">그룹화 전 필터</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">2</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">GROUP BY</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">그룹화</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">3</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-green-600">HAVING</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-green-600">그룹화 후 필터</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">4</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">SELECT</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">컬럼 선택</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">5</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">ORDER BY</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">정렬</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">
                    <strong>암기:</strong> FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
                  </p>
                </div>
              </div>

              {/* JOIN */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-500 mb-3">4. JOIN 종류</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">JOIN</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">결과</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">INNER JOIN</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">교집합</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">양쪽 모두 일치</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-blue-600">LEFT JOIN</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">왼쪽 전체</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">왼쪽 + 일치하는 오른쪽</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">RIGHT JOIN</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">오른쪽 전체</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">오른쪽 + 일치하는 왼쪽</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold">FULL OUTER</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">합집합</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">양쪽 모두</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-red-600">CROSS JOIN</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">카테시안 곱</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">모든 조합 (n × m)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          빅데이터분석기사 시험 대비 학습앱 | 시험일: 2026-04-05
        </div>
      </footer>
    </div>
  );
}

// Markdown to HTML converter
function parseMarkdown(content: string): string {
  let html = content;

  const codeBlocks: string[] = [];
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const index = codeBlocks.length;
    codeBlocks.push(`<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs my-3 font-mono"><code>${code.trim()}</code></pre>`);
    return `__CODE_BLOCK_${index}__`;
  });

  html = html.replace(/\n(\|.+\|)\n(\|[-:| ]+\|)\n((?:\|.+\|\n?)+)/g, (_, header, separator, rows) => {
    const headerCells = header.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim());
    const alignments = separator.split('|').filter((c: string) => c.trim()).map((c: string) => {
      c = c.trim();
      if (c.startsWith(':') && c.endsWith(':')) return 'center';
      if (c.endsWith(':')) return 'right';
      return 'left';
    });

    let tableHtml = '<div class="overflow-x-auto my-4"><table class="min-w-full border-collapse text-sm">';

    tableHtml += '<thead><tr class="bg-gray-100 dark:bg-gray-700">';
    headerCells.forEach((cell: string, i: number) => {
      const align = alignments[i] || 'left';
      const boldCell = cell.replace(/\*\*([^*]+)\*\*/g, '$1');
      tableHtml += `<th class="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold text-gray-900 dark:text-white text-${align}">${boldCell}</th>`;
    });
    tableHtml += '</tr></thead>';

    tableHtml += '<tbody>';
    const rowLines = rows.trim().split('\n');
    rowLines.forEach((row: string, rowIndex: number) => {
      const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim());
      const bgClass = rowIndex % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750';
      tableHtml += `<tr class="${bgClass}">`;
      cells.forEach((cell: string, i: number) => {
        const align = alignments[i] || 'left';
        let processedCell = cell.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-primary-600 dark:text-primary-400">$1</strong>');
        processedCell = processedCell.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
        tableHtml += `<td class="border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-300 text-${align}">${processedCell}</td>`;
      });
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table></div>';

    return tableHtml;
  });

  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs font-mono text-red-600 dark:text-red-400">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-gray-900 dark:text-white font-semibold">$1</strong>');
  html = html.replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-gray-700 dark:text-gray-300">$1</li>');
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="my-2 space-y-1">$&</ul>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal text-gray-700 dark:text-gray-300">$2</li>');

  codeBlocks.forEach((block, i) => {
    html = html.replace(`__CODE_BLOCK_${i}__`, block);
  });

  html = html.replace(/\n\n/g, '</p><p class="my-2">');
  html = html.replace(/\n/g, '<br/>');

  return html;
}

// Study Card Component
function StudyCard({
  item,
  isCompleted,
  isExpanded,
  onToggleComplete,
  onToggleExpand,
  DiagramComponent,
}: {
  item: StudyItem;
  isCompleted: boolean;
  isExpanded: boolean;
  onToggleComplete: () => void;
  onToggleExpand: () => void;
  DiagramComponent?: React.ComponentType;
}) {
  const category = categories.find(c => c.id === item.category);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow ${isCompleted ? 'opacity-60' : ''}`}>
      <div className="p-4 cursor-pointer" onClick={onToggleExpand}>
        <div className="flex items-start gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); onToggleComplete(); }}
            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              isCompleted ? 'bg-primary-500 border-primary-500 text-white' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            {isCompleted && <Icons.Check />}
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                {category?.icon} {category?.name}
              </span>
              {item.isWeakness && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300">
                  약점
                </span>
              )}
              {DiagramComponent && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  시각화
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.subcategory}</p>
          </div>
          <span className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
            <Icons.ChevronRight />
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700">
          {DiagramComponent && (
            <div className="pt-4">
              <DiagramComponent />
            </div>
          )}

          <div className="pt-4">
            <div
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(item.content)
              }}
            />
          </div>

          {item.keyPoints && item.keyPoints.length > 0 && (
            <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <p className="text-xs font-medium text-yellow-800 dark:text-yellow-300 mb-2">핵심 포인트</p>
              <ul className="space-y-1">
                {item.keyPoints.map((point, i) => (
                  <li key={i} className="text-sm text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
