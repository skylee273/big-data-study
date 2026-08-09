'use client'

import { RotateCcw } from 'lucide-react'
import type { AnswerMap } from '@/lib/progress'
import { isCorrect, SUBJECTS, type Question } from '@/lib/types'

interface Props {
  questions: Question[]
  answers: AnswerMap
  onReset: () => void
}

export default function ResultSummary({ questions, answers, onReset }: Props) {
  const rows = SUBJECTS.map((subject) => {
    const list = questions.filter((q) => q.subject === subject.id)
    const solved = list.filter((q) => answers[q.no] !== undefined)
    const correct = solved.filter((q) => isCorrect(q, answers[q.no]))
    const score = list.length > 0 ? Math.round((correct.length / list.length) * 100) : 0
    return { subject, total: list.length, solved: solved.length, correct: correct.length, score }
  })

  const totalSolved = rows.reduce((s, r) => s + r.solved, 0)
  const totalCorrect = rows.reduce((s, r) => s + r.correct, 0)
  const totalQuestions = rows.reduce((s, r) => s + r.total, 0)
  const average = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const allSolved = totalSolved === totalQuestions && totalQuestions > 0
  const passed = allSolved && average >= 60 && rows.every((r) => r.total === 0 || r.score >= 40)

  return (
    <section className="card p-5">
      <h2 className="text-lg font-semibold text-gray-900">채점 현황</h2>

      <p className="mt-2 text-sm text-gray-600">
        푼 문제 {totalSolved}/{totalQuestions} · 맞은 문제 {totalCorrect}개 · 전체 {average}점
      </p>

      <ul className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <li key={r.subject.id} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm text-gray-600">
              {r.subject.id}과목
            </span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full ${r.score >= 40 ? 'bg-primary-500' : 'bg-error'}`}
                style={{ width: `${r.score}%` }}
              />
            </div>
            <span className="w-20 shrink-0 text-right text-sm text-gray-700">
              {r.correct}/{r.total}
            </span>
          </li>
        ))}
      </ul>

      {allSolved && (
        <p
          className={`mt-4 rounded-xl px-4 py-3 text-center font-semibold ${
            passed ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {passed ? '합격 기준 충족 (과목 40점↑ · 평균 60점↑)' : '합격 기준 미달'}
        </p>
      )}

      <button
        type="button"
        onClick={onReset}
        disabled={totalSolved === 0}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
      >
        <RotateCcw size={16} />
        다시풀기
      </button>
      <p className="mt-2 text-center text-xs text-gray-400">
        내 답안만 지워집니다. 문제와 해설은 그대로 남습니다.
      </p>
    </section>
  )
}
