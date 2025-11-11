#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const sourcePath = path.join(__dirname, "..", "public", "التدريب - انس.txt")
const outputPath = path.join(__dirname, "..", "lib", "training-catalog-data.json")

const categoryMeta = [
  {
    id: "administrative",
    header: "البرامج الإدارية",
    title: {
      en: "Administrative Programs",
      ar: "البرامج الإدارية",
    },
    description: {
      en: "Leadership, governance, and organizational excellence programmes covering strategy, operations, talent, and change.",
      ar: "برامج قيادية وتنظيمية تغطي الاستراتيجية، الحوكمة، إدارة المواهب، والتحول المؤسسي.",
    },
  },
  {
    id: "technology",
    header: "برامج التكنولوجيا",
    title: {
      en: "Technology & Digital Innovation",
      ar: "برامج التكنولوجيا",
    },
    description: {
      en: "AI, cybersecurity, data, and digital transformation programmes that build modern technical capabilities.",
      ar: "برامج في الذكاء الاصطناعي، الأمن السيبراني، البيانات، والتحول الرقمي لبناء قدرات تقنية حديثة.",
    },
  },
  {
    id: "oil-gas",
    header: "البرامج الفنية لقطاع النفط والغاز",
    title: {
      en: "Oil & Gas Technical Programs",
      ar: "البرامج الفنية لقطاع النفط والغاز",
    },
    description: {
      en: "Specialized technical tracks that strengthen upstream, midstream, downstream, and energy-transition operations.",
      ar: "مسارات فنية متخصصة لتعزيز عمليات الاستكشاف والإنتاج والتكرير والاستدامة في قطاع النفط والغاز.",
    },
  },
  {
    id: "financial",
    header: "البرامج المالية",
    title: {
      en: "Financial Programs",
      ar: "البرامج المالية",
    },
    description: {
      en: "Finance, accounting, treasury, and banking curricula that modernize reporting, analytics, and governance.",
      ar: "برامج مالية ومحاسبية ومصرفية تطور التقارير والتحليلات والحوكمة داخل المؤسسات.",
    },
  },
  {
    id: "engineering",
    header: "البرامج الهندسية",
    title: {
      en: "Engineering Programs",
      ar: "البرامج الهندسية",
    },
    description: {
      en: "Infrastructure, GIS, BIM, CAD, and industrial design programmes for multidisciplinary engineering teams.",
      ar: "برامج في البنية التحتية، ونظم المعلومات الجغرافية، وBIM، وCAD، والتصميم الصناعي للفرق الهندسية متعددة التخصصات.",
    },
  },
]

const manualCategories = [
  {
    id: "vr",
    title: {
      en: "Immersive & VR Simulations",
      ar: "برامج الواقع الافتراضي",
    },
    description: {
      en: "Scenario-based simulations for safety, crisis response, and customer experience using VR and XR.",
      ar: "محاكاة تفاعلية للسلامة وإدارة الأزمات وتحسين تجربة المتعاملين باستخدام تقنيات الواقع الافتراضي والواقع الممتد.",
    },
    programs: [
      {
        title: {
          en: "Safety & Firefighting in Oil Facilities",
          ar: "برنامج السلامة ومكافحة الحرائق في المنشآت النفطية",
        },
        hours: { en: "16 training hours", ar: "16 ساعة تدريبية" },
        objectives: {
          en: [
            "Full-scale simulation of facility fire scenarios, covering evacuation and the use of firefighting systems.",
          ],
          ar: [
            "يتضمن محاكاة حريق كامل داخل منشأة نفطية، مع تدريب مباشر على الاستجابة، الإخلاء، واستخدام أدوات الإطفاء.",
          ],
        },
      },
      {
        title: {
          en: "Confined Space Entry",
          ar: "برنامج الدخول الآمن إلى الأماكن الضيقة والمغلقة",
        },
        hours: { en: "12 training hours", ar: "12 ساعة تدريبية" },
        objectives: {
          en: [
            "Protocols for entering tanks and piping, recognising hidden hazards, and making safe decisions in 3D environments.",
          ],
          ar: [
            "يركّز على بروتوكولات دخول الخزانات والأنابيب، والتعرف على المخاطر الكامنة، وكيفية اتخاذ قرارات آمنة في بيئة ثلاثية الأبعاد.",
          ],
        },
      },
      {
        title: {
          en: "Oil Spill Response Simulation",
          ar: "برنامج الاستجابة لتسربات النفط واحتوائها",
        },
        hours: { en: "18 training hours", ar: "18 ساعة تدريبية" },
        objectives: {
          en: [
            "Immersive exercise covering offshore and onshore spill containment, environmental procedures, and international protocols.",
          ],
          ar: [
            "محاكاة تسرب نفطي شامل في البحر أو على اليابسة، مع تطبيق عملي للإجراءات البيئية والبروتوكولات الدولية.",
          ],
        },
      },
      {
        title: {
          en: "Crisis Leadership Under Pressure",
          ar: "برنامج إدارة الأزمات والقيادة تحت الضغط",
        },
        hours: { en: "12 training hours", ar: "12 ساعة تدريبية" },
        objectives: {
          en: [
            "Immersive crisis scenario requiring rapid decisions, team direction, and continuity assurance.",
          ],
          ar: [
            "ينقل المتدرب إلى موقف أزمة معقدة تتطلب قرارات سريعة، توجيه الفريق، وضمان استمرارية التشغيل.",
          ],
        },
      },
      {
        title: {
          en: "Security Video Leak Response",
          ar: "برنامج خاص: الاستجابة لتسرب فيديو أمني عبر وسائل التواصل الاجتماعي",
        },
        hours: { en: "10 training hours", ar: "10 ساعة تدريبية" },
        objectives: {
          en: [
            "Unique simulation covering viral video leaks, media handling, and coordination between security, legal, and communications teams.",
          ],
          ar: [
            "برنامج يحاكي تسريب فيديو داخلي وانتشاره على السوشيال ميديا، ويركز على التعامل الإعلامي والأمني والتنسيق بين الفرق التقنية والإدارية للسيطرة على الموقف.",
          ],
        },
      },
    ].map((program, index) => ({
      id: `vr-${String(index + 1).padStart(3, "0")}`,
      ...program,
    })),
  },
]

