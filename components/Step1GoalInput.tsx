'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Coins } from 'lucide-react'

interface Step1GoalInputProps {
  onNext: (goalAmount: number, goalDescription: string) => void
}

export default function Step1GoalInput({ onNext }: Step1GoalInputProps) {
  const [amount, setAmount] = useState('')
  const [goalDescription, setGoalDescription] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numAmount = parseInt(amount.replace(/,/g, ''))
    if (numAmount > 0 && goalDescription.trim()) {
      onNext(numAmount, goalDescription)
    }
  }
  
  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '')
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value)
    setAmount(formatted)
  }
  
  return (
    <div className="p-8 text-center">
      {/* Animated Piggy Bank */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
        className="mb-8 flex justify-center"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative w-32 h-32 bg-gradient-to-br from-[#6ee7b7] to-[#34d399] rounded-full flex items-center justify-center shadow-2xl"
        >
          <Coins className="w-16 h-16 text-white" strokeWidth={2} />
          
          {/* Coin slot */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/30 rounded-full" />
          
          {/* Eyes */}
          <div className="absolute top-10 left-8 w-3 h-3 bg-white rounded-full" />
          <div className="absolute top-10 right-8 w-3 h-3 bg-white rounded-full" />
          
          {/* Smile */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-white rounded-full" />
        </motion.div>
      </motion.div>
      
      <h2 className="text-3xl font-bold mb-3 text-gray-900">
        저축 목표를 설정하세요
      </h2>
      <p className="text-gray-600 mb-8">
        무엇을 위해 저축하시나요?
      </p>
      
      <form onSubmit={handleSubmit}>
        {/* Goal Description Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            저축 목표
          </label>
          <input
            type="text"
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
            placeholder="예: 유럽 여행, 자동차 구매, 전세자금"
            className="w-full text-lg py-4 px-6 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#a78bfa] focus:ring-4 focus:ring-[#a78bfa]/20 outline-none transition-all"
            autoFocus
          />
        </div>
        
        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            목표 금액
          </label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleChange}
              placeholder="0"
              className="w-full text-4xl font-bold text-center py-4 px-6 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#6ee7b7] focus:ring-4 focus:ring-[#6ee7b7]/20 outline-none transition-all"
              autoFocus
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">
              원
            </span>
          </div>
        </div>
        
        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {[10000, 50000, 100000, 300000, 500000, 1000000].map((quickAmount) => (
            <button
              key={quickAmount}
              type="button"
              onClick={() => setAmount(formatNumber(quickAmount.toString()))}
              className="py-3 px-4 bg-gray-100 hover:bg-[#6ee7b7] hover:text-white font-semibold rounded-xl transition-all"
            >
              {quickAmount >= 10000 
                ? `${(quickAmount / 10000).toFixed(0)}만` 
                : `${quickAmount.toLocaleString()}원`}
            </button>
          ))}
        </div>
        
        <motion.button
          type="submit"
          disabled={!amount || parseInt(amount.replace(/,/g, '')) === 0 || !goalDescription.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-[#6ee7b7] to-[#34d399] text-white font-bold text-lg rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          다음
        </motion.button>
      </form>
    </div>
  )
}
