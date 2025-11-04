"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" },
    { label: "B2B", href: "#b2b" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="text-2xl font-bold">
              <span className="inline-block transform rotate-90 text-[#B8FF00] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(184,255,0,0.6)] transition-all">
                ∞
              </span>
            </div>
            <span className="text-xl font-black text-[#0A0A0A]">
              GGong DDon
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-5 py-2.5 text-[#6B7280] hover:text-[#0A0A0A] hover:bg-[#F5F5F5] font-bold rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(184, 255, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-[#B8FF00] text-[#0A0A0A] font-black rounded-xl hover:bg-[#D9FF66] transition-all shadow-[0_4px_16px_rgba(184,255,0,0.3)] ml-2"
            >
              사전 신청
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-[#0A0A0A] hover:bg-[#F5F5F5] rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-white md:hidden"
        >
          <div className="pt-20 px-6 space-y-4">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block text-2xl font-black text-[#0A0A0A] hover:text-[#B8FF00] transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full py-5 bg-[#B8FF00] text-[#0A0A0A] font-black text-lg rounded-2xl hover:bg-[#D9FF66] transition-all shadow-lg"
            >
              사전 신청하기
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
