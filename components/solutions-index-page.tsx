"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Sparkles, Workflow, Network } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { solutions } from "@/lib/solutions"
import { getLocalizedSolutions } from "@/lib/solutions-localized"

const PAGE_COPY: Record<
  Language,
  {
    label: string
    heading: string
    subheading: string
    description: string
    filterLabel: string
    explore: string
    highlights: Array<{ title: string; body: string }>
  }
> = {
  en: {
    label: "Solutions",
    heading: "Platforms that connect, sense, and augment every experience",
    subheading: "Immersive environments, intelligent automation, and resilient infrastructure engineered for Industry 4.0.",
    description:
      "We blend product strategy, spatial design, AI, and industrial operations to deploy solutions that move mission-critical KPIs. Explore the portfolio by solution line to see how we activate roadmaps across government, healthcare, and enterprise.",
    filterLabel: "Browse by solution line",
    explore: "Explore solution",
    highlights: [
      {
        title: "Human-centered automation",
        body: "Design-first delivery where adoption, enablement, and measurable outcomes are codified from sprint one.",
      },
      {
        title: "Interoperable architecture",
        body: "Hybrid-cloud, real-time data fabrics, and digital twins stitched into resilient operating models.",
      },
      {
        title: "Accelerated execution",
        body: "Playbooks, toolchains, and managed run teams that cut deployment cycles while meeting governance.",
      },
    ],
  },
  ar: {
    label: "الحلول",
    heading: "منصات متصلة وذكية تغني كل تجربة",
    subheading: "بيئات غامرة وأتمتة مدفوعة بالذكاء الاصطناعي وبنى تحتية مرنة تدعم مسارات الثورة الصناعية الرابعة.",
    description:
      "نمزج بين استراتيجيات المنتجات، والتصميم المكاني، والذكاء الاصطناعي، وعمليات الصناعة لنقدّم حلولاً تحقق مؤشرات أداء حاسمة. تصفّح محفظة الحلول حسب المسار لمعرفة كيف نفعّل الخرائط التنفيذية عبر الحكومة، والرعاية الصحية، والقطاعات المؤسسية.",
    filterLabel: "استعرض حسب مسار الحل",
    explore: "استكشف الحل",
    highlights: [
      {
        title: "أتمتة تتمحور حول الإنسان",
        body: "تسليم قائم على التصميم يضمن التبنّي والتمكين وقياس الأثر منذ أول سباق Sprint.",
      },
      {
        title: "هندسة قابلة للتكامل",
        body: "أطر هجينة وسوق بيانات لحظية وتوائم رقمية تدعم نماذج تشغيلية مرنة.",
      },
      {
        title: "تنفيذ متسارع",
        body: "قوالب عمل وأدوات ومنصات تشغيل مدارة تقلّص دورات الإطلاق دون المساس بالحوكمة والامتثال.",
      },
    ],
  },
}

