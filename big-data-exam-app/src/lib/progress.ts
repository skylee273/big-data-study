'use client'

/** 회차별 내 답안 { 문제번호: 고른 보기(1~4) } */
export type AnswerMap = Record<number, number>

const KEY = (examId: string) => `bdae:answers:${examId}`

export function loadAnswers(examId: string): AnswerMap {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(KEY(examId))
    return raw ? (JSON.parse(raw) as AnswerMap) : {}
  } catch {
    return {}
  }
}

export function saveAnswers(examId: string, answers: AnswerMap) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(KEY(examId), JSON.stringify(answers))
  } catch {
    /* 저장 실패는 무시 (시크릿 모드 등) */
  }
}

export function clearAnswers(examId: string) {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(KEY(examId))
}
