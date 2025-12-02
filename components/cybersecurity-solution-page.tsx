"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { HexagonBackground } from "@/components/ui/shadcn-io/hexagon-background"
import { useLanguage } from "@/components/language-context"
import type { Solution } from "@/lib/solutions"
import { getLocalizedSolution } from "@/lib/solutions-localized"

const CYBER_VIDEO_SRC = "/new%20vid.mp4"
const CYBER_VIDEO_POSTER = "/tech-company.jpg"

const CYBER_COPY = {
  en: {
    backLabel: "Back to solutions",
    heroLead: "Cybersecurity & Threat Intelligence",
    heroSupport:
      "We safeguard your digital operations through continuous monitoring, proactive threat hunting, and tailored incident readiness.",
    heroSubline:
      "We protect your digital business by detecting threats early and anticipating attacks with integrated cybersecurity and threat intelligence solutions.",
    heroContactCta: "Contact us",
    heroSecurityCta: "Request a security assessment",
    overview: {
      kicker: "Executive brief",
      title: "Holistic cyber resilience with regional context",
      lead:
        "We deliver integrated cybersecurity and threat intelligence capabilities that shield critical data, assets, and identities.",
      paragraphs: [
        "We combine advanced technologies with 24/7 expert teams who monitor, analyze, and respond to threats in real time.",
        "Cybersecurity is a strategic necessity—so we craft proactive protection programs that blend technology, process, and human expertise to maintain trust and availability.",
      ],
    },
    services: {
      title: "Strategic services",
      intro:
        "From adversary emulation to cloud-native defenses, every service is orchestrated to give security leaders actionable visibility and decisive response paths.",
      items: [
        {
          title: "Penetration Testing",
          description:
            "Simulated attacks uncover weaknesses across applications, APIs, and infrastructure before adversaries exploit them. Each engagement ships with prioritized remediation plans aligned with global standards.",
        },
        {
          title: "Threat Intelligence",
          description:
            "Multi-source intelligence collection and analysis expose campaigns targeting your sector. We correlate global trends with local telemetry so teams can deploy preventive controls faster.",
        },
        {
          title: "Incident Response & Digital Forensics",
          description:
            "Specialized responders contain incidents, analyze root causes, and collect admissible digital evidence. Post-incident reports highlight recovery roadmaps and future hardening priorities.",
        },
        {
          title: "Security Operations Center (SOC)",
          description:
            "Managed and SaaS SOC models deliver 24/7 monitoring, AI-assisted analytics, and orchestrated response actions—without forcing heavy infrastructure investments.",
        },
        {
          title: "Risk & Compliance",
          description:
            "Enterprise-wide risk assessments benchmark controls against ISO 27001, NIST, and local regulations. We map procedural gaps and guide remediation to strengthen stakeholder trust.",
        },
        {
          title: "Cloud Security",
          description:
            "Cloud posture reviews, hardening guides, and policy-as-code guardrails protect workloads on AWS, Azure, and Google Cloud with encryption, monitoring, and least-privilege access.",
        },
        {
          title: "Cybersecurity Consulting",
          description:
            "Advisory services help define security strategies, governance models, and investment roadmaps tailored to business outcomes and regulatory expectations.",
        },
        {
          title: "Training & Capacity Building",
          description:
            "Certified programs and immersive simulations elevate the skills of internal teams and ensure cyber readiness is embedded across the organization.",
        },
      ],
    },
    process: {
      title: "Implementation methodology",
      steps: [
        {
          title: "Assessment & Analysis",
          description:
            "Comprehensive reviews of infrastructure, toolsets, and controls identify weaknesses and maturity gaps using advanced diagnostics.",
        },
        {
          title: "Strategy & Roadmap",
          description:
            "Custom security blueprints align with operational goals, with prioritized initiatives, KPIs, and governance structures.",
        },
        {
          title: "Execution & Hardening",
          description:
            "Solutions are deployed with configuration baselines, control validation, and regression testing to ensure seamless integration.",
        },
        {
          title: "Continuous Monitoring",
          description:
            "SOC teams watch telemetry, trigger automated investigations, and handle anomalies with pre-approved runbooks.",
        },
        {
          title: "Reporting & Optimization",
          description:
            "Periodic reports detail incidents, compliance posture, and improvement plans to maintain executive alignment.",
        },
      ],
    },
    contact: {
      title: "Engage our cyber response team",
      message:
        "Proactive preparation and early intervention are the foundation of resilient cybersecurity. Our advisors are ready to help design a protection program that safeguards continuity and customer trust.",
      support: "Share your requirements and we will craft a tailored service plan.",
      applyCta: "Schedule a cyber resilience briefing",
    },
  },
  ar: {
    backLabel: "العودة إلى الحلول",
    heroLead: "الأمن السيبراني واستخبارات التهديدات الرقمية",
    heroSupport:
      "نحمي عملياتك الرقمية عبر مراقبة مستمرة وصيد تهديدات استباقي وجاهزية دقيقة للاستجابة للحوادث.",
    heroSubline:
      "نحمي أعمالك الرقمية عبر رصد التهديدات واستباق الهجمات. حلول متكاملة للأمن السيبراني واستخبارات التهديدات مصممة حسب احتياجات مؤسستك.",
    heroContactCta: "تواصل معنا",
    heroSecurityCta: "اطلب تقييم أمني",
    overview: {
      kicker: "نبذة عامة",
      title: "حلول متكاملة للجاهزية السيبرانية",
      lead:
        "نقدم حلولاً متخصصة في الأمن السيبراني واستخبارات التهديدات الرقمية لحماية الأنظمة والبيانات الحيوية من الهجمات الإلكترونية وتعزيز الجاهزية الرقمية للمؤسسات.",
      paragraphs: [
        "نعتمد على تقنيات متقدمة وفِرق متخصصة تعمل على مدار الساعة لرصد التهديدات، تحليلها، والاستجابة لها بسرعة وفعالية.",
        "نؤمن بأن الأمن السيبراني ليس خيارًا بل ضرورة استراتيجية لضمان استمرارية العمل وثقة العملاء، لذا نوفّر منظومات حماية استباقية تدمج بين التكنولوجيا والخبرة لضمان بيئة رقمية آمنة ومتطورة.",
      ],
    },
    services: {
      title: "الخدمات",
      intro:
        "حزمة خدمات تغطي كامل دورة حياة الأمن السيبراني، من اكتشاف الثغرات الاستباقي وحتى بناء فرق مرنة ومؤتمتة الاستجابة.",
      items: [
        {
          title: "اختبار الاختراق (Penetration Testing)",
          description:
            "تنفيذ محاكاة للهجمات الإلكترونية لاكتشاف الثغرات في الأنظمة والتطبيقات قبل استغلالها، مع تقارير تفصيلية تتضمن مستوى الخطورة والتوصيات لمعالجتها وفق أفضل الممارسات الدولية.",
        },
        {
          title: "استخبارات التهديدات الرقمية (Threat Intelligence)",
          description:
            "جمع وتحليل بيانات التهديدات من مصادر متعددة للكشف المبكر عن الأنشطة الخبيثة المستهدفة لبيئتك الرقمية، مع ربط الاتجاهات العالمية بقطاع نشاط العميل لتمكين إجراءات وقائية فعّالة.",
        },
        {
          title: "الاستجابة للحوادث والتحقيق الجنائي الرقمي",
          description:
            "خدمات متخصصة للتعامل مع الحوادث الأمنية فور وقوعها تشمل الاحتواء، تحليل مصدر الهجوم، تقييم الأثر، وجمع الأدلة الرقمية بطريقة قانونية لاستخلاص الدروس الوقائية.",
        },
        {
          title: "مركز العمليات الأمنية (SOC)",
          description:
            "مراقبة وتحليل التهديدات على مدار الساعة عبر نماذج مُدارة بالكامل أو كخدمة سحابية، باستخدام تحليلات مدعومة بالذكاء الاصطناعي وتقنيات متقدمة لاكتشاف الحوادث مبكرًا وتقليل تأثيرها.",
        },
        {
          title: "تقييم المخاطر والامتثال (Risk & Compliance)",
          description:
            "تنفيذ تقييمات شاملة للمخاطر التقنية والتنظيمية لضمان توافق الإجراءات مع المعايير الدولية مثل ISO 27001 وNIST، مع تحليل الفجوات الإجرائية ووضع خطط تحسين واضحة.",
        },
        {
          title: "أمن البنية السحابية (Cloud Security)",
          description:
            "حلول متخصصة لتأمين البيئات السحابية وحماية البيانات، تشمل تصميم سياسات وصول آمنة، مراقبة الأنشطة، وتشفير البيانات الحساسة، مع دعم ضبط الإعدادات الآمنة لخدمات AWS وAzure وGoogle Cloud.",
        },
        {
          title: "الاستشارات في الأمن السيبراني",
          description:
            "خدمات استشارية لبناء استراتيجيات أمنية متكاملة تتماشى مع أهداف المؤسسة ومتطلبات الامتثال، تشمل تقييم الوضع الحالي، تحليل المخاطر، وتصميم سياسات وضوابط فعّالة.",
        },
        {
          title: "التدريب وبناء القدرات",
          description:
            "برامج تدريبية احترافية وشهادات عالمية وتقنيات واقع افتراضي لتعزيز جاهزية الكوادر الأمنية وتوفير تجارب تعليمية تفاعلية تعمّق الفهم العملي.",
        },
      ],
    },
    process: {
      title: "آلية تنفيذ المشاريع",
      steps: [
        {
          title: "التقييم والتحليل",
          description:
            "فحص شامل للبنية التحتية وتحديد الثغرات ونقاط الضعف باستخدام أدوات متقدمة، مع تقرير يوضح مستوى النضج الأمني والإجراءات العاجلة.",
        },
        {
          title: "التخطيط ووضع الإستراتيجية",
          description:
            "تصميم خطة أمنية مخصصة تتوافق مع احتياجات المؤسسة، تتضمن أولويات واضحة، مؤشرات أداء، وإجراءات تنفيذ مدروسة.",
        },
        {
          title: "التنفيذ والتحسين",
          description:
            "تطبيق الحلول والضوابط الوقائية واختبار فاعليتها وضمان تكاملها مع بيئة العمل الراهنة مع تحسين مستمر.",
        },
        {
          title: "المراقبة والاستجابة المستمرة",
          description:
            "مراقبة الأنظمة عبر مركز العمليات (SOC) وتفعيل التحليلات والتنبيهات الفورية لأي نشاط مريب أو تهديد محتمل.",
        },
        {
          title: "التقارير والتطوير المستمر",
          description:
            "تقديم تقارير دورية دقيقة عن الأداء الأمني وحالات الحوادث ومستوى الامتثال، مع تحديث السياسات لتحسين مستمر.",
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      message:
        "نؤمن أن الوقاية والاستعداد المبكر هما أساس الأمن السيبراني الفعّال. فريقنا جاهز لدعمك في بناء منظومة حماية متكاملة تحافظ على استمرارية أعمالك وثقة عملائك.",
      support: "تواصل معنا اليوم لتحديد احتياجاتك ووضع خطة أمنية تناسب بيئتك التقنية.",
      applyCta: "احجز إحاطة حول المرونة السيبرانية",
    },
  },
} as const

const SERVICE_IMAGES = [
  "/services/cyber.avif",
  "/services/ai.jpg",
  "/services/iot.jpeg",
  "/services/digital-twins.webp",
  "/services/ar-vr.jpg",
  "/services/metaverse.jpeg",
  "/services/training.jpg",
  "/tech-company.jpg",
] as const

const PROCESS_IMAGES = [
  "/services/cyber.avif",
  "/services/digital-twins.webp",
  "/services/iot.jpeg",
  "/services/ar-vr.jpg",
  "/services/metaverse.jpeg",
] as const

type CybersecuritySolutionPageProps = {
  solution: Solution
}

export default function CybersecuritySolutionPage({ solution }: CybersecuritySolutionPageProps) {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const localizedSolution = useMemo(() => getLocalizedSolution(solution, language), [solution, language])
  const copy = CYBER_COPY[language]
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeService, setActiveService] = useState(0)
  const [activeProcess, setActiveProcess] = useState(0)
  const servicesLength = copy.services.items.length
  const sanitizeServiceTitle = (title: string) =>
    isArabic ? title.replace(/\s*\(.*?\)\s*/g, "").trim() : title

  useEffect(() => {
    if (servicesLength <= 1) return

    const interval = window.setInterval(() => {
      setActiveService((prev) => (prev + 1) % servicesLength)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [servicesLength])

  useEffect(() => {
    setActiveService(0)
    setActiveProcess(0)
  }, [language])

  const goToService = (direction: "next" | "prev") => {
    setActiveService((prev) => {
      if (direction === "next") {
        return (prev + 1) % servicesLength
      }
      return (prev - 1 + servicesLength) % servicesLength
    })
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const ensurePlay = () => {
      video.loop = true
      video.muted = true
      video.playsInline = true
      if (video.paused || video.readyState >= 2) {
        void video.play().catch(() => {})
      }
    }

    ensurePlay()
    video.addEventListener("pause", ensurePlay)
    video.addEventListener("loadeddata", ensurePlay)
    video.addEventListener("ended", ensurePlay)
    video.addEventListener("canplaythrough", ensurePlay)
    video.setAttribute("playsinline", "true")

    return () => {
      video.removeEventListener("pause", ensurePlay)
      video.removeEventListener("loadeddata", ensurePlay)
      video.removeEventListener("ended", ensurePlay)
      video.removeEventListener("canplaythrough", ensurePlay)
    }
  }, [language, solution])

  return (
    <>
      <Header variant="light" />
      <div className="relative overflow-visible text-neutral-900" dir={isArabic ? "rtl" : "ltr"}>
        <HexagonBackground
          className="pointer-events-none absolute inset-0 -z-20 bg-white"
          hexagonSize={70}
          hexagonMargin={4}
          hexagonProps={{
            className:
              "border border-[#d8c6b3]/35 before:bg-transparent after:bg-transparent",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.22] via-white/[0.18] to-white/[0.16]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.65), transparent 45%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 50% 75%, rgba(255,255,255,0.6), transparent 42%)",
            filter: "blur(24px)",
            opacity: 0.1,
          }}
          aria-hidden
        />
        <section
          className={`relative isolate flex min-h-[640px] items-center overflow-hidden py-24 ${
            isArabic ? "text-right arabic" : ""
          }`}
        >
          <video
            key={CYBER_VIDEO_SRC}
            className="absolute inset-0 h-full w-full object-cover"
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            poster={CYBER_VIDEO_POSTER}
          >
            <source src={CYBER_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1b0e0b]/55 to-[#120806]/60" />
          <div className="relative mx-auto flex min-h-[600px] w-full text-white">
            <h1
              className={`absolute bottom-8 z-10 text-4xl font-light leading-tight text-white md:bottom-10 md:text-5xl ${
                isArabic ? "right-8 text-right" : "left-8 text-left"
              }`}
            >
              {localizedSolution.name}
            </h1>
          </div>
        </section>

        <section className={`mx-auto max-w-5xl px-6 py-16 ${isArabic ? "text-right arabic" : ""}`}>
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#863730]">
              {copy.overview.kicker}
            </span>
            <h2 className="text-3xl font-light text-neutral-900">{copy.overview.title}</h2>
            <p className="text-base text-neutral-700">{copy.overview.lead}</p>
            <div className="space-y-3 text-sm leading-relaxed text-neutral-600">
              {copy.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="relative">
            <section className={`mx-auto max-w-6xl px-6 py-16 ${isArabic ? "text-right arabic" : ""}`}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="inline-flex items-center rounded-full border border-[#e9d5c7] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#a1694b]">
                    {copy.services.title}
                  </span>
                  <h2 className="text-3xl font-light text-neutral-900">{copy.heroLead}</h2>
                  <p className="text-sm leading-relaxed text-neutral-600">{copy.services.intro}</p>
                </div>

                <div className="relative min-h-[520px] overflow-hidden rounded-[34px] border border-[#e6d8cb] bg-neutral-950 text-white shadow-[0_35px_120px_-70px_rgba(15,23,42,0.6)]">
                  {copy.services.items.map((service, index) => {
                    const image = SERVICE_IMAGES[index % SERVICE_IMAGES.length]
                    const isActive = activeService === index
                    return (
                      <div
                        key={service.title}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isActive ? "opacity-100" : "pointer-events-none opacity-0"
                        }`}
                        aria-hidden={!isActive}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/35" />
                        <div className="relative flex h-full flex-col justify-end gap-4 p-8 md:p-10">
                          <div className="space-y-3 md:max-w-3xl">
                            <h3 className="text-2xl font-semibold leading-tight drop-shadow">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-white/85">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <button
                    type="button"
                    onClick={() => goToService(isArabic ? "next" : "prev")}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#eadace] bg-white text-[#5a251b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c47c66] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isArabic ? "الخدمة السابقة" : "Previous service"}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <div
                    className="flex min-w-0 flex-1 flex-nowrap items-center gap-3 overflow-x-auto overflow-y-hidden rounded-full bg-white/95 px-3 py-2 shadow-[0_12px_50px_-30px_rgba(15,23,42,0.3)]"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {copy.services.items.map((service, index) => {
                      const isActive = activeService === index
                      return (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => setActiveService(index)}
                          onMouseEnter={() => setActiveService(index)}
                          aria-pressed={isActive}
                          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c47c66] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                            isActive
                              ? "border-[#c47c66] bg-[#f7ebe1] text-[#5a251b]"
                              : "border-[#ebdfd4] bg-white text-[#7a3b2f] hover:border-[#dcb9a3] hover:text-[#5a251b]"
                          }`}
                          style={{ flexShrink: 0 }}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              isActive ? "bg-[#c47c66]" : "bg-[#d7c7b8]"
                            }`}
                          />
                          <span className="line-clamp-1">{sanitizeServiceTitle(service.title)}</span>
                        </button>
                      )
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => goToService(isArabic ? "prev" : "next")}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#eadace] bg-white text-[#5a251b] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c47c66] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={isArabic ? "الخدمة التالية" : "Next service"}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </section>

            <section className={`mx-auto max-w-6xl px-6 pb-16 ${isArabic ? "text-right arabic" : ""}`}>
              <div className="rounded-[32px] border border-[#e7dcd2] bg-white/95 p-7 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.4)]">
                <div className="flex flex-col gap-4">
                  <div className={`flex flex-wrap items-center justify-between gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <h2 className="text-2xl font-light text-neutral-900">{copy.process.title}</h2>
                  </div>
                  <div
                    className={`flex items-center gap-3 rounded-[18px] border border-[#e9d5c7] bg-[#faf5f1] px-3 py-2 ${
                      isArabic ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex flex-nowrap items-center gap-2 overflow-x-auto overflow-y-hidden ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                      style={{ scrollbarWidth: "none" }}
                    >
                      {copy.process.steps.map((step, index) => {
                        const isActive = activeProcess === index
                        return (
                          <button
                            key={step.title}
                            type="button"
                            onClick={() => setActiveProcess(index)}
                            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c47c66] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                              isActive
                                ? "border-[#c47c66] bg-white text-[#5a251b]"
                                : "border-transparent bg-transparent text-[#7a3b2f] hover:border-[#dfc8b7]"
                            }`}
                            style={{ flexShrink: 0 }}
                          >
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                                isActive ? "bg-[#f3e1d6] text-[#5a251b]" : "bg-[#f3ebe5] text-[#8a5b4a]"
                              }`}
                            >
                              {index + 1}
                            </span>
                            <span className="line-clamp-1">{step.title}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-[#edded3] bg-white shadow-[0_30px_110px_-70px_rgba(15,23,42,0.3)]">
                    {copy.process.steps.map((step, index) => {
                      const isActive = activeProcess === index
                      const image = PROCESS_IMAGES[index % PROCESS_IMAGES.length]
                      return (
                        <div
                          key={step.title}
                          className={`absolute inset-0 w-full transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "pointer-events-none opacity-0"
                          }`}
                          aria-hidden={!isActive}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/15" />
                          <div
                            className={`absolute inset-4 md:inset-6 flex ${
                              isArabic ? "justify-end text-right" : "justify-start text-left"
                            }`}
                          >
                            <div
                              className={`max-w-xl rounded-2xl border border-white/60 bg-white/92 p-5 shadow-lg backdrop-blur ${
                                isArabic ? "text-right arabic" : ""
                              }`}
                            >
                              <div className="mb-2 text-sm font-semibold text-[#863730]">{step.title}</div>
                              <p className="text-sm text-neutral-700">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className={`mx-auto max-w-5xl px-6 pb-20 ${isArabic ? "text-right arabic" : ""}`}>
              <div className="rounded-3xl border border-[#dfcfc3] bg-white/95 p-8 text-center shadow-[0_45px_140px_-80px_rgba(15,23,42,0.38)]">
                <h2 className="text-2xl font-light text-neutral-900">{copy.contact.title}</h2>
                <p className="mt-4 text-sm text-neutral-600">{copy.contact.message}</p>
                <p className="mt-2 text-xs text-neutral-500">{copy.contact.support}</p>
                <div
                  className={`mt-6 flex flex-wrap justify-center gap-4 ${isArabic ? "flex-row-reverse arabic" : ""}`}
                >
                  <Link
                    href="/contact?topic=cyber"
                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[#f0eae4] px-6 py-3 text-sm font-semibold text-[#6d3228] shadow-lg transition hover:bg-[#ede3da]"
                  >
                    <span>{copy.contact.applyCta}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact?topic=security-assessment"
                    className="inline-flex items-center gap-2 rounded-full border border-[#d6c8bc] px-6 py-3 text-sm font-semibold text-[#3a201a] transition hover:bg-[#faf7f4]"
                  >
                    <span>{copy.heroSecurityCta}</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
