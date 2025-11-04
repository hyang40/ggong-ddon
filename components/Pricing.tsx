"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import { COPY, PRICING_DATA } from "@/lib/constants";

const PricingCard = ({ 
  plan, 
  recommended, 
  index 
}: { 
  plan: typeof PRICING_DATA.free | typeof PRICING_DATA.premium; 
  recommended: boolean;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 ${
        recommended
          ? "bg-gradient-to-br from-[#B8FF00] to-[#D9FF66] border-2 border-[#B8FF00] shadow-xl"
          : "bg-white border-2 border-[#F7F9FB]"
      } hover:shadow-2xl transition-all duration-300`}
    >
      {/* Recommended Badge */}
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-[#B8FF00] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          추천
        </div>
      )}

      {/* Plan Name */}
      <div className={`text-xl font-bold mb-2 ${recommended ? "text-[#0A0A0A]" : "text-[#2B2B2B]"}`}>
        {plan.name}
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className={`text-5xl font-bold ${recommended ? "text-[#0A0A0A]" : "text-[#0A0A0A]"}`}>
          {plan.price}
        </span>
        {"period" in plan && (
          <span className={`text-lg ${recommended ? "text-[#0A0A0A]" : "text-[#2B2B2B]"}`}>
            {plan.period}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
              recommended ? "bg-[#0A0A0A]" : "bg-[#E8FFE0]"
            }`}>
              <Check className={`w-3 h-3 ${recommended ? "text-[#B8FF00]" : "text-[#145E22]"}`} />
            </div>
            <span className={recommended ? "text-[#0A0A0A]" : "text-[#2B2B2B]"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
          recommended
            ? "bg-[#0A0A0A] text-[#B8FF00] hover:bg-[#2B2B2B]"
            : "bg-[#B8FF00] text-[#0A0A0A] hover:bg-[#D9FF66]"
        }`}
      >
        {recommended ? "지금 시작하기" : "무료로 시작"}
      </motion.button>
    </motion.div>
  );
};

export default function Pricing() {
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
            Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A] mb-4">
            {COPY.pricing.title}
          </h2>
          <p className="text-lg text-[#2B2B2B] max-w-2xl mx-auto">
            무료로 시작하고, 더 강력한 AI 코칭이 필요할 때 업그레이드하세요
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            index={0}
            plan={PRICING_DATA.free}
            recommended={false}
          />
          <PricingCard
            index={1}
            plan={PRICING_DATA.premium}
            recommended={true}
          />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-sm text-[#2B2B2B]"
        >
          모든 플랜은 언제든지 취소 가능합니다. 30일 환불 보장.
        </motion.div>
      </div>
    </section>
  );
}
