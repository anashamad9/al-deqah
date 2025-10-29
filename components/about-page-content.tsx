"use client"

import Link from "next/link"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"

const ABOUT_COPY: Record<
  Language,
  {
    hero: {
      label: string
      heading: string
      description: string
    }
    mission: {
      title: string
      description: string
      cardLabel: string
      cardBody: string
      pillars: Array<{ title: string; description: string }>
    }
    leadership: {
      label: string
      heading: string
      description: string
      quote: string
      quoteLabel: string
      members: Array<{ name: string; title: string; bio: string }>
    }
    capabilities: {
      label: string
      heading: string
      description: string
      squads: Array<{ title: string; description: string }>
    }
    cta: {
      heading: string
      description: string
      button: string
    }
  }
> = {
  en: {
    hero: {
      label: "About Al-Deqah",
      heading: "Engineering immersive, intelligent, and connected futures across the Middle East",
      description:
        "Headquartered in Amman with teams across the region, we partner with government, industry, and innovators to activate Industry 4.0 roadmaps—from medical VR training to smart infrastructure and AI-powered decision hubs.",
    },
    mission: {
      title: "Our Mission",
      description:
        "We help organizations harness emerging technologies responsibly—so they can operate with greater insight, empower their teams, and deliver memorable experiences. Every engagement blends strategy, design, and engineering to translate ambitions into measurable outcomes.",
      cardLabel: "Regional roots, global expertise",
      cardBody:
        "We combine on-the-ground knowledge of GCC and Levant industries with global partnerships and R&D labs. Our teams stay embedded from discovery through post-launch optimization.",
      pillars: [
        {
          title: "Industry 4.0 Acceleration",
          description:
            "From digital twins to connected operation centers, we orchestrate the technologies that modernize industrial workflows.",
        },
        {
          title: "Trusted Delivery",
          description:
            "Regulated industries rely on us because we pair engineering rigor with robust governance, security, and compliance practices.",
        },
        {
          title: "Human-Centered Innovation",
          description:
            "We shape experiences around the people on the ground—operators, clinicians, engineers, and learners—so adoption sticks.",
        },
      ],
    },
    leadership: {
      label: "Leadership",
      heading: "Guided by multidisciplinary experts",
      description:
        "Our leadership team brings together experience from smart city initiatives, national digital programs, and emerging technology ventures to drive sustainable innovation.",
      quote:
        "“Digital transformation succeeds when strategy, design, and engineering move together. At Al-Deqah, we stay connected to the people operating these experiences every day.”",
      quoteLabel: "Al-Deqah Leadership Charter",
      members: [
        {
          name: "Layla Al-Harthy",
          title: "Chief Executive Officer",
          bio: "Visionary leader with 15+ years building technology ventures across the GCC, focused on scaling immersive, data-driven solutions.",
        },
        {
          name: "Omar Al-Saadi",
          title: "Chief Technology Officer",
          bio: "Architecting interoperable platforms that connect AI, IoT, and spatial computing for mission-critical environments.",
        },
        {
          name: "Sara Al-Mutairi",
          title: "Chief Experience Officer",
          bio: "Designs the human-centered experiences that bring our Industry 4.0 products to life in enterprise deployments.",
        },
      ],
    },
    capabilities: {
      label: "Capabilities",
      heading: "End-to-end delivery squads",
      description:
        "Cross-functional teams align closely with your stakeholders—from strategy to spatial experience design and platform engineering.",
      squads: [
        {
          title: "Strategy & Research",
          description: "Industry discovery, opportunity framing, and outcome roadmapping.",
        },
        {
          title: "Experience Design",
          description: "Immersive storytelling, UX, and 3D prototyping for spatial and digital touchpoints.",
        },
        {
          title: "Platform Engineering",
          description: "AI, IoT, digital twin, and full-stack product teams working in tandem.",
        },
        {
          title: "Operate & Scale",
          description: "Managed services, analytics optimization, and capability enablement programs.",
        },
      ],
    },
    cta: {
      heading: "Let’s co-create your next Industry 4.0 milestone",
      description:
        "From smart infrastructure to immersive workforce training, we partner with you to deliver outcomes that matter.",
      button: "Talk to our team",
    },
  },
  ar: {
    hero: {
      label: "عن شركة الدقة",
      heading: "نصمم مستقبلًا غامرًا وذكيًا ومتصلاً عبر الشرق الأوسط",
      description:
        "مقرنا في عمّان مع فرق منتشرة في المنطقة، نتعاون مع الحكومات والصناعة والمبتكرين لتفعيل خارطة طريق الثورة الصناعية الرابعة — من التدريب الطبي بالواقع الافتراضي إلى البنية التحتية الذكية ومراكز اتخاذ القرار المدعومة بالذكاء الاصطناعي.",
    },
    mission: {
      title: "رسالتنا",
      description:
        "نساعد المؤسسات على تسخير التقنيات الناشئة بمسؤولية كي تعمل برؤية أوضح، وتمكّن فرقها، وتقدّم تجارب لا تُنسى. كل مبادرة تمزج بين الاستراتيجية والتصميم والهندسة لتحويل الطموحات إلى نتائج قابلة للقياس.",
      cardLabel: "جذور إقليمية، خبرة عالمية",
      cardBody:
        "نمزج المعرفة الميدانية لأسواق الخليج والمشرق مع شراكات عالمية ومختبرات بحث وتطوير. نبقى إلى جانبكم من الاكتشاف وحتى التحسين بعد الإطلاق.",
      pillars: [
        {
          title: "تسريع الثورة الصناعية الرابعة",
          description: "من التوائم الرقمية إلى مراكز العمليات المتصلة، نوائم التقنيات التي تحدّث سير العمل الصناعي.",
        },
        {
          title: "تسليم موثوق",
          description: "تعتمد علينا القطاعات المنظمة لأننا نجمع صرامة هندسية مع حوكمة وأمن وامتثال قوي.",
        },
        {
          title: "ابتكار محوره الإنسان",
          description:
            "نبني التجارب حول الأشخاص على أرض الواقع — المشغلين والأطباء والمهندسين والمتعلمين — لضمان التبنّي والاستدامة.",
        },
      ],
    },
    leadership: {
      label: "القيادة",
      heading: "نقوده خبرات متعددة التخصصات",
      description:
        "يجمع فريق القيادة خبرة من مبادرات المدن الذكية والبرامج الوطنية ومشاريع التقنيات الناشئة لقيادة ابتكار مستدام.",
      quote:
        "“ينجح التحول الرقمي عندما تسير الاستراتيجية والتصميم والهندسة معًا. في شركة الدقة نبقى قريبين من الأشخاص الذين يشغلون هذه التجارب يوميًا.”",
      quoteLabel: "ميثاق قيادة شركة الدقة",
      members: [
        {
          name: "Layla Al-Harthy",
          title: "الرئيسة التنفيذية",
          bio: "قائدة ذات رؤية بخبرة تتجاوز 15 عامًا في بناء مشاريع تقنية عبر دول الخليج، تركّز على توسيع حلول غامرة مدفوعة بالبيانات.",
        },
        {
          name: "Omar Al-Saadi",
          title: "الرئيس التقني",
          bio: "يصمم منصات قابلة للتشغيل البيني تربط الذكاء الاصطناعي وإنترنت الأشياء والحوسبة المكانية لبيئات تشغيل حساسة.",
        },
        {
          name: "Sara Al-Mutairi",
          title: "رئيسة تجربة العملاء",
          bio: "تصمم التجارب المرتكزة على الإنسان التي تحوّل منتجات الثورة الصناعية الرابعة إلى واقع في بيئات المؤسسات.",
        },
      ],
    },
    capabilities: {
      label: "القدرات",
      heading: "فرق تسليم متكاملة من البداية إلى النهاية",
      description:
        "فرق متعددة التخصصات تتماشى بشكل وثيق مع أصحاب المصلحة لديك — من الاستراتيجية إلى تصميم التجارب المكانية وهندسة المنصات.",
      squads: [
        {
          title: "الاستراتيجية والبحث",
          description: "استكشاف القطاع، تأطير الفرص، ورسم خارطة النتائج.",
        },
        {
          title: "تصميم التجربة",
          description: "سرد غامر، تجربة المستخدم، ونمذجة ثلاثية الأبعاد لنقاط الاتصال الرقمية والمكانية.",
        },
        {
          title: "هندسة المنصة",
          description: "فرق منتجات للذكاء الاصطناعي وإنترنت الأشياء والتوائم الرقمية والتطوير الكامل تعمل بتناغم.",
        },
        {
          title: "التشغيل والتوسع",
          description: "خدمات مُدارة، تحسين التحليلات، وبرامج تمكين القدرات.",
        },
      ],
    },
    cta: {
      heading: "لنبتكر معًا علامتك البارزة التالية في الثورة الصناعية الرابعة",
      description:
        "من البنية التحتية الذكية إلى التدريب الغامر للقوى العاملة، نتشارك معك لتقديم نتائج ذات أثر.",
      button: "تواصل مع فريقنا",
    },
  },
}

