'use client'

import type { AnswerMap } from '@/lib/progress'
import { isCorrect, SUBJECTS, type Question } from '@/lib/types'

interface Props {
  questions: Question[]
  answers: AnswerMap
  currentNo?: number
  onJump: (no: number) => void
}

export default function QuestionNav({ questions, answers, currentNo, onJump }: Props) {
  const byNo = new Map(questions.map((q) => [q.no, q]))

  return (
    <div className="card space-y-4 p-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-gray-200 bg-white" /> 안 푼 문제
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-success" /> 정답
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-error" /> 오답
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-gray-100" /> 미등록
        </span>
      </div>

      {SUBJECTS.map((subject) => (
        <div key={subject.id}>
          <p className="mb-2 text-sm font-semibold text-gray-600">
            {subject.id}과목 · {subject.name}
          </p>
          <div className="grid grid-cols-10 gap-1.5">
            {Array.from(
              { length: subject.range[1] - subject.range[0] + 1 },
              (_, i) => subject.range[0] + i,
            ).map((no) => {
              const q = byNo.get(no)
              const picked = answers[no]

              let style = 'bg-gray-100 text-gray-300 cursor-not-allowed'
              if (q) {
                if (picked === undefined) style = 'bg-white text-gray-700 border border-gray-200 hover:border-primary-500'
                else if (isCorrect(q, picked)) style = 'bg-success text-white'
                else style = 'bg-error text-white'
              }

              return (
                <button
                  key={no}
                  type="button"
                  disabled={!q}
                  onClick={() => onJump(no)}
                  className={`h-8 rounded-md text-xs font-medium transition ${style} ${
                    no === currentNo ? 'ring-2 ring-gray-900 ring-offset-1' : ''
                  }`}
                >
                  {no}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
