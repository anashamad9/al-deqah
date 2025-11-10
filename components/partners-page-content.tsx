"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import { PARTNER_LOGOS } from "@/components/partners-bar"

type Localized = {
  en: string
  ar: string
}

const COPY = {
  en: {
    eyebrow: "Partner Network",
    title: "Building Industry 4.0 with Global Leaders",
    subtitle:
      "We co-create with cloud, infrastructure, and enterprise software innovators to deliver secure, scalable experiences across the Middle East.",
    description:
      "Each collaboration accelerates adoption through localized go-to-market programs, regulatory compliance, and technical enablement tailored to the region.",
    contactHeadline: "Ready to expand with us?",
    contactBody:
      "We partner on co-innovation roadmaps, proof-of-value pilots, and long-term managed services. Let’s explore how we can unlock impact together.",
    contactCta: "Talk with us",
  },
  ar: {
    eyebrow: "شبكة الشركاء",
    title: "نبني الثورة الصناعية الرابعة مع رواد عالميين",
    subtitle:
      "نبتكر جنباً إلى جنب مع مزودي السحابة والبنية التحتية وتطبيقات المؤسسات لتقديم تجارب آمنة وقابلة للتوسع في أنحاء الشرق الأوسط.",
    description:
      "كل شراكة تسهم في تسريع التبني عبر برامج دخول السوق المحلية، والامتثال التنظيمي، والتمكين التقني المصمم لاحتياجات المنطقة.",
    contactHeadline: "هل ترغب بالشراكة معنا؟",
    contactBody:
      "نتعاون في خرائط طريق للابتكار المشترك، وتجارب إثبات القيمة، وخدمات مُدارة طويلة الأجل. دعنا نستكشف كيف يمكننا تحقيق أثر مشترك.",
    contactCta: "تواصل معنا",
  },
} as const satisfies Record<"en" | "ar", Record<string, string>>

const LOGO_BY_NAME = PARTNER_LOGOS.reduce<Record<string, (typeof PARTNER_LOGOS)[number]>>((acc, logo) => {
  acc[logo.alt] = logo
  return acc
}, {})

const PARTNER_CONTENT = {
  Kaspersky: {
    name: { en: "Kaspersky", ar: "كاسبرسكي" },
    description: {
      en: "Cyber defense programs, threat intelligence coverage, and region-aware SOC enablement for critical infrastructure and public sector clients.",
      ar: "برامج دفاع سيبراني، ومعلومات تهديدات، وتمكين مراكز عمليات أمنية ملائمة للمنطقة للبنى التحتية الحيوية والجهات الحكومية.",
    },
  },
  Splunk: {
    name: { en: "Splunk", ar: "سبلنك" },
    description: {
      en: "Unified observability and security analytics pipelines turning OT sensor data into actionable intelligence for smart industry deployments.",
      ar: "منصات مراقبة موحدة وتحليلات أمنية تحول بيانات أجهزة التقنية التشغيلية إلى رؤى قابلة للتنفيذ لدعم المصانع الذكية.",
    },
  },
  CyberArk: {
    name: { en: "CyberArk", ar: "سايبرآرك" },
    description: {
      en: "Privileged access management and identity security that protect hybrid cloud and OT environments with compliance-ready controls.",
      ar: "إدارة صلاحيات الدخول وحماية الهوية لتأمين البيئات السحابية الهجينة وبيئات التقنية التشغيلية مع ضوابط جاهزة للامتثال.",
    },
  },
  Microsoft: {
    name: { en: "Microsoft", ar: "مايكروسوفت" },
    description: {
      en: "Azure-based AI, IoT, and mixed reality programs accelerated with regional security expertise and FastTrack support.",
      ar: "برامج ذكاء اصطناعي وإنترنت الأشياء وواقع مختلط تعتمد على Azure مدعومة بخبرات أمنية إقليمية ودعم FastTrack متخصص.",
    },
  },
  Dell: {
    name: { en: "Dell", ar: "دِل" },
    description: {
      en: "Edge-to-core infrastructure, ruggedized servers, and lifecycle services powering smart factory and immersive training environments.",
      ar: "بنية تحتية من الحافة إلى المركز مع خوادم متينة وخدمات طوال دورة الحياة لدعم المصانع الذكية وبيئات التدريب الرائعة.",
    },
  },
  Lenovo: {
    name: { en: "Lenovo", ar: "لينوفو" },
    description: {
      en: "Edge computing platforms, AR/VR-ready workstations, and rugged devices powering connected operations and immersive training.",
      ar: "منصات حوسبة طرفية ومحطات عمل جاهزة للواقعين المعزز والافتراضي وأجهزة متينة تدعم العمليات المتصلة والتدريب الغامر.",
    },
  },
  IBM: {
    name: { en: "IBM", ar: "آي بي إم" },
    description: {
      en: "Hybrid cloud, automation, and cybersecurity services supporting highly regulated enterprises and healthcare ecosystems.",
      ar: "سحابة هجينة وحلول أتمتة وخدمات أمن سيبراني تدعم المؤسسات عالية التنظيم وقطاعات الرعاية الصحية.",
    },
  },
  Hikvision: {
    name: { en: "Hikvision", ar: "هايك فيجن" },
    description: {
      en: "Computer vision, AI-enabled security, and IoT sensing delivering intelligent campuses and critical infrastructure monitoring.",
      ar: "رؤية حاسوبية وحلول أمنية مدعومة بالذكاء الاصطناعي وأجهزة استشعار إنترنت الأشياء لتوفير مراقبة ذكية للمرافق والبنى التحتية الحيوية.",
    },
  },
  ICSI: {
    name: { en: "ICSI", ar: "ICSI" },
    description: {
      en: "Digital identity platforms, cyber ranges, and national credentialing programs co-engineered for secure government and telecom workloads.",
      ar: "منصات هوية رقمية وساحات تدريب سيبراني وبرامج اعتماد وطنية مصممة لدعم الجهات الحكومية وقطاع الاتصالات بأعلى مستويات الأمان.",
    },
  },
  BigCloud: {
    name: { en: "Big Cloud", ar: "Big Cloud" },
    description: {
      en: "Cloud-native integration, DevSecOps enablement, and multi-cloud landing zones that accelerate Industry 4.0 services.",
      ar: "تكامل سحابي أصيل، وتمكين فرق DevSecOps، ومناطق هبوط متعددة السُحب لتسريع إطلاق خدمات الثورة الصناعية الرابعة.",
    },
  },
  ThirdGenerationHolding: {
    name: { en: "Third Generation Holding", ar: "الجيل الثالث القابضة" },
    description: {
      en: "Smart city investment programs delivering immersive visitor centers, digital twin operations, and executive briefing experiences.",
      ar: "برامج استثمار للمدن الذكية توفر مراكز زوار غامرة وتوائم رقمية وبيئات عروض تنفيذية للمشاريع العملاقة.",
    },
  },
} as const satisfies Record<
  string,
  {
    name: Localized
    description: Localized
  }
