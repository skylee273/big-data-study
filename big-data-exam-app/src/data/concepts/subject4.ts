import { Concept } from '../conceptsData';

export const subject4Concepts: Concept[] = [
  // ========== 시각화 (1-25) ==========
  {
    id: 's4-visualization-purpose',
    subject: 4,
    category: '시각화',
    keyword: '시각화 목적',
    emoji: '📊',
    simpleExplanation: `데이터를 그림으로!

숫자보다 그림이
이해하기 쉬워요.`,
    realLifeExample: `📊 매출 보고:
• 숫자: 1월 100, 2월 120...
• 그래프: 📈 한눈에 상승!`,
    examTip: '💯 시각화 = 탐색/설명/소통 = 인사이트 전달',
  },
  {
    id: 's4-chart-selection',
    subject: 4,
    category: '시각화',
    keyword: '차트 선택 기준',
    emoji: '🎯',
    simpleExplanation: `목적에 맞는 차트!

비교? 추세? 분포?
목적에 따라 골라요.`,
    realLifeExample: `📊 차트 선택:
• 비교 → 막대
• 추세 → 선
• 비율 → 파이`,
    examTip: '💯 비교=막대, 추세=선, 분포=히스토그램, 관계=산점도',
    diagram: `목적별 차트
비교 → 막대그래프
추세 → 선그래프
분포 → 히스토그램
비율 → 파이차트
관계 → 산점도`
  },
  {
    id: 's4-bar-chart',
    subject: 4,
    category: '시각화',
    keyword: '막대그래프',
    emoji: '📊',
    simpleExplanation: `범주별 크기 비교!

막대 길이로
크기를 나타내요.`,
    realLifeExample: `📊 월별 매출:
1월 ████ 100
2월 ██████ 150
3월 ████████ 200`,
    examTip: '💯 막대 = 범주형 비교 = 세로/가로 막대',
  },
  {
    id: 's4-line-chart',
    subject: 4,
    category: '시각화',
    keyword: '선그래프',
    emoji: '📈',
    simpleExplanation: `시간에 따른 변화!

점을 연결해서
추세를 보여줘요.`,
    realLifeExample: `📈 주가 추세:
──╱──╲──╱──
시간 흐름에 따른 변화!`,
    examTip: '💯 선 = 시계열 = 추세 파악',
  },
  {
    id: 's4-pie-chart',
    subject: 4,
    category: '시각화',
    keyword: '파이차트',
    emoji: '🥧',
    simpleExplanation: `전체 중 비율!

원을 나눠서
비율을 보여줘요.`,
    realLifeExample: `🥧 시장 점유율:
A사 40% 🟦
B사 35% 🟩
C사 25% 🟧`,
    examTip: '💯 파이 = 비율 = 5개 이하 범주에 적합',
  },
  {
    id: 's4-scatter-plot',
    subject: 4,
    category: '시각화',
    keyword: '산점도',
    emoji: '⚫',
    simpleExplanation: `두 변수의 관계!

점으로 찍어서
관계를 확인해요.`,
    realLifeExample: `📊 키-몸무게:
    ·  ·
  ·  ·
 ·
키↑ 몸무게↑ 양의 상관`,
    examTip: '💯 산점도 = 연속형×연속형 = 상관관계 확인',
  },
  {
    id: 's4-histogram',
    subject: 4,
    category: '시각화',
    keyword: '히스토그램',
    emoji: '📊',
    simpleExplanation: `분포를 보여줘요!

구간별로 빈도를
막대로 표시해요.`,
    realLifeExample: `📊 성적 분포:
60-70: ██
70-80: ████████
80-90: ████`,
    examTip: '💯 히스토그램 = 연속형 분포 = 정규분포 확인',
  },
  {
    id: 's4-boxplot',
    subject: 4,
    category: '시각화',
    keyword: '박스플롯',
    emoji: '📦',
    simpleExplanation: `5개 요약 수치!

최소, Q1, 중앙값, Q3, 최대
한눈에 보여줘요.`,
    realLifeExample: `📦 박스플롯:
    ●     ← 이상치
 ┬──┴──┬  ← 최대
 │     │
 ├─────┤  ← Q3
 │  ─  │  ← 중앙값
 ├─────┤  ← Q1
 ┴─────┴  ← 최소`,
    examTip: '💯 박스플롯 = 분포+이상치 = 그룹 비교에 좋음',
  },
  {
    id: 's4-heatmap',
    subject: 4,
    category: '시각화',
    keyword: '히트맵',
    emoji: '🌡️',
    simpleExplanation: `색으로 값 표현!

진할수록 큰 값
연할수록 작은 값`,
    realLifeExample: `🌡️ 상관행렬:
🟥 강한 상관
🟧 중간
🟦 약한 상관`,
    examTip: '💯 히트맵 = 행렬 데이터 = 상관행렬에 적합',
  },
  {
    id: 's4-treemap',
    subject: 4,
    category: '시각화',
    keyword: '트리맵',
    emoji: '🗺️',
    simpleExplanation: `계층적 비율!

면적으로 크기를
표현해요.`,
    realLifeExample: `🗺️ 부서별 예산:
┌─────────┬───┐
│ 영업 50%│개발│
│         │25%│
├────┬────┼───┤
│마케│인사│기타│`,
    examTip: '💯 트리맵 = 계층+비율 = 공간 효율적',
  },
  {
    id: 's4-bubble-chart',
    subject: 4,
    category: '시각화',
    keyword: '버블차트',
    emoji: '🔵',
    simpleExplanation: `3가지 정보를 한번에!

x, y 위치 + 크기`,
    realLifeExample: `🔵 국가 비교:
• x: GDP
• y: 행복도
• 크기: 인구`,
    examTip: '💯 버블 = 3변수 = x,y,크기 동시 표현',
  },
  {
    id: 's4-radar-chart',
    subject: 4,
    category: '시각화',
    keyword: '레이더차트',
    emoji: '🕸️',
    simpleExplanation: `여러 항목 비교!

거미줄처럼 생긴
다각형 그래프예요.`,
    realLifeExample: `🕸️ 게임 캐릭터:
    공격
   ╱    ╲
 방어 ─ 속도
    ╲    ╱
    체력`,
    examTip: '💯 레이더 = 다차원 비교 = 강약점 파악',
  },
  {
    id: 's4-waterfall',
    subject: 4,
    category: '시각화',
    keyword: '워터폴 차트',
    emoji: '💧',
    simpleExplanation: `증감을 단계별로!

시작값에서 최종값까지
변화를 보여줘요.`,
    realLifeExample: `💧 이익 분석:
매출 ████████ 100
-비용 ▼████  -40
-세금 ▼██    -20
순이익 ████   40`,
    examTip: '💯 워터폴 = 누적 증감 = 재무 분석에 적합',
  },
  {
    id: 's4-sankey',
    subject: 4,
    category: '시각화',
    keyword: '생키 다이어그램',
    emoji: '🔀',
    simpleExplanation: `흐름을 보여줘요!

어디서 어디로 가는지
폭으로 양을 표현!`,
    realLifeExample: `🔀 고객 이동:
방문 ═══╗
      ╔═╝═══ 구매
      ╚══════ 이탈`,
    examTip: '💯 생키 = 흐름 = 전환/이동 분석',
  },
  {
    id: 's4-funnel-chart',
    subject: 4,
    category: '시각화',
    keyword: '퍼널차트',
    emoji: '🔻',
    simpleExplanation: `단계별 감소!

깔때기처럼 줄어드는
과정을 보여줘요.`,
    realLifeExample: `🔻 구매 퍼널:
╲ 방문 1000명 ╱
 ╲ 회원가입 500 ╱
  ╲ 장바구니 200 ╱
   ╲ 결제 50명 ╱`,
    examTip: '💯 퍼널 = 전환율 = 이탈 지점 파악',
  },
  {
    id: 's4-gauge-chart',
    subject: 4,
    category: '시각화',
    keyword: '게이지차트',
    emoji: '🎯',
    simpleExplanation: `목표 대비 현재!

자동차 계기판처럼
진행률을 보여줘요.`,
    realLifeExample: `🎯 KPI 달성률:
    ╱─────╲
   ╱  75%  ╲
  ╱ ▲       ╲
 목표: 100`,
    examTip: '💯 게이지 = 목표 대비 = KPI 대시보드',
  },
  {
    id: 's4-choropleth',
    subject: 4,
    category: '시각화',
    keyword: '단계구분도 (지도)',
    emoji: '🗺️',
    simpleExplanation: `지도에 색칠!

지역별 값을
색으로 표현해요.`,
    realLifeExample: `🗺️ 인구밀도 지도:
서울 🟥 (높음)
강원 🟦 (낮음)`,
    examTip: '💯 단계구분도 = 지리 데이터 = 지역별 비교',
  },
  {
    id: 's4-word-cloud',
    subject: 4,
    category: '시각화',
    keyword: '워드클라우드',
    emoji: '☁️',
    simpleExplanation: `단어 크기로 빈도!

자주 나오는 단어가
더 크게 표시돼요.`,
    realLifeExample: `☁️ 리뷰 분석:
  맛있다
 서비스    좋아요
    친절  추천`,
    examTip: '💯 워드클라우드 = 텍스트 빈도 = 키워드 파악',
  },
  {
    id: 's4-network-graph',
    subject: 4,
    category: '시각화',
    keyword: '네트워크 그래프',
    emoji: '🔗',
    simpleExplanation: `연결 관계를 보여줘요!

점(노드)과 선(엣지)으로
관계를 표현해요.`,
    realLifeExample: `🔗 SNS 친구:
  A ─── B
   ╲   ╱
    ╲ ╱
     C`,
    examTip: '💯 네트워크 = 관계 = 소셜네트워크/조직도',
  },
  {
    id: 's4-dashboard',
    subject: 4,
    category: '시각화',
    keyword: '대시보드',
    emoji: '📱',
    simpleExplanation: `여러 차트를 한 화면에!

핵심 지표를 한눈에
볼 수 있어요.`,
    realLifeExample: `📱 경영 대시보드:
┌─────┬─────┐
│매출📈│고객📊│
├─────┼─────┤
│재고🎯│주문📋│
└─────┴─────┘`,
    examTip: '💯 대시보드 = 실시간 모니터링 = 의사결정 지원',
  },
  {
    id: 's4-storytelling',
    subject: 4,
    category: '시각화',
    keyword: '데이터 스토리텔링',
    emoji: '📖',
    simpleExplanation: `데이터로 이야기해요!

숫자를 이야기로
풀어서 전달해요.`,
    realLifeExample: `📖 매출 보고:
"3월 매출이 20% 증가했습니다.
주 원인은 신제품 출시입니다."`,
    examTip: '💯 스토리텔링 = 맥락+인사이트+액션 = 설득력↑',
  },
  {
    id: 's4-color-usage',
    subject: 4,
    category: '시각화',
    keyword: '색상 사용 원칙',
    emoji: '🎨',
    simpleExplanation: `색은 적게, 의미있게!

너무 많은 색은
혼란을 줘요.`,
    realLifeExample: `🎨 색상 원칙:
• 5~7개 이하
• 빨강 = 경고/나쁨
• 초록 = 좋음/증가`,
    examTip: '💯 색상 = 일관성 + 의미 부여 + 색맹 고려',
  },
  {
    id: 's4-chart-lie',
    subject: 4,
    category: '시각화',
    keyword: '차트 왜곡 주의',
    emoji: '⚠️',
    simpleExplanation: `잘못된 차트 조심!

축을 조작하면
왜곡될 수 있어요.`,
    realLifeExample: `⚠️ 왜곡 예:
• y축 0에서 시작 안 함
• 3D 효과로 크기 왜곡
• 비율 무시`,
    examTip: '💯 왜곡 방지 = 0 시작 + 비율 유지 + 3D 지양',
  },
  {
    id: 's4-interactive-viz',
    subject: 4,
    category: '시각화',
    keyword: '인터랙티브 시각화',
    emoji: '🖱️',
    simpleExplanation: `클릭하고 탐색해요!

사용자가 직접
데이터를 탐색해요.`,
    realLifeExample: `🖱️ 인터랙티브:
• 마우스 오버 → 상세정보
• 클릭 → 드릴다운
• 필터 → 데이터 선택`,
    examTip: '💯 인터랙티브 = Tableau, Power BI = 탐색적 분석',
  },
  {
    id: 's4-viz-tools',
    subject: 4,
    category: '시각화',
    keyword: '시각화 도구',
    emoji: '🛠️',
    simpleExplanation: `그래프 그리는 도구!

다양한 도구로
시각화할 수 있어요.`,
    realLifeExample: `🛠️ 도구 종류:
• Tableau: 비즈니스
• Python: matplotlib, seaborn
• R: ggplot2`,
    examTip: '💯 Tableau=BI, matplotlib=Python, ggplot2=R',
  },
  // ========== 모델 평가 (26-50) ==========
  {
    id: 's4-model-evaluation',
    subject: 4,
    category: '모델 평가',
    keyword: '모델 평가 개요',
    emoji: '✅',
    simpleExplanation: `모델이 얼마나 좋은가!

정확도, 오차 등으로
성능을 측정해요.`,
    realLifeExample: `✅ 시험 채점:
• 맞춘 개수
• 틀린 정도
→ 성적 평가!`,
    examTip: '💯 평가 = 훈련 성능 + 테스트 성능 = 일반화 확인',
  },
  {
    id: 's4-accuracy-metric',
    subject: 4,
    category: '모델 평가',
    keyword: '정확도 (Accuracy)',
    emoji: '🎯',
    simpleExplanation: `전체 중 맞춘 비율!

(맞춘 수) / (전체)`,
    realLifeExample: `🎯 100문제 중 85개 정답
정확도 = 85%`,
    examTip: '💯 정확도 = (TP+TN)/전체 = 불균형 시 주의',
  },
  {
    id: 's4-precision-metric',
    subject: 4,
    category: '모델 평가',
    keyword: '정밀도 (Precision)',
    emoji: '🔬',
    simpleExplanation: `양성 예측의 정확성!

Yes라고 한 것 중
진짜 Yes 비율`,
    realLifeExample: `📧 스팸 분류:
스팸이라 한 100개 중
진짜 스팸 90개 = 90%`,
    examTip: '💯 정밀도 = TP/(TP+FP) = 거짓양성↓',
  },
  {
    id: 's4-recall-metric',
    subject: 4,
    category: '모델 평가',
    keyword: '재현율 (Recall)',
    emoji: '🔍',
    simpleExplanation: `실제 양성 중 찾은 비율!

진짜 Yes 중에서
내가 찾은 비율`,
    realLifeExample: `🏥 암 진단:
암 환자 100명 중
95명 발견 = 95%`,
    examTip: '💯 재현율 = TP/(TP+FN) = 놓치지 않기',
  },
  {
    id: 's4-f1-metric',
    subject: 4,
    category: '모델 평가',
    keyword: 'F1 스코어',
    emoji: '⚖️',
    simpleExplanation: `정밀도와 재현율의 균형!

둘의 조화평균이에요.`,
    realLifeExample: `⚖️ 균형 잡기:
정밀도 80%, 재현율 60%
F1 = 약 68%`,
    examTip: '💯 F1 = 2×P×R/(P+R) = 불균형 데이터에 적합',
  },
  {
    id: 's4-specificity',
    subject: 4,
    category: '모델 평가',
    keyword: '특이도 (Specificity)',
    emoji: '🎯',
    simpleExplanation: `실제 음성 중 맞춘 비율!

No인 것 중
No라고 맞춘 비율`,
    realLifeExample: `🏥 건강검진:
정상인 100명 중
90명 정상 판정 = 90%`,
    examTip: '💯 특이도 = TN/(TN+FP) = 거짓양성↓',
  },
  {
    id: 's4-roc-curve',
    subject: 4,
    category: '모델 평가',
    keyword: 'ROC 곡선',
    emoji: '📈',
    simpleExplanation: `TPR vs FPR 그래프!

임계값 변화에 따른
성능을 보여줘요.`,
    realLifeExample: `📈 ROC:
     1│    ╱─
TPR  │  ╱
     │╱
     0└───────
       0  FPR  1`,
    examTip: '💯 ROC = 모든 임계값의 성능 = 왼쪽 위가 좋음',
  },
  {
    id: 's4-auc-metric',
    subject: 4,
    category: '모델 평가',
    keyword: 'AUC',
    emoji: '📊',
    simpleExplanation: `ROC 곡선 아래 면적!

1에 가까울수록 좋고
0.5면 랜덤과 같아요.`,
    realLifeExample: `📊 AUC 해석:
• 1.0: 완벽
• 0.9: 우수
• 0.5: 랜덤 수준`,
    examTip: '💯 AUC = 면적 = 클수록 좋음 = 0.5 이상 필수',
  },
  {
    id: 's4-log-loss',
    subject: 4,
    category: '모델 평가',
    keyword: '로그 손실 (Log Loss)',
    emoji: '📉',
    simpleExplanation: `확률 예측의 오차!

예측 확률과 실제의
차이를 측정해요.`,
    realLifeExample: `📉 로그 손실:
• 실제 1, 예측 0.9 → 작은 손실
• 실제 1, 예측 0.1 → 큰 손실`,
    examTip: '💯 Log Loss = -Σy·log(p) = 작을수록 좋음',
  },
  {
    id: 's4-mse-metric',
    subject: 4,
    category: '모델 평가',
    keyword: 'MSE/RMSE/MAE',
    emoji: '📏',
    simpleExplanation: `회귀 오차 측정!

예측값과 실제값의
차이를 측정해요.`,
    realLifeExample: `📏 집값 오차:
• 실제: 5억
• 예측: 4.8억
• 오차: 0.2억`,
    examTip: '💯 MSE=제곱평균, RMSE=√MSE, MAE=절대값평균',
  },
  {
    id: 's4-r2-metric',
    subject: 4,
    category: '모델 평가',
    keyword: 'R² (결정계수)',
    emoji: '📊',
    simpleExplanation: `설명력을 나타내요!

0~1 사이, 1에 가까울수록
모델이 잘 설명해요.`,
    realLifeExample: `📊 R² = 0.8:
변동의 80%를 모델이 설명
20%는 설명 못 함`,
    examTip: '💯 R² = 1-(SSE/SST) = 높을수록 좋음',
  },
  {
    id: 's4-confusion-matrix-eval',
    subject: 4,
    category: '모델 평가',
    keyword: '혼동행렬 해석',
    emoji: '📋',
    simpleExplanation: `분류 결과 분석!

TP, TN, FP, FN으로
성능을 파악해요.`,
    realLifeExample: `📋 스팸 분류:
      예측스팸  예측정상
실제스팸  90(TP)   10(FN)
실제정상   5(FP)   95(TN)`,
    examTip: '💯 혼동행렬 = 모든 분류 지표의 기초',
  },
  {
    id: 's4-precision-recall-tradeoff',
    subject: 4,
    category: '모델 평가',
    keyword: '정밀도-재현율 트레이드오프',
    emoji: '⚖️',
    simpleExplanation: `둘 다 높이긴 어려워요!

정밀도↑ → 재현율↓
재현율↑ → 정밀도↓`,
    realLifeExample: `⚖️ 암 진단:
• 보수적 기준: 정밀도↑ 재현율↓
• 적극적 기준: 재현율↑ 정밀도↓`,
    examTip: '💯 트레이드오프 = 임계값 조정 = 비즈니스에 따라',
  },
  {
    id: 's4-overfitting-detection',
    subject: 4,
    category: '모델 평가',
    keyword: '과적합 탐지',
    emoji: '🔍',
    simpleExplanation: `훈련은 잘, 테스트는 못!

훈련/테스트 성능 차이가
크면 과적합!`,
    realLifeExample: `📊 과적합 징후:
• 훈련 정확도: 99%
• 테스트 정확도: 70%
→ 과적합!`,
    examTip: '💯 과적합 = 훈련↑테스트↓ = 정규화/드롭아웃 필요',
  },
  {
    id: 's4-learning-curve',
    subject: 4,
    category: '모델 평가',
    keyword: '학습 곡선',
    emoji: '📈',
    simpleExplanation: `데이터 양에 따른 성능!

데이터가 늘어날수록
성능이 어떻게 변하나?`,
    realLifeExample: `📈 학습 곡선:
데이터↑ → 훈련↓ 테스트↑
→ 수렴하면 OK`,
    examTip: '💯 학습곡선 = 과적합/과소적합 진단',
  },
  {
    id: 's4-validation-curve',
    subject: 4,
    category: '모델 평가',
    keyword: '검증 곡선',
    emoji: '📊',
    simpleExplanation: `하이퍼파라미터에 따른 성능!

파라미터 값을 바꿔가며
최적값을 찾아요.`,
    realLifeExample: `📊 검증 곡선:
max_depth 변화 → 성능 변화
→ 최적 깊이 찾기`,
    examTip: '💯 검증곡선 = 하이퍼파라미터 튜닝',
  },
  {
    id: 's4-cross-validation-eval',
    subject: 4,
    category: '모델 평가',
    keyword: '교차검증 평가',
    emoji: '🔄',
    simpleExplanation: `여러 번 나눠서 평가!

K번 나눠서 평균 성능을
측정해요.`,
    realLifeExample: `🔄 5-Fold:
1회: 80%, 2회: 82%, 3회: 78%...
평균: 80%`,
    examTip: '💯 교차검증 = 안정적 평가 = 우연 방지',
  },
  {
    id: 's4-stratified-kfold',
    subject: 4,
    category: '모델 평가',
    keyword: '층화 K-Fold',
    emoji: '📊',
    simpleExplanation: `클래스 비율 유지!

각 폴드에 클래스 비율이
원본과 같게 나눠요.`,
    realLifeExample: `📊 불균형 데이터:
원본: A 90%, B 10%
→ 각 폴드도 90%:10%`,
    examTip: '💯 층화 = 불균형 데이터에 필수',
  },
  {
    id: 's4-holdout-eval',
    subject: 4,
    category: '모델 평가',
    keyword: '홀드아웃 평가',
    emoji: '✂️',
    simpleExplanation: `한 번만 나눠서 평가!

훈련/테스트 한 번만
분할해서 평가해요.`,
    realLifeExample: `✂️ 홀드아웃:
80% 훈련, 20% 테스트
→ 빠르지만 불안정`,
    examTip: '💯 홀드아웃 = 빠름 = 데이터 많을 때',
  },
  {
    id: 's4-bootstrap-eval',
    subject: 4,
    category: '모델 평가',
    keyword: '부트스트랩 평가',
    emoji: '🔄',
    simpleExplanation: `복원추출로 여러 번!

같은 데이터에서 여러 샘플
만들어 평가해요.`,
    realLifeExample: `🔄 부트스트랩:
복원추출 → 학습 → 평가
→ 1000번 반복!`,
    examTip: '💯 부트스트랩 = 신뢰구간 추정 = 불확실성 측정',
  },
  {
    id: 's4-model-comparison',
    subject: 4,
    category: '모델 평가',
    keyword: '모델 비교',
    emoji: '⚖️',
    simpleExplanation: `어떤 모델이 더 좋은가!

여러 모델을 같은 기준으로
비교해요.`,
    realLifeExample: `⚖️ 모델 비교:
• 로지스틱: F1 0.85
• 랜덤포레스트: F1 0.90
• XGBoost: F1 0.92 ← 승!`,
    examTip: '💯 비교 = 같은 지표 + 같은 데이터 + 교차검증',
  },
  {
    id: 's4-statistical-test',
    subject: 4,
    category: '모델 평가',
    keyword: '통계적 검정',
    emoji: '📊',
    simpleExplanation: `차이가 유의미한가!

모델 간 성능 차이가
우연인지 검정해요.`,
    realLifeExample: `📊 t-검정:
모델A: 85±2%
모델B: 83±2%
→ 유의미한 차이?`,
    examTip: '💯 통계검정 = 우연 배제 = p < 0.05',
  },
  {
    id: 's4-baseline-model',
    subject: 4,
    category: '모델 평가',
    keyword: '베이스라인 모델',
    emoji: '📏',
    simpleExplanation: `비교 기준 모델!

최소한 이것보다는
나아야 해요.`,
    realLifeExample: `📏 베이스라인:
• 분류: 다수 클래스 예측
• 회귀: 평균값 예측
→ 이보다 나아야 의미!`,
    examTip: '💯 베이스라인 = 단순 모델 = 개선 정도 측정',
  },
  {
    id: 's4-ensemble-eval',
    subject: 4,
    category: '모델 평가',
    keyword: '앙상블 평가',
    emoji: '🎼',
    simpleExplanation: `여러 모델 조합 평가!

개별보다 앙상블이
더 좋은지 확인해요.`,
    realLifeExample: `🎼 앙상블 효과:
• 모델A: 80%
• 모델B: 82%
• 앙상블: 85%`,
    examTip: '💯 앙상블 = 다양성 + 정확성 = 시너지 확인',
  },
  {
    id: 's4-feature-importance-eval',
    subject: 4,
    category: '모델 평가',
    keyword: '특성 중요도 평가',
    emoji: '📊',
    simpleExplanation: `어떤 변수가 중요한가!

예측에 영향을 많이 주는
변수를 파악해요.`,
    realLifeExample: `📊 집값 예측:
• 면적: 40%
• 위치: 30%
• 층수: 10%`,
    examTip: '💯 중요도 = 모델 해석 = SHAP/Permutation',
  },
  // ========== 결과 해석 (51-75) ==========
  {
    id: 's4-interpretation',
    subject: 4,
    category: '결과 해석',
    keyword: '분석 결과 해석',
    emoji: '🔍',
    simpleExplanation: `숫자의 의미 파악!

결과가 무엇을 뜻하는지
이해해요.`,
    realLifeExample: `🔍 상관계수 0.8:
"키와 몸무게는 강한 양의 상관"
→ 키 크면 몸무게도 큼`,
    examTip: '💯 해석 = 숫자→의미 = 비즈니스 연결',
  },
  {
    id: 's4-causation-vs-correlation',
    subject: 4,
    category: '결과 해석',
    keyword: '상관 vs 인과',
    emoji: '🔗',
    simpleExplanation: `상관이 인과는 아니에요!

함께 변한다고
원인-결과는 아니에요.`,
    realLifeExample: `🍦 아이스크림-익사:
• 상관: 둘 다 여름에 증가
• 인과? 아이스크림이 익사 유발? X
• 진짜 원인: 더운 날씨`,
    examTip: '💯 상관≠인과 = 숨은 변수 주의 = 실험 필요',
  },
  {
    id: 's4-statistical-significance',
    subject: 4,
    category: '결과 해석',
    keyword: '통계적 유의성',
    emoji: '📊',
    simpleExplanation: `우연이 아니다!

p < 0.05면
우연이 아닐 가능성 95%`,
    realLifeExample: `📊 A/B 테스트:
• p = 0.01 → 유의미!
• p = 0.3 → 우연일 수 있음`,
    examTip: '💯 유의성 = p < α = 귀무가설 기각',
  },
  {
    id: 's4-practical-significance',
    subject: 4,
    category: '결과 해석',
    keyword: '실질적 유의성',
    emoji: '💼',
    simpleExplanation: `실제로 의미있나!

통계적으론 유의해도
비즈니스적으론 작을 수 있어요.`,
    realLifeExample: `💼 클릭률:
• 통계적: 0.1%p 차이 (유의)
• 실질적: 너무 작아서 의미 없음`,
    examTip: '💯 실질적 유의성 = 효과 크기 = 비즈니스 관점',
  },
  {
    id: 's4-effect-size',
    subject: 4,
    category: '결과 해석',
    keyword: '효과 크기',
    emoji: '📏',
    simpleExplanation: `차이의 크기!

통계적 유의성과 별개로
얼마나 차이나는지 측정해요.`,
    realLifeExample: `📏 코헨의 d:
• 0.2: 작은 효과
• 0.5: 중간 효과
• 0.8: 큰 효과`,
    examTip: '💯 효과크기 = Cohen d = 표준화된 차이',
  },
  {
    id: 's4-confidence-interval-interpret',
    subject: 4,
    category: '결과 해석',
    keyword: '신뢰구간 해석',
    emoji: '📊',
    simpleExplanation: `진짜 값이 이 안에!

95% 신뢰구간이면
100번 중 95번 포함`,
    realLifeExample: `📊 평균 키:
170cm (95% CI: 168-172)
→ 진짜 평균은 168~172 사이`,
    examTip: '💯 CI = 불확실성 표현 = 좁을수록 정확',
  },
  {
    id: 's4-prediction-interval',
    subject: 4,
    category: '결과 해석',
    keyword: '예측구간',
    emoji: '🔮',
    simpleExplanation: `개별 예측의 범위!

새 관측값이 들어올
범위를 나타내요.`,
    realLifeExample: `🔮 집값 예측:
5억 (예측구간: 4억~6억)
→ 실제 집값은 이 범위 안`,
    examTip: '💯 예측구간 > 신뢰구간 = 개별 불확실성 포함',
  },
  {
    id: 's4-model-interpretability',
    subject: 4,
    category: '결과 해석',
    keyword: '모델 해석 가능성',
    emoji: '🔍',
    simpleExplanation: `왜 그런 예측인가!

모델이 어떻게 결정했는지
이해할 수 있나요?`,
    realLifeExample: `🔍 해석 가능성:
• 결정트리: 쉬움 (규칙 보임)
• 딥러닝: 어려움 (블랙박스)`,
    examTip: '💯 해석가능성 = 화이트박스 vs 블랙박스',
  },
  {
    id: 's4-xai',
    subject: 4,
    category: '결과 해석',
    keyword: 'XAI (설명가능한 AI)',
    emoji: '💡',
    simpleExplanation: `AI 결정을 설명!

블랙박스 모델도
설명 가능하게!`,
    realLifeExample: `💡 대출 거절:
"소득이 낮고, 부채가 많아서"
→ 이유를 설명!`,
    examTip: '💯 XAI = LIME, SHAP = 블랙박스 해석',
  },
  {
    id: 's4-lime',
    subject: 4,
    category: '결과 해석',
    keyword: 'LIME',
    emoji: '🍋',
    simpleExplanation: `개별 예측 설명!

하나의 예측이
왜 그런지 설명해요.`,
    realLifeExample: `🍋 스팸 판정 이유:
"무료" 단어 → +0.3
"당첨" 단어 → +0.4
→ 스팸 확률 높음`,
    examTip: '💯 LIME = Local = 개별 샘플 해석',
  },
  {
    id: 's4-shap',
    subject: 4,
    category: '결과 해석',
    keyword: 'SHAP',
    emoji: '📊',
    simpleExplanation: `피처별 기여도!

각 변수가 예측에
얼마나 기여했는지 보여줘요.`,
    realLifeExample: `📊 집값 예측:
• 면적: +1억
• 위치: +0.5억
• 연식: -0.3억
→ 예측값 5.2억`,
    examTip: '💯 SHAP = Shapley Value = 게임이론 기반',
  },
  {
    id: 's4-partial-dependence',
    subject: 4,
    category: '결과 해석',
    keyword: 'PDP (부분의존도)',
    emoji: '📈',
    simpleExplanation: `변수 하나의 영향!

다른 건 고정하고
한 변수 변화에 따른 영향`,
    realLifeExample: `📈 면적 PDP:
면적↑ → 집값↑
(다른 변수 평균 유지)`,
    examTip: '💯 PDP = 평균 효과 = 전체 데이터 기준',
  },
  {
    id: 's4-permutation-importance',
    subject: 4,
    category: '결과 해석',
    keyword: '순열 중요도',
    emoji: '🔀',
    simpleExplanation: `변수 섞어서 확인!

변수를 섞었을 때
성능이 얼마나 떨어지나?`,
    realLifeExample: `🔀 변수 중요도:
면적 섞음 → 정확도 20%↓
위치 섞음 → 정확도 10%↓
→ 면적이 더 중요!`,
    examTip: '💯 순열중요도 = 모델 무관 = 범용적',
  },
  {
    id: 's4-bias-detection',
    subject: 4,
    category: '결과 해석',
    keyword: '편향 탐지',
    emoji: '⚖️',
    simpleExplanation: `불공정한가 확인!

특정 그룹에
불리하지 않은지 확인해요.`,
    realLifeExample: `⚖️ 채용 AI:
• 남성 합격률: 60%
• 여성 합격률: 40%
→ 편향 있음!`,
    examTip: '💯 편향 = 공정성 = 그룹별 성능 비교',
  },
  {
    id: 's4-fairness',
    subject: 4,
    category: '결과 해석',
    keyword: '공정성 지표',
    emoji: '⚖️',
    simpleExplanation: `공평하게 예측하나!

모든 그룹에 공정한지
측정해요.`,
    realLifeExample: `⚖️ 공정성 지표:
• 인구통계 동등성
• 기회 균등
• 예측 동등성`,
    examTip: '💯 공정성 = 그룹별 지표 비교 = 법적 요구',
  },
  {
    id: 's4-uncertainty',
    subject: 4,
    category: '결과 해석',
    keyword: '불확실성 추정',
    emoji: '❓',
    simpleExplanation: `얼마나 확실한가!

예측이 얼마나
믿을 만한지 측정해요.`,
    realLifeExample: `❓ 날씨 예보:
• 맑음 (확신 90%)
• 비 (확신 60%)
→ 불확실성 표현`,
    examTip: '💯 불확실성 = 신뢰구간/베이지안 = 의사결정 지원',
  },
  {
    id: 's4-sensitivity-analysis',
    subject: 4,
    category: '결과 해석',
    keyword: '민감도 분석',
    emoji: '📊',
    simpleExplanation: `입력 변화에 따른 결과!

입력이 바뀌면
결과가 얼마나 바뀌나?`,
    realLifeExample: `📊 금리 변화:
• 금리 1%↑ → 대출상환액 5%↑
• 금리 변화에 민감!`,
    examTip: '💯 민감도 = 입력 변화 → 출력 변화',
  },
  {
    id: 's4-robustness',
    subject: 4,
    category: '결과 해석',
    keyword: '강건성 분석',
    emoji: '💪',
    simpleExplanation: `노이즈에도 버티나!

데이터가 조금 바뀌어도
결과가 안정적인가?`,
    realLifeExample: `💪 이상치 추가:
• 이상치 1개 → 결과 거의 변화 없음
• 강건한 모델!`,
    examTip: '💯 강건성 = 안정성 = 이상치/노이즈에 강함',
  },
  // ========== 분석 활용 & 보고서 (76-100) ==========
  {
    id: 's4-business-insight',
    subject: 4,
    category: '분석 활용',
    keyword: '비즈니스 인사이트',
    emoji: '💡',
    simpleExplanation: `데이터에서 통찰!

비즈니스에 도움이 되는
발견을 해요.`,
    realLifeExample: `💡 매출 분석:
"화요일 점심에 버거 판매 최고"
→ 화요일 버거 프로모션!`,
    examTip: '💯 인사이트 = 데이터 → 행동 = 의사결정 지원',
  },
  {
    id: 's4-actionable-insight',
    subject: 4,
    category: '분석 활용',
    keyword: '실행 가능한 인사이트',
    emoji: '🎯',
    simpleExplanation: `행동으로 옮길 수 있는 발견!

"그래서 뭘 해야 하지?"에
답할 수 있어요.`,
    realLifeExample: `🎯 실행 가능:
✗ "젊은 고객이 많다"
✓ "20대 타겟 마케팅 집중"`,
    examTip: '💯 실행가능 = 구체적 행동 = So What? 답변',
  },
  {
    id: 's4-recommendation',
    subject: 4,
    category: '분석 활용',
    keyword: '분석 기반 추천',
    emoji: '📝',
    simpleExplanation: `분석 결과로 제안!

데이터를 바탕으로
무엇을 해야 할지 제안해요.`,
    realLifeExample: `📝 추천:
"분석 결과, A 제품을 B 지역에
집중 판매하는 것이 좋습니다"`,
    examTip: '💯 추천 = 근거 + 제안 + 기대효과',
  },
  {
    id: 's4-decision-support',
    subject: 4,
    category: '분석 활용',
    keyword: '의사결정 지원',
    emoji: '🤝',
    simpleExplanation: `결정을 도와줘요!

데이터로 더 나은
결정을 할 수 있게!`,
    realLifeExample: `🤝 투자 결정:
• 시장 분석 데이터
• 리스크 평가
→ 투자 여부 결정`,
    examTip: '💯 의사결정 = 데이터 기반 = 주관 배제',
  },
  {
    id: 's4-ab-test-result',
    subject: 4,
    category: '분석 활용',
    keyword: 'A/B 테스트 결과',
    emoji: '🔬',
    simpleExplanation: `실험 결과 해석!

A와 B 중 뭐가 더
효과적인지 판단해요.`,
    realLifeExample: `🔬 버튼 색상 테스트:
• 빨강: 클릭률 5%
• 파랑: 클릭률 7%
→ 파랑 채택!`,
    examTip: '💯 A/B = 통계적 유의성 + 실질적 효과',
  },
  {
    id: 's4-roi-calculation',
    subject: 4,
    category: '분석 활용',
    keyword: 'ROI 계산',
    emoji: '💰',
    simpleExplanation: `투자 대비 효과!

분석 프로젝트가
얼마나 가치 있는지 계산해요.`,
    realLifeExample: `💰 분석 ROI:
• 비용: 1억원
• 효과: 5억원 절감
• ROI = 400%`,
    examTip: '💯 ROI = (이익-비용)/비용 × 100%',
  },
  {
    id: 's4-report-structure',
    subject: 4,
    category: '보고서 작성',
    keyword: '분석 보고서 구조',
    emoji: '📄',
    simpleExplanation: `보고서 작성 순서!

서론-본론-결론
논리적으로 구성해요.`,
    realLifeExample: `📄 보고서 구조:
1. 요약 (Executive Summary)
2. 배경/목적
3. 분석 방법
4. 결과
5. 결론/제언`,
    examTip: '💯 보고서 = 요약→배경→방법→결과→결론',
  },
  {
    id: 's4-executive-summary',
    subject: 4,
    category: '보고서 작성',
    keyword: '경영진 요약',
    emoji: '📋',
    simpleExplanation: `핵심만 간단히!

바쁜 경영진을 위해
1페이지로 요약해요.`,
    realLifeExample: `📋 요약:
"분석 결과, A 전략 도입 시
매출 15% 증가 예상됩니다."`,
    examTip: '💯 경영진 요약 = 1페이지 = 핵심만',
  },
  {
    id: 's4-audience-consideration',
    subject: 4,
    category: '보고서 작성',
    keyword: '청중 고려',
    emoji: '👥',
    simpleExplanation: `누가 읽을지 고려!

경영진? 기술팀?
독자에 맞게 작성해요.`,
    realLifeExample: `👥 청중별:
• 경영진: 결과/영향 중심
• 기술팀: 방법론 상세`,
    examTip: '💯 청중 = 용어/깊이/초점 조절',
  },
  {
    id: 's4-data-story',
    subject: 4,
    category: '보고서 작성',
    keyword: '데이터 스토리',
    emoji: '📖',
    simpleExplanation: `이야기로 전달!

숫자를 이야기처럼
풀어서 설명해요.`,
    realLifeExample: `📖 스토리:
"3월에 갑자기 매출이 떨어졌습니다.
원인을 분석한 결과..."`,
    examTip: '💯 스토리 = 맥락 + 발견 + 의미 + 행동',
  },
  {
    id: 's4-visualization-report',
    subject: 4,
    category: '보고서 작성',
    keyword: '보고서 시각화',
    emoji: '📊',
    simpleExplanation: `그래프로 설명!

복잡한 내용을
그래프로 쉽게 보여줘요.`,
    realLifeExample: `📊 시각화 활용:
• 표: 상세 수치
• 그래프: 추세/비교
• 대시보드: 전체 현황`,
    examTip: '💯 시각화 = 핵심 강조 = 간결하게',
  },
  {
    id: 's4-limitation',
    subject: 4,
    category: '보고서 작성',
    keyword: '분석 한계점',
    emoji: '⚠️',
    simpleExplanation: `한계를 명시!

분석의 제약 사항을
솔직히 밝혀요.`,
    realLifeExample: `⚠️ 한계점:
• 데이터 기간: 1년만
• 지역: 서울만
• 일반화 주의 필요`,
    examTip: '💯 한계 = 신뢰성↑ = 해석 범위 명시',
  },
  {
    id: 's4-future-work',
    subject: 4,
    category: '보고서 작성',
    keyword: '향후 과제',
    emoji: '🔮',
    simpleExplanation: `앞으로 할 일!

추가 분석이나
개선 방향을 제시해요.`,
    realLifeExample: `🔮 향후 과제:
• 다른 지역 확대 분석
• 실시간 모니터링 구축
• 예측 모델 고도화`,
    examTip: '💯 향후과제 = 연속성 = 다음 단계 제시',
  },
  {
    id: 's4-reproducibility',
    subject: 4,
    category: '보고서 작성',
    keyword: '재현성',
    emoji: '🔄',
    simpleExplanation: `다시 해도 같은 결과!

다른 사람도 같은 분석을
반복할 수 있어야 해요.`,
    realLifeExample: `🔄 재현 요소:
• 데이터 버전
• 코드
• 환경 설정
• 랜덤 시드`,
    examTip: '💯 재현성 = 코드+데이터+환경 = 과학적 방법',
  },
  {
    id: 's4-presentation',
    subject: 4,
    category: '보고서 작성',
    keyword: '발표 기술',
    emoji: '🎤',
    simpleExplanation: `잘 전달하기!

분석 결과를
효과적으로 발표해요.`,
    realLifeExample: `🎤 발표 팁:
• 핵심만 (10분)
• 시각자료 활용
• 질문 대비`,
    examTip: '💯 발표 = 청중 맞춤 + 핵심 집중 + 연습',
  },
  {
    id: 's4-model-deployment',
    subject: 4,
    category: '분석 활용',
    keyword: '모델 배포',
    emoji: '🚀',
    simpleExplanation: `모델을 실제로 사용!

만든 모델을
실제 서비스에 적용해요.`,
    realLifeExample: `🚀 배포:
• 학습된 모델 저장
• API로 서비스
• 실시간 예측`,
    examTip: '💯 배포 = 개발→운영 = MLOps',
  },
  {
    id: 's4-model-monitoring',
    subject: 4,
    category: '분석 활용',
    keyword: '모델 모니터링',
    emoji: '👁️',
    simpleExplanation: `배포 후 관찰!

모델 성능이
떨어지지 않는지 확인해요.`,
    realLifeExample: `👁️ 모니터링:
• 일별 정확도 체크
• 입력 데이터 분포
• 지연 시간`,
    examTip: '💯 모니터링 = 성능 저하 탐지 = 재학습 트리거',
  },
  {
    id: 's4-model-drift',
    subject: 4,
    category: '분석 활용',
    keyword: '모델 드리프트',
    emoji: '📉',
    simpleExplanation: `시간이 지나면 성능↓

데이터가 바뀌면
모델도 안 맞게 돼요.`,
    realLifeExample: `📉 드리프트 예:
코로나 전 모델 →
코로나 후 데이터에 안 맞음`,
    examTip: '💯 드리프트 = 데이터/개념 변화 = 재학습 필요',
  },
  {
    id: 's4-retraining',
    subject: 4,
    category: '분석 활용',
    keyword: '모델 재학습',
    emoji: '🔄',
    simpleExplanation: `다시 학습!

성능이 떨어지면
새 데이터로 재학습해요.`,
    realLifeExample: `🔄 재학습 주기:
• 매주 자동 재학습
• 성능 떨어지면 트리거
• 새 데이터 반영`,
    examTip: '💯 재학습 = 정기적 or 조건부 = 자동화',
  },
  {
    id: 's4-data-driven-culture',
    subject: 4,
    category: '분석 활용',
    keyword: '데이터 기반 문화',
    emoji: '🏢',
    simpleExplanation: `조직 문화!

감보다 데이터로
결정하는 문화를 만들어요.`,
    realLifeExample: `🏢 문화 변화:
• 회의: 숫자로 토론
• 목표: 측정 가능하게
• 실험: A/B 테스트`,
    examTip: '💯 데이터 문화 = 조직 전체 = 장기적 노력',
  },
  {
    id: 's4-ethics',
    subject: 4,
    category: '분석 활용',
    keyword: '분석 윤리',
    emoji: '⚖️',
    simpleExplanation: `윤리적으로!

프라이버시, 공정성 등
윤리를 지켜야 해요.`,
    realLifeExample: `⚖️ 윤리 이슈:
• 개인정보 보호
• 차별 방지
• 투명한 설명`,
    examTip: '💯 윤리 = 프라이버시 + 공정성 + 투명성',
  },
  {
    id: 's4-privacy',
    subject: 4,
    category: '분석 활용',
    keyword: '프라이버시 보호',
    emoji: '🔒',
    simpleExplanation: `개인정보 지키기!

분석하면서도
개인정보는 보호해요.`,
    realLifeExample: `🔒 프라이버시:
• 익명화
• 최소 수집
• 동의 받기`,
    examTip: '💯 프라이버시 = 비식별화 + 최소수집 + 동의',
  },
  {
    id: 's4-documentation',
    subject: 4,
    category: '보고서 작성',
    keyword: '분석 문서화',
    emoji: '📝',
    simpleExplanation: `기록으로 남겨요!

나중에도 이해할 수 있게
잘 정리해요.`,
    realLifeExample: `📝 문서화 항목:
• 데이터 출처
• 전처리 과정
• 모델 버전
• 결과 해석`,
    examTip: '💯 문서화 = 재현성 + 지식 전달 + 유지보수',
  },
  {
    id: 's4-version-control',
    subject: 4,
    category: '분석 활용',
    keyword: '버전 관리',
    emoji: '📚',
    simpleExplanation: `변경 이력 관리!

코드, 데이터, 모델의
버전을 관리해요.`,
    realLifeExample: `📚 버전 관리:
• 코드: Git
• 데이터: DVC
• 모델: MLflow`,
    examTip: '💯 버전관리 = Git + 데이터 버전 = 추적 가능',
  },
  {
    id: 's4-automation',
    subject: 4,
    category: '분석 활용',
    keyword: '분석 자동화',
    emoji: '🤖',
    simpleExplanation: `자동으로!

반복 작업을
자동화해요.`,
    realLifeExample: `🤖 자동화 예:
• 일일 리포트 자동 생성
• 주간 모델 재학습
• 이상 탐지 알림`,
    examTip: '💯 자동화 = 파이프라인 = 효율성↑',
  },
];
