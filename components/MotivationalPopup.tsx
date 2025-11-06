'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { COPY } from '@/lib/constants'

interface MotivationalPopupProps {
  onNext: () => void
}

export default function MotivationalPopup({ onNext }: MotivationalPopupProps) {
  return (
    <div className="p-8 text-center">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="mb-6 flex justify-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="relative w-24 h-24 bg-gradient-to-br from-[#fde047] to-[#fbbf24] rounded-full flex items-center justify-center shadow-2xl"
        >
          <Sparkles className="w-12 h-12 text-white" fill="white" strokeWidth={2} />
          
          {/* Sparkle particles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 40],
                y: [0, Math.sin(i * Math.PI / 2) * 40],
                opacity: [1, 0],
                scale: [1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold mb-4 text-gray-900"
      >
        {COPY.hero.motivationalMessage}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-600 mb-8"
      >
        {COPY.hero.motivationalSubtext}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-[#faf5ff] border border-[#e9d5ff] rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💪</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 mb-1">성취감 증진</h3>
              <p className="text-sm text-gray-600">작은 성공을 축하하며 큰 목표로 나아갑니다</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f0fdf4] border border-[#d1fae5] rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6ee7b7] to-[#34d399] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✨</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 mb-1">긍정적 마인드</h3>
              <p className="text-sm text-gray-600">실패는 배움의 기회, 당신은 충분히 잘하고 있어요</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.button
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 py-4 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white font-bold text-lg rounded-2xl shadow-lg flex items-center justify-center gap-2 group"
      >
        내 저축 일지 시작하기
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  )
}
