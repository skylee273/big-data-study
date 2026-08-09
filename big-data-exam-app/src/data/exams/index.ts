import type { Exam } from '@/lib/types'

import e2021_04 from './2021-04.json'
import e2021_10 from './2021-10.json'
import e2022_04 from './2022-04.json'
import e2022_10 from './2022-10.json'
import e2023_04 from './2023-04.json'
import e2023_10 from './2023-10.json'
import e2024_04 from './2024-04.json'
import e2024_09 from './2024-09.json'
import e2025_04 from './2025-04.json'
import e2025_10 from './2025-10.json'

/**
 * 새 회차를 추가하려면
 *  1. `src/data/exams/YYYY-MM.json` 파일을 만들고
 *  2. 여기에 import 후 아래 배열에 추가하면 끝.
 */
export const EXAMS: Exam[] = [
  e2025_10,
  e2025_04,
  e2024_09,
  e2024_04,
  e2023_10,
  e2023_04,
  e2022_10,
  e2022_04,
  e2021_10,
  e2021_04,
] as Exam[]

export function getExam(id: string): Exam | undefined {
  return EXAMS.find((e) => e.id === id)
}
