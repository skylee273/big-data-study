import { notFound } from 'next/navigation'
import { EXAMS, getExam } from '@/data/exams'
import ExamClient from './ExamClient'

export function generateStaticParams() {
  return EXAMS.map((exam) => ({ id: exam.id }))
}

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const exam = getExam(id)
  if (!exam) notFound()

  return <ExamClient exam={exam} />
}
