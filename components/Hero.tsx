"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { COPY, CHART_DATA } from "@/lib/constants";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { useState } from "react";
import Modal from "./Modal";
import MotivationalPopup from "./MotivationalPopup";
import GoalSetupScreen from "./GoalSetupScreen";
import SavingsJournalScreen from "./SavingsJournalScreen";
import Step3ExpenseAnalysis from "./Step3ExpenseAnalysis";
import Step4CategoryTagging from "./Step4CategoryTagging";

export default function Hero() {
  const [showMotivational, setShowMotivational] = useState(false);
  const [showGoalSetup, setShowGoalSetup] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showExpenseAnalysis, setShowExpenseAnalysis] = useState(false);
  const [showCategoryTagging, setShowCategoryTagging] = useState(false);
  const [goalAmount, setGoalAmount] = useState(0);
  const [goalDescription, setGoalDescription] = useState('');

  const handleStartClick = () => {
    setShowMotivational(true);
  };

  const handleMotivationalComplete = () => {
    setShowMotivational(false);
    setShowGoalSetup(true);
  };

  const handleGoalSetupComplete = (amount: number, description: string) => {
    setGoalAmount(amount);
    setGoalDescription(description);
    setShowGoalSetup(false);
    setShowJournal(true);
  };

  const handleJournalClose = () => {
    setShowJournal(false);
  };

  const handleExpenseAnalysisClick = () => {
    setShowJournal(false);
    setShowExpenseAnalysis(true);
  };

  const handleExpenseAnalysisNext = () => {
    setShowExpenseAnalysis(false);
    setShowCategoryTagging(true);
  };

  const handleExpenseAnalysisBack = () => {
    setShowExpenseAnalysis(false);
    setShowJournal(true);
  };

  const handleCategoryTaggingBack = () => {
    setShowCategoryTagging(false);
    setShowExpenseAnalysis(true);
  };

  const handleCategoryTaggingComplete = () => {
    setShowCategoryTagging(false);
    setShowJournal(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white py-32">
      {/* 미니멀 배경 */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#a78bfa] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#6ee7b7] rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* 좌측: 카피 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* 로고 */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-xl flex items-center justify-center shadow-sm p-1">
                <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                  <div className="flex items-center justify-center">
                    <span className="text-[13px] font-black text-white">G</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[13px] font-black text-white">G</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[13px] font-black text-white">D</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-[13px] font-black text-white">D</span>
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold text-[#0a0a0a]">
                GGong DDon
              </span>
            </div>

            {/* 헤드라인 */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] leading-tight tracking-tight">
                {COPY.hero.headline1}
                <br />
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] bg-clip-text text-transparent">
                  {COPY.hero.headline2}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#6b7280] font-normal leading-relaxed">
                {COPY.hero.subheadline}
              </p>
            </div>

            {/* 마이크로카피 */}
            <div className="inline-flex items-center gap-2 bg-[#faf5ff] border border-[#e9d5ff] rounded-lg px-4 py-2">
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-sm font-semibold text-[#8b5cf6]">
                {COPY.hero.microcopy}
              </span>
            </div>

            {/* 시작하기 버튼 - 통 네모 토스 스타일 */}
            <motion.button
              onClick={handleStartClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full px-16 py-12 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white font-bold text-2xl rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              {/* Toss-style shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <span className="relative z-10">시작하기</span>
            </motion.button>
          </motion.div>

          {/* 우측: 오늘의 꽁돈 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-sm p-8 border border-[#e5e7eb]">
              <div className="relative space-y-6">
                {/* 오늘의 꽁돈 */}
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 bg-[#fafbfc] rounded-lg px-3 py-1.5">
                    <span className="text-2xl">💰</span>
                    <span className="text-xs font-semibold text-[#8b5cf6]">오늘의 꽁돈</span>
                  </div>
                  
                  <div className="text-4xl font-bold text-[#a78bfa]">
                    {COPY.hero.todaySavings}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-[#f0fdf4] rounded-lg px-3 py-1.5">
                    <Sparkles className="w-3 h-3 text-[#34d399]" />
                    <span className="text-xs font-semibold text-[#059669]">
                      {COPY.hero.goalAdvanced}
                    </span>
                  </div>
                </div>

                {/* 미니 바차트 */}
                <div className="bg-[#fafbfc] rounded-xl p-5">
                  <p className="text-xs font-semibold text-[#6b7280] mb-3">이번 주 절약 추이</p>
                  <ResponsiveContainer width="100%" height={100}>
                    <BarChart data={CHART_DATA.weeklyTrend}>
                      <Bar dataKey="savings" fill="#a78bfa" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 하단 KPIs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#fafbfc] rounded-lg p-4 text-center border border-[#f3f4f6]">
                    <p className="text-xs text-[#8b5cf6] font-medium mb-1">이번 주 누적</p>
                    <p className="text-xl font-bold text-[#a78bfa]">₩235K</p>
                  </div>
                  <div className="bg-[#fafbfc] rounded-lg p-4 text-center border border-[#f3f4f6]">
                    <p className="text-xs text-[#34d399] font-medium mb-1">성공률</p>
                    <p className="text-xl font-bold text-[#6ee7b7]">92%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Motivational Popup */}
      <Modal isOpen={showMotivational} onClose={() => setShowMotivational(false)} size="md">
        <MotivationalPopup onNext={handleMotivationalComplete} />
      </Modal>

      {/* Goal Setup Fullscreen */}
      <GoalSetupScreen 
        isOpen={showGoalSetup} 
        onComplete={handleGoalSetupComplete}
      />

      {/* Savings Journal Fullscreen */}
      <SavingsJournalScreen
        isOpen={showJournal}
        onClose={handleJournalClose}
        goalAmount={goalAmount}
        goalDescription={goalDescription}
        onExpenseAnalysisClick={handleExpenseAnalysisClick}
      />

      {/* Expense Analysis Fullscreen */}
      {showExpenseAnalysis && (
        <Modal isOpen={showExpenseAnalysis} onClose={() => setShowExpenseAnalysis(false)} size="lg" showCloseButton={false}>
          <div className="bg-white h-[700px]">
            <Step3ExpenseAnalysis 
              onNext={handleExpenseAnalysisNext} 
              onBack={handleExpenseAnalysisBack} 
            />
          </div>
        </Modal>
      )}

      {/* Category Tagging Fullscreen */}
      {showCategoryTagging && (
        <Modal isOpen={showCategoryTagging} onClose={() => setShowCategoryTagging(false)} size="lg" showCloseButton={false}>
          <div className="bg-gray-50 h-[700px]">
            <Step4CategoryTagging 
              onBack={handleCategoryTaggingBack} 
              onComplete={handleCategoryTaggingComplete} 
            />
          </div>
        </Modal>
      )}
    </section>
  );
}