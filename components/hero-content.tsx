"use client"

import Link from "next/link"

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
    <main
      className={`absolute bottom-8 z-20 max-w-lg ${isArabic ? "right-8 text-right" : "left-8 text-left"}`}
    >
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
  )
}
