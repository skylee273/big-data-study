export interface StudyItem {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  content: string;
  keyPoints?: string[];
  isWeakness?: boolean;
}

export interface QuizItem {
  id: string;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  isWeakness?: boolean;
}

export const categories = [
  { id: 'bigdata', name: '빅데이터 개념', icon: '📊' },
  { id: 'data', name: '데이터 이해', icon: '📁' },
  { id: 'stats', name: '통계 분석', icon: '📈' },
  { id: 'ml', name: '머신러닝', icon: '🤖' },
  { id: 'sql', name: 'SQL/데이터베이스', icon: '🗃️' },
  { id: 'preprocess', name: '데이터 전처리', icon: '🔧' },
  { id: 'visual', name: '시각화', icon: '📉' },
  { id: 'hadoop', name: '하둡/분산처리', icon: '🐘' },
  { id: 'python', name: 'Python/R', icon: '🐍' },
  { id: 'law', name: '법규/관리', icon: '📋' },
];

// 빅데이터분석기사 4과목 구조
export const examSubjects = [
  {
    id: 'subject1',
    name: '1과목: 빅데이터 분석 기획',
    topics: '빅데이터 이해, 데이터 분석 계획, 데이터 준비',
    questionCount: 20,
  },
  {
    id: 'subject2',
    name: '2과목: 빅데이터 탐색',
    topics: '데이터 전처리, 탐색적 분석',
    questionCount: 20,
  },
  {
    id: 'subject3',
    name: '3과목: 빅데이터 모델링',
    topics: '분석 모형 설계, 머신러닝, 통계 분석',
    questionCount: 20,
  },
  {
    id: 'subject4',
    name: '4과목: 빅데이터 결과 해석',
    topics: '분석 결과 해석, 시각화, 활용',
    questionCount: 20,
  },
];

