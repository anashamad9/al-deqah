"use client"

import { useEffect, useState } from "react"

import { useLanguage } from "@/components/language-context"
import { useDeqahAI } from "@/components/deqah-ai-widget"
import { cn } from "@/lib/utils"

export default function FloatingChatButton() {
  const { language } = useLanguage()
  const { open } = useDeqahAI()
  const isArabic = language === "ar"
  const label = isArabic ? "افتح مساعد الدقة" : "Open Al-Deqah AI"
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero-section")
    if (!hero) {
      setIsPastHero(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const heroOutOfView = entry.boundingClientRect.top <= 0 && entry.intersectionRatio <= 0.2
        setIsPastHero(heroOutOfView)
      },
      { threshold: [0, 0.2, 0.5, 1] }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <button
      type="button"
      onClick={open}
      aria-label={label}
      className={cn(
        "group fixed bottom-5 z-50 flex items-center justify-center rounded-full border border-white/10 bg-[#1a0503]/60 p-2 text-xs text-white shadow-[0_18px_45px_-28px_rgba(0,0,0,0.85)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.05] hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7b289]/60 sm:bottom-7",
        isArabic ? "left-5 sm:left-8" : "right-5 sm:right-8",
        isPastHero ? "opacity-100" : "pointer-events-none opacity-0 translate-y-3"
      )}
    >
      <span className="sr-only">{label}</span>
      <AIButtonIcon />
    </button>
  )
}

export function AIButtonIcon({ size = "md" }: { size?: "md" | "lg" }) {
  const dimension = size === "lg" ? "h-16 w-16" : "h-14 w-14"
  const textSizing = size === "lg" ? "tracking-[0.3em] text-[0.95rem]" : "tracking-[0.4em] text-[0.8rem]"

  return (
    <span className={cn("relative inline-flex items-center justify-center", dimension)}>
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-[#5d1f14] via-[#a3492d] to-[#f0a768] opacity-80 blur-xl"
        style={{ animation: "aiGlow 5s ease-in-out infinite" }}
      />
      <span
        className="pointer-events-none absolute inset-[2px] rounded-full border border-[#fde3d0]/50"
        style={{ animation: "aiPulse 3.5s ease-in-out infinite" }}
      />
      <span
        className="pointer-events-none absolute inset-[-8px] rounded-full border border-[#ffceb1]/25"
        style={{ animation: "aiRingPulse 4.8s ease-in-out infinite", transformOrigin: "50% 50%" }}
      />
      <span
        className="pointer-events-none absolute inset-[-14px] rounded-full border border-[#c66c45]/30"
        style={{
          animation: "aiRingPulse 6.4s ease-in-out infinite",
          animationDelay: "1.3s",
          transformOrigin: "50% 50%",
        }}
      />
      <span
        className="pointer-events-none absolute inset-[-6px] rounded-full border border-[#7a3823]/45"
        style={{ animation: "aiOrbit 7s linear infinite" }}
      />
      <span className="pointer-events-none absolute inset-[6px] rounded-full bg-gradient-to-br from-[#31130d] via-[#572013] to-[#8c341d]" />
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-70"
        style={{ animation: "aiSweep 6s ease-in-out infinite" }}
      />
      <span
        className="pointer-events-none absolute inset-[9px] rounded-full bg-gradient-to-b from-transparent via-[#ffd8b7]/35 to-transparent opacity-0"
        style={{ animation: "aiScan 5.2s linear infinite" }}
      />
      <span className="pointer-events-none absolute inset-[12px] rounded-full border border-white/10" />
      <span
        className={cn(
          "relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#4b1911] via-[#7c2b1a] to-[#bb4b24] font-semibold uppercase text-white shadow-[0_14px_30px_-22px_rgba(0,0,0,0.9)]",
          dimension,
          textSizing
        )}
      >
        <span className="relative drop-shadow-[0_0_10px_rgba(250,214,189,0.55)]">
          <span className="absolute inset-x-0 -top-1 block h-[1px] bg-gradient-to-r from-transparent via-[#ffe4d0]/80 to-transparent opacity-80" />
          AI
          <span className="absolute inset-x-0 -bottom-1 block h-[1px] bg-gradient-to-r from-transparent via-[#f9c89f]/60 to-transparent opacity-70" />
        </span>
      </span>
      <span className="pointer-events-none absolute inset-1 rounded-full border border-white/12" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="absolute inset-0"
          style={{ animation: "aiOrbitDot 6s linear infinite", transformOrigin: "50% 50%" }}
        >
          <span className="absolute left-1/2 -top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ffe5c9] shadow-[0_0_12px_rgba(255,229,201,0.8)]" />
        </span>
      </span>
    </span>
  )
}
