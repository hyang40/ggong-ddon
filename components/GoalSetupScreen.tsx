'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Coins, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface GoalSetupScreenProps {
  isOpen: boolean
  onComplete: (goalAmount: number, goalDescription: string) => void
}

export default function GoalSetupScreen({ isOpen, onComplete }: GoalSetupScreenProps) {
  const [amount, setAmount] = useState('')
  const [goalDescription, setGoalDescription] = useState('')
  const [step, setStep] = useState(1) // 1: description, 2: amount
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numAmount = parseInt(amount.replace(/,/g, ''))
    if (numAmount > 0 && goalDescription.trim()) {
      onComplete(numAmount, goalDescription)
    }
  }
  
  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '')
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value)
    setAmount(formatted)
  }
  
  const handleDescriptionNext = () => {
    if (goalDescription.trim()) {
      setStep(2)
    }
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a78bfa] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6ee7b7] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="max-w-2xl w-full">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  /* Step 1: Goal Description */
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
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
                      className="mb-12 flex justify-center"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -15, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="relative w-40 h-40 bg-gradient-to-br from-[#6ee7b7] to-[#34d399] rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <Coins className="w-20 h-20 text-white" strokeWidth={2} />
                        
                        {/* Coin slot */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-2 bg-white/30 rounded-full" />
                        
                        {/* Eyes */}
                        <div className="absolute top-12 left-10 w-4 h-4 bg-white rounded-full" />
                        <div className="absolute top-12 right-10 w-4 h-4 bg-white rounded-full" />
                        
                        {/* Smile */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-6 border-b-3 border-white rounded-full" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl font-bold mb-6 text-gray-900"
                    >
                      무엇을 위해<br />저축하시나요?
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl text-gray-600 mb-12"
                    >
                      당신의 꿈을 이루는 첫 걸음입니다
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <input
                        type="text"
                        value={goalDescription}
                        onChange={(e) => setGoalDescription(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleDescriptionNext()}
                        placeholder="예: 유럽 여행, 자동차 구매, 전세자금"
                        className="w-full text-3xl text-center py-8 px-8 bg-white/80 backdrop-blur-sm border-3 border-gray-200 rounded-3xl focus:border-[#a78bfa] focus:ring-8 focus:ring-[#a78bfa]/20 outline-none transition-all shadow-xl font-semibold"
                        autoFocus
                      />
                      
                      <motion.button
                        onClick={handleDescriptionNext}
                        disabled={!goalDescription.trim()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-8 py-6 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white font-bold text-2xl rounded-3xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
                      >
                        다음
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ) : (
                  /* Step 2: Goal Amount */
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                      className="mb-12 flex justify-center"
                    >
                      <div className="bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6] text-white px-8 py-4 rounded-3xl shadow-2xl">
                        <p className="text-lg font-semibold opacity-90">목표</p>
                        <p className="text-3xl font-bold mt-1">{goalDescription}</p>
                      </div>
                    </motion.div>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-5xl font-bold mb-6 text-gray-900"
                    >
                      목표 금액을<br />설정하세요
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl text-gray-600 mb-12"
                    >
                      달성하고 싶은 금액을 입력해주세요
                    </motion.p>
                    
                    <motion.form 
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="relative mb-8">
                        <input
                          type="text"
                          value={amount}
                          onChange={handleAmountChange}
                          placeholder="0"
                          className="w-full text-6xl font-bold text-center py-8 px-8 bg-white/80 backdrop-blur-sm border-3 border-gray-200 rounded-3xl focus:border-[#6ee7b7] focus:ring-8 focus:ring-[#6ee7b7]/20 outline-none transition-all shadow-xl"
                          autoFocus
                        />
                        <span className="absolute right-12 top-1/2 -translate-y-1/2 text-4xl font-bold text-gray-400">
                          원
                        </span>
                      </div>
                      
                      {/* Quick Amount Buttons */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[100000, 300000, 500000, 1000000, 3000000, 5000000].map((quickAmount) => (
                          <motion.button
                            key={quickAmount}
                            type="button"
                            onClick={() => setAmount(formatNumber(quickAmount.toString()))}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="py-4 px-6 bg-white/80 hover:bg-[#6ee7b7] hover:text-white border-2 border-gray-200 hover:border-[#6ee7b7] font-bold text-lg rounded-2xl transition-all shadow-md"
                          >
                            {quickAmount >= 10000 
                              ? `${(quickAmount / 10000).toFixed(0)}만원` 
                              : `${quickAmount.toLocaleString()}원`}
                          </motion.button>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <motion.button
                          type="button"
                          onClick={() => setStep(1)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-6 bg-gray-200 text-gray-700 font-bold text-xl rounded-3xl shadow-lg transition-all"
                        >
                          이전
                        </motion.button>
                        
                        <motion.button
                          type="submit"
                          disabled={!amount || parseInt(amount.replace(/,/g, '')) === 0}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-6 bg-gradient-to-r from-[#6ee7b7] to-[#34d399] text-white font-bold text-xl rounded-3xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
                        >
                          시작하기
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
