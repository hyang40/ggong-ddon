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
      {/* Subtle Neon Green Radial Gradient Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#B8FF00] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-[#0A0A0A]">
              <span className="inline-block transform rotate-90 text-[#B8FF00]">∞</span>
            </div>
            <span className="text-xl font-bold text-[#0A0A0A]">
              GGong DDon <span className="text-[#2B2B2B] font-normal text-sm">(꽁돈)</span>
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A0A0A] leading-tight">
              {COPY.hero.headline1}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2B2B2B]">
              {COPY.hero.headline2}
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#2B2B2B]">
            {COPY.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-[#B8FF00] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#D9FF66] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_8px_24px_rgba(184,255,0,0.35)]"
            >
              {COPY.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#F7F9FB] transition-all duration-200 flex items-center justify-center gap-2"
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
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8FF00] to-[#D9FF66] border-2 border-white flex items-center justify-center text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-sm text-[#2B2B2B]">
              <span className="font-semibold text-[#0A0A0A]">2,430+</span> 사전 신청
            </div>
          </motion.div>
        </motion.div>

        {/* Right: App Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[400px]">
            {/* Phone Frame */}
            <div className="relative bg-[#0A0A0A] rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-[#F7F9FB] px-6 py-3 flex items-center justify-between text-xs">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-[#2B2B2B] rounded-sm" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <div className="text-sm text-[#2B2B2B]">오늘의 꽁돈</div>
                    <div className="text-5xl font-bold text-[#0A0A0A]">
                      ₩23,500
                    </div>
                    <div className="inline-block bg-[#E8FFE0] text-[#145E22] px-3 py-1 rounded-full text-xs font-semibold">
                      +2시간 목표 앞당김 🎉
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="bg-gradient-to-br from-[#B8FF00]/10 to-[#E3FFA3]/10 rounded-2xl p-4">
                    <div className="flex justify-between items-end h-24">
                      {[40, 60, 45, 80, 65, 90, 100].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                          className="w-8 bg-gradient-to-t from-[#B8FF00] to-[#D9FF66] rounded-t"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-[#B8FF00] text-[#0A0A0A] font-semibold py-4 rounded-xl">
                    충동 참기 챌린지 시작
                  </button>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#F7F9FB] p-3 rounded-xl">
                      <div className="text-xs text-[#2B2B2B]">이번 주</div>
                      <div className="text-lg font-bold text-[#0A0A0A]">₩67,000</div>
                    </div>
                    <div className="bg-[#F7F9FB] p-3 rounded-xl">
                      <div className="text-xs text-[#2B2B2B]">성공률</div>
                      <div className="text-lg font-bold text-[#0A0A0A]">87%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#E8FFE0] text-[#145E22] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              잘하고 있어요! 💚
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white border-2 border-[#B8FF00] px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              목표: 유럽 여행 ✈️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
