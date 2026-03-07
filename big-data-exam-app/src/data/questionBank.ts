export interface Question {
  id: string;
  subject: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category?: string;
}

export const subjects = [
  '1과목: 빅데이터 분석 기획',
  '2과목: 빅데이터 탐색',
  '3과목: 빅데이터 모델링',
  '4과목: 빅데이터 결과 해석',
];

export const questionBank: Question[] = [
  // ==================== 1과목: 빅데이터 분석 기획 ====================
  {
    id: 's1-001',
    subject: '1과목: 빅데이터 분석 기획',
    question: '빅데이터의 3V 특성으로 올바른 것은?',
    options: [
      'Volume, Value, Variety',
      'Volume, Velocity, Variety',
      'Volume, Velocity, Value',
      'Veracity, Velocity, Variety',
    ],
    answer: 1,
    explanation: '빅데이터의 3V는 Volume(크기), Velocity(속도), Variety(다양성)입니다. Value(가치), Veracity(진실성)는 추가된 특성입니다.',
    category: 'bigdata',
  },
  {
    id: 's1-002',
    subject: '1과목: 빅데이터 분석 기획',
    question: '반정형 데이터에 해당하는 것은?',
    options: [
      'Excel 파일',
      'JSON 파일',
      '동영상 파일',
      '관계형 데이터베이스',
    ],
    answer: 1,
    explanation: 'JSON, XML 등은 스키마가 포함된 반정형 데이터입니다. Excel과 RDB는 정형, 동영상은 비정형입니다.',
    category: 'data',
  },
  {
    id: 's1-003',
    subject: '1과목: 빅데이터 분석 기획',
    question: '데이터 품질 요소 중 "데이터 간 모순이 없는 것"을 의미하는 것은?',
    options: [
      '정확성 (Accuracy)',
      '완전성 (Completeness)',
      '일관성 (Consistency)',
      '적시성 (Timeliness)',
    ],
    answer: 2,
    explanation: '일관성(Consistency)은 데이터 간 모순이 없는 상태를 의미합니다.',
    category: 'data',
  },
  {
    id: 's1-004',
    subject: '1과목: 빅데이터 분석 기획',
    question: '데이터 척도 중 절대적 0점이 있어 배수 비교가 가능한 것은?',
    options: [
      '명목 척도',
      '서열 척도',
      '등간 척도',
      '비율 척도',
    ],
    answer: 3,
    explanation: '비율 척도는 절대적 0점이 있어 "2배 무겁다"와 같은 배수 비교가 가능합니다.',
    category: 'data',
  },
  {
    id: 's1-005',
    subject: '1과목: 빅데이터 분석 기획',
    question: '데이터 분석 방법론 중 CRISP-DM의 단계 순서로 올바른 것은?',
    options: [
      '비즈니스 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 배포',
      '데이터 이해 → 비즈니스 이해 → 데이터 준비 → 모델링 → 평가 → 배포',
      '비즈니스 이해 → 데이터 준비 → 데이터 이해 → 모델링 → 평가 → 배포',
      '데이터 준비 → 비즈니스 이해 → 데이터 이해 → 모델링 → 배포 → 평가',
    ],
    answer: 0,
    explanation: 'CRISP-DM은 Business Understanding → Data Understanding → Data Preparation → Modeling → Evaluation → Deployment 순서입니다.',
    category: 'bigdata',
  },

  // ==================== 2과목: 빅데이터 탐색 ====================
  {
    id: 's2-001',
    subject: '2과목: 빅데이터 탐색',
    question: '결측값 처리 방법 중 이상치가 있을 때 적합한 대체 방법은?',
    options: [
      '평균 대체',
      '중앙값 대체',
      '최빈값 대체',
      '삭제',
    ],
    answer: 1,
    explanation: '중앙값은 이상치에 영향을 덜 받아 이상치가 있는 경우 적합합니다.',
    category: 'preprocess',
  },
  {
    id: 's2-002',
    subject: '2과목: 빅데이터 탐색',
    question: '데이터 스케일링 방법 중 Min-Max 정규화의 결과 범위는?',
    options: [
      '-1 ~ 1',
      '0 ~ 1',
      '평균 0, 표준편차 1',
      '-3 ~ 3',
    ],
    answer: 1,
    explanation: 'Min-Max 정규화는 (x-min)/(max-min)으로 계산하여 0~1 범위로 변환합니다.',
    category: 'preprocess',
  },
  {
    id: 's2-003',
    subject: '2과목: 빅데이터 탐색',
    question: 'IQR 방법을 사용한 이상치 탐지에서 상한 기준은?',
    options: [
      'Q3 + 1.0 × IQR',
      'Q3 + 1.5 × IQR',
      'Q3 + 2.0 × IQR',
      'Q3 + 3.0 × IQR',
    ],
    answer: 1,
    explanation: 'IQR 방법에서 이상치 상한은 Q3 + 1.5 × IQR, 하한은 Q1 - 1.5 × IQR입니다.',
    category: 'stats',
  },
  {
    id: 's2-004',
    subject: '2과목: 빅데이터 탐색',
    question: '범주형 변수를 이진 벡터로 변환하는 인코딩 방법은?',
    options: [
      'Label Encoding',
      'One-Hot Encoding',
      'Target Encoding',
      'Ordinal Encoding',
    ],
    answer: 1,
    explanation: 'One-Hot Encoding은 범주를 이진 벡터로 변환합니다. 예: 빨강 → [1,0,0]',
    category: 'preprocess',
  },
  {
    id: 's2-005',
    subject: '2과목: 빅데이터 탐색',
    question: '두 연속형 변수 간의 선형 관계를 측정하는 상관계수는?',
    options: [
      '피어슨 상관계수',
      '스피어만 상관계수',
      '켄달 타우',
      '점이연 상관계수',
    ],
    answer: 0,
    explanation: '피어슨 상관계수는 두 연속형 변수 간의 선형 관계를 측정합니다.',
    category: 'stats',
  },

  // ==================== 3과목: 빅데이터 모델링 ====================
  {
    id: 's3-001',
    subject: '3과목: 빅데이터 모델링',
    question: '지도학습에 해당하지 않는 것은?',
    options: [
      '회귀',
      '분류',
      '군집화',
      '예측',
    ],
    answer: 2,
    explanation: '군집화(Clustering)는 레이블 없이 데이터를 그룹화하는 비지도학습입니다.',
    category: 'ml',
  },
  {
    id: 's3-002',
    subject: '3과목: 빅데이터 모델링',
    question: 'L1 규제를 사용하여 일부 계수를 0으로 만드는 회귀 모델은?',
    options: [
      '선형 회귀',
      '릿지 회귀',
      '라쏘 회귀',
      '엘라스틱넷',
    ],
    answer: 2,
    explanation: '라쏘(Lasso)는 L1 규제를 사용하여 일부 계수를 정확히 0으로 만들어 변수 선택 효과가 있습니다.',
    category: 'ml',
  },
  {
    id: 's3-003',
    subject: '3과목: 빅데이터 모델링',
    question: '분류 모델의 성능 지표 중 실제 양성 중 정확히 예측한 비율은?',
    options: [
      '정확도 (Accuracy)',
      '정밀도 (Precision)',
      '재현율 (Recall)',
      'F1 Score',
    ],
    answer: 2,
    explanation: '재현율(Recall) = TP/(TP+FN)으로, 실제 양성 중 정확히 예측한 비율입니다.',
    category: 'ml',
  },
  {
    id: 's3-004',
    subject: '3과목: 빅데이터 모델링',
    question: '앙상블 기법 중 여러 모델을 병렬로 학습하여 분산을 줄이는 방법은?',
    options: [
      '배깅 (Bagging)',
      '부스팅 (Boosting)',
      '스태킹 (Stacking)',
      '드롭아웃 (Dropout)',
    ],
    answer: 0,
    explanation: '배깅은 부트스트랩 샘플링으로 여러 모델을 병렬 학습하여 분산을 줄입니다. 랜덤포레스트가 대표적입니다.',
    category: 'ml',
  },
  {
    id: 's3-005',
    subject: '3과목: 빅데이터 모델링',
    question: 'K-Means 군집화에서 적절한 K를 결정하는 방법은?',
    options: [
      '교차 검증',
      '엘보우 방법',
      '그리드 서치',
      'A/B 테스트',
    ],
    answer: 1,
    explanation: '엘보우 방법은 K에 따른 SSE 변화를 보고 꺾이는 점을 찾아 적절한 K를 결정합니다.',
    category: 'ml',
  },
  {
    id: 's3-006',
    subject: '3과목: 빅데이터 모델링',
    question: '가설검정에서 p-value < 0.05일 때의 결론은?',
    options: [
      '귀무가설 채택',
      '귀무가설 기각',
      '대립가설 기각',
      '결론 보류',
    ],
    answer: 1,
    explanation: 'p-value가 유의수준(0.05)보다 작으면 귀무가설을 기각하고 대립가설을 채택합니다.',
    category: 'stats',
  },
  {
    id: 's3-007',
    subject: '3과목: 빅데이터 모델링',
    question: '다중공선성 문제를 진단하는 지표로 10 이상이면 문제가 있는 것은?',
    options: [
      'R-squared',
      'VIF',
      'AIC',
      'BIC',
    ],
    answer: 1,
    explanation: 'VIF(Variance Inflation Factor)가 10 이상이면 다중공선성 문제가 있다고 판단합니다.',
    category: 'ml',
  },

  // ==================== 4과목: 빅데이터 결과 해석 ====================
  {
    id: 's4-001',
    subject: '4과목: 빅데이터 결과 해석',
    question: '추세(시계열) 데이터를 시각화할 때 가장 적합한 차트는?',
    options: [
      '막대 그래프',
      '파이 차트',
      '선 그래프',
      '산점도',
    ],
    answer: 2,
    explanation: '선 그래프는 시간에 따른 추세를 보여주기에 적합합니다.',
    category: 'visual',
  },
  {
    id: 's4-002',
    subject: '4과목: 빅데이터 결과 해석',
    question: '두 연속형 변수 간의 관계를 시각화할 때 적합한 차트는?',
    options: [
      '막대 그래프',
      '히스토그램',
      '박스플롯',
      '산점도',
    ],
    answer: 3,
    explanation: '산점도는 두 연속형 변수 간의 관계를 시각화하는 데 적합합니다.',
    category: 'visual',
  },
  {
    id: 's4-003',
    subject: '4과목: 빅데이터 결과 해석',
    question: 'XAI(설명가능한 AI) 기법 중 피처 중요도를 계산하는 방법은?',
    options: [
      'LIME',
      'SHAP',
      'Attention',
      'Grad-CAM',
    ],
    answer: 1,
    explanation: 'SHAP(SHapley Additive exPlanations)은 게임이론을 기반으로 각 피처의 기여도를 계산합니다.',
    category: 'ml',
  },
  {
    id: 's4-004',
    subject: '4과목: 빅데이터 결과 해석',
    question: '개인정보보호법에서 통계작성, 과학적 연구 목적으로 동의 없이 활용 가능한 정보는?',
    options: [
      '개인정보',
      '가명정보',
      '민감정보',
      '고유식별정보',
    ],
    answer: 1,
    explanation: '가명정보는 통계작성, 과학적 연구, 공익적 기록보존 목적으로 정보주체 동의 없이 활용할 수 있습니다.',
    category: 'law',
  },
  {
    id: 's4-005',
    subject: '4과목: 빅데이터 결과 해석',
    question: 'AI 윤리에서 학습 데이터의 편향이 결과에 반영되는 문제를 무엇이라 하는가?',
    options: [
      '과적합',
      '편향 (Bias)',
      '분산',
      '누수',
    ],
    answer: 1,
    explanation: '편향(Bias)은 학습 데이터에 포함된 편견이 모델 결과에 반영되는 문제입니다.',
    category: 'law',
  },

  // 추가 문제들
  {
    id: 's1-006',
    subject: '1과목: 빅데이터 분석 기획',
    question: 'RDB에서 HDFS로 데이터를 수집하는 도구는?',
    options: [
      'Kafka',
      'Flume',
      'Sqoop',
      'Spark',
    ],
    answer: 2,
    explanation: 'Sqoop은 관계형 데이터베이스와 HDFS 간 데이터 이동을 담당합니다.',
    category: 'hadoop',
  },
  {
    id: 's2-006',
    subject: '2과목: 빅데이터 탐색',
    question: 'SQL에서 그룹화 후 조건을 적용하는 절은?',
    options: [
      'WHERE',
      'GROUP BY',
      'HAVING',
      'ORDER BY',
    ],
    answer: 2,
    explanation: 'WHERE는 그룹화 전 필터링, HAVING은 그룹화 후 필터링에 사용됩니다.',
    category: 'sql',
  },
  {
    id: 's3-008',
    subject: '3과목: 빅데이터 모델링',
    question: 'DBSCAN 군집화의 장점은?',
    options: [
      '군집 수를 미리 지정해야 한다',
      '이상치를 탐지할 수 있다',
      '계산이 빠르다',
      '항상 같은 결과를 보장한다',
    ],
    answer: 1,
    explanation: 'DBSCAN은 밀도 기반 군집화로, 이상치를 자동으로 탐지하고 군집 수를 미리 지정하지 않아도 됩니다.',
    category: 'ml',
  },
  {
    id: 's4-006',
    subject: '4과목: 빅데이터 결과 해석',
    question: '데이터 분포를 확인하는 데 적합한 차트는?',
    options: [
      '막대 그래프',
      '히스토그램',
      '선 그래프',
      '산점도',
    ],
    answer: 1,
    explanation: '히스토그램은 연속형 변수의 분포를 시각화하는 데 적합합니다.',
    category: 'visual',
  },
  {
    id: 's2-007',
    subject: '2과목: 빅데이터 탐색',
    question: 'Pandas에서 레이블 기반으로 데이터를 선택하는 메서드는?',
    options: [
      'iloc',
      'loc',
      'ix',
      'at',
    ],
    answer: 1,
    explanation: 'loc은 레이블 기반, iloc은 정수 인덱스 기반으로 데이터를 선택합니다.',
    category: 'python',
  },
  {
    id: 's3-009',
    subject: '3과목: 빅데이터 모델링',
    question: '회귀 모델의 성능 평가 지표가 아닌 것은?',
    options: [
      'RMSE',
      'MAE',
      'R-squared',
      'F1 Score',
    ],
    answer: 3,
    explanation: 'F1 Score는 분류 모델의 평가 지표입니다. 회귀는 RMSE, MAE, R-squared 등을 사용합니다.',
    category: 'ml',
  },
  {
    id: 's1-007',
    subject: '1과목: 빅데이터 분석 기획',
    question: 'HDFS의 기본 블록 크기는?',
    options: [
      '64MB',
      '128MB',
      '256MB',
      '512MB',
    ],
    answer: 1,
    explanation: 'HDFS의 기본 블록 크기는 128MB입니다 (하둡 2.x 이후).',
    category: 'hadoop',
  },
  {
    id: 's2-008',
    subject: '2과목: 빅데이터 탐색',
    question: '트리 기반 모델에서 스케일링이 불필요한 이유는?',
    options: [
      '모든 변수를 동일하게 취급하기 때문',
      '분기점을 기준으로 분류하기 때문',
      '거리 기반 알고리즘이기 때문',
      '선형 모델이기 때문',
    ],
    answer: 1,
    explanation: '트리 기반 모델은 변수의 절대적 크기가 아닌 분기점(threshold)을 기준으로 분류하므로 스케일링이 불필요합니다.',
    category: 'ml',
  },
];

// 과목별 문제 필터링
export function getQuestionsBySubject(subject: string): Question[] {
  return questionBank.filter(q => q.subject === subject);
}

// 랜덤 문제 추출
export function getRandomQuestions(count: number, subject?: string): Question[] {
  let pool = subject ? getQuestionsBySubject(subject) : questionBank;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
