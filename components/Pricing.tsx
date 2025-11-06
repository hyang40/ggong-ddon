"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { COPY } from "@/lib/constants";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]">
            {COPY.pricing.title}
          </h2>
          <p className="text-xl text-[#6b7280]">{COPY.pricing.subtitle}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-[#f9fafb] rounded-full p-2 mt-8">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                !isYearly
                  ? "bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white shadow-lg"
                  : "text-[#6b7280]"
              }`}
            >
              월간
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                isYearly
                  ? "bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white shadow-lg"
                  : "text-[#6b7280]"
              }`}
            >
              연간 <span className="text-[#fca5a5] text-sm ml-1">(-17%)</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COPY.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 shadow-xl ${
                plan.recommended
                  ? "bg-gradient-to-br from-[#faf5ff] to-[#f0fdf4] border-4 border-[#a78bfa]"
                  : "bg-white border-2 border-[#e5e7eb]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white px-6 py-2 rounded-full text-sm font-black shadow-lg">
                  추천 ⭐
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-[#0a0a0a] mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl font-black text-[#a78bfa]">
                    ₩{isYearly && plan.yearlyPrice ? Math.round(plan.yearlyPrice / 12).toLocaleString() : plan.price.toLocaleString()}
                  </span>
                  <span className="text-xl text-[#6b7280] mb-2">/월</span>
                </div>
                {isYearly && plan.yearlyPrice && (
                  <p className="text-sm text-[#6b7280] mt-2">
                    연간 ₩{plan.yearlyPrice.toLocaleString()} 결제
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#374151] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                  plan.recommended
                    ? "bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] text-white shadow-lg"
                    : "bg-[#f9fafb] text-[#0a0a0a] border-2 border-[#e5e7eb] hover:border-[#a78bfa]"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
