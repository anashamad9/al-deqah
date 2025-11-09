"use client"

import { useMemo } from "react"

import { useLanguage } from "@/components/language-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const FAQ_COPY = {
  en: {
    label: "FAQ",
    heading: "Everything you need to know",
    description:
      "Answers to the most common questions about our solutions, training programmes, and delivery model.",
    items: [
      {
        question: "What industries do you serve?",
        answer:
          "We support government, healthcare, industrial, and enterprise customers with Industry 4.0 solutions tailored to the region.",
      },
      {
        question: "How do you deliver training programmes?",
        answer:
          "We combine instructor-led workshops, simulations, and digital platforms with pre- and post-assessments to prove impact.",
      },
      {
        question: "Can solutions integrate with existing systems?",
        answer:
          "Yes. Our architectures are designed for interoperability across cloud, on-premise, and OT environments.",
      },
      {
        question: "What post-implementation support do you provide?",
        answer:
          "We offer post-launch success teams, 24/7 monitoring, and optimization playbooks to keep programmes on track.",
      },
      {
        question: "How can we start a project?",
        answer:
          "Reach out through our contact page to schedule a discovery session with Al-Deqah specialists.",
      },
    ],
  },
  ar: {
    label: "الأسئلة الشائعة",
    heading: "كل ما تحتاج معرفته",
    description: "إجابات على أبرز الأسئلة حول حلولنا وبرامج التدريب ونموذج التسليم.",
    items: [
      {
        question: "ما هي القطاعات التي تخدمونها؟",
        answer:
          "ندعم الجهات الحكومية، والرعاية الصحية، والقطاعات الصناعية والمؤسسية بحلول الثورة الصناعية الرابعة المخصّصة للمنطقة.",
      },
      {
        question: "كيف تقدمون البرامج التدريبية؟",
        answer:
          "نمزج بين ورش العمل الحية، والمحاكاة، والمنصات الرقمية مع تقييمات قبلية وبعدية لإثبات الأثر الفعلي.",
      },
      {
        question: "هل يمكن دمج الحلول مع الأنظمة الحالية؟",
        answer:
          "نعم، فالهندسات التي نقدمها قابلة للتكامل مع البيئات السحابية والمحلية وأنظمة التشغيل الصناعية.",
      },
      {
        question: "ما خيارات الدعم بعد التنفيذ؟",
        answer:
          "نوفر فرق نجاح بعد الإطلاق، ومراقبة على مدار الساعة، وخطط تحسين مستمرة لضمان بقاء المبادرات في مسارها.",
      },
      {
        question: "كيف نبدأ مشروعًا؟",
        answer:
          "تواصل معنا عبر صفحة الاتصال لحجز جلسة اكتشاف مع خبراء الدقة.",
      },
    ],
  },
} as const

export default function HomeFAQ() {
  const { language } = useLanguage()
  const copy = FAQ_COPY[language]
  const isArabic = language === "ar"

  const accordionType = useMemo(() => "single" as const, [])

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-[#f9f6f2] to-[#f3e2d6] pt-20 pb-48",
        isArabic && "arabic text-right"
      )}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className={cn("text-xs font-medium uppercase tracking-[0.3em] text-[#a1694b]", isArabic && "arabic")}>
            {copy.label}
          </p>
          <h2 className="mt-4 text-3xl font-light text-neutral-900 md:text-4xl">{copy.heading}</h2>
          <p className="mt-3 text-sm text-neutral-600">{copy.description}</p>
        </div>
        <div className="mt-10 pb-12">
          <Accordion type={accordionType} collapsible className="space-y-3">
            {copy.items.map((item, index) => (
              <AccordionItem
                key={`${language}-${index}`}
                value={`${language}-${index}`}
                className="overflow-hidden rounded-3xl bg-white px-6 py-4 shadow-[0_35px_100px_-70px_rgba(134,55,48,0.35)] ring-1 ring-[#e4d2c8]"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-neutral-900 hover:text-[#863730]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-sm leading-relaxed text-neutral-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