export const studyItems: StudyItem[] = [
  // ==================== 빅데이터 개념 ====================
  {
    id: 'bigdata-3v',
    category: 'bigdata',
    subcategory: '빅데이터 특성',
    title: '빅데이터 3V (+ 추가 V)',
    content: `
**빅데이터의 3V 특성:**

| 특성 | 설명 | 예시 |
|------|------|------|
| **Volume** | 데이터의 크기/양 | 페타바이트급 데이터 |
| **Velocity** | 데이터 생성/처리 속도 | 실시간 스트리밍 |
| **Variety** | 데이터의 다양성 | 정형, 반정형, 비정형 |

**추가된 V들:**
- **Veracity** (진실성): 데이터의 정확성, 신뢰성
- **Value** (가치): 데이터로부터 추출하는 비즈니스 가치
- **Variability** (가변성): 데이터 의미의 변동성

**데이터 유형:**
- **정형 데이터**: 고정된 스키마 (RDB, Excel)
- **반정형 데이터**: 스키마 포함 (JSON, XML)
- **비정형 데이터**: 스키마 없음 (이미지, 동영상, 텍스트)
    `,
    keyPoints: ['3V = Volume, Velocity, Variety', 'Veracity = 진실성/정확성', '비정형 = 스키마 없음'],
    isWeakness: true,
  },
  {
    id: 'bigdata-platform',
    category: 'bigdata',
    subcategory: '빅데이터 플랫폼',
    title: '빅데이터 분석 플랫폼 구성',
    content: `
**빅데이터 플랫폼 계층 구조:**

\`\`\`
┌─────────────────────────────────────┐
│       분석 및 시각화 계층            │
│   (Tableau, Power BI, Superset)     │
├─────────────────────────────────────┤
│         처리/분석 계층               │
│   (Spark, Hive, Presto, Flink)      │
├─────────────────────────────────────┤
│          저장 계층                   │
│   (HDFS, S3, HBase, Cassandra)      │
├─────────────────────────────────────┤
│          수집 계층                   │
│   (Kafka, Flume, Sqoop, NiFi)       │
└─────────────────────────────────────┘
\`\`\`

**주요 컴포넌트:**
- **수집**: Kafka(스트리밍), Sqoop(RDB), Flume(로그)
- **저장**: HDFS(파일), HBase(NoSQL), S3(클라우드)
- **처리**: Spark(범용), Hive(SQL), Flink(실시간)
    `,
    keyPoints: ['수집→저장→처리→분석 순서', 'Kafka = 실시간 스트리밍', 'Sqoop = RDB 연동'],
    isWeakness: true,
  },

  // ==================== 데이터 이해 ====================
  {
    id: 'data-types',
    category: 'data',
    subcategory: '데이터 유형',
    title: '데이터 척도 (측정 수준)',
    content: `
**데이터 척도 4가지:**

| 척도 | 특성 | 연산 | 예시 |
|------|------|------|------|
| **명목** | 분류만 가능 | =, ≠ | 성별, 혈액형 |
| **서열** | 순서 있음 | <, > | 학점, 만족도 |
| **등간** | 간격 동일 | +, - | 온도(섭씨), IQ |
| **비율** | 절대적 0점 | ×, ÷ | 나이, 무게, 키 |

**기억법:**
- **명목**: 이름만 (nominal = name)
- **서열**: 순서만 (ordinal = order)
- **등간**: 등차 (interval = 간격)
- **비율**: 비례 (ratio = 비율)

**주의:**
- 등간척도는 절대 0이 없음 (0도가 "온도 없음"이 아님)
- 비율척도만 배수 비교 가능 ("2배 무겁다")
    `,
    keyPoints: ['명목<서열<등간<비율', '등간: 절대0 없음', '비율: 절대0 있음 (배수 비교 가능)'],
    isWeakness: true,
  },
  {
    id: 'data-quality',
    category: 'data',
    subcategory: '데이터 품질',
    title: '데이터 품질 요소',
    content: `
**데이터 품질의 6대 요소:**

| 요소 | 설명 |
|------|------|
| **정확성** (Accuracy) | 데이터가 실제 값과 일치 |
| **완전성** (Completeness) | 필수 데이터가 누락 없이 존재 |
| **일관성** (Consistency) | 데이터 간 모순이 없음 |
| **유일성** (Uniqueness) | 중복 데이터 없음 |
| **적시성** (Timeliness) | 적절한 시점에 데이터 제공 |
| **유효성** (Validity) | 정의된 형식/규칙 준수 |

**품질 관리 활동:**
1. **프로파일링**: 데이터 현황 분석
2. **클렌징**: 오류 데이터 정정
3. **표준화**: 데이터 형식 통일
4. **모니터링**: 지속적 품질 점검
    `,
    keyPoints: ['정확성/완전성/일관성 핵심', '프로파일링 = 현황 분석', '클렌징 = 오류 정정'],
  },

  // ==================== 통계 분석 ====================
  {
    id: 'stats-central',
    category: 'stats',
    subcategory: '기술통계',
    title: '중심경향치 (평균, 중앙값, 최빈값)',
    content: `
**중심경향치 종류:**

| 측정치 | 설명 | 특징 |
|--------|------|------|
| **평균** | 모든 값의 합 / 개수 | 이상치에 민감 |
| **중앙값** | 정렬 후 가운데 값 | 이상치에 강건 |
| **최빈값** | 가장 많이 나온 값 | 범주형 데이터에 적합 |

**이상치가 있을 때:**
- 평균보다 **중앙값** 사용 권장
- 예: 소득 분포, 집값 분포

**분포 형태:**
\`\`\`
오른쪽 꼬리: 평균 > 중앙값 > 최빈값
왼쪽 꼬리:  평균 < 중앙값 < 최빈값
정규분포:   평균 = 중앙값 = 최빈값
\`\`\`

**절사평균 (Trimmed Mean):**
- 상하위 일정% 제거 후 평균 계산
- 이상치 영향 감소
    `,
    keyPoints: ['이상치 → 중앙값 사용', '오른쪽 꼬리: 평균 > 중앙값', '절사평균: 양끝 제거'],
    isWeakness: true,
  },
  {
    id: 'stats-dispersion',
    category: 'stats',
    subcategory: '기술통계',
    title: '산포도 (분산, 표준편차, IQR)',
    content: `
**산포도 측정:**

| 측정치 | 공식 | 특징 |
|--------|------|------|
| **범위** | max - min | 이상치에 민감 |
| **분산** | Σ(xi-μ)²/n | 제곱 단위 |
| **표준편차** | √분산 | 원래 단위 |
| **IQR** | Q3 - Q1 | 이상치에 강건 |

**사분위수:**
- **Q1** (25%): 1사분위수
- **Q2** (50%): 중앙값
- **Q3** (75%): 3사분위수
- **IQR** = Q3 - Q1

**이상치 탐지 (IQR 방법):**
\`\`\`
이상치 기준:
  하한: Q1 - 1.5 × IQR
  상한: Q3 + 1.5 × IQR
\`\`\`

**변동계수 (CV):**
- CV = 표준편차 / 평균 × 100%
- 단위가 다른 데이터 비교에 사용
    `,
    keyPoints: ['IQR = Q3 - Q1', '이상치: Q1-1.5IQR, Q3+1.5IQR', 'CV = 표준편차/평균'],
    isWeakness: true,
  },
  {
    id: 'stats-hypothesis',
    category: 'stats',
    subcategory: '추론통계',
    title: '가설검정 (귀무가설, 대립가설)',
    content: `
**가설검정 기본:**

| 용어 | 설명 |
|------|------|
| **귀무가설 (H0)** | 기존 가설, 차이/효과 없음 |
| **대립가설 (H1)** | 새로운 가설, 차이/효과 있음 |
| **유의수준 (α)** | 1종 오류 허용 확률 (보통 0.05) |
| **p-value** | 귀무가설 기각 근거 |

**검정 결과:**
- p-value < α → **귀무가설 기각** (유의미)
- p-value ≥ α → **귀무가설 채택** (유의미하지 않음)

**오류 유형:**
| 오류 | 현실 | 판단 | 위험 |
|------|------|------|------|
| **1종 오류 (α)** | H0 참 | H0 기각 | 거짓 양성 |
| **2종 오류 (β)** | H0 거짓 | H0 채택 | 거짓 음성 |

**검정력 = 1 - β** (참인 대립가설을 기각하는 확률)
    `,
    keyPoints: ['p < 0.05 → 귀무가설 기각', '1종 오류 = α = 거짓 양성', '검정력 = 1 - β'],
    isWeakness: true,
  },
  {
    id: 'stats-correlation',
    category: 'stats',
    subcategory: '상관분석',
    title: '상관계수 종류',
    content: `
**상관계수 유형:**

| 상관계수 | 데이터 유형 | 범위 |
|----------|-------------|------|
| **피어슨** | 연속형-연속형 | -1 ~ 1 |
| **스피어만** | 순서형 (비선형) | -1 ~ 1 |
| **켄달타우** | 순서형 (작은 표본) | -1 ~ 1 |
| **점이연** | 이분형-연속형 | -1 ~ 1 |

**피어슨 상관계수:**
\`\`\`
r = Σ(xi-x̄)(yi-ȳ) / √[Σ(xi-x̄)²·Σ(yi-ȳ)²]
\`\`\`

**해석:**
| |r| | 강도 |
|-----|------|
| 0.0 - 0.3 | 약함 |
| 0.3 - 0.7 | 보통 |
| 0.7 - 1.0 | 강함 |

**주의:**
- 상관관계 ≠ 인과관계
- 이상치에 민감 (스피어만 사용 권장)
    `,
    keyPoints: ['피어슨 = 연속형', '스피어만 = 순서형/비선형', '상관 ≠ 인과'],
    isWeakness: true,
  },

  // ==================== 머신러닝 ====================
  {
    id: 'ml-types',
    category: 'ml',
    subcategory: '머신러닝 기초',
    title: '머신러닝 분류 (지도/비지도/강화)',
    content: `
**머신러닝 유형:**

| 유형 | 레이블 | 목적 | 알고리즘 |
|------|--------|------|----------|
| **지도학습** | 있음 | 예측 | 회귀, 분류 |
| **비지도학습** | 없음 | 패턴발견 | 군집화, 차원축소 |
| **강화학습** | 보상 | 행동최적화 | Q-Learning |

**지도학습:**
- **회귀**: 연속형 예측 (집값, 매출)
- **분류**: 범주형 예측 (스팸여부, 질병여부)

**비지도학습:**
- **군집화**: K-Means, DBSCAN, 계층적
- **차원축소**: PCA, t-SNE, UMAP
- **연관규칙**: Apriori, FP-Growth

**강화학습:**
- Agent가 환경과 상호작용
- 보상 최대화를 위한 정책 학습
- 예: 게임 AI, 자율주행
    `,
    keyPoints: ['지도 = 레이블 O', '비지도 = 레이블 X', '강화 = 보상 기반'],
    isWeakness: true,
  },
  {
    id: 'ml-regression',
    category: 'ml',
    subcategory: '지도학습',
    title: '회귀 분석 (선형, 다항, 릿지, 라쏘)',
    content: `
**회귀 모델 종류:**

| 모델 | 특징 | 규제 |
|------|------|------|
| **선형회귀** | 기본 | 없음 |
| **다항회귀** | 비선형 관계 | 없음 |
| **릿지 (Ridge)** | 과적합 방지 | L2 (계수 작게) |
| **라쏘 (Lasso)** | 변수 선택 | L1 (계수 0으로) |
| **엘라스틱넷** | 릿지+라쏘 | L1 + L2 |

**규제 (Regularization):**
\`\`\`
Ridge: Loss + λ·Σβ²    (L2)
Lasso: Loss + λ·Σ|β|   (L1)
\`\`\`

**다중공선성:**
- 독립변수 간 높은 상관
- **VIF > 10** 이면 문제
- 해결: 변수 제거, 릿지 회귀, PCA

**회귀 평가지표:**
- **R² (결정계수)**: 설명력 (0~1)
- **MSE**: 평균제곱오차
- **RMSE**: √MSE
- **MAE**: 평균절대오차
    `,
    keyPoints: ['Ridge = L2 (작게)', 'Lasso = L1 (0으로)', 'VIF > 10 = 다중공선성'],
    isWeakness: true,
  },
  {
    id: 'ml-classification',
    category: 'ml',
    subcategory: '지도학습',
    title: '분류 알고리즘',
    content: `
**분류 알고리즘 비교:**

| 알고리즘 | 특징 | 장점 |
|----------|------|------|
| **로지스틱 회귀** | 확률 기반 | 해석 용이 |
| **결정트리** | 규칙 기반 | 직관적 |
| **랜덤포레스트** | 앙상블(배깅) | 과적합 방지 |
| **XGBoost** | 앙상블(부스팅) | 높은 성능 |
| **SVM** | 마진 최대화 | 고차원에 강함 |
| **KNN** | 거리 기반 | 단순함 |
| **나이브베이즈** | 확률 기반 | 텍스트 분류 |

**분류 평가지표:**
| 지표 | 공식 | 의미 |
|------|------|------|
| **정확도** | (TP+TN)/전체 | 전체 정답률 |
| **정밀도** | TP/(TP+FP) | 양성예측 정확도 |
| **재현율** | TP/(TP+FN) | 실제양성 탐지율 |
| **F1 Score** | 2·(정밀도·재현율)/(정밀도+재현율) | 조화평균 |

**ROC-AUC:**
- ROC: TPR vs FPR 곡선
- AUC: 곡선 아래 면적 (1에 가까울수록 좋음)
    `,
    keyPoints: ['정밀도 = TP/(TP+FP)', '재현율 = TP/(TP+FN)', 'F1 = 조화평균'],
    isWeakness: true,
  },
  {
    id: 'ml-ensemble',
    category: 'ml',
    subcategory: '앙상블',
    title: '앙상블 기법 (배깅, 부스팅, 스태킹)',
    content: `
**앙상블 유형:**

| 기법 | 방식 | 특징 | 예시 |
|------|------|------|------|
| **배깅** | 병렬 | 분산 감소 | 랜덤포레스트 |
| **부스팅** | 순차 | 편향 감소 | XGBoost, AdaBoost |
| **스태킹** | 계층 | 메타 학습 | 다양한 모델 조합 |

**배깅 (Bootstrap Aggregating):**
\`\`\`
1. 부트스트랩 샘플링 (복원추출)
2. 각 샘플로 모델 학습
3. 결과 집계 (평균 또는 다수결)
\`\`\`

**부스팅:**
\`\`\`
1. 첫 모델 학습
2. 오분류 샘플에 가중치 증가
3. 다음 모델은 어려운 샘플 집중
4. 최종: 가중 평균
\`\`\`

**주요 알고리즘:**
- **Random Forest**: 배깅 + 랜덤 피처 선택
- **AdaBoost**: 오분류 가중치 증가
- **Gradient Boosting**: 잔차 학습
- **XGBoost**: 정규화 + 병렬처리
- **LightGBM**: 리프 중심 분할 (빠름)
    `,
    keyPoints: ['배깅 = 병렬, 분산감소', '부스팅 = 순차, 편향감소', 'XGBoost = 정규화 부스팅'],
    isWeakness: true,
  },
  {
    id: 'ml-clustering',
    category: 'ml',
    subcategory: '비지도학습',
    title: '군집화 알고리즘',
    content: `
**군집화 알고리즘 비교:**

| 알고리즘 | 특징 | 군집 수 |
|----------|------|---------|
| **K-Means** | 중심점 기반 | 사전 지정 |
| **DBSCAN** | 밀도 기반 | 자동 결정 |
| **계층적** | 트리 구조 | 덴드로그램 |
| **GMM** | 확률 기반 | 사전 지정 |

**K-Means:**
\`\`\`
1. K개 중심점 초기화
2. 가장 가까운 중심에 할당
3. 중심점 재계산
4. 2-3 반복 (수렴까지)
\`\`\`

**K 결정 방법:**
- **엘보우 방법**: SSE 그래프 꺾이는 점
- **실루엣 분석**: 군집 품질 측정 (-1~1)

**DBSCAN:**
- **eps**: 이웃 반경
- **min_samples**: 최소 점 개수
- 장점: 이상치 탐지, 임의 형태 군집

**계층적 군집화:**
- **응집형**: 아래→위 (개별→전체)
- **분할형**: 위→아래 (전체→개별)
- **덴드로그램**: 군집 과정 시각화
    `,
    keyPoints: ['K-Means = 중심점 기반', 'DBSCAN = 밀도 기반, 이상치 탐지', '엘보우 = K 결정'],
    isWeakness: true,
  },

  // ==================== SQL/데이터베이스 ====================
  {
    id: 'sql-join',
    category: 'sql',
    subcategory: 'SQL 기초',
    title: 'JOIN 종류',
    content: `
**JOIN 유형:**

| JOIN | 설명 | 결과 |
|------|------|------|
| **INNER JOIN** | 양쪽 일치 | 교집합 |
| **LEFT JOIN** | 왼쪽 전체 + 오른쪽 일치 | 왼쪽 기준 |
| **RIGHT JOIN** | 오른쪽 전체 + 왼쪽 일치 | 오른쪽 기준 |
| **FULL OUTER** | 양쪽 전체 | 합집합 |
| **CROSS JOIN** | 모든 조합 | 카테시안 곱 |

**예시:**
\`\`\`sql
-- INNER JOIN
SELECT a.*, b.*
FROM table_a a
INNER JOIN table_b b ON a.id = b.a_id;

-- LEFT JOIN (NULL 포함)
SELECT a.*, b.*
FROM table_a a
LEFT JOIN table_b b ON a.id = b.a_id;
\`\`\`

**성능 고려:**
- 인덱스가 있는 컬럼으로 JOIN
- 작은 테이블을 왼쪽에 배치
- 필요한 컬럼만 SELECT
    `,
    keyPoints: ['INNER = 교집합', 'LEFT = 왼쪽 기준', 'CROSS = 카테시안 곱'],
    isWeakness: true,
  },
  {
    id: 'sql-aggregate',
    category: 'sql',
    subcategory: 'SQL 기초',
    title: '집계 함수와 GROUP BY',
    content: `
**집계 함수:**

| 함수 | 설명 | NULL 처리 |
|------|------|-----------|
| **COUNT(*)** | 행 개수 | 포함 |
| **COUNT(col)** | 값 개수 | 제외 |
| **SUM** | 합계 | 제외 |
| **AVG** | 평균 | 제외 |
| **MAX/MIN** | 최대/최소 | 제외 |

**GROUP BY & HAVING:**
\`\`\`sql
SELECT category, COUNT(*) as cnt, AVG(price) as avg_price
FROM products
WHERE price > 0           -- 그룹화 전 필터
GROUP BY category
HAVING COUNT(*) >= 5      -- 그룹화 후 필터
ORDER BY avg_price DESC;
\`\`\`

**실행 순서:**
\`\`\`
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
\`\`\`

**윈도우 함수:**
\`\`\`sql
SELECT
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank,
    SUM(salary) OVER (PARTITION BY dept) as dept_total
FROM employees;
\`\`\`
    `,
    keyPoints: ['WHERE = 그룹 전', 'HAVING = 그룹 후', 'COUNT(*) NULL 포함'],
    isWeakness: true,
  },

  // ==================== 데이터 전처리 ====================
  {
    id: 'preprocess-missing',
    category: 'preprocess',
    subcategory: '결측값 처리',
    title: '결측값 처리 방법',
    content: `
**결측값 처리 방법:**

| 방법 | 설명 | 적용 상황 |
|------|------|----------|
| **삭제** | 행/열 제거 | 결측 비율 낮을 때 |
| **평균대체** | 평균으로 대체 | 정규분포 |
| **중앙값대체** | 중앙값으로 대체 | 이상치 있을 때 |
| **최빈값대체** | 최빈값으로 대체 | 범주형 |
| **보간법** | 앞뒤 값으로 추정 | 시계열 |
| **예측모델** | ML로 예측 | 복잡한 관계 |

**결측 유형:**
- **MCAR**: 완전 무작위 결측
- **MAR**: 무작위 결측 (다른 변수에 의존)
- **MNAR**: 비무작위 결측 (결측값 자체에 의존)

**Python 예시:**
\`\`\`python
# 결측값 확인
df.isnull().sum()

# 삭제
df.dropna()

# 대체
df.fillna(df.mean())
df.fillna(method='ffill')  # 앞값으로 채움
\`\`\`
    `,
    keyPoints: ['MCAR/MAR/MNAR 구분', '이상치 → 중앙값', 'ffill = 앞값 채움'],
    isWeakness: true,
  },
  {
    id: 'preprocess-scaling',
    category: 'preprocess',
    subcategory: '스케일링',
    title: '데이터 스케일링 (정규화, 표준화)',
    content: `
**스케일링 방법:**

| 방법 | 공식 | 범위 | 특징 |
|------|------|------|------|
| **Min-Max** | (x-min)/(max-min) | 0~1 | 이상치에 민감 |
| **표준화** | (x-μ)/σ | 약 -3~3 | 평균0, 표준편차1 |
| **Robust** | (x-Q2)/(Q3-Q1) | - | 이상치에 강건 |

**사용 기준:**
- **Min-Max**: 신경망, 이미지
- **표준화**: 대부분의 ML 알고리즘
- **Robust**: 이상치가 많을 때

**Python 예시:**
\`\`\`python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# 표준화
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Min-Max
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
\`\`\`

**주의:**
- Train 데이터로 fit, Test는 transform만
- 트리 기반 모델은 스케일링 불필요
    `,
    keyPoints: ['Min-Max = 0~1', '표준화 = 평균0 표준편차1', 'Robust = 이상치에 강건'],
    isWeakness: true,
  },
  {
    id: 'preprocess-encoding',
    category: 'preprocess',
    subcategory: '인코딩',
    title: '범주형 변수 인코딩',
    content: `
**인코딩 방법:**

| 방법 | 설명 | 예시 |
|------|------|------|
| **Label** | 숫자로 변환 | 빨강→0, 파랑→1 |
| **One-Hot** | 이진 벡터 | 빨강→[1,0,0] |
| **Target** | 타겟 평균 | 도시별 평균 소득 |
| **Ordinal** | 순서 반영 | 상→3, 중→2, 하→1 |

**언제 사용?**
- **Label**: 순서 있는 범주 (학점)
- **One-Hot**: 순서 없는 범주 (색깔)
- **Target**: 고차원 범주

**One-Hot 인코딩:**
\`\`\`python
import pandas as pd
pd.get_dummies(df['color'], drop_first=True)
\`\`\`

**주의:**
- One-Hot: 차원의 저주 (카테고리 많으면)
- Label: 순서 없는 데이터에 부적합
- Target: 데이터 누수 주의 (k-fold 필요)
    `,
    keyPoints: ['순서 없음 → One-Hot', '순서 있음 → Label/Ordinal', 'Target = 타겟 평균'],
    isWeakness: true,
  },

  // ==================== 시각화 ====================
  {
    id: 'visual-charts',
    category: 'visual',
    subcategory: '차트 선택',
    title: '데이터 유형별 적합한 차트',
    content: `
**차트 선택 가이드:**

| 목적 | 적합한 차트 |
|------|-------------|
| **비교** | 막대, 레이더 |
| **추세** | 선, 영역 |
| **분포** | 히스토그램, 박스플롯 |
| **비율** | 파이, 도넛, 트리맵 |
| **관계** | 산점도, 버블 |
| **구성** | 누적 막대, 면적 |

**변수 개수별:**
| 변수 | 차트 |
|------|------|
| 1개 범주 | 막대 |
| 1개 연속 | 히스토그램 |
| 2개 범주 | 그룹 막대 |
| 2개 연속 | 산점도 |
| 연속+범주 | 박스플롯 |
| 시계열 | 선 |

**시각화 원칙:**
- 0에서 시작 (막대 그래프)
- 3D 지양 (왜곡 발생)
- 색상 최소화 (5~7개 이하)
    `,
    keyPoints: ['비교=막대', '추세=선', '분포=히스토그램/박스플롯', '관계=산점도'],
    isWeakness: true,
  },

  // ==================== 하둡/분산처리 ====================
  {
    id: 'hadoop-ecosystem',
    category: 'hadoop',
    subcategory: '하둡 에코시스템',
    title: '하둡 에코시스템 구성',
    content: `
**하둡 핵심 구성:**

| 구성요소 | 역할 |
|----------|------|
| **HDFS** | 분산 파일 시스템 |
| **YARN** | 리소스 관리 |
| **MapReduce** | 분산 처리 프레임워크 |

**HDFS 구조:**
\`\`\`
NameNode (마스터)
├── 메타데이터 관리
├── 파일 위치 정보
└── 장애 복구

DataNode (슬레이브)
├── 실제 데이터 저장
├── 블록 단위 관리 (128MB)
└── 복제 (기본 3개)
\`\`\`

**주요 에코시스템:**
| 도구 | 역할 |
|------|------|
| **Hive** | SQL 쿼리 (HQL) |
| **Pig** | 데이터 흐름 스크립트 |
| **HBase** | NoSQL (컬럼 기반) |
| **Sqoop** | RDB ↔ HDFS |
| **Flume** | 로그 수집 |
| **Kafka** | 메시지 큐 |
| **Spark** | 인메모리 처리 |
| **Zookeeper** | 코디네이션 |
    `,
    keyPoints: ['HDFS = 저장', 'YARN = 리소스', 'MapReduce = 처리', '블록 = 128MB'],
    isWeakness: true,
  },
  {
    id: 'hadoop-mapreduce',
    category: 'hadoop',
    subcategory: 'MapReduce',
    title: 'MapReduce 동작 원리',
    content: `
**MapReduce 단계:**

\`\`\`
Input → Split → Map → Shuffle → Reduce → Output
\`\`\`

**각 단계 설명:**

| 단계 | 설명 | 예시 (Word Count) |
|------|------|-------------------|
| **Split** | 데이터 분할 | 청크로 나눔 |
| **Map** | 키-값 변환 | (단어, 1) |
| **Shuffle** | 같은 키 모음 | (단어, [1,1,1]) |
| **Reduce** | 집계 | (단어, 3) |

**Word Count 예시:**
\`\`\`
Input: "hello world hello"

Map 출력:
(hello, 1)
(world, 1)
(hello, 1)

Shuffle 후:
(hello, [1, 1])
(world, [1])

Reduce 출력:
(hello, 2)
(world, 1)
\`\`\`

**Combiner:**
- Map 출력을 로컬에서 미리 집계
- 네트워크 전송량 감소
- Reduce와 동일한 로직

**Spark vs MapReduce:**
- Spark: 인메모리, 더 빠름
- MapReduce: 디스크 I/O, 대용량 안정적
    `,
    keyPoints: ['Map = 키-값 변환', 'Shuffle = 같은 키 모음', 'Reduce = 집계', 'Combiner = 로컬 집계'],
    isWeakness: true,
  },

  // ==================== Python/R ====================
  {
    id: 'python-pandas',
    category: 'python',
    subcategory: 'Pandas',
    title: 'Pandas 핵심 함수',
    content: `
**데이터 확인:**
\`\`\`python
df.head()           # 상위 5행
df.info()           # 데이터 타입, 결측
df.describe()       # 통계 요약
df.shape            # (행, 열)
df.columns          # 컬럼명
\`\`\`

**데이터 선택:**
\`\`\`python
df['col']           # 단일 컬럼 (Series)
df[['col1', 'col2']] # 다중 컬럼 (DataFrame)
df.loc[0]           # 레이블 기반
df.iloc[0]          # 인덱스 기반
df[df['col'] > 5]   # 조건 필터
\`\`\`

**데이터 조작:**
\`\`\`python
df.drop('col', axis=1)    # 컬럼 삭제
df.rename(columns={})      # 컬럼명 변경
df.sort_values('col')      # 정렬
df.groupby('col').mean()   # 그룹별 집계
df.merge(df2, on='key')    # 병합
df.concat([df1, df2])      # 연결
df.pivot_table()           # 피벗 테이블
\`\`\`

**결측값 처리:**
\`\`\`python
df.isnull().sum()         # 결측 개수
df.dropna()               # 결측 행 삭제
df.fillna(value)          # 대체
\`\`\`
    `,
    keyPoints: ['loc = 레이블', 'iloc = 인덱스', 'axis=1 = 컬럼', 'axis=0 = 행'],
    isWeakness: true,
  },
  {
    id: 'python-sklearn',
    category: 'python',
    subcategory: 'Scikit-learn',
    title: 'Scikit-learn 기본 패턴',
    content: `
**기본 워크플로우:**
\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# 1. 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 2. 전처리
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 3. 모델 학습
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

# 4. 예측 및 평가
y_pred = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, y_pred)
\`\`\`

**교차 검증:**
\`\`\`python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5)
print(f"평균: {scores.mean()}, 표준편차: {scores.std()}")
\`\`\`

**하이퍼파라미터 튜닝:**
\`\`\`python
from sklearn.model_selection import GridSearchCV

params = {'C': [0.1, 1, 10]}
grid = GridSearchCV(model, params, cv=5)
grid.fit(X_train, y_train)
print(grid.best_params_)
\`\`\`
    `,
    keyPoints: ['fit_transform = 학습+변환', 'transform = 변환만', 'fit = 학습', 'predict = 예측'],
    isWeakness: true,
  },

  // ==================== 법규/관리 ====================
  {
    id: 'law-pipa',
    category: 'law',
    subcategory: '개인정보보호',
    title: '개인정보보호법 핵심',
    content: `
**개인정보 정의:**
- 살아있는 개인에 관한 정보
- 개인을 식별할 수 있는 정보
- 다른 정보와 결합하여 식별 가능한 정보

**개인정보 처리 단계:**

| 단계 | 내용 |
|------|------|
| **수집** | 동의 획득, 목적 명시 |
| **이용** | 수집 목적 범위 내 |
| **제공** | 제3자 제공 시 동의 |
| **위탁** | 위탁 계약 체결 |
| **파기** | 목적 달성 시 지체 없이 |

**가명정보:**
- 개인 식별 불가하도록 처리
- 통계작성, 과학적 연구, 공익적 기록보존 목적
- 동의 없이 활용 가능

**익명정보:**
- 복원 불가능하게 처리
- 개인정보보호법 적용 제외

**기술적 보호조치:**
- 접근권한 관리
- 암호화 (개인정보 전송/저장 시)
- 접속기록 보관 (최소 1년)
    `,
    keyPoints: ['가명 = 동의 없이 연구/통계 가능', '익명 = 법 적용 제외', '파기 = 목적 달성 시 지체 없이'],
    isWeakness: true,
  },
  {
    id: 'law-data-ethics',
    category: 'law',
    subcategory: '데이터 윤리',
    title: '데이터/AI 윤리',
    content: `
**데이터 윤리 원칙:**

| 원칙 | 설명 |
|------|------|
| **투명성** | 데이터 처리 과정 공개 |
| **공정성** | 편향 없는 데이터/알고리즘 |
| **책임성** | 결과에 대한 책임 |
| **프라이버시** | 개인정보 보호 |

**AI 윤리 이슈:**

| 이슈 | 설명 |
|------|------|
| **편향(Bias)** | 학습 데이터의 편향이 결과에 반영 |
| **설명가능성** | 블랙박스 문제 (XAI로 해결) |
| **책임소재** | AI 결정에 대한 책임 |
| **일자리** | 자동화로 인한 실업 |

**XAI (설명가능한 AI):**
- **LIME**: 개별 예측 설명
- **SHAP**: 피처 중요도 계산
- **Attention**: 모델이 주목하는 부분

**데이터 거버넌스:**
- 데이터 정책 및 표준 수립
- 데이터 품질 관리
- 데이터 보안 및 접근 통제
- 데이터 생명주기 관리
    `,
    keyPoints: ['XAI = 설명가능한 AI', 'SHAP = 피처 중요도', '편향 = 학습데이터 문제'],
    isWeakness: true,
  },
];

