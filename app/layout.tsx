import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GGong DDon — 긍정적 소비 습관",
  description: "충동을 참은 순간, 돈이 생긴다. AI가 '긍정적 소비 습관'을 재형성합니다. 후회 대신 '오늘의 꽁돈' 기록이 쌓입니다.",
  keywords: ["꽁돈", "절약", "소비습관", "AI코칭", "재정관리", "충동구매"],
  openGraph: {
    title: "GGong DDon — 긍정적 소비 습관",
    description: "충동을 참은 순간, 돈이 생긴다. AI가 '긍정적 소비 습관'을 재형성합니다.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GGong DDon — 긍정적 소비 습관",
    description: "충동을 참은 순간, 돈이 생긴다. AI가 '긍정적 소비 습관'을 재형성합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
