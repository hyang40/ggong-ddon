"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";

export default function WhyEffective() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]">
            {COPY.whyEffective.title}
          </h2>
          <p className="text-xl text-[#6b7280]">{COPY.whyEffective.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {COPY.whyEffective.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl p-7 shadow-sm border border-[#e5e7eb] text-center hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-5">{point.icon}</div>
              <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{point.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
