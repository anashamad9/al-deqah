"use client"

import Link from "next/link"
import { useMemo } from "react"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { useLanguage } from "@/components/language-context"
import type { Solution } from "@/lib/solutions"
import { getLocalizedSolution } from "@/lib/solutions-localized"

const CYBER_VIDEO_SRC = "https://media.giphy.com/media/xThtawwQXwVTzUXzuI/giphy.mp4"
const BINARY_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ctext x='8' y='58' fill='%23863730' fill-opacity='0.07' font-size='32' font-family='monospace'%3E0101010101%3C/text%3E%3Ctext x='32' y='138' fill='%23863730' fill-opacity='0.05' font-size='32' font-family='monospace'%3E1010101010%3C/text%3E%3C/svg%3E\")"

const CYBER_COPY = {
  en: {
    backLabel: "Back to solutions",
    heroLead: "Cybersecurity & Threat Intelligence",
    heroSupport:
      "We safeguard your digital operations through continuous monitoring, proactive threat hunting, and tailored incident readiness.",
    heroSubline:
      "We protect your digital business by detecting threats early and anticipating attacks with integrated cybersecurity and threat intelligence solutions.",
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
      applyCta: "Apply for managed services",
    },
  },
  ar: {
    backLabel: "العودة إلى الحلول",
    heroLead: "الأمن السيبراني واستخبارات التهديدات الرقمية",
    heroSupport:
      "نحمي عملياتك الرقمية عبر مراقبة مستمرة وصيد تهديدات استباقي وجاهزية دقيقة للاستجابة للحوادث.",
    heroSubline:
      "نحمي أعمالك الرقمية عبر رصد التهديدات واستباق الهجمات. حلول متكاملة للأمن السيبراني واستخبارات التهديدات مصممة حسب احتياجات مؤسستك.",
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
      applyCta: "تقدم بطلب الحصول على الخدمات",
    },
  },
} as const

type CybersecuritySolutionPageProps = {
  solution: Solution
}

