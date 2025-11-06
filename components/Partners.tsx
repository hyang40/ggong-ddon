"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";

const logos = [
  "Partner A", "Partner B", "Partner C",
  "Partner D", "Partner E", "Partner F"
];

export default function Partners() {
  return (
    <section className="py-32 bg-[#fafbfc]">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a]">
            {COPY.partners.title}
          </h2>
          <p className="text-xl text-[#6b7280]">{COPY.partners.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-[#e5e7eb] flex items-center justify-center h-28"
            >
              <span className="text-base font-semibold text-[#9ca3af]">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
