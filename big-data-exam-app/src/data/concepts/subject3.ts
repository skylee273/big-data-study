import { Concept } from '../conceptsData';

export const subject3Concepts: Concept[] = [
  // ========== 머신러닝 기초 (1-20) ==========
  {
    id: 's3-ml-supervised',
    subject: 3,
    category: '머신러닝',
    keyword: '지도학습',
    emoji: '👨‍🏫',
    simpleExplanation: `정답이 있는 학습!

선생님이 정답을 알려주며
가르쳐요.`,
    realLifeExample: `📝 수학 문제:
• 문제 + 정답 주어짐
• 풀이 방법 학습
• 새 문제도 풀 수 있음!`,
    examTip: '💯 지도학습 = 레이블 O = 회귀/분류',
    relatedConcepts: ['s3-ml-unsupervised'],
    diagram: `지도학습
입력(X) + 정답(Y)
     ↓
   [모델]
     ↓
새 입력 → 예측값`
  },
  {
    id: 's3-ml-unsupervised',
    subject: 3,
    category: '머신러닝',
    keyword: '비지도학습',
    emoji: '🔍',
    simpleExplanation: `정답 없이 패턴 찾기!

스스로 데이터의
규칙을 발견해요.`,
    realLifeExample: `🎨 색 분류:
정답 없이 비슷한 색끼리
자동으로 그룹화!`,
    examTip: '💯 비지도학습 = 레이블 X = 군집화/차원축소',
    relatedConcepts: ['s3-ml-supervised'],
  },
  {
    id: 's3-ml-reinforcement',
    subject: 3,
    category: '머신러닝',
    keyword: '강화학습',
    emoji: '🎮',
    simpleExplanation: `보상으로 학습!

잘하면 상, 못하면 벌
게임처럼 학습해요.`,
    realLifeExample: `🎮 게임 AI:
• 이기면 +점수
• 지면 -점수
→ 이기는 방법 학습!`,
    examTip: '💯 강화학습 = 보상 기반 = 에이전트/환경/행동',
  },
  {
    id: 's3-regression-vs-classification',
    subject: 3,
    category: '머신러닝',
    keyword: '회귀 vs 분류',
    emoji: '🔀',
    simpleExplanation: `숫자냐 범주냐!

회귀: 숫자 예측 (집값)
분류: 종류 예측 (합격/불합격)`,
    realLifeExample: `🏠 예측 문제:
• 회귀: 집값 = 5억원
• 분류: 합격 = Yes/No`,
    examTip: '💯 회귀=연속형, 분류=범주형',
    diagram: `회귀 vs 분류
회귀: 1, 2, 3... → 2.5
분류: A, B, C... → B`
  },
  {
    id: 's3-overfitting',
    subject: 3,
    category: '머신러닝',
    keyword: '과적합 (Overfitting)',
    emoji: '📚',
    simpleExplanation: `너무 외워버린 거예요!

훈련 데이터만 잘 맞추고
새 데이터는 못 맞춰요.`,
    realLifeExample: `📝 시험 공부:
• 기출문제 답만 외움
• 새 문제는 못 품
→ 과적합!`,
    examTip: '💯 과적합 = 훈련↑ 테스트↓ = 일반화 실패',
    relatedConcepts: ['s3-underfitting'],
    diagram: `과적합 vs 적합
과적합      적합      과소적합
~~∿~~    ───     ────
(복잡)    (적절)    (단순)`
  },
  {
    id: 's3-underfitting',
    subject: 3,
    category: '머신러닝',
    keyword: '과소적합 (Underfitting)',
    emoji: '📉',
    simpleExplanation: `너무 단순한 거예요!

훈련 데이터도
잘 못 맞춰요.`,
    realLifeExample: `📝 공부 부족:
• 기본도 모름
• 모든 문제 틀림
→ 과소적합!`,
    examTip: '💯 과소적합 = 훈련↓ 테스트↓ = 모델이 너무 단순',
    relatedConcepts: ['s3-overfitting'],
  },
  {
    id: 's3-bias-variance',
    subject: 3,
    category: '머신러닝',
    keyword: '편향-분산 트레이드오프',
    emoji: '⚖️',
    simpleExplanation: `둘 다 잡기 어려워요!

편향↓ → 분산↑
분산↓ → 편향↑`,
    realLifeExample: `🎯 다트 비유:
• 편향 큼: 한쪽으로 쏠림
• 분산 큼: 여기저기 흩어짐
→ 둘 다 작게 하기 어려움`,
    examTip: '💯 편향=정확도, 분산=일관성 / 트레이드오프 관계',
    diagram: `편향-분산
편향 높음  편향 낮음
분산 낮음  분산 높음
  ●●●      ·  ·
  ●●●        ·
   ↑          ↑
 일관적    정확하나 흩어짐`
  },
  {
    id: 's3-regularization',
    subject: 3,
    category: '머신러닝',
    keyword: '규제 (Regularization)',
    emoji: '🔧',
    simpleExplanation: `과적합을 막아요!

모델이 너무 복잡해지지
않도록 제한을 걸어요.`,
    realLifeExample: `🎒 짐싸기:
• 규제 없음: 뭐든 다 넣음
• 규제 있음: 꼭 필요한 것만
→ 가벼운 모델!`,
    examTip: '💯 규제 = L1(Lasso), L2(Ridge) = 과적합 방지',
  },
  {
    id: 's3-hyperparameter',
    subject: 3,
    category: '머신러닝',
    keyword: '하이퍼파라미터',
    emoji: '🎛️',
    simpleExplanation: `사람이 정하는 설정값!

모델 학습 전에
미리 정해야 해요.`,
    realLifeExample: `🎛️ 에어컨 설정:
• 온도: 24도 (하이퍼파라미터)
• 실내 온도: 자동 조절 (파라미터)`,
    examTip: '💯 하이퍼파라미터 = 사람이 설정 / 파라미터 = 학습으로 결정',
  },
  {
    id: 's3-grid-search',
    subject: 3,
    category: '머신러닝',
    keyword: '그리드 서치',
    emoji: '🔍',
    simpleExplanation: `모든 조합을 시도!

가능한 모든 설정을
다 해보고 최적 찾기!`,
    realLifeExample: `👔 옷 조합:
• 상의 3개 × 하의 3개
• 9가지 조합 다 입어보고
• 가장 멋진 조합 선택!`,
    examTip: '💯 그리드서치 = 전수 탐색 = 시간 오래 걸림',
    relatedConcepts: ['s3-random-search'],
  },
  {
    id: 's3-random-search',
    subject: 3,
    category: '머신러닝',
    keyword: '랜덤 서치',
    emoji: '🎲',
    simpleExplanation: `무작위로 시도!

랜덤하게 설정을 골라서
좋은 것 찾기!`,
    realLifeExample: `🎰 복권 비유:
• 모든 번호 다 사기 (그리드)
• 랜덤으로 몇 개만 (랜덤서치)
→ 효율적!`,
    examTip: '💯 랜덤서치 = 그리드보다 빠름 = 대략적 탐색',
    relatedConcepts: ['s3-grid-search'],
  },
  {
    id: 's3-cross-validation',
    subject: 3,
    category: '머신러닝',
    keyword: '교차검증',
    emoji: '🔄',
    simpleExplanation: `돌아가며 검증!

데이터를 나눠서
여러 번 테스트해요.`,
    realLifeExample: `📚 공부 검증:
5단원을 돌아가며
4개로 공부, 1개로 테스트`,
    examTip: '💯 K-Fold = 과적합 방지 = 일반화 성능 평가',
    diagram: `5-Fold 교차검증
Fold1: [T][─][─][─][─]
Fold2: [─][T][─][─][─]
Fold3: [─][─][T][─][─]
...
→ 5번 평균!`
  },
  {
    id: 's3-train-test-split',
    subject: 3,
    category: '머신러닝',
    keyword: '데이터 분할',
    emoji: '✂️',
    simpleExplanation: `훈련/테스트로 나눠요!

학습용과 평가용
따로 써요.`,
    realLifeExample: `📝 문제집:
• 80%: 공부용
• 20%: 모의고사용
→ 실력 평가!`,
    examTip: '💯 분할 = 80:20 또는 70:30 = 랜덤 분할',
  },
  {
    id: 's3-feature-importance',
    subject: 3,
    category: '머신러닝',
    keyword: '특성 중요도',
    emoji: '📊',
    simpleExplanation: `어떤 변수가 중요한가!

예측에 영향을 많이 주는
변수를 찾아요.`,
    realLifeExample: `🏠 집값 예측:
• 면적: 중요도 40%
• 위치: 중요도 30%
• 층수: 중요도 10%`,
    examTip: '💯 중요도 = 모델 해석 = 트리 기반에서 자동 계산',
  },
  {
    id: 's3-ensemble',
    subject: 3,
    category: '머신러닝',
    keyword: '앙상블',
    emoji: '🎼',
    simpleExplanation: `여러 모델을 합쳐요!

혼자보다 여럿이
더 정확해요.`,
    realLifeExample: `🎼 오케스트라:
바이올린만 < 전체 합주
→ 여러 악기가 모여 하모니!`,
    examTip: '💯 앙상블 = 여러 모델 결합 = 배깅/부스팅/스태킹',
    diagram: `앙상블
모델1 ─┐
모델2 ─┼─→ 최종 예측
모델3 ─┘`
  },
  {
    id: 's3-bagging',
    subject: 3,
    category: '머신러닝',
    keyword: '배깅 (Bagging)',
    emoji: '🎒',
    simpleExplanation: `여러 모델을 병렬로!

각자 학습하고
결과를 평균/투표해요.`,
    realLifeExample: `👥 다수결:
• 3명이 각자 판단
• 다수 의견 채택
→ 더 정확!`,
    examTip: '💯 배깅 = 병렬 = 분산 감소 = Random Forest',
    relatedConcepts: ['s3-boosting'],
  },
  {
    id: 's3-boosting',
    subject: 3,
    category: '머신러닝',
    keyword: '부스팅 (Boosting)',
    emoji: '🚀',
    simpleExplanation: `순차적으로 개선!

틀린 것에 집중해서
점점 나아져요.`,
    realLifeExample: `📝 오답노트:
1회차 시험 → 틀린 문제 복습
2회차 시험 → 더 적게 틀림
→ 점점 좋아짐!`,
    examTip: '💯 부스팅 = 순차 = 편향 감소 = XGBoost',
    relatedConcepts: ['s3-bagging'],
  },
  {
    id: 's3-stacking',
    subject: 3,
    category: '머신러닝',
    keyword: '스태킹 (Stacking)',
    emoji: '🏗️',
    simpleExplanation: `모델 위에 모델!

여러 모델의 예측을
또 다른 모델이 종합해요.`,
    realLifeExample: `🏫 시험 채점:
• 여러 선생님 채점
• 최종 담당자가 종합
→ 메타 모델!`,
    examTip: '💯 스태킹 = 메타 모델 = 다양한 모델 조합',
  },
  {
    id: 's3-voting',
    subject: 3,
    category: '머신러닝',
    keyword: '보팅 (Voting)',
    emoji: '🗳️',
    simpleExplanation: `투표로 결정!

여러 모델의 예측 중
다수결 또는 평균으로 결정!`,
    realLifeExample: `🗳️ 배심원:
• 3명 중 2명이 "유죄"
• 다수결 → 유죄 판결`,
    examTip: '💯 Hard Voting=다수결, Soft Voting=확률평균',
  },
  {
    id: 's3-pipeline',
    subject: 3,
    category: '머신러닝',
    keyword: '파이프라인',
    emoji: '🔗',
    simpleExplanation: `단계를 연결해요!

전처리 → 모델 → 예측
자동으로 이어져요.`,
    realLifeExample: `🏭 공장 라인:
원료 → 가공 → 조립 → 완성품
→ 자동으로 흘러감!`,
    examTip: '💯 파이프라인 = 전처리+모델 = 코드 간결화',
  },
  // ========== 회귀분석 (21-40) ==========
  {
    id: 's3-linear-regression',
    subject: 3,
    category: '회귀분석',
    keyword: '선형회귀',
    emoji: '📈',
    simpleExplanation: `직선으로 예측!

y = ax + b 형태로
데이터를 표현해요.`,
    realLifeExample: `📈 키-몸무게:
키 170cm → 몸무게 65kg
직선으로 관계 표현!`,
    examTip: '💯 선형회귀 = y = β0 + β1x = 가장 기본',
    diagram: `선형회귀
    ·  ·  /
  ·  · /·
   · /·
  ·/·
 /
y = ax + b`
  },
  {
    id: 's3-multiple-regression',
    subject: 3,
    category: '회귀분석',
    keyword: '다중회귀',
    emoji: '📊',
    simpleExplanation: `여러 변수로 예측!

y = a₁x₁ + a₂x₂ + ... + b
여러 원인을 고려해요.`,
    realLifeExample: `🏠 집값 예측:
집값 = 0.5×면적 + 0.3×역세권 + 0.2×층수`,
    examTip: '💯 다중회귀 = 독립변수 여러 개 = 다중공선성 주의',
  },
  {
    id: 's3-polynomial-regression',
    subject: 3,
    category: '회귀분석',
    keyword: '다항회귀',
    emoji: '🌊',
    simpleExplanation: `곡선으로 예측!

y = ax² + bx + c
휘어진 관계도 표현!`,
    realLifeExample: `🚀 속도-연비:
속도 너무 느려도, 빨라도 연비↓
→ U자형 곡선!`,
    examTip: '💯 다항회귀 = 비선형 관계 = 차수↑ 과적합 위험',
  },
  {
    id: 's3-ridge',
    subject: 3,
    category: '회귀분석',
    keyword: '릿지 회귀 (L2)',
    emoji: '🔧',
    simpleExplanation: `계수를 작게 만들어요!

L2 규제로 계수가
0에 가까워져요.`,
    realLifeExample: `🎒 짐 줄이기:
물건 다 가져가되
각각 양을 줄임 (버리진 X)`,
    examTip: '💯 Ridge = L2 = 계수² 합 최소화 = 작게만 듦',
    relatedConcepts: ['s3-lasso'],
    diagram: `릿지 L2 규제
손실 + λ × Σ(계수)²
→ 계수가 작아짐 (0 아님)`
  },
  {
    id: 's3-lasso',
    subject: 3,
    category: '회귀분석',
    keyword: '라쏘 회귀 (L1)',
    emoji: '✂️',
    simpleExplanation: `불필요한 변수 제거!

L1 규제로 일부 계수가
0이 돼요.`,
    realLifeExample: `🎒 짐 버리기:
필요 없는 건 아예 버림
→ 변수 선택 효과!`,
    examTip: '💯 Lasso = L1 = 계수 절대값 합 = 0으로 만듦 = 변수선택',
    relatedConcepts: ['s3-ridge'],
    diagram: `라쏘 L1 규제
손실 + λ × Σ|계수|
→ 일부 계수가 0!`
  },
  {
    id: 's3-elastic-net',
    subject: 3,
    category: '회귀분석',
    keyword: '엘라스틱넷',
    emoji: '🔀',
    simpleExplanation: `릿지 + 라쏘!

L1과 L2를 섞어서
장점을 모아요.`,
    realLifeExample: `🍹 칵테일:
릿지 반 + 라쏘 반
→ 둘의 장점!`,
    examTip: '💯 ElasticNet = L1 + L2 = 릿지와 라쏘의 절충',
  },
  {
    id: 's3-r-squared',
    subject: 3,
    category: '회귀분석',
    keyword: 'R² (결정계수)',
    emoji: '📊',
    simpleExplanation: `설명력을 나타내요!

0~1 사이 값
1에 가까울수록 좋음!`,
    realLifeExample: `📊 R² = 0.8:
변동의 80%를 모델이 설명
나머지 20%는 설명 못 함`,
    examTip: '💯 R² = 1 - (SSE/SST) = 설명력 = 0~1',
  },
  {
    id: 's3-adjusted-r-squared',
    subject: 3,
    category: '회귀분석',
    keyword: '조정된 R²',
    emoji: '📐',
    simpleExplanation: `변수 수를 고려한 R²!

변수 많아지면 R²가 올라가니까
페널티를 줘요.`,
    realLifeExample: `📊 변수 추가:
• R²: 0.8 → 0.82 (변수 추가)
• 조정R²: 0.8 → 0.79 (오히려↓)
→ 불필요한 변수 추가 탐지!`,
    examTip: '💯 조정R² = 변수 추가 시 감소 가능 = 모델 비교에 적합',
  },
  {
    id: 's3-mse',
    subject: 3,
    category: '회귀분석',
    keyword: 'MSE (평균제곱오차)',
    emoji: '📏',
    simpleExplanation: `오차의 제곱 평균!

(예측값 - 실제값)²
의 평균이에요.`,
    realLifeExample: `📏 오차 계산:
오차: 2, -1, 3
→ 제곱: 4, 1, 9
→ 평균: 4.67`,
    examTip: '💯 MSE = Σ(y-ŷ)²/n = 낮을수록 좋음',
    relatedConcepts: ['s3-rmse', 's3-mae'],
  },
  {
    id: 's3-rmse',
    subject: 3,
    category: '회귀분석',
    keyword: 'RMSE (제곱근평균제곱오차)',
    emoji: '📐',
    simpleExplanation: `MSE의 제곱근!

원래 단위로 해석 가능!`,
    realLifeExample: `📐 집값 오차:
• MSE: 100억²
• RMSE: 10억원
→ 이해하기 쉬움!`,
    examTip: '💯 RMSE = √MSE = 원래 단위 = 가장 많이 사용',
    relatedConcepts: ['s3-mse'],
  },
  {
    id: 's3-mae',
    subject: 3,
    category: '회귀분석',
    keyword: 'MAE (평균절대오차)',
    emoji: '📏',
    simpleExplanation: `오차의 절대값 평균!

부호 무시하고
오차 크기만 봐요.`,
    realLifeExample: `📏 오차 계산:
오차: 2, -1, 3
→ 절대값: 2, 1, 3
→ 평균: 2`,
    examTip: '💯 MAE = Σ|y-ŷ|/n = 이상치에 덜 민감',
    relatedConcepts: ['s3-mse'],
  },
  {
    id: 's3-multicollinearity',
    subject: 3,
    category: '회귀분석',
    keyword: '다중공선성',
    emoji: '🔗',
    simpleExplanation: `독립변수끼리 관련!

변수끼리 너무 관련되면
회귀분석이 불안정해요.`,
    realLifeExample: `📊 키와 다리길이:
둘 다 넣으면 서로 연관
→ 하나만 넣어야!`,
    examTip: '💯 VIF > 10 이면 다중공선성 문제 → 변수 제거/PCA',
  },
  {
    id: 's3-vif',
    subject: 3,
    category: '회귀분석',
    keyword: 'VIF (분산팽창계수)',
    emoji: '📊',
    simpleExplanation: `공선성 측정!

VIF가 크면
다중공선성 문제!`,
    realLifeExample: `📊 VIF 값:
• 1: 공선성 없음
• 5: 약간 있음
• 10+: 심각!`,
    examTip: '💯 VIF = 1/(1-R²) = VIF>10 문제',
  },
  {
    id: 's3-residual',
    subject: 3,
    category: '회귀분석',
    keyword: '잔차 (Residual)',
    emoji: '📉',
    simpleExplanation: `예측값과 실제값 차이!

잔차 = 실제값 - 예측값
모델이 못 잡은 부분!`,
    realLifeExample: `🏠 집값:
• 실제: 5억
• 예측: 4.8억
• 잔차: 0.2억`,
    examTip: '💯 잔차 = y - ŷ = 정규분포여야 좋은 모델',
  },
  {
    id: 's3-logistic-regression',
    subject: 3,
    category: '회귀분석',
    keyword: '로지스틱 회귀',
    emoji: '📊',
    simpleExplanation: `확률로 분류!

0~1 사이 확률을 예측해서
Yes/No를 결정해요.`,
    realLifeExample: `📧 스팸 분류:
P(스팸) = 0.9 → 스팸!
P(스팸) = 0.1 → 정상!`,
    examTip: '💯 로지스틱 = 시그모이드 = 이진분류의 기본',
    diagram: `로지스틱 함수 (S자)
    1 ─────────/
             /
    0.5 ───/───
          /
    0 ───/
        ← 입력값 →`
  },
  {
    id: 's3-sigmoid',
    subject: 3,
    category: '회귀분석',
    keyword: '시그모이드 함수',
    emoji: '〰️',
    simpleExplanation: `S자 곡선!

어떤 값도 0~1 사이로
바꿔줘요.`,
    realLifeExample: `📈 점수→확률:
• 시험점수 -∞~∞
• 확률 0~1로 변환
→ 합격 확률!`,
    examTip: '💯 σ(x) = 1/(1+e^-x) = 0~1 출력',
  },
  {
    id: 's3-odds',
    subject: 3,
    category: '회귀분석',
    keyword: '오즈 (Odds)',
    emoji: '🎲',
    simpleExplanation: `성공 대 실패 비율!

확률 70%면
오즈 = 0.7/0.3 = 2.33`,
    realLifeExample: `🎲 경마:
승률 80%인 말
오즈 = 0.8/0.2 = 4:1`,
    examTip: '💯 Odds = P/(1-P) = 로지스틱의 핵심',
  },
  {
    id: 's3-log-odds',
    subject: 3,
    category: '회귀분석',
    keyword: '로그 오즈',
    emoji: '📊',
    simpleExplanation: `오즈에 로그를 취해요!

-∞~∞ 범위가 되어
선형회귀처럼 다룰 수 있어요.`,
    realLifeExample: `📊 로그 오즈:
• 확률 0.5 → 오즈 1 → 로그오즈 0
• 확률 0.9 → 오즈 9 → 로그오즈 2.2`,
    examTip: '💯 Logit = log(P/(1-P)) = 선형회귀 가능',
  },
  {
    id: 's3-softmax',
    subject: 3,
    category: '회귀분석',
    keyword: '소프트맥스',
    emoji: '📊',
    simpleExplanation: `다중 클래스 확률!

여러 클래스 중 하나를
확률로 선택해요.`,
    realLifeExample: `🖼️ 이미지 분류:
• 고양이: 70%
• 개: 20%
• 새: 10%
→ 합 = 100%`,
    examTip: '💯 소프트맥스 = 다중분류 = 확률 합 1',
  },
  {
    id: 's3-threshold',
    subject: 3,
    category: '회귀분석',
    keyword: '임계값 (Threshold)',
    emoji: '🚧',
    simpleExplanation: `기준점이에요!

확률이 이 값 이상이면
Yes, 미만이면 No!`,
    realLifeExample: `🚧 합격 기준:
• 임계값 0.5
• P=0.6 → 합격
• P=0.4 → 불합격`,
    examTip: '💯 임계값 조정 = 정밀도/재현율 트레이드오프',
  },
  // ========== 분류분석 (41-60) ==========
  {
    id: 's3-decision-tree',
    subject: 3,
    category: '분류분석',
    keyword: '의사결정나무',
    emoji: '🌳',
    simpleExplanation: `질문으로 분류해요!

예/아니오로 나눠가며
결정해요.`,
    realLifeExample: `🌳 과일 분류:
빨간색? → Yes → 사과
       → No → 노란색? → 바나나`,
    examTip: '💯 트리 = 해석 쉬움 = 과적합 주의',
    diagram: `의사결정나무
       [빨강?]
      /       \\
   Yes        No
    |          |
  [사과]    [노랑?]
           /     \\
        바나나   키위`
  },
  {
    id: 's3-gini',
    subject: 3,
    category: '분류분석',
    keyword: '지니 불순도',
    emoji: '📊',
    simpleExplanation: `섞인 정도예요!

0이면 순수 (한 종류만)
0.5면 반반 섞임`,
    realLifeExample: `🎨 구슬 상자:
• 빨간색만: 지니 0 (순수)
• 빨강 50%, 파랑 50%: 지니 0.5`,
    examTip: '💯 지니 = 1 - Σpi² = 작을수록 순수',
  },
  {
    id: 's3-entropy',
    subject: 3,
    category: '분류분석',
    keyword: '엔트로피',
    emoji: '🔀',
    simpleExplanation: `불확실성이에요!

0이면 확실 (한 종류)
높으면 불확실`,
    realLifeExample: `🎯 동전:
• 앞면만 나옴: 엔트로피 0
• 앞뒤 반반: 엔트로피 1 (최대)`,
    examTip: '💯 엔트로피 = -Σpi·log(pi) = 작을수록 순수',
  },
  {
    id: 's3-information-gain',
    subject: 3,
    category: '분류분석',
    keyword: '정보이득',
    emoji: '📈',
    simpleExplanation: `분할로 얻는 정보!

나누기 전후 엔트로피 차이
클수록 좋은 분할!`,
    realLifeExample: `📊 질문 효과:
"성별?" 질문 후 더 잘 나뉨
→ 정보이득 높음!`,
    examTip: '💯 IG = 부모 엔트로피 - 자식 가중평균 엔트로피',
  },
  {
    id: 's3-pruning',
    subject: 3,
    category: '분류분석',
    keyword: '가지치기 (Pruning)',
    emoji: '✂️',
    simpleExplanation: `나무를 잘라요!

너무 복잡한 가지를
잘라서 과적합 방지!`,
    realLifeExample: `🌳 정원 가꾸기:
너무 자란 가지 잘라서
깔끔하게 정리!`,
    examTip: '💯 가지치기 = 과적합 방지 = 사전/사후 가지치기',
  },
  {
    id: 's3-random-forest',
    subject: 3,
    category: '분류분석',
    keyword: '랜덤 포레스트',
    emoji: '🌲',
    simpleExplanation: `나무를 여러 개!

여러 나무가 투표해서
결정해요.`,
    realLifeExample: `🌲 숲의 지혜:
• 나무 100그루 심기
• 각자 판단
• 다수결로 결정!`,
    examTip: '💯 RF = 배깅 + 랜덤 특성 = 과적합에 강함',
    diagram: `랜덤 포레스트
🌲 → A
🌲 → B  → 다수결 → B
🌲 → B
🌲 → A`
  },
  {
    id: 's3-xgboost',
    subject: 3,
    category: '분류분석',
    keyword: 'XGBoost',
    emoji: '🚀',
    simpleExplanation: `강력한 부스팅!

틀린 부분을 계속 보완해서
점점 정확해져요.`,
    realLifeExample: `📝 오답 공부:
1차 시험 틀린 문제 집중
2차 더 잘 봄
→ 점점 완벽해짐!`,
    examTip: '💯 XGBoost = Gradient Boosting + 규제 = 대회 우승 단골',
  },
  {
    id: 's3-lightgbm',
    subject: 3,
    category: '분류분석',
    keyword: 'LightGBM',
    emoji: '💡',
    simpleExplanation: `빠른 부스팅!

리프 기반 성장으로
XGBoost보다 빨라요.`,
    realLifeExample: `🏃 달리기:
XGBoost: 층별로 성장
LightGBM: 잎부터 쭉쭉
→ 더 빠름!`,
    examTip: '💯 LightGBM = Leaf-wise = 빠름 + 대용량 처리',
  },
  {
    id: 's3-catboost',
    subject: 3,
    category: '분류분석',
    keyword: 'CatBoost',
    emoji: '🐱',
    simpleExplanation: `범주형에 강한 부스팅!

범주형 변수를 잘 처리해요.`,
    realLifeExample: `🏷️ 범주형 많을 때:
색상, 브랜드, 지역...
→ CatBoost가 알아서 처리!`,
    examTip: '💯 CatBoost = 범주형 자동 처리 = 인코딩 불필요',
  },
  {
    id: 's3-svm',
    subject: 3,
    category: '분류분석',
    keyword: 'SVM (서포트벡터머신)',
    emoji: '📐',
    simpleExplanation: `경계선을 그어요!

클래스를 가장 잘 나누는
선을 찾아요.`,
    realLifeExample: `📐 분리선:
• 빨강 vs 파랑 점들
• 가장 멀리 떨어진 선 찾기
→ 마진 최대화!`,
    examTip: '💯 SVM = 마진 최대화 = 고차원에 강함',
    diagram: `SVM 마진
○ ○          ● ●
  ○    |    ●
 ○ ○  ←마진→ ● ●
       |
    서포트벡터`
  },
  {
    id: 's3-kernel',
    subject: 3,
    category: '분류분석',
    keyword: '커널 트릭',
    emoji: '🌀',
    simpleExplanation: `차원을 높여요!

선으로 못 나누면
높은 차원에서 나눠요!`,
    realLifeExample: `🌀 동심원:
2D에서 선으로 못 나눔
→ 3D로 올려서 나눔!`,
    examTip: '💯 커널 = RBF, 다항식 등 = 비선형 분류 가능',
  },
  {
    id: 's3-knn',
    subject: 3,
    category: '분류분석',
    keyword: 'KNN (K-최근접이웃)',
    emoji: '👥',
    simpleExplanation: `가까운 이웃을 봐요!

가장 가까운 K명의
다수결로 결정!`,
    realLifeExample: `👥 친구 따라:
가장 가까운 3명이
2명 A반, 1명 B반
→ A반으로!`,
    examTip: '💯 KNN = 거리 기반 = K 홀수 권장 = 게으른 학습',
    diagram: `KNN (K=3)
  ○
 ○ ★ ●  → ★는 ○
  ●
  2 vs 1`
  },
  {
    id: 's3-naive-bayes',
    subject: 3,
    category: '분류분석',
    keyword: '나이브 베이즈',
    emoji: '📧',
    simpleExplanation: `확률로 분류!

특성들이 독립이라 가정하고
베이즈 정리로 계산!`,
    realLifeExample: `📧 스팸 필터:
"무료", "당첨" 단어가 있으면
→ 스팸일 확률 높음!`,
    examTip: '💯 나이브베이즈 = 조건부 독립 가정 = 텍스트 분류에 강함',
  },
  {
    id: 's3-bayes-theorem',
    subject: 3,
    category: '분류분석',
    keyword: '베이즈 정리',
    emoji: '🔄',
    simpleExplanation: `조건부 확률!

P(A|B) = P(B|A)×P(A)/P(B)
증거로 믿음을 업데이트!`,
    realLifeExample: `🏥 검사 결과:
양성이 나왔을 때
진짜 병일 확률은?
→ 베이즈로 계산!`,
    examTip: '💯 베이즈 = 사전확률×우도/증거 = 사후확률',
  },
  {
    id: 's3-confusion-matrix',
    subject: 3,
    category: '분류분석',
    keyword: '혼동행렬',
    emoji: '📊',
    simpleExplanation: `분류 결과표!

맞춘 것, 틀린 것을
표로 정리해요.`,
    realLifeExample: `📊 암 진단:
        예측
       +    -
실제 + TP   FN
     - FP   TN`,
    examTip: '💯 TP/TN/FP/FN = 정밀도/재현율 계산의 기초',
    diagram: `혼동행렬
      예측+  예측-
실제+ [ TP ][ FN ]
실제- [ FP ][ TN ]`
  },
  {
    id: 's3-accuracy',
    subject: 3,
    category: '분류분석',
    keyword: '정확도 (Accuracy)',
    emoji: '🎯',
    simpleExplanation: `전체 중 맞춘 비율!

(TP+TN) / 전체`,
    realLifeExample: `📝 시험:
100문제 중 80개 맞춤
정확도 = 80%`,
    examTip: '💯 정확도 = (TP+TN)/(TP+TN+FP+FN) = 불균형 데이터에 부적합',
  },
  {
    id: 's3-precision',
    subject: 3,
    category: '분류분석',
    keyword: '정밀도 (Precision)',
    emoji: '🔬',
    simpleExplanation: `양성 예측 중 진짜 양성!

내가 Yes라고 한 것 중
진짜 Yes의 비율`,
    realLifeExample: `📧 스팸 분류:
스팸이라 판단한 100개 중
진짜 스팸 90개
→ 정밀도 90%`,
    examTip: '💯 정밀도 = TP/(TP+FP) = 거짓양성 줄이기',
    relatedConcepts: ['s3-recall'],
  },
  {
    id: 's3-recall',
    subject: 3,
    category: '분류분석',
    keyword: '재현율 (Recall)',
    emoji: '🔍',
    simpleExplanation: `실제 양성 중 찾은 비율!

진짜 Yes 중에서
내가 맞춘 비율`,
    realLifeExample: `🏥 암 진단:
실제 암 환자 100명 중
90명 찾음
→ 재현율 90%`,
    examTip: '💯 재현율 = TP/(TP+FN) = 놓치지 않기 = 민감도',
    relatedConcepts: ['s3-precision'],
  },
  {
    id: 's3-f1-score',
    subject: 3,
    category: '분류분석',
    keyword: 'F1 스코어',
    emoji: '⚖️',
    simpleExplanation: `정밀도와 재현율의 조화!

둘의 균형을 보여줘요.
조화평균이에요.`,
    realLifeExample: `⚖️ 균형:
정밀도 90%, 재현율 60%
F1 = 2×90×60/(90+60) = 72%`,
    examTip: '💯 F1 = 2×(정밀도×재현율)/(정밀도+재현율)',
  },
  {
    id: 's3-roc-auc',
    subject: 3,
    category: '분류분석',
    keyword: 'ROC-AUC',
    emoji: '📈',
    simpleExplanation: `성능 곡선!

TPR vs FPR 그래프
아래 면적이 클수록 좋음!`,
    realLifeExample: `📈 모델 비교:
• 모델A: AUC 0.9
• 모델B: AUC 0.7
→ A가 더 좋음!`,
    examTip: '💯 AUC = 1에 가까울수록 좋음 = 0.5는 랜덤',
    diagram: `ROC 곡선
TPR
1│    ╱─
 │  ╱
 │╱
0└─────
 0    FPR    1
  AUC = 면적`
  },
  // ========== 군집분석 (61-80) ==========
  {
    id: 's3-kmeans',
    subject: 3,
    category: '군집분석',
    keyword: 'K-Means',
    emoji: '🎯',
    simpleExplanation: `K개 그룹으로 나눠요!

중심점을 정하고
가까운 점끼리 묶어요.`,
    realLifeExample: `🎯 고객 분류:
• 중심점 3개 시작
• 가까운 고객끼리 그룹
• 중심 재계산, 반복!`,
    examTip: '💯 K-Means = K 미리 지정 = 중심점 기반',
    diagram: `K-Means
  ● ● ●      ▲ 중심1
   ● ●
         ○ ○ ○  ★ 중심2
          ○ ○`
  },
  {
    id: 's3-elbow',
    subject: 3,
    category: '군집분석',
    keyword: '엘보우 방법',
    emoji: '💪',
    simpleExplanation: `K를 찾는 방법!

그래프가 팔꿈치처럼
꺾이는 점이 최적 K!`,
    realLifeExample: `📉 SSE 그래프:
K=1 ──
K=2  ╲
K=3   ╲─── ← 여기!
K=4    ──`,
    examTip: '💯 엘보우 = SSE 감소가 완만해지는 점',
  },
  {
    id: 's3-silhouette',
    subject: 3,
    category: '군집분석',
    keyword: '실루엣 계수',
    emoji: '🎭',
    simpleExplanation: `군집 품질 측정!

-1~1 사이
1에 가까울수록 좋음!`,
    realLifeExample: `🎭 그룹 평가:
• 같은 그룹끼리 가깝고
• 다른 그룹과는 멀면
→ 실루엣 높음!`,
    examTip: '💯 실루엣 = (b-a)/max(a,b) = 1에 가까울수록 좋음',
  },
  {
    id: 's3-dbscan',
    subject: 3,
    category: '군집분석',
    keyword: 'DBSCAN',
    emoji: '🔵',
    simpleExplanation: `밀도로 군집!

밀집된 곳은 군집,
듬성듬성한 곳은 이상치!`,
    realLifeExample: `🗺️ 인구 분포:
도시 = 밀집 = 군집
농촌 = 듬성 = 이상치`,
    examTip: '💯 DBSCAN = 밀도 기반 = K 안 정해도 됨 = 이상치 탐지',
    diagram: `DBSCAN
●●●
 ●●  ○ ← 이상치
●●●
  밀집 = 군집`
  },
  {
    id: 's3-hierarchical',
    subject: 3,
    category: '군집분석',
    keyword: '계층적 군집화',
    emoji: '🌲',
    simpleExplanation: `나무처럼 합쳐요!

가까운 것끼리 합치고
더 큰 그룹으로 합쳐요.`,
    realLifeExample: `🌲 가족 계보:
• 개인 → 가족 → 친척 → 씨족
• 점점 큰 그룹으로!`,
    examTip: '💯 계층적 = 덴드로그램 = 병합/분할 방식',
    diagram: `덴드로그램
      ┌───┴───┐
    ┌─┴─┐   ┌─┴─┐
    A   B   C   D`
  },
  {
    id: 's3-gmm',
    subject: 3,
    category: '군집분석',
    keyword: 'GMM (가우시안 혼합)',
    emoji: '🔔',
    simpleExplanation: `확률적 군집화!

각 점이 여러 군집에
속할 확률을 계산해요.`,
    realLifeExample: `🔔 키 분포:
남자/여자 키 분포 섞임
→ 각 키가 남/여일 확률 계산`,
    examTip: '💯 GMM = 소프트 군집 = 확률적 = EM 알고리즘',
  },
  {
    id: 's3-tsne',
    subject: 3,
    category: '군집분석',
    keyword: 't-SNE',
    emoji: '🗺️',
    simpleExplanation: `고차원을 2D로!

복잡한 데이터를
그림으로 보여줘요.`,
    realLifeExample: `🗺️ 세계지도:
3D 지구를 2D 지도로
→ 관계 유지하며 축소!`,
    examTip: '💯 t-SNE = 시각화 = 지역 구조 보존 = 비선형 차원축소',
  },
  {
    id: 's3-umap',
    subject: 3,
    category: '군집분석',
    keyword: 'UMAP',
    emoji: '📊',
    simpleExplanation: `빠른 차원축소!

t-SNE보다 빠르고
전역 구조도 보존!`,
    realLifeExample: `🚀 t-SNE vs UMAP:
• t-SNE: 느림, 지역만
• UMAP: 빠름, 전체도 OK`,
    examTip: '💯 UMAP = t-SNE보다 빠름 = 전역+지역 구조',
  },
  {
    id: 's3-association-rule',
    subject: 3,
    category: '군집분석',
    keyword: '연관규칙',
    emoji: '🛒',
    simpleExplanation: `함께 나오는 패턴!

A를 사면 B도 산다
같은 규칙을 찾아요.`,
    realLifeExample: `🛒 장바구니 분석:
기저귀 사면 맥주도 삼
→ 같이 진열!`,
    examTip: '💯 연관규칙 = 지지도/신뢰도/향상도',
  },
  {
    id: 's3-support',
    subject: 3,
    category: '군집분석',
    keyword: '지지도 (Support)',
    emoji: '📊',
    simpleExplanation: `얼마나 자주 나오나!

전체 거래 중
그 조합이 나오는 비율`,
    realLifeExample: `🛒 빵+우유:
1000건 중 100건에서 발생
지지도 = 10%`,
    examTip: '💯 지지도 = P(A∩B) = 빈도',
  },
  {
    id: 's3-confidence',
    subject: 3,
    category: '군집분석',
    keyword: '신뢰도 (Confidence)',
    emoji: '🎯',
    simpleExplanation: `A 사면 B 살 확률!

A 산 사람 중
B도 산 비율`,
    realLifeExample: `🛒 빵→우유:
빵 산 200명 중 150명이 우유
신뢰도 = 75%`,
    examTip: '💯 신뢰도 = P(B|A) = 조건부 확률',
  },
  {
    id: 's3-lift',
    subject: 3,
    category: '군집분석',
    keyword: '향상도 (Lift)',
    emoji: '📈',
    simpleExplanation: `우연보다 얼마나 좋은가!

1보다 크면 관련 있음
1이면 무관`,
    realLifeExample: `📈 향상도:
• 1.5 = 50% 더 잘 팔림
• 1.0 = 우연
• 0.5 = 오히려 방해`,
    examTip: '💯 향상도 = 신뢰도/P(B) = 1 이상이어야 의미',
  },
  {
    id: 's3-apriori',
    subject: 3,
    category: '군집분석',
    keyword: 'Apriori 알고리즘',
    emoji: '🔍',
    simpleExplanation: `빈발 항목 찾기!

자주 나오는 조합을
효율적으로 찾아요.`,
    realLifeExample: `🛒 장바구니:
{빵} → {빵,우유} → {빵,우유,버터}
점점 조합 확장!`,
    examTip: '💯 Apriori = 빈발항목집합 = 후보생성+가지치기',
  },
  // ========== 딥러닝 (81-100) ==========
  {
    id: 's3-neural-network',
    subject: 3,
    category: '딥러닝',
    keyword: '인공신경망',
    emoji: '🧠',
    simpleExplanation: `뇌를 흉내낸 모델!

뉴런처럼 연결되어
복잡한 패턴을 학습해요.`,
    realLifeExample: `🧠 뇌 신경:
자극 → 뉴런1 → 뉴런2 → 반응
→ 인공으로 구현!`,
    examTip: '💯 신경망 = 입력층→은닉층→출력층',
    diagram: `인공신경망
입력    은닉    출력
 ○───○
 ○─╲╱─○───○
 ○───○`
  },
  {
    id: 's3-perceptron',
    subject: 3,
    category: '딥러닝',
    keyword: '퍼셉트론',
    emoji: '⚡',
    simpleExplanation: `가장 단순한 신경망!

입력×가중치 합해서
활성화 함수 통과!`,
    realLifeExample: `⚡ 결정하기:
(가격×0.3 + 거리×0.7) > 기준
→ 구매/비구매`,
    examTip: '💯 퍼셉트론 = Σwx + b → 활성화 = 선형 분류만',
  },
  {
    id: 's3-mlp',
    subject: 3,
    category: '딥러닝',
    keyword: 'MLP (다층 퍼셉트론)',
    emoji: '🏗️',
    simpleExplanation: `층을 여러 개 쌓아요!

은닉층이 있어서
비선형 문제도 풀어요.`,
    realLifeExample: `🏗️ 건물 층:
1층(입력) → 2층(은닉) → 3층(출력)
→ 복잡한 패턴 학습!`,
    examTip: '💯 MLP = 다층 = 비선형 가능 = 완전연결',
  },
  {
    id: 's3-activation',
    subject: 3,
    category: '딥러닝',
    keyword: '활성화 함수',
    emoji: '⚡',
    simpleExplanation: `비선형을 만들어요!

선형 조합 후
비선형 변환!`,
    realLifeExample: `💡 스위치:
입력이 기준 넘으면 ON
아니면 OFF`,
    examTip: '💯 활성화 = ReLU, Sigmoid, Tanh = 비선형 필수',
  },
  {
    id: 's3-relu',
    subject: 3,
    category: '딥러닝',
    keyword: 'ReLU',
    emoji: '📈',
    simpleExplanation: `음수는 0, 양수는 그대로!

f(x) = max(0, x)
가장 많이 쓰여요.`,
    realLifeExample: `📈 급여:
음수면 0 (급여 없음)
양수면 그대로!`,
    examTip: '💯 ReLU = max(0,x) = 기울기 소실 방지 = 기본 선택',
    diagram: `ReLU
    │    /
    │   /
────┼──/───
    │/
    │`
  },
  {
    id: 's3-gradient-descent',
    subject: 3,
    category: '딥러닝',
    keyword: '경사하강법',
    emoji: '⛷️',
    simpleExplanation: `골짜기를 찾아가요!

가장 낮은 곳(최소 오차)을
향해 내려가요.`,
    realLifeExample: `⛷️ 스키:
경사 따라 내려가면
가장 낮은 곳에 도착!`,
    examTip: '💯 경사하강 = ∂Loss/∂w = 학습률 중요',
    diagram: `경사하강법
    \\
     \\  ← 현재
      \\
       \\__● ← 최소점`
  },
  {
    id: 's3-learning-rate',
    subject: 3,
    category: '딥러닝',
    keyword: '학습률 (Learning Rate)',
    emoji: '🎚️',
    simpleExplanation: `한 번에 얼마나 이동할지!

너무 크면 지나치고
너무 작으면 느려요.`,
    realLifeExample: `🚶 걸음 크기:
• 큼: 목적지 지나침
• 작음: 너무 오래 걸림
• 적당: 딱 맞게!`,
    examTip: '💯 학습률 = 0.001~0.1 = 너무 크면 발산',
  },
  {
    id: 's3-backpropagation',
    subject: 3,
    category: '딥러닝',
    keyword: '역전파',
    emoji: '🔙',
    simpleExplanation: `오차를 뒤로 전파!

출력의 오차를
입력 쪽으로 전달해요.`,
    realLifeExample: `📝 채점:
결과 오차 → 원인 찾기
→ 각 가중치 수정!`,
    examTip: '💯 역전파 = 체인룰 = 기울기 전파 = 딥러닝 핵심',
  },
  {
    id: 's3-optimizer',
    subject: 3,
    category: '딥러닝',
    keyword: '옵티마이저',
    emoji: '⚙️',
    simpleExplanation: `최적화 방법!

가중치를 어떻게 업데이트할지
전략을 정해요.`,
    realLifeExample: `⚙️ 옵티마이저 종류:
• SGD: 기본
• Adam: 적응적
• RMSprop: 학습률 조정`,
    examTip: '💯 Adam = 가장 많이 사용 = 적응적 학습률',
  },
  {
    id: 's3-batch-size',
    subject: 3,
    category: '딥러닝',
    keyword: '배치 사이즈',
    emoji: '📦',
    simpleExplanation: `한 번에 학습할 양!

전체 데이터를 나눠서
조금씩 학습해요.`,
    realLifeExample: `📦 짐 나르기:
• 배치 32: 32개씩 운반
• 작으면 자주, 크면 가끔`,
    examTip: '💯 배치 = 32, 64, 128 = 메모리/속도 트레이드오프',
  },
  {
    id: 's3-epoch',
    subject: 3,
    category: '딥러닝',
    keyword: '에포크 (Epoch)',
    emoji: '🔄',
    simpleExplanation: `전체 데이터 한 바퀴!

모든 데이터를 한 번씩
학습하면 1 에포크!`,
    realLifeExample: `📚 문제집:
문제집 전체 1번 풀기 = 1 에포크
10번 반복 = 10 에포크`,
    examTip: '💯 에포크↑ = 학습↑ = 과적합 위험↑',
  },
  {
    id: 's3-dropout',
    subject: 3,
    category: '딥러닝',
    keyword: '드롭아웃',
    emoji: '✂️',
    simpleExplanation: `랜덤하게 끊어요!

학습 중 일부 뉴런을
꺼서 과적합 방지!`,
    realLifeExample: `👥 조별과제:
• 랜덤으로 1명 빠짐
• 나머지가 더 열심히!
→ 의존 방지`,
    examTip: '💯 드롭아웃 = 과적합 방지 = 0.2~0.5',
  },
  {
    id: 's3-cnn',
    subject: 3,
    category: '딥러닝',
    keyword: 'CNN (합성곱신경망)',
    emoji: '🖼️',
    simpleExplanation: `이미지 전문!

필터로 특징을 추출해서
이미지를 인식해요.`,
    realLifeExample: `🖼️ 사진 인식:
• 가장자리 찾기
• 모양 찾기
• 물체 인식!`,
    examTip: '💯 CNN = 합성곱 + 풀링 = 이미지/영상 처리',
    diagram: `CNN 구조
입력 → [Conv] → [Pool] → [Conv] → [FC] → 출력
이미지   특징추출   축소    깊은특징  분류`
  },
  {
    id: 's3-convolution',
    subject: 3,
    category: '딥러닝',
    keyword: '합성곱 (Convolution)',
    emoji: '🔍',
    simpleExplanation: `필터로 스캔!

작은 필터가 이미지를
훑으며 특징 추출!`,
    realLifeExample: `🔍 돋보기:
이미지 위를 돋보기로
훑으며 패턴 찾기!`,
    examTip: '💯 합성곱 = 필터 × 입력 = 특징맵 생성',
  },
  {
    id: 's3-pooling',
    subject: 3,
    category: '딥러닝',
    keyword: '풀링 (Pooling)',
    emoji: '🔽',
    simpleExplanation: `크기를 줄여요!

영역의 최대값이나
평균값만 남겨요.`,
    realLifeExample: `📸 썸네일:
큰 이미지를 작게
→ 중요한 정보만 유지`,
    examTip: '💯 풀링 = MaxPool(최대), AvgPool(평균) = 다운샘플링',
  },
  {
    id: 's3-rnn',
    subject: 3,
    category: '딥러닝',
    keyword: 'RNN (순환신경망)',
    emoji: '🔄',
    simpleExplanation: `순서가 있는 데이터!

이전 상태를 기억하며
순서대로 처리해요.`,
    realLifeExample: `📖 문장 읽기:
"나는" → "학교에" → "간다"
앞 단어 기억하며 읽기!`,
    examTip: '💯 RNN = 시퀀스 데이터 = 텍스트/시계열',
    diagram: `RNN 구조
x₁ → [h₁] → x₂ → [h₂] → x₃ → [h₃]
       ↓          ↓          ↓
      y₁         y₂         y₃`
  },
  {
    id: 's3-lstm',
    subject: 3,
    category: '딥러닝',
    keyword: 'LSTM',
    emoji: '🧠',
    simpleExplanation: `장기 기억 가능!

중요한 건 오래 기억,
불필요한 건 잊어요.`,
    realLifeExample: `📚 책 읽기:
• 주인공 이름: 계속 기억
• 배경 설명: 잠시 기억
→ 선택적 기억!`,
    examTip: '💯 LSTM = 장기의존성 = 게이트 구조 = RNN 개선',
  },
  {
    id: 's3-gru',
    subject: 3,
    category: '딥러닝',
    keyword: 'GRU',
    emoji: '⚡',
    simpleExplanation: `간단한 LSTM!

게이트가 적어서
LSTM보다 빨라요.`,
    realLifeExample: `🏃 LSTM vs GRU:
• LSTM: 게이트 3개 (정교)
• GRU: 게이트 2개 (빠름)`,
    examTip: '💯 GRU = LSTM 간소화 = 더 빠름 = 성능 비슷',
  },
  {
    id: 's3-transformer',
    subject: 3,
    category: '딥러닝',
    keyword: '트랜스포머',
    emoji: '🤖',
    simpleExplanation: `어텐션으로 학습!

순서 상관없이 전체를
한번에 보고 중요한 것 집중!`,
    realLifeExample: `👀 문장 이해:
"나는 사과를 먹었다"
→ "나"와 "먹었다" 관계 파악!`,
    examTip: '💯 트랜스포머 = Self-Attention = GPT/BERT 기반',
  },
  {
    id: 's3-attention',
    subject: 3,
    category: '딥러닝',
    keyword: '어텐션 (Attention)',
    emoji: '👁️',
    simpleExplanation: `중요한 곳에 집중!

입력 중 중요한 부분에
가중치를 더 줘요.`,
    realLifeExample: `👁️ 수업 시간:
선생님이 "시험에 나온다!"
→ 그 부분 집중!`,
    examTip: '💯 어텐션 = Query×Key = Value 가중합 = 핵심 기술',
  },
];
