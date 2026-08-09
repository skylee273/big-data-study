'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, ListOrdered, RotateCcw } from 'lucide-react'
import QuestionCard from '@/components/QuestionCard'
import QuestionNav from '@/components/QuestionNav'
import ResultSummary from '@/components/ResultSummary'
import { clearAnswers, loadAnswers, saveAnswers, type AnswerMap } from '@/lib/progress'
import { TOTAL_QUESTIONS, type Exam } from '@/lib/types'

export default function ExamClient({ exam }: { exam: Exam }) {
  const questions = useMemo(
    () => [...exam.questions].sort((a, b) => a.no - b.no),
    [exam.questions],
  )

  const [answers, setAnswers] = useState<AnswerMap>({})
  const [index, setIndex] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    setAnswers(loadAnswers(exam.id))
  }, [exam.id])

  const current = questions[index]

  const missing = useMemo(() => {
    const registered = new Set(questions.map((q) => q.no))
    return Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1).filter(
      (no) => !registered.has(no),
    )
  }, [questions])

  function pick(choice: number) {
    if (!current) return
    const next = { ...answers, [current.no]: choice }
    setAnswers(next)
    saveAnswers(exam.id, next)
  }

  function jump(no: number) {
    const i = questions.findIndex((q) => q.no === no)
    if (i >= 0) {
      setIndex(i)
      setNavOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function move(delta: number) {
    setIndex((i) => Math.min(questions.length - 1, Math.max(0, i + delta)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function reset() {
    if (!window.confirm('내 답안을 모두 지우고 1번부터 다시 풉니다. 계속할까요?')) return
    // 지우는 대상은 localStorage에 저장된 '내 답안'뿐이다.
    // 문제·정답·해설(src/data/exams/*.json)은 절대 건드리지 않는다.
    clearAnswers(exam.id)
    setAnswers({})
    setIndex(0)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <header className="mb-5 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={16} />
          기출 목록
        </Link>
        <div className="text-right">
          <h1 className="font-bold text-gray-900">{exam.label}</h1>
          <p className="text-xs text-gray-500">
            {exam.round}회 · {questions.length}/{TOTAL_QUESTIONS}문제 등록
          </p>
        </div>
      </header>

      {missing.length > 0 && questions.length > 0 && (
        <p className="mb-4 rounded-xl bg-gray-100 px-4 py-2.5 text-sm text-gray-600">
          {missing.join(', ')}번은 <span className="font-medium text-gray-800">미등록</span>입니다
          (문제 이미지 없음).
        </p>
      )}

      {questions.length === 0 ? (
        <div className="card p-10 text-center text-gray-500">
          아직 등록된 문제가 없습니다.
        </div>
      ) : (
        <>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {index + 1} / {questions.length}
              <span className="ml-2 text-gray-400">{current?.subject}과목</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={reset}
                disabled={Object.keys(answers).length === 0}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-gray-300 disabled:opacity-40"
              >
                <RotateCcw size={14} />
                전체 다시 풀기
              </button>
              <button
                type="button"
                onClick={() => setNavOpen((v) => !v)}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-gray-300"
              >
                <ListOrdered size={14} />
                문제 목록
              </button>
            </div>
          </div>

          {navOpen && (
            <div className="mb-4">
              <QuestionNav
                questions={questions}
                answers={answers}
                currentNo={current?.no}
                onJump={jump}
              />
            </div>
          )}

          {current && (
            <QuestionCard question={current} picked={answers[current.no]} onPick={pick} />
          )}

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={index === 0}
              className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-gray-200 bg-white py-3 font-medium text-gray-700 transition hover:border-gray-300 disabled:opacity-40"
            >
              <ChevronLeft size={18} />
              이전
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={index >= questions.length - 1}
              className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-primary-500 py-3 font-medium text-white transition hover:bg-primary-600 disabled:opacity-40"
            >
              다음
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-6">
            <ResultSummary questions={questions} answers={answers} onReset={reset} />
          </div>
        </>
      )}
    </main>
  )
}
