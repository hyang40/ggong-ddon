"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { COPY } from "@/lib/constants";

export default function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    "Partner A",
    "Partner B",
    "Partner C",
    "Partner D",
    "Partner E",
    "Partner F",
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3">
            {COPY.valueConsumption.title}
          </h2>
          <p className="text-[#2B2B2B]">{COPY.valueConsumption.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-[#E8E8E8] rounded-2xl p-6 flex items-center justify-center hover:border-[#B8FF00] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8FF00] to-[#D9FF66] rounded-full mb-2 mx-auto" />
                <div className="text-xs font-semibold text-[#2B2B2B]">{partner}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
