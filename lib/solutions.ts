export type TechStackCategory = {
  title: string
  items: string[]
}

export type SolutionListItem = {
  title: string
  description: string
  bullets?: string[]
}

export type SolutionStat = {
  label: string
  value: string
  description?: string
}

export type SolutionStep = {
  title: string
  description: string
}

export type SolutionCTA = {
  label: string
  href: string
  description: string
}

export type Solution = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  overview: string
  stats: SolutionStat[]
  features: SolutionListItem[]
  useCases: SolutionListItem[]
  techStack: TechStackCategory[]
  engagement: SolutionStep[]
  differentiators: SolutionListItem[]
  cta: SolutionCTA
}

export const PRIMARY_SERVICE_SLUGS = [
  "cybersecurity-risk",
  "software-engineering",
  "ai-data-science",
  "xr-immersive",
  "iot-platforms",
  "quality-assurance",
  "digital-infrastructure",
  "enterprise-platforms",
  "digital-consulting",
  "institutional-building",
] as const

export const solutions: Solution[] = [
  {
    slug: "cybersecurity-risk",
    name: "Cybersecurity & Risk Intelligence",
    category: "Security & Resilience",
    tagline: "Defend critical assets with adaptive, intelligence-led security operations.",
    description:
      "Protect your enterprise with layered cyber defenses, 24/7 threat monitoring, and governance programs that anticipate risk before it becomes a breach.",
    overview:
      "Our cybersecurity and risk intelligence teams fuse red/blue teaming, zero-trust architecture, and automation to harden cloud, OT, and hybrid environments—aligning security posture with business velocity and regulatory demands.",
    stats: [
      {
        label: "Mean Time to Detect",
        value: "↓ 68%",
        description: "Faster threat detection through automated telemetry correlation and SOC playbooks.",
      },
      {
        label: "Coverage Uplift",
        value: "95%",
        description: "Critical assets mapped with continuous controls monitoring across cloud, edge, and OT.",
      },
      {
        label: "Compliance Readiness",
        value: "100%",
        description: "Framework alignment (ISO 27001, NCA ECC, GDPR) backed by living risk registers.",
      },
    ],
    features: [
      {
        title: "Zero-Trust Architecture",
        description:
          "Micro-segmentation, identity-aware access, and continuous verification to limit lateral movement across workloads.",
      },
      {
        title: "Threat Intelligence Fusion",
        description:
          "Hunt programs combining global intel feeds, OT telemetry, and AI-driven anomaly detection for contextual alerts.",
      },
      {
        title: "Security Automation & SOAR",
        description:
          "Codified response runbooks, automated enrichment, and cross-tool orchestration to slash mean time to respond.",
      },
      {
        title: "Governance & Assurance",
        description:
          "Policy engineering, risk quantification dashboards, and compliance automation to satisfy board and regulator scrutiny.",
      },
    ],
    useCases: [
      {
        title: "Security Operations Modernization",
        description:
          "Build or elevate SOC capabilities with unified telemetry, automated triage, and threat hunting enablement.",
        bullets: ["SOC playbook design", "Managed detection & response", "Purple-team readiness drills"],
      },
      {
        title: "Industrial & OT Protection",
        description:
          "Safeguard plants and critical infrastructure with asset discovery, network segmentation, and anomaly detection.",
        bullets: ["Passive OT monitoring", "Safety system hardening", "Incident response tabletops"],
      },
      {
        title: "Regulatory Compliance & GRC",
        description:
          "Operationalize frameworks such as NIST CSF, NCA ECC, and ISO 27001 with living risk registers and audit-ready evidence.",
        bullets: ["Policy and control mapping", "Automated evidence collection", "Executive cyber risk dashboards"],
      },
    ],
    techStack: [
      {
        title: "Security Platforms",
        items: ["Microsoft Defender XDR", "Palo Alto Cortex", "CrowdStrike Falcon", "Splunk Enterprise Security"],
      },
      {
        title: "Automation & Orchestration",
        items: ["Microsoft Sentinel", "Cortex XSOAR", "Swimlane", "ServiceNow SecOps"],
      },
      {
        title: "Identity & Access",
        items: ["Azure AD Conditional Access", "Okta", "CyberArk", "HashiCorp Boundary"],
      },
      {
        title: "OT & Edge Security",
        items: ["Nozomi Networks", "Claroty", "Dragos", "Cisco Cyber Vision"],
      },
    ],
    engagement: [
      {
        title: "Assess & Prioritize",
        description: "Attack surface mapping, maturity benchmarking, and risk quantification workshops.",
      },
      {
        title: "Architecture & Blueprint",
        description: "Zero-trust reference designs, control selection, and security operating model definition.",
      },
      {
        title: "Implement & Automate",
        description: "Platform rollout, detection engineering, and SOAR runbook development with enablement.",
      },
      {
        title: "Operate & Evolve",
        description: "Continuous monitoring, threat hunting, and board-level reporting with managed services.",
      },
    ],
    differentiators: [
      {
        title: "Adversary Simulation Expertise",
        description: "Red, blue, and purple teams pressure-test controls across IT, cloud, and OT landscapes.",
      },
      {
        title: "Regional Compliance Fluency",
        description: "Hands-on experience with GCC, EU, and global regulatory mandates to keep programs audit-ready.",
      },
      {
        title: "Automation-First Delivery",
        description: "Reusable detections, infrastructure-as-code, and SOAR packs accelerate time to value.",
      },
    ],
    cta: {
      label: "Schedule a cyber resilience briefing",
      href: "/contact?topic=cyber",
      description: "Align security priorities with our incident response and GRC strategists.",
    },
  },
  {
    slug: "medical-vr",
    name: "Medical VR",
    category: "Immersive Healthcare",
    tagline: "Immersive medical rehearsal, training, and patient engagement platforms.",
    description:
      "Deploy hyper-realistic virtual environments that accelerate clinical training, shorten surgical rehearsal cycles, and empower patients to better understand their care journeys.",
    overview:
      "Our Medical VR programs combine high-fidelity simulation, biometric feedback, and evidence-based learning frameworks to help hospitals, universities, and device makers deliver safer, more confident care.",
    stats: [
      { label: "Training Time Reduction", value: "45%", description: "Average decrease in onboarding time for new clinicians." },
      { label: "Knowledge Retention", value: "3.5x", description: "Improved procedural recall versus traditional learning." },
      { label: "Patient Satisfaction", value: "92%", description: "Patients report higher clarity around treatment plans." },
    ],
    features: [
      {
        title: "Anatomical Digital Twins",
        description: "Ultrarealistic human models with pathologies replicated from CT/MRI datasets for tailored training pathways.",
      },
      {
        title: "Mixed-Reality Haptics",
        description: "Integrations with haptic rigs, surgical instruments, and motion tracking for kinesthetic feedback.",
      },
      {
        title: "Learning Analytics",
        description: "Competency dashboards with skill progression, error heatmaps, and remediation guidance aligned to accreditation.",
      },
      {
        title: "Secure Content Distribution",
        description: "Role-based access and offline-ready packaging for multi-site deployments and remote cohorts.",
      },
    ],
    useCases: [
      {
        title: "Surgical Rehearsal & Credentialing",
        description:
          "Simulate complex procedures, capture performance telemetry, and issue proficiency reports for credentialing boards.",
        bullets: ["Cardiac & neuro surgery rehearsal", "Emergency response drills", "Device adoption enablement"],
      },
      {
        title: "Nursing & Allied Health Training",
        description:
          "Recreate high-pressure scenarios such as ICU, neonatal, or trauma bays to build decision-making and teamwork skills.",
        bullets: ["Scenario branching & cohort scoring", "Multi-user collaboration", "Fatigue & stress monitoring"],
      },
      {
        title: "Patient Education & Therapeutic Support",
        description:
          "Deliver immersive patient journeys that demystify procedures, support rehab adherence, and reduce anxiety.",
        bullets: ["Pre-op walkthroughs", "Phobia desensitization", "Behavioral health exposure therapy"],
      },
    ],
    techStack: [
      {
        title: "Engines & Pipelines",
        items: ["Unity HDRP", "Unreal Engine 5", "OpenXR", "Blender & RealityCapture"],
      },
      {
        title: "Hardware & Interfaces",
        items: ["Meta Quest & Quest Pro", "HTC VIVE Focus", "Varjo XR-3", "Manus Prime X Gloves", "OptiTrack"],
      },
      {
        title: "Data & Compliance",
        items: ["HIPAA-ready cloud (Azure, AWS)", "FHIR APIs", "SOC 2 monitoring", "On-premise edge servers"],
      },
      {
        title: "Analytics & Telemetry",
        items: ["Azure Application Insights", "Datadog", "Power BI dashboards", "Custom LRS (xAPI)"],
      },
    ],
    engagement: [
      {
        title: "Discovery & Validation",
        description: "Stakeholder workshops, clinical advisory alignment, and success metric definition.",
      },
      {
        title: "Experience Blueprint",
        description: "Immersive storyboard, asset capture planning, and simulation architecture specification.",
      },
      {
        title: "Build & Integrate",
        description: "Content production, haptic integration, compliance hardening, and cloud deployment.",
      },
      {
        title: "Rollout & Optimization",
        description: "Instructor enablement, analytics tuning, continuous content updates, and support SLAs.",
      },
    ],
    differentiators: [
      {
        title: "Clinical Advisory Network",
        description: "Partner with practicing surgeons, nurses, and educators to validate realism and accreditation.",
      },
      {
        title: "Evidence-Backed Outcomes",
        description: "Structured pilot studies and IRB-ready reporting to prove clinical and financial ROI.",
      },
      {
        title: "Interoperable Architecture",
        description: "Connect VR experiences with LMS, EMR, and credentialing platforms for a unified data layer.",
      },
    ],
    cta: {
      label: "Schedule a Medical VR workshop",
      href: "/contact?topic=medical-vr",
      description: "Map your immersive roadmap with our clinical innovation team.",
    },
  },
  {
    slug: "ai-data-science",
    name: "AI & Data Science",
    category: "Intelligent Platforms",
    tagline: "Operationalize trustworthy AI across your enterprise.",
    description:
      "Design data foundations, machine learning pipelines, and decision intelligence workflows that scale from proof-of-concept to mission-critical operations.",
    overview:
      "We build AI products that move KPIs—combining modern data stacks, model governance, and human-centered design to help teams trust and adopt AI-driven decisions.",
    stats: [
      { label: "Time-to-Insight", value: "4x faster", description: "Accelerated analytics cycles through automated pipelines." },
      { label: "Model Uptime", value: "99.5%", description: "Resilient MLOps ensures continuous prediction services." },
      { label: "Risk Reduction", value: "65%", description: "Bias and drift monitoring reduces governance escalations." },
    ],
    features: [
      {
        title: "Modern Data Foundations",
        description: "Architect medallion lakehouses, data mesh patterns, and lineage-aware ingestion for analytics agility.",
      },
      {
        title: "Full-Lifecycle MLOps",
        description: "Feature stores, automated retraining, and CI/CD for models across cloud, edge, and on-premise targets.",
      },
      {
        title: "Responsible AI Guardrails",
        description: "Model cards, explainability dashboards, and fairness testing to meet regulatory and ethical standards.",
      },
      {
        title: "Decision Intelligence Apps",
        description: "Composable UI frameworks to embed AI-driven recommendations directly in business workflows.",
      },
    ],
    useCases: [
      {
        title: "Predictive Maintenance",
        description: "Streaming anomaly detection for industrial assets with automated work-order orchestration.",
        bullets: ["Real-time sensor fusion", "Failure probability scoring", "Automated downtime scheduling"],
      },
      {
        title: "Customer Intelligence",
        description: "Next-best action engines and churn prevention models integrated with marketing automation.",
        bullets: ["360° identity stitching", "Personalization journeys", "Incrementality measurement"],
      },
      {
        title: "Risk & Compliance Analytics",
        description: "Fraud detection, AML, and regulatory reporting with auditable AI workflows.",
        bullets: ["Graph anomaly detection", "Explainable risk scoring", "Automated report generation"],
      },
    ],
    techStack: [
      {
        title: "Data Platforms",
        items: ["Snowflake", "Databricks", "BigQuery", "Azure Synapse"],
      },
      {
        title: "ML Frameworks",
        items: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost"],
      },
      {
        title: "MLOps & Orchestration",
        items: ["MLflow", "Kubeflow", "Weights & Biases", "Prefect"],
      },
      {
        title: "BI & Activation",
        items: ["Power BI", "Looker", "Streamlit", "ThoughtSpot"],
      },
    ],
    engagement: [
      { title: "Use-Case Prioritization", description: "Value framing, data readiness audits, and ROI playbooks." },
      { title: "Pilot Build", description: "Rapid model development, shadow-mode validation, and UX prototypes." },
      { title: "Production Hardening", description: "MLOps automation, governance controls, and workforce enablement." },
      { title: "Adoption & Scaling", description: "Operating model design, internal capability uplift, and managed support." },
    ],
    differentiators: [
      { title: "Outcome-First Playbooks", description: "Templates and accelerators tuned to industrial, public, and financial sectors." },
      { title: "Embedded Governance", description: "Risk, compliance, and ethics specialists embedded in delivery squads." },
      { title: "Hybrid Cloud Expertise", description: "Experience delivering regulated workloads across public cloud and sovereign regions." },
    ],
    cta: {
      label: "Book an AI strategy session",
      href: "/contact?topic=ai",
      description: "Uncover quick wins and long-term data platform investments.",
    },
  },
  {
    slug: "xr-immersive",
    name: "XR & Immersive",
    category: "Immersive Experiences",
    tagline: "VR, AR, and metaverse solutions for realistic training and engagement.",
    description:
      "We design virtual and augmented environments that simulate real scenarios for learning, collaboration, and interactive storytelling.",
    overview:
      "From VR training spaces to AR applications and metaverse venues, our teams craft immersive journeys with high-quality visuals, intuitive interactions, and smooth device integration.",
    stats: [],
    features: [
      { title: "VR Experiences", description: "3D virtual environments for training, education, and operational simulations." },
      { title: "AR Applications", description: "Interactive overlays that enhance maintenance, marketing, and learning in the real world." },
      { title: "Metaverse Spaces", description: "Custom virtual venues for meetings, workshops, and events with full branding." },
      { title: "Interactive Learning Content", description: "Rich multimedia experiences designed to boost comprehension and retention." },
      { title: "Device & Platform Integration", description: "Provisioning and managing VR/AR devices and platforms for stable performance." },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      { title: "Needs Analysis", description: "Identify objectives and select the right XR approach for the use case." },
      { title: "Experience Design", description: "Design flows and prototypes to validate interactions and storytelling." },
      { title: "Development & Content Production", description: "Build experiences with advanced 3D tools and rich media." },
      { title: "Testing & Pilot", description: "Run user tests to refine usability and performance before launch." },
      { title: "Launch & Support", description: "Deploy the experience, train users, and provide ongoing updates." },
    ],
    differentiators: [],
    cta: {
      label: "Plan an immersive activation",
      href: "/contact?topic=xr",
      description: "Co-create an unforgettable XR moment with our spatial experience studio.",
    },
  },
  {
    slug: "iot-platforms",
    name: "Internet of Things & Smart Systems",
    category: "Connected Systems",
    tagline: "Sensor-driven platforms that monitor, automate, and predict issues in real time.",
    description:
      "We connect devices, facilities, and assets through smart sensors, wireless networks, and real-time analytics to improve operations and decision-making.",
    overview:
      "Our teams design scalable IoT solutions that collect data from across the enterprise, visualize insights instantly, and apply automation and AI for predictive maintenance and smarter control.",
    stats: [],
    features: [
      {
        title: "Enterprise IoT Solutions",
        description: "End-to-end sensor and device architectures that gather accurate data across your operations.",
      },
      {
        title: "Real-time Data Platforms",
        description: "Dashboards and control centers that surface live metrics for faster decisions.",
      },
      {
        title: "Smart Control & Automation",
        description: "Remote control and automated responses that boost productivity and reduce errors.",
      },
      {
        title: "AI-driven Predictive Maintenance",
        description: "Analyze IoT data to forecast failures, reduce downtime, and extend asset life.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      { title: "Readiness Assessment", description: "Study current infrastructure and identify integration points for IoT." },
      { title: "Solution Design", description: "Select devices, platforms, and architecture to meet operational needs." },
      { title: "Installation & Integration", description: "Deploy sensors and connect them to centralized platforms securely." },
      { title: "Launch & Optimization", description: "Go live, monitor performance, and refine automations." },
      { title: "Training & Support", description: "Upskill teams on managing smart systems and provide ongoing assistance." },
    ],
    differentiators: [],
    cta: {
      label: "Explore IoT acceleration",
      href: "/contact?topic=iot",
      description: "Identify your quickest path from sensors to enterprise insight.",
    },
  },
  {
    slug: "digital-twins",
    name: "Digital Twins",
    category: "Operational Simulation",
    tagline: "Synchronize digital replicas with real-world operations.",
    description:
      "Build immersive, data-connected replicas of physical assets, facilities, and processes to simulate scenarios, forecast outcomes, and drive intelligent automation.",
    overview:
      "Our digital twin platforms blend IoT, 3D visualization, and AI to empower operational teams with a living system-of-systems view that informs strategic decisions.",
    stats: [
      { label: "Downtime Avoided", value: "38%", description: "Prevented outages through proactive simulation and alerts." },
      { label: "Decision Speed", value: "5x", description: "Faster scenario analysis for planners and field teams." },
      { label: "Data Unification", value: "12 sources", description: "Average number of systems harmonized per deployment." },
    ],
    features: [
      { title: "Real-Time Sync", description: "Bi-directional data pipelines keep virtual models synchronized with physical systems." },
      { title: "Scenario Sandboxing", description: "Run what-if simulations, stress tests, and predictive interventions safely." },
      { title: "3D Visualization Layer", description: "Photorealistic renderings powered by geospatial and BIM data fusion." },
      { title: "AI-Augmented Insights", description: "Root cause inference, prescriptive actions, and autonomous optimization loops." },
    ],
    useCases: [
      {
        title: "Smart Manufacturing",
        description: "Line optimization, worker safety analytics, and throughput forecasting.",
        bullets: ["Bottleneck detection", "Human/robot interaction modeling", "Dynamic scheduling"],
      },
      {
        title: "Infrastructure & Utilities",
        description: "Grid balancing, asset lifecycle management, and disaster preparedness.",
        bullets: ["Storm impact simulations", "Asset health scoring", "Regulatory reporting automation"],
      },
      {
        title: "Urban Planning",
        description: "Mobility simulations, environmental impact modeling, and citizen engagement portals.",
        bullets: ["Traffic & emissions modeling", "Public consultation visualizations", "Scenario comparison dashboards"],
      },
    ],
    techStack: [
      { title: "Modeling & Visualization", items: ["Unity Industry", "Bentley iTwin", "CesiumJS", "Autodesk Forge"] },
      { title: "Data Integration", items: ["Azure Digital Twins", "Siemens MindSphere", "ThingWorx", "Kafka"] },
      { title: "Analytics & AI", items: ["Azure Machine Learning", "AWS SageMaker", "dbt", "Neo4j"] },
      { title: "Collaboration", items: ["Power BI", "Tableau", "Custom React spatial dashboards"] },
    ],
    engagement: [
      { title: "Twin Strategy", description: "Identify priority assets, data sources, and ROI hypotheses." },
      { title: "Foundation Build", description: "Data modeling, 3D capture, and integration with live systems." },
      { title: "Simulation & AI Layer", description: "Scenario libraries, predictive models, and alerting workflows." },
      { title: "Adoption & Governance", description: "Operating model definition, training, and continuous improvement." },
    ],
    differentiators: [
      { title: "Cross-Domain Twin Fabric", description: "Link asset, process, and human twins for holistic insights." },
      { title: "Actionable Insights", description: "Integrations back into CMMS, ERP, and automation systems to close the loop." },
      { title: "Sovereign Deployment Options", description: "Support for on-premise and air-gapped environments when required." },
    ],
    cta: {
      label: "Design your twin roadmap",
      href: "/contact?topic=digital-twins",
      description: "Prioritize assets and simulations that deliver measurable impact quickly.",
    },
  },
  {
    slug: "software-engineering",
    name: "Systems & Application Engineering",
    category: "Digital Engineering",
    tagline: "Custom enterprise systems, web, and mobile applications built around your operations.",
    description:
      "We design and build tailored platforms, interfaces, and integrations that streamline processes and scale with your business.",
    overview:
      "Using Agile delivery and modern architectures, we transform requirements into reliable software with clean UX, solid integrations, and maintainable codebases.",
    stats: [],
    features: [
      {
        title: "Custom Enterprise Systems",
        description: "HR, finance, operations, and other line-of-business systems engineered for flexibility and growth.",
      },
      {
        title: "Interactive Web Applications",
        description: "Responsive, secure web apps that elevate internal and external service delivery across devices.",
      },
      {
        title: "Mobile Applications",
        description: "Android and iOS apps with intuitive experiences that keep services accessible everywhere.",
      },
      {
        title: "Integration Services",
        description: "APIs and connectors that unify legacy and modern platforms for consistent data flow.",
      },
      {
        title: "System Enhancement & Optimization",
        description: "Performance, security, and UX improvements that extend the life of existing solutions.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      {
        title: "Requirements & Scope",
        description: "Analyze current processes and capture the features and outputs the system must deliver.",
      },
      {
        title: "Design & Prototyping",
        description: "Craft UX/UI and prototypes to validate the final shape of the solution with stakeholders.",
      },
      {
        title: "Development",
        description: "Build with modern frameworks and iterative releases to keep progress visible.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Run functional and technical tests to validate performance before launch.",
      },
      {
        title: "Launch & Support",
        description: "Deploy, integrate, and provide ongoing support and updates.",
      },
    ],
    differentiators: [],
    cta: {
      label: "Start your build",
      href: "/contact?topic=software",
      description: "Tell us about the system you need and we'll plan the fastest path to launch.",
    },
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance & Global Standards",
    category: "Quality & Compliance",
    tagline: "Audits, certification readiness, and quality programs aligned with global standards.",
    description:
      "We improve performance and reduce operational risk through structured audits, quality assessments, and compliance support for ISO, ITIL, and COBIT.",
    overview:
      "Our teams evaluate processes and controls, close gaps with clear recommendations, and build policies and procedures that keep services reliable and audit-ready.",
    stats: [],
    features: [
      {
        title: "Internal & External Audits",
        description: "End-to-end reviews of systems and procedures with findings, gaps, and remediation guidance.",
      },
      {
        title: "Quality Assurance & Performance Evaluation",
        description: "Assess services against KPIs and apply improvement plans that raise productivity and service levels.",
      },
      {
        title: "ISO Standards Implementation",
        description: "Gap assessments, documentation, and execution support to achieve ISO certifications.",
      },
      {
        title: "ITIL & COBIT Frameworks",
        description: "Governance, risk, and IT service management practices aligned with global frameworks.",
      },
      {
        title: "External Audit Readiness",
        description: "Prepare teams, artifacts, and controls to smoothly pass certification and accreditation audits.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      {
        title: "Current State Review",
        description: "Gather evidence across processes, systems, and controls to map gaps and risks.",
      },
      {
        title: "Audit & Quality Plan",
        description: "Define scope, tools, and priorities for audits and quality improvements.",
      },
      {
        title: "Execution & Validation",
        description: "Run audits and assessments, validate controls, and document clear recommendations.",
      },
      {
        title: "Policy & Procedure Development",
        description: "Create or refine quality policies, SOPs, and governance documents.",
      },
      {
        title: "Follow-up & Continuous Improvement",
        description: "Track remediation, measure impact, and keep quality programs sustainable.",
      },
    ],
    differentiators: [],
    cta: {
      label: "Book a quality review",
      href: "/contact?topic=quality",
      description: "Let's align your operations with international standards.",
    },
  },
  {
    slug: "digital-infrastructure",
    name: "Digital Infrastructure & IT Services",
    category: "Infrastructure & IT Services",
    tagline: "Networks, data centers, storage, and cloud services engineered for continuity.",
    description:
      "We design and run reliable infrastructure that keeps your operations secure, available, and ready to scale.",
    overview:
      "From wired and wireless networks to resilient data centers and hybrid cloud, we build integrated environments that support remote work, safeguard data, and simplify future growth.",
    stats: [],
    features: [
      {
        title: "Enterprise Network Design",
        description: "Plan and deploy wired and wireless networks with secure connectivity between sites and branches.",
      },
      {
        title: "Data Centers & Servers",
        description: "Design and equip resilient data centers covering power, cooling, security, and server management.",
      },
      {
        title: "Storage & Backup",
        description: "Implement storage platforms with backup and recovery policies to protect critical data.",
      },
      {
        title: "Cloud & Virtualization",
        description: "Build hybrid or cloud environments that support remote work and flexible scaling.",
      },
      {
        title: "Managed IT Services",
        description: "Proactive monitoring, maintenance, and support across networks, servers, and applications.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      {
        title: "Current State Assessment",
        description: "Evaluate infrastructure and identify weaknesses and improvement opportunities.",
      },
      {
        title: "Solution Design & Plan",
        description: "Model the target architecture and define requirements, timelines, and success criteria.",
      },
      {
        title: "Implementation & Configuration",
        description: "Install equipment, configure systems, and run stability and performance tests.",
      },
      {
        title: "Go-live & Handover",
        description: "Launch the environment, ensure integration with other systems, and deliver full documentation.",
      },
      {
        title: "Ongoing Support",
        description: "Provide continuous maintenance, updates, and rapid incident response.",
      },
    ],
    differentiators: [],
    cta: {
      label: "Book an infrastructure strategy session",
      href: "/contact?topic=infrastructure",
      description: "Review your hybrid estate with our architects and SRE leads.",
    },
  },
  {
    slug: "enterprise-platforms",
    name: "Integrated Enterprise Solutions",
    category: "Enterprise Platforms",
    tagline: "Unify systems, data, and processes in one coherent operating model.",
    description:
      "We design connected enterprise architectures, implement ERP suites, and build analytics that elevate decision-making.",
    overview:
      "By integrating operational and administrative systems into a single digital environment, we improve efficiency, data flow, and visibility so teams can execute with confidence.",
    stats: [],
    features: [
      {
        title: "System Integration & Data Flow",
        description: "Connect operational and administrative systems with secure APIs and seamless data exchange.",
      },
      {
        title: "Enterprise Architecture",
        description: "Assess current architectures, identify gaps, and design a transformation roadmap.",
      },
      {
        title: "ERP Implementations",
        description: "Select, localize, and deploy ERP platforms such as Odoo, SAP, or Oracle with tailored modules.",
      },
      {
        title: "Executive Dashboards & Analytics",
        description: "Build live dashboards and business intelligence that keep leadership informed.",
      },
      {
        title: "Process Improvement (BPR & BPM)",
        description: "Re-engineer processes to reduce waste, increase quality, and support scalable operations.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      { title: "Assessment", description: "Study enterprise architecture and operational processes to understand gaps and opportunities." },
      { title: "Design & Roadmap", description: "Develop an operating model and implementation plan across systems and data." },
      { title: "Implementation & Integration", description: "Deploy solutions, customize platforms, and migrate data with tight integration." },
      { title: "Testing & Optimization", description: "Validate performance, tune configurations, and confirm readiness." },
      { title: "Training & Knowledge Transfer", description: "Enable teams with training, guides, and ongoing support." },
    ],
    differentiators: [],
    cta: {
      label: "Plan your enterprise roadmap",
      href: "/contact?topic=enterprise",
      description: "Align stakeholders around the next phase of your ERP, CRM, or automation journey.",
    },
  },
  {
    slug: "digital-consulting",
    name: "Technology Consulting & Digital Transformation",
    category: "Advisory & Transformation",
    tagline: "Advisory, governance, and roadmaps that make digital transformation practical.",
    description:
      "We assess current capabilities, design digital strategies, and guide technology choices so transformation programs deliver measurable results.",
    overview:
      "By combining maturity assessments, process re-engineering, and emerging technology guidance, we help organizations automate, modernize, and adopt scalable platforms.",
    stats: [],
    features: [
      {
        title: "Digital Transformation Strategy",
        description: "Assess current state, set priorities, and publish an execution roadmap aligned to business goals.",
      },
      {
        title: "Digital Maturity & Process Re-engineering",
        description: "Evaluate readiness, redesign processes, and introduce automation to raise efficiency and service quality.",
      },
      {
        title: "Technology Selection & Implementation",
        description: "Support RFPs, vendor evaluations, and deployment of systems like ERP, CRM, and HRMS.",
      },
      {
        title: "Cloud & Infrastructure Transformation",
        description: "Plan and manage secure migrations to cloud or hybrid environments without disrupting operations.",
      },
      {
        title: "Innovation & Emerging Tech Advisory",
        description: "Identify practical uses for AI, IoT, automation, and blockchain that build sustainable advantage.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      {
        title: "Current State & Needs Analysis",
        description: "Collect and analyze data on processes, systems, and organizational structures to find gaps.",
      },
      {
        title: "Strategy & Program Design",
        description: "Define initiatives, timelines, and resources that align with objectives and operational realities.",
      },
      {
        title: "Execution Oversight",
        description: "Guide implementation, manage risks, and ensure progress stays on plan and within technical standards.",
      },
      {
        title: "Evaluation & Continuous Improvement",
        description: "Track performance after go-live, capture lessons learned, and adjust roadmaps for sustained impact.",
      },
    ],
    differentiators: [],
    cta: {
      label: "Book a transformation workshop",
      href: "/contact?topic=consulting",
      description: "Align stakeholders on priorities and execution guardrails.",
    },
  },
  {
    slug: "institutional-building",
    name: "Institutional Building & Governance",
    category: "Organizational Excellence",
    tagline: "Design governance, structures, and policies that clarify roles and boost performance.",
    description:
      "We establish operating models, policies, and job frameworks that strengthen organizational stability and readiness.",
    overview:
      "By developing organizational structures, governance systems, and clear procedures, we help institutions align responsibilities, improve efficiency, and sustain growth.",
    stats: [],
    features: [
      {
        title: "Organizational Structure Design",
        description: "Develop integrated structures with clear reporting lines and scalable operating models.",
      },
      {
        title: "Policies & Administrative Regulations",
        description: "Draft policies and SOPs across operations, finance, and HR based on best practices.",
      },
      {
        title: "Roles & Job Descriptions",
        description: "Create detailed role profiles that define responsibilities and required competencies.",
      },
      {
        title: "Governance & Performance Systems",
        description: "Set governance frameworks and KPIs with monitoring mechanisms and periodic reviews.",
      },
      {
        title: "Process Re-engineering (BPR)",
        description: "Simplify and redesign processes to remove waste and raise efficiency.",
      },
    ],
    useCases: [],
    techStack: [],
    engagement: [
      { title: "Diagnostics & Analysis", description: "Assess current structures and processes to pinpoint gaps." },
      { title: "Organizational Design", description: "Build target structures, operating models, and governance aligned to strategy." },
      { title: "Policies & Guides", description: "Produce policy manuals, SOPs, job descriptions, and performance frameworks." },
      { title: "Implementation & Enablement", description: "Roll out the new model, train teams, and activate oversight mechanisms." },
      { title: "Review & Improvement", description: "Evaluate impact regularly and adjust structures as needs evolve." },
    ],
    differentiators: [],
    cta: {
      label: "Start your institutional build",
      href: "/contact?topic=institutional-building",
      description: "Let's design the governance and structures that fit your vision.",
    },
  },
]

export const solutionMap = new Map(solutions.map((solution) => [solution.slug, solution]))

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutionMap.get(slug)
}
