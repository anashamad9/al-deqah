import type { Language } from "@/lib/i18n"
import type { Solution } from "@/lib/solutions"

type SolutionTranslation = {
  name?: string
  category?: string
  tagline?: string
  description?: string
  overview?: string
  stats?: Array<{
    label?: string
    description?: string
  }>
  features?: Array<{
    title?: string
    description?: string
  }>
  useCases?: Array<{
    title?: string
    description?: string
    bullets?: string[]
  }>
  techStack?: Array<{
    title?: string
  }>
  engagement?: Array<{
    title?: string
    description?: string
  }>
  differentiators?: Array<{
    title?: string
    description?: string
  }>
  cta?: {
    label?: string
    description?: string
  }
}

const SOLUTION_TRANSLATIONS: Record<string, Partial<Record<Language, SolutionTranslation>>> = {
  "medical-vr": {
    ar: {
      name: "الواقع الافتراضي الطبي",
      category: "الرعاية الصحية الغامرة",
      tagline: "منصات غامرة للمحاكاة الطبية والتدريب وتفاعل المرضى.",
      description:
        "قدّم بيئات افتراضية فائقة الواقعية تُسرّع التدريب السريري، وتُقصّر دورات التحضير الجراحي، وتمكّن المرضى من فهم رحلات العلاج.",
      overview:
        "تجمع برامج الواقع الافتراضي الطبية لدينا بين محاكاة عالية الدقة، وقياسات حيوية، وأطر تعلم مبنية على الأدلة، لمساعدة المستشفيات والجامعات ومصنّعي الأجهزة على تقديم رعاية أكثر أماناً وثقة.",
      stats: [
        {
          label: "خفض زمن التدريب",
          description: "انخفاض متوسط بنسبة 45% في وقت تأهيل الكوادر الطبية الجديدة.",
        },
        {
          label: "زيادة الاحتفاظ بالمعرفة",
          description: "تحسّن قدره 3.5× في تذكر الإجراءات مقارنة بالتدريب التقليدي.",
        },
        {
          label: "رضى المرضى",
          description: "تقارير أعلى من المرضى حول وضوح خطط العلاج.",
        },
      ],
      features: [
        {
          title: "توائم رقمية تشريحية",
          description: "نماذج بشرية شديدة الواقعية مع حالات مرضية مبنية على بيانات CT/MRI لمسارات تدريب مخصصة.",
        },
        {
          title: "إحساس حركي بواقع مختلط",
          description: "تكامل مع أجهزة اللمس والأدوات الجراحية وتتبع الحركة لتغذية حسية حركية.",
        },
        {
          title: "تحليلات التعلم",
          description: "لوحات متابعة الكفاءة مع تطور المهارات، وخريطة أخطاء، ودليل معتمد للمعالجة.",
        },
        {
          title: "توزيع محتوى آمن",
          description: "صلاحيات وصول بحسب الأدوار وتعبئة جاهزة للعمل دون اتصال للنشر متعدد المواقع.",
        },
      ],
      useCases: [
        {
          title: "التدريب الجراحي واعتماد المهارات",
          description: "محاكاة الإجراءات المعقدة، والتقاط بيانات الأداء، وإصدار تقارير الكفاءة لجهات الاعتماد.",
          bullets: ["تجارب إعادة المحاكاة لجراحات القلب والدماغ", "تمارين الاستجابة للطوارئ", "تمكين اعتماد الأجهزة الطبية"],
        },
        {
          title: "تدريب التمريض والمهن الطبية المساندة",
          description: "إعادة إنشاء السيناريوهات عالية الضغط مثل العناية المركزة أو وحدات حديثي الولادة لبناء اتخاذ القرار والعمل الجماعي.",
          bullets: ["تشعب السيناريوهات وتقييم المجموعات", "تعاون متعدد المستخدمين", "مراقبة الإجهاد والإرهاق"],
        },
        {
          title: "تثقيف المرضى والدعم العلاجي",
          description: "تقديم رحلات غامرة للمرضى توضح الإجراءات، وتدعم الالتزام بالعلاج، وتخفف القلق.",
          bullets: ["جولات تمهيدية قبل العمليات", "إزالة الحساسية من الفوبيا", "العلاج السلوكي بالتعرّض"],
        },
      ],
      techStack: [
        { title: "المحركات وسير العمل" },
        { title: "الأجهزة والواجهات" },
        { title: "البيانات والامتثال" },
        { title: "التحليلات والقياس" },
      ],
      engagement: [
        {
          title: "الاستكشاف والتحقق",
          description: "ورش عمل مع أصحاب المصلحة، مواءمة مع المستشارين الإكلينيكيين، وتعريف مؤشرات النجاح.",
        },
        {
          title: "مخطط التجربة",
          description: "لوحات سرد غامرة، تخطيط التقاط الأصول، وتحديد بنية المحاكاة.",
        },
        {
          title: "البناء والتكامل",
          description: "إنتاج المحتوى، دمج اللمس، تعزيزه للامتثال، ونشره على السحابة.",
        },
        {
          title: "الإطلاق والتحسين",
          description: "تمكين المدربين، ضبط التحليلات، وتحديث المحتوى والدعم المستمر.",
        },
      ],
      differentiators: [
        {
          title: "شبكة استشارات سريرية",
          description: "التعاون مع جراحين وممرضين ومربين ممارسين للتحقق من الواقعية واعتماد المناهج.",
        },
        {
          title: "نتائج مدعومة بالأدلة",
          description: "دراسات تجريبية منظمة وتقارير جاهزة لمجالس المراجعة لإثبات العائد السريري والمالي.",
        },
        {
          title: "بنية قابلة للتشغيل البيني",
          description: "ربط تجارب الواقع الافتراضي مع نظم LMS وEMR ومنصات الاعتماد لطبقة بيانات موحدة.",
        },
      ],
      cta: {
        label: "حدد ورشة عمل للواقع الافتراضي الطبي",
        description: "حدد خارطة طريقك الغامرة مع فريق الابتكار السريري لدينا.",
      },
    },
  },
  "ai-data-science": {
    ar: {
      name: "الذكاء الاصطناعي وعلوم البيانات",
      category: "المنصات الذكية",
      tagline: "فعّل الذكاء الاصطناعي الموثوق عبر مؤسستك.",
      description:
        "صمّم بنى البيانات وخطوط التعلم الآلي وتدفقات القرارات الذكية الممتدة من النموذج الأولي إلى العمليات الحرجة.",
      overview:
        "نبني منتجات ذكاء اصطناعي تحرك مؤشرات الأداء من خلال مكدسات بيانات حديثة، وحوكمة للنماذج، وتصميم يركز على الإنسان، حتى يثق الفرق بالقرارات المدفوعة بالذكاء الاصطناعي.",
      stats: [
        {
          label: "زمن الوصول إلى الرؤية",
          description: "تسريع دورات التحليلات عبر خطوط مؤتمتة.",
        },
        {
          label: "جاهزية النماذج",
          description: "تشغيل موثوق لخدمات التنبؤ المستمرة.",
        },
        {
          label: "خفض المخاطر",
          description: "مراقبة الانحراف والتحيز تقلل التصعيدات التنظيمية.",
        },
      ],
      features: [
        {
          title: "أسس بيانات حديثة",
          description: "بناء بحيرات Medallion وأنماط Mesh وإدخال مع تتبع السلالات لمرونة التحليلات.",
        },
        {
          title: "تشغيل كامل لدورة حياة التعلم الآلي",
          description: "متاجر الميزات، إعادة التدريب المؤتمتة، وCI/CD للنماذج عبر السحابة والحافة والبيئات المحلية.",
        },
        {
          title: "حواجز أمان للذكاء الاصطناعي المسؤول",
          description: "بطاقات النماذج، لوحات التفسير، واختبارات العدالة للامتثال للمعايير التنظيمية والأخلاقية.",
        },
        {
          title: "تطبيقات ذكاء القرار",
          description: "أطر واجهات قابلة للتكوين لإ嵌ار التوصيات المدفوعة بالذكاء الاصطناعي داخل تدفقات العمل.",
        },
      ],
      useCases: [
        {
          title: "الصيانة التنبؤية",
          description: "كشف الشذوذ المتدفق لأصول الصناعة مع تنسيق أوامر العمل المؤتمتة.",
          bullets: ["دمج لحظي لمستشعرات متعددة", "تسجيل احتمالية الأعطال", "جدولة توقف تلقائية"],
        },
        {
          title: "ذكاء العملاء",
          description: "محركات أفضل إجراء تالٍ ونماذج منع التسرب المتكاملة مع أتمتة التسويق.",
          bullets: ["تجميع هويات بزاوية 360°", "رحلات تخصيص موجهة", "قياس الأثر الإضافي"],
        },
        {
          title: "تحليلات المخاطر والامتثال",
          description: "كشف الاحتيال، مكافحة غسل الأموال، والتقارير التنظيمية باستخدام سير عمل ذكاء اصطناعي قابل للتدقيق.",
          bullets: ["كشف شذوذ قائم على الرسوم البيانية", "تقييم مخاطر قابل للتفسير", "توليد تقارير مؤتمتة"],
        },
      ],
      techStack: [
        { title: "منصات البيانات" },
        { title: "أطر التعلم الآلي" },
        { title: "التشغيل والحوكمة" },
        { title: "ذكاء الأعمال والتفعيل" },
      ],
      engagement: [
        {
          title: "تحديد أولويات حالات الاستخدام",
          description: "تقييم القيمة، جاهزية البيانات، ودلائل العائد على الاستثمار.",
        },
        {
          title: "بناء النموذج الأولي",
          description: "تطوير نماذج سريع، تحقق في وضع Shadow، ونماذج أولية للواجهات.",
        },
        {
          title: "التدعيم للإنتاج",
          description: "أتمتة MLOps، ضوابط الحوكمة، وتمكين القوى العاملة.",
        },
        {
          title: "التبني والتوسع",
          description: "تصميم نموذج التشغيل، رفع قدرات الفرق الداخلية، ودعم مدار.",
        },
      ],
      differentiators: [
        {
          title: "كتيبات نتائج أولاً",
          description: "قوالب ومسرّعات مهيأة للقطاعات الصناعية والحكومية والمالية.",
        },
        {
          title: "حوكمة مدمجة",
          description: "خبراء المخاطر والامتثال والأخلاقيات مضمنون داخل فرق التنفيذ.",
        },
        {
          title: "خبرة السحابة الهجينة",
          description: "خبرة في تشغيل الأعباء الحساسة عبر السحابة العامة والمناطق السيادية.",
        },
      ],
      cta: {
        label: "احجز جلسة استراتيجية للذكاء الاصطناعي",
        description: "اكتشف المكاسب السريعة واستثمارات منصات البيانات طويلة الأمد.",
      },
    },
  },
  "xr-immersive": {
    ar: {
      name: "الواقع الممتد والتجارب الغامرة",
      category: "الواقع الممتد",
      tagline: "قصص ومساحات تستجيب لكل حركة.",
      description:
        "صمّم تجارب إطلاق العلامات التجارية، وبيئات التدريب، وصالات العرض الرقمية التي تمزج بين العالمين المادي والافتراضي.",
      overview:
        "من عروض المسرح بالواقع المختلط إلى الجامعات الافتراضية التعاونية، ننظم سرداً مكانياً يعمّق التفاعل ويولد مصادر دخل جديدة.",
      stats: [
        {
          label: "زيادة التفاعل",
          description: "متوسط زيادة زمن التواجد ثلاث مرات عبر الوجهات الغامرة.",
        },
        {
          label: "نطاق النشر",
          description: "أكثر من 50 موقعاً مداراً عبر التجزئة والفعاليات ومراكز التعلم.",
        },
        {
          label: "الجاهزية",
          description: "منصات تجارب مراقبة على مدار الساعة مع دعم استباقي.",
        },
      ],
      features: [
        {
          title: "تصميم السرد المكاني",
          description: "أقواس قصصية مرتبطة بمحفزات مكانية، والتقاط حجمي، وإضاءة تفاعلية.",
        },
        {
          title: "تعاون متعدد المستخدمين",
          description: "بيئات افتراضية مشتركة، تنظيم صور رمزية، وتكامل بث الأحداث المباشرة.",
        },
        {
          title: "تحليلات التجربة",
          description: "خرائط حرارية، مسارات تفاعل، ومدخلات حيوية لتحسين الرحلات في الزمن الحقيقي.",
        },
        {
          title: "إدارة دورة حياة الأجهزة",
          description: "توفير الأجهزة، تحديثات عن بعد، ولوحات تشغيل لأساطيل XR موزعة.",
        },
      ],
      useCases: [
        {
          title: "إطلاق العلامات التجارية الغامر",
          description: "تنشيطات هجينة بتزامن مادي-افتراضي وآليات تضخيم اجتماعي.",
          bullets: ["إسقاطات خرائطية بحجم المكان", "خطوط مؤثرات بصرية فورية", "تكامل NFT وبرامج الولاء"],
        },
        {
          title: "مراكز التعاون المكاني",
          description: "بيئات آمنة دائمة للمراجعات التصميمية، والاجتماعات العامة، وورش العمل المشتركة مع العملاء.",
          bullets: ["تكامل هويات الشركات", "أدوات مراجعة الأصول ثلاثية الأبعاد", "الكتابة والتعليق المباشر"],
        },
        {
          title: "التعلم الغامر والتأهيل",
          description: "تدريب على المهارات السلوكية، ومحاكاة الامتثال، وتحليلات الاحتفاظ بالمعرفة.",
          bullets: ["تشعب سيناريوهات تكيفية", "تحليلات الكلام والإيماءات", "تكامل LMS / LXP"],
        },
      ],
      techStack: [
        { title: "محركات التجربة" },
        { title: "الأجهزة الغامرة" },
        { title: "منصات التجربة" },
        { title: "التحليلات والتشغيل" },
      ],
      engagement: [
        {
          title: "مختبر المفهوم والسرد",
          description: "إطار السرد، اللغة البصرية، ونمذجة التفاعل.",
        },
        {
          title: "هندسة التجربة",
          description: "سباقات تطوير مع المؤثرات الصوتية والبصرية والتكاملات النظامية.",
        },
        {
          title: "تنسيق الإطلاق",
          description: "تنسيق تقني للموقع، بروفات، وخطط التعافي.",
        },
        {
          title: "التشغيل والتطوير",
          description: "مراقبة لحظية، دورات تحديث المحتوى، وتحسين الأداء.",
        },
      ],
      differentiators: [
        {
          title: "إنتاج متكامل الطرفين",
          description: "فرق إبداعية وتقنية وتشغيلية تحت سقف واحد.",
        },
        {
          title: "محايد للمنصة",
          description: "نشر محلي أو بث سحابي أو أجهزة مستقلة بلا التزام.",
        },
        {
          title: "إبداع مدفوع بالبيانات",
          description: "تهيئة قياس البيانات داخل العملية الإبداعية منذ اليوم الأول.",
        },
      ],
      cta: {
        label: "خطط لتجربة غامرة",
        description: "تعاون معنا لصناعة لحظة XR لا تُنسى مع استوديو التجارب المكانية لدينا.",
      },
    },
  },
  "iot-platforms": {
    ar: {
      name: "منصات إنترنت الأشياء",
      category: "ذكاء متصل",
      tagline: "أدِر العالم المادي بحلول موثوقة من الحافة إلى السحابة.",
      description:
        "التقط بيانات الأجهزة وعالجها وتفاعل معها عبر منصات إنترنت الأشياء الآمنة المصممة للقطاع الصناعي والمدن الذكية.",
      overview:
        "نصمم شبكات الاستشعار، واستراتيجيات الاتصال، وتطبيقات الأحداث التي تتيح الوعي الفوري والأتمتة للعمليات الحرجة.",
      stats: [
        {
          label: "استجابة الحافة",
          description: "معالجة حتمية على الحافة لاتخاذ إجراءات حساسة للزمن.",
        },
        {
          label: "نطاق التغطية",
          description: "إدارة أساطيل تضم أكثر من 500 ألف جهاز عبر المرافق واللوجستيات والمدن الذكية.",
        },
        {
          label: "وضع الأمان",
          description: "مراقبة مستمرة وفق IEC 62443 وNIST.",
        },
      ],
      features: [
        {
          title: "تشغيل الأجهزة ودورة حياتها",
          description: "توفير آمن، تدوير الشهادات، وإدارة البرامج الثابتة عن بعد على مستوى الأسطول.",
        },
        {
          title: "تحليلات الحافة",
          description: "معالجة تدفق، محركات قواعد، واستدلال تعلم آلي يُنشر على البوابات الصلبة.",
        },
        {
          title: "الأوامر والتحكم",
          description: "مراسلة ثنائية الاتجاه مع مسارات تفعيل آمنة وإشراف بشري عند الحاجة.",
        },
        {
          title: "مراكز القيادة الرقمية",
          description: "لوحات عمليات تدمج طبقات GIS والبيانات اللحظية وسير تنبيه.",
        },
      ],
      useCases: [
        {
          title: "المرافق الذكية والطاقة",
          description: "مراقبة الشبكات، الاستجابة للطلب، والصيانة التنبؤية للبنى التحتية الحيوية.",
          bullets: ["تكامل AMI وSCADA", "تنبؤ الأعطال وتوجيه الفرق", "تنسيق موارد الطاقة الموزعة"],
        },
        {
          title: "اللوجستيات وتتبع الأصول",
          description: "مراقبة سلسلة التبريد، تتبع الأساطيل، وأتمتة المستودعات.",
          bullets: ["خدمات تحديد المواقع في الزمن الحقيقي", "تنبيهات مبنية على الحالة", "إرشادات عمل رقمية"],
        },
        {
          title: "المدن الذكية والبيئات المبنية",
          description: "استشعار بيئي، إضاءة تكيفية، وإدارة مرافق ذكية.",
          bullets: ["اتصال LoRaWAN / 5G", "منصات تبادل البيانات الحضرية", "أتمتة مستندة إلى الإشغال"],
        },
      ],
      techStack: [
        { title: "الاتصال" },
        { title: "الحافة والبوابات" },
        { title: "منصات السحابة" },
        { title: "التصور" },
      ],
      engagement: [
        {
          title: "مخطط الاتصال",
          description: "مسوحات المواقع، اختيار الأجهزة، وبنية الأمان.",
        },
        {
          title: "الاختبار والتحقق",
          description: "إثباتات مفاهيم بأجهزة حقيقية ومعايير لقياس العائد.",
        },
        {
          title: "بناء المنصة",
          description: "برامج الحافة، تكامل السحابة، وخطوط تفعيل البيانات.",
        },
        {
          title: "التشغيل والتوسع",
          description: "مركز عمليات على مدار الساعة، دعم وفق اتفاقيات الخدمة، ودورات تحسين مستمرة.",
        },
      ],
      differentiators: [
        {
          title: "خبرة البيئات القاسية",
          description: "خبرة عبر النفط والغاز والمرافق والحرم الموسعة.",
        },
        {
          title: "تسليم يركز على الأمان",
          description: "اختبارات اختراق، إدارة SBOM، وتطبيق السياسات ضمن العملية.",
        },
        {
          title: "التوافق والمعايير",
          description: "دعم نماذج البيانات المفتوحة والأنظمة المؤسسية القائمة.",
        },
      ],
      cta: {
        label: "استكشف تسريع إنترنت الأشياء",
        description: "حدد أسرع طريق من المستشعرات إلى الرؤى المؤسسية.",
      },
    },
  },
  "digital-twins": {
    ar: {
      name: "التوائم الرقمية",
      category: "المحاكاة التشغيلية",
      tagline: "زامن النسخ الرقمية مع العمليات الواقعية.",
      description:
        "ابنِ نسخاً رقمية متصلة بالبيانات للأصول والمرافق والعمليات لمحاكاة السيناريوهات، وتوقع النتائج، ودعم الأتمتة الذكية.",
      overview:
        "تمزج منصات التوائم الرقمية لدينا بين إنترنت الأشياء، والتصور ثلاثي الأبعاد، والذكاء الاصطناعي لتمكين الفرق التشغيلية من رؤية حية للنظام الشامل تدعم القرارات الاستراتيجية.",
      stats: [
        {
          label: "تجنب التوقف",
          description: "منع حالات التعطل من خلال المحاكاة الاستباقية والتنبيهات.",
        },
        {
          label: "سرعة القرار",
          description: "تحليل سيناريوهات أسرع بخمس مرات للمخططين وفرق الميدان.",
        },
        {
          label: "توحيد البيانات",
          description: "متوسط 12 مصدراً يتم توحيدها في كل نشر.",
        },
      ],
      features: [
        {
          title: "مزامنة لحظية",
          description: "تدفقات بيانات ثنائية الاتجاه تُبقي النماذج الافتراضية متطابقة مع الأنظمة الواقعية.",
        },
        {
          title: "بيئة سيناريوهات آمنة",
          description: "تشغيل محاكاة ماذا لو، اختبارات ضغط، وتدخلات تنبؤية بأمان.",
        },
        {
          title: "طبقة تصور ثلاثي الأبعاد",
          description: "تصيير فوتوغرافي مدعوم ببيانات جغرافية وبنائية.",
        },
        {
          title: "رؤى مدعومة بالذكاء الاصطناعي",
          description: "استدلال الأسباب الجذرية، إجراءات إرشادية، وحلقات تحسين ذاتية.",
        },
      ],
      useCases: [
        {
          title: "التصنيع الذكي",
          description: "تحسين خطوط الإنتاج، تحليلات سلامة العاملين، وتوقع الطاقة الإنتاجية.",
          bullets: ["كشف الاختناقات", "نمذجة تفاعل الإنسان/الروبوت", "جدولة ديناميكية"],
        },
        {
          title: "البنية التحتية والمرافق",
          description: "موازنة الشبكات، إدارة دورة حياة الأصول، والاستعداد للكوارث.",
          bullets: ["محاكاة تأثير العواصف", "تقييم صحة الأصول", "أتمتة التقارير التنظيمية"],
        },
        {
          title: "التخطيط الحضري",
          description: "محاكاة التنقل، نمذجة الأثر البيئي، وبوابات تفاعل المواطنين.",
          bullets: ["نمذجة الحركة والانبعاثات", "تصورات المشاركة العامة", "لوحات مقارنة السيناريوهات"],
        },
      ],
      techStack: [
        { title: "النمذجة والتصور" },
        { title: "تكامل البيانات" },
        { title: "التحليلات والذكاء الاصطناعي" },
        { title: "التعاون" },
      ],
      engagement: [
        {
          title: "استراتيجية التوأم",
          description: "تحديد الأصول والبيانات ذات الأولوية وفرضيات العائد.",
        },
        {
          title: "البناء الأساسي",
          description: "نمذجة البيانات، الالتقاط ثلاثي الأبعاد، والتكامل مع الأنظمة الحية.",
        },
        {
          title: "طبقة المحاكاة والذكاء الاصطناعي",
          description: "مكتبات السيناريوهات، النماذج التنبؤية، وسير التنبيه.",
        },
        {
          title: "التبني والحوكمة",
          description: "تعريف نموذج التشغيل، التدريب، والتحسين المستمر.",
        },
      ],
      differentiators: [
        {
          title: "نسيج توائم متعدد المجالات",
          description: "ربط توائم الأصول والعمليات والأفراد لرؤى شمولية.",
        },
        {
          title: "رؤى قابلة للتنفيذ",
          description: "تكاملات مع CMMS وERP وأنظمة الأتمتة لإغلاق الحلقة.",
        },
        {
          title: "خيارات نشر سيادية",
          description: "دعم البيئات المحلية والمعزولة عند الحاجة.",
        },
      ],
      cta: {
        label: "صغ خارطة طريقك للتوأمة الرقمية",
        description: "حدد الأصول والمحاكاة التي تحقق أثراً قابلاً للقياس سريعاً.",
      },
    },
  },
}

