"use client"

import { useEffect, useMemo, useRef } from "react"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import { useDeqahAI } from "@/components/deqah-ai-widget"
import type { Language } from "@/lib/i18n"
import { solutions } from "@/lib/solutions"
import { getLocalizedSolutions } from "@/lib/solutions-localized"

const COMPANY_LINKS = [
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "deqahAI", href: "/deqah-ai" },
  { key: "insights", href: "#" },
] as const

const FOOTER_COPY: Record<
  Language,
  {
    brandLabel: string
    brandTagline: string
    description: string
    ctaLabel: string
    ctaHeading: string
    ctaButton: string
    contactCard: {
      label: string
      address: string
      details: string
    }
    navTitles: {
      company: string
      solutions: string
      social: string
    }
    companyLinks: Record<(typeof COMPANY_LINKS)[number]["key"], string>
    contactItems: {
      email: string
      phone: string
      location: string
    }
    legal: {
      rights: string
      terms: string
      privacy: string
      cookies: string
    }
  }
> = {
  en: {
    brandLabel: "Al-Deqah",
    brandTagline: "Advanced Visual Technology & Intelligent Systems",
    description:
      "Fusing spatial computing, intelligent automation, and immersive design to help organizations architect transformative experiences and measurable outcomes.",
    ctaLabel: "Let's collaborate",
    ctaHeading: "Ready to prototype the next dimension of your digital experience?",
    ctaButton: "Start a project",
    contactCard: {
      label: "Headquarters",
      address: "Al-Deqah Tech, Amman - Jordan",
      details: "info@aldeqah-tech.com · +962 79 200 7354",
    },
    navTitles: {
      company: "Company",
      solutions: "Solutions",
      social: "Social",
    },
    companyLinks: {
      about: "About",
      contact: "Contact",
      deqahAI: "Al-Deqah",
      insights: "Industry Insights",
    },
    contactItems: {
      email: "info@aldeqah-tech.com",
      phone: "+962 79 200 7354",
      location: "Amman, Jordan",
    },
    legal: {
      rights: "Al-Deqah. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      cookies: "Cookies",
    },
  },
  ar: {
    brandLabel: "شركة الدقة",
    brandTagline: "حلول رقمية رائعة وأنظمة متصلة",
    description:
      "نمزج الحوسبة المكانية، والأتمتة الذكية، والتصميم الغامر لمساعدة المؤسسات على بناء تجارب تحويلية ونتائج قابلة للقياس.",
    ctaLabel: "لنتعاون",
    ctaHeading: "هل أنت مستعد لنموذج أولي للبعد التالي من تجربتك الرقمية؟",
    ctaButton: "ابدأ مشروعاً",
    contactCard: {
      label: "المقر الرئيسي",
      address: "شركة الدقة، عمّان - الأردن",
      details: "info@aldeqah-tech.com · ‎+962 79 200 7354",
    },
    navTitles: {
      company: "الشركة",
      solutions: "الحلول",
      social: "التواصل",
    },
    companyLinks: {
      about: "من نحن",
      contact: "تواصل معنا",
      deqahAI: "الدقة",
      insights: "رؤى صناعية",
    },
    contactItems: {
      email: "info@aldeqah-tech.com",
      phone: "+962 79 200 7354",
      location: "عمّان، الأردن",
    },
    legal: {
      rights: "شركة الدقة. جميع الحقوق محفوظة.",
      terms: "الشروط",
      privacy: "الخصوصية",
      cookies: "الكوكيز",
    },
  },
}

const CONTACT_ITEMS = [
  {
    key: "email",
    icon: Mail,
    href: "mailto:info@aldeqah-tech.com",
  },
  {
    key: "phone",
    icon: Phone,
    href: "tel:+962792007354",
  },
  {
    key: "location",
    icon: MapPin,
  },
] as const

function FooterNetworkOverlay({ nodes = 50 }: { nodes?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === "undefined") return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = canvas.clientWidth
    let height = canvas.clientHeight
    let linkDistance = 140
    const particles: Array<{ x: number; y: number; vx: number; vy: number }> = []

    const initParticles = () => {
      particles.length = 0
      const count = Math.max(18, Math.min(nodes, Math.round((width + height) / 22)))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        })
      }
    }

    const resize = () => {
      width = canvas.clientWidth || canvas.offsetWidth
      height = canvas.clientHeight || canvas.offsetHeight
      linkDistance = Math.min(200, Math.max(width, height) * 0.25)

      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      initParticles()
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1

        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 210, 203, 0.85)"
        ctx.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)
          if (distance < linkDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(137, 59, 46, ${0.8 - distance / (linkDistance * 1.2)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(drawFrame)
    }

    resize()
    window.addEventListener("resize", resize)
    animationId = requestAnimationFrame(drawFrame)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [nodes])

  return <canvas ref={canvasRef} aria-hidden className="network-canvas opacity-60 mix-blend-screen" />
}

