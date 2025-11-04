"use client"

import { useMemo, useState } from "react"
import { Sparkles, Target, Workflow } from "lucide-react"
import Link from "next/link"

import { useLanguage } from "@/components/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trainingCatalog, type TrainingCategory, type TrainingProgram } from "@/lib/training-catalog"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TRAINING_COPY = {
  en: {
    heroTitle: "Training & Capability Development",
    heroSubtitle: "Strategic programs to elevate leadership, project delivery, and institutional excellence.",
    heroDescription:
      "Al-Deqah designs immersive, outcomes-driven training that blends theory, practice, and real-world simulation. From risk management to human capital strategy, we help teams adopt new mindsets and deliver measurable impact.",
    highlights: [
      {
        title: "Mission",
        icon: Target,
        bullets: [
          "Empower people and institutions through continuous, applied learning.",
          "Align human capital with the demands of digital transformation.",
          "Deliver programs that merge academic insight with practical execution.",
        ],
      },
      {
        title: "Vision",
        icon: Sparkles,
        bullets: [
          "Be the partner of choice for tailored, innovative training journeys.",
          "Build resilient capabilities ready for future challenges and markets.",
          "Instill a culture of lifelong learning, creativity, and measurable progress.",
        ],
      },
      {
        title: "Philosophy",
        icon: Workflow,
        bullets: [
          "Learning without application delivers limited value.",
          "Experiential workshops, simulations, and VR accelerate retention.",
          "Every participant co-creates the experience through active practice.",
        ],
      },
    ],
    methodologyTitle: "Our Training Methodology",
    methodologyBullets: [
      "Structured needs assessments to align outcomes with organizational goals.",
      "Experiential learning labs that combine workshops, case studies, and VR simulations.",
      "Psychometric and impact measurement to track growth before and after delivery.",
      "Coaching, toolkits, and performance support that sustain adoption on the job.",
    ],
    approachCards: [
      {
        title: "Certified Experts",
        description: "Regional and international instructors with deep accreditation across PMI, HRCI, EFQM, and innovation disciplines.",
      },
      {
        title: "Tailored Journeys",
        description: "Programs custom-built from discovery to evaluation, aligned with sector priorities and talent maturity.",
      },
      {
        title: "Impact Measurement",
        description: "Quantitative dashboards and qualitative insights to evidence workforce readiness and business value.",
      },
    ],
    programsHeading: "Training Programs",
    programsDescription: "Select a track and tap a programme to review the learning outcomes and guided hours.",
    dialogObjectives: "Program Objectives",
    contactCta: {
      title: "Shape a training roadmap for your teams",
      description: "Partner with Al-Deqah to design custom cohorts, certification pathways, and blended learning experiences.",
      action: "Talk with our training advisors",
    },
  },
  ar: {
    heroTitle: "برامج التدريب وتطوير القدرات",
    heroSubtitle: "مسارات استراتيجية تعزز القيادة، وإدارة المشاريع، والتميز المؤسسي.",
    heroDescription:
      "تصمم شركة الدقة حلولاً تدريبية رائعة قائمة على التطبيق العملي والمحاكاة الواقعية. من إدارة المخاطر إلى تطوير رأس المال البشري، نمكّن الفرق من تبني عقليات جديدة وتحقيق أثر ملموس.",
    highlights: [
      {
        title: "رسالتنا",
        icon: Target,
        bullets: [
          "تمكين الأفراد والمؤسسات عبر التعلم التطبيقي المستمر.",
          "مواءمة رأس المال البشري مع متطلبات التحول الرقمي.",
          "تقديم برامج تجمع بين المعرفة النظرية والخبرة العملية.",
        ],
      },
      {
        title: "رؤيتنا",
        icon: Sparkles,
        bullets: [
          "أن نكون الشريك الأول للبرامج التدريبية المخصصة والمبتكرة.",
          "بناء قدرات قادرة على مواكبة التحديات والأسواق المستقبلية.",
          "ترسيخ ثقافة التعلم المستمر والإبداع وقياس التقدم المحقق.",
        ],
      },
      {
        title: "فلسفتنا",
        icon: Workflow,
        bullets: [
          "المعرفة بلا تطبيق لا تُحدث أثراً حقيقياً.",
          "التجربة العملية والمحاكاة تعزز الاحتفاظ بالمهارة.",
          "كل متدرب شريك في التجربة من خلال التفاعل والممارسة.",
        ],
      },
    ],
    methodologyTitle: "نهجنا التدريبي",
    methodologyBullets: [
      "تحليل فجوات المهارات وربط الأهداف التدريبية بالاحتياجات المؤسسية.",
      "ورش عمل تطبيقية ودراسات حالة ومحاكاة تعتمد الواقع الافتراضي.",
      "قياس قبلي وبعدي باستخدام أدوات سيكومترية لقياس الأثر الحقيقي.",
      "إسناد المتدربين بأدوات عملية وإرشاد مستمر بعد انتهاء البرنامج.",
    ],
    approachCards: [
      {
        title: "مدربون معتمدون",
        description: "خبراء من المنطقة والعالم يحملون اعتمادات متخصصة في PMI وHRCI وEFQM ومجالات الابتكار المختلفة.",
      },
      {
        title: "مسارات مخصصة",
        description: "برامج تُصمم من الاكتشاف حتى التقييم بما يتوافق مع أولويات القطاع ومستوى نضج الكفاءات.",
      },
      {
        title: "قياس الأثر",
        description: "لوحات تقارير كمية ونوعية تُبرز جاهزية القوى العاملة والقيمة المتحققة للأعمال.",
      },
    ],
    programsHeading: "البرامج التدريبية",
    programsDescription: "اختر المسار ثم اضغط على البرنامج للاطلاع على أهدافه والساعات التدريبية.",
    dialogObjectives: "الأهداف العامة للبرنامج",
    contactCta: {
      title: "صمّم مساراً تدريبياً لفرقك",
      description: "تعاون مع شركة الدقة لبناء دفعات تدريبية، وبرامج شهادات، وتجارب تعلم هجينة مخصصة.",
      action: "تواصل مع مستشاري التدريب لدينا",
    },
  },
} as const

