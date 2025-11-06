'use client'

import { motion } from 'framer-motion'
import { Home, PieChart, User, ChevronRight, TrendingUp, TrendingDown, DollarSign } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts'

interface Step2DashboardProps {
  goalAmount: number
  goalDescription: string
  onNext: () => void
}

const weeklyData = [
  { day: '월', amount: 45000 },
  { day: '화', amount: 32000 },
  { day: '수', amount: 28000 },
  { day: '목', amount: 51000 },
  { day: '금', amount: 38000 },
  { day: '토', amount: 62000 },
  { day: '일', amount: 44000 }
]

// Top 5 spending categories with reduction recommendations
const spendingCategories = [
  { name: '음식/카페', amount: 280000, percentage: 35, shouldReduce: true, priority: 1 },
  { name: '쇼핑', amount: 220000, percentage: 27.5, shouldReduce: true, priority: 2 },
  { name: '문화/여가', amount: 150000, percentage: 18.75, shouldReduce: false, priority: 3 },
  { name: '교통', amount: 100000, percentage: 12.5, shouldReduce: false, priority: 4 },
  { name: '기타', amount: 50000, percentage: 6.25, shouldReduce: false, priority: 5 }
]

const recentTransactions = [
  { id: 1, title: '스타벅스', amount: -5500, category: '음식', time: '오후 2:30' },
  { id: 2, title: '월급', amount: 3200000, category: '수입', time: '오전 9:00' },
  { id: 3, title: 'CGV 영화', amount: -15000, category: '문화', time: '어제' },
  { id: 4, title: '쿠팡 배송', amount: -42000, category: '생활', time: '어제' }
]

export default function Step2Dashboard({ goalAmount, goalDescription, onNext }: Step2DashboardProps) {
  const savedSoFar = 235000
  const progressPercent = Math.min(100, (savedSoFar / goalAmount) * 100)
  const totalSpending = spendingCategories.reduce((sum, cat) => sum + cat.amount, 0)

  return (
    <div className="bg-gray-50 h-[700px] overflow-y-auto">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">내 저축 일지</h2>
        <p className="text-sm text-gray-500 mt-1">목표: {goalDescription}</p>
      </div>

      {/* Total Balance Card */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-3xl p-6 text-white shadow-lg"
        >
          <p className="text-sm opacity-90 mb-2">총 자산</p>
          <h3 className="text-4xl font-bold mb-6">
            {(3200000 + savedSoFar).toLocaleString()}원
          </h3>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">저축 목표</span>
              <span className="text-sm font-bold">{progressPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2 mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-white h-2 rounded-full"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>{savedSoFar.toLocaleString()}원</span>
              <span>{goalAmount.toLocaleString()}원</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-600">수입</span>
            </div>
            <p className="text-lg font-bold text-gray-900">+3.2M</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span className="text-xs text-gray-600">지출</span>
            </div>
            <p className="text-lg font-bold text-gray-900">-520K</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-[#6ee7b7]" />
              <span className="text-xs text-gray-600">절약</span>
            </div>
            <p className="text-lg font-bold text-[#6ee7b7]">+235K</p>
          </div>
        </div>
      </div>

      {/* Spending Categories Analysis */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">소비 분석</h3>
            <span className="text-sm text-gray-500">총 {totalSpending.toLocaleString()}원</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            💡 <strong>절감 추천:</strong> 음식/카페와 쇼핑 소비를 줄이면 목표 달성이 빨라져요!
          </p>
          
          <div className="space-y-3">
            {spendingCategories.map((cat) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: cat.priority * 0.1 }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  cat.shouldReduce 
                    ? 'bg-red-50/50 border-red-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{cat.name}</span>
                    {cat.shouldReduce && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">
                        절감 추천
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-gray-900">{cat.amount.toLocaleString()}원</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percentage}%` }}
                    transition={{ duration: 0.8, delay: cat.priority * 0.1 }}
                    className={`h-2 rounded-full ${
                      cat.shouldReduce ? 'bg-red-400' : 'bg-gray-400'
                    }`}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{cat.percentage}%</span>
                  {cat.shouldReduce && (
                    <span className="text-xs text-red-600 font-semibold">
                      -{Math.round(cat.amount * 0.3).toLocaleString()}원 가능
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Weekly Trend Chart */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">주간 지출 패턴</h3>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#a78bfa" 
                strokeWidth={3}
                fill="url(#colorAmount)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 pb-24">
        <div className="bg-white rounded-3xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">최근 내역</h3>
            <button
              onClick={onNext}
              className="flex items-center gap-1 text-sm font-semibold text-[#a78bfa] hover:text-[#8b5cf6]"
            >
              전체보기
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {recentTransactions.map((tx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: tx.id * 0.1 }}
                className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{tx.title}</p>
                  <p className="text-xs text-gray-500">{tx.category} · {tx.time}</p>
                </div>
                <p className={`text-lg font-bold ${tx.amount > 0 ? 'text-[#6ee7b7]' : 'text-gray-900'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()}원
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 shadow-lg">
        <div className="flex items-center justify-around max-w-lg mx-auto">
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-[#a78bfa]">
            <Home className="w-6 h-6" />
            <span className="text-xs font-semibold">홈</span>
          </button>
          <button 
            onClick={onNext}
            className="flex flex-col items-center gap-1 py-2 px-4 text-gray-400 hover:text-gray-900"
          >
            <PieChart className="w-6 h-6" />
            <span className="text-xs font-semibold">소비분석</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2 px-4 text-gray-400 hover:text-gray-900">
            <User className="w-6 h-6" />
            <span className="text-xs font-semibold">내정보</span>
          </button>
        </div>
      </div>
    </div>
  )
}
