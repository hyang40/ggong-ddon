// Design System Constants for GGong DDon

export const COLORS = {
  // Core Brand Colors - Professional Green-Black Theme
  green: {
    primary: '#00C73C',      // Toss-like green
    secondary: '#00E647',
    light: '#E8F9EF',
    dark: '#00A032',
    gradient: 'linear-gradient(135deg, #00C73C 0%, #00E647 100%)',
  },
  black: {
    primary: '#191F28',      // Deep professional black
    secondary: '#333D4B',    // Medium black
    tertiary: '#4E5968',     // Light black
    point: '#0A0A0A',
    dark: '#2B2B2B',
  },
  white: {
    bg: '#FFFFFF',
    section: '#F9FAFB',
    card: '#FEFEFE',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F2F4F6',
    200: '#E5E8EB',
    300: '#D1D6DB',
    400: '#B0B8C1',
    500: '#8B95A1',
    600: '#6B7684',
    700: '#4E5968',
    800: '#333D4B',
    900: '#191F28',
  },
  success: {
    bg: '#E8F9EF',
    text: '#00A032',
  },
  warning: {
    bg: '#FFF7E6',
    text: '#FF8A00',
  },
} as const;

export const COPY = {
  hero: {
    headline1: "충동을 참은 순간, 돈이 생긴다.",
    headline2: "AI가 '긍정적 소비 습관'을 재형성합니다.",
    subheadline: "후회 대신 '오늘의 꽁돈' 기록이 쌓입니다.",
    ctaPrimary: "사전 신청하기",
    ctaSecondary: "1분 데모 보기",
  },
  features: {
    title: "Our Features · 3 AI Engines",
    card1: {
      title: "⚔️ 충동 방어막 & '오늘의 꽁돈' 분석",
      microcopy: "지금 멈추면 목표 '유럽 여행'이 2시간 앞당겨져요.",
      badge: "+2h sooner",
    },
    card2: {
      title: "✨ 실패 후 칭찬 모드",
      microcopy: "지난주에 150,000원의 꽁돈을 모았어요. 충분히 잘하고 있어요.",
      badge: "잘하고 있어요",
    },
    card3: {
      title: "🧠 감정 기반 습관 균형 코칭",
      microcopy: "10분 참기 챌린지 성공 → 500원 꽁돈 추가",
      badge: "소비 근육 점수",
    },
  },
  dashboard: {
    title: "'꽁돈' 대시보드 미리보기",
    metrics: {
      totalSaved: "누적 꽁돈",
      weeklySaved: "이번 주 절약",
      goalAcceleration: "목표 달성 단축일",
      recentPraise: "최근 칭찬 로그",
    },
  },
  usp: {
    quote: "당신을 회계 담당자로 만들지 않습니다. GGong DDon은 '재정 성공의 리더'로 만듭니다.",
  },
  valueConsumption: {
    title: "충동 대신 가치소비",
    subtitle: "함께하는 파트너",
  },
  pricing: {
    title: "Pricing",
    free: {
      name: "무료",
      features: ["기본 기록", "주간 리포트", "기본 분석"],
      price: "₩0",
    },
    premium: {
      name: "프리미엄",
      features: [
        "충동 확률 예측",
        "D-Goal 시뮬레이션",
        "맞춤 칭찬 & 코칭",
        "무제한 목표 설정",
      ],
      price: "₩4,900",
      period: "/ 월",
    },
  },
  b2b: {
    title: "직원 꽁돈 챌린지로 재정·멘탈 웰빙을 동시에",
    subtitle: "기업 복지 프로그램으로 팀 전체의 긍정적 소비 습관을 만들어보세요.",
    cta: "B2B 문의",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        question: "충동소비가 항상 나쁜가요?",
        answer: "스트레스 해소 기능을 이해하고, 과잉을 줄이는 '균형'을 돕습니다. GGong DDon은 모든 소비를 막지 않고, 후회하는 소비를 줄이는 데 집중합니다.",
      },
      {
        question: "'꽁돈'은 실제로 적립되나요?",
        answer: "꽁돈은 실제 돈이 아닌, 충동을 참아 '쓰지 않은 금액'을 시각화한 지표입니다. 이를 통해 긍정적 피드백을 제공하고 목표 달성을 돕습니다.",
      },
      {
        question: "AI는 어떻게 충동을 예측하나요?",
        answer: "소비 패턴, 시간대, 감정 상태, 위치 등의 데이터를 분석해 충동 구매가 일어날 가능성이 높은 순간을 예측하고 알림을 보냅니다.",
      },
      {
        question: "실패하면 어떻게 되나요?",
        answer: "실패는 자연스러운 과정입니다. GGong DDon은 실패 후에도 '지금까지 잘해온 점'을 칭찬하고, 다음 기회를 제안합니다.",
      },
      {
        question: "개인정보는 안전한가요?",
        answer: "모든 금융 데이터는 암호화되어 저장되며, 절대 제3자와 공유되지 않습니다. GDPR 및 개인정보보호법을 준수합니다.",
      },
    ],
  },
  footer: {
    tagline: "GGong DDon — 긍정적 소비 습관",
    newsletter: {
      title: "뉴스레터 구독",
      placeholder: "이메일을 입력하세요",
      button: "구독하기",
    },
    social: ["Twitter", "Instagram", "LinkedIn"],
    links: {
      terms: "이용약관",
      privacy: "개인정보처리방침",
      contact: "문의하기",
    },
    copyright: "© 2025 GGong DDon. All rights reserved.",
  },
} as const;

export const PRICING_DATA = {
  free: {
    name: COPY.pricing.free.name,
    price: COPY.pricing.free.price,
    features: COPY.pricing.free.features,
    recommended: false,
  },
  premium: {
    name: COPY.pricing.premium.name,
    price: COPY.pricing.premium.price,
    period: COPY.pricing.premium.period,
    features: COPY.pricing.premium.features,
    recommended: true,
  },
} as const;

// Dummy data for charts and metrics
export const DUMMY_DATA = {
  lineChart: [
    { date: '월', saved: 12000 },
    { date: '화', saved: 18000 },
    { date: '수', saved: 25000 },
    { date: '목', saved: 35000 },
    { date: '금', saved: 48000 },
    { date: '토', saved: 52000 },
    { date: '일', saved: 67000 },
  ],
  candleChart: [
    { time: '10:00', impulse: 30, saved: 20 },
    { time: '12:00', impulse: 50, saved: 40 },
    { time: '14:00', impulse: 45, saved: 35 },
    { time: '16:00', impulse: 60, saved: 20 },
    { time: '18:00', impulse: 70, saved: 50 },
  ],
  kpis: {
    totalSaved: 1250000,
    weeklySaved: 67000,
    goalAcceleration: 14,
    challengeSuccess: 87,
  },
  praiseLog: [
    "어제 30,000원 꽁돈을 만들었어요! 🎉",
    "이번 주 3번의 충동을 참았어요",
    "유럽 여행 목표가 2주 앞당겨졌어요",
  ],
  habitScore: 87,
};