export default function SolutionsIndexPage() {
  const { language } = useLanguage()
  const copy = PAGE_COPY[language]
  const isArabic = language === "ar"
  const localizedSolutions = getLocalizedSolutions(language, solutions)
  const trainingCard = useMemo(
    () => ({
      slug: "training",
      name: language === "ar" ? "برامج التدريب وتطوير القدرات" : "Training & Capability Uplift",
      category: language === "ar" ? "التدريب" : "Training",
      tagline:
        language === "ar"
          ? "برامج غامرة ومخصصة تعزز القيادة، وإدارة المشاريع، والجاهزية المؤسسية."
          : "Immersive, customized programmes that elevate leadership, project delivery, and workforce readiness.",
    }),
    [language]
  )

  const allSolutions = useMemo(() => [...localizedSolutions, trainingCard], [localizedSolutions, trainingCard])

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allSolutions.map((item) => item.category)))
    return [language === "ar" ? "الكل" : "All", ...unique]
  }, [language, allSolutions])

  const [activeCategory, setActiveCategory] = useState<string>(categories[0] ?? "")

  const filteredSolutions = useMemo(() => {
    if (activeCategory === "All" || activeCategory === "الكل") {
      return allSolutions
    }
    return allSolutions.filter((solution) => solution.category === activeCategory)
  }, [activeCategory, allSolutions])

  return (
    <>
      <Header variant="light" />
      <div className="bg-white text-gray-900">
        <section className="relative overflow-hidden bg-[#07040a] py-28 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(134,55,48,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.45),#050307_80%)]" />
            <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#863730]/25 blur-3xl opacity-70" />
            <div className="absolute -bottom-32 right-10 h-[420px] w-[420px] rounded-full bg-[#1f2937]/35 blur-3xl opacity-60" />
          </div>
          <div className={`relative mx-auto flex max-w-6xl flex-col gap-10 px-8 ${isArabic ? "text-right arabic" : "text-left"}`}>
            <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur ${
              isArabic ? "self-end flex-row-reverse" : "self-start"
            }`}>
              <Sparkles className="h-4 w-4 text-[#f7d6ca]" />
              <span>{copy.label}</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-light leading-tight md:text-5xl">{copy.heading}</h1>
              <p className="max-w-3xl text-sm font-light text-white/70 md:text-base">{copy.subheading}</p>
              <p className="max-w-3xl text-sm text-white/50 md:text-[15px]">{copy.description}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {copy.highlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_45px_140px_-100px_rgba(255,255,255,0.65)] transition-transform duration-200 backdrop-blur hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-[#f4c9b8]">
                    <Workflow className="h-5 w-5" />
                    <h2 className="text-sm font-medium text-white">{item.title}</h2>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className={`mx-auto max-w-6xl px-8 ${isArabic ? "text-right arabic" : "text-left"}`}>
            <div className={`flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
              <div>
                <h2 className="text-2xl font-light text-neutral-900 md:text-3xl">{copy.filterLabel}</h2>
                <p className="mt-2 max-w-2xl text-sm text-neutral-600">
                  {language === "ar"
                    ? "صفّ الحلول حسب المسار لرؤية الخبرات المتخصصة والبيئات التي نقدّمها."
                    : "Filter the portfolio to focus on the platforms and operating models that match your roadmap."}
                </p>
              </div>
              <div className={`flex flex-wrap gap-2 ${isArabic ? "justify-end" : ""}`}>
                {categories.map((category) => {
                  const isActive = activeCategory === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#863730] ${
                        isActive
                          ? "border-[#863730] bg-[#863730] text-white shadow-[0_18px_45px_-30px_rgba(134,55,48,0.6)]"
                          : "border-neutral-200 bg-white text-neutral-600 hover:border-[#863730]/40 hover:text-[#863730]"
                      } ${isArabic ? "arabic" : "uppercase tracking-[0.2em]"}`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredSolutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group relative overflow-hidden rounded-[28px] border border-neutral-200/60 bg-gradient-to-br from-white via-white to-[#fdf7f3] p-8 shadow-[0_45px_120px_-90px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_55px_140px_-70px_rgba(134,55,48,0.3)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                    background:
                      "radial-gradient(circle at top right, rgba(134,55,48,0.15), transparent 55%), radial-gradient(circle at bottom left, rgba(15,23,42,0.12), transparent 60%)",
                  }} />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className={`flex items-center justify-between text-xs font-medium text-[#863730] ${
                      isArabic ? "flex-row-reverse" : "uppercase tracking-[0.25em]"
                    }`}>
                      <span>{solution.category}</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-2xl font-light text-neutral-900">{solution.name}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{solution.tagline}</p>
                    <div className={`mt-auto inline-flex items-center gap-2 text-xs font-medium text-[#863730] ${
                      isArabic ? "flex-row-reverse arabic" : "uppercase tracking-[0.3em]"
                    }`}>
                      <span>{copy.explore}</span>
                      <Network className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
