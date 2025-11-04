"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Sparkles, Brain, TrendingUp } from "lucide-react";
import { COPY, DUMMY_DATA } from "@/lib/constants";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const FeatureCard = ({ 
  title, 
  microcopy, 
  badge, 
  icon: Icon, 
  chart,
  index 
}: { 
  title: string; 
  microcopy: string; 
  badge: string; 
  icon: any;
  chart: React.ReactNode;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white border-2 border-[#F7F9FB] hover:border-[#B8FF00] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#B8FF00] to-[#D9FF66] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-[#0A0A0A]" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3">
        {title}
      </h3>

      {/* Microcopy */}
      <p className="text-[#2B2B2B] mb-6 leading-relaxed">
        {microcopy}
      </p>

      {/* Badge */}
      <div className="inline-block bg-[#E8FFE0] text-[#145E22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
        {badge}
      </div>

      {/* Chart */}
      <div className="mt-6 h-32 bg-gradient-to-br from-[#F7F9FB] to-white rounded-xl p-4">
        {chart}
      </div>
    </motion.div>
  );
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#B8FF00] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            AI Engines
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A] mb-4">
            {COPY.features.title}
          </h2>
          <p className="text-lg text-[#2B2B2B] max-w-2xl mx-auto">
            세 가지 AI 엔진이 당신의 긍정적 소비 습관을 만듭니다
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Impulse Shield */}
          <FeatureCard
            index={0}
            icon={TrendingUp}
            title={COPY.features.card1.title}
            microcopy={COPY.features.card1.microcopy}
            badge={COPY.features.card1.badge}
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DUMMY_DATA.candleChart}>
                  <Bar dataKey="impulse" fill="#FFB8B8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="saved" fill="#B8FF00" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            }
          />

          {/* Card 2: Praise Mode */}
          <FeatureCard
            index={1}
            icon={Sparkles}
            title={COPY.features.card2.title}
            microcopy={COPY.features.card2.microcopy}
            badge={COPY.features.card2.badge}
            chart={
              <div className="flex flex-col justify-center h-full space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-[#E8FFE0] h-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#145E22] rounded-full"
                    />
                  </div>
                  <span className="text-sm font-semibold text-[#145E22]">75%</span>
                </div>
                <div className="text-xs text-[#2B2B2B] text-center">
                  이번 주 성공률
                </div>
              </div>
            }
          />

          {/* Card 3: Habit Balance Coaching */}
          <FeatureCard
            index={2}
            icon={Brain}
            title={COPY.features.card3.title}
            microcopy={COPY.features.card3.microcopy}
            badge={COPY.features.card3.badge}
            chart={
              <div className="flex items-center justify-center h-full">
                <div className="relative w-24 h-24">
                  <svg className="transform -rotate-90" width="100%" height="100%">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#F7F9FB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#B8FF00"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - DUMMY_DATA.habitScore / 100) }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0A0A0A]">{DUMMY_DATA.habitScore}</span>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Additional Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "실시간 충동 예측", value: "AI 분석" },
            { label: "평균 절약액", value: "₩1.2M / 월" },
            { label: "사용자 만족도", value: "94%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#F7F9FB] to-white border border-[#E8E8E8] rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-[#0A0A0A] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#2B2B2B]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
