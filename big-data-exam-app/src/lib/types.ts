export type SubjectId = 1 | 2 | 3 | 4

export interface Question {
  /** 시험지 문제 번호 (1~80) */
  no: number
  /** 1과목 1~20, 2과목 21~40, 3과목 41~60, 4과목 61~80 */
  subject: SubjectId
  question: string
  /** 문제에 딸린 지문/표 (원문 그대로, 줄바꿈 유지) */
  passage?: string
  /** 보기 4개 (①②③④ 순서) */
  options: string[]
  /** 정답 번호 1~4 */
  answer: number
  /** 복수정답 문항에서 함께 정답으로 인정되는 보기 번호 */
  alsoCorrect?: number[]
  /** 왜 정답인지 */
  explanation: string
  /** 암기 포인트 */
  keyPoint?: string
  /** 오답 선택지가 왜 틀렸는지 */
  traps?: string
  /** 정답 또는 문제 원문이 확실하지 않은 문항 */
  uncertain?: boolean
  /** uncertain일 때 표시할 사유 (없으면 기본 문구) */
  uncertainNote?: string
  keywords?: string[]
}

export interface Exam {
  /** URL 슬러그 (예: "2025-04") */
  id: string
  /** 홈 카드에 표시될 이름 (예: "2025년 4월") */
  label: string
  /** 시험 회차 (예: 10) */
  round: number
  year: number
  questions: Question[]
}

export const TOTAL_QUESTIONS = 80
export const QUESTIONS_PER_SUBJECT = 20

export const SUBJECTS: { id: SubjectId; name: string; range: [number, number] }[] = [
  { id: 1, name: '빅데이터 분석 기획', range: [1, 20] },
  { id: 2, name: '빅데이터 탐색', range: [21, 40] },
  { id: 3, name: '빅데이터 모델링', range: [41, 60] },
  { id: 4, name: '빅데이터 결과 해석', range: [61, 80] },
]

/** 고른 보기가 정답으로 인정되는지 (복수정답 포함) */
export function isCorrect(q: Question, picked?: number): boolean {
  if (picked === undefined) return false
  return picked === q.answer || (q.alsoCorrect?.includes(picked) ?? false)
}

/** 정답으로 인정되는 보기 번호 전체 */
export function acceptedAnswers(q: Question): number[] {
  return [q.answer, ...(q.alsoCorrect ?? [])].sort((a, b) => a - b)
}

export function subjectOf(no: number): SubjectId {
  if (no <= 20) return 1
  if (no <= 40) return 2
  if (no <= 60) return 3
  return 4
}
