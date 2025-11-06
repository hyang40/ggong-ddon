# 🎉 GGong DDon (꽁돈)This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



> **충동을 참은 순간, 돈이 생긴다** 💰  ## Getting Started

> AI 긍정 강화 기반 재정 코칭 앱

First, run the development server:

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)```bash

![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)npm run dev

![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055?logo=framer)# or

yarn dev

---# or

pnpm dev

## ✨ 프로젝트 소개# or

bun dev

**GGong DDon**은 토스(Toss) 스타일의 **몽글몽글하고 귀여운 디자인**으로 제작된 마케팅 랜딩 페이지입니다.```



### 🎨 디자인 컨셉Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **베이스 컬러**: 연한 보라(#A78BFA) & 민트(#6EE7B7)

- **스타일**: 토스 앱처럼 몽글몽글하고 세련된 디자인You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **애니메이션**: Framer Motion을 활용한 부드러운 스크롤 효과

- **차트**: Recharts를 활용한 데이터 시각화This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



---## Learn More



## 🚀 빠른 시작To learn more about Next.js, take a look at the following resources:



### 1. 의존성 설치- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

```bash- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

npm install

```You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



### 2. 개발 서버 실행## Deploy on Vercel

```bash

npm run devThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요!

### 3. 프로덕션 빌드
```bash
npm run build
npm start
```

---

## 📦 기술 스택

| 카테고리 | 기술 |
|---------|------|
| **프레임워크** | Next.js 15.5 (App Router) |
| **언어** | TypeScript |
| **스타일링** | TailwindCSS 4.0 |
| **애니메이션** | Framer Motion |
| **차트** | Recharts |
| **아이콘** | Lucide React |
| **폰트** | Inter (next/font) |

---

## 📂 프로젝트 구조

```
ggong-ddon/
├── app/
│   ├── globals.css          # 글로벌 스타일 (보라 & 민트 테마)
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── Hero.tsx              # 히어로 섹션 (오늘의 꽁돈 카드)
│   ├── AIEngines.tsx         # 3대 AI 엔진
│   ├── Dashboard.tsx         # 꽁돈 대시보드 미리보기
│   ├── WhyEffective.tsx      # 왜 효과적인가
│   ├── Partners.tsx          # 파트너 로고 월
│   ├── Pricing.tsx           # 요금제 (월간/연간 토글)
│   ├── B2BSection.tsx        # B2B 섹션
│   ├── FAQ.tsx               # FAQ 아코디언
│   └── Footer.tsx            # 푸터 (뉴스레터)
├── lib/
│   ├── constants.ts          # 디자인 시스템 & 카피 & 더미 데이터
│   └── utils.ts              # 유틸리티 함수
└── README.md                 # 이 파일
```

---

## 🎯 주요 기능

### 1️⃣ Hero 섹션
- 몽글몽글한 배경 그라디언트
- **오늘의 꽁돈 카드** (실시간 절약 금액 표시)
- 이번 주 절약 추이 바차트
- 플로팅 뱃지 애니메이션

### 2️⃣ 3대 AI 엔진
- ⚔️ 충동 방어막 & '오늘의 꽁돈' 분석
- ✨ 실패 후 칭찬 모드
- 🧠 감정 기반 습관 균형 코칭

### 3️⃣ 꽁돈 대시보드
- CountUp 애니메이션 (누적 꽁돈, 이번 주 절약, 목표 단축)
- Recharts 라인 차트 (목표 vs 실제)
- 최근 칭찬 로그

### 4️⃣ 요금제
- 월간/연간 토글
- 무료 vs 프리미엄 비교
- 추천 뱃지 강조

### 5️⃣ FAQ
- 아코디언 UI
- 5개 질문 & 답변

### 6️⃣ Footer
- 뉴스레터 구독 폼
- 소셜 링크
- 다크 테마 배경 (그라디언트 글로우)

---

## 🎨 커스터마이징

### 색상 변경
`lib/constants.ts`에서 색상 팔레트를 수정하세요:

```typescript
export const COLORS = {
  purple: {
    primary: '#a78bfa',  // 연한 보라
    light: '#e9d5ff',
    // ...
  },
  mint: {
    primary: '#6ee7b7',  // 민트
    light: '#d1fae5',
    // ...
  },
};
```

### 카피 수정
`lib/constants.ts`의 `COPY` 객체에서 모든 텍스트를 한 곳에서 관리:

```typescript
export const COPY = {
  hero: {
    headline1: '충동을 참은 순간,',
    headline2: '돈이 생긴다.',
    // ...
  },
  // ...
};
```

### 더미 데이터 변경
`lib/constants.ts`의 `CHART_DATA`에서 차트 데이터 수정:

```typescript
export const CHART_DATA = {
  weeklyTrend: [
    { day: '월', savings: 15000, impulse: 3 },
    // ...
  ],
};
```

---

## 🌈 디자인 특징

### 몽글몽글 토스 스타일
- **둥근 모서리**: 1.5rem ~ 2rem 반지름
- **부드러운 그림자**: 보라 & 민트 글로우 효과
- **그라디언트**: 연한 보라 → 민트 → 핑크 조합
- **페이드업 애니메이션**: 스크롤 인뷰 시 200ms
- **플로팅 효과**: 3초 주기 상하 움직임

### 반응형 디자인
- **모바일**: 1열 레이아웃, 터치 최적화
- **태블릿**: 2열 그리드
- **데스크톱**: 3열 그리드, 최대 너비 1200px

---

## 📊 성능 최적화

- ✅ Next.js Image 자동 최적화
- ✅ next/font로 폰트 로딩 최적화 (display: swap)
- ✅ Framer Motion lazy loading
- ✅ Recharts 차트 lazy rendering
- ✅ CSS @theme inline variables (TailwindCSS 4.0)

---

## 🛠️ 개발 스크립트

```bash
# 개발 서버 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm start

# Lint 검사
npm run lint
```

---

## 📝 주요 변경 사항

### v2.0 (최신)
- 🎨 완전히 새로운 디자인: 연한 보라 & 민트 테마
- 🌸 몽글몽글 토스 스타일 컨셉
- ✨ 모든 섹션 재구성 (9개 섹션)
- 📊 Recharts 차트 통합
- 🎭 Framer Motion 애니메이션 강화
- 🔄 더미 데이터 중앙화 (`lib/constants.ts`)

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 라이선스

MIT License - 자유롭게 사용 및 수정 가능합니다.

---

## 💬 문의

프로젝트에 대한 질문이나 제안사항이 있다면 이슈를 등록해주세요!

---

<div align="center">

**Made with 💜 & 💚**

[Next.js](https://nextjs.org) | [TailwindCSS](https://tailwindcss.com) | [Framer Motion](https://www.framer.com/motion)

</div>
