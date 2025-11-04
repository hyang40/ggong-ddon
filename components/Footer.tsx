"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { COPY } from "@/lib/constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple email validation
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">
                <span className="inline-block transform rotate-90 text-[#B8FF00]">∞</span>
              </div>
              <span className="text-xl font-bold">
                GGong DDon <span className="text-gray-400 font-normal text-sm">(꽁돈)</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              {COPY.footer.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#2B2B2B] hover:bg-[#B8FF00] rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-[#0A0A0A] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-bold">{COPY.footer.newsletter.title}</h3>
            <p className="text-gray-400 text-sm">
              꽁돈 절약 팁과 새로운 기능을 가장 먼저 받아보세요
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={COPY.footer.newsletter.placeholder}
                  className="flex-1 px-4 py-3 bg-[#2B2B2B] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B8FF00] placeholder:text-gray-500"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-[#B8FF00] text-[#0A0A0A] font-semibold rounded-xl hover:bg-[#D9FF66] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">{COPY.footer.newsletter.button}</span>
                </motion.button>
              </div>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#B8FF00] text-sm flex items-center gap-2"
                >
                  <div className="w-5 h-5 bg-[#B8FF00] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-[#0A0A0A]" />
                  </div>
                  구독이 완료되었습니다!
                </motion.div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2B2B2B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#B8FF00] transition-colors">
              {COPY.footer.links.terms}
            </a>
            <a href="#" className="hover:text-[#B8FF00] transition-colors">
              {COPY.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-[#B8FF00] transition-colors">
              {COPY.footer.links.contact}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            {COPY.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
