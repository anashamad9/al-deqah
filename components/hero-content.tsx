"use client"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { useDeqahAI } from "@/components/deqah-ai-widget"

const HERO_COPY: Record<
  Language,
  {
    badge: string
    heading: string
    description: string
    bookMeeting: string
    talkToAI: string
  }
> = {
  en: {
    badge: "✨ New look to our website",
    heading: "Empowering the Future with Industry 4.0 Technologies",
    description: "Al-Deqah-Tech delivers cutting-edge solutions in Cybersecurity, AI, XR, IoT.",
    bookMeeting: "Book a meeting",
    talkToAI: "Talk to AI",
  },
  ar: {
    badge: "✨ تجربة جديدة لموقعنا",
    heading: "تمكين المستقبل بتقنيات الثورة الصناعية الرابعة",
    description: "توفر الدقة تك حلولاً متقدمة في الأمن السيبراني والذكاء الاصطناعي والواقع الممتد وإنترنت الأشياء.",
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
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent rounded-full" />
          <span className={`text-neutral-800 text-xs font-light relative z-10 ${isArabic ? "arabic" : ""}`}>
            {copy.badge}
          </span>
        </div>

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
          <a
            href="mailto:info@aldeqah-tech.com"
            className={`px-8 py-3 rounded-full bg-transparent border border-neutral-900/20 text-neutral-900 font-normal text-xs transition-all duration-200 hover:bg-neutral-900/5 hover:border-neutral-900/40 cursor-pointer ${
              isArabic ? "arabic" : ""
            }`}
          >
            {copy.bookMeeting}
          </a>
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
