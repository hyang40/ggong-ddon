"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { COPY } from "@/lib/constants";

export default function B2BSection() {
  return (
    <section id="b2b" className="py-24 bg-gradient-to-br from-[#faf5ff] via-[#f0fdf4] to-[#fef3c7]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#e9d5ff]"
        >
          <div className="grid md:grid-cols-2">
            {/* 좌측: 카피 */}
            <div className="p-12 flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-4xl font-black text-[#0a0a0a] mb-4">
                {COPY.b2b.title}
              </h2>
              <p className="text-xl font-bold text-[#8b5cf6] mb-6">
                {COPY.b2b.subtitle}
              </p>
              <p className="text-[#6b7280] leading-relaxed mb-8">
                {COPY.b2b.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white font-bold rounded-2xl shadow-lg self-start"
              >
                {COPY.b2b.cta}
              </motion.button>
            </div>

            {/* 우측: 일러스트 */}
            <div className="bg-gradient-to-br from-[#faf5ff] to-[#f0fdf4] p-12 flex items-center justify-center">
              <div className="space-y-4 w-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-full" />
                    <div>
                      <p className="text-sm font-bold text-[#0a0a0a]">Team Challenge</p>
                      <p className="text-xs text-[#6b7280]">12명 참여 중</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#6b7280]">팀 목표</span>
                      <span className="font-bold text-[#a78bfa]">85%</span>
                    </div>
                    <div className="w-full bg-[#f3f4f6] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="text-xs text-[#6b7280] mb-1">팀 누적</p>
                    <p className="text-2xl font-black text-[#a78bfa]">₩2.4M</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="text-xs text-[#6b7280] mb-1">만족도</p>
                    <p className="text-2xl font-black text-[#6ee7b7]">94%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
