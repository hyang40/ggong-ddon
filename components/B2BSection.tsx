"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, TrendingUp, ArrowRight } from "lucide-react";
import { COPY } from "@/lib/constants";

export default function B2BSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: Users, text: "팀 전체의 재정 웰빙" },
    { icon: TrendingUp, text: "직원 스트레스 감소" },
    { icon: Building2, text: "맞춤형 기업 대시보드" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-[#F7F9FB] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#B8FF00] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-semibold">
              B2B Solution
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A]">
              {COPY.b2b.title}
            </h2>

            <p className="text-lg text-[#2B2B2B] leading-relaxed">
              {COPY.b2b.subtitle}
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B8FF00] to-[#D9FF66] rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <span className="text-[#2B2B2B] font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] text-[#B8FF00] font-semibold rounded-xl hover:bg-[#2B2B2B] transition-all duration-200"
            >
              {COPY.b2b.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white border-2 border-[#F7F9FB] rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#0A0A0A]">Team Dashboard</h3>
                  <div className="text-sm text-[#2B2B2B]">실시간</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "참여 직원", value: "248명" },
                    { label: "평균 절약", value: "₩890K" },
                    { label: "챌린지", value: "12개" },
                    { label: "만족도", value: "92%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#F7F9FB] p-4 rounded-xl">
                      <div className="text-xs text-[#2B2B2B] mb-1">{stat.label}</div>
                      <div className="text-xl font-bold text-[#0A0A0A]">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#B8FF00] to-[#D9FF66] p-4 rounded-xl text-[#0A0A0A]">
                  <div className="text-sm font-semibold mb-1">이번 달 성과</div>
                  <div className="text-2xl font-bold">총 ₩218M 절약</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