export default function CybersecuritySolutionPage({ solution }: CybersecuritySolutionPageProps) {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const localizedSolution = useMemo(() => getLocalizedSolution(solution, language), [solution, language])
  const copy = CYBER_COPY[language]

  return (
    <>
      <Header variant="light" />
      <div className="bg-white text-neutral-900">
        <section
          className={`relative isolate flex min-h-[640px] items-center overflow-hidden py-24 ${
            isArabic ? "text-right arabic" : ""
          }`}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
          >
            <source src={CYBER_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1b0e0b]/55 to-[#120806]/60" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 text-white">
            <div
              className={`flex flex-wrap items-center gap-3 text-xs ${
                isArabic ? "flex-row-reverse justify-end" : "justify-start"
              }`}
            >
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-[11px] font-semibold text-white/70 transition hover:border-white hover:text-white"
              >
                <ArrowLeft className={`${isArabic ? "rotate-180" : ""} h-4 w-4`} />
                <span>{copy.backLabel}</span>
              </Link>
              <span
                className={`rounded-full border border-white/30 px-3 py-1 text-[11px] font-semibold text-white/70 ${
                  isArabic ? "arabic tracking-normal" : "uppercase tracking-[0.3em]"
                }`}
              >
                {localizedSolution.category}
              </span>
            </div>
            <div className="space-y-5">
              <p
                className={`text-sm text-white/60 ${
                  isArabic ? "arabic tracking-normal" : "uppercase tracking-[0.4em]"
                }`}
              >
                {copy.heroLead}
              </p>
              <h1 className="text-4xl font-light leading-tight text-white md:text-5xl">{localizedSolution.name}</h1>
              <p className="max-w-3xl text-base text-white/85">{copy.heroSupport}</p>
              <p className="max-w-3xl text-sm text-white/70">{copy.heroSubline}</p>
            </div>
            <div className={`flex flex-wrap gap-4 ${isArabic ? "flex-row-reverse justify-end" : "justify-start"}`}>
              <Link
                href="/contact?topic=cyber"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#6d3228] shadow-lg transition hover:bg-white"
              >
                <span>{localizedSolution.cta?.label ?? copy.heroLead}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?topic=security-assessment"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <span>{copy.heroSecurityCta}</span>
              </Link>
            </div>
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

        <div className="relative" style={{ backgroundImage: BINARY_PATTERN, backgroundColor: "#ffffff" }}>
          <div className="absolute inset-0 bg-white/92" aria-hidden />
          <div className="relative">
            <section className={`mx-auto max-w-6xl px-6 py-16 ${isArabic ? "text-right arabic" : ""}`}>
              <div className="mb-10 space-y-3 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a1694b]">
                  {copy.services.title}
                </span>
                <h2 className="text-3xl font-light text-neutral-900">{copy.heroLead}</h2>
                <p className="text-sm text-neutral-600">{copy.services.intro}</p>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#f5c3ac] via-[#c47c66] to-[#5c1f1a] opacity-60 md:block" />
                <div className="flex flex-col gap-10">
                  {copy.services.items.map((service, index) => {
                    const placeLeftColumn = isArabic ? index % 2 === 1 : index % 2 === 0
                    const columnClass = placeLeftColumn ? "md:col-start-1" : "md:col-start-2"
                    const paddingClass = placeLeftColumn ? "md:pr-12" : "md:pl-12"
                    const connectorClass = placeLeftColumn ? "-right-8" : "-left-8"
                    return (
                      <div key={service.title} className="md:grid md:grid-cols-2 md:items-center md:gap-6">
                        <div
                          className={`relative flex flex-col rounded-[32px] border border-[#eadace]/70 bg-white/95 p-6 shadow-[0_30px_100px_-70px_rgba(15,23,42,0.45)] ${
                            isArabic ? "text-right arabic" : ""
                          } ${columnClass} ${paddingClass}`}
                        >
                          <div className="flex items-center justify-between text-sm text-[#813529]">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f6dfd4] font-semibold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xs font-semibold tracking-[0.35em] text-[#c99784]">
                              {isArabic ? "خدمة" : "SERVICE"}
                            </span>
                          </div>
                          <h3 className="mt-4 text-xl font-semibold text-[#3a201a]">{service.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
                          <div
                            className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c1b5] bg-white text-[10px] text-[#6f3027] md:flex ${connectorClass}`}
                          >
                            •
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            <section className={`mx-auto max-w-6xl px-6 pb-16 ${isArabic ? "text-right arabic" : ""}`}>
              <div className="rounded-3xl border border-[#e7dcd2] bg-white/95 p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.4)]">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-light text-neutral-900">{copy.process.title}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {copy.process.steps.map((step, index) => (
                    <div key={step.title} className="rounded-2xl border border-[#f0e6dd] bg-white/90 p-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#863730]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4e7df] text-base">
                          {isArabic ? index + 1 : index + 1}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      <p className="text-sm text-neutral-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className={`mx-auto max-w-5xl px-6 pb-20 ${isArabic ? "text-right arabic" : ""}`}>
              <div className="rounded-3xl border border-[#dfcfc3] bg-white/95 p-8 text-center shadow-[0_45px_140px_-80px_rgba(15,23,42,0.38)]">
                <h2 className="text-2xl font-light text-neutral-900">{copy.contact.title}</h2>
                <p className="mt-4 text-sm text-neutral-600">{copy.contact.message}</p>
                <p className="mt-2 text-xs text-neutral-500">{copy.contact.support}</p>
                <div className={`mt-6 flex justify-center ${isArabic ? "arabic" : ""}`}>
                  <Link
                    href="/contact?topic=cyber"
                    className="inline-flex items-center gap-2 rounded-full bg-[#863730] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-[#6d2d24]"
                  >
                    <span>{copy.contact.applyCta}</span>
                    <ArrowUpRight className="h-4 w-4" />
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
