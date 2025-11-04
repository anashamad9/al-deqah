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
            title: "Cybersecurity & Risk Intelligence",
            description: "Comprehensive security solutions to protect your digital assets and mitigate risks.",
          },
          ar: {
            title: "الأمن السيبراني واستخبارات المخاطر",
            description: "حلول أمنية شاملة لحماية أصولك الرقمية وتقليل المخاطر.",
          },
        },
      },
      {
        key: "ai",
        href: "/solutions/ai-data-science",
        copy: {
          en: {
            title: "Artificial Intelligence (AI) & Data Science",
            description: "Advanced AI solutions and data analytics to drive intelligent decision-making.",
          },
          ar: {
            title: "الذكاء الاصطناعي وعلوم البيانات",
            description: "حلول الذكاء الاصطناعي والتحليلات لدعم اتخاذ القرارات الذكية.",
          },
        },
      },
      {
        key: "training",
        href: "/training",
        copy: {
          en: {
            title: "Training & Capability Uplift",
            description: "Immersive programs and certifications that accelerate leadership, project delivery, and workforce readiness.",
          },
          ar: {
            title: "التدريب وتطوير القدرات",
            description: "برامج تدريبية متخصصة تعزز القيادة، وإدارة المشاريع، وجهوزية الكوادر المؤسسية.",
          },
        },
      },
      {
        key: "xr",
        href: "/solutions/xr-immersive",
        copy: {
          en: {
            title: "Extended Reality (XR), VR, AR & Metaverse",
            description: "Immersive experiences that bridge the physical and digital worlds.",
          },
          ar: {
            title: "الواقع الممتد والميتافيرس",
            description: "تجارب غامرة تربط العالمين المادي والرقمي.",
          },
        },
      },
      {
        key: "iot",
        href: "/solutions/iot-platforms",
        copy: {
          en: {
            title: "IoT & Smart Industrial Systems",
            description: "Connected solutions for intelligent automation and industrial optimization.",
          },
          ar: {
            title: "إنترنت الأشياء والأنظمة الصناعية الذكية",
            description: "حلول متصلة للأتمتة الذكية وتحسين العمليات الصناعية.",
          },
        },
      },
      {
        key: "digitalTwins",
        href: "/solutions/digital-twins",
        copy: {
          en: {
            title: "Digital Twins & Simulation",
            description: "Virtual replicas for testing, monitoring, and optimizing real-world systems.",
          },
          ar: {
            title: "التوائم الرقمية والمحاكاة",
            description: "نماذج افتراضية للاختبار والمراقبة وتحسين الأنظمة الواقعية.",
          },
        },
      },
      {
        key: "medicalVR",
        href: "/solutions/medical-vr",
        copy: {
          en: {
            title: "Medical VR Simulation Suites",
            description: "Immersive clinical training and patient engagement experiences for healthcare innovators.",
          },
          ar: {
            title: "حزم المحاكاة الطبية بالواقع الافتراضي",
            description: "تجارب تدريب سريري غامرة وتفاعل للمرضى مخصصة لمبتكري الرعاية الصحية.",
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
      ar: "نصمم المنصات والمنتجات والخدمات المدارة لتلبية احتياجات المؤسسات الحكومية والخاصة الأساسية، ونقدم بنية تحتية مرنة وتجارب غامرة وأثراً ملموساً.",
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
          ar: "رؤى غنية بالبيانات وأتمتة وتفاعلات غامرة تعزز سرعة الاستجابة وتحسن الأداء على المدى الطويل.",
        },
      },
    ],
    items: [
      {
        icon: "Building2",
        copy: {
          en: { title: "Government & Public Sector", description: "Secure digital services, data governance, and citizen experience platforms." },
          ar: { title: "القطاع الحكومي والعام", description: "خدمات رقمية آمنة وحوكمة بيانات ومنصات تعزز تجربة المواطن." },
        },
      },
      {
        icon: "Droplet",
        copy: {
          en: { title: "Oil and Gas", description: "Operational insight, safety systems, and predictive monitoring from upstream to downstream." },
          ar: { title: "النفط والغاز", description: "رؤى تشغيلية وأنظمة سلامة ومراقبة تنبؤية من المنبع إلى المصب." },
        },
      },
      {
        icon: "Radio",
        copy: {
          en: { title: "Telecom & Smart Cities", description: "Critical communications infrastructure and smart-city intelligence at urban scale." },
          ar: { title: "الاتصالات والمدن الذكية", description: "بنية تحتية للاتصالات الحيوية وذكاء المدن الذكية على نطاق حضري." },
        },
      },
      {
        icon: "Heart",
        copy: {
          en: { title: "Healthcare & Hospitals", description: "Integrated patient systems, digital diagnostics, and intelligent clinical workflows." },
          ar: { title: "الرعاية الصحية والمستشفيات", description: "أنظمة متكاملة للمرضى وتشخيصات رقمية ومسارات عمل سريرية ذكية." },
        },
      },
      {
        icon: "GraduationCap",
        copy: {
          en: { title: "Education & Universities", description: "Immersive learning environments, smart campuses, and research enablement." },
          ar: { title: "التعليم والجامعات", description: "بيئات تعلم غامرة وحرم جامعي ذكي ودعم للبحث والابتكار." },
        },
      },
      {
        icon: "HardHat",
        copy: {
          en: { title: "Civil Engineering & Construction", description: "Digital twins, connected sites, and data-driven project delivery." },
          ar: { title: "الهندسة المدنية والإنشاءات", description: "توائم رقمية ومواقع متصلة وتسليم مشاريع قائم على البيانات." },
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