export default function TrainingPageContent() {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const copy = TRAINING_COPY[language]

  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState(trainingCatalog[0]?.id ?? "")

  const activeCategory: TrainingCategory | undefined = useMemo(
    () => trainingCatalog.find((category) => category.id === activeCategoryId) ?? trainingCatalog[0],
    [activeCategoryId]
  )

  const handleSelectProgram = (program: TrainingProgram) => {
    setSelectedProgram(program)
    setDialogOpen(true)
  }

  return (
    <div className="bg-white">
      <Header variant="light" />
      <section
        className={`relative overflow-hidden bg-gradient-to-br from-white via-[#f5f0ea] to-[#efe6de] py-24 ${
          isArabic ? "text-right arabic" : ""
        }`}
      >
        <div className="pointer-events-none absolute -left-32 top-16 h-64 w-64 rounded-full bg-[#863730]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0f172a]/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className={`inline-flex items-center gap-2 rounded-full border border-[#a1694b]/20 bg-white/80 px-4 py-2 text-xs font-medium text-[#a1694b] shadow-sm backdrop-blur ${
            isArabic ? "flex-row-reverse" : ""
          }`}>
            <Sparkles className="h-4 w-4" />
            <span>{copy.heroSubtitle}</span>
          </div>
          <h1 className="mt-6 text-4xl font-light text-neutral-900 md:text-5xl">{copy.heroTitle}</h1>
          <p className="mt-4 max-w-3xl text-sm font-light text-neutral-600">{copy.heroDescription}</p>
        </div>
      </section>

      <section className={`mx-auto max-w-6xl px-6 py-16 ${isArabic ? "text-right arabic" : ""}`}>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-[#e7dcd2] bg-white/80 p-6 shadow-[0_35px_120px_-80px_rgba(15,23,42,0.4)]"
              >
                <div className="flex items-center gap-3 text-[#863730]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e5dd]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-lg font-medium text-neutral-900">{item.title}</h2>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className={`bg-white py-16 ${isArabic ? "text-right arabic" : ""}`}>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-light text-neutral-900">{copy.methodologyTitle}</h2>
          <p className="mt-4 text-sm font-light text-neutral-600">{copy.programsDescription}</p>
          <div className="mt-6 space-y-3 rounded-3xl border border-[#e7dcd2] bg-[#fdf8f4] p-6 text-sm text-neutral-700 shadow-[0_30px_100px_-80px_rgba(134,55,48,0.45)]">
            {copy.methodologyBullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#863730]" />
                <p className="leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`mx-auto max-w-6xl px-6 py-16 ${isArabic ? "text-right arabic" : ""}`}>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.approachCards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-[#e7dcd2] bg-white/85 p-6 shadow-[0_35px_100px_-70px_rgba(15,23,42,0.35)]"
            >
              <h3 className="text-lg font-medium text-[#863730]">{card.title}</h3>
              <p className="text-sm text-neutral-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`bg-gradient-to-b from-white to-[#f4f0eb] py-20 ${isArabic ? "text-right arabic" : ""}`}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
            {activeCategory?.title[language] ?? copy.programsHeading}
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            {activeCategory?.description[language] ?? copy.programsDescription}
          </p>
          <p className="mt-2 text-xs text-neutral-500">{copy.programsDescription}</p>
        </div>
          <Tabs
            value={activeCategory?.id ?? ""}
            onValueChange={setActiveCategoryId}
            dir={isArabic ? "rtl" : "ltr"}
            className="mt-6"
          >
            <TabsList className={`flex flex-wrap justify-center gap-2 bg-transparent p-0 ${isArabic ? "arabic" : ""}`}>
              {trainingCatalog.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full border border-[#e7dcd2] bg-white/80 px-4 py-2 text-xs font-medium text-neutral-600 shadow-sm data-[state=active]:border-[#863730]/50 data-[state=active]:text-[#863730]"
                >
                  {category.title[language]}
                </TabsTrigger>
              ))}
            </TabsList>

            {trainingCatalog.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8 focus-visible:outline-none">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.programs.map((program) => (
                    <button
                      key={program.id}
                      type="button"
                      onClick={() => handleSelectProgram(program)}
                      className="group flex h-full flex-col justify-between gap-4 rounded-3xl border border-[#e7dcd2] bg-white/90 p-6 text-left shadow-[0_30px_90px_-70px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#863730]/40 hover:shadow-[0_40px_120px_-60px_rgba(134,55,48,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#863730]"
                    >
                      <div className={isArabic ? "text-right arabic" : ""}>
                        <h3 className="text-lg font-medium text-neutral-900">{program.title[language]}</h3>
                        <p className="mt-2 text-sm text-[#863730]">{program.hours[language]}</p>
                      </div>
                      <div className={`flex items-center gap-2 text-xs font-medium text-neutral-500 ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}>
                        <span>{isArabic ? "عرض التفاصيل" : "View details"}</span>
                        <Sparkles className="h-4 w-4 text-[#863730] transition-transform group-hover:scale-110" />
                      </div>
                    </button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className={`mx-auto max-w-5xl px-6 py-16 ${isArabic ? "text-right arabic" : ""}`}>
        <div className="rounded-3xl border border-[#e7dcd2] bg-white/85 p-8 shadow-[0_45px_140px_-90px_rgba(15,23,42,0.35)]">
          <h2 className="text-2xl font-light text-neutral-900">{copy.contactCta.title}</h2>
          <p className="mt-3 text-sm text-neutral-600">{copy.contactCta.description}</p>
          <Separator className="my-6 bg-[#e7dcd2]" />
          <Link
            href="/contact?topic=training"
            className={`inline-flex items-center gap-2 rounded-full bg-[#863730] px-6 py-2 text-xs font-medium text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-[#742f29] ${
              isArabic ? "flex-row-reverse arabic" : ""
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>{copy.contactCta.action}</span>
          </Link>
        </div>
      </section>

      <Footer />

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className={`max-w-lg bg-white text-neutral-900 dark:bg-neutral-950/95 dark:text-neutral-100 ${isArabic ? "text-right arabic" : ""}`}
        >
          {selectedProgram ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                  {selectedProgram.title[language]}
                </DialogTitle>
                <DialogDescription className="text-sm text-[#863730] dark:text-[#f2b7a5]">
                  {selectedProgram.hours[language]}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="mt-4 max-h-[50vh] text-sm text-neutral-700 dark:text-neutral-300">
                <p className="mb-3 font-medium text-neutral-900 dark:text-neutral-100">{copy.dialogObjectives}</p>
                <ul className="space-y-2">
                  {selectedProgram.objectives[language].map((objective) => (
                    <li key={objective} className="leading-relaxed">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#863730]" />
                        <span className="text-neutral-700 dark:text-neutral-300">{objective}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}