export default function Footer() {
  const { language } = useLanguage()
  const copy = FOOTER_COPY[language]
  const isArabic = language === "ar"
  const { open } = useDeqahAI()
  const localizedSolutions = useMemo(() => getLocalizedSolutions(language, solutions), [language])

  return (
    <footer
      className="relative overflow-hidden bg-[#0c0805] text-white"
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-gradient-layer absolute inset-0 opacity-90" />
        <div className="hero-noise absolute inset-0 opacity-40 mix-blend-soft-light" />
        <div className="hero-glow absolute bottom-[-20%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 opacity-70" />
        <FooterNetworkOverlay nodes={48} />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,340px)_1fr]">
          <div className={`space-y-10 ${isArabic ? "text-right" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
            <div className={`space-y-6 ${isArabic ? "text-right" : ""}`}>
              <div className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse justify-end" : ""}`}>
                <div className={`${isArabic ? "order-2" : "order-1"} flex size-14 items-center justify-center rounded-full bg-white/10`}>
                  <Image src="/logo-2.png" alt="Al-Deqah logo" width={52} height={68} className="h-10 w-auto" />
                </div>
                <div
                  className={`${isArabic ? "order-1 text-right arabic" : "order-2"}`}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.35em] text-white ${isArabic ? "arabic" : ""}`}>
                    {copy.brandLabel}
                  </p>
                  <p className={`text-sm font-light text-white/70 ${isArabic ? "arabic" : ""}`}>{copy.brandTagline}</p>
                </div>
              </div>
              <p
                dir={isArabic ? "rtl" : "ltr"}
                className={`text-sm font-light text-white/70 leading-relaxed ${isArabic ? "arabic text-right" : ""}`}
              >
                {copy.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_-55px_rgba(255,255,255,0.65)] backdrop-blur">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] text-white ${isArabic ? "arabic text-right" : ""}`}
              >
                {copy.ctaLabel}
              </p>
              <h3 className={`mt-3 text-lg font-medium text-white ${isArabic ? "arabic text-right" : ""}`}>
                {copy.ctaHeading}
              </h3>
              <Link
                href="/contact"
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105 ${
                  isArabic ? "flex-row-reverse arabic" : ""
                }`}
              >
                {copy.ctaButton}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: copy.navTitles.company,
                links: COMPANY_LINKS.map((link) => ({
                  ...link,
                  label: copy.companyLinks[link.key],
                  isAI: link.key === "deqahAI",
                })),
              },
              {
                title: copy.navTitles.solutions,
                links: localizedSolutions.map((solution) => ({
                  label: solution.name,
                  href: `/solutions/${solution.slug}`,
                })),
              },
            ].map((column) => (
              <div key={column.title} className="space-y-5">
                <p
                  className={`text-xs uppercase tracking-[0.3em] text-white/40 ${isArabic ? "arabic text-right" : ""}`}
                >
                  {column.title}
                </p>
                <ul className={`space-y-3 text-sm font-light text-white/70 ${isArabic ? "text-right" : ""}`}>
                  {column.links.map((link) => {
                    const content = (
                      <>
                        <span className={isArabic ? "arabic" : ""}>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 text-[#863730]/70" />
                      </>
                    )

                    const className = `inline-flex items-center gap-2 transition-colors duration-200 hover:text-white ${
                      isArabic ? "flex-row-reverse arabic" : ""
                    }`

                    if ("isAI" in link && link.isAI) {
                      return (
                        <li key={link.label}>
                          <button type="button" onClick={open} className={className}>
                            {content}
                          </button>
                        </li>
                      )
                    }

                    if ("href" in link && typeof link.href === "string" && link.href.startsWith("/")) {
                      return (
                        <li key={link.label}>
                          <Link href={link.href} className={className}>
                            {content}
                          </Link>
                        </li>
                      )
                    }

                    return (
                      <li key={link.label}>
                        <a href={("href" in link && link.href) || "#"} className={className}>
                          {content}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            <div className="space-y-4">
              <p className={`text-xs uppercase tracking-[0.3em] text-white/40 ${isArabic ? "arabic text-right" : ""}`}>
                {copy.navTitles.social}
              </p>
              <div className={`space-y-4 text-sm text-white/80 ${isArabic ? "text-right arabic" : ""}`}>
                {[copy.contactItems.email, copy.contactItems.phone, copy.contactItems.location].map((item) => (
                  <div
                    key={item}
                    className={`text-sm hover:text-white ${isArabic ? "text-right arabic" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 border-t border-white/10 pt-8 text-xs font-light text-white/50 sm:flex sm:items-center sm:justify-between ${
            isArabic ? "sm:flex-row-reverse text-right" : ""
          }`}
        >
          <p className={isArabic ? "arabic text-right" : ""}>
            &copy; {new Date().getFullYear()} {copy.legal.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
