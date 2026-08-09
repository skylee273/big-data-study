# 빅데이터분석기사 기출문제 학습 시스템

## 시험 정보

| 항목 | 내용 |
|------|------|
| **시험 유형** | 필기 (객관식 4지선다) |
| **문제 수** | 80문제 (과목당 20문제) |
| **시험 시간** | 120분 |
| **합격 기준** | 과목당 40점 이상, 평균 60점 이상 |

## 과목 구성

| 과목 | 내용 | 문제 번호 |
|------|------|-----------|
| **1과목** | 빅데이터 분석 기획 | 1~20 |
| **2과목** | 빅데이터 탐색 | 21~40 |
| **3과목** | 빅데이터 모델링 | 41~60 |
| **4과목** | 빅데이터 결과 해석 | 61~80 |

---

## 앱 구조

```
big-data-exam-app/
├─ src/app/page.tsx              # 홈 — 회차별 기출 목록
├─ src/app/exam/[id]/page.tsx    # 회차 라우트 (generateStaticParams)
├─ src/app/exam/[id]/ExamClient.tsx
├─ src/components/
│   ├─ QuestionCard.tsx          # 문제 + 보기 클릭 즉시 채점 + 해설
│   ├─ QuestionNav.tsx           # 1~80 번호 그리드
│   └─ ResultSummary.tsx         # 과목별 점수 · 합격 판정
├─ src/lib/types.ts              # Question / Exam 타입, SUBJECTS
├─ src/lib/progress.ts           # localStorage 답안 저장
└─ src/data/exams/               # ★ 문제 데이터 단일 소스
    ├─ 2021-04.json ~ 2025-10.json
    └─ index.ts                  # EXAMS 배열
```

동작: 홈에서 회차 클릭 → 문제 한 개씩 표시 → 보기를 고르면 그 자리에서 정답·해설·암기 포인트가 열림. 답안은 브라우저 localStorage에 회차별로 저장된다.

---

## 데이터 형식 (`src/data/exams/YYYY-MM.json`)

```json
{
  "id": "2025-04",
  "label": "2025년 4월",
  "round": 10,
  "year": 2025,
  "questions": [
    {
      "no": 1,
      "subject": 1,
      "question": "문제 본문 (이미지 원문 그대로)",
      "passage": "표·보기 지문이 있을 때만 (선택)",
      "options": ["① 보기", "② 보기", "③ 보기", "④ 보기"],
      "answer": 3,
      "explanation": "왜 정답인지",
      "traps": "오답 선택지 분석 (선택)",
      "keyPoint": "암기 포인트 (선택)",
      "keywords": ["키워드"]
    }
  ]
}
```

- `subject`는 문제 번호로 결정된다 (1~20:1, 21~40:2, 41~60:3, 61~80:4).
- 문제 본문과 보기는 **원문 그대로** 적는다. 오탈자도 고치지 않는다.
- 정답이 불확실한 문항은 `keywords`에 `"확인필요"`를 넣어 표시한다.

---

## 새 회차 추가 절차

1. `src/data/exams/YYYY-MM.json` 생성 (`questions: []`로 시작)
2. `src/data/exams/index.ts`에 import 후 `EXAMS` 배열에 추가
3. 문제를 채워 넣고 `npm run build`로 검증

---

## 기출 이미지 등록 방식

```
[이미지 첨부 또는 이미지 폴더 경로]
회차: 2025년 4월
```

Claude가 번호 순서대로 문제·보기를 전사하고, 정답·해설·암기 포인트를 작성해 해당 회차 JSON에 채운다.
한 이미지에 여러 문항이 들어 있을 수 있으므로 **이미지 단위가 아니라 문제 번호 단위**로 수집하고, 마지막에 1~80번 누락·중복을 검증한다.

---

## 실행 / 배포

```bash
cd big-data-exam-app
npm install
npm run dev      # http://localhost:3000
npm run build

vercel --prod    # 배포
```

배포 URL: https://big-data-exam-app.vercel.app