export const quizItems: QuizItem[] = [
  {
    id: 'q1',
    category: 'bigdata',
    question: '빅데이터의 3V 특성에 해당하지 않는 것은?',
    options: [
      'Volume (크기)',
      'Velocity (속도)',
      'Value (가치)',
      'Variety (다양성)',
    ],
    answer: 2,
    explanation: '3V는 Volume, Velocity, Variety입니다. Value(가치)는 추가된 특성입니다.',
    isWeakness: true,
  },
  {
    id: 'q2',
    category: 'stats',
    question: '이상치가 있는 데이터의 중심경향치로 가장 적절한 것은?',
    options: [
      '평균',
      '중앙값',
      '최빈값',
      '분산',
    ],
    answer: 1,
    explanation: '중앙값은 이상치에 영향을 덜 받아 강건(robust)한 측정치입니다.',
    isWeakness: true,
  },
  {
    id: 'q3',
    category: 'ml',
    question: 'L1 규제를 사용하여 변수 선택 효과가 있는 회귀 모델은?',
    options: [
      '선형 회귀',
      '릿지 회귀',
      '라쏘 회귀',
      '다항 회귀',
    ],
    answer: 2,
    explanation: '라쏘(Lasso)는 L1 규제를 사용하여 일부 계수를 0으로 만들어 변수 선택 효과가 있습니다.',
    isWeakness: true,
  },
  {
    id: 'q4',
    category: 'preprocess',
    question: '데이터 표준화(Standardization)의 결과는?',
    options: [
      '0~1 범위로 변환',
      '평균 0, 표준편차 1로 변환',
      '최대값을 1로 변환',
      'IQR로 나눈 값',
    ],
    answer: 1,
    explanation: '표준화는 (x-평균)/표준편차로 계산하여 평균 0, 표준편차 1로 변환합니다.',
    isWeakness: true,
  },
];
