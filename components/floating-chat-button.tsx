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
      className={`group fixed bottom-5 z-50 flex items-center justify-center rounded-full border border-transparent bg-transparent text-xs transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] sm:bottom-7 ${
        isArabic ? "left-5 sm:left-8" : "right-5 sm:right-8"
      }`}
    >
      <span className="sr-only">{label}</span>
      <MiniBot />
    </button>
  )
}

function MiniBot() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_10px_24px_rgba(134,55,48,0.35)]">
      <span className="absolute bottom-1.5 h-2 w-7 rounded-full bg-[#3d2019]/25 blur-[2px]" />
      <span className="relative flex h-11 w-11 items-center justify-center">
        <span className="absolute inset-0 rounded-[16px] bg-[#863730] shadow-[0_16px_28px_-18px_rgba(134,55,48,0.8)]" />
        <span className="absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-1 rotate-45 rounded-[4px] bg-[#863730]" />
        <span className="relative mt-1 flex h-4 w-7 items-start justify-center overflow-hidden">
          <span className="absolute -top-2 h-6 w-7 rounded-full bg-white" />
        </span>
      </span>
    </span>
  )
}
