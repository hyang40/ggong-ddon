"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { COPY, CHART_DATA } from "@/lib/constants";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

function Counter({ value, duration = 1 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [count, value, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Dashboard() {
  return (
    <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
      {/* 배경 데코 */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#a78bfa] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6ee7b7] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16 relative">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]">
            {COPY.dashboard.title}
          </h2>
          <p className="text-xl text-[#6b7280]">{COPY.dashboard.subtitle}</p>
        </motion.div>

        {/* KPI 카드 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {COPY.dashboard.kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e7eb]"
            >
              <p className="text-xs font-semibold text-[#6b7280] mb-2">{kpi.label}</p>
              <div className="flex items-end gap-2">
                <p className={`text-3xl font-bold ${
                  kpi.color === 'purple' ? 'text-[#a78bfa]' :
                  kpi.color === 'mint' ? 'text-[#6ee7b7]' :
                  'text-[#fca5a5]'
                }`}>
                  <Counter value={kpi.value} />
                </p>
                <span className="text-base font-semibold text-[#9ca3af] mb-1">{kpi.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 차트 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e7eb] mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0a0a0a]">이번 달 꽁돈 추이</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#a78bfa]" />
                <span className="text-sm font-semibold text-[#6b7280]">목표</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#6ee7b7]" />
                <span className="text-sm font-semibold text-[#6b7280]">실제</span>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={CHART_DATA.goalProgress}>
              <XAxis dataKey="week" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '2px solid #e9d5ff',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Line type="monotone" dataKey="goal" stroke="#a78bfa" strokeWidth={3} dot={{ fill: '#a78bfa', r: 6 }} />
              <Line type="monotone" dataKey="actual" stroke="#6ee7b7" strokeWidth={3} dot={{ fill: '#6ee7b7', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* 최근 칭찬 로그 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-black text-[#0a0a0a] mb-6">최근 칭찬 로그</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {COPY.dashboard.recentPraises.map((praise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-[#fef3c7] to-[#fde047] rounded-2xl p-6 shadow-lg"
              >
                <p className="text-base font-bold text-[#78350f]">{praise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
