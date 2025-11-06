// 🎨 Design System - 몽글몽글 토스 스타일 (보라 & 민트)

export const COLORS = {
  // Primary: 연한 보라 (Soft Purple)
  purple: {
    primary: '#A78BFA',    // 연한 보라
    light: '#E9D5FF',      // 파스텔 보라
    lighter: '#FAF5FF',    // 아주 연한 보라
    dark: '#8B5CF6',       // 진한 보라
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #E9D5FF 100%)',
    glow: 'rgba(167, 139, 250, 0.25)',
  },
  
  // Secondary: 민트 (Mint)
  mint: {
    primary: '#6EE7B7',    // 민트
    light: '#D1FAE5',      // 연한 민트
    lighter: '#F0FDF4',    // 아주 연한 민트
    dark: '#34D399',       // 진한 민트
    gradient: 'linear-gradient(135deg, #6EE7B7 0%, #D1FAE5 100%)',
    glow: 'rgba(110, 231, 183, 0.25)',
  },

  // Neutral
  white: '#FFFFFF',
  background: '#F7F9FB',
  black: '#0A0A0A',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Accent
  pink: '#FCA5A5',
  yellow: '#FDE047',
  blue: '#93C5FD',
};

export const COPY = {
  hero: {
    headline1: '충동을 참은 순간,',
    headline2: '돈이 생긴다.',
    subheadline: "AI가 '긍정적 소비 습관'을 재형성합니다.",
    microcopy: '가치 있는 소비로 당신의 꿈에 더 가까워지세요',
    ctaPrimary: '사전 신청하기',
    ctaSecondary: '1분 데모 보기',
    todaySavings: '₩23,500',
    goalAdvanced: '+2시간 목표 앞당김',
    motivationalMessage: '당신의 목표는 이미 시작되었어요! 🎯',
    motivationalSubtext: '한 걸음씩 나아가는 당신을 응원합니다'
  },

  aiEngines: {
    title: '3대 AI 엔진',
    subtitle: '긍정 강화로 습관을 바꿉니다',
    engines: [
      {
        id: 1,
        icon: '⚔️',
        title: "충동 방어막 & '오늘의 꽁돈' 분석",
        description: "지금 멈추면 '유럽 여행'이 2시간 앞당겨져요.",
        badge: 'D-Goal 시뮬레이션',
      },
      {
        id: 2,
        icon: '✨',
        title: '실패 후 칭찬 모드',
        description: '지난주에 ₩150,000 꽁돈! 충분히 잘하고 있어요.',
        badge: '긍정 피드백',
      },
      {
        id: 3,
        icon: '🧠',
        title: '감정 기반 습관 균형 코칭',
        description: '10분 참기 성공 → 500원 꽁돈 추가',
        badge: '소비 근육 점수',
      },
    ],
  },

  dashboard: {
    title: "'꽁돈' 대시보드 미리보기",
    subtitle: '실시간으로 성공을 확인하세요',
    kpis: [
      { label: '누적 꽁돈', value: 1847500, unit: '원', color: 'purple' },
      { label: '이번 주 절약', value: 235000, unit: '원', color: 'mint' },
      { label: '목표 달성일 단축', value: 18, unit: '일', color: 'pink' },
    ],
    recentPraises: [
      '🎉 연속 3일 성공! 정말 멋져요!',
      '💪 이번 주 목표 150% 달성!',
      '✨ 충동 방어 성공률 92%',
    ],
  },

  whyEffective: {
    title: '왜 효과적인가',
    subtitle: '심리·행동경제 근거',
    points: [
      {
        title: '긍정 강화',
        description: '성공 기록을 강조 → 동기 유지',
        icon: '💚',
      },
      {
        title: '프레이밍(D-Goal)',
        description: '"지출 경고" 대신 "목표 앞당김"으로 설계',
        icon: '🎯',
      },
      {
        title: '즉시 재도전',
        description: '실패 직후 다음 날 미션으로 복귀',
        icon: '🔄',
      },
    ],
  },

  partners: {
    title: '충동 대신 가치 소비로 전환합니다',
    subtitle: '함께하는 파트너',
  },

  pricing: {
    title: '요금제',
    subtitle: '나에게 맞는 플랜을 선택하세요',
    toggle: ['월간', '연간'],
    plans: [
      {
        name: '무료',
        price: 0,
        features: [
          '기본 꽁돈 기록',
          '주간 리포트',
          '커뮤니티 액세스',
        ],
        cta: '무료로 시작하기',
        recommended: false,
      },
      {
        name: '프리미엄',
        price: 4900,
        yearlyPrice: 49000,
        features: [
          '충동 확률 예측 AI',
          'D-Goal 시뮬레이션',
          '맞춤 칭찬 & 코칭',
          '무제한 목표 설정',
          '우선 고객 지원',
        ],
        cta: '프리미엄 시작하기',
        recommended: true,
      },
    ],
  },

  b2b: {
    title: '직원 꽁돈 챌린지',
    subtitle: '재정·멘탈 웰빙을 동시에',
    description: '팀 단위 절약 챌린지로 직원 만족도와 재정 건강을 높이세요.',
    cta: 'B2B 문의하기',
  },

  faq: {
    title: 'FAQ',
    subtitle: '자주 묻는 질문',
    items: [
      {
        q: '충동소비가 항상 나쁜가요?',
        a: '아니에요! 스트레스 해소 기능을 이해하고, 과잉만 줄이는 균형을 도와드립니다. 완전히 막는 게 아니라 건강한 수준으로 조절하는 거예요.',
      },
      {
        q: '은행 연결이 필수인가요?',
        a: '아니요. 수동 입력으로도 충분히 사용 가능합니다. 은행 연동은 자동화를 원하시는 분들을 위한 선택 기능이에요.',
      },
      {
        q: 'AI가 어떻게 충동을 예측하나요?',
        a: '소비 패턴, 시간대, 감정 상태 등을 학습해서 충동 구매 가능성이 높은 순간을 미리 알려드려요.',
      },
      {
        q: '목표 달성일(D-Goal)은 어떻게 계산되나요?',
        a: '현재 저축률과 목표 금액을 기반으로 실시간 계산됩니다. 꽁돈이 생길 때마다 자동으로 업데이트돼요!',
      },
      {
        q: '프리미엄을 해지하면 데이터가 사라지나요?',
        a: '아니요! 모든 기록은 그대로 유지됩니다. 언제든 다시 프리미엄으로 전환 가능해요.',
      },
    ],
  },

  footer: {
    newsletter: {
      title: '출시 소식 받기',
      placeholder: 'your@email.com',
      cta: '구독하기',
    },
    links: [
      { label: '서비스 소개', href: '#' },
      { label: '이용약관', href: '#' },
      { label: '개인정보처리방침', href: '#' },
      { label: '고객센터', href: '#' },
    ],
    copyright: '© 2025 GGong DDon. All rights reserved.',
  },
};

// 더미 차트 데이터
export const CHART_DATA = {
  weeklyTrend: [
    { day: '월', savings: 15000, impulse: 3 },
    { day: '화', savings: 22000, impulse: 2 },
    { day: '수', savings: 18000, impulse: 4 },
    { day: '목', savings: 31000, impulse: 1 },
    { day: '금', savings: 25000, impulse: 2 },
    { day: '토', savings: 12000, impulse: 5 },
    { day: '일', savings: 23500, impulse: 3 },
  ],
  
  habitScore: [
    { month: '1월', score: 45 },
    { month: '2월', score: 58 },
    { month: '3월', score: 67 },
    { month: '4월', score: 72 },
    { month: '5월', score: 85 },
    { month: '6월', score: 92 },
  ],

  goalProgress: [
    { week: 'W1', goal: 100, actual: 85 },
    { week: 'W2', goal: 100, actual: 110 },
    { week: 'W3', goal: 100, actual: 95 },
    { week: 'W4', goal: 100, actual: 125 },
  ],
};
