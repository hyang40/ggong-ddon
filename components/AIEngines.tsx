"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from "recharts";

const dummyData = [
  { x: 0, y: 20 },
  { x: 1, y: 45 },
  { x: 2, y: 38 },
  { x: 3, y: 65 },
  { x: 4, y: 58 },
  { x: 5, y: 80 },
];

export default function AIEngines() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#faf5ff] to-[#f0fdf4] rounded-full px-6 py-2">
            <span className="text-2xl">🤖</span>
            <span className="text-sm font-bold text-[#8b5cf6]">AI POWERED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]">
            {COPY.aiEngines.title}
          </h2>
          <p className="text-xl text-[#6b7280]">{COPY.aiEngines.subtitle}</p>
        </motion.div>

        {/* 3개 카드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {COPY.aiEngines.engines.map((engine, index) => (
            <motion.div
              key={engine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-xl p-7 shadow-sm border border-[#e5e7eb] hover:shadow-md transition-all"
            >
              {/* 아이콘 */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-lg flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform">
                {engine.icon}
              </div>

              {/* 뱃지 */}
              <div className="inline-flex items-center gap-2 bg-[#fafbfc] border border-[#e5e7eb] rounded-md px-2.5 py-1 mb-4">
                <span className="text-xs font-semibold text-[#8b5cf6]">
                  {engine.badge}
                </span>
              </div>

              {/* 타이틀 */}
              <h3 className="text-lg font-bold text-[#0a0a0a] mb-3 leading-tight">
                {engine.title}
              </h3>

              {/* 설명 */}
              <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
                {engine.description}
              </p>

              {/* 미니 UI */}
              {index === 0 && (
                <div className="bg-[#fafbfc] rounded-lg p-3 border border-[#e5e7eb]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#34d399]">D-Goal</span>
                    <span className="text-xs font-semibold text-[#059669]">-2시간</span>
                  </div>
                  <ResponsiveContainer width="100%" height={50}>
                    <AreaChart data={dummyData}>
                      <defs>
                        <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="y" stroke="#a78bfa" fill="url(#colorPurple)" strokeWidth={1.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {index === 1 && (
                <div className="bg-[#fef9e7] rounded-lg p-3 border border-[#fde047]/20">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎉</span>
                    <div>
                      <p className="text-xs font-semibold text-[#78350f]">칭찬 알림</p>
                      <p className="text-xs text-[#92400e]">지난주 150K 꽁돈!</p>
                    </div>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="bg-[#fafbfc] rounded-lg p-3 border border-[#e5e7eb]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#8b5cf6]">소비 근육 점수</span>
                    <span className="text-xl font-bold text-[#a78bfa]">72</span>
                  </div>
                  <div className="w-full bg-[#f3f4f6] rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "72%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] rounded-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