>

const PARTNER_MAPPING = [
  { logoKey: "Kaspersky", brandKey: "Kaspersky" },
  { logoKey: "Splunk", brandKey: "Splunk" },
  { logoKey: "CyberArk", brandKey: "CyberArk" },
  { logoKey: "Dell", brandKey: "Dell" },
  { logoKey: "Microsoft", brandKey: "Microsoft" },
  { logoKey: "IBM", brandKey: "IBM" },
  { logoKey: "Hikvision", brandKey: "Hikvision" },
  { logoKey: "Lenovo", brandKey: "Lenovo" },
  { logoKey: "ICSI", brandKey: "ICSI" },
  { logoKey: "Big Cloud", brandKey: "BigCloud" },
  { logoKey: "Third Generation Holding", brandKey: "ThirdGenerationHolding" },
] as const satisfies Array<{
  logoKey: keyof typeof LOGO_BY_NAME
  brandKey: keyof typeof PARTNER_CONTENT
}>

const PARTNER_DETAILS = PARTNER_MAPPING.map(({ logoKey, brandKey }) => ({
  logo: LOGO_BY_NAME[logoKey],
  name: PARTNER_CONTENT[brandKey].name,
  description: PARTNER_CONTENT[brandKey].description,
}))

export default function PartnersPageContent() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const isArabic = language === "ar"

  return (
    <div className="bg-white">
      <Header variant="light" />
      <main className="bg-white text-[#0c0805]">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 sm:px-12 lg:px-8">
          <header className={`space-y-4 ${isArabic ? "text-right arabic" : ""}`}>
            <p
              className={`text-xs font-medium text-[#a05a3c] ${
                isArabic ? "arabic text-right" : "uppercase tracking-[0.32em]"
              }`}
            >
              {copy.eyebrow}
            </p>
            <h1 className="text-3xl font-light text-[#0c0805] sm:text-4xl">{copy.title}</h1>
            <p className="max-w-3xl text-sm font-light text-gray-600">{copy.subtitle}</p>
            <p className="max-w-3xl text-sm text-gray-500">{copy.description}</p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_DETAILS.map((partner) => (
              <article
                key={partner.logo.alt}
                className={`group flex h-full flex-col gap-4 rounded-3xl border border-[#e2d5cd] bg-white/90 p-6 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.28)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_40px_120px_-60px_rgba(134,55,48,0.22)] ${
                  isArabic ? "text-right arabic" : ""
                }`}
              >
                <div
                  className={`flex w-full items-center gap-4 ${
                    isArabic ? "flex-row-reverse text-right" : "text-left"
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e1d7] via-white to-[#f9ebe4] ring-1 ring-[#e2d2c7]/60">
                    <img src={partner.logo.src} alt={partner.logo.alt} className="max-h-10 w-auto mix-blend-multiply" />
                  </div>
                  <h3 className={`text-lg font-medium text-[#0c0805] ${isArabic ? "ml-auto" : ""}`}>
                    {partner.name[language]}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div
            className={`rounded-3xl border border-dashed border-[#c7b1a5] bg-white/80 px-8 py-10 shadow-[0_35px_90px_-75px_rgba(0,0,0,0.25)] ${
              isArabic ? "text-right arabic" : ""
            }`}
          >
            <h2 className="text-2xl font-light text-[#0c0805]">{copy.contactHeadline}</h2>
            <p className="mt-3 text-sm text-gray-600">{copy.contactBody}</p>
            <a
              href="mailto:hello@al-deqah.com"
              className={`mt-6 inline-flex items-center gap-2 rounded-full border border-[#a05a3c]/40 px-6 py-2 text-xs font-medium text-[#a05a3c] transition-colors duration-200 hover:border-[#a05a3c] hover:text-[#7d4130] ${
                isArabic ? "flex-row-reverse arabic" : ""
              }`}
            >
              {copy.contactCta}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
