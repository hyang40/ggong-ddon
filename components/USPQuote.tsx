"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { COPY } from "@/lib/constants";

export default function USPQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#B8FF00] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#B8FF00] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8FF00] rounded-full">
            <Quote className="w-8 h-8 text-[#0A0A0A]" />
          </div>

          {/* Quote Text */}
          <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight">
            "{COPY.usp.quote}"
          </blockquote>

          {/* Attribution */}
          <div className="text-[#B8FF00] font-semibold text-lg">
            — GGong DDon Team
          </div>
        </motion.div>
      </div>
    </section>
  );
}
