import type { Language } from "@/lib/i18n"

type LocalizedString = Record<Language, string>

type LocalizedItem<T extends Record<string, unknown> = Record<string, unknown>> = {
  copy: LocalizedString
} & T

export const homepageCopy = {
  services: {
    sectionLabel: {
      en: "Our",
      ar: "خدماتنا",
    } as LocalizedString,
    sectionAccent: {
      en: "Services",
      ar: "الرئيسية",
    } as LocalizedString,
    description: {
      en: "Al-Deqah delivers cutting-edge technology solutions across multiple domains",
      ar: "تقدم شركة الدقة حلولاً تقنية متقدمة عبر مجالات متعددة",
    } as LocalizedString,
    exploreLabel: {
      en: "Explore",
      ar: "استكشف",
    } as LocalizedString,
    items: [
      {
        key: "cyber",
        href: "/solutions/cybersecurity-risk",
        copy: {
          en: {
            title: "Cybersecurity & Digital Threat Intelligence",
            description: "Layered defenses, monitoring, and governance that neutralize modern cyber risks.",
          },
          ar: {
            title: "الأمن السيبراني واستخبارات التهديدات الرقمية",
            description: "دفاعات متعددة الطبقات ومراقبة مستمرة وحوكمة تقلل المخاطر الإلكترونية الحديثة.",
          },
        },
      },
      {
        key: "software",
        href: "/solutions/software-engineering",
        copy: {
          en: {
            title: "Systems & Application Engineering",
            description: "Custom enterprise systems, web apps, and mobile experiences with smooth integrations.",
          },
          ar: {
            title: "تطوير الأنظمة والتطبيقات البرمجية",
            description: "أنظمة وتطبيقات مخصصة مع واجهات سهلة وتكامل سلس لدعم العمليات.",
          },
        },
      },
      {
        key: "ai",
        href: "/solutions/ai-data-science",
        copy: {
          en: {
            title: "AI & Advanced Data Analytics",
            description: "Predictive models and decision intelligence powered by trusted data pipelines.",
          },
          ar: {
            title: "الذكاء الاصطناعي وتحليل البيانات المتقدمة",
            description: "نماذج تنبؤية وذكاء تشغيلي مدفوع بأنابيب بيانات موثوقة.",
          },
        },
      },
      {
        key: "xr",
        href: "/solutions/xr-immersive",
        copy: {
          en: {
            title: "VR, AR & Metaverse Experiences",
            description: "Immersive training, interactive content, and virtual venues for richer engagement.",
          },
          ar: {
            title: "الواقع الافتراضي والمعزز والميتافيرس",
            description: "تجارب غامرة للتدريب والمحتوى التفاعلي والاجتماعات الافتراضية.",
          },
        },
      },
      {
        key: "iot",
        href: "/solutions/iot-platforms",
        copy: {
          en: {
            title: "Internet of Things & Smart Systems",
            description: "Real-time sensing, smart control, and predictive maintenance platforms.",
          },
          ar: {
            title: "انترنت الأشياء والأنظمة الذكية",
            description: "منصات حساسات ذكية للمراقبة اللحظية والأتمتة والصيانة التنبؤية.",
          },
        },
      },
      {
        key: "quality",
        href: "/solutions/quality-assurance",
        copy: {
          en: {
            title: "Quality Assurance & Global Standards",
            description: "Audits, ISO/ITIL/COBIT readiness, and quality programs that reduce risk.",
          },
          ar: {
            title: "التدقيق وضمان الجودة وتطبيق المعايير العالمية",
            description: "تدقيق شامل، جاهزية شهادات، وبرامج جودة متوافقة مع المعايير الدولية.",
          },
        },
      },
      {
        key: "infrastructure",
        href: "/solutions/digital-infrastructure",
        copy: {
          en: {
            title: "Digital Infrastructure & IT Services",
            description: "Networks, data centers, storage, and cloud services engineered for continuity.",
          },
          ar: {
            title: "البنية التحتية الرقمية وخدمات تقنية المعلومات",
            description: "شبكات ومراكز بيانات وتخزين وسحابة مصممة لاستمرارية العمل.",
          },
        },
      },
      {
        key: "enterprise",
        href: "/solutions/enterprise-platforms",
        copy: {
          en: {
            title: "Integrated Enterprise Solutions",
            description: "Integrated ERP, data, and process automation with executive analytics.",
          },
          ar: {
            title: "الحلول المؤسسية المتكاملة",
            description: "منصات ERP وبيانات وأتمتة موحّدة لرفع الكفاءة ودعم القرار.",
          },
        },
      },
      {
        key: "consulting",
        href: "/solutions/digital-consulting",
        copy: {
          en: {
            title: "Technology Consulting & Digital Transformation",
            description: "Digital strategies, process re-engineering, and cloud/innovation advisory.",
          },
          ar: {
            title: "الاستشارات التقنية والتحول الرقمي",
            description: "استراتيجيات رقمية وهندسة عمليات وتحول سحابي يرفع جاهزية المؤسسة.",
          },
        },
      },
      {
        key: "institutional",
        href: "/solutions/institutional-building",
        copy: {
          en: {
            title: "Institutional Building & Governance",
            description: "Organizational structures, policies, and performance systems that strengthen operations.",
          },
          ar: {
            title: "خدمة البناء المؤسسي",
            description: "هياكل تنظيمية، سياسات، وحَوْكمة ترفع كفاءة واستدامة الأداء.",
          },
        },
      },
      {
        key: "training",
        href: "/training",
        copy: {
          en: {
            title: "Training & Capability Development",
            description: "Programs that elevate leadership, project delivery, and workforce readiness.",
          },
          ar: {
            title: "التدريب وتطوير القدرات",
            description: "برامج ترفع قدرات القيادة والتسليم وجهوزية الكوادر.",
          },
        },
      },
    ],
  },
  sectors: {
    label: {
      en: "Sectors",
      ar: "القطاعات",
    } as LocalizedString,
    headingPrefix: {
      en: "Sectors We",
      ar: "القطاعات التي",
    } as LocalizedString,
    highlightAccent: {
      en: "Serve",
      ar: "نخدمها",
    } as LocalizedString,
    description: {
      en: "We tailor platforms, products, and managed services to the mission-critical demands of public and private organizations—delivering resilient infrastructure, immersive experiences, and measurable impact.",
      ar: "نصمم المنصات والمنتجات والخدمات المدارة لتلبية احتياجات المؤسسات الحكومية والخاصة الأساسية، ونقدم بنية تحتية مرنة وتجارب رائعة وأثراً ملموساً.",
    } as LocalizedString,
    highlights: [
      {
        label: {
          en: "Approach",
          ar: "المنهجية",
        },
        title: {
          en: "Domain-Driven Delivery",
          ar: "تسليم قائم على الخبرة القطاعية",
        },
        description: {
          en: "Cross-functional teams pair subject matter expertise with advanced tech stacks to meet sector-specific regulations, safety, and scale.",
          ar: "فرق متعددة التخصصات تجمع بين الخبرة القطاعية وأحدث التقنيات لتلبية المتطلبات التنظيمية ومعايير السلامة والتوسع.",
        },
      },
      {
        label: {
          en: "Impact",
          ar: "الأثر",
        },
        title: {
          en: "Operational Intelligence",
          ar: "ذكاء تشغيلي متكامل",
        },
        description: {
          en: "Data-rich insights, automation, and immersive interactions that improve responsiveness and long-term performance.",
          ar: "رؤى غنية بالبيانات وأتمتة وتفاعلات رائعة تعزز سرعة الاستجابة وتحسن الأداء على المدى الطويل.",
        },
      },
    ],
    items: [
      {
        icon: "Building2",
        copy: {
          en: {
            title: "Government & Public Sector",
            description:
              "We deliver secure citizen platforms, administrative automation, and analytics programs that help ministries operate with trusted data and resilient infrastructure.",
          },
          ar: {
            title: "القطاع الحكومي والعام",
            description:
              "نُقدّم حلولاً رقمية متكاملة لدعم المؤسسات الحكومية في رحلتها نحو التحول الرقمي وتعزيز الكفاءة التشغيلية. • نساعد الجهات الحكومية على أتمتة الخدمات الإدارية، وتحسين تجربة المواطن من خلال منصات ذكية وسهلة الاستخدام. • كما نوفر أنظمة متقدمة لإدارة الموارد، والتحليل البياني لدعم اتخاذ القرار المبني على البيانات. • يتم تنفيذ المشاريع وفق أعلى معايير الأمن السيبراني والحوكمة الرقمية لضمان السرية والموثوقية. • نهدف إلى بناء بيئة حكومية رقمية مرنة ومستدامة تواكب تطلعات رؤية التحول الرقمي الوطنية.",
          },
        },
      },
      {
        icon: "Droplet",
        copy: {
          en: {
            title: "Oil & Gas",
            description:
              "Specialized IoT, AI, and digital operations programs that improve uptime, safety, and asset performance across exploration, production, and distribution.",
          },
          ar: {
            title: "قطاع النفط والغاز",
            description:
              "نوفّر حلولاً تقنية متخصصة لقطاع النفط والغاز تُسهم في تحسين كفاءة العمليات التشغيلية وتقليل التكاليف. • نستخدم تقنيات الذكاء الاصطناعي وإنترنت الأشياء لتحليل البيانات الميدانية ومراقبة الأداء في الوقت الحقيقي. • كما ندعم أتمتة عمليات الصيانة والإنتاج لضمان استمرارية العمل وتقليل الأعطال غير المتوقعة. • تُسهم حلولنا في تعزيز السلامة المهنية، وإدارة الأصول بفاعلية، وتحقيق استدامة أعلى في الموارد. • هدفنا هو تمكين شركات النفط والغاز من اتخاذ قرارات دقيقة قائمة على البيانات وتحسين الأداء المؤسسي.",
          },
        },
      },
      {
        icon: "Radio",
        copy: {
          en: {
            title: "Telecom & Smart Cities",
            description:
              "Connected infrastructure, IoT fabrics, and AI-powered control rooms that accelerate urban innovation and telecom service delivery.",
          },
          ar: {
            title: "الاتصالات والمدن الذكية",
            description:
              "نُقدّم حلولاً مبتكرة لدعم شركات الاتصالات والمشاريع الحضرية في بناء مدن ذكية متصلة وآمنة. • تشمل خدماتنا تصميم البنى التحتية الرقمية، وأنظمة إنترنت الأشياء، والمنصات التحليلية الذكية. • نعمل على تطوير حلول إدارة الطاقة، والمواصلات، والمراقبة البيئية، وخدمات المواطن الرقمية. • كما ندمج تقنيات الذكاء الاصطناعي والميتافيرس لخلق بيئات حضرية أكثر تفاعلاً واستدامة. • هدفنا هو المساهمة في بناء مدن مستقبلية ذكية تُعزز جودة الحياة وتزيد من كفاءة الخدمات العامة.",
          },
        },
      },
      {
        icon: "Heart",
        copy: {
          en: {
            title: "Healthcare & Hospitals",
            description:
              "End-to-end digital health platforms, virtual care, and clinical intelligence solutions that elevate patient experience and provider performance.",
          },
          ar: {
            title: "الرعاية الصحية والمستشفيات",
            description:
              "نُسهم في رقمنة قطاع الرعاية الصحية من خلال أنظمة متكاملة لإدارة المستشفيات والعيادات وسجلات المرضى. • نوفر حلولاً ذكية للجدولة، وإدارة الموارد الطبية، والتطبيب عن بُعد، وتحليل بيانات المرضى. • تركز حلولنا على تحسين تجربة المريض ورفع كفاءة مقدمي الخدمة وضمان أمن وسرية المعلومات الصحية. • كما نساعد المؤسسات الصحية على تطبيق معايير الجودة العالمية. • نسعى إلى دعم التحول نحو منظومة صحية رقمية متكاملة تُقدم رعاية آمنة وفعّالة للمجتمع.",
          },
        },
      },
      {
        icon: "GraduationCap",
        copy: {
          en: {
            title: "Education & Universities",
            description:
              "Digital learning platforms, analytics, and campus automation that enable lifelong learning and academic excellence.",
          },
          ar: {
            title: "قطاع التعليم والجامعات",
            description:
              "نُقدّم حلولاً تعليمية رقمية مبتكرة تسهم في تطوير بيئة تعليمية تفاعلية وذكية. • يشمل عملنا تطوير أنظمة إدارة التعلم، ومنصات التعليم الإلكتروني، وحلول الفصول الافتراضية. • نساعد الجامعات والمدارس على التحول نحو التعليم الذكي المعتمد على الذكاء الاصطناعي وتحليل الأداء الأكاديمي. • كما نوفر أدوات لإدارة شؤون الطلاب وأعضاء هيئة التدريس وتحسين جودة العملية التعليمية. • هدفنا هو تمكين المؤسسات التعليمية من تقديم تجربة تعلم مرنة ومتطورة ومواكبة لمتطلبات العصر الرقمي.",
          },
        },
      },
      {
        icon: "HardHat",
        copy: {
          en: {
            title: "Civil Engineering & Construction",
            description:
              "Project management platforms, BIM workflows, and connected site operations that improve schedule, quality, and safety.",
          },
          ar: {
            title: "الهندسة المدنية والإنشاءات",
            description:
              "نُقدم حلولاً رقمية متخصصة لشركات الهندسة والإنشاءات لدعم إدارة المشاريع بكفاءة وشفافية. • تشمل خدماتنا أنظمة إدارة المشاريع، ونظم تخطيط الموارد، وتقنيات النمذجة (BIM). • نساعد الشركات في تتبّع مراحل البناء ومراقبة الجودة والتكلفة والجدول الزمني بدقة. • كما نستخدم تقنيات الذكاء الاصطناعي وإنترنت الأشياء لتحسين عمليات الصيانة والسلامة في المواقع. • نسعى لتمكين القطاع من تحقيق التحول الرقمي في إدارة المشاريع الهندسية والإنشائية وفق أفضل الممارسات العالمية.",
          },
        },
      },
    ],
    sectorLabel: {
      en: "Sector",
      ar: "القطاع",
    } as LocalizedString,
  },
  whyUs: {
    headingPrefix: {
      en: "Why Choose",
      ar: "لماذا تختار",
    } as LocalizedString,
    accent: {
      en: "Al-Deqah",
      ar: "الدقة",
    } as LocalizedString,
    description: {
      en: "Partner with a team that combines technical excellence with strategic vision to transform your business",
      ar: "تعاون مع فريق يجمع بين التفوق التقني والرؤية الاستراتيجية لتحويل أعمالك",
    } as LocalizedString,
    reasons: [
      {
        icon: "Shield",
        copy: {
          en: { title: "Proven Expertise", description: "Years of experience delivering cutting-edge solutions across multiple industries and sectors." },
          ar: { title: "خبرة مثبتة", description: "سنوات من الخبرة في تقديم حلول متقدمة عبر صناعات وقطاعات متعددة." },
        },
      },
      {
        icon: "Zap",
        copy: {
          en: { title: "Innovation-Driven", description: "Leveraging the latest technologies in AI, XR, and IoT to keep you ahead of the curve." },
          ar: { title: "مدفوعة بالابتكار", description: "استثمار أحدث تقنيات الذكاء الاصطناعي والواقع الممتد وإنترنت الأشياء للحفاظ على ريادتك." },
        },
      },
      {
        icon: "Users",
        copy: {
          en: { title: "Client-Centric Approach", description: "Tailored solutions designed around your unique business needs and challenges." },
          ar: { title: "نهج يركز على العميل", description: "حلول مصممة خصيصاً وفقاً لاحتياجاتك وتحدياتك التجارية." },
        },
      },
      {
        icon: "Award",
        copy: {
          en: { title: "Quality Assurance", description: "Rigorous testing and validation processes ensure the highest standards of delivery." },
          ar: { title: "ضمان الجودة", description: "اختبارات صارمة وعمليات تحقق تضمن أعلى معايير التسليم." },
        },
      },
      {
        icon: "Globe",
        copy: {
          en: { title: "End-to-End Solutions", description: "From consultation to implementation and support, we handle every aspect of your project." },
          ar: { title: "حلول متكاملة", description: "من الاستشارة إلى التنفيذ والدعم، ندير كافة جوانب مشروعك." },
        },
      },
      {
        icon: "Lightbulb",
        copy: {
          en: { title: "Strategic Partnership", description: "We don't just deliver projects—we build long-term relationships focused on your success." },
          ar: { title: "شراكة استراتيجية", description: "نحن لا نقدم مشاريع فقط، بل نبني علاقات طويلة الأمد تركز على نجاحك." },
        },
      },
    ],
  },
}

export function tString(value: LocalizedString, language: Language) {
  return value[language]
}
