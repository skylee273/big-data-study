import { Concept } from '../conceptsData';

export const subject1Concepts: Concept[] = [
  // ========== 빅데이터 개념 (1-20) ==========
  {
    id: 's1-bigdata-3v',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '빅데이터 3V',
    emoji: '📊',
    simpleExplanation: `빅데이터는 "엄청 큰 데이터"예요!

3V는 빅데이터의 세 가지 특징:
📦 Volume = 양이 많아요
⚡ Velocity = 빨라요
🎨 Variety = 종류가 다양해요`,
    realLifeExample: `🍔 햄버거 가게 예시:
• Volume: 전국 100개 매장 하루 10만 개 주문
• Velocity: 점심에 1초당 50개 주문
• Variety: 주문서, 카드결제, 후기, CCTV...`,
    examTip: '💯 3V = Volume(양), Velocity(속도), Variety(다양성)',
    relatedConcepts: ['s1-bigdata-5v'],
    diagram: `┌─────────────────────────┐
│  📊 빅데이터 3V        │
├─────────────────────────┤
│ 📦 Volume   = 양       │
│ ⚡ Velocity = 속도     │
│ 🎨 Variety  = 다양성   │
└─────────────────────────┘`
  },
  {
    id: 's1-bigdata-5v',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '빅데이터 5V',
    emoji: '🔢',
    simpleExplanation: `3V에 2개가 더 추가됐어요!

✅ Veracity = 정확해야 해요
💎 Value = 가치가 있어야 해요

쓰레기 데이터가 많으면 안 돼요!`,
    realLifeExample: `📱 SNS 데이터 예시:
• Veracity: 가짜뉴스 걸러내기
• Value: 광고에 활용할 수 있는 정보 추출`,
    examTip: '💯 5V = 3V + Veracity(정확성) + Value(가치)',
    relatedConcepts: ['s1-bigdata-3v'],
  },
  {
    id: 's1-data-type-structured',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '정형 데이터',
    emoji: '📋',
    simpleExplanation: `엑셀처럼 깔끔하게 정리된 데이터예요!

행과 열이 딱딱 맞아요.
컴퓨터가 이해하기 쉬워요!`,
    realLifeExample: `📊 학교 성적표:
이름 | 국어 | 수학 | 영어
철수 |  90 |  85 |  95
영희 |  88 |  92 |  87`,
    examTip: '💯 정형 = 스키마 있음 = RDB, 엑셀',
    relatedConcepts: ['s1-data-type-semi', 's1-data-type-unstructured'],
    diagram: `정형 데이터 = 표 형태
┌────┬────┬────┐
│ A  │ B  │ C  │
├────┼────┼────┤
│ 1  │ 2  │ 3  │
└────┴────┴────┘`
  },
  {
    id: 's1-data-type-semi',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '반정형 데이터',
    emoji: '📝',
    simpleExplanation: `중간 형태예요!
완전 깔끔하진 않지만, 규칙은 있어요.

JSON, XML 같은 것들이에요.`,
    realLifeExample: `📦 택배 정보 (JSON):
{
  "이름": "김철수",
  "주소": "서울시...",
  "물건": ["책", "펜"]
}`,
    examTip: '💯 반정형 = 스키마 포함 = JSON, XML, HTML',
    relatedConcepts: ['s1-data-type-structured', 's1-data-type-unstructured'],
  },
  {
    id: 's1-data-type-unstructured',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '비정형 데이터',
    emoji: '🖼️',
    simpleExplanation: `규칙이 없는 데이터예요!

사진, 동영상, 글 같은 거예요.
분석하려면 특별한 방법이 필요해요.`,
    realLifeExample: `📸 인스타그램:
• 사진/동영상
• 댓글 텍스트
• 음성 메시지`,
    examTip: '💯 비정형 = 스키마 없음 = 이미지, 동영상, 텍스트',
    relatedConcepts: ['s1-data-type-structured', 's1-data-type-semi'],
  },
  {
    id: 's1-dw',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '데이터 웨어하우스(DW)',
    emoji: '🏢',
    simpleExplanation: `데이터를 모아두는 큰 창고예요!

여러 곳의 데이터를 한곳에 모아서
분석하기 쉽게 정리해 둬요.`,
    realLifeExample: `🏬 대형마트 본사:
• 전국 매장 판매 데이터
• 고객 정보
• 재고 현황
→ 모두 DW에 저장!`,
    examTip: '💯 DW 특징 = 주통시비 (주제지향, 통합, 시계열, 비휘발)',
    relatedConcepts: ['s1-dw-features', 's1-dm'],
    diagram: `   여러 시스템
    ↓  ↓  ↓
┌─────────────┐
│  DW (창고)   │
│  📦📦📦📦   │
└─────────────┘
    ↓
   분석/리포트`
  },
  {
    id: 's1-dw-features',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'DW 4대 특징',
    emoji: '⭐',
    simpleExplanation: `DW의 네 가지 특징이에요!

주: 주제별로 정리
통: 여러 데이터를 통합
시: 시간에 따라 저장
비: 한번 저장하면 안 바꿈`,
    realLifeExample: `📚 도서관 비유:
• 주제지향: 분야별 서가
• 통합: 여러 출판사 책
• 시계열: 연도별 보관
• 비휘발: 책 버리지 않음`,
    examTip: '💯 주통시비 = 주제지향성, 통합성, 시계열성, 비휘발성',
    relatedConcepts: ['s1-dw'],
  },
  {
    id: 's1-dm',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '데이터 마트(DM)',
    emoji: '🏪',
    simpleExplanation: `DW에서 필요한 부분만 꺼낸 거예요!

부서별로 필요한 데이터만
작은 창고에 따로 보관해요.`,
    realLifeExample: `🏬 마트 vs 편의점:
• DW = 대형마트 (모든 것)
• DM = 편의점 (필요한 것만)

마케팅팀 DM: 고객, 판매 데이터만`,
    examTip: '💯 DM = DW의 부분집합 = 부서별 소규모 창고',
    relatedConcepts: ['s1-dw'],
    diagram: `┌─────────────────┐
│   DW (대형창고)   │
│  ┌───┐ ┌───┐    │
│  │DM │ │DM │    │
│  │영업│ │마케│    │
│  └───┘ └───┘    │
└─────────────────┘`
  },
  {
    id: 's1-etl',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'ETL',
    emoji: '🔄',
    simpleExplanation: `데이터를 옮기는 세 단계예요!

E: 꺼내고 (Extract)
T: 바꾸고 (Transform)
L: 넣는다 (Load)`,
    realLifeExample: `🍳 요리 비유:
• E: 냉장고에서 재료 꺼내기
• T: 씻고 썰고 양념하기
• L: 접시에 담기`,
    examTip: '💯 ETL = Extract(추출) → Transform(변환) → Load(적재)',
    relatedConcepts: ['s1-dw', 's1-elt'],
    diagram: `원본 DB → [E]xtract
         ↓
    [T]ransform (정제)
         ↓
    [L]oad → DW`
  },
  {
    id: 's1-elt',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'ELT',
    emoji: '🔁',
    simpleExplanation: `ETL이랑 순서가 달라요!

먼저 다 넣고, 나중에 바꿔요.
빅데이터 시대에 많이 써요!`,
    realLifeExample: `📦 이사 비유:
• ETL: 짐 정리하고 옮기기
• ELT: 일단 다 옮기고 정리

ELT가 빠를 수 있어요!`,
    examTip: '💯 ELT = Extract → Load → Transform (빅데이터에 적합)',
    relatedConcepts: ['s1-etl'],
  },
  {
    id: 's1-olap',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'OLAP',
    emoji: '📊',
    simpleExplanation: `데이터를 여러 각도로 분석해요!

다차원으로 보는 거예요.
"지역별, 월별, 제품별 매출"처럼요!`,
    realLifeExample: `🎮 루빅스 큐브처럼:
여러 방향으로 돌려보며 분석

"서울 + 1월 + 아이스크림 = ?"`,
    examTip: '💯 OLAP = 다차원 분석 = 슬라이싱/다이싱/드릴다운',
    relatedConcepts: ['s1-oltp', 's1-dw'],
    diagram: `     제품
      │
      │    ┌───┐
      │   /   /│
      │  /───/ │
      │ │   │ │ ← 지역
      │ │   │/
      └─────────
        시간`
  },
  {
    id: 's1-oltp',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'OLTP',
    emoji: '💳',
    simpleExplanation: `실시간 거래 처리예요!

계산할 때마다 바로바로 저장!
은행, 마트 계산대 같은 거예요.`,
    realLifeExample: `🏦 ATM 거래:
• 출금 버튼 누르면
• 바로 잔액 변경
• 실시간 처리!`,
    examTip: '💯 OLTP = 실시간 거래 / OLAP = 분석용',
    relatedConcepts: ['s1-olap'],
  },
  {
    id: 's1-lake',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '데이터 레이크',
    emoji: '🌊',
    simpleExplanation: `모든 데이터를 그대로 저장해요!

정리 안 하고 일단 다 모아요.
나중에 필요할 때 꺼내 써요!`,
    realLifeExample: `🎣 호수 비유:
• 물고기(데이터)가 막 들어옴
• 정리 안 함, 자연 상태
• 필요할 때 낚시(분석)`,
    examTip: '💯 레이크 = 원본 그대로 저장 / DW = 정제 후 저장',
    relatedConcepts: ['s1-dw'],
    diagram: `데이터 레이크 🌊
┌─────────────────┐
│ 📄 📸 🎵 📹    │
│  원본 그대로!   │
│ 정형+비정형     │
└─────────────────┘`
  },
  {
    id: 's1-governance',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 거버넌스',
    emoji: '⚖️',
    simpleExplanation: `데이터 관리 규칙이에요!

누가, 어떻게, 무슨 데이터를
다룰지 정하는 거예요.`,
    realLifeExample: `🏫 학교 규칙 비유:
• 누가 성적을 볼 수 있나?
• 어떻게 저장하나?
• 얼마나 보관하나?`,
    examTip: '💯 거버넌스 = 데이터 정책/표준/품질/보안 관리',
    relatedConcepts: ['s1-steward', 's1-quality'],
  },
  {
    id: 's1-steward',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 스튜어드',
    emoji: '👨‍💼',
    simpleExplanation: `데이터 관리 담당자예요!

데이터의 품질을 책임지고
문제 생기면 해결해요.`,
    realLifeExample: `🏨 호텔 지배인처럼:
• 방(데이터) 상태 점검
• 문제 있으면 해결
• 품질 유지!`,
    examTip: '💯 스튜어드 = 데이터 품질 책임자',
    relatedConcepts: ['s1-governance'],
  },
  {
    id: 's1-quality',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 품질',
    emoji: '✅',
    simpleExplanation: `데이터가 얼마나 좋은지예요!

정확하고, 완전하고,
일관되어야 좋은 데이터예요.`,
    realLifeExample: `📱 전화번호부:
• 정확성: 번호가 맞아야
• 완전성: 빠진 거 없어야
• 일관성: 형식이 같아야`,
    examTip: '💯 품질 요소 = 정확성, 완전성, 일관성, 유일성, 적시성',
    relatedConcepts: ['s1-governance'],
    diagram: `데이터 품질 요소
┌────────────────┐
│ ✓ 정확성      │
│ ✓ 완전성      │
│ ✓ 일관성      │
│ ✓ 유일성      │
│ ✓ 적시성      │
└────────────────┘`
  },
  {
    id: 's1-master',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '마스터 데이터',
    emoji: '👑',
    simpleExplanation: `핵심이 되는 기준 데이터예요!

고객, 제품, 직원 정보처럼
여러 곳에서 공통으로 쓰는 거예요.`,
    realLifeExample: `🏢 회사 예시:
• 고객 마스터: 고객 기본정보
• 제품 마스터: 제품 코드/이름
• 전사에서 같은 걸 써야!`,
    examTip: '💯 마스터 = 기준정보 = 고객/제품/조직 등',
    relatedConcepts: ['s1-governance', 's1-metadata'],
  },
  {
    id: 's1-metadata',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '메타데이터',
    emoji: '🏷️',
    simpleExplanation: `데이터에 대한 데이터예요!

사진의 찍은 날짜, 위치처럼
데이터를 설명하는 정보예요.`,
    realLifeExample: `📸 사진 메타데이터:
• 찍은 날짜: 2024-01-01
• 위치: 서울
• 카메라: 아이폰
• 파일크기: 3MB`,
    examTip: '💯 메타데이터 = "데이터의 데이터" = 설명/정의 정보',
    relatedConcepts: ['s1-master'],
  },
  {
    id: 's1-lineage',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 리니지',
    emoji: '🔗',
    simpleExplanation: `데이터의 족보예요!

어디서 왔고, 어떻게 바뀌었고,
어디로 갔는지 추적해요.`,
    realLifeExample: `🥛 우유 이력 추적:
농장 → 공장 → 마트 → 집
어디서 문제 생겼는지 추적 가능!`,
    examTip: '💯 리니지 = 데이터 흐름/변환 추적 = 출처~최종',
    relatedConcepts: ['s1-governance'],
  },
  // ========== 분석 기획 (21-40) ==========
  {
    id: 's1-analytics-type',
    subject: 1,
    category: '분석 기획',
    keyword: '분석 유형 4가지',
    emoji: '🔍',
    simpleExplanation: `분석에는 4가지가 있어요!

설명: 왜 그랬지?
진단: 무슨 일이지?
예측: 앞으로 어떻게?
처방: 어떻게 해야 해?`,
    realLifeExample: `🏥 병원 비유:
• 설명: 증상 설명
• 진단: 병 찾기
• 예측: 앞으로 어떻게?
• 처방: 약 처방`,
    examTip: '💯 설명→진단→예측→처방 (난이도/가치 순)',
    diagram: `분석 유형 피라미드
    △ 처방 (최고)
   ╱ ╲ 예측
  ╱   ╲ 진단
 ╱     ╲ 설명 (기초)
▔▔▔▔▔▔▔`
  },
  {
    id: 's1-task-discovery',
    subject: 1,
    category: '분석 기획',
    keyword: '과제 도출 방식',
    emoji: '💡',
    simpleExplanation: `문제를 찾는 4가지 방법이에요!

문제 알고 + 방법 알면 = 최적화
문제 알고 + 방법 모르면 = 솔루션
문제 모르고 + 방법 알면 = 통찰
둘 다 모르면 = 발견`,
    realLifeExample: `🎯 다이어트 비유:
• 최적화: 운동+식단 조절 (다 앎)
• 솔루션: 살빼야 하는데 방법은?
• 통찰: 방법은 아는데 뭐가 문제?
• 발견: 왜 살찌는지도 모름`,
    examTip: '💯 최솔통발 = 최적화(OO), 솔루션(OX), 통찰(XO), 발견(XX)',
    diagram: `        방법 아는가?
           Yes    No
문제    ┌──────┬──────┐
아는가? │최적화│솔루션│ Yes
       ├──────┼──────┤
       │ 통찰 │ 발견 │ No
       └──────┴──────┘`
  },
  {
    id: 's1-top-down',
    subject: 1,
    category: '분석 기획',
    keyword: '하향식 접근법',
    emoji: '⬇️',
    simpleExplanation: `위에서 아래로 분석해요!

먼저 큰 문제를 정하고
점점 세부적으로 쪼개요.`,
    realLifeExample: `🏢 회사 목표:
"매출 10% 증가"
→ 어떤 제품?
→ 어떤 지역?
→ 어떤 고객?`,
    examTip: '💯 하향식 = 문제 정의 먼저 = 가설 기반',
    relatedConcepts: ['s1-bottom-up'],
  },
  {
    id: 's1-bottom-up',
    subject: 1,
    category: '분석 기획',
    keyword: '상향식 접근법',
    emoji: '⬆️',
    simpleExplanation: `아래에서 위로 분석해요!

데이터를 먼저 보고
패턴을 발견해요.`,
    realLifeExample: `🔍 데이터 탐색:
판매 데이터 분석
→ "어? 화요일에 많이 팔리네?"
→ 새로운 인사이트 발견!`,
    examTip: '💯 상향식 = 데이터 먼저 = 탐색적 분석',
    relatedConcepts: ['s1-top-down'],
  },
  {
    id: 's1-planning-order',
    subject: 1,
    category: '분석 기획',
    keyword: '분석 기획 순서',
    emoji: '📝',
    simpleExplanation: `분석 계획 세우는 순서예요!

비즈니스 → 프로젝트 →
수행계획 → 위험관리`,
    realLifeExample: `🏗️ 집 짓기 비유:
1. 왜 필요해? (비즈니스)
2. 어떤 집? (프로젝트)
3. 어떻게 지어? (수행)
4. 문제 생기면? (위험)`,
    examTip: '💯 비프수위 = 비즈니스 → 프로젝트 → 수행 → 위험',
  },
  {
    id: 's1-roi',
    subject: 1,
    category: '분석 기획',
    keyword: 'ROI (투자수익률)',
    emoji: '💰',
    simpleExplanation: `투자해서 얼마나 벌었나예요!

100만원 투자해서 150만원 벌면
ROI = 50%`,
    realLifeExample: `📈 광고 ROI:
• 광고비: 100만원
• 매출 증가: 300만원
• ROI = (300-100)/100 = 200%`,
    examTip: '💯 ROI = (이익-비용)/비용 × 100%',
  },
  {
    id: 's1-kpi',
    subject: 1,
    category: '분석 기획',
    keyword: 'KPI (핵심성과지표)',
    emoji: '🎯',
    simpleExplanation: `목표 달성을 측정하는 지표예요!

"얼마나 잘하고 있나?"를
숫자로 보여줘요.`,
    realLifeExample: `🏃 다이어트 KPI:
• 목표: 10kg 감량
• KPI: 현재 몸무게
• 매주 측정해서 확인!`,
    examTip: '💯 KPI = 측정 가능한 목표 지표',
  },
  {
    id: 's1-poc',
    subject: 1,
    category: '분석 기획',
    keyword: 'PoC (개념증명)',
    emoji: '🧪',
    simpleExplanation: `작게 먼저 테스트해요!

"이거 될까?" 확인하는
미니 실험이에요.`,
    realLifeExample: `🍕 신메뉴 테스트:
• 전국 출시 전에
• 한 매장에서만 테스트
• 잘 팔리면 전국 출시!`,
    examTip: '💯 PoC = 소규모 사전 검증 = 가능성 확인',
    relatedConcepts: ['s1-pilot'],
  },
  {
    id: 's1-pilot',
    subject: 1,
    category: '분석 기획',
    keyword: '파일럿 프로젝트',
    emoji: '✈️',
    simpleExplanation: `시범 운영이에요!

PoC보다 큰 규모로
실제 환경에서 테스트해요.`,
    realLifeExample: `🚗 신차 테스트:
• PoC: 연구소 테스트
• 파일럿: 실제 도로 시범운행
• 출시: 전국 판매`,
    examTip: '💯 파일럿 = PoC보다 큰 실제환경 테스트',
    relatedConcepts: ['s1-poc'],
  },
  {
    id: 's1-agile',
    subject: 1,
    category: '분석 방법론',
    keyword: '애자일 방법론',
    emoji: '🔄',
    simpleExplanation: `빠르게 조금씩 개발해요!

완벽하게 다 만들지 않고
조금씩 만들면서 수정해요.`,
    realLifeExample: `🎮 게임 업데이트:
• 일단 출시
• 유저 피드백 받고
• 2주마다 업데이트
• 계속 개선!`,
    examTip: '💯 애자일 = 반복적, 점진적, 유연함',
    relatedConcepts: ['s1-waterfall', 's1-scrum'],
    diagram: `애자일 🔄
계획→개발→테스트→피드백
  ↑__________________|
     반복 (스프린트)`
  },
  {
    id: 's1-waterfall',
    subject: 1,
    category: '분석 방법론',
    keyword: '폭포수 방법론',
    emoji: '💧',
    simpleExplanation: `위에서 아래로 순서대로!

한 단계 끝나야 다음 단계.
물이 떨어지듯이 진행해요.`,
    realLifeExample: `🏗️ 건물 짓기:
1. 설계 완료
2. 기초 공사
3. 골조 공사
4. 완공
→ 뒤로 못 돌아감!`,
    examTip: '💯 폭포수 = 순차적, 문서 중심, 변경 어려움',
    relatedConcepts: ['s1-agile'],
    diagram: `폭포수 💧
요구분석
    ↓
  설계
    ↓
  개발
    ↓
 테스트
    ↓
  운영`
  },
  {
    id: 's1-scrum',
    subject: 1,
    category: '분석 방법론',
    keyword: '스크럼',
    emoji: '🏉',
    simpleExplanation: `애자일의 한 방법이에요!

2-4주 단위로 일하고
매일 짧게 회의해요.`,
    realLifeExample: `🏃 마라톤 페이스:
• 스프린트: 2주 목표
• 데일리 스크럼: 매일 15분 회의
• "어제 뭐 했고, 오늘 뭐 할 건지"`,
    examTip: '💯 스크럼 = 스프린트(2-4주) + 데일리스크럼(매일회의)',
    relatedConcepts: ['s1-agile'],
  },
  {
    id: 's1-crisp-dm',
    subject: 1,
    category: '분석 방법론',
    keyword: 'CRISP-DM',
    emoji: '🔄',
    simpleExplanation: `데이터 마이닝 표준 방법론!

6단계로 분석해요.
돌아가면서 반복해요.`,
    realLifeExample: `🍳 요리 레시피:
1. 뭐 먹을지 (비즈니스)
2. 재료 확인 (데이터 이해)
3. 재료 손질 (준비)
4. 조리 (모델링)
5. 맛보기 (평가)
6. 서빙 (배포)`,
    examTip: '💯 CRISP-DM = 비이준모평배 (6단계)',
    diagram: `CRISP-DM 사이클
    비즈니스 이해
   ↗            ↘
배포            데이터 이해
 ↑     🔄        ↓
평가            데이터 준비
   ↖            ↙
      모델링`
  },
  {
    id: 's1-semma',
    subject: 1,
    category: '분석 방법론',
    keyword: 'SEMMA',
    emoji: '📊',
    simpleExplanation: `SAS 회사의 분석 방법론!

5단계: 표본 → 탐색 → 수정 →
모델 → 평가`,
    realLifeExample: `🎯 다트 게임:
S: 샘플 뽑기
E: 살펴보기
M: 조정하기
M: 던지기(모델)
A: 점수 확인`,
    examTip: '💯 SEMMA = Sample, Explore, Modify, Model, Assess',
  },
  {
    id: 's1-kdd',
    subject: 1,
    category: '분석 방법론',
    keyword: 'KDD 프로세스',
    emoji: '⛏️',
    simpleExplanation: `지식 발견 과정이에요!

데이터에서 유용한
지식을 캐내요.`,
    realLifeExample: `⛏️ 금광 비유:
1. 광산 선택 (선택)
2. 캐기 (전처리)
3. 변환
4. 마이닝
5. 해석/평가`,
    examTip: '💯 KDD = Knowledge Discovery in Database = 데이터 마이닝의 전체 과정',
  },
  {
    id: 's1-hypothesis',
    subject: 1,
    category: '분석 기획',
    keyword: '가설 수립',
    emoji: '❓',
    simpleExplanation: `"~일 것이다"라고 예상해요!

분석 전에 미리 예측하고
데이터로 확인해요.`,
    realLifeExample: `🍦 아이스크림 가설:
"여름에 아이스크림이 더 팔릴 것이다"
→ 데이터로 확인!`,
    examTip: '💯 가설 = 검증 가능한 예측 / 귀무가설 vs 대립가설',
  },
  {
    id: 's1-feasibility',
    subject: 1,
    category: '분석 기획',
    keyword: '타당성 분석',
    emoji: '✔️',
    simpleExplanation: `할 수 있는지 확인해요!

기술적으로? 경제적으로?
법적으로? 가능한가?`,
    realLifeExample: `🚀 우주여행 사업:
• 기술: 가능? ❓
• 비용: 감당 가능? ❓
• 법률: 허가? ❓`,
    examTip: '💯 타당성 = 기술/경제/법적/운영 타당성 검토',
  },
  {
    id: 's1-risk-mgmt',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '위험 관리',
    emoji: '⚠️',
    simpleExplanation: `문제를 미리 대비해요!

무슨 문제가 생길지 예측하고
대비책을 준비해요.`,
    realLifeExample: `🌧️ 소풍 위험관리:
• 위험: 비 올 수 있음
• 대책: 우산 준비
• 대안: 실내 장소 예약`,
    examTip: '💯 위험관리 = 식별 → 분석 → 대응 → 모니터링',
  },
  {
    id: 's1-stakeholder',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '이해관계자',
    emoji: '👥',
    simpleExplanation: `프로젝트에 관련된 사람들!

영향 주거나 받는
모든 사람을 말해요.`,
    realLifeExample: `🏫 학교 급식:
• 학생: 먹는 사람
• 영양사: 만드는 사람
• 학부모: 비용 내는 사람
• 교장: 책임지는 사람`,
    examTip: '💯 이해관계자 = 프로젝트 관련자 = 분석/소통 필요',
  },
  // ========== 프로젝트 관리 (41-60) ==========
  {
    id: 's1-wbs',
    subject: 1,
    category: '프로젝트 관리',
    keyword: 'WBS (작업분해구조)',
    emoji: '📊',
    simpleExplanation: `큰 일을 작게 쪼개요!

나무처럼 가지를 쳐서
관리하기 쉽게 만들어요.`,
    realLifeExample: `🎂 생일파티 WBS:
1. 준비
   1.1 초대장
   1.2 음식
   1.3 장식
2. 진행
3. 정리`,
    examTip: '💯 WBS = 작업 분해 = 계층적 구조화',
    diagram: `프로젝트
├─ 1. 분석
│  ├─ 1.1 요구사항
│  └─ 1.2 설계
├─ 2. 개발
└─ 3. 테스트`
  },
  {
    id: 's1-gantt',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '간트 차트',
    emoji: '📅',
    simpleExplanation: `일정을 막대로 표시해요!

언제 시작하고 끝나는지
한눈에 볼 수 있어요.`,
    realLifeExample: `📚 시험 공부 일정:
월: ████ 국어
화: ████████ 수학
수:     ████ 영어`,
    examTip: '💯 간트 = 일정 시각화 = 막대 형태',
    diagram: `간트 차트 예시
      1월  2월  3월
분석  ████
개발      ████████
테스트         ████`
  },
  {
    id: 's1-pert',
    subject: 1,
    category: '프로젝트 관리',
    keyword: 'PERT/CPM',
    emoji: '🔀',
    simpleExplanation: `작업 순서와 시간을 분석해요!

어떤 일이 먼저인지,
가장 오래 걸리는 경로는?`,
    realLifeExample: `🍳 아침 준비:
• 밥 짓기: 20분
• 계란 후라이: 5분
• 국 끓이기: 15분
→ 밥 먼저! (임계경로)`,
    examTip: '💯 PERT = 시간 추정 / CPM = 임계경로',
  },
  {
    id: 's1-milestone',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '마일스톤',
    emoji: '🏁',
    simpleExplanation: `중요한 체크포인트예요!

"여기까지 완료!"를
표시하는 기준점이에요.`,
    realLifeExample: `🏃 마라톤:
• 5km 통과 ⚑
• 10km 통과 ⚑
• 20km 통과 ⚑
• 결승점 🏁`,
    examTip: '💯 마일스톤 = 주요 완료 시점 = 이정표',
  },
  {
    id: 's1-baseline',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '베이스라인',
    emoji: '📏',
    simpleExplanation: `기준선이에요!

처음 계획을 정해두고
나중에 비교해요.`,
    realLifeExample: `💰 용돈 관리:
• 베이스라인: 한달 10만원
• 실제: 12만원 사용
• 초과 2만원!`,
    examTip: '💯 베이스라인 = 승인된 기준 = 비교 기준점',
  },
  {
    id: 's1-scope',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '범위 관리',
    emoji: '📐',
    simpleExplanation: `할 일의 범위를 정해요!

뭘 하고 뭘 안 할지
명확하게 정해요.`,
    realLifeExample: `🏠 방 청소:
• 범위 포함: 내 방
• 범위 제외: 동생 방
• 범위 추가는 협의 필요!`,
    examTip: '💯 범위 = 포함/제외 사항 명확히',
  },
  {
    id: 's1-scope-creep',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '스코프 크립',
    emoji: '👻',
    simpleExplanation: `범위가 슬금슬금 늘어나요!

"이것도 해주세요~"가
계속 추가되는 거예요.`,
    realLifeExample: `🎨 그림 의뢰:
처음: "고양이 그려주세요"
나중: "배경도요, 리본도요..."
→ 끝없이 추가!`,
    examTip: '💯 스코프 크립 = 범위의 점진적 확장 (위험요소!)',
  },
  {
    id: 's1-change-mgmt',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '변경 관리',
    emoji: '🔄',
    simpleExplanation: `변경을 체계적으로 관리해요!

아무나 막 바꾸면 안 돼요.
승인 절차가 필요해요.`,
    realLifeExample: `🎮 게임 패치:
1. 변경 요청
2. 영향 분석
3. 승인/거절
4. 적용
5. 기록`,
    examTip: '💯 변경관리 = 요청→분석→승인→실행→검증',
  },
  {
    id: 's1-resource',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '자원 관리',
    emoji: '👨‍💻',
    simpleExplanation: `사람과 도구를 관리해요!

누가 언제 뭘 할지,
뭐가 필요한지 정해요.`,
    realLifeExample: `🍳 급식 준비:
• 인력: 조리사 3명
• 장비: 가스레인지, 냄비
• 재료: 예산 내에서`,
    examTip: '💯 자원 = 인적자원 + 물적자원 + 시간',
  },
  {
    id: 's1-quality-mgmt',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '품질 관리',
    emoji: '✨',
    simpleExplanation: `좋은 결과물을 만들어요!

계획 → 보증 → 통제
세 단계로 관리해요.`,
    realLifeExample: `🍕 피자 품질관리:
• 계획: 맛있는 피자 기준
• 보증: 레시피 준수
• 통제: 맛 검사`,
    examTip: '💯 품질 = 계획 + 보증(과정) + 통제(결과)',
  },
  {
    id: 's1-comm-mgmt',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '의사소통 관리',
    emoji: '📢',
    simpleExplanation: `정보를 잘 전달해요!

누가 무슨 정보가 필요한지,
언제 어떻게 전달할지 정해요.`,
    realLifeExample: `📱 반 단톡방:
• 공지: 선생님 → 전체
• 질문: 학생 → 선생님
• 잡담: X (채널 분리)`,
    examTip: '💯 의사소통 = 이해관계자별 정보/방법/주기',
  },
  {
    id: 's1-procurement',
    subject: 1,
    category: '프로젝트 관리',
    keyword: '조달 관리',
    emoji: '🛒',
    simpleExplanation: `필요한 것을 구매해요!

외부에서 사거나
용역을 맡기는 거예요.`,
    realLifeExample: `🎪 축제 준비:
• 직접: 프로그램 기획
• 구매: 텐트 대여
• 용역: 음향 업체 계약`,
    examTip: '💯 조달 = 외부 구매/계약 관리',
  },
  {
    id: 's1-pmo',
    subject: 1,
    category: '프로젝트 관리',
    keyword: 'PMO',
    emoji: '🏛️',
    simpleExplanation: `프로젝트 관리 전담팀이에요!

여러 프로젝트를 관리하고
표준과 도구를 제공해요.`,
    realLifeExample: `🏢 회사 PMO:
• 프로젝트 현황 파악
• 방법론 제공
• 교육 지원
• 문제 해결 지원`,
    examTip: '💯 PMO = Project Management Office = 전사 PM 지원',
  },
  {
    id: 's1-pm',
    subject: 1,
    category: '프로젝트 관리',
    keyword: 'PM/PL 역할',
    emoji: '👔',
    simpleExplanation: `프로젝트 책임자예요!

PM은 전체 총괄,
PL은 기술 리더예요.`,
    realLifeExample: `🎬 영화 촬영:
• PM(프로듀서): 전체 관리
• PL(감독): 현장 지휘
• 팀원: 배우, 스태프`,
    examTip: '💯 PM = 관리/조정 / PL = 기술 리더',
  },
  // ========== 데이터 거버넌스 추가 (61-80) ==========
  {
    id: 's1-data-lifecycle',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 생명주기',
    emoji: '🔄',
    simpleExplanation: `데이터도 생명이 있어요!

생성 → 활용 → 보관 → 폐기
단계별로 관리해요.`,
    realLifeExample: `📄 서류 생명주기:
1. 생성: 문서 작성
2. 활용: 업무에 사용
3. 보관: 보존 (5년)
4. 폐기: 파쇄`,
    examTip: '💯 생명주기 = 생성→활용→보관→폐기',
    diagram: `데이터 생명주기
생성 → 활용 → 보관 → 폐기
 ↑______________________|
      (필요시 재활용)`
  },
  {
    id: 's1-data-standard',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 표준화',
    emoji: '📏',
    simpleExplanation: `같은 규칙으로 정리해요!

이름, 형식, 코드를
통일해서 사용해요.`,
    realLifeExample: `📱 전화번호 표준:
• 010-1234-5678 ✓
• 01012345678 ✗
• +82-10-1234-5678 ✓`,
    examTip: '💯 표준화 = 용어/도메인/코드 표준 = 일관성',
  },
  {
    id: 's1-data-security',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 보안',
    emoji: '🔒',
    simpleExplanation: `데이터를 안전하게 지켜요!

권한 없는 접근을 막고
정보 유출을 방지해요.`,
    realLifeExample: `🏦 금고 비유:
• 접근통제: 열쇠 있는 사람만
• 암호화: 비밀번호 걸기
• 감사: CCTV 녹화`,
    examTip: '💯 보안 = 기밀성 + 무결성 + 가용성 (CIA)',
  },
  {
    id: 's1-privacy',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '개인정보 보호',
    emoji: '🛡️',
    simpleExplanation: `개인정보를 보호해요!

이름, 전화번호 같은
민감한 정보를 지켜요.`,
    realLifeExample: `📧 이메일 수집:
• 동의 받기 ✓
• 목적 고지 ✓
• 보관 기간 ✓
• 파기 절차 ✓`,
    examTip: '💯 개인정보 = 동의 + 목적 명시 + 최소 수집',
  },
  {
    id: 's1-anonymization',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '비식별화',
    emoji: '🎭',
    simpleExplanation: `누군지 모르게 만들어요!

개인을 알아볼 수 없도록
정보를 가공해요.`,
    realLifeExample: `📊 설문조사:
• 원본: 김철수, 서울, 25세
• 비식별: ***, 수도권, 20대`,
    examTip: '💯 비식별 = 가명처리, 마스킹, 총계처리 등',
  },
  {
    id: 's1-pseudonymization',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '가명처리',
    emoji: '🔀',
    simpleExplanation: `가짜 이름으로 바꿔요!

원래 정보를 다른 값으로
대체하지만, 연결 가능해요.`,
    realLifeExample: `🏥 병원 데이터:
• 원본: 김철수 → A001
• 매핑테이블 따로 보관
• 필요시 복원 가능`,
    examTip: '💯 가명 = 복원 가능 / 익명 = 복원 불가',
  },
  {
    id: 's1-data-catalog',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 카탈로그',
    emoji: '📚',
    simpleExplanation: `데이터 목록이에요!

어떤 데이터가 어디에 있는지
쉽게 찾을 수 있어요.`,
    realLifeExample: `📚 도서관 목록:
• 제목, 저자, 위치
• 검색해서 찾기
• 데이터도 같은 원리!`,
    examTip: '💯 카탈로그 = 데이터 검색/관리 도구',
  },
  {
    id: 's1-data-dictionary',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '데이터 사전',
    emoji: '📖',
    simpleExplanation: `데이터 용어 설명서예요!

각 항목이 무슨 뜻인지
자세히 설명해 놔요.`,
    realLifeExample: `📖 고객 테이블 사전:
• CUST_ID: 고객번호 (PK)
• CUST_NM: 고객이름 (문자20)
• BIRTH_DT: 생년월일 (날짜)`,
    examTip: '💯 데이터 사전 = 테이블/컬럼 정의서',
  },
  {
    id: 's1-compliance',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '컴플라이언스',
    emoji: '⚖️',
    simpleExplanation: `법과 규정을 지켜요!

데이터 관련 법률을
잘 지키는 거예요.`,
    realLifeExample: `📜 데이터 법규:
• 개인정보보호법
• 정보통신망법
• GDPR (유럽)
→ 위반시 과태료!`,
    examTip: '💯 컴플라이언스 = 법규 준수 = 개인정보보호법 등',
  },
  {
    id: 's1-audit',
    subject: 1,
    category: '데이터 거버넌스',
    keyword: '감사 추적',
    emoji: '🔍',
    simpleExplanation: `누가 뭘 했는지 기록해요!

데이터 접근/변경을
모두 기록해 둬요.`,
    realLifeExample: `🏦 은행 기록:
• 09:00 홍길동 로그인
• 09:05 계좌 조회
• 09:10 이체 실행
→ 모든 행동 기록!`,
    examTip: '💯 감사추적 = 로그 기록 = 책임 추적 가능',
  },
  // ========== 빅데이터 개념 추가 (81-100) ==========
  {
    id: 's1-hadoop',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '하둡',
    emoji: '🐘',
    simpleExplanation: `빅데이터 저장/처리 도구예요!

큰 코끼리처럼
많은 데이터를 다뤄요.`,
    realLifeExample: `🐘 코끼리 창고:
• 커다란 데이터 저장
• 여러 대 컴퓨터로 분산
• 고장나도 괜찮아요`,
    examTip: '💯 하둡 = HDFS(저장) + MapReduce(처리) + YARN(관리)',
  },
  {
    id: 's1-spark',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '스파크',
    emoji: '⚡',
    simpleExplanation: `빠른 데이터 처리 도구예요!

메모리에서 처리해서
하둡보다 빨라요.`,
    realLifeExample: `⚡ 전기 vs 불:
• 하둡: 불 피워서 요리 (느림)
• 스파크: 전자레인지 (빠름)
• 인메모리 처리!`,
    examTip: '💯 스파크 = 인메모리 = 하둡보다 100배 빠름',
  },
  {
    id: 's1-nosql',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'NoSQL',
    emoji: '🗄️',
    simpleExplanation: `유연한 데이터베이스예요!

표 형태가 아니어도 돼요.
다양한 형태 저장 가능!`,
    realLifeExample: `📦 NoSQL 종류:
• 문서형: MongoDB (JSON)
• 키-값: Redis (캐시)
• 컬럼: Cassandra
• 그래프: Neo4j`,
    examTip: '💯 NoSQL = Not Only SQL = 비정형 데이터에 적합',
  },
  {
    id: 's1-cloud',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '클라우드',
    emoji: '☁️',
    simpleExplanation: `인터넷으로 빌려 쓰는 컴퓨터!

내 컴퓨터 없이도
원격으로 사용해요.`,
    realLifeExample: `☁️ 렌터카 비유:
• 온프레미스: 자가용 (소유)
• 클라우드: 렌터카 (대여)
• 필요할 때만 빌려 쓰기!`,
    examTip: '💯 클라우드 = IaaS/PaaS/SaaS = AWS, Azure, GCP',
  },
  {
    id: 's1-iaas',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'IaaS/PaaS/SaaS',
    emoji: '🏗️',
    simpleExplanation: `클라우드 서비스 종류예요!

인프라 / 플랫폼 / 소프트웨어
각각 빌려 쓸 수 있어요.`,
    realLifeExample: `🍕 피자 비유:
• IaaS: 오븐만 빌림 (EC2)
• PaaS: 반죽+오븐 (Heroku)
• SaaS: 완제품 (Gmail)`,
    examTip: '💯 IaaS=인프라, PaaS=플랫폼, SaaS=소프트웨어',
    diagram: `클라우드 서비스 모델
┌──────────────────┐
│ SaaS │ 앱 사용    │
├──────┼───────────┤
│ PaaS │ 개발환경   │
├──────┼───────────┤
│ IaaS │ 인프라     │
└──────────────────┘`
  },
  {
    id: 's1-stream',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '스트리밍 처리',
    emoji: '🌊',
    simpleExplanation: `실시간으로 처리해요!

데이터가 들어오는 즉시
바로바로 분석해요.`,
    realLifeExample: `📺 유튜브 라이브:
• 배치: 녹화 후 업로드
• 스트리밍: 실시간 방송
• 바로바로 처리!`,
    examTip: '💯 스트리밍 = 실시간 / 배치 = 모아서 처리',
    relatedConcepts: ['s1-batch'],
  },
  {
    id: 's1-batch',
    subject: 1,
    category: '빅데이터 개념',
    keyword: '배치 처리',
    emoji: '📦',
    simpleExplanation: `모아서 한번에 처리해요!

밤에 데이터 모아서
한꺼번에 분석해요.`,
    realLifeExample: `🧺 빨래 비유:
• 실시간: 옷 한 벌씩 세탁
• 배치: 모아서 한번에 세탁
• 효율적!`,
    examTip: '💯 배치 = 대량 일괄 처리 = 야간 작업',
    relatedConcepts: ['s1-stream'],
  },
  {
    id: 's1-api',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'API',
    emoji: '🔌',
    simpleExplanation: `프로그램끼리 대화하는 방법!

"이거 줘" 하면 "여기" 하고
데이터를 주고받아요.`,
    realLifeExample: `🍔 드라이브스루:
• 주문(요청) → 음식(응답)
• 메뉴판 = API 문서
• 창구 = API 엔드포인트`,
    examTip: '💯 API = Application Programming Interface',
  },
  {
    id: 's1-rest',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'REST API',
    emoji: '🌐',
    simpleExplanation: `웹에서 쓰는 API 방식!

URL로 요청하고
JSON으로 응답 받아요.`,
    realLifeExample: `🌐 날씨 API:
• 요청: /weather?city=서울
• 응답: {"온도": 25, "날씨": "맑음"}`,
    examTip: '💯 REST = HTTP 메서드 (GET/POST/PUT/DELETE)',
  },
  {
    id: 's1-ml-platform',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'ML 플랫폼',
    emoji: '🤖',
    simpleExplanation: `머신러닝 개발 환경이에요!

모델 개발부터 배포까지
한 곳에서 관리해요.`,
    realLifeExample: `🏭 공장 비유:
• 원료(데이터) 입고
• 가공(모델 학습)
• 출하(배포)
• 전 과정 자동화!`,
    examTip: '💯 ML플랫폼 = MLflow, Kubeflow, SageMaker',
  },
  {
    id: 's1-mlops',
    subject: 1,
    category: '빅데이터 개념',
    keyword: 'MLOps',
    emoji: '⚙️',
    simpleExplanation: `ML + 운영 자동화예요!

모델 배포와 관리를
자동으로 해요.`,
    realLifeExample: `🚗 자동차 공장:
• 수작업: 사람이 조립
• 자동화: 로봇이 조립
• MLOps: ML 자동 배포!`,
    examTip: '💯 MLOps = DevOps + ML = 자동화 배포/모니터링',
  },
  {
    id: 's1-data-driven',
    subject: 1,
    category: '분석 기획',
    keyword: '데이터 기반 의사결정',
    emoji: '📊',
    simpleExplanation: `감이 아니라 데이터로!

"느낌적 느낌"이 아니라
숫자로 결정해요.`,
    realLifeExample: `🏀 농구 감독:
• 감각: "저 선수 컨디션 좋아 보여"
• 데이터: "이번 달 슛 성공률 75%"
→ 데이터로 출전 결정!`,
    examTip: '💯 데이터 기반 = 주관 아닌 객관적 근거',
  },
  {
    id: 's1-ab-test',
    subject: 1,
    category: '분석 기획',
    keyword: 'A/B 테스트',
    emoji: '🔬',
    simpleExplanation: `두 가지를 비교해요!

A안과 B안 중에
뭐가 더 좋은지 실험해요.`,
    realLifeExample: `🛒 쇼핑몰 버튼:
• A: 빨간 구매버튼
• B: 파란 구매버튼
• 어떤 게 더 많이 클릭?`,
    examTip: '💯 A/B테스트 = 대조군 vs 실험군 비교',
  },
  {
    id: 's1-funnel',
    subject: 1,
    category: '분석 기획',
    keyword: '퍼널 분석',
    emoji: '🔻',
    simpleExplanation: `단계별로 분석해요!

깔때기처럼 점점 줄어드는
과정을 분석해요.`,
    realLifeExample: `🛒 쇼핑몰 퍼널:
방문 1000명 → 100%
장바구니 200명 → 20%
결제 50명 → 5%
어디서 빠지는지 분석!`,
    examTip: '💯 퍼널 = 전환율 분석 = 이탈 지점 파악',
    diagram: `퍼널 분석 🔻
╲ 방문 1000명 ╱
 ╲ 회원가입 500 ╱
  ╲ 장바구니 200 ╱
   ╲ 결제 50명 ╱`
  },
  {
    id: 's1-cohort',
    subject: 1,
    category: '분석 기획',
    keyword: '코호트 분석',
    emoji: '👥',
    simpleExplanation: `같은 그룹끼리 비교해요!

같은 시기에 가입한 사람들
따로 모아서 분석해요.`,
    realLifeExample: `📅 월별 가입자 분석:
• 1월 가입자 → 3개월 후 10% 남음
• 2월 가입자 → 3개월 후 15% 남음
→ 개선 효과 확인!`,
    examTip: '💯 코호트 = 동일 집단 추적 분석',
  },
  {
    id: 's1-segmentation',
    subject: 1,
    category: '분석 기획',
    keyword: '세그멘테이션',
    emoji: '✂️',
    simpleExplanation: `고객을 나눠요!

비슷한 특성을 가진
그룹으로 분류해요.`,
    realLifeExample: `🎯 고객 세그먼트:
• VIP: 월 100만원 이상
• 일반: 월 10-100만원
• 휴면: 3개월 미구매
→ 그룹별 다른 마케팅!`,
    examTip: '💯 세그멘테이션 = 고객 분류 = RFM 분석',
  },
  {
    id: 's1-rfm',
    subject: 1,
    category: '분석 기획',
    keyword: 'RFM 분석',
    emoji: '💎',
    simpleExplanation: `고객 가치를 분석해요!

R: 최근 구매
F: 구매 빈도
M: 구매 금액`,
    realLifeExample: `💎 VIP 고객 찾기:
• R: 일주일 전 구매 (최근)
• F: 매주 구매 (자주)
• M: 월 50만원 (많이)
→ 점수 높으면 VIP!`,
    examTip: '💯 RFM = Recency, Frequency, Monetary',
    diagram: `RFM 분석
┌────────────────────┐
│ R: 최근성 (언제?)   │
│ F: 빈도 (얼마나?)   │
│ M: 금액 (얼마를?)   │
└────────────────────┘`
  },
  {
    id: 's1-ltv',
    subject: 1,
    category: '분석 기획',
    keyword: 'LTV (고객생애가치)',
    emoji: '💰',
    simpleExplanation: `고객이 평생 쓸 돈이에요!

한 고객이 우리 회사에
얼마나 가치 있는지 계산해요.`,
    realLifeExample: `☕ 카페 고객 LTV:
• 주 2회 방문
• 회당 5천원
• 5년 이용 예상
→ LTV = 260만원`,
    examTip: '💯 LTV = 고객 평생 가치 = 장기 관점',
  },
  {
    id: 's1-cac',
    subject: 1,
    category: '분석 기획',
    keyword: 'CAC (고객획득비용)',
    emoji: '💸',
    simpleExplanation: `고객 한 명 얻는 비용!

마케팅에 쓴 돈 ÷
얻은 고객 수`,
    realLifeExample: `📱 앱 마케팅:
• 광고비: 100만원
• 신규 가입: 100명
• CAC = 1만원/명`,
    examTip: '💯 CAC = 획득비용 / LTV > CAC 이어야 이익!',
  },
];