const normalizeLine = (line) =>
  line
    .replace(/[\u2028\u2029\u202a\u202b\u202c\u202d\u202e\u200f\u200e]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

const raw = fs.readFileSync(sourcePath, "utf8")
const lines = raw.split(/\r?\n/).map((line) => normalizeLine(line))

const headersByValue = new Map(categoryMeta.map((meta, index) => [meta.header, { ...meta, index }]))
const categories = categoryMeta.map((meta) => ({ ...meta, programs: [] }))

let currentCategory = null
let currentCategoryIndex = -1
let pendingCategoryIndex = null
let awaitingTitle = false
let currentProgram = null

const IGNORED_LINES = new Set(["الرقم", "اسم البرنامج", "الأهداف العامة", "عدد الساعات التدريبية", "الهدف العام"])

const isHeader = (line) => headersByValue.has(line)

for (const line of lines) {
  if (!line || line === "\f") {
    continue
  }

  if (isHeader(line)) {
    const meta = headersByValue.get(line)
    if (meta && pendingCategoryIndex === null) {
      if (currentCategoryIndex < 0) {
        if (meta.index === 0) {
          pendingCategoryIndex = 0
        }
      } else {
        pendingCategoryIndex = meta.index
      }
    }
    continue
  }

  if (!currentCategory) {
    if (pendingCategoryIndex !== null && (line === "الرقم" || line === "اسم البرنامج" || line === "الأهداف العامة")) {
      currentCategoryIndex = pendingCategoryIndex
      currentCategory = categories[currentCategoryIndex]
      pendingCategoryIndex = null
    }
    continue
  }

  if (IGNORED_LINES.has(line)) {
    if (pendingCategoryIndex !== null && line === "الرقم") {
      currentCategoryIndex = pendingCategoryIndex
      currentCategory = categories[currentCategoryIndex]
      pendingCategoryIndex = null
    }
    continue
  }

  if (line === "•") {
    awaitingTitle = true
    continue
  }

  if (awaitingTitle) {
    currentProgram = {
      id: `${currentCategory.id}-${String(currentCategory.programs.length + 1).padStart(3, "0")}`,
      title: { en: line, ar: line },
      hours: { en: "", ar: "" },
      objectives: { en: [], ar: [] },
    }
    currentCategory.programs.push(currentProgram)
    awaitingTitle = false
    continue
  }

  if (line.startsWith("•")) {
    const objective = line.replace(/^•\s*/, "").trim()
    if (currentProgram && objective) {
      currentProgram.objectives.ar.push(objective)
      currentProgram.objectives.en.push(objective)
    }
    continue
  }

  if (line.includes("ساعة") && line.includes("تدريب")) {
    const digits = line.match(/\d+/)
    const hoursEn = digits ? `${digits[0]} training hours` : line
    if (currentProgram) {
      currentProgram.hours.ar = line
      currentProgram.hours.en = hoursEn
      currentProgram = null
    }
    continue
  }

  if (currentProgram && currentProgram.objectives.ar.length === 0) {
    currentProgram.title.ar = `${currentProgram.title.ar} ${line}`.trim()
    currentProgram.title.en = `${currentProgram.title.en} ${line}`.trim()
    continue
  }
}

const dataset = [...categories, ...manualCategories]

fs.writeFileSync(outputPath, JSON.stringify(dataset, null, 2), "utf8")
console.log(`training catalog data generated at ${outputPath}`)
