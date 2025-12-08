"use client"

import { useMemo, useState } from "react"

import Footer from "@/components/footer"
import Header from "@/components/header"

type PortfolioItem = {
  client: string
  project: string
  description: string
}

type GroupedPortfolio = {
  client: string
  items: PortfolioItem[]
}

const normalizeClientName = (client: string) => {
  const withoutCountry = client.replace(/\s*\(.+\)/, "").trim()

  // Group all Ministry of Education variants under a single bucket.
  if (withoutCountry.includes("وزارة التربية والتعليم") || withoutCountry.includes("وزارة التعليم")) {
    return "وزارة التعليم"
  }

  return withoutCountry
}

const extractCountry = (client: string) => {
  const match = client.match(/\(([^)]+)\)/)
  return match ? match[1] : null
}

const portfolioItems: PortfolioItem[] = [
  {
    client: "أرامكو (السعودية)",
    project: "برنامج تدريب افتراضي",
    description:
      "تطوير برنامج تدريب VR متكامل لدورة السلامة والصحة المهنية (WPR)، بهدف رفع جاهزية العاملين بدون تعريضهم لمخاطر حقيقية.",
  },
  {
    client: "تطوير خدمات التعليم (السعودية)",
    project: "ثقافة مجموعة العشرين (G20)",
    description:
      "إعداد وحدات تعليمية رقمية وأنشطة تفاعلية مرتبطة بثقافة مجموعة العشرين، لدعم استضافة المملكة للقمة وتعزيز الوعي الثقافي عبر تقنيات تفاعلية.",
  },
  {
    client: "أرامكو (السعودية)",
    project: "برنامج المخاطر الافتراضي",
    description:
      "إنشاء تجربة واقع افتراضي توعوية تستهدف المجتمع، تُعنى بالتعريف بالمخاطر المحتملة داخل البيئة المنزلية وتعزيز مفاهيم السلامة.",
  },
  {
    client: "وزارة التربية والتعليم (الإمارات)",
    project: "أدلة التقييم للمواد الإنسانية",
    description:
      "إعداد وتصميم أدلة تقييم شاملة لمادتي اللغة العربية والدراسات الاجتماعية، لدعم التقييم المعياري والفعّال.",
  },
  {
    client: "وزارة التربية والتعليم (البحرين)",
    project: "مشروع مدارس جلالة الملك حمد للمستقبل",
    description:
      "تصميم وإنتاج مواد تعليمية تفاعلية لاستخدامها على أجهزة الآيباد والويندوز، لتحديث تجربة التعلم لدى الطلاب.",
  },
  {
    client: "تطوير خدمات التعليم (السعودية)",
    project: "500 فيديو تعليمي",
    description: "تنفيذ وتصميم وإنتاج 500 فيديو تعليمي عالي الجودة لدعم مناهج متنوعة.",
  },
  {
    client: "المدرسة الثانوية الفنية (الإمارات)",
    project: "كتب تفاعلية للآيباد",
    description:
      "إنتاج عناصر وكتب تعليمية تفاعلية متكاملة للآيباد، تعزز مشاركة الطلاب وتناسب مواد مختلفة.",
  },
  {
    client: "وزارة التعليم والتعليم العالي (قطر)",
    project: "مناهج اللغة العربية والعلوم الاجتماعية",
    description:
      "إنتاج مناهج تعليمية رقمية تفاعلية في اللغة العربية والعلوم الاجتماعية، لتطوير بيئة التعلم الرقمية للطلاب في قطر.",
  },
  {
    client: "SCIVR (الولايات المتحدة الأمريكية)",
    project: "حزمة VR لمواد STEM لطلاب K-12",
    description:
      "تطوير أكثر من 250 تطبيق VR تشمل: الأحياء، الكيمياء، علوم الأرض والفضاء، الرياضيات، الفيزياء، بالإضافة إلى وحدات تشريح الحيوانات واكتشاف المسارات المهنية، مما أحدث نقلة نوعية في تعليم STEM.",
  },
  {
    client: "Big Cloud (ليبيا)",
    project: "محاكاة هجمات الأمن السيبراني",
    description:
      "بناء بيئة تدريبية غامرة بالواقع الافتراضي لتدريب العاملين على اكتشاف، والاستجابة، واحتواء الهجمات السيبرانية المتقدمة على البنى التحتية للمؤسسات.",
  },
  {
    client: "30N Group (مصر)",
    project: "تجربة غرفة أخبار 2030 بتقنية VR",
    description:
      "تطوير تجربة غرفة أخبار مستقبلية بتقنية VR في عام 2030، تعتمد على أحدث تقنيات الواقع الافتراضي، لدعم الحملات التسويقية والاتصالات المؤسسية بشكل مبتكر وجذّاب.",
  },
]

