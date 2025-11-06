"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { COPY } from "@/lib/constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1f2937] to-[#0a0a0a] text-white overflow-hidden">
      {/* 배경 글로우 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a78bfa] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6ee7b7] rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* 좌측: 브랜드 & 뉴스레터 */}
          <div className="space-y-8">
            {/* 로고 */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#a78bfa] to-[#6ee7b7] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black">꽁</span>
              </div>
              <span className="text-2xl font-black">GGong DDon</span>
            </div>

            <p className="text-[#d1d5db] leading-relaxed max-w-md">
              긍정 강화로 소비 습관을 바꾸는 AI 재정 코칭 앱.
              충동을 참은 순간, 돈이 생깁니다.
            </p>

            {/* 뉴스레터 */}
            <div>
              <h3 className="text-lg font-black mb-4">{COPY.footer.newsletter.title}</h3>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={COPY.footer.newsletter.placeholder}
                    className="w-full pl-12 pr-4 py-3 bg-[#374151] border-2 border-[#4b5563] rounded-xl text-white placeholder:text-[#9ca3af] focus:border-[#a78bfa] outline-none transition-colors"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#a78bfa] to-[#6ee7b7] rounded-xl font-bold flex items-center gap-2 shadow-lg"
                >
                  {isSubmitted ? "✓" : <Send className="w-5 h-5" />}
                </motion.button>
              </form>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#6ee7b7] text-sm mt-2 font-semibold"
                >
                  구독 완료! 출시 소식을 보내드릴게요 ✨
                </motion.p>
              )}
            </div>
          </div>

          {/* 우측: 링크 */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black mb-4">서비스</h3>
              <ul className="space-y-3">
                {COPY.footer.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#d1d5db] hover:text-[#a78bfa] transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-black mb-4">소셜</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[#d1d5db] hover:text-[#a78bfa] transition-colors font-medium">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d1d5db] hover:text-[#a78bfa] transition-colors font-medium">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d1d5db] hover:text-[#a78bfa] transition-colors font-medium">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 */}
        <div className="pt-8 border-t border-[#374151] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9ca3af] text-sm">{COPY.footer.copyright}</p>
          <div className="flex gap-4 text-sm text-[#9ca3af]">
            <span>Made with 💜 & 💚</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
