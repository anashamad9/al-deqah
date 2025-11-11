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
      <span className="relative flex flex-col items-center">
        <MiniBot isArabic={isArabic} />
        <span
          className={`mt-2 rounded-full bg-[#0c0805] px-3 py-1 text-[10px] font-medium text-white shadow-[0_10px_30px_-20px_rgba(12,8,5,0.9)] ${
            isArabic ? "arabic" : "uppercase tracking-[0.25em]"
          }`}
        >
          {label}
        </span>
      </span>
    </button>
  )
}

function MiniBot({ isArabic }: { isArabic: boolean }) {
  return (
    <span className="relative flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
      <span className="absolute bottom-0 h-2 w-8 rounded-full bg-black/10 blur-[2px]" />
      <span className="relative flex h-12 w-12 flex-col items-center justify-end rounded-full bg-gradient-to-br from-white via-[#fff6f0] to-[#f5e3d7] shadow-[0_15px_35px_-20px_rgba(27,14,10,0.55)]">
        <span className="absolute -top-1 h-3 w-3 rounded-full bg-gradient-to-b from-white to-[#f8dccc] shadow-[0_4px_8px_rgba(27,14,10,0.2)]" />
        <span className="absolute -top-3 h-3 w-0.5 rounded-full bg-[#c9a089]" />
        <span className="absolute -top-3 right-3 h-1 w-1 rounded-full bg-[#c9a089]" />
        <span className="absolute -top-3 left-3 h-1 w-1 rounded-full bg-[#c9a089]" />
        <span className="relative flex h-7 w-9 flex-col items-center justify-center rounded-[18px] border border-white/60 bg-gradient-to-b from-white via-[#fceae1] to-[#f2d2c0] shadow-[inset_0_-4px_10px_rgba(0,0,0,0.08)]">
          <span className="absolute inset-1 rounded-[15px] bg-gradient-to-b from-[#c6724f] via-[#a14b35] to-[#6c261a]" />
          <span className="relative flex w-full justify-around px-2">
            <span className="h-1.5 w-2 rounded-full bg-[#ffe0c8] opacity-90" />
            <span className="h-1.5 w-2 rounded-full bg-[#ffe0c8] opacity-90" />
          </span>
          <span className="relative mt-2 h-0.5 w-3 rounded-full bg-[#f6b699]" />
        </span>
        <span className="relative mt-1 h-7 w-10 rounded-full border border-white/60 bg-gradient-to-b from-white via-[#fdeee5] to-[#f1d5c1] shadow-[inset_0_-6px_12px_rgba(0,0,0,0.08)]" />
        <span className="absolute left-1 h-3 w-3 rounded-full bg-gradient-to-b from-white to-[#f2d9c8] shadow-[0_4px_8px_rgba(27,14,10,0.18)]" />
        <span className="absolute right-1 h-3 w-3 rounded-full bg-gradient-to-b from-white to-[#f2d9c8] shadow-[0_4px_8px_rgba(27,14,10,0.18)]" />
      </span>
      <span
        className={`absolute top-0 flex h-8 w-10 items-center rounded-[16px] border border-white/60 bg-gradient-to-tr from-[#c98362] via-[#a9563e] to-[#7b2d1f] p-1 text-white shadow-[0_20px_35px_-24px_rgba(134,55,48,0.6)] ${
          isArabic ? "-left-8 origin-right rotate-[8deg]" : "-right-8 origin-left -rotate-[8deg]"
        }`}
      >
        <span className="flex h-full w-full flex-col justify-center gap-1 rounded-[12px] bg-white/20">
          <span className="h-1.5 w-4 rounded-full bg-white/85" />
          <span className="h-1.5 w-3 rounded-full bg-white/65" />
        </span>
      </span>
    </span>
  )
}
