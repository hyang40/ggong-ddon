"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] p-8 pb-12">
                    {/* Neon Glow Background Effect */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B8FF00] blur-[100px]" />
                    </div>
                    
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-[#B8FF00]/20 rounded-full transition-colors backdrop-blur-sm z-10"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>

                    <div className="relative text-center space-y-4 z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B8FF00] rounded-full mb-2 shadow-[0_0_30px_rgba(184,255,0,0.5)]">
                        <span className="text-4xl transform rotate-90 text-[#0A0A0A] font-black">∞</span>
                      </div>
                      <h2 className="text-4xl font-black text-white">
                        사전 신청하기
                      </h2>
                      <p className="text-[#D1D5DB] text-lg">
                        출시 알림과 특별 혜택을 가장 먼저 받아보세요
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="p-8 -mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                            이메일 주소
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2B2B2B]" />
                            <input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your@email.com"
                              className="w-full pl-12 pr-4 py-3 bg-[#F7F9FB] border-2 border-transparent focus:border-[#B8FF00] rounded-xl text-[#0A0A0A] placeholder:text-[#2B2B2B]/50 outline-none transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-[#2B2B2B]">
                            <Sparkles className="w-4 h-4 text-[#B8FF00]" />
                            <span>런칭 특별 할인 50% (선착순 100명)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#2B2B2B]">
                            <Sparkles className="w-4 h-4 text-[#B8FF00]" />
                            <span>프리미엄 기능 1개월 무료 체험</span>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#0A0A0A] text-[#B8FF00] font-semibold rounded-xl hover:bg-[#2B2B2B] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-[#B8FF00] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            신청하기
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-center text-[#2B2B2B]/70">
                        신청하시면 개인정보처리방침에 동의하는 것으로 간주됩니다
                      </p>
                    </form>
                  </div>
                </>
              ) : (
                // Success State
                <div className="p-12 text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="inline-flex items-center justify-center w-28 h-28 bg-[#B8FF00] rounded-full shadow-[0_0_40px_rgba(184,255,0,0.5)]"
                  >
                    <Sparkles className="w-14 h-14 text-[#0A0A0A]" />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-[#0A0A0A]">
                      신청 완료! 🎉
                    </h3>
                    <p className="text-[#4A5060] text-lg leading-relaxed">
                      <span className="font-black text-[#0A0A0A]">{email}</span>로<br />
                      출시 소식을 보내드릴게요
                    </p>
                  </div>

                  <div className="bg-[#E3FFA3] text-[#0A0A0A] px-6 py-4 rounded-2xl text-base font-bold shadow-sm">
                    잠시 후 자동으로 닫힙니다...
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
