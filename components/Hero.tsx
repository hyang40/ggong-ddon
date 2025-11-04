"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { COPY } from "@/lib/constants";
import SignupModal from "./SignupModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle Green Gradient Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#00C73C] blur-[150px]" />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10 text-center lg:text-left"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="text-3xl font-bold">
                <span className="inline-block transform rotate-90 text-[#00C73C]">∞</span>
              </div>
              <span className="text-2xl font-bold text-[#191F28]">
                GGong DDon <span className="text-[#6B7684] font-medium text-base ml-1">(꽁돈)</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#191F28] leading-[1.1] tracking-tight">
                {COPY.hero.headline1}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#333D4B] leading-snug">
                {COPY.hero.headline2}
              </h2>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#6B7684] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {COPY.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#00C73C] text-white font-bold rounded-2xl hover:bg-[#00E647] transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,199,60,0.25)] hover:shadow-[0_8px_30px_rgba(0,199,60,0.35)]"
              >
                {COPY.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-[#F9FAFB] border-2 border-[#E5E8EB] text-[#191F28] font-bold rounded-2xl hover:bg-white hover:border-[#00C73C] transition-all duration-200 flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {COPY.hero.ctaSecondary}
              </motion.button>
            </div>

            {/* Signup Modal */}
            <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-6 pt-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C73C] to-[#00E647] border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-md"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-base text-[#6B7684]">
                <span className="font-bold text-[#191F28]">2,430+</span> 사전 신청
              </div>
            </motion.div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto max-w-[420px]"
          >
            {/* Phone Frame */}
            <div className="relative bg-[#191F28] rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-[#F9FAFB] px-6 py-3 flex items-center justify-between text-xs">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-[#333D4B] rounded-sm" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-3">
                    <div className="text-sm text-[#6B7684]">오늘의 꽁돈</div>
                    <div className="text-6xl font-bold text-[#191F28]">
                      ₩23,500
                    </div>
                    <div className="inline-block bg-[#E8F9EF] text-[#00A032] px-4 py-2 rounded-full text-sm font-bold">
                      +2시간 목표 앞당김 🎉
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="bg-gradient-to-br from-[#E8F9EF] to-[#F9FAFB] rounded-2xl p-4">
                    <div className="flex justify-between items-end h-28 gap-2">
                      {[40, 60, 45, 80, 65, 90, 100].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                          className="flex-1 bg-gradient-to-t from-[#00C73C] to-[#00E647] rounded-lg"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-[#00C73C] text-white font-bold py-4 rounded-2xl hover:bg-[#00E647] transition-colors">
                    충동 참기 챌린지 시작
                  </button>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F9FAFB] p-4 rounded-xl">
                      <div className="text-xs text-[#6B7684] mb-1">이번 주</div>
                      <div className="text-xl font-bold text-[#191F28]">₩67,000</div>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-xl">
                      <div className="text-xs text-[#6B7684] mb-1">성공률</div>
                      <div className="text-xl font-bold text-[#191F28]">87%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#E8F9EF] text-[#00A032] px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              잘하고 있어요! 💚
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white border-2 border-[#00C73C] px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              목표: 유럽 여행 ✈️
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
