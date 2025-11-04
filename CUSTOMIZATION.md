# 커스터마이징 예제

이 문서는 GGong DDon 랜딩 페이지를 쉽게 커스터마이징하는 방법을 안내합니다.

## 🎨 색상 변경

### 메인 컬러 변경 (네온그린 → 다른 색상)

`lib/constants.ts` 파일을 열고:

```typescript
export const COLORS = {
  neonGreen: {
    primary: '#FF00B8',  // 네온 핑크로 변경
    secondary: '#FF66D9',
    gradient: 'linear-gradient(135deg, #FF00B8 0%, #FFA3E3 100%)',
  },
  // ...
}
```

## 📝 카피 변경

### 히어로 메시지 변경

`lib/constants.ts`:

```typescript
export const COPY = {
  hero: {
    headline1: "새로운 메인 헤드라인",
    headline2: "두 번째 헤드라인",
    subheadline: "서브 헤드라인을 여기에 입력",
    ctaPrimary: "지금 시작하기",
    ctaSecondary: "더 알아보기",
  },
  // ...
}
```

### FAQ 항목 추가

`lib/constants.ts`:

```typescript
faq: {
  title: "자주 묻는 질문",
  items: [
    {
      question: "새로운 질문?",
      answer: "새로운 답변을 여기에 작성하세요.",
    },
    // 기존 항목들...
  ],
}
```

## 💰 가격 플랜 변경

### 가격 및 기능 수정

`lib/constants.ts`:

```typescript
export const PRICING_DATA = {
  free: {
    name: "Basic",
    price: "₩0",
    features: [
      "기능 1",
      "기능 2",
      "기능 3",
    ],
    recommended: false,
  },
  premium: {
    name: "Pro",
    price: "₩9,900",
    period: "/ 월",
    features: [
      "모든 Basic 기능",
      "추가 기능 1",
      "추가 기능 2",
      "추가 기능 3",
    ],
    recommended: true,
  },
}
```

## 🎯 네비게이션 메뉴 변경

`components/Navigation.tsx`:

```typescript
const navItems = [
  { label: "제품", href: "#features" },
  { label: "가격", href: "#pricing" },
  { label: "회사소개", href: "#about" },
  { label: "문의", href: "#contact" },
  // 새 항목 추가
  { label: "블로그", href: "#blog" },
];
```

## 📊 더미 데이터 변경

### 차트 데이터 수정

`lib/constants.ts`:

```typescript
export const DUMMY_DATA = {
  lineChart: [
    { date: '1월', saved: 100000 },
    { date: '2월', saved: 250000 },
    { date: '3월', saved: 380000 },
    // 원하는 만큼 추가
  ],
  kpis: {
    totalSaved: 5000000,
    weeklySaved: 120000,
    goalAcceleration: 30,
    challengeSuccess: 95,
  },
}
```

## 🎬 애니메이션 속도 조절

### Framer Motion 애니메이션

각 컴포넌트에서 `transition` 속성 수정:

```typescript
// 더 빠르게
transition={{ duration: 0.3, delay: 0 }}

// 더 느리게
transition={{ duration: 1.2, delay: 0.2 }}
```

### CSS 애니메이션 속도

`app/globals.css`:

```css
@theme {
  --animation-duration-fast: 100ms;    /* 더 빠르게 */
  --animation-duration-normal: 400ms;  /* 보통 */
  --animation-duration-slow: 1200ms;   /* 더 느리게 */
}
```

## 🖼️ 이미지 추가

### 히어로 섹션 배경 이미지

`components/Hero.tsx`:

```typescript
<div className="absolute inset-0">
  <Image
    src="/hero-bg.jpg"
    alt="Background"
    fill
    className="object-cover opacity-10"
  />
</div>
```

### 파트너 로고 실제 이미지로 교체

`components/PartnerLogos.tsx`:

```typescript
const partners = [
  { name: "Partner 1", logo: "/logos/partner1.png" },
  { name: "Partner 2", logo: "/logos/partner2.png" },
  // ...
];

// JSX에서:
<Image src={partner.logo} alt={partner.name} width={100} height={40} />
```

## 📱 섹션 추가하기

### 1. 새 컴포넌트 생성

`components/NewSection.tsx`:

```typescript
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function NewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl font-bold text-center"
        >
          새 섹션 제목
        </motion.h2>
        {/* 내용 추가 */}
      </div>
    </section>
  );
}
```

### 2. 페이지에 추가

`app/page.tsx`:

```typescript
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <NewSection /> {/* 여기에 추가 */}
        <Dashboard />
        {/* ... */}
      </main>
    </>
  );
}
```

## 🎨 폰트 변경

`app/layout.tsx`:

```typescript
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// body className에 적용
<body className={notoSans.className}>
```

## 🔗 소셜 링크 수정

### Footer 소셜 링크

`components/Footer.tsx`:

```typescript
const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourhandle" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/yourhandle" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/yourcompany" },
];
```

## 📧 이메일 수집 API 연동

### Signup Modal API 연결

`components/SignupModal.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setIsSubmitted(true);
    }
  } catch (error) {
    console.error('Signup error:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## 🌐 다국어 지원 추가

### 1. 언어별 상수 파일 생성

`lib/locales/ko.ts`:
```typescript
export const ko = {
  hero: {
    headline1: "충동을 참은 순간, 돈이 생긴다.",
    // ...
  },
}
```

`lib/locales/en.ts`:
```typescript
export const en = {
  hero: {
    headline1: "Money grows when you resist impulses.",
    // ...
  },
}
```

### 2. Context로 언어 관리

```typescript
const [locale, setLocale] = useState('ko');
const t = locale === 'ko' ? ko : en;
```

## 🎯 SEO 메타데이터 커스터마이징

`app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "당신의 앱 이름 — 태그라인",
  description: "앱 설명을 150자 이내로 작성",
  keywords: ["키워드1", "키워드2", "키워드3"],
  openGraph: {
    title: "OG 타이틀",
    description: "OG 설명",
    images: ['/og-image.png'],
  },
};
```

## 📊 분석 도구 추가

### Google Analytics

`app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🎨 테마 변형 만들기

### 다크 모드 추가 (옵션)

1. Tailwind에서 dark 모드 활성화
2. 각 컴포넌트에 `dark:` 클래스 추가

```typescript
className="bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white"
```

---

더 많은 커스터마이징이 필요하면 각 컴포넌트 파일을 직접 수정하세요!
