'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronRight, FileText, Lock } from 'lucide-react'
import { EXAMS } from '@/data/exams'
import { loadAnswers } from '@/lib/progress'
import { isCorrect, TOTAL_QUESTIONS } from '@/lib/types'

interface Progress {
  solved: number
  correct: number
}

export default function HomePage() {
  const [progress, setProgress] = useState<Record<string, Progress>>({})

  useEffect(() => {
    const next: Record<string, Progress> = {}
    for (const exam of EXAMS) {
      const answers = loadAnswers(exam.id)
      let solved = 0
      let correct = 0
      for (const q of exam.questions) {
        const picked = answers[q.no]
        if (!picked) continue
        solved += 1
        if (isCorrect(q, picked)) correct += 1
      }
      next[exam.id] = { solved, correct }
    }
    setProgress(next)
  }, [])

  const totalRegistered = EXAMS.reduce((sum, e) => sum + e.questions.length, 0)

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <header className="mb-8">
        <p className="text-sm font-medium text-primary-600">빅데이터분석기사 필기</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">기출문제</h1>
        <p className="mt-2 text-gray-600">
          회차를 선택해 문제를 풀면 정답과 해설을 바로 확인할 수 있습니다.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          회차당 80문제 · 과목당 20문제 · 등록된 문제 {totalRegistered}개
        </p>
      </header>

      <ul className="space-y-3">
        {EXAMS.map((exam) => {
          const registered = exam.questions.length
          const p = progress[exam.id] ?? { solved: 0, correct: 0 }
          const empty = registered === 0
          const accuracy = p.solved > 0 ? Math.round((p.correct / p.solved) * 100) : 0

          const inner = (
            <div
              className={`card flex items-center gap-4 px-5 py-4 transition ${
                empty ? 'opacity-60' : 'hover:shadow-card-hover'
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  empty ? 'bg-gray-100 text-gray-400' : 'bg-primary-50 text-primary-600'
                }`}
              >
                {empty ? <Lock size={20} /> : <FileText size={20} />}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <h2 className="text-lg font-semibold text-gray-900">{exam.label}</h2>
                  <span className="text-xs font-medium text-gray-500">{exam.round}회</span>
                </div>

                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-primary-500 transition-all"
                    style={{ width: `${(registered / TOTAL_QUESTIONS) * 100}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {empty ? (
                    <span className="text-gray-500">문제 미등록</span>
                  ) : (
                    <>
                      <span className="font-medium text-gray-800">
                        {registered}/{TOTAL_QUESTIONS}문제
                      </span>
                      {p.solved > 0 && (
                        <span className="text-gray-500">
                          {' · '}푼 문제 {p.solved} · 정답률 {accuracy}%
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>

              {!empty && <ChevronRight size={20} className="shrink-0 text-gray-400" />}
            </div>
          )

          return (
            <li key={exam.id}>
              {empty ? inner : <Link href={`/exam/${exam.id}`}>{inner}</Link>}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
