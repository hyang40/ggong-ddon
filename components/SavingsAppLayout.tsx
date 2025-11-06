'use client'

import { motion } from 'framer-motion'
import { Home, BookOpen, ChevronLeft } from 'lucide-react'
import { ReactNode, useState } from 'react'

interface SavingsAppLayoutProps {
  children: ReactNode
  onClose: () => void
}

export default function SavingsAppLayout({ children, onClose }: SavingsAppLayoutProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'journal'>('journal')

  return (
    <div className="bg-white h-[700px] flex flex-col">
      {/* Header with Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">GGong DDon</h1>
          <div className="w-9" /> {/* Spacer for center alignment */}
        </div>
        
        {/* Tabs */}
        <div className="flex border-t border-gray-100">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 font-semibold transition-all relative ${
              activeTab === 'home' 
                ? 'text-[#a78bfa]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>홈페이지</span>
            {activeTab === 'home' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a78bfa]"
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('journal')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 font-semibold transition-all relative ${
              activeTab === 'journal' 
                ? 'text-[#a78bfa]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>내 저축 일지</span>
            {activeTab === 'journal' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a78bfa]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {activeTab === 'home' && (
          <div className="p-6 text-center text-gray-500">
            <p className="text-lg">홈페이지 (준비중)</p>
          </div>
        )}
        {activeTab === 'journal' && children}
      </div>
    </div>
  )
}