function applyTranslation(solution: Solution, translation: SolutionTranslation): Solution {
  return {
    ...solution,
    name: translation.name ?? solution.name,
    category: translation.category ?? solution.category,
    tagline: translation.tagline ?? solution.tagline,
    description: translation.description ?? solution.description,
    overview: translation.overview ?? solution.overview,
    stats: solution.stats.map((stat, index) => {
      const statTranslation = translation.stats?.[index]
      return {
        ...stat,
        label: statTranslation?.label ?? stat.label,
        description: statTranslation?.description ?? stat.description,
      }
    }),
    features: solution.features.map((feature, index) => {
      const featureTranslation = translation.features?.[index]
      return {
        ...feature,
        title: featureTranslation?.title ?? feature.title,
        description: featureTranslation?.description ?? feature.description,
      }
    }),
    useCases: solution.useCases.map((useCase, index) => {
      const useCaseTranslation = translation.useCases?.[index]
      return {
        ...useCase,
        title: useCaseTranslation?.title ?? useCase.title,
        description: useCaseTranslation?.description ?? useCase.description,
        bullets: useCaseTranslation?.bullets
          ? [...useCaseTranslation.bullets]
          : useCase.bullets
            ? [...useCase.bullets]
            : undefined,
      }
    }),
    techStack: solution.techStack.map((category, index) => {
      const categoryTranslation = translation.techStack?.[index]
      return {
        ...category,
        title: categoryTranslation?.title ?? category.title,
        items: [...category.items],
      }
    }),
    engagement: solution.engagement.map((step, index) => {
      const stepTranslation = translation.engagement?.[index]
      return {
        ...step,
        title: stepTranslation?.title ?? step.title,
        description: stepTranslation?.description ?? step.description,
      }
    }),
    differentiators: solution.differentiators.map((item, index) => {
      const differentiatorTranslation = translation.differentiators?.[index]
      return {
        ...item,
        title: differentiatorTranslation?.title ?? item.title,
        description: differentiatorTranslation?.description ?? item.description,
      }
    }),
    cta: {
      ...solution.cta,
      label: translation.cta?.label ?? solution.cta.label,
      description: translation.cta?.description ?? solution.cta.description,
    },
  }
}

export function getLocalizedSolution(solution: Solution, language: Language): Solution {
  if (language === "en") {
    return {
      ...solution,
      stats: solution.stats.map((stat) => ({ ...stat })),
      features: solution.features.map((feature) => ({ ...feature })),
      useCases: solution.useCases.map((useCase) => ({
        ...useCase,
        bullets: useCase.bullets ? [...useCase.bullets] : undefined,
      })),
      techStack: solution.techStack.map((category) => ({
        ...category,
        items: [...category.items],
      })),
      engagement: solution.engagement.map((step) => ({ ...step })),
      differentiators: solution.differentiators.map((item) => ({ ...item })),
      cta: { ...solution.cta },
    }
  }

  const translation = SOLUTION_TRANSLATIONS[solution.slug]?.[language]
  if (!translation) {
    return getLocalizedSolution(solution, "en")
  }

  return applyTranslation(solution, translation)
}

export function getLocalizedSolutions(language: Language, solutions: Solution[]): Solution[] {
  return solutions.map((solution) => getLocalizedSolution(solution, language))
}
