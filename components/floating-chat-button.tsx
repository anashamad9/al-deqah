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
    <span
      className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#fff5ef] via-white to-[#f4d9cd] shadow-[0_20px_40px_-28px_rgba(12,8,5,0.9)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(12,8,5,0.8)]`}
    >
      <span className="absolute -top-1 flex h-2 w-4 items-center justify-between">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-[#2b1c19] to-[#0c0503]" />
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-[#2b1c19] to-[#0c0503]" />
      </span>
      <span className="absolute -top-3 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gradient-to-b from-[#ffceb9] to-[#f29a7c] shadow-[0_4px_8px_rgba(0,0,0,0.15)]" />
      <span className="relative flex h-8 w-8 flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white via-[#ffe4d7] to-[#f7c0a5] text-[#1b0b08]">
        <span className="flex w-full justify-between px-2">
          <span className="h-1.5 w-2 rounded-full bg-[#ffd26f] shadow-[0_0_6px_rgba(255,210,111,0.8)]" />
          <span className="h-1.5 w-2 rounded-full bg-[#ffd26f] shadow-[0_0_6px_rgba(255,210,111,0.8)]" />
        </span>
        <span className="mt-2 h-0.5 w-3 rounded-full bg-[#b56a58]" />
      </span>
      <span
        className={`absolute -right-1 flex h-3 w-2 rounded-full bg-[#22120f] shadow-[0_4px_8px_rgba(0,0,0,0.2)] ${
          isArabic ? "hidden" : ""
        }`}
      />
      <span
        className={`absolute -left-1 flex h-3 w-2 rounded-full bg-[#22120f] shadow-[0_4px_8px_rgba(0,0,0,0.2)] ${
          isArabic ? "" : "hidden"
        }`}
      />
      <span className="absolute -bottom-3 h-2.5 w-8 rounded-full bg-gradient-to-r from-[#fbb09a] to-[#eb7d63] shadow-[0_12px_20px_-14px_rgba(12,8,5,0.8)]" />
    </span>
  )
}
