"use client"

import Image from "next/image"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"

type Localized = {
  en: string
  ar: string
}

const COPY = {
  en: {
    eyebrow: "Client Stories",
    title: "Trusted by Industry Leaders Across the Region",
    subtitle:
      "Government entities, critical infrastructure operators, and financial institutions partner with Al-Deqah to activate immersive, intelligent, and secure platforms.",
    description:
      "We co-design delivery blueprints, build bilingual experiences, and provide managed operations so every engagement lands measurable value.",
    contactHeadline: "Ready to design your next mission?",
    contactBody: "Share your brief and we’ll curate a workshop or proof-of-value tailored to your stakeholders.",
    contactCta: "Book a discovery call",
  },
  ar: {
    eyebrow: "عملاؤنا",
    title: "ثقة قادة الصناعة في المنطقة",
    subtitle:
      "تتعاون الجهات الحكومية، ومرافق البنية التحتية الحيوية، والمؤسسات المالية مع شركة الدقة لتفعيل منصات ذكية، غامرة، وآمنة.",
    description:
      "نشارك في تصميم خرائط التسليم، وبناء تجارب ثنائية اللغة، وتقديم خدمات تشغيل مدارة لضمان تحقيق قيمة ملموسة لكل مبادرة.",
    contactHeadline: "هل أنت جاهز لتصميم المهمة القادمة؟",
    contactBody: "شاركنا متطلباتك لننسّق ورشة عمل أو إثبات قيمة مخصص لفريقك وأصحاب المصلحة لديك.",
    contactCta: "احجز جلسة تعريفية",
  },
} as const

const CLIENTS = [
  {
    slug: "hatif-libya",
    logo: "/clients/hatif-libya.svg",
    name: { en: "Hatif Libya", ar: "هاتف ليبيا" },
    description: {
      en: "Modernizing the national telecom backbone with resilient network operations centers and immersive command experiences.",
      ar: "تحديث البنية التحتية الوطنية للاتصالات عبر مراكز عمليات شبكية مرنة وتجارب قيادة غامرة.",
    },
  },
  {
    slug: "libyan-banks-union",
    logo: "/clients/libyan-banks-union.png",
    name: { en: "Libyan Banks Association", ar: "اتحاد المصارف الليبية" },
    description: {
      en: "Designing digital policy labs that align regulators and commercial banks on trusted Industry 4.0 adoption.",
      ar: "تصميم مختبرات سياسات رقمية توحّد الجهات التنظيمية والمصارف التجارية لاعتماد موثوق لحلول الثورة الصناعية الرابعة.",
    },
  },
  {
    slug: "saudi-business-center",
    logo: "/clients/saudi-business-center.png",
    name: { en: "Saudi Business Center", ar: "المركز السعودي للأعمال" },
    description: {
      en: "Delivering bilingual visitor journeys and AI-guided concierge touchpoints for national investment programs.",
      ar: "تقديم رحلات زوار ثنائية اللغة ونقاط تفاعل مدعومة بالذكاء الاصطناعي لبرامج الاستثمار الوطنية.",
    },
  },
  {
    slug: "national-oil-corporation",
    logo: "/clients/national-oil-corporation.jpeg",
    name: { en: "National Oil Corporation", ar: "المؤسسة الوطنية للنفط" },
    description: {
      en: "Spatial war rooms and predictive maintenance dashboards keeping upstream operations synchronized.",
      ar: "غرف تحكم مكانية ولوحات صيانة تنبؤية تضمن تناغم عمليات الحقول النفطية.",
    },
  },
  {
    slug: "arabian-gulf-oil-company",
    logo: "/clients/arabian-gulf-oil-company.jpg",
    name: { en: "Arabian Gulf Oil Company", ar: "شركة الخليج العربي للنفط" },
    description: {
      en: "Immersive training suites and OT cybersecurity exercises for field engineering teams.",
      ar: "أجنحة تدريب غامرة وتمارين أمنية لفرق الهندسة الميدانية في بيئات التقنية التشغيلية.",
    },
  },
  {
    slug: "social-security-fund-libya",
    logo: "/clients/social-security-fund-libya.png",
    name: { en: "Social Security Fund - Libya", ar: "صندوق الضمان الاجتماعي - ليبيا" },
    description: {
      en: "Citizen-first service redesigns, analytics, and automation aligning benefits delivery with new policy mandates.",
      ar: "إعادة تصميم الخدمات، والتحليلات، والأتمتة المتمحورة حول المواطن لمواءمة صرف المنافع مع اللوائح الجديدة.",
    },
  },
  {
    slug: "sahara-bank",
    logo: "/clients/sahara-bank.jpg",
    name: { en: "Sahara Bank", ar: "مصرف الصحارى" },
    description: {
      en: "Phygital flagship branches that blend immersive media walls, conversational AI, and secure onboarding flows.",
      ar: "فروع رئيسية رقمية تجمع بين الشاشات الغامرة والذكاء الاصطناعي الحواري وتدفقات الانضمام الآمنة.",
    },
  },
  {
    slug: "passport-authority-libya",
    logo: "/clients/passport-authority-libya.jpg",
    name: { en: "Passport & Immigration Authority", ar: "مصلحة الجوازات والجنسية" },
    description: {
      en: "Experience centers and decision theaters enabling real-time situational awareness for border operations.",
      ar: "مراكز تجربة ومسارح قرار تمكّن من الوعي اللحظي لحركة الحدود والأمن.",
    },
  },
  {
    slug: "national-safety-authority-libya",
    logo: "/clients/national-safety-authority-libya.png",
    name: { en: "National Safety Authority", ar: "هيئة السلامة الوطنية" },
    description: {
      en: "XR-enabled training pipelines and intelligent incident dashboards supporting first responders.",
      ar: "برامج تدريب معززة بالواقعين الممتد والذكاء الاصطناعي ولوحات حوادث ذكية تدعم فرق الطوارئ.",
    },
  },
] as const

export default function ClientsPageContent() {
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
            {CLIENTS.map((client) => (
              <article
                key={client.slug}
                className={`group flex h-full flex-col gap-4 rounded-3xl border border-[#e2d5cd] bg-white/90 p-6 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.28)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_40px_120px_-60px_rgba(134,55,48,0.22)] ${
                  isArabic ? "text-right arabic" : ""
                }`}
              >
                <div
                  className={`flex w-full items-center gap-4 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3e1d7] via-white to-[#f9ebe4] ring-1 ring-[#e2d2c7]/60">
                    <Image
                      src={client.logo}
                      alt={client.name.en}
                      width={64}
                      height={64}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <h3 className={`text-lg font-medium text-[#0c0805] ${isArabic ? "ml-auto text-right" : ""}`}>
                    {client.name[language]}
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
