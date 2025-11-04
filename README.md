# GGong DDon (꽁돈) - Landing Page

> "충동을 참은 순간, 돈이 생긴다."  
> AI가 '긍정적 소비 습관'을 재형성합니다.

토스(Toss) 스타일의 세련된 마케팅 원-페이지 랜딩 페이지입니다. 네온그린(#B8FF00)을 핵심 컬러로, 화이트 배경과 블랙 포인트를 사용한 화려하고 현대적인 디자인입니다.

## 🎨 디자인 시스템

### 컬러 팔레트
- **네온 그린**: `#B8FF00` (Primary), `#D9FF66` (Secondary)
- **블랙**: `#0A0A0A` (Point), `#2B2B2B` (Dark Gray)
- **화이트**: `#FFFFFF` (Background), `#F7F9FB` (Section)
- **성공**: `#E8FFE0` (BG), `#145E22` (Text)
- **경고**: `#FFF7D6` (BG), `#7A5A00` (Text)

### 타입스케일
- **H1**: 36px/44px (모바일), 56px/64px (데스크톱)
- **H2**: 28px/36px (모바일), 40px/48px (데스크톱)
- **H3**: 22px/30px (모바일), 30px/40px (데스크톱)
- **Body**: 16px/26px
- **Caption**: 13px/20px

## 🚀 빠른 시작

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 열기: http://localhost:3000
```

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
ggong-ddon/
├── app/
│   ├── globals.css          # 글로벌 스타일 & 테마
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── Hero.tsx              # 히어로 섹션
│   ├── Features.tsx          # 3 AI 엔진 기능
│   ├── Dashboard.tsx         # 대시보드 미리보기
│   ├── USPQuote.tsx          # USP 인용구
│   ├── PartnerLogos.tsx      # 파트너 로고 월
│   ├── Pricing.tsx           # 가격 플랜
│   ├── B2BSection.tsx        # B2B 솔루션
│   ├── FAQ.tsx               # 자주 묻는 질문
│   └── Footer.tsx            # 푸터
└── lib/
    ├── constants.ts          # 디자인 토큰 & 카피
    └── utils.ts              # 유틸리티 함수
```

## 🎯 주요 섹션

1. **Hero**: 메인 헤드라인 + 2 CTAs + 앱 목업
2. **Features**: 3 AI 엔진 (충동 방어막, 칭찬 모드, 습관 코칭)
3. **Dashboard**: 꽁돈 대시보드 미리보기 with 차트
4. **USP Quote**: 임팩트 있는 메시지 (다크 배경)
5. **Partner Logos**: 가치소비 제휴 파트너
6. **Pricing**: 무료 / 프리미엄 플랜 비교
7. **B2B**: 기업 복지 프로그램
8. **FAQ**: 자주 묻는 질문 (아코디언)
9. **Footer**: 소셜 링크 + 뉴스레터

## 🎨 커스터마이징

### 색상 변경
`lib/constants.ts`의 `COLORS` 객체 수정

### 카피 수정
`lib/constants.ts`의 `COPY` 객체 수정

### 가격 변경
`lib/constants.ts`의 `PRICING_DATA` 수정

## 🛠 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## 📱 반응형

- 모바일 우선 (Mobile-first)
- 브레이크포인트: sm(640px), md(768px), lg(1024px), xl(1280px)

## ♿️ 접근성

- 시맨틱 HTML
- 키보드 네비게이션
- 네온그린 포커스 링
- 명도 대비 충분

---

**Made with 💚 by GGong DDon Team**
