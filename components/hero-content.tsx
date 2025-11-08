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
    servicesCta: string
  }
> = {
  en: {
    heading: "Empowering the Future with Industry 4.0 Technologies",
    description: "Al-Deqah-Tech delivers cutting-edge solutions in Cybersecurity, AI, XR, IoT.",
    bookMeeting: "Book a meeting",
    talkToAI: "Talk to AI",
    servicesCta: "Our Services",
  },
  ar: {
    heading: "تمكين المستقبل بتقنيات الثورة الصناعية الرابعة",
    description: "توفر شركة الدقة حلولاً متقدمة في الأمن السيبراني والذكاء الاصطناعي والواقع الممتد وإنترنت الأشياء.",
    bookMeeting: "احجز اجتماعاً",
    talkToAI: "تحدث مع الذكاء الاصطناعي",
    servicesCta: "خدماتنا",
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
            className={`text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4 ${
              isArabic ? "arabic leading-snug md:text-5xl" : ""
            }`}
          >
            {copy.heading}
          </h1>

          {/* Description */}
          <p className={`text-xs font-light text-white/80 mb-4 leading-relaxed ${isArabic ? "arabic" : ""}`}>
            {copy.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-full bg-transparent border border-white/40 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/60 cursor-pointer ${
                isArabic ? "arabic" : ""
              }`}
            >
              {copy.bookMeeting}
            </Link>
            <Link
              href="/services"
              className={`px-8 py-3 rounded-full bg-white text-[#1a0503] font-normal text-xs transition-all duration-200 hover:bg-white/90 shadow-[0_12px_25px_-18px_rgba(0,0,0,0.45)] ${
                isArabic ? "arabic" : ""
              }`}
            >
              {copy.servicesCta}
            </Link>
          </div>
        </div>
      </main>

      <button
        type="button"
        onClick={open}
        className={`group fixed bottom-6 md:bottom-10 z-40 flex items-center gap-3 rounded-full border border-[#f6d9ce] bg-white/85 px-4 py-2 text-xs font-medium text-neutral-900 shadow-[0_25px_45px_-30px_rgba(0,0,0,0.4)] backdrop-blur transition-all duration-200 hover:translate-y-[-2px] hover:bg-white ${
          isArabic ? "left-6 md:left-10 arabic flex-row-reverse" : "right-6 md:right-10"
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
