"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COPY } from "@/lib/constants";

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-[#E8E8E8] last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#B8FF00] transition-colors"
      >
        <span className="text-lg font-semibold text-[#0A0A0A] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-[#2B2B2B] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[#2B2B2B] leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#B8FF00] text-[#0A0A0A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A] mb-4">
            {COPY.faq.title}
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="bg-white border-2 border-[#F7F9FB] rounded-3xl p-6 md:p-8">
          {COPY.faq.items.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
