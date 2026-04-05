import { Concept } from '../conceptsData';

export const subject2Concepts: Concept[] = [
  // ========== 통계 기초 (1-25) ==========
  {
    id: 's2-mean',
    subject: 2,
    category: '통계 기초',
    keyword: '평균 (Mean)',
    emoji: '➗',
    simpleExplanation: `모든 값을 더해서 나눠요!

3, 5, 7의 평균은?
(3+5+7) ÷ 3 = 5`,
    realLifeExample: `📝 시험 평균:
국어 80 + 수학 90 + 영어 85
= 255 ÷ 3 = 85점`,
    examTip: '💯 평균 = 합계/개수 = 이상치에 민감!',
    relatedConcepts: ['s2-median', 's2-mode'],
  },
  {
    id: 's2-median',
    subject: 2,
    category: '통계 기초',
    keyword: '중앙값 (Median)',
    emoji: '📍',
    simpleExplanation: `가운데 값이에요!

순서대로 세웠을 때
딱 중간에 있는 값이에요.`,
    realLifeExample: `💰 월급 비유:
100, 200, 200, 300, 10000만원
중앙값 = 200만원 (가운데!)
평균 = 2160만원 (이상치 영향)`,
    examTip: '💯 중앙값 = 이상치에 강건 = 순서대로 가운데',
    relatedConcepts: ['s2-mean', 's2-mode'],
  },
  {
    id: 's2-mode',
    subject: 2,
    category: '통계 기초',
    keyword: '최빈값 (Mode)',
    emoji: '🔢',
    simpleExplanation: `가장 많이 나온 값!

1, 2, 2, 2, 3에서
최빈값은 2예요.`,
    realLifeExample: `👕 옷 사이즈:
S: 2명, M: 5명, L: 3명
최빈값 = M (가장 많음)`,
    examTip: '💯 최빈값 = 범주형 데이터에 적합',
    relatedConcepts: ['s2-mean', 's2-median'],
  },
  {
    id: 's2-variance',
    subject: 2,
    category: '통계 기초',
    keyword: '분산 (Variance)',
    emoji: '📊',
    simpleExplanation: `평균에서 얼마나 떨어졌나!

값들이 얼마나 흩어져 있는지
측정해요.`,
    realLifeExample: `🎯 다트 비유:
• 분산 작음: 과녁 가운데 모임
• 분산 큼: 여기저기 흩어짐`,
    examTip: '💯 분산 = Σ(값-평균)²/n = 제곱 단위',
    relatedConcepts: ['s2-std'],
    diagram: `분산 = 흩어짐 정도
   작은 분산      큰 분산
    · · ·        ·    ·
   · · · ·         ·
    · · ·       ·     ·`
  },
  {
    id: 's2-std',
    subject: 2,
    category: '통계 기초',
    keyword: '표준편차',
    emoji: '📏',
    simpleExplanation: `분산의 제곱근이에요!

분산은 단위가 이상해서
제곱근을 취해 원래 단위로!`,
    realLifeExample: `📝 성적 예시:
• 평균: 70점
• 표준편차: 10점
→ 대부분 60~80점 사이`,
    examTip: '💯 표준편차 = √분산 = 원래 단위로 해석',
    relatedConcepts: ['s2-variance'],
  },
  {
    id: 's2-iqr',
    subject: 2,
    category: '통계 기초',
    keyword: 'IQR (사분위범위)',
    emoji: '📦',
    simpleExplanation: `상위 25%와 하위 25%의 차이!

Q3 - Q1 이에요.
중간 50%의 범위를 보여줘요.`,
    realLifeExample: `📊 성적 분포:
• Q1(25%): 60점
• Q3(75%): 80점
• IQR = 80-60 = 20점`,
    examTip: '💯 IQR = Q3 - Q1 = 이상치 탐지에 사용',
    relatedConcepts: ['s2-outlier'],
    diagram: `      IQR
  ←─────────→
──┬──────────┬──
  Q1   Q2   Q3
 25%  50%  75%`
  },
  {
    id: 's2-outlier',
    subject: 2,
    category: '통계 기초',
    keyword: '이상치 탐지',
    emoji: '🔍',
    simpleExplanation: `튀는 값을 찾아요!

다른 값들과 너무 다른
이상한 값을 찾아요.`,
    realLifeExample: `📊 몸무게 데이터:
50, 55, 60, 58, 200kg
→ 200은 이상치! (입력 오류?)`,
    examTip: '💯 이상치 기준: Q1-1.5×IQR 미만 또는 Q3+1.5×IQR 초과',
    relatedConcepts: ['s2-iqr'],
    diagram: `이상치 탐지 (IQR 방법)
이상치  정상범위  이상치
  ●───[====●====]───●
      ↑        ↑
   Q1-1.5IQR  Q3+1.5IQR`
  },
  {
    id: 's2-skewness',
    subject: 2,
    category: '통계 기초',
    keyword: '왜도 (Skewness)',
    emoji: '↔️',
    simpleExplanation: `한쪽으로 치우쳤나요?

왼쪽 또는 오른쪽으로
꼬리가 길어요.`,
    realLifeExample: `💰 소득 분포:
• 대부분 낮은 소득
• 일부 고소득자
→ 오른쪽 꼬리 (양의 왜도)`,
    examTip: '💯 양의왜도: 오른쪽 꼬리 (평균>중앙값)',
    diagram: `왜도
  정규분포       오른쪽 꼬리
    ∧              ∧__
   /  \\            / \\___
  /    \\          /      \\__`
  },
  {
    id: 's2-kurtosis',
    subject: 2,
    category: '통계 기초',
    keyword: '첨도 (Kurtosis)',
    emoji: '⛰️',
    simpleExplanation: `뾰족한 정도예요!

분포가 얼마나 뾰족하거나
납작한지 보여줘요.`,
    realLifeExample: `⛰️ 산 모양:
• 높은 첨도: 뾰족한 산 ▲
• 낮은 첨도: 완만한 언덕 ∩`,
    examTip: '💯 첨도>3: 뾰족 / 첨도<3: 납작 (정규분포=3)',
  },
  {
    id: 's2-normal',
    subject: 2,
    category: '통계 기초',
    keyword: '정규분포',
    emoji: '🔔',
    simpleExplanation: `종 모양 분포예요!

평균을 중심으로
대칭인 분포예요.`,
    realLifeExample: `📏 키 분포:
• 평균 170cm 주변에 많음
• 150cm, 190cm는 적음
• 종 모양!`,
    examTip: '💯 정규분포: 평균=중앙값=최빈값, 68-95-99.7 규칙',
    diagram: `정규분포 🔔
      ___
     /   \\
    /     \\
   /       \\
──/─────────\\──
    68% 95% 99.7%`
  },
  {
    id: 's2-binomial',
    subject: 2,
    category: '통계 기초',
    keyword: '이항분포',
    emoji: '🎲',
    simpleExplanation: `성공/실패 실험의 분포!

동전 던지기를 여러 번 해서
앞면이 몇 번 나오나?`,
    realLifeExample: `🎲 동전 10번:
• 성공확률 p = 0.5
• 시행횟수 n = 10
• 평균 = np = 5번`,
    examTip: '💯 이항분포: 평균=np, 분산=np(1-p) = npq',
    diagram: `이항분포 공식
평균 = n × p
분산 = n × p × (1-p)

예: n=10, p=0.5
평균 = 5
분산 = 2.5`
  },
  {
    id: 's2-poisson',
    subject: 2,
    category: '통계 기초',
    keyword: '포아송분포',
    emoji: '📞',
    simpleExplanation: `단위 시간당 발생 횟수!

1시간에 전화가
몇 번 올까요?`,
    realLifeExample: `📞 콜센터:
• 시간당 평균 5통
• 10통 올 확률은?
→ 포아송으로 계산!`,
    examTip: '💯 포아송: 평균=분산=λ (람다)',
  },
  {
    id: 's2-hypergeometric',
    subject: 2,
    category: '통계 기초',
    keyword: '초기하분포',
    emoji: '🎰',
    simpleExplanation: `비복원 추출의 분포!

뽑은 거 다시 안 넣고
계속 뽑아요.`,
    realLifeExample: `🃏 카드 뽑기:
• 52장 중 하트 13장
• 5장 뽑을 때 하트 2장?
→ 비복원이라 초기하!`,
    examTip: '💯 초기하 = 비복원 → 종속(비독립) / 이항 = 복원 → 독립',
  },
  {
    id: 's2-uniform',
    subject: 2,
    category: '통계 기초',
    keyword: '균등분포',
    emoji: '▬',
    simpleExplanation: `모든 값이 같은 확률!

주사위 1~6 나올 확률
모두 1/6로 같아요.`,
    realLifeExample: `🎲 주사위:
1, 2, 3, 4, 5, 6
모두 1/6 확률 (균등!)`,
    examTip: '💯 균등분포 = 모든 값 확률 동일',
  },
  {
    id: 's2-exponential',
    subject: 2,
    category: '통계 기초',
    keyword: '지수분포',
    emoji: '📉',
    simpleExplanation: `다음 사건까지 시간!

다음 전화가 올 때까지
얼마나 기다릴까?`,
    realLifeExample: `🚌 버스 대기:
• 평균 10분 간격
• 15분 기다릴 확률은?
→ 지수분포로 계산!`,
    examTip: '💯 지수분포: 포아송의 대기시간 버전',
  },
  {
    id: 's2-correlation',
    subject: 2,
    category: '통계 기초',
    keyword: '상관계수',
    emoji: '🔗',
    simpleExplanation: `두 변수의 관계 강도!

-1에서 1 사이 값이에요.
0이면 관계 없음!`,
    realLifeExample: `📈 키와 몸무게:
• r = 0.8 (강한 양의 상관)
• 키 크면 몸무게도 큼`,
    examTip: '💯 상관계수 r: |r|>0.7 강함, 0.3~0.7 보통',
    diagram: `상관계수 해석
r = 1    r = 0    r = -1
  ／        ・        ＼
 ／       ・・・        ＼
／         ・            ＼
양의상관   무상관    음의상관`
  },
  {
    id: 's2-pearson',
    subject: 2,
    category: '통계 기초',
    keyword: '피어슨 상관',
    emoji: '📊',
    simpleExplanation: `연속형 변수의 상관!

두 변수가 직선 관계인지
측정해요.`,
    realLifeExample: `📏 키-몸무게:
둘 다 연속형 숫자
→ 피어슨 상관 사용!`,
    examTip: '💯 피어슨 = 연속형-연속형 = 선형관계',
    relatedConcepts: ['s2-spearman'],
  },
  {
    id: 's2-spearman',
    subject: 2,
    category: '통계 기초',
    keyword: '스피어만 상관',
    emoji: '🏆',
    simpleExplanation: `순위의 상관!

순서만 보고 관계를
측정해요.`,
    realLifeExample: `🏆 성적 순위:
• 국어 순위: 1, 3, 2
• 수학 순위: 2, 1, 3
→ 스피어만으로 비교!`,
    examTip: '💯 스피어만 = 순서형, 비선형에 강건',
    relatedConcepts: ['s2-pearson'],
  },
  {
    id: 's2-covariance',
    subject: 2,
    category: '통계 기초',
    keyword: '공분산',
    emoji: '↗️',
    simpleExplanation: `두 변수가 함께 변하나?

같이 커지면 양수,
반대면 음수!`,
    realLifeExample: `📈 공부시간-성적:
공부 많이 → 성적 높음
→ 양의 공분산`,
    examTip: '💯 공분산 = 방향만 / 상관계수 = 강도도 표현',
  },
  {
    id: 's2-cv',
    subject: 2,
    category: '통계 기초',
    keyword: '변동계수 (CV)',
    emoji: '📊',
    simpleExplanation: `상대적인 흩어짐!

표준편차 ÷ 평균
단위 없이 비교 가능!`,
    realLifeExample: `💰 투자 비교:
• A펀드: 평균 100, 표준편차 10 → CV=10%
• B펀드: 평균 1000, 표준편차 50 → CV=5%
→ B가 더 안정적!`,
    examTip: '💯 CV = 표준편차/평균 × 100% = 단위 무관 비교',
  },
  {
    id: 's2-confidence',
    subject: 2,
    category: '통계 기초',
    keyword: '신뢰구간',
    emoji: '🎯',
    simpleExplanation: `진짜 값이 이 안에 있어요!

95% 신뢰구간이면
100번 중 95번은 포함!`,
    realLifeExample: `📊 여론조사:
"지지율 45% ± 3%"
→ 42%~48% 사이
(95% 신뢰수준)`,
    examTip: '💯 신뢰수준↑ → 구간↑ (더 넓어짐)',
  },
  {
    id: 's2-hypothesis-test',
    subject: 2,
    category: '통계 기초',
    keyword: '가설검정',
    emoji: '❓',
    simpleExplanation: `차이가 진짜인가?

우연인지, 진짜 다른 건지
통계적으로 판단해요.`,
    realLifeExample: `💊 신약 효과:
• 귀무가설: 효과 없다
• 대립가설: 효과 있다
→ 데이터로 검증!`,
    examTip: '💯 p < 0.05 → 귀무가설 기각 → 유의미',
  },
  {
    id: 's2-pvalue',
    subject: 2,
    category: '통계 기초',
    keyword: 'p-value',
    emoji: '📉',
    simpleExplanation: `우연일 확률이에요!

p값이 작으면
"우연이 아니다"라는 뜻!`,
    realLifeExample: `🎲 동전 실험:
10번 중 9번 앞면
→ p = 0.02 (우연?아니야!)`,
    examTip: '💯 p < 0.05 → 유의미 / p > 0.05 → 유의미X',
  },
  {
    id: 's2-type1-error',
    subject: 2,
    category: '통계 기초',
    keyword: '1종 오류 (α)',
    emoji: '🚨',
    simpleExplanation: `없는데 있다고 한 거예요!

"거짓 양성"
실제론 없는데 있다고 판단!`,
    realLifeExample: `🏥 암 검사:
• 건강한데 "암이다" 진단
• 1종 오류 = 거짓 양성
→ 불필요한 치료 위험`,
    examTip: '💯 1종오류(α) = 귀무가설이 참인데 기각 = 거짓양성',
  },
  {
    id: 's2-type2-error',
    subject: 2,
    category: '통계 기초',
    keyword: '2종 오류 (β)',
    emoji: '🙈',
    simpleExplanation: `있는데 없다고 한 거예요!

"거짓 음성"
실제론 있는데 없다고 판단!`,
    realLifeExample: `🏥 암 검사:
• 암인데 "정상" 진단
• 2종 오류 = 거짓 음성
→ 치료 놓칠 위험`,
    examTip: '💯 2종오류(β) = 귀무가설이 거짓인데 채택 = 거짓음성',
  },
  // ========== 샘플링 (26-40) ==========
  {
    id: 's2-sampling',
    subject: 2,
    category: '샘플링',
    keyword: '표본추출',
    emoji: '🎣',
    simpleExplanation: `일부만 뽑아서 조사해요!

전체를 다 볼 수 없으니
대표 샘플을 뽑아요.`,
    realLifeExample: `🍲 국 간보기:
전체 국을 다 먹을 수 없으니
숟가락으로 한 번 맛보기!`,
    examTip: '💯 표본 = 모집단의 부분집합 = 대표성 중요',
  },
  {
    id: 's2-srs',
    subject: 2,
    category: '샘플링',
    keyword: '단순무작위추출',
    emoji: '🎲',
    simpleExplanation: `무작위로 뽑아요!

모든 사람이 뽑힐 확률이
똑같아요.`,
    realLifeExample: `🎰 로또 추첨:
모든 번호가 같은 확률로
무작위 추출!`,
    examTip: '💯 SRS = 모두 같은 확률 = 가장 기본',
  },
  {
    id: 's2-stratified',
    subject: 2,
    category: '샘플링',
    keyword: '층화추출',
    emoji: '🗂️',
    simpleExplanation: `그룹별로 나눠서 뽑아요!

층(그룹) 내에서는 비슷하고
층 간에는 달라요.`,
    realLifeExample: `🏫 학년별 설문:
• 1학년 100명 중 10명
• 2학년 100명 중 10명
• 3학년 100명 중 10명
→ 각 학년 대표!`,
    examTip: '💯 층화 = 내동외이 (내부 동질, 외부 이질)',
    relatedConcepts: ['s2-cluster'],
    diagram: `층화추출 (내동외이)
┌──────┐  ←층1 (비슷한 애들끼리)
│●●○○○ │
├──────┤  ←층2
│○●●○○ │
├──────┤  ←층3
│○○●○● │
└──────┘
  각 층에서 추출`
  },
  {
    id: 's2-cluster',
    subject: 2,
    category: '샘플링',
    keyword: '군집추출',
    emoji: '🏘️',
    simpleExplanation: `그룹 자체를 뽑아요!

몇 개 그룹을 골라서
그 안의 전부 조사해요.`,
    realLifeExample: `🏫 반 단위 조사:
• 전체 30개 반 중
• 5개 반만 선택
• 그 반 전체 조사`,
    examTip: '💯 군집 = 내이외동 (내부 이질, 외부 동질) = 층화 반대!',
    relatedConcepts: ['s2-stratified'],
    diagram: `군집추출 (내이외동)
┌────┐ ┌────┐ ┌────┐
│●○◆ │ │●○◆ │ │●○◆ │
│★△○ │ │★△○ │ │★△○ │
└────┘ └────┘ └────┘
 선택    선택    X
↑──────↑
군집 자체를 선택`
  },
  {
    id: 's2-systematic',
    subject: 2,
    category: '샘플링',
    keyword: '계통추출',
    emoji: '🔢',
    simpleExplanation: `일정 간격으로 뽑아요!

시작점 정하고
매 n번째마다 선택!`,
    realLifeExample: `🏭 품질검사:
100개 제품 중
매 10번째 제품 검사`,
    examTip: '💯 계통 = k번째마다 추출 = 시작점만 랜덤',
  },
  {
    id: 's2-oversampling',
    subject: 2,
    category: '샘플링',
    keyword: '오버샘플링',
    emoji: '📈',
    simpleExplanation: `적은 쪽을 늘려요!

불균형 데이터에서
소수 클래스를 복제해요.`,
    realLifeExample: `🏥 희귀병 데이터:
• 정상: 1000명
• 희귀병: 10명
→ 희귀병 데이터 복제!`,
    examTip: '💯 오버샘플링 = 소수 증가 → 과적합 위험',
    relatedConcepts: ['s2-undersampling', 's2-smote'],
  },
  {
    id: 's2-undersampling',
    subject: 2,
    category: '샘플링',
    keyword: '언더샘플링',
    emoji: '📉',
    simpleExplanation: `많은 쪽을 줄여요!

불균형 데이터에서
다수 클래스를 줄여요.`,
    realLifeExample: `🏥 희귀병 데이터:
• 정상: 1000명 → 100명으로 줄임
• 희귀병: 10명 → 유지`,
    examTip: '💯 언더샘플링 = 다수 감소 → 정보손실 위험',
    relatedConcepts: ['s2-oversampling'],
  },
  {
    id: 's2-smote',
    subject: 2,
    category: '샘플링',
    keyword: 'SMOTE',
    emoji: '✨',
    simpleExplanation: `가짜 데이터를 만들어요!

단순 복제가 아니라
비슷한 새 데이터 생성!`,
    realLifeExample: `🎨 그림 비유:
• 복제: 똑같은 그림 복사
• SMOTE: 비슷한 새 그림 그리기`,
    examTip: '💯 SMOTE = 이웃 기반 합성 = 오버샘플링 개선',
    relatedConcepts: ['s2-oversampling'],
  },
  {
    id: 's2-bootstrap',
    subject: 2,
    category: '샘플링',
    keyword: '부트스트랩',
    emoji: '🔄',
    simpleExplanation: `복원추출로 여러 번 뽑아요!

같은 데이터에서
여러 샘플 만들기!`,
    realLifeExample: `🎰 제비뽑기:
뽑고 → 다시 넣고 → 또 뽑고
→ 여러 세트 만들기`,
    examTip: '💯 부트스트랩 = 복원추출 반복 = 배깅의 기반',
  },
  {
    id: 's2-crossval',
    subject: 2,
    category: '샘플링',
    keyword: '교차검증 (K-Fold)',
    emoji: '🔀',
    simpleExplanation: `데이터를 돌려가며 테스트!

K개로 나눠서
각각 테스트해요.`,
    realLifeExample: `📝 시험공부:
• 5개 단원을 돌아가며
• 4개로 공부, 1개로 테스트
• 5번 반복!`,
    examTip: '💯 K-Fold = 과적합 방지 = 일반화 성능 평가',
    diagram: `5-Fold 교차검증
1회: [테스트][훈련][훈련][훈련][훈련]
2회: [훈련][테스트][훈련][훈련][훈련]
3회: [훈련][훈련][테스트][훈련][훈련]
...`
  },
  {
    id: 's2-holdout',
    subject: 2,
    category: '샘플링',
    keyword: '홀드아웃',
    emoji: '✂️',
    simpleExplanation: `훈련/테스트로 나눠요!

보통 80:20으로
데이터를 분리해요.`,
    realLifeExample: `📚 공부 비유:
• 80%: 문제집으로 공부
• 20%: 모의고사로 테스트`,
    examTip: '💯 홀드아웃 = 단순 분할 = train/test split',
  },
  {
    id: 's2-train-test-val',
    subject: 2,
    category: '샘플링',
    keyword: '훈련/검증/테스트',
    emoji: '📊',
    simpleExplanation: `3개로 나눠요!

훈련: 학습용
검증: 튜닝용
테스트: 최종 평가용`,
    realLifeExample: `📝 수능 비유:
• 훈련: 문제집 (학습)
• 검증: 모의고사 (점검)
• 테스트: 수능 (최종)`,
    examTip: '💯 3분할 = 60:20:20 또는 70:15:15',
    diagram: `데이터 분할
┌────────────────────┐
│ Train 60% │Val 20%│Test│
└────────────────────┘
  학습용     튜닝용  평가용`
  },
  {
    id: 's2-point-estimation',
    subject: 2,
    category: '통계 기초',
    keyword: '점추정',
    emoji: '📍',
    simpleExplanation: `하나의 값으로 추정!

"평균은 딱 50이다"처럼
정확한 값 하나로 표현해요.`,
    realLifeExample: `📏 키 추정:
"한국 성인 남성 평균키는 173cm"
→ 하나의 값!`,
    examTip: '💯 점추정 = 하나의 값 / 구간추정 = 범위',
    relatedConcepts: ['s2-confidence'],
  },
  {
    id: 's2-interval-estimation',
    subject: 2,
    category: '통계 기초',
    keyword: '구간추정',
    emoji: '↔️',
    simpleExplanation: `범위로 추정!

"평균은 48~52 사이"처럼
범위로 표현해요.`,
    realLifeExample: `📊 여론조사:
"지지율 45% ± 3%"
→ 42%~48% 범위`,
    examTip: '💯 구간추정 = 신뢰구간 = 신뢰수준↑ 구간↑',
    relatedConcepts: ['s2-confidence'],
  },
  {
    id: 's2-sampling-error',
    subject: 2,
    category: '샘플링',
    keyword: '표본오차',
    emoji: '📏',
    simpleExplanation: `표본과 모집단의 차이!

샘플이 전체를 완벽히
대표하지 못해서 생기는 오차예요.`,
    realLifeExample: `📊 여론조사:
"±3.1%p (95% 신뢰수준)"
→ 표본오차가 3.1%`,
    examTip: '💯 표본오차 = 표본 크기↑ → 오차↓',
  },
  // ========== 데이터 전처리 (41-60) ==========
  {
    id: 's2-missing-value',
    subject: 2,
    category: '데이터 전처리',
    keyword: '결측값 처리',
    emoji: '❓',
    simpleExplanation: `비어있는 값을 처리해요!

삭제하거나
다른 값으로 채워요.`,
    realLifeExample: `📋 설문조사:
나이: 25, ?, 30, ?
→ 삭제? 평균으로 채우기?`,
    examTip: '💯 결측처리 = 삭제/평균/중앙값/예측모델',
    diagram: `결측값 처리 방법
┌────────────────────┐
│ 삭제: 해당 행 제거   │
│ 대체: 평균/중앙값    │
│ 예측: ML로 예측     │
└────────────────────┘`
  },
  {
    id: 's2-mcar',
    subject: 2,
    category: '데이터 전처리',
    keyword: 'MCAR/MAR/MNAR',
    emoji: '🎲',
    simpleExplanation: `결측 발생 이유예요!

MCAR: 완전 랜덤
MAR: 다른 변수와 관련
MNAR: 자기 자신과 관련`,
    realLifeExample: `📊 소득 결측:
• MCAR: 실수로 빼먹음
• MAR: 나이 많으면 안 적음
• MNAR: 고소득자가 안 적음`,
    examTip: '💯 MCAR=완전무작위, MAR=조건부무작위, MNAR=비무작위',
  },
  {
    id: 's2-imputation',
    subject: 2,
    category: '데이터 전처리',
    keyword: '대체 (Imputation)',
    emoji: '🔧',
    simpleExplanation: `결측값을 채워요!

평균, 중앙값, 최빈값
또는 예측값으로 대체!`,
    realLifeExample: `📊 성적 결측:
80, ?, 90, 85
→ 평균 85로 대체!`,
    examTip: '💯 이상치 있으면 중앙값, 범주형은 최빈값',
  },
  {
    id: 's2-normalization',
    subject: 2,
    category: '데이터 전처리',
    keyword: '정규화 (Min-Max)',
    emoji: '📊',
    simpleExplanation: `0~1 사이로 바꿔요!

가장 작은 값 = 0
가장 큰 값 = 1`,
    realLifeExample: `📏 키 정규화:
150~190cm 범위
→ 0~1로 변환
165cm = 0.375`,
    examTip: '💯 정규화 = (x-min)/(max-min) = 0~1 범위',
    relatedConcepts: ['s2-standardization'],
  },
  {
    id: 's2-standardization',
    subject: 2,
    category: '데이터 전처리',
    keyword: '표준화 (Z-score)',
    emoji: '📐',
    simpleExplanation: `평균 0, 표준편차 1로!

평균을 빼고
표준편차로 나눠요.`,
    realLifeExample: `📝 성적 표준화:
평균 70, 표준편차 10
→ 80점 = (80-70)/10 = 1`,
    examTip: '💯 표준화 = (x-평균)/표준편차 = Z-score',
    relatedConcepts: ['s2-normalization'],
  },
  {
    id: 's2-robust-scaling',
    subject: 2,
    category: '데이터 전처리',
    keyword: '로버스트 스케일링',
    emoji: '💪',
    simpleExplanation: `이상치에 강해요!

중앙값과 IQR로
스케일링해요.`,
    realLifeExample: `💰 연봉 스케일링:
• 이상치(CEO 연봉) 있을 때
• 중앙값, IQR 사용
→ 이상치 영향 적음!`,
    examTip: '💯 Robust = (x-중앙값)/IQR = 이상치에 강건',
  },
  {
    id: 's2-encoding',
    subject: 2,
    category: '데이터 전처리',
    keyword: '인코딩',
    emoji: '🔢',
    simpleExplanation: `글자를 숫자로 바꿔요!

컴퓨터는 숫자만 이해하니까
범주형을 숫자로 변환!`,
    realLifeExample: `🎨 색깔 인코딩:
• 빨강 → 1
• 파랑 → 2
• 초록 → 3`,
    examTip: '💯 인코딩 = 범주형 → 숫자형 변환',
  },
  {
    id: 's2-onehot',
    subject: 2,
    category: '데이터 전처리',
    keyword: '원-핫 인코딩',
    emoji: '🔘',
    simpleExplanation: `0과 1로 표현해요!

각 범주마다 컬럼 만들고
해당되면 1, 아니면 0!`,
    realLifeExample: `🎨 색깔:
빨강 = [1,0,0]
파랑 = [0,1,0]
초록 = [0,0,1]`,
    examTip: '💯 원-핫 = 순서 없는 범주형에 사용',
    diagram: `원-핫 인코딩
     빨강 파랑 초록
빨강 [ 1    0    0 ]
파랑 [ 0    1    0 ]
초록 [ 0    0    1 ]`
  },
  {
    id: 's2-label-encoding',
    subject: 2,
    category: '데이터 전처리',
    keyword: '라벨 인코딩',
    emoji: '🏷️',
    simpleExplanation: `순서대로 번호 붙여요!

범주에 0, 1, 2... 번호를
차례대로 부여!`,
    realLifeExample: `📊 등급 인코딩:
• 하 → 0
• 중 → 1
• 상 → 2`,
    examTip: '💯 라벨 = 순서 있는 범주형에 사용',
  },
  {
    id: 's2-target-encoding',
    subject: 2,
    category: '데이터 전처리',
    keyword: '타겟 인코딩',
    emoji: '🎯',
    simpleExplanation: `타겟 평균으로 바꿔요!

각 범주의 타겟 평균값을
범주 값으로 사용!`,
    realLifeExample: `🏠 지역별 집값:
• 강남: 평균 10억
• 강북: 평균 5억
→ 강남=10, 강북=5로 인코딩`,
    examTip: '💯 타겟 인코딩 = 데이터 누수 주의 → K-Fold 필요',
  },
  {
    id: 's2-binning',
    subject: 2,
    category: '데이터 전처리',
    keyword: '비닝 (Binning)',
    emoji: '📊',
    simpleExplanation: `구간으로 나눠요!

연속형 값을
범주로 변환해요.`,
    realLifeExample: `📊 나이 비닝:
• 0-19: 청소년
• 20-39: 청년
• 40-59: 중년
• 60+: 노년`,
    examTip: '💯 비닝 = 연속형 → 범주형 변환',
  },
  {
    id: 's2-log-transform',
    subject: 2,
    category: '데이터 전처리',
    keyword: '로그 변환',
    emoji: '📈',
    simpleExplanation: `로그를 취해요!

큰 값을 줄이고
분포를 정규분포에 가깝게!`,
    realLifeExample: `💰 소득 분포:
1만~100억 범위
→ 로그 취하면 분포 완만`,
    examTip: '💯 로그변환 = 오른쪽 꼬리 분포 교정',
  },
  {
    id: 's2-feature-selection',
    subject: 2,
    category: '데이터 전처리',
    keyword: '특성 선택',
    emoji: '✂️',
    simpleExplanation: `중요한 변수만 선택!

관련 없는 변수를 빼서
모델 성능을 높여요.`,
    realLifeExample: `🏠 집값 예측:
• 중요: 면적, 위치, 층수
• 불필요: 집주인 이름
→ 불필요한 거 제거!`,
    examTip: '💯 특성선택 = 필터/래퍼/임베디드 방법',
  },
  {
    id: 's2-pca',
    subject: 2,
    category: '데이터 전처리',
    keyword: 'PCA (주성분분석)',
    emoji: '🔍',
    simpleExplanation: `차원을 줄여요!

많은 변수를 적은 수의
중요한 성분으로 요약!`,
    realLifeExample: `📊 100개 변수:
→ PCA로 10개 주성분으로 축소
→ 정보 90% 유지!`,
    examTip: '💯 PCA = 분산 최대화 = 비지도 차원축소',
    diagram: `PCA 차원축소
 100개 변수      10개 주성분
┌─────────┐    ┌─────┐
│●●●●●●●● │ → │●●●● │
│●●●●●●●● │    └─────┘
└─────────┘    정보 90% 유지`
  },
  {
    id: 's2-lda',
    subject: 2,
    category: '데이터 전처리',
    keyword: 'LDA (선형판별분석)',
    emoji: '🎯',
    simpleExplanation: `클래스 구분을 최대화!

같은 클래스는 모이고
다른 클래스는 떨어지게!`,
    realLifeExample: `🎓 학생 분류:
합격/불합격을 가장 잘 구분하는
새로운 축을 찾기!`,
    examTip: '💯 LDA = 클래스간 분산 최대화 = 지도 차원축소',
    relatedConcepts: ['s2-pca'],
  },
  {
    id: 's2-lsa',
    subject: 2,
    category: '데이터 전처리',
    keyword: 'LSA (잠재의미분석)',
    emoji: '📚',
    simpleExplanation: `문서의 숨은 의미를 찾아요!

SVD로 단어-문서 행렬을
분해해서 토픽 추출!`,
    realLifeExample: `📰 뉴스 분석:
"대통령", "청와대", "정책"
→ 잠재 토픽: 정치`,
    examTip: '💯 LSA = SVD + 잠재의미 = 텍스트 차원축소',
  },
  {
    id: 's2-svd',
    subject: 2,
    category: '데이터 전처리',
    keyword: 'SVD (특이값분해)',
    emoji: '🔢',
    simpleExplanation: `행렬을 분해해요!

행렬 = U × Σ × V^T
차원축소에 사용!`,
    realLifeExample: `🎬 넷플릭스 추천:
사용자×영화 행렬
→ SVD로 패턴 추출`,
    examTip: '💯 SVD = 행렬분해 = LSA의 핵심 기술',
  },
  {
    id: 's2-text-preprocess',
    subject: 2,
    category: '데이터 전처리',
    keyword: '텍스트 전처리',
    emoji: '📝',
    simpleExplanation: `글자 데이터를 정리해요!

불용어 제거, 형태소 분석,
토큰화 등을 해요.`,
    realLifeExample: `📱 리뷰 전처리:
"이 제품은 정말 좋아요!!"
→ ["제품", "정말", "좋다"]`,
    examTip: '💯 전처리 = 토큰화→불용어제거→어간추출',
  },
  {
    id: 's2-tokenization',
    subject: 2,
    category: '데이터 전처리',
    keyword: '토큰화',
    emoji: '✂️',
    simpleExplanation: `문장을 조각내요!

문장을 단어나 문자
단위로 쪼개요.`,
    realLifeExample: `📝 문장 토큰화:
"나는 학교에 간다"
→ ["나는", "학교에", "간다"]`,
    examTip: '💯 토큰화 = 분리 단위 결정 (단어/형태소/문자)',
  },
  {
    id: 's2-stopwords',
    subject: 2,
    category: '데이터 전처리',
    keyword: '불용어 제거',
    emoji: '🚫',
    simpleExplanation: `의미 없는 단어 제거!

"은, 는, 이, 가" 같은
단어를 빼요.`,
    realLifeExample: `📝 불용어 제거:
["나는", "학교에", "간다"]
→ ["학교", "간다"]`,
    examTip: '💯 불용어 = 분석에 불필요한 고빈도 단어',
  },
  // ========== 탐색적 분석 (61-80) ==========
  {
    id: 's2-eda',
    subject: 2,
    category: '탐색적 분석',
    keyword: 'EDA (탐색적 데이터분석)',
    emoji: '🔍',
    simpleExplanation: `데이터를 살펴봐요!

그래프, 통계량으로
데이터 특성 파악!`,
    realLifeExample: `🕵️ 탐정처럼:
• 데이터 크기는?
• 결측값은?
• 분포는 어때?`,
    examTip: '💯 EDA = 가설 전 데이터 탐색 = 시각화+요약통계',
  },
  {
    id: 's2-histogram',
    subject: 2,
    category: '탐색적 분석',
    keyword: '히스토그램',
    emoji: '📊',
    simpleExplanation: `분포를 막대로!

값의 구간별로
빈도를 표시해요.`,
    realLifeExample: `📊 성적 분포:
60-70점: ██
70-80점: ████
80-90점: ███`,
    examTip: '💯 히스토그램 = 연속형 분포 = 구간별 빈도',
  },
  {
    id: 's2-boxplot',
    subject: 2,
    category: '탐색적 분석',
    keyword: '박스플롯',
    emoji: '📦',
    simpleExplanation: `분포를 상자로!

중앙값, 사분위수, 이상치를
한눈에 보여줘요.`,
    realLifeExample: `📦 성적 박스플롯:
┌─┬─┐    Q3
│ │ │    중앙값
└─┴─┘    Q1
  ●      이상치`,
    examTip: '💯 박스플롯 = 5요약 수치 시각화 = 이상치 탐지',
    diagram: `박스플롯 구조
    ●  ← 이상치
    │
 ┬──┴──┬ ← 최대값
 │     │
 ├─────┤ ← Q3
 │  ─  │ ← 중앙값
 ├─────┤ ← Q1
 │     │
 ┴──┬──┴ ← 최소값
    │
    ●  ← 이상치`
  },
  {
    id: 's2-scatter',
    subject: 2,
    category: '탐색적 분석',
    keyword: '산점도',
    emoji: '⚫',
    simpleExplanation: `점으로 관계를 봐요!

두 변수의 관계를
점으로 표현해요.`,
    realLifeExample: `📈 키-몸무게:
   ·  · ·
  ·  ·
 · ·
키 →  몸무게↑`,
    examTip: '💯 산점도 = 두 연속형 관계 = 상관관계 확인',
  },
  {
    id: 's2-heatmap',
    subject: 2,
    category: '탐색적 분석',
    keyword: '히트맵',
    emoji: '🌡️',
    simpleExplanation: `색으로 값을 표현!

값이 클수록 진하고
작을수록 연해요.`,
    realLifeExample: `🌡️ 상관관계 히트맵:
     A   B   C
A  [🟥][🟧][🟦]
B  [🟧][🟥][🟩]
C  [🟦][🟩][🟥]`,
    examTip: '💯 히트맵 = 매트릭스 시각화 = 상관행렬에 활용',
  },
  {
    id: 's2-barplot',
    subject: 2,
    category: '탐색적 분석',
    keyword: '막대그래프',
    emoji: '📊',
    simpleExplanation: `범주별 막대!

범주형 변수의 크기를
막대 높이로 표현해요.`,
    realLifeExample: `📊 과목별 점수:
국어 ████ 80
수학 █████ 100
영어 ███ 60`,
    examTip: '💯 막대 = 범주형 비교 / 히스토그램 = 연속형 분포',
  },
  {
    id: 's2-lineplot',
    subject: 2,
    category: '탐색적 분석',
    keyword: '선 그래프',
    emoji: '📈',
    simpleExplanation: `추세를 선으로!

시간에 따른 변화를
선으로 연결해요.`,
    realLifeExample: `📈 주가 추세:
1월 ─── 2월 ───↗ 3월`,
    examTip: '💯 선 그래프 = 시계열 추세 시각화',
  },
  {
    id: 's2-piechart',
    subject: 2,
    category: '탐색적 분석',
    keyword: '파이 차트',
    emoji: '🥧',
    simpleExplanation: `비율을 원으로!

전체에서 각 부분이
차지하는 비율을 표현!`,
    realLifeExample: `🥧 시장 점유율:
A사 40% 🟦
B사 35% 🟩
C사 25% 🟧`,
    examTip: '💯 파이 = 비율/구성 = 5개 이하 범주에 적합',
  },
  {
    id: 's2-crosstab',
    subject: 2,
    category: '탐색적 분석',
    keyword: '교차표',
    emoji: '📋',
    simpleExplanation: `두 범주의 빈도표!

행과 열에 범주를 놓고
빈도를 세요.`,
    realLifeExample: `📋 성별-흡연:
       흡연  비흡연
남성   30    70
여성   10    90`,
    examTip: '💯 교차표 = 범주형 × 범주형 = 카이제곱 검정',
  },
  {
    id: 's2-pivot',
    subject: 2,
    category: '탐색적 분석',
    keyword: '피벗테이블',
    emoji: '🔄',
    simpleExplanation: `데이터를 요약해요!

행/열 기준으로
집계해서 보여줘요.`,
    realLifeExample: `🔄 월별/지역별 매출:
       서울  부산
1월   100   80
2월   120   90`,
    examTip: '💯 피벗 = 다차원 요약 = 행/열/값 지정',
  },
  {
    id: 's2-groupby',
    subject: 2,
    category: '탐색적 분석',
    keyword: 'GroupBy',
    emoji: '📂',
    simpleExplanation: `그룹별로 집계해요!

같은 값끼리 묶어서
평균, 합계 등 계산!`,
    realLifeExample: `📂 부서별 평균급여:
df.groupby('부서')['급여'].mean()
영업부: 400만
개발부: 500만`,
    examTip: '💯 GroupBy = Split → Apply → Combine',
  },
  {
    id: 's2-describe',
    subject: 2,
    category: '탐색적 분석',
    keyword: '기술통계량',
    emoji: '📊',
    simpleExplanation: `데이터 요약 통계!

평균, 표준편차, 최소, 최대 등
한눈에 파악!`,
    realLifeExample: `📊 df.describe():
count: 100
mean: 75
std: 10
min: 50
max: 100`,
    examTip: '💯 기술통계 = 중심/산포/분포 요약',
  },
  {
    id: 's2-correlation-matrix',
    subject: 2,
    category: '탐색적 분석',
    keyword: '상관행렬',
    emoji: '🔗',
    simpleExplanation: `모든 변수 쌍의 상관!

변수들 사이 관계를
행렬로 보여줘요.`,
    realLifeExample: `🔗 상관행렬:
     A    B    C
A  1.0  0.8  0.2
B  0.8  1.0  0.5
C  0.2  0.5  1.0`,
    examTip: '💯 상관행렬 = 히트맵으로 시각화',
  },
  {
    id: 's2-normality-test',
    subject: 2,
    category: '탐색적 분석',
    keyword: '정규성 검정',
    emoji: '🔔',
    simpleExplanation: `정규분포인지 확인!

데이터가 종 모양인지
통계적으로 검정해요.`,
    realLifeExample: `🔔 정규성 검정:
• Shapiro-Wilk (소표본)
• K-S test (대표본)
p < 0.05 → 정규분포 아님`,
    examTip: '💯 정규성 = 모수 검정의 전제조건',
  },
  {
    id: 's2-chi-square',
    subject: 2,
    category: '탐색적 분석',
    keyword: '카이제곱 검정',
    emoji: '🎲',
    simpleExplanation: `범주형 관계 검정!

두 범주형 변수가
관련 있는지 확인!`,
    realLifeExample: `📊 성별-제품선호:
성별과 선호 제품이 관련?
→ 카이제곱 검정으로 확인`,
    examTip: '💯 카이제곱 = 범주형×범주형 독립성 검정',
  },
  {
    id: 's2-ttest',
    subject: 2,
    category: '탐색적 분석',
    keyword: 't-검정',
    emoji: '📊',
    simpleExplanation: `두 평균 비교!

두 그룹의 평균이
다른지 검정해요.`,
    realLifeExample: `📊 남녀 키 비교:
남자 평균: 175cm
여자 평균: 162cm
→ 차이가 유의미한가?`,
    examTip: '💯 t-test = 두 집단 평균 비교 = 소표본에 적합',
  },
  {
    id: 's2-anova',
    subject: 2,
    category: '탐색적 분석',
    keyword: 'ANOVA (분산분석)',
    emoji: '📈',
    simpleExplanation: `세 개 이상 평균 비교!

여러 그룹의 평균 차이를
한 번에 검정해요.`,
    realLifeExample: `📊 3개 반 성적:
1반: 75점, 2반: 80점, 3반: 85점
→ 유의미한 차이?`,
    examTip: '💯 ANOVA = 3+ 집단 평균 비교 = F-검정',
  },
  // ========== 데이터 수집 (81-100) ==========
  {
    id: 's2-web-crawling',
    subject: 2,
    category: '데이터 수집',
    keyword: '웹 크롤링',
    emoji: '🕷️',
    simpleExplanation: `웹에서 데이터 수집!

웹페이지를 돌아다니며
데이터를 모아요.`,
    realLifeExample: `🕷️ 뉴스 크롤링:
네이버 뉴스 페이지 방문
→ 제목, 내용, 날짜 수집`,
    examTip: '💯 크롤링 = 자동 수집 / 스크래핑 = 데이터 추출',
  },
  {
    id: 's2-api-collection',
    subject: 2,
    category: '데이터 수집',
    keyword: 'API 데이터 수집',
    emoji: '🔌',
    simpleExplanation: `API로 데이터 요청!

서버에 요청하면
데이터를 받아요.`,
    realLifeExample: `🌤️ 날씨 API:
GET /weather?city=서울
→ {"온도": 25, "날씨": "맑음"}`,
    examTip: '💯 API = 구조화된 데이터 = 크롤링보다 안정적',
  },
  {
    id: 's2-database-query',
    subject: 2,
    category: '데이터 수집',
    keyword: 'DB 쿼리',
    emoji: '🗄️',
    simpleExplanation: `데이터베이스에서 추출!

SQL로 필요한 데이터만
가져와요.`,
    realLifeExample: `🗄️ 고객 데이터:
SELECT * FROM 고객
WHERE 나이 > 20`,
    examTip: '💯 SQL = 정형 데이터 추출의 기본',
  },
  {
    id: 's2-file-format',
    subject: 2,
    category: '데이터 수집',
    keyword: '파일 형식',
    emoji: '📁',
    simpleExplanation: `데이터 저장 형식!

CSV, JSON, Excel 등
다양한 형식이 있어요.`,
    realLifeExample: `📁 파일 형식:
• CSV: 콤마로 구분
• JSON: 중괄호 형태
• Excel: 표 형태`,
    examTip: '💯 CSV=가벼움, JSON=유연함, Parquet=빅데이터용',
  },
  {
    id: 's2-csv',
    subject: 2,
    category: '데이터 수집',
    keyword: 'CSV 파일',
    emoji: '📋',
    simpleExplanation: `콤마로 구분한 파일!

값들을 콤마(,)로
구분해서 저장해요.`,
    realLifeExample: `📋 CSV 예시:
이름,나이,성별
철수,25,남
영희,23,여`,
    examTip: '💯 CSV = 가장 기본적인 데이터 교환 형식',
  },
  {
    id: 's2-json',
    subject: 2,
    category: '데이터 수집',
    keyword: 'JSON 파일',
    emoji: '📝',
    simpleExplanation: `키-값 쌍의 형식!

{} 안에 이름과 값을
쌍으로 저장해요.`,
    realLifeExample: `📝 JSON 예시:
{
  "이름": "철수",
  "나이": 25,
  "취미": ["독서", "게임"]
}`,
    examTip: '💯 JSON = 웹 API의 표준 형식 = 반정형',
  },
  {
    id: 's2-parquet',
    subject: 2,
    category: '데이터 수집',
    keyword: 'Parquet 파일',
    emoji: '🗜️',
    simpleExplanation: `빅데이터용 파일 형식!

열 기반 저장으로
빠르고 작아요.`,
    realLifeExample: `🗜️ CSV vs Parquet:
• CSV: 100MB
• Parquet: 20MB (압축!)
→ 속도 10배 빠름`,
    examTip: '💯 Parquet = 컬럼 기반 = 빅데이터 분석에 최적',
  },
  {
    id: 's2-log-data',
    subject: 2,
    category: '데이터 수집',
    keyword: '로그 데이터',
    emoji: '📜',
    simpleExplanation: `시스템 기록 데이터!

누가 언제 뭘 했는지
기록한 데이터예요.`,
    realLifeExample: `📜 웹 로그:
192.168.1.1 - [2024-01-01] "GET /index.html" 200`,
    examTip: '💯 로그 = 반정형 = 파싱 필요',
  },
  {
    id: 's2-sensor-data',
    subject: 2,
    category: '데이터 수집',
    keyword: '센서 데이터',
    emoji: '📡',
    simpleExplanation: `센서가 측정한 데이터!

온도, 습도, 위치 등을
자동으로 수집해요.`,
    realLifeExample: `📡 IoT 센서:
• 온도: 25°C
• 습도: 60%
• 1초마다 기록!`,
    examTip: '💯 센서 = 시계열 + 실시간 + 대용량',
  },
  {
    id: 's2-image-data',
    subject: 2,
    category: '데이터 수집',
    keyword: '이미지 데이터',
    emoji: '🖼️',
    simpleExplanation: `그림 데이터!

픽셀로 이루어진
비정형 데이터예요.`,
    realLifeExample: `🖼️ 이미지 분석:
• 얼굴 인식
• 자동차 번호판 인식
• 의료 영상 분석`,
    examTip: '💯 이미지 = 비정형 = CNN으로 분석',
  },
  {
    id: 's2-text-data',
    subject: 2,
    category: '데이터 수집',
    keyword: '텍스트 데이터',
    emoji: '📰',
    simpleExplanation: `글 데이터!

뉴스, 리뷰, SNS 글 등
비정형 데이터예요.`,
    realLifeExample: `📰 텍스트 분석:
• 감성 분석
• 키워드 추출
• 토픽 모델링`,
    examTip: '💯 텍스트 = 비정형 = NLP로 분석',
  },
  {
    id: 's2-data-cleaning',
    subject: 2,
    category: '데이터 전처리',
    keyword: '데이터 클리닝',
    emoji: '🧹',
    simpleExplanation: `데이터를 깨끗하게!

오류, 중복, 이상치를
정리해요.`,
    realLifeExample: `🧹 클리닝 작업:
• 오타 수정: "Seolu" → "Seoul"
• 중복 제거
• 형식 통일`,
    examTip: '💯 클리닝 = 품질 향상의 기본',
  },
  {
    id: 's2-data-integration',
    subject: 2,
    category: '데이터 전처리',
    keyword: '데이터 통합',
    emoji: '🔗',
    simpleExplanation: `여러 데이터를 합쳐요!

다른 출처의 데이터를
하나로 만들어요.`,
    realLifeExample: `🔗 통합 예시:
• 고객 DB + 주문 DB
• Excel + CSV
→ 하나의 분석용 데이터`,
    examTip: '💯 통합 = merge/join = 키 기준 연결',
  },
  {
    id: 's2-data-transformation',
    subject: 2,
    category: '데이터 전처리',
    keyword: '데이터 변환',
    emoji: '🔄',
    simpleExplanation: `데이터 형태를 바꿔요!

분석에 적합한 형태로
가공해요.`,
    realLifeExample: `🔄 변환 예시:
• 날짜: "2024/1/1" → datetime
• 원-달러: 1300 → 1.0
• 로그 변환`,
    examTip: '💯 변환 = 스케일링/인코딩/파생변수 생성',
  },
  {
    id: 's2-data-reduction',
    subject: 2,
    category: '데이터 전처리',
    keyword: '데이터 축소',
    emoji: '📉',
    simpleExplanation: `데이터를 줄여요!

중요한 부분만 남기고
불필요한 건 제거!`,
    realLifeExample: `📉 축소 방법:
• 샘플링: 10%만 사용
• 차원축소: PCA
• 압축: 이미지 리사이즈`,
    examTip: '💯 축소 = 효율성 증가 = 계산 비용 감소',
  },
  {
    id: 's2-feature-engineering',
    subject: 2,
    category: '데이터 전처리',
    keyword: '피처 엔지니어링',
    emoji: '⚙️',
    simpleExplanation: `새 변수를 만들어요!

기존 변수로 새로운
유용한 변수를 생성!`,
    realLifeExample: `⚙️ 파생변수:
• 나이 → 연령대
• 구매일 → 요일
• 키,몸무게 → BMI`,
    examTip: '💯 피처 엔지니어링 = 모델 성능의 핵심',
  },
  {
    id: 's2-datetime-feature',
    subject: 2,
    category: '데이터 전처리',
    keyword: '날짜/시간 피처',
    emoji: '📅',
    simpleExplanation: `날짜에서 정보 추출!

년, 월, 요일, 시간 등을
새 변수로 만들어요.`,
    realLifeExample: `📅 날짜 피처:
2024-01-15 14:30
→ 년: 2024
→ 월: 1
→ 요일: 월요일
→ 시간대: 오후`,
    examTip: '💯 날짜 = 풍부한 파생변수 원천',
  },
  {
    id: 's2-aggregation',
    subject: 2,
    category: '데이터 전처리',
    keyword: '집계 피처',
    emoji: '📊',
    simpleExplanation: `그룹별로 요약!

고객별 총구매액,
평균 방문횟수 등 계산!`,
    realLifeExample: `📊 고객 집계:
• 총 구매액
• 구매 횟수
• 평균 구매단가
• 최근 구매일`,
    examTip: '💯 집계 = count/sum/mean/max/min',
  },
  {
    id: 's2-interaction-feature',
    subject: 2,
    category: '데이터 전처리',
    keyword: '상호작용 피처',
    emoji: '✖️',
    simpleExplanation: `변수끼리 연산!

두 변수를 곱하거나
나눠서 새 변수 생성!`,
    realLifeExample: `✖️ 상호작용:
• 가격 × 수량 = 매출
• 거리 / 시간 = 속도
• 면적 / 가격 = 평당가격`,
    examTip: '💯 상호작용 = 비선형 관계 포착',
  },
  {
    id: 's2-polynomial-feature',
    subject: 2,
    category: '데이터 전처리',
    keyword: '다항식 피처',
    emoji: '📈',
    simpleExplanation: `제곱, 세제곱 피처!

x → x², x³
비선형 관계 표현!`,
    realLifeExample: `📈 다항 피처:
나이 → 나이²
→ U자형 관계 포착 가능`,
    examTip: '💯 다항 = 비선형 관계 = 과적합 주의',
  },
];
