'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, Building2, CreditCard, Check } from 'lucide-react'
import { useState } from 'react'

interface Step3ExpenseAnalysisProps {
  onNext: () => void
  onBack: () => void
}

const banks = [
  { id: 1, name: '국민은행', logo: '🏦', color: '#FFB800' },
  { id: 2, name: '신한은행', logo: '🏦', color: '#0046FF' },
  { id: 3, name: '우리은행', logo: '🏦', color: '#0B8DFF' },
  { id: 4, name: 'KB국민카드', logo: '💳', color: '#FFB800' },
  { id: 5, name: '삼성카드', logo: '💳', color: '#1428A0' },
  { id: 6, name: '현대카드', logo: '💳', color: '#000000' }
]

export default function Step3ExpenseAnalysis({ onNext, onBack }: Step3ExpenseAnalysisProps) {
  const [selectedBank, setSelectedBank] = useState<number | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    if (!selectedBank) return
    
    setIsConnecting(true)
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      
      // Auto proceed after success
      setTimeout(() => {
        onNext()
      }, 1500)
    }, 2000)
  }

  return (
    <div className="bg-white h-[600px] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-gray-100 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">계좌 연결</h2>
      </div>

      <div className="p-6">
        {!isConnected ? (
          <>
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                은행/카드 연결하기
              </h3>
              <p className="text-gray-600">
                소비 패턴을 분석하고<br />
                충동구매를 찾아드릴게요
              </p>
            </motion.div>

            {/* Bank Selection */}
            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">은행/카드사 선택</h4>
              {banks.map((bank, index) => (
                <motion.button
                  key={bank.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedBank(bank.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                    selectedBank === bank.id
                      ? 'border-[#a78bfa] bg-[#faf5ff]'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                    style={{ backgroundColor: `${bank.color}20` }}
                  >
                    {bank.logo}
                  </div>
                  <span className="flex-1 text-left font-semibold text-gray-900">
                    {bank.name}
                  </span>
                  {selectedBank === bank.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-[#a78bfa] rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Security Info */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
              <div className="flex gap-3">
                <span className="text-2xl">🔒</span>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-blue-900 mb-1">
                    안전하게 보호됩니다
                  </h5>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    금융 데이터는 256비트 암호화로 보호되며,
                    오픈뱅킹 API를 통해 안전하게 연결됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Connect Button */}
            <motion.button
              onClick={handleConnect}
              disabled={!selectedBank || isConnecting}
              whileHover={{ scale: selectedBank ? 1.02 : 1 }}
              whileTap={{ scale: selectedBank ? 0.98 : 1 }}
              className="w-full py-4 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white font-bold text-lg rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isConnecting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>연결 중...</span>
                </div>
              ) : (
                '계좌 연결하기'
              )}
            </motion.button>
          </>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-24 h-24 bg-gradient-to-br from-[#6ee7b7] to-[#34d399] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              연결 완료!
            </h3>
            <p className="text-gray-600 mb-4">
              소비 데이터를 불러오는 중...
            </p>

            <div className="flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#a78bfa] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
