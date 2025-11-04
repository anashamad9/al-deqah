"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { useDeqahAI } from "@/components/deqah-ai-widget"

const HERO_COPY: Record<
  Language,
  {
    heading: string
    description: string
    bookMeeting: string
    talkToAI: string
  }
> = {
  en: {
    heading: "Empowering the Future with Industry 4.0 Technologies",
    description: "Al-Deqah-Tech delivers cutting-edge solutions in Cybersecurity, AI, XR, IoT.",
    bookMeeting: "Book a meeting",
    talkToAI: "Talk to AI",
  },
  ar: {
    heading: "تمكين المستقبل بتقنيات الثورة الصناعية الرابعة",
    description: "توفر شركة الدقة حلولاً متقدمة في الأمن السيبراني والذكاء الاصطناعي والواقع الممتد وإنترنت الأشياء.",
    bookMeeting: "احجز اجتماعاً",
    talkToAI: "تحدث مع الذكاء الاصطناعي",
  },
}

export default function HeroContent() {
  const { language } = useLanguage()
  const copy = HERO_COPY[language]
  const isArabic = language === "ar"
  const { open } = useDeqahAI()

  return (
    <>
      <main className={`absolute bottom-8 z-20 max-w-lg ${isArabic ? "right-8 text-right" : "left-8 text-left"}`}>
        <div className={isArabic ? "text-right space-y-0" : "text-left"}>
          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-neutral-950 mb-4 ${
              isArabic ? "arabic leading-snug md:text-5xl" : ""
            }`}
          >
            {copy.heading}
          </h1>

          {/* Description */}
          <p className={`text-xs font-light text-neutral-700 mb-4 leading-relaxed ${isArabic ? "arabic" : ""}`}>
            {copy.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-full bg-transparent border border-neutral-900/20 text-neutral-900 font-normal text-xs transition-all duration-200 hover:bg-neutral-900/5 hover:border-neutral-900/40 cursor-pointer ${
                isArabic ? "arabic" : ""
              }`}
            >
              {copy.bookMeeting}
            </Link>
            <button
              type="button"
              onClick={open}
              className={`px-8 py-3 rounded-full bg-black text-white font-normal text-xs transition-all duration-200 hover:bg-black/80 ${
                isArabic ? "arabic" : ""
              }`}
            >
              {copy.talkToAI}
            </button>
          </div>
        </div>
      </main>

      <button
        type="button"
        onClick={open}
        className={`group absolute bottom-12 z-30 flex items-center gap-3 rounded-full border border-white/20 bg-white/80 px-4 py-2 text-xs font-medium text-neutral-900 shadow-[0_25px_45px_-30px_rgba(0,0,0,0.4)] backdrop-blur transition-all duration-200 hover:translate-y-[-2px] hover:bg-white ${
          isArabic ? "left-8 arabic flex-row-reverse" : "right-8"
        }`}
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#863730] text-white shadow-[0_10px_25px_-18px_rgba(134,55,48,0.65)]">
          <span className="absolute inset-0 rounded-full bg-[#863730] opacity-60 blur-sm" />
          <Sparkles className="relative h-5 w-5" />
        </span>
        <span className={`relative ${isArabic ? "text-right arabic" : "text-left"}`}>
          <span
            className={`block text-[11px] text-neutral-500 ${
              isArabic ? "arabic font-normal" : "uppercase tracking-[0.28em]"
            }`}
          >
            {isArabic ? "ابدأ" : "Start"}
          </span>
          <span className={`block text-sm font-medium text-neutral-900 ${isArabic ? "arabic" : ""}`}>
            {copy.talkToAI}
          </span>
        </span>
      </button>
    </>
  )
}
