// 개념 학습 시스템 데이터 구조

export interface Concept {
  id: string;
  subject: 1 | 2 | 3 | 4;           // 과목 번호
  category: string;                  // 카테고리
  keyword: string;                   // 키워드명
  emoji: string;                     // 시각적 아이콘
  simpleExplanation: string;         // 초등학생용 설명
  realLifeExample: string;           // 실생활 예시
  examTip: string;                   // 시험 암기 포인트
  relatedConcepts?: string[];        // 연관 개념 ID
  diagram?: string;                  // 이모지/ASCII 다이어그램
}

// 과목별 카테고리
export const subjectCategories = {
  1: ['빅데이터 개념', '분석 기획', '데이터 거버넌스', '분석 방법론', '프로젝트 관리'],
  2: ['데이터 수집', '데이터 전처리', '탐색적 분석', '통계 기초', '샘플링'],
  3: ['통계 분석', '머신러닝', '회귀분석', '분류분석', '군집분석', '딥러닝'],
  4: ['결과 해석', '시각화', '모델 평가', '분석 활용', '보고서 작성'],
};

export const subjectNames = {
  1: '빅데이터 분석 기획',
  2: '빅데이터 탐색',
  3: '빅데이터 모델링',
  4: '빅데이터 결과 해석',
};

// Import subject concepts
import { subject1Concepts } from './concepts/subject1';
import { subject2Concepts } from './concepts/subject2';
import { subject3Concepts } from './concepts/subject3';
import { subject4Concepts } from './concepts/subject4';

// 전체 개념 통합
export const allConcepts: Concept[] = [
  ...subject1Concepts,
  ...subject2Concepts,
  ...subject3Concepts,
  ...subject4Concepts,
];

// 과목별 개념 가져오기
export function getConceptsBySubject(subject: 1 | 2 | 3 | 4): Concept[] {
  return allConcepts.filter(c => c.subject === subject);
}

// 카테고리별 개념 가져오기
export function getConceptsByCategory(subject: 1 | 2 | 3 | 4, category: string): Concept[] {
  return allConcepts.filter(c => c.subject === subject && c.category === category);
}

// ID로 개념 찾기
export function getConceptById(id: string): Concept | undefined {
  return allConcepts.find(c => c.id === id);
}

// 검색
export function searchConcepts(query: string): Concept[] {
  const lowerQuery = query.toLowerCase();
  return allConcepts.filter(c =>
    c.keyword.toLowerCase().includes(lowerQuery) ||
    c.simpleExplanation.toLowerCase().includes(lowerQuery) ||
    c.category.toLowerCase().includes(lowerQuery)
  );
}
