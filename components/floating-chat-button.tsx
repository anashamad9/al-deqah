"use client"

import { useLanguage } from "@/components/language-context"
import { useDeqahAI } from "@/components/deqah-ai-widget"

export default function FloatingChatButton() {
  const { language } = useLanguage()
  const { open } = useDeqahAI()
  const isArabic = language === "ar"
  const label = isArabic ? "تحدث مع الذكاء الاصطناعي" : "Talk to AI"

  return (
    <button
      type="button"
      onClick={open}
      aria-label={label}
      className={`group fixed bottom-6 z-50 flex items-center justify-center rounded-full border border-transparent bg-transparent p-1.5 text-xs transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:bottom-8 ${
        isArabic ? "left-5 sm:left-8" : "right-5 sm:right-8"
      }`}
    >
      <span className="relative flex flex-col items-center">
        <span className="scale-[0.78] origin-bottom sm:scale-[0.85]">
          <span className="relative flex w-20 flex-col items-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.05]">
            <span
              className={`pointer-events-none absolute -top-1 flex h-10 w-14 items-center justify-center rounded-[26px] bg-gradient-to-b from-[#ffbda9] to-[#f17166] text-[9px] font-semibold text-white shadow-[0_18px_35px_-22px_rgba(0,0,0,0.9)] ${
                isArabic ? "-left-20" : "-right-20"
              }`}
              aria-hidden="true"
            >
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-white/85" />
                <span className="h-2 w-2 rounded-full bg-white/85" />
                <span className="h-2 w-2 rounded-full bg-white/85" />
              </span>
            </span>
            <span className="relative flex flex-col items-center pt-2">
              <span
                className="pointer-events-none absolute inset-x-4 bottom-0 h-3 rounded-full bg-[#c08474]/30 blur-md"
                aria-hidden="true"
              />
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span
                  className="absolute -left-2 h-10 w-3 rounded-[18px] bg-[#2f1a18]/50 shadow-[0_12px_20px_-12px_rgba(0,0,0,0.8)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute -right-2 h-10 w-3 rounded-[18px] bg-[#1a0d0c] shadow-[0_12px_20px_-12px_rgba(0,0,0,0.8)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute -top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#110807] shadow-[0_10px_18px_-12px_rgba(0,0,0,0.8)]"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                </span>
                <span className="absolute inset-0 rounded-[26px] bg-gradient-to-b from-[#ffe6d5] via-[#f4a891] to-[#c85f54] shadow-[0_35px_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_45px_70px_-35px_rgba(0,0,0,0.9)]" />
                <span className="absolute inset-[3px] rounded-[22px] bg-gradient-to-b from-[#fff9f4] to-[#f7c6b6] shadow-inner transition-transform duration-300 group-hover:-translate-y-[0.5px]" />
                <span className="relative z-10 flex flex-col items-center gap-2">
                  <span className="flex gap-2">
                    <span className="h-2 w-3 rounded-full bg-gradient-to-b from-[#fff7cb] to-[#f5b768] shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                    <span className="h-2 w-3 rounded-full bg-gradient-to-b from-[#fff7cb] to-[#f5b768] shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                  </span>
                  <span className="h-1 w-6 rounded-full bg-[#a54d45]/50" />
                </span>
              </span>
              <span className="mt-2 h-6 w-10 rounded-[999px] bg-gradient-to-b from-[#f6b0a1] to-[#d66457] shadow-[0_20px_30px_-22px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:translate-y-1 group-hover:scale-95" />
            </span>
          </span>
        </span>
      </span>
    </button>
  )
}
