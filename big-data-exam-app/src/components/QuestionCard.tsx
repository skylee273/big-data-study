'use client'

import { AlertTriangle, Check, Lightbulb, X } from 'lucide-react'
import { acceptedAnswers, isCorrect, type Question } from '@/lib/types'

const CIRCLED = ['①', '②', '③', '④']

interface Props {
  question: Question
  picked?: number
  onPick: (choice: number) => void
}

export default function QuestionCard({ question, picked, onPick }: Props) {
  const answered = picked !== undefined
  const correct = isCorrect(question, picked)
  const accepted = acceptedAnswers(question)

  return (
    <article className="card p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-lg bg-gray-900 px-2 py-1 text-sm font-bold text-white">
          {question.no}
        </span>
        <h2 className="text-lg font-semibold leading-relaxed text-gray-900">{question.question}</h2>
      </div>

      {question.uncertain && (
        <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-warning" />
          <p className="text-sm leading-relaxed text-amber-800">
            <span className="font-semibold">확인 필요</span> —{' '}
            {question.uncertainNote ??
              '공식 정답표가 없어 확정된 답이 아닙니다. 선택지 중 둘 이상이 틀린 서술로 볼 수 있으니 참고용으로만 보세요.'}
          </p>
        </div>
      )}

      {question.passage && (
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl bg-gray-50 p-4 font-sans text-[15px] leading-relaxed text-gray-800">
          {question.passage}
        </pre>
      )}

      <ul className="mt-5 space-y-2">
        {question.options.map((opt, i) => {
          const choice = i + 1
          const isAnswer = accepted.includes(choice)
          const isPicked = choice === picked

          let style = 'border-gray-200 bg-white hover:border-primary-500 hover:bg-primary-50'
          if (answered) {
            if (isAnswer) style = 'border-success bg-green-50'
            else if (isPicked) style = 'border-error bg-red-50'
            else style = 'border-gray-200 bg-white opacity-60'
          }

          return (
            <li key={choice}>
              <button
                type="button"
                onClick={() => !answered && onPick(choice)}
                disabled={answered}
                className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left transition ${style} ${
                  answered ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="shrink-0 text-gray-500">{CIRCLED[i]}</span>
                <span className="flex-1 leading-relaxed text-gray-800">{opt}</span>
                {answered && isAnswer && <Check size={18} className="mt-0.5 shrink-0 text-success" />}
                {answered && isPicked && !isAnswer && (
                  <X size={18} className="mt-0.5 shrink-0 text-error" />
                )}
              </button>
            </li>
          )
        })}
      </ul>

      {answered && (
        <div className="mt-5 space-y-3">
          <div
            className={`flex items-center gap-2 rounded-xl px-4 py-3 font-semibold ${
              correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {correct ? <Check size={18} /> : <X size={18} />}
            {correct
              ? accepted.length > 1
                ? `정답입니다 (복수정답 ${accepted.map((n) => CIRCLED[n - 1]).join('·')})`
                : '정답입니다'
              : `오답 — 정답은 ${accepted.map((n) => CIRCLED[n - 1]).join('·')}번`}
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-500">해설</p>
            <p className="mt-1 whitespace-pre-wrap leading-relaxed text-gray-800">
              {question.explanation}
            </p>

            {question.traps && (
              <>
                <p className="mt-4 text-sm font-semibold text-gray-500">오답 분석</p>
                <p className="mt-1 whitespace-pre-wrap leading-relaxed text-gray-800">
                  {question.traps}
                </p>
              </>
            )}
          </div>

          {question.keyPoint && (
            <div className="flex items-start gap-2 rounded-xl border border-primary-100 bg-primary-50 p-4">
              <Lightbulb size={18} className="mt-0.5 shrink-0 text-primary-600" />
              <div>
                <p className="text-sm font-semibold text-primary-700">암기 포인트</p>
                <p className="mt-1 leading-relaxed text-gray-800">{question.keyPoint}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
