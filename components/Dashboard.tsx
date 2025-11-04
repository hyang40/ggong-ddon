"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { COPY, DUMMY_DATA } from "@/lib/constants";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp, Calendar, Target, Heart } from "lucide-react";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 0.9 });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {rounded.get().toLocaleString()}
      {suffix}
    </motion.span>
  );
}

const KPICard = ({ 
  icon: Icon, 
  label, 
  value, 
  prefix = "", 
  suffix = "",
  color = "neon",
  index 
}: { 
  icon: any; 
  label: string; 
  value: number; 
  prefix?: string; 
  suffix?: string;
  color?: "neon" | "success" | "blue";
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses = {
    neon: "from-[#B8FF00] to-[#D9FF66]",
    success: "from-[#145E22] to-[#2A8B3E]",
    blue: "from-[#0066FF] to-[#4D94FF]",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border-2 border-[#F7F9FB] rounded-2xl p-6 hover:border-[#B8FF00] transition-all duration-300 hover:shadow-lg"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-sm text-[#2B2B2B] mb-2">{label}</div>
      <div className="text-3xl md:text-4xl font-bold text-[#0A0A0A]">
        <Counter value={value} prefix={prefix} suffix={suffix} />
      </div>
    </motion.div>
  );
};

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#B8FF00] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Dashboard
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A] mb-4">
            {COPY.dashboard.title}
          </h2>
          <p className="text-lg text-[#2B2B2B] max-w-2xl mx-auto">
            한눈에 보는 나의 '꽁돈' 성장 스토리
          </p>
        </motion.div>

        {/* Main Dashboard */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* KPI Cards */}
          <div className="space-y-6">
            <KPICard
              index={0}
              icon={TrendingUp}
              label={COPY.dashboard.metrics.totalSaved}
              value={DUMMY_DATA.kpis.totalSaved}
              prefix="₩"
              color="neon"
            />
            <KPICard
              index={1}
              icon={Calendar}
              label={COPY.dashboard.metrics.weeklySaved}
              value={DUMMY_DATA.kpis.weeklySaved}
              prefix="₩"
              color="success"
            />
          </div>

          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-[#F7F9FB] rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#0A0A0A]">이번 주 꽁돈 추이</h3>
              <div className="text-sm text-[#2B2B2B]">최근 7일</div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={DUMMY_DATA.lineChart}>
                <XAxis 
                  dataKey="date" 
                  stroke="#2B2B2B"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#2B2B2B"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0A0A0A', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: '#FFFFFF'
                  }}
                  formatter={(value: any) => [`₩${value.toLocaleString()}`, '절약액']}
                />
                <Line 
                  type="monotone" 
                  dataKey="saved" 
                  stroke="#B8FF00" 
                  strokeWidth={3}
                  dot={{ fill: '#B8FF00', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Additional KPIs */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <KPICard
            index={2}
            icon={Target}
            label={COPY.dashboard.metrics.goalAcceleration}
            value={DUMMY_DATA.kpis.goalAcceleration}
            suffix="일"
            color="blue"
          />
          <KPICard
            index={3}
            icon={Heart}
            label="챌린지 성공률"
            value={DUMMY_DATA.kpis.challengeSuccess}
            suffix="%"
            color="success"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-[#B8FF00] to-[#D9FF66] rounded-2xl p-6 text-[#0A0A0A]"
          >
            <div className="text-sm font-semibold mb-2">현재 목표</div>
            <div className="text-2xl font-bold mb-1">유럽 여행 ✈️</div>
            <div className="text-sm opacity-80">
              목표 금액의 <span className="font-bold">68%</span> 달성
            </div>
            <div className="mt-4 bg-white/30 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-full bg-[#0A0A0A] rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Praise Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border-2 border-[#F7F9FB] rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-[#0A0A0A] mb-4">
            {COPY.dashboard.metrics.recentPraise}
          </h3>
          <div className="space-y-3">
            {DUMMY_DATA.praiseLog.map((praise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3 p-3 bg-[#E8FFE0] rounded-xl"
              >
                <div className="w-2 h-2 bg-[#145E22] rounded-full" />
                <span className="text-[#145E22] font-medium">{praise}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