export default function PortfolioPage() {
  const groupedItems = useMemo(() => {
    const groups = new Map<string, GroupedPortfolio>()

    portfolioItems.forEach((item) => {
      // Use the normalized client name to group related projects together.
      const baseClient = normalizeClientName(item.client)
      if (!groups.has(baseClient)) {
        groups.set(baseClient, { client: baseClient, items: [] })
      }
      groups.get(baseClient)!.items.push(item)
    })

    return Array.from(groups.values())
  }, [])

  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const activeGroup = groupedItems[activeGroupIndex]

  return (
    <>
      <Header variant="light" />
      <div className="bg-white text-neutral-900" dir="rtl" lang="ar">
        <main className="mx-auto max-w-6xl px-6 py-14">
          <section className="rounded-[32px] border border-[#e7dcd2] bg-white/95 p-6 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.4)]">
            <div className="space-y-3 text-right">
              <h1 className="text-3xl font-light text-neutral-900">المشاريع المنفّذة من قبل الشركة</h1>
              <p className="text-sm leading-relaxed text-neutral-700">
                تُعد شركة شركة رائدة عالميًا في حلول التعلّم والانخراط التفاعلي، ومختصة في تحويل القطاعات المختلفة من
                خلال تقنيات الواقع الممتد (XR). يوضح هذا الملف قدرتها المثبتة على تقديم تطبيقات واقع افتراضي ومعزز
                مبتكرة، قابلة للتوسع، وذات تأثير واضح في مجالات التعليم، التدريب المؤسسي، القطاع الحكومي، والقطاع
                الثقافي. فيما يلي مجموعة من أهم المشاريع التي تعكس خبراتهم ونتائجهم:
              </p>
              <div className="text-xl text-[#a1694b]">⸻</div>
              <p className="text-sm font-semibold text-neutral-800">العميل / المشروع / الوصف</p>
            </div>
          </section>

          <section className="mt-10 rounded-[34px] border border-[#e7dcd2] bg-white/95 p-6 shadow-[0_35px_110px_-75px_rgba(15,23,42,0.4)]">
            <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#863730] text-right">المشاريع</p>
                <div className="rounded-3xl border border-[#eadace] bg-[#f8f1ea] p-3">
                  <div className="flex flex-col gap-2 max-h-[440px] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                    {groupedItems.map((group, index) => {
                      const isActive = index === activeGroupIndex
                      return (
                        <button
                          key={group.client}
                          type="button"
                          onClick={() => setActiveGroupIndex(index)}
                          aria-pressed={isActive}
                          className={`flex items-center justify-between gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold transition duration-150 text-right ${
                            isActive
                              ? "border-[#c47c66] bg-white text-[#5a251b]"
                              : "border-transparent bg-transparent text-[#7a3b2f] hover:border-[#dfc8b7]"
                          }`}
                        >
                          <span className="line-clamp-1">{group.client}</span>
                          <span
                            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                              isActive ? "bg-[#f3e1d6] text-[#5a251b]" : "bg-[#f3ebe5] text-[#8a5b4a]"
                            }`}
                          >
                            {group.items.length}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#edded3] bg-white shadow-[0_30px_110px_-70px_rgba(15,23,42,0.3)] p-6 text-right">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#863730]">المشاريع</div>
                <h3 className="mt-3 text-lg font-semibold text-[#5a251b]">{activeGroup.client}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {activeGroup.items.map((item) => (
                    <div
                      key={`${item.client}-${item.project}`}
                      className="h-full rounded-2xl border border-[#edded3] bg-[#fdf9f6] p-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-[#5a251b]">{item.project}</p>
                      <p className="mt-1 text-xs font-medium text-neutral-700">{item.client}</p>
                      <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[#7a3b2f]">
                  <span className="h-px w-10 bg-[#e7dcd2]" aria-hidden />
                  <span className="font-semibold">
                    مشاريع متنوعة تحت نفس الجهة لعرض عمق الخبرة
                  </span>
                  <span className="h-px w-10 bg-[#e7dcd2]" aria-hidden />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
