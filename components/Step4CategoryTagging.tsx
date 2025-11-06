'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, Tag, Zap, Check, X } from 'lucide-react'
import { useState } from 'react'

interface Step4CategoryTaggingProps {
  onBack: () => void
  onComplete: () => void
}

interface Transaction {
  id: number
  date: string
  merchant: string
  amount: number
  category: string
  isImpulse: boolean
}

const initialTransactions: Transaction[] = [
  { id: 1, date: '2024-01-15', merchant: '스타벅스 강남점', amount: 5500, category: '음식', isImpulse: false },
  { id: 2, date: '2024-01-15', merchant: '무신사 스토어', amount: 89000, category: '쇼핑', isImpulse: true },
  { id: 3, date: '2024-01-14', merchant: 'CGV 영화', amount: 15000, category: '문화', isImpulse: false },
  { id: 4, date: '2024-01-14', merchant: '올리브영', amount: 42000, category: '생활', isImpulse: true },
  { id: 5, date: '2024-01-13', merchant: 'GS25 편의점', amount: 8900, category: '음식', isImpulse: false },
  { id: 6, date: '2024-01-13', merchant: '쿠팡 배송', amount: 67000, category: '필수품', isImpulse: false },
  { id: 7, date: '2024-01-12', merchant: '넷플릭스', amount: 13500, category: '문화', isImpulse: false },
  { id: 8, date: '2024-01-12', merchant: '에이블리', amount: 125000, category: '쇼핑', isImpulse: true }
]

const categories = ['음식', '쇼핑', '문화', '생활', '필수품', '교통', '건강']
const categoryColors: Record<string, string> = {
  '음식': 'bg-orange-100 text-orange-700',
  '쇼핑': 'bg-pink-100 text-pink-700',
  '문화': 'bg-purple-100 text-purple-700',
  '생활': 'bg-blue-100 text-blue-700',
  '필수품': 'bg-green-100 text-green-700',
  '교통': 'bg-yellow-100 text-yellow-700',
  '건강': 'bg-red-100 text-red-700'
}

export default function Step4CategoryTagging({ onBack, onComplete }: Step4CategoryTaggingProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)
  const [editingId, setEditingId] = useState<number | null>(null)

  const toggleImpulse = (id: number) => {
    setTransactions(prev =>
      prev.map(tx =>
        tx.id === id ? { ...tx, isImpulse: !tx.isImpulse } : tx
      )
    )
  }

  const updateCategory = (id: number, category: string) => {
    setTransactions(prev =>
      prev.map(tx =>
        tx.id === id ? { ...tx, category } : tx
      )
    )
    setEditingId(null)
  }

  const impulseTotal = transactions
    .filter(tx => tx.isImpulse)
    .reduce((sum, tx) => sum + tx.amount, 0)

  return (
    <div className="bg-gray-50 h-[600px] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-gray-900">소비 분석</h2>
              <p className="text-xs text-gray-500">충동구매를 표시해보세요</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Impulse Purchase Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#fca5a5] to-[#f87171] rounded-3xl p-6 text-white mb-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5" fill="white" />
            <span className="text-sm font-semibold">충동구매 감지</span>
          </div>
          <p className="text-3xl font-bold mb-1">
            {impulseTotal.toLocaleString()}원
          </p>
          <p className="text-sm opacity-90">
            {transactions.filter(tx => tx.isImpulse).length}건의 충동구매가 발견되었어요
          </p>
        </motion.div>

        {/* Table Header */}
        <div className="bg-white rounded-t-2xl border-x border-t border-gray-200 px-4 py-3">
          <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-600">
            <div className="col-span-2">날짜</div>
            <div className="col-span-4">내역</div>
            <div className="col-span-2">카테고리</div>
            <div className="col-span-2 text-right">금액</div>
            <div className="col-span-2 text-center">충동구매</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="bg-white rounded-b-2xl border border-gray-200 divide-y divide-gray-100 mb-6">
          {transactions.map((tx, index) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-3 hover:bg-gray-50 transition-colors ${
                tx.isImpulse ? 'bg-red-50/50' : ''
              }`}
            >
              <div className="grid grid-cols-12 gap-2 items-center text-sm">
                {/* Date */}
                <div className="col-span-2 text-gray-600 text-xs">
                  {tx.date.slice(5)}
                </div>

                {/* Merchant */}
                <div className="col-span-4 font-semibold text-gray-900">
                  {tx.merchant}
                </div>

                {/* Category */}
                <div className="col-span-2">
                  {editingId === tx.id ? (
                    <select
                      value={tx.category}
                      onChange={(e) => updateCategory(tx.id, e.target.value)}
                      onBlur={() => setEditingId(null)}
                      autoFocus
                      className="w-full text-xs px-2 py-1 rounded-lg border border-[#a78bfa] focus:outline-none"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  ) : (
                    <button
                      onClick={() => setEditingId(tx.id)}
                      className={`text-xs px-2 py-1 rounded-lg font-semibold ${
                        categoryColors[tx.category]
                      }`}
                    >
                      {tx.category}
                    </button>
                  )}
                </div>

                {/* Amount */}
                <div className="col-span-2 text-right font-bold text-gray-900">
                  -{tx.amount.toLocaleString()}원
                </div>

                {/* Impulse Toggle */}
                <div className="col-span-2 flex justify-center">
                  <button
                    onClick={() => toggleImpulse(tx.id)}
                    className={`relative w-12 h-6 rounded-full transition-all ${
                      tx.isImpulse ? 'bg-[#f87171]' : 'bg-gray-200'
                    }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center ${
                        tx.isImpulse ? 'left-6' : 'left-0.5'
                      }`}
                    >
                      {tx.isImpulse && <Zap className="w-3 h-3 text-[#f87171]" fill="#f87171" />}
                    </motion.div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complete Button */}
        <motion.button
          onClick={onComplete}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white font-bold text-lg rounded-2xl shadow-lg"
        >
          분석 완료
        </motion.button>
      </div>
    </div>
  )
}
