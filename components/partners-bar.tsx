"use client"

import type { CSSProperties } from "react"

import { useLanguage } from "@/components/language-context"

export const PARTNER_LOGOS = [
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-1-300x300-1-150x150.png",
    alt: "Kaspersky",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-2-300x300-1-150x150.png",
    alt: "Splunk",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-11-300x300-1-150x150.png",
    alt: "CyberArk",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-12-300x300-1-150x150.png",
    alt: "Lenovo",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-3-300x300-1-150x150.png",
    alt: "Microsoft",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-5-300x300-1-150x150.png",
    alt: "IBM",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-6-300x300-1-150x150.png",
    alt: "Hikvision",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-4-300x300-1-150x150.png",
    alt: "Dell",
  },
] as const

export function PartnersBar() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const trackClass = "flex flex-none items-center gap-20"
  const animationDuration = 24
  const heading = isArabic
    ? { prefix: "شركاؤنا", accent: "التقنيون" }
    : { prefix: "Our Tech", accent: "Partners" }
  const blurb = isArabic
    ? "نسعى لبناء منظومة شراكات تعزز حلولنا وتتيح لنا تقديم قيمة أسرع لعملائنا."
    : "We co-create with leading vendors to deliver secure, future-ready experiences."

  return (
    <section className="relative z-20 border-y border-black/[0.05] bg-white/95 py-10 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <div className={`space-y-4 text-center ${isArabic ? "arabic" : ""}`}>
          <h2 className="text-4xl font-light text-neutral-900 md:text-5xl">
            {heading.prefix} <span className="font-medium text-[#863730]">{heading.accent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-light text-gray-600">{blurb}</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className={`flex ${isArabic ? "flex-row-reverse" : ""}`}>
            <div
              className={`${trackClass} animate-marquee`}
              style={
                {
                  animationDuration: `${animationDuration}s`,
                  "--marquee-duration": `${animationDuration}s`,
                } as CSSProperties
              }
            >
              {PARTNER_LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className="group flex h-20 w-40 flex-none items-center justify-center overflow-hidden rounded-3xl bg-white/90 px-6 py-4 shadow-[0_18px_40px_-35px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.04]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="max-h-12 w-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              ))}
            </div>
            <div
              className={`${trackClass} animate-marquee`}
              style={
                {
                  animationDuration: `${animationDuration}s`,
                  "--marquee-duration": `${animationDuration}s`,
                } as CSSProperties
              }
              aria-hidden
            >
              {PARTNER_LOGOS.map((logo) => (
                <div
                  key={`${logo.src}-duplicate`}
                  className="group flex h-20 w-40 flex-none items-center justify-center overflow-hidden rounded-3xl bg-white/90 px-6 py-4 shadow-[0_18px_40px_-35px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.04]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="max-h-12 w-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee-left var(--marquee-duration, 24s) linear infinite;
        }
      `}</style>
    </section>
  )
}
