import type { Language } from "@/lib/i18n"

export type TrainingProgram = {
  id: string
  title: Record<Language, string>
  hours: Record<Language, string>
  objectives: Record<Language, string[]>
}

export type TrainingCategory = {
  id: string
  title: Record<Language, string>
  description: Record<Language, string>
  programs: TrainingProgram[]
}

const t = (en: string, ar: string) => ({ en, ar })

export const trainingCatalog: TrainingCategory[] = [
  {
    id: "administrative",
    title: t("Administrative Programs", "البرامج الإدارية"),
    description: t(
      "Leadership, strategy, and organizational excellence programs that strengthen planning, execution, and cultural impact.",
      "برامج قيادية واستراتيجية تعزز التخطيط والتنفيذ والتميز المؤسسي."
    ),
    programs: [
      {
        id: "pmp",
        title: t("Project Management Professional (PMP)", "إدارة المشاريع PMP"),
        hours: t("36 training hours", "36 ساعة تدريبية"),
        objectives: t(
          [
            "Master PMI-aligned project management methodologies.",
            "Advance planning, execution, and monitoring capabilities across project lifecycles.",
            "Strengthen leadership of project teams to achieve outcomes effectively.",
          ],
          [
            "إتقان منهجيات إدارة المشاريع وفق معايير PMI العالمية.",
            "تطوير مهارات التخطيط والتنفيذ والرقابة على المشاريع.",
            "تعزيز القدرة على قيادة فرق العمل وتحقيق أهداف المشروع بفعالية.",
          ]
        ),
      },
      {
        id: "capm",
        title: t("Certified Associate in Project Management (CAPM)", "دورة المساعد المعتمد في إدارة المشاريع CAPM"),
        hours: t("23 training hours", "23 ساعة تدريبية"),
        objectives: t(
          [
            "Understand the foundations contained in the PMBOK® Guide.",
            "Support project managers through practical application of tools and techniques.",
            "Build the knowledge base required to pass the CAPM certification.",
          ],
          [
            "التعرف على مفاهيم وأساسيات إدارة المشاريع وفق دليل PMBOK.",
            "دعم مديري المشاريع من خلال تطبيق أدوات وتقنيات فعّالة.",
            "بناء قاعدة معرفية تؤهل للحصول على شهادة CAPM المعتمدة.",
          ]
        ),
      },
      {
        id: "rmp",
        title: t("PMI-RMP® Risk Management Professional", "دورة إدارة المخاطر الاحترافية PMI-RMP"),
        hours: t("30 training hours", "30 ساعة تدريبية"),
        objectives: t(
          [
            "Identify, analyze, and evaluate project risks using structured approaches.",
            "Design proactive risk response strategies tailored to critical scenarios.",
            "Improve institutional decision-making through risk-informed governance.",
          ],
          [
            "تحديد وتحليل وتقييم المخاطر في المشاريع بطرق علمية.",
            "تطوير استراتيجيات استجابة فعّالة للمخاطر.",
            "تحسين قدرة المؤسسة على اتخاذ قرارات مبنية على تقييم المخاطر.",
          ]
        ),
      },
      {
        id: "sphri",
        title: t("Senior Professional in Human Resources (SPHRi)", "دورة محترف أول موارد بشرية SPHRi"),
        hours: t("30 training hours", "30 ساعة تدريبية"),
        objectives: t(
          [
            "Develop advanced people strategies for globally distributed workforces.",
            "Elevate leadership, decision-making, and workforce planning capabilities.",
            "Prepare participants to pass the SPHRi certification exam with confidence.",
          ],
          [
            "تطوير استراتيجيات متقدمة لإدارة الموارد البشرية على المستوى الدولي.",
            "تعزيز مهارات القيادة وصنع القرار في إدارة القوى العاملة.",
            "إعداد المشاركين لاجتياز اختبار SPHRi بنجاح.",
          ]
        ),
      },
      {
        id: "creative-leadership",
        title: t("Distinguished Creative Leadership", "الإبداع القيادي المتميز"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Adopt creative thinking approaches for modern leadership challenges.",
            "Motivate and engage teams using innovative leadership practices.",
            "Build resilience to tackle organizational obstacles with inventive solutions.",
          ],
          [
            "تنمية التفكير الإبداعي في القيادة وصنع القرار.",
            "اكتساب أساليب مبتكرة لتحفيز فرق العمل.",
            "تعزيز القدرة على مواجهة التحديات بأساليب قيادية خلاقة.",
          ]
        ),
      },
      {
        id: "leadership-strategies",
        title: t("Leadership Skills & Effective Strategies", "المهارات القيادية والاستراتيجيات الفعالة"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Advance modern leadership and executive communication competencies.",
            "Understand the strategic levers required to achieve institutional goals.",
            "Build influential leadership styles that inspire and mobilize teams.",
          ],
          [
            "تطوير مهارات القيادة الحديثة والتواصل الفعّال.",
            "فهم الاستراتيجيات اللازمة لتحقيق أهداف المؤسسة.",
            "بناء قدرات التأثير والتحفيز في بيئات العمل المتغيرة.",
          ]
        ),
      },
      {
        id: "efqm",
        title: t("Organizational Excellence with EFQM", "التميز المؤسسي وفق معيار EFQM"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Learn the EFQM model and the core concepts of excellence.",
            "Analyze institutional performance to identify improvement opportunities.",
            "Apply excellence methodologies to deliver sustainable results.",
          ],
          [
            "التعرف على نموذج EFQM ومفاهيم التميز المؤسسي.",
            "تحليل الأداء المؤسسي وتحديد فرص التحسين.",
            "تطبيق منهجيات التميز لتحقيق نتائج مستدامة.",
          ]
        ),
      },
      {
        id: "time-stress",
        title: t("Time Management & Stress Control", "إدارة الوقت والتحكم في الضغوطات"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Adopt evidence-based methods to prioritize and plan workloads.",
            "Gain techniques to sustain productivity under pressure.",
            "Build healthy work-life balance routines for teams and leaders.",
          ],
          [
            "تعلم أساليب فعّالة لتنظيم الوقت وتحديد الأولويات.",
            "اكتساب تقنيات للسيطرة على الضغوط وتحسين الإنتاجية.",
            "تطوير توازن صحي بين العمل والحياة الشخصية.",
          ]
        ),
      },
      {
        id: "team-building",
        title: t("Team Building & Time Management", "بناء الفرق وإدارة الوقت"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Empower managers to build collaborative, high-performing teams.",
            "Blend time-management practices with collective performance goals.",
            "Improve internal communication and coordination for optimal outcomes.",
          ],
          [
            "تعزيز مهارات بناء فرق عمل متعاونة ومنتجة.",
            "تطوير مهارات إدارة الوقت لتحقيق أهداف الفريق.",
            "تحسين التواصل والتنسيق داخل الفرق لتحقيق الأداء الأمثل.",
          ]
        ),
      },
      {
        id: "enterprise-architecture",
        title: t("Enterprise Architecture for Digital Transformation", "إدارة البنية المؤسسية للتحول الرقمي"),
        hours: t("30 training hours", "30 ساعة تدريبية"),
        objectives: t(
          [
            "Understand the components of enterprise architecture in digital programs.",
            "Design operating models that align technology investments with business value.",
            "Increase organizational capacity to innovate and sustain transformation.",
          ],
          [
            "فهم مكونات وأهمية البنية المؤسسية في التحول الرقمي.",
            "تصميم أطر عمل تدعم التكامل بين التكنولوجيا والأعمال.",
            "تعزيز قدرة المؤسسة على الابتكار واستدامة التحول الرقمي.",
          ]
        ),
      },
      {
        id: "strategic-oversight",
        title: t("Strategic Oversight & Development Tools", "أدوات التطوير والإشراف الاستراتيجي"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Equip leaders with tools to plan and supervise strategic initiatives.",
            "Improve monitoring of performance metrics to ensure delivery.",
            "Develop analytical decision-making grounded in strategic indicators.",
          ],
          [
            "إكساب المشاركين أدوات فعّالة للتخطيط والإشراف على المبادرات الاستراتيجية.",
            "تعزيز القدرة على متابعة الأداء وضمان تحقيق الأهداف المؤسسية.",
            "تطوير مهارات التحليل واتخاذ القرارات الاستراتيجية بناءً على مؤشرات الأداء.",
          ]
        ),
      },
      {
        id: "modern-leadership",
        title: t("Foundations of Modern Leadership", "أسس ومهارات القيادة الحديثة"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Explore contemporary leadership concepts and application approaches.",
            "Enhance communication, motivation, and coaching capabilities.",
            "Boost change-management readiness across diverse teams.",
          ],
          [
            "التعرف على المفاهيم الحديثة في القيادة وأساليب تطبيقها.",
            "تطوير مهارات التواصل والتحفيز الفعّال مع فرق العمل.",
            "تعزيز القدرة على إدارة التغيير والتعامل مع التحديات القيادية.",
          ]
        ),
      },
      {
        id: "change-management",
        title: t("Change Management & Strategic Transformation", "إدارة التغيير والتحول الاستراتيجي"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Understand the phases and principles of change initiatives.",
            "Design and execute transformation plans that minimize disruption.",
            "Enable participants to lead change programmes with confidence.",
          ],
          [
            "فهم مراحل وأسس إدارة التغيير في المؤسسات.",
            "تصميم وتنفيذ خطط التحول الاستراتيجي بفعالية.",
            "تمكين المشاركين من قيادة المبادرات التغييرية بنجاح.",
          ]
        ),
      },
    ],
  },
  {
    id: "oil-gas",
    title: t("Oil & Gas Technical Programs", "البرامج الفنية لقطاع النفط والغاز"),
    description: t(
      "Specialized programmes tackling drilling, integrity, risk, and digital transformation across upstream operations.",
      "برامج متخصصة في الحفر، وسلامة الأصول، وإدارة المخاطر، والتحول الرقمي عبر قطاع النفط والغاز."
    ),
    programs: [
      {
        id: "advanced-drilling",
        title: t("Advanced Drilling Operations & Well Planning", "عمليات الحفر المتقدمة وتخطيط الآبار"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Design optimal well trajectories using advanced planning software.",
            "Improve drilling performance to reduce non-productive time.",
            "Manage complex drilling challenges such as HPHT and deep-water operations.",
            "Apply risk assessment methodologies to drilling campaigns.",
          ],
          [
            "تصميم مسارات الآبار المثلى باستخدام برمجيات تخطيط متقدمة.",
            "تطبيق تقنيات تحسين الحفر لتقليل وقت التوقف غير المنتج.",
            "إدارة تحديات الحفر المعقدة مثل الضغط العالي ودرجات الحرارة العالية والحفر في المياه العميقة.",
            "تطبيق منهجيات تقييم المخاطر على عمليات الحفر.",
          ]
        ),
      },
      {
        id: "economics-risk",
        title: t(
          "Advanced Economics for Oil & Gas Projects",
          "الاقتصاد المتقدم لمشاريع النفط والغاز – تحليل المخاطر واتخاذ القرار"
        ),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Build comprehensive economic models for oil and gas developments.",
            "Use Monte Carlo simulation to evaluate uncertainty and risk.",
            "Assess fiscal regimes and sensitivities that shape project returns.",
            "Support strategic decision-making under uncertainty.",
          ],
          [
            "بناء نماذج اقتصادية شاملة لمشاريع النفط والغاز.",
            "تطبيق محاكاة مونت كارلو لتحليل المخاطر وعدم اليقين.",
            "تقييم المشاريع تحت أنظمة مالية مختلفة وحساسية العوائد.",
            "اتخاذ قرارات مثلى في ظل حالات عدم اليقين.",
          ]
        ),
      },
      {
        id: "artificial-lift",
        title: t("Artificial Lift Systems Optimization", "تحسين أنظمة الرفع الصناعي"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Select the most suitable artificial lift system for well conditions.",
            "Design and tune lift systems for maximum production efficiency.",
            "Troubleshoot common artificial lift challenges.",
            "Establish surveillance programmes to sustain performance.",
          ],
          [
            "اختيار أنسب أنظمة الرفع الصناعي حسب ظروف البئر.",
            "تصميم وتحسين مختلف أنظمة الرفع الصناعي.",
            "حل المشكلات الشائعة في أنظمة الرفع.",
            "تنفيذ برامج مراقبة وتحسين الأداء.",
          ]
        ),
      },
      {
        id: "asset-integrity",
        title: t("Asset Integrity Management", "إدارة سلامة الأصول في النفط والغاز"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Develop integrated integrity management frameworks for critical assets.",
            "Apply risk-based inspection strategies to optimise interventions.",
            "Manage corrosion and degradation mechanisms proactively.",
            "Ensure alignment with international codes and regulations.",
          ],
          [
            "تطوير أنظمة شاملة لإدارة سلامة الأصول.",
            "تطبيق استراتيجيات الفحص القائم على المخاطر.",
            "إدارة التآكل وآليات التدهور في الأصول.",
            "ضمان الامتثال للوائح والمعايير الدولية.",
          ]
        ),
      },
      {
        id: "carbon-capture",
        title: t("Carbon Capture & Storage Fundamentals", "احتجاز وتخزين الكربون في قطاع النفط والغاز"),
        hours: t("24 training hours", "24 ساعة تدريبية"),
        objectives: t(
          [
            "Understand CCS technologies and industrial applications.",
            "Evaluate technical and economic feasibility of CCS projects.",
            "Design baseline systems for CO₂ capture and transport.",
            "Assess storage options, monitoring, and regulatory needs.",
          ],
          [
            "فهم تقنيات وتطبيقات احتجاز وتخزين الكربون.",
            "تقييم الجدوى الاقتصادية لمشاريع احتجاز وتخزين الكربون.",
            "تصميم أنظمة أساسية لالتقاط ونقل ثاني أكسيد الكربون.",
            "تقييم خيارات التخزين ومتطلبات المراقبة.",
          ]
        ),
      },
      {
        id: "contracts-oil-gas",
        title: t("Contract Management in Oil & Gas Projects", "إدارة العقود في مشاريع النفط والغاز"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Draft contract structures tailored to upstream project realities.",
            "Manage contract execution and vendor performance effectively.",
            "Handle variations and claims with professional governance.",
            "Use structured dispute-resolution mechanisms to safeguard value.",
          ],
          [
            "إعداد عقود ملائمة لمشاريع النفط والغاز.",
            "إدارة العقود ومتابعة أداء الموردين بفعالية.",
            "التعامل مع التغييرات والمطالبات باحترافية.",
            "تسوية النزاعات باستخدام آليات متعددة.",
          ]
        ),
      },
      {
        id: "corrosion-control",
        title: t("Corrosion Control for Oil & Gas Facilities", "التحكم في التآكل في منشآت النفط والغاز"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Identify corrosion mechanisms across oil and gas production systems.",
            "Design mitigation strategies that balance cost and protection.",
            "Deploy monitoring and inspection programmes to reduce failures.",
            "Select materials and coatings suitable for harsh environments.",
          ],
          [
            "تحديد آليات التآكل في أنظمة النفط والغاز.",
            "تصميم استراتيجيات فعّالة لمكافحة التآكل.",
            "تنفيذ برامج المراقبة والفحص للحد من الأعطال.",
            "اختيار المواد والطلاءات المناسبة للبيئات القاسية.",
          ]
        ),
      },
      {
        id: "offshore-decommissioning",
        title: t("Offshore Decommissioning Strategies", "إيقاف تشغيل المنشآت البحرية"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Develop compliant decommissioning plans for offshore facilities.",
            "Understand regulatory frameworks and stakeholder expectations.",
            "Evaluate decommissioning options, costs, and risk trade-offs.",
            "Manage environmental considerations and safety obligations.",
          ],
          [
            "تطوير استراتيجيات وخطط إيقاف التشغيل للمنشآت البحرية.",
            "فهم المتطلبات التنظيمية والإشرافية عالمياً.",
            "تقييم خيارات الإيقاف والتكاليف المرتبطة بها.",
            "إدارة الجوانب البيئية ومتطلبات السلامة خلال التنفيذ.",
          ]
        ),
      },
      {
        id: "digital-oil-gas",
        title: t("Digital Transformation in Oil & Gas Operations", "التحول الرقمي في عمليات النفط والغاز"),
        hours: t("24 training hours", "24 ساعة تدريبية"),
        objectives: t(
          [
            "Define digital transformation strategies that modernise upstream operations.",
            "Apply emerging technologies to production, maintenance, and HSE workflows.",
            "Lead organizational change to embed digital operating models.",
            "Measure success factors and value creation from digital initiatives.",
          ],
          [
            "تطوير استراتيجيات التحول الرقمي لعمليات النفط والغاز.",
            "تطبيق التقنيات الرقمية على الإنتاج والصيانة والصحة والسلامة.",
            "إدارة التغيير المؤسسي للتحول الرقمي بكفاءة.",
            "قياس نجاح مبادرات التحول الرقمي وعوائدها.",
          ]
        ),
      },
    ],
  },
  {
    id: "technology",
    title: t("Technology & Cybersecurity Programs", "برامج التكنولوجيا"),
    description: t(
      "Awareness, cybersecurity, and data programmes that equip teams for digital transformation and resilient operations.",
      "برامج توعوية وأمنية ورقمية تمكّن الفرق من التحول الرقمي وبناء عمليات مرنة."
    ),
    programs: [
      {
        id: "ai-awareness",
        title: t("AI Awareness & Applications", "دورة التوعية بالذكاء الاصطناعي وتطبيقاته"),
        hours: t("6 training hours", "6 ساعات تدريبية"),
        objectives: t(
          [
            "Introduce modern AI concepts and emerging technologies.",
            "Explore practical AI use cases within the company’s operations.",
            "Highlight how AI enhances efficiency and organizational outcomes.",
          ],
          [
            "تعريف المشاركين بمفاهيم الذكاء الاصطناعي وأحدث تقنياته.",
            "استكشاف تطبيقات الذكاء الاصطناعي في مجالات عمل الشركة.",
            "تعزيز الوعي بأثر الذكاء الاصطناعي في رفع الكفاءة والإنتاجية.",
          ]
        ),
      },
      {
        id: "vr-awareness",
        title: t("VR & Metaverse Awareness", "دورة التوعية بتقنيات الواقع الافتراضي والميتافيرس"),
        hours: t("6 training hours", "6 ساعات تدريبية"),
        objectives: t(
          [
            "Explain virtual reality and metaverse concepts and tooling.",
            "Showcase real business applications across sectors.",
            "Build strategic understanding to align metaverse initiatives with digital transformation.",
          ],
          [
            "التعرف على مفاهيم وتقنيات الواقع الافتراضي والميتافيرس.",
            "استكشاف الاستخدامات العملية لهذه التقنيات في بيئة الأعمال.",
            "بناء فهم استراتيجي لتوظيف الميتافيرس في التحول الرقمي للمؤسسة.",
          ]
        ),
      },
      {
        id: "cyber-awareness",
        title: t("Cybersecurity Awareness", "دورة التوعية بالأمن السيبراني"),
        hours: t("6 training hours", "6 ساعات تدريبية"),
        objectives: t(
          [
            "Build awareness of cyber threats and contemporary attack vectors.",
            "Instill secure digital behaviours and best practices.",
            "Strengthen a culture of security to protect digital assets.",
          ],
          [
            "توعية الموظفين بمخاطر التهديدات الإلكترونية وأساليب الوقاية منها.",
            "تطوير سلوكيات رقمية آمنة أثناء استخدام الأنظمة والتطبيقات.",
            "تعزيز ثقافة الأمن السيبراني لحماية أصول المؤسسة.",
          ]
        ),
      },
      {
        id: "iot-awareness",
        title: t("IoT Awareness & Applications", "التوعية بإنترنت الأشياء وتطبيقاته"),
        hours: t("6 training hours", "6 ساعات تدريبية"),
        objectives: t(
          [
            "Explain fundamentals of Internet of Things architectures.",
            "Review IoT applications across industry, services, and smart operations.",
            "Discuss integration of IoT within transformation roadmaps.",
          ],
          [
            "فهم أساسيات تقنية إنترنت الأشياء ومكوناتها.",
            "التعرف على تطبيقات إنترنت الأشياء في الصناعة والخدمات والإدارة الذكية.",
            "مناقشة آليات دمج إنترنت الأشياء في مشاريع التحول الرقمي.",
          ]
        ),
      },
      {
        id: "python-fundamentals",
        title: t("Python Programming Fundamentals", "أساسيات لغة البرمجة بايثون"),
        hours: t("18 training hours", "18 ساعة تدريبية"),
        objectives: t(
          [
            "Introduce programming basics using Python.",
            "Develop coding skills to solve practical problems.",
            "Enable participants to use Python for data analysis and automation.",
          ],
          [
            "التعرف على المفاهيم الأساسية للبرمجة باستخدام لغة بايثون.",
            "تطوير مهارات كتابة الشيفرات وتنفيذ الحلول البرمجية البسيطة.",
            "تمكين المشاركين من استخدام بايثون في تحليل البيانات وأتمتة المهام.",
          ]
        ),
      },
      {
        id: "cyberaware-user",
        title: t("CSI Cyberaware Certified User", "CSI | مستخدم معتمد في الوعي السيبراني"),
        hours: t("12 training hours", "12 ساعة تدريبية"),
        objectives: t(
          [
            "Build comprehensive user awareness of cybersecurity practices.",
            "Protect personal and sensitive corporate information.",
            "Apply safe behaviours when handling email and suspicious links.",
          ],
          [
            "بناء وعي شامل بأفضل ممارسات الأمن السيبراني للمستخدمين.",
            "اكتساب مهارات حماية البيانات الشخصية والمعلومات الحساسة.",
            "تطبيق استراتيجيات التعامل الآمن مع البريد الإلكتروني والروابط المشبوهة.",
          ]
        ),
      },
      {
        id: "executive-security",
        title: t("Security Awareness for Executives", "التوعية الأمنية للمديرين التنفيذيين"),
        hours: t("6 training hours", "6 ساعات تدريبية"),
        objectives: t(
          [
            "Highlight cyber threats targeting senior leadership.",
            "Develop strategies to secure executive communications and data.",
            "Position leaders as advocates of enterprise-wide cybersecurity culture.",
          ],
          [
            "فهم التهديدات السيبرانية التي تستهدف القيادات التنفيذية.",
            "تطوير استراتيجيات لحماية البيانات الحساسة والمراسلات الإدارية.",
            "تعزيز دور القادة في نشر ثقافة الأمن السيبراني داخل المؤسسة.",
          ]
        ),
      },
      {
        id: "phishing-awareness",
        title: t("Phishing Awareness", "توعية التصيد الاحتيالي"),
        hours: t("6 training hours", "6 ساعات تدريبية"),
        objectives: t(
          [
            "Explain common phishing tactics and evolving patterns.",
            "Train employees to detect fraudulent messages and sites.",
            "Adopt preventive practices that reduce social-engineering risk.",
          ],
          [
            "التعرف على أساليب وهجمات التصيد الاحتيالي الشائعة.",
            "تدريب المشاركين على اكتشاف الرسائل والمواقع المزيفة.",
            "تطوير ممارسات وقائية لتجنب الوقوع ضحية للهجمات الإلكترونية.",
          ]
        ),
      },
      {
        id: "cyber-essentials",
        title: t("Cybersecurity Essentials (ICSI CSE)", "ICSI | أساسيات الأمن السيبراني"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Cover foundational domains of cybersecurity and threat types.",
            "Understand architectures for securing information systems.",
            "Gain initial response skills for threats and incidents.",
          ],
          [
            "فهم مبادئ وأساسيات الأمن السيبراني وأنواعه المختلفة.",
            "التعرف على مكونات البنية التحتية الآمنة للمعلومات.",
            "اكتساب مهارات أولية للتعامل مع التهديدات والاختراقات.",
          ]
        ),
      },
      {
        id: "web-penetration",
        title: t("Certified Web Penetration Tester", "مختبر اختراق الويب المعتمد"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Learn structured methodologies for web penetration testing.",
            "Identify, analyze, and remediate application vulnerabilities.",
            "Develop professional security assessment and reporting skills.",
          ],
          [
            "تعلم تقنيات اختبار الاختراق لمواقع الويب بشكل منهجي.",
            "اكتشاف الثغرات الأمنية وتحليلها ومعالجة نقاط الضعف.",
            "تطوير مهارات التقييم الأمني وإعداد التقارير الاحترافية.",
          ]
        ),
      },
      {
        id: "digital-forensics",
        title: t("Certified Digital Forensics Examiner", "مُمتحن الطب الشرعي الرقمي المعتمد"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Understand frameworks and tooling for digital investigation.",
            "Collect and preserve evidence in line with legal standards.",
            "Produce professional reporting for cyber and digital crime cases.",
          ],
          [
            "التعرف على أسس وأدوات التحقيق الرقمي وتحليل الأدلة الإلكترونية.",
            "اكتساب مهارات جمع الأدلة وفق المعايير القانونية.",
            "تطوير القدرة على إعداد تقارير مهنية في قضايا الأمن السيبراني.",
          ]
        ),
      },
    ],
  },
  {
    id: "finance",
    title: t("Financial Programs", "البرامج المالية"),
    description: t(
      "Finance, accounting, and risk programmes that modernise reporting, analytics, and governance across the enterprise.",
      "برامج مالية ومحاسبية تعزز التحليل والحوكمة وتطوير التقارير عبر المؤسسة."
    ),
    programs: [
      {
        id: "financial-planning",
        title: t("Financial Planning & Budgeting", "التخطيط المالي وإعداد الميزانيات"),
        hours: t("50 training hours", "50 ساعة تدريبية"),
        objectives: t(
          [
            "Build end-to-end financial planning and budgeting cycles.",
            "Use forecasting tools to anticipate revenues and expenditures.",
            "Support decision-makers with responsive financial plans.",
          ],
          [
            "إعداد الموازنات والتنبؤ بالخطط المالية بعيدة المدى.",
            "استخدام أدوات التنبؤ المالي لتقدير الإيرادات والمصروفات بدقة.",
            "دعم متخذي القرار بخطط مالية مرنة تستجيب للمتغيرات.",
          ]
        ),
      },
      {
        id: "financial-modeling",
        title: t("Financial Modeling with Excel", "النمذجة المالية باستخدام إكسل"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Build professional financial models using advanced Excel tools.",
            "Develop scenario analysis and predictive capabilities for decisions.",
            "Improve reporting accuracy and planning efficiency through modeling.",
          ],
          [
            "تمكين المشاركين من بناء نماذج مالية احترافية باستخدام أدوات Excel المتقدمة.",
            "تطوير مهارات تحليل السيناريوهات والتنبؤ المالي لاتخاذ قرارات مبنية على البيانات.",
            "تحسين دقة إعداد التقارير المالية والتخطيط باستخدام النمذجة.",
          ]
        ),
      },
      {
        id: "financial-analytics-spss",
        title: t("Financial Data Analysis with SPSS", "التحليل الإحصائي للبيانات المالية باستخدام SPSS"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Introduce statistical analysis methods for interpreting financial data.",
            "Use SPSS to derive indicators that inform strategic decisions.",
            "Translate quantitative insights into improved financial performance.",
          ],
          [
            "تعريف المشاركين بأساليب التحليل الإحصائي لتفسير البيانات المالية.",
            "استخدام برنامج SPSS لاستخراج مؤشرات مالية تدعم القرارات الاستراتيجية.",
            "تعزيز مهارات التحليل الكمي وتطبيق النتائج لتحسين الأداء المالي.",
          ]
        ),
      },
      {
        id: "ipsas-transition",
        title: t("IPSAS Transition for Public Sector", "التحول للمعايير المحاسبية الدولية للقطاع العام IPSAS"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Explain IPSAS concepts and their role in transparency and accountability.",
            "Apply IPSAS requirements to government financial reporting.",
            "Guide teams through transitioning from cash to accrual accounting.",
          ],
          [
            "تعريف المشاركين بمفاهيم ومعايير IPSAS وأهميتها في الشفافية والمساءلة.",
            "تمكين المشاركين من تطبيق المعايير الدولية في إعداد التقارير المالية الحكومية.",
            "تطوير قدرات الانتقال من النظام النقدي إلى أساس الاستحقاق وفق IPSAS.",
          ]
        ),
      },
      {
        id: "financial-reporting",
        title: t("Financial Reporting & Statements per IFRS", "إعداد التقارير والقوائم المالية وفق المعايير الدولية"),
        hours: t("40 training hours", "40 ساعة تدريبية"),
        objectives: t(
          [
            "Master the application of IFRS in preparing financial statements.",
            "Strengthen the link between financial reporting and performance.",
            "Enhance disclosure quality to meet international expectations.",
          ],
          [
            "تمكين المشاركين من إعداد القوائم المالية وفق المعايير الدولية.",
            "تعزيز فهم العلاقة بين التقارير المالية والأداء الفعلي للمؤسسة.",
            "تطوير مهارات الإفصاح المالي والالتزام بالمعايير العالمية.",
          ]
        ),
      },
      {
        id: "internal-audit",
        title: t("Modern Internal Audit & Control", "الأساليب الحديثة في التدقيق الداخلي والرقابة"),
        hours: t("20 training hours", "20 ساعة تدريبية"),
        objectives: t(
          [
            "Introduce contemporary methodologies in internal audit programmes.",
            "Evaluate internal control systems and detect deviations.",
            "Produce actionable audit reports with corrective recommendations.",
          ],
          [
            "تعريف المشاركين بأحدث منهجيات وأساليب التدقيق الداخلي.",
            "تطوير قدرات تقييم نظم الرقابة وكشف الانحرافات.",
            "تعزيز مهارات إعداد تقارير التدقيق والإجراءات التصحيحية.",
          ]
        ),
      },
      {
        id: "financial-kpi",
        title: t("Financial Performance KPIs", "تقييم الأداء المالي باستخدام مؤشرات الأداء الرئيسية"),
        hours: t("15 training hours", "15 ساعة تدريبية"),
        objectives: t(
          [
            "Design effective financial KPIs aligned with strategic outcomes.",
            "Interpret metric results to guide strategic financial decisions.",
            "Improve financial performance management linked to enterprise goals.",
          ],
          [
            "تمكين المشاركين من تصميم مؤشرات أداء مالية فعّالة.",
            "تحليل نتائج المؤشرات لاتخاذ قرارات مالية استراتيجية.",
            "تحسين إدارة الأداء المالي وربطه بالأهداف المؤسسية.",
          ]
        ),
      },
      {
        id: "risk-management-finance",
        title: t("Financial Risk Management", "إدارة المخاطر المالية"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Understand market, credit, liquidity, and operational risk categories.",
            "Evaluate risk exposure and design effective mitigation plans.",
            "Embed quantitative techniques that strengthen strategic decisions.",
          ],
          [
            "التعرف على أنواع المخاطر المالية مثل مخاطر السوق والائتمان والسيولة والتشغيل.",
            "تمكين المشاركين من تقييم المخاطر ووضع خطط استجابة فعّالة.",
            "تعزيز كفاءة القرارات المالية عبر توظيف أساليب كمية واستراتيجية.",
          ]
        ),
      },
    ],
  },
  {
    id: "engineering",
    title: t("Engineering & Infrastructure Programs", "البرامج الهندسية"),
    description: t(
      "Technical programmes covering electrical systems, BIM, GIS, and smart infrastructure for engineering teams.",
      "برامج تقنية تغطي الأنظمة الكهربائية وتقنيات BIM وGIS والبنية التحتية الذكية للفرق الهندسية."
    ),
    programs: [
      {
        id: "electrical-diagrams",
        title: t("Electrical Schematics & Control Circuits", "المخططات الكهربائية ودوائر التحكم"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Understand industrial electrical schematics and components.",
            "Interpret control circuits and wiring diagrams confidently.",
            "Develop skills to design and maintain electrical control systems.",
          ],
          [
            "تعريف المشاركين بمكونات وأنواع المخططات الكهربائية الصناعية.",
            "تمكينهم من قراءة وتفسير دوائر التحكم والتوصيل.",
            "تطوير مهارات تصميم وصيانة دوائر التحكم في الأنظمة الكهربائية.",
          ]
        ),
      },
      {
        id: "electrical-equipment",
        title: t("Electrical Equipment & Control Systems", "المعدات الكهربائية ونظم التحكم"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Review key electrical equipment used across industrial facilities.",
            "Understand automatic control systems and basic programming.",
            "Operate and maintain systems while meeting safety standards.",
          ],
          [
            "تعريف المشاركين بوظائف وأنواع المعدات الكهربائية في المنشآت الصناعية.",
            "تمكينهم من فهم نظم التحكم الآلي والبرمجة الأساسية.",
            "تعزيز القدرة على تشغيل الأنظمة وصيانتها وفق معايير السلامة.",
          ]
        ),
      },
      {
        id: "substation-design",
        title: t("Substation Design & Operations", "تصميم وتشغيل المحطات الفرعية الكهربائية"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Explain substation components and protection philosophies.",
            "Analyze load requirements and insulation needs.",
            "Develop safe operating and maintenance practices for substations.",
          ],
          [
            "تعريف المشاركين بمكونات المحطات الفرعية ومبادئ تصميمها.",
            "تحليل الأحمال وتحديد متطلبات العزل والحماية.",
            "تطوير مهارات التشغيل والصيانة الفعّالة للمحطات الفرعية.",
          ]
        ),
      },
      {
        id: "electrical-maintenance",
        title: t("Electrical Maintenance & Fault Diagnostics", "صيانة المعدات الكهربائية واكتشاف الأعطال"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Use diagnostic tools to assess electrical system performance.",
            "Identify root causes of faults and corrective actions.",
            "Implement preventive and corrective maintenance programmes.",
          ],
          [
            "التعرف على أساليب الفحص والتشخيص في الأنظمة الكهربائية.",
            "تحليل أسباب الأعطال واستخدام أدوات الاختبار الحديثة.",
            "تنفيذ الصيانة الوقائية والتصحيحية بفعالية.",
          ]
        ),
      },
      {
        id: "revit-mep",
        title: t("Revit MEP Design", "ريفيت ميكانيكا وكهرباء"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Use Revit to design mechanical, electrical, and plumbing systems.",
            "Develop coordinated BIM models across engineering disciplines.",
            "Prepare detailed documentation and schedules within Revit.",
          ],
          [
            "تعريف المشاركين ببيئة Revit لتصميم الأنظمة الميكانيكية والكهربائية والسباكة.",
            "إنشاء نماذج BIM ثلاثية الأبعاد متكاملة.",
            "تطوير مهارات التنسيق وإعداد الجداول التفصيلية داخل Revit.",
          ]
        ),
      },
      {
        id: "autocad-drafting",
        title: t("Engineering Drawing with AutoCAD", "الرسم الهندسي باستخدام AutoCAD"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Master 2D and 3D drafting fundamentals in AutoCAD.",
            "Produce construction-ready drawings aligned to standards.",
            "Organize layers and outputs for professional documentation.",
          ],
          [
            "تعريف المشاركين بأساسيات الرسم الهندسي ثنائي وثلاثي الأبعاد.",
            "إعداد المخططات التنفيذية وفق المعايير الفنية.",
            "تنظيم الطبقات وإخراج الرسومات باحترافية.",
          ]
        ),
      },
      {
        id: "bim-architecture",
        title: t("Revit Architecture", "دورة ريفيت المعماري"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Build architectural BIM models and detailed drawings.",
            "Generate schedules, sheets, and coordinated deliverables.",
            "Improve collaboration through integrated architectural workflows.",
          ],
          [
            "تصميم نماذج معمارية ثلاثية الأبعاد باستخدام Revit.",
            "إعداد المخططات التفصيلية والجداول الزمنية.",
            "تعزيز التنسيق والتوثيق المعماري عبر تقنيات BIM.",
          ]
        ),
      },
      {
        id: "gis-fundamentals",
        title: t("GIS Fundamentals with ArcGIS Pro", "أساسيات نظم المعلومات الجغرافية باستخدام ArcGIS Pro"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Use ArcGIS Pro to create maps and spatial datasets.",
            "Apply spatial analysis techniques for infrastructure projects.",
            "Prepare interactive spatial reports that support decision-making.",
          ],
          [
            "التعرف على بيئة ArcGIS Pro وأدوات التحليل المكاني.",
            "إنشاء الخرائط وتحليل الطبقات الجغرافية للمشاريع الهندسية.",
            "إعداد تقارير مكانية تفاعلية تدعم اتخاذ القرار.",
          ]
        ),
      },
      {
        id: "fiber-optics",
        title: t("Optical Fiber Transmission Systems", "اتصالات الألياف الضوئية"),
        hours: t("50 training hours", "50 ساعة تدريبية"),
        objectives: t(
          [
            "Explain design principles of fiber-optic communication systems.",
            "Perform splicing, testing, and certification of fiber networks.",
            "Optimize optical network performance and reliability.",
          ],
          [
            "تعريف المشاركين بمبادئ عمل أنظمة الألياف الضوئية ومكوناتها.",
            "تنفيذ عمليات التوصيل والاختبار واللحام للألياف الضوئية.",
            "تحسين أداء الشبكات الضوئية وضمان موثوقيتها.",
          ]
        ),
      },
      {
        id: "smart-cities",
        title: t("Smart Cities Design", "بناء المدن الذكية"),
        hours: t("25 training hours", "25 ساعة تدريبية"),
        objectives: t(
          [
            "Understand smart city frameworks and enabling technologies.",
            "Integrate digital infrastructure with urban services.",
            "Craft strategic roadmaps for sustainable smart-city initiatives.",
          ],
          [
            "تعريف المشاركين بمفاهيم وتقنيات المدن الذكية.",
            "فهم تكامل البنية التحتية الرقمية مع الخدمات الحضرية.",
            "تطوير خطط استراتيجية لتطبيق التحول الذكي في المدن.",
          ]
        ),
      },
    ],
  },
]