export default function AboutPageContent() {
  const { language } = useLanguage()
  const copy = ABOUT_COPY[language]
  const isArabic = language === "ar"

  return (
    <>
      <Header variant="dark" />
      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden bg-[#0c0805] py-28 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1c130d] to-black opacity-90" />
            <div className="absolute left-1/2 top-[-40%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#863730]/20 blur-3xl opacity-60" />
          </div>
          <div
            className={`relative mx-auto flex max-w-5xl flex-col gap-6 px-6 md:px-8 ${
              isArabic ? "items-end text-right" : "text-center"
            }`}
          >
            <span
              className={`text-xs uppercase tracking-[0.35em] text-[#863730] ${
                isArabic ? "arabic self-end" : "self-center"
              }`}
            >
              {copy.hero.label}
            </span>
            <h1 className={`text-4xl font-light leading-tight md:text-5xl ${isArabic ? "arabic" : ""}`}>
              {copy.hero.heading}
            </h1>
            <p className={`text-sm font-light text-white/70 md:text-base ${isArabic ? "arabic text-right" : ""}`}>
              {copy.hero.description}
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
            <div className="space-y-6">
              <h2 className={`text-3xl font-light text-gray-900 md:text-4xl ${isArabic ? "arabic text-right" : ""}`}>
                {copy.mission.title}
              </h2>
              <p className={`text-sm font-light leading-relaxed text-gray-600 ${isArabic ? "arabic text-right" : ""}`}>
                {copy.mission.description}
              </p>
              <div className="rounded-3xl border border-[#863730]/25 bg-[#fdfaf3] p-6 text-sm font-light text-gray-700 shadow-[0_25px_65px_-55px_rgba(0,0,0,0.12)]">
                <p className={`text-xs uppercase tracking-[0.3em] text-[#863730] ${isArabic ? "arabic text-right" : ""}`}>
                  {copy.mission.cardLabel}
                </p>
                <p className={`mt-3 leading-relaxed ${isArabic ? "arabic text-right" : ""}`}>{copy.mission.cardBody}</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {copy.mission.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_25px_60px_-55px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#863730]/40 ${
                    isArabic ? "text-right arabic" : ""
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#863730]">
                    {language === "ar" ? "ركيزة" : "Pillar"}
                  </p>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#f8f4ec] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
              <div className={`space-y-4 ${isArabic ? "text-right arabic" : ""}`}>
                <span className="text-xs uppercase tracking-[0.35em] text-[#863730]">{copy.leadership.label}</span>
                <h2 className="text-3xl font-light text-gray-900 md:text-4xl">{copy.leadership.heading}</h2>
                <p className="text-sm font-light leading-relaxed text-gray-600">{copy.leadership.description}</p>
              </div>
              <div className="relative hidden h-full overflow-hidden rounded-3xl border border-[#863730]/25 bg-[#fdfaf3] p-8 shadow-[0_35px_80px_-60px_rgba(0,0,0,0.18)] lg:flex">
                <div className={`space-y-3 text-sm font-light text-gray-700 ${isArabic ? "text-right arabic" : ""}`}>
                  <p>{copy.leadership.quote}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#863730]">{copy.leadership.quoteLabel}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {copy.leadership.members.map((member) => (
                <div
                  key={member.name}
                  className={`group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_30px_70px_-60px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#863730]/40 ${
                    isArabic ? "text-right arabic" : ""
                  }`}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#863730]/15 to-[#863730]/5 text-[#863730]">
                    <span className="text-lg font-medium">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#863730]">{member.title}</p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center">
              <div className={`space-y-4 ${isArabic ? "text-right arabic" : ""}`}>
                <span className="text-xs uppercase tracking-[0.35em] text-[#863730]">{copy.capabilities.label}</span>
                <h2 className="text-3xl font-light text-gray-900 md:text-4xl">{copy.capabilities.heading}</h2>
                <p className="text-sm font-light leading-relaxed text-gray-600">{copy.capabilities.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {copy.capabilities.squads.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-3xl border border-gray-200 bg-[#fdfaf3] p-5 text-sm ${
                      isArabic ? "text-right arabic" : ""
                    }`}
                  >
                    <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm font-light text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0c0805] py-20 text-white">
          <div className={`mx-auto max-w-4xl px-6 ${isArabic ? "text-right arabic" : "text-center"}`}>
            <h2 className="text-3xl font-light md:text-4xl">{copy.cta.heading}</h2>
            <p className="mt-4 text-sm font-light text-white/70">{copy.cta.description}</p>
            <Link
              href="/contact"
              className={`mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-xs font-medium text-black transition-transform duration-200 hover:scale-105 ${
                isArabic ? "flex-row-reverse arabic" : ""
              }`}
            >
              {copy.cta.button}
              <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7H17V14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
