"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
  const heroRef = useRef<HTMLElement>(null)
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection || typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingButton(!entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <main
        ref={heroRef}
        className={`absolute bottom-8 z-20 max-w-lg ${isArabic ? "right-8 text-right" : "left-8 text-left"}`}
      >
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
            <button
              type="button"
              onClick={open}
              className={`px-8 py-3 rounded-full bg-white text-[#1a0503] font-normal text-xs transition-all duration-200 hover:bg-white/90 shadow-[0_12px_25px_-18px_rgba(0,0,0,0.45)] ${
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
        aria-label={copy.talkToAI}
        className={`group fixed bottom-6 md:bottom-10 z-40 flex items-center justify-center rounded-full border border-transparent bg-transparent p-2 text-xs transition-all duration-300 ease-out hover:translate-y-[-4px] cursor-pointer ${
          isArabic ? "left-12 md:left-20" : "right-12 md:right-20"
        } ${showFloatingButton ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"}`}
        aria-hidden={!showFloatingButton}
      >
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
            <span className="pointer-events-none absolute inset-x-4 bottom-0 h-3 rounded-full bg-[#c08474]/30 blur-md" aria-hidden="true" />
            <span className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute -left-2 h-10 w-3 rounded-[18px] bg-[#2f1a18]/50 shadow-[0_12px_20px_-12px_rgba(0,0,0,0.8)]" aria-hidden="true" />
              <span className="absolute -right-2 h-10 w-3 rounded-[18px] bg-[#1a0d0c] shadow-[0_12px_20px_-12px_rgba(0,0,0,0.8)]" aria-hidden="true" />
              <span className="absolute -top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#110807] shadow-[0_10px_18px_-12px_rgba(0,0,0,0.8)]" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              </span>
              <span className="absolute inset-0 rounded-[26px] bg-gradient-to-b from-[#ffe6d5] via-[#f4a891] to-[#c85f54] shadow-[0_35px_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_45px_70px_-35px_rgba(0,0,0,0.9)]" aria-hidden="true" />
              <span className="absolute inset-[3px] rounded-[22px] bg-gradient-to-b from-[#fff9f4] to-[#f7c6b6] shadow-inner transition-transform duration-300 group-hover:-translate-y-[0.5px]" aria-hidden="true" />
              <span className="relative z-10 flex flex-col items-center gap-2">
                <span className="flex gap-2">
                  <span className="h-2.5 w-4 rounded-full bg-gradient-to-b from-[#fff7cb] to-[#f5b768] shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                  <span className="h-2.5 w-4 rounded-full bg-gradient-to-b from-[#fff7cb] to-[#f5b768] shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                </span>
                <span className="h-1 w-6 rounded-full bg-[#a54d45]/50" />
              </span>
            </span>
            <span className="mt-3 h-7 w-12 rounded-[999px] bg-gradient-to-b from-[#f6b0a1] to-[#d66457] shadow-[0_25px_35px_-25px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:translate-y-1 group-hover:scale-95" />
          </span>
        </span>
      </button>
    </>
  )
}
