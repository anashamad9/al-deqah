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
    category: "Extended Reality",
    tagline: "Stories and spaces that respond to every movement.",
    description:
      "Design immersive brand activations, training environments, and digital showrooms that blend physical and virtual experiences.",
    overview:
      "From mixed-reality stage shows to collaborative virtual campuses, we orchestrate spatial storytelling that deepens engagement and unlocks new revenue streams.",
    stats: [
      { label: "Engagement Lift", value: "3x", description: "Average dwell time increase across immersive venues." },
      { label: "Deployment Scale", value: "50+ sites", description: "Managed rollouts across retail, events, and learning hubs." },
      { label: "Uptime", value: "24/7", description: "Monitored experiential platforms with proactive support." },
    ],
    features: [
      {
        title: "Spatial Narrative Design",
        description: "Story arcs mapped to spatial triggers, volumetric capture, and reactive lighting.",
      },
      {
        title: "Multi-User Collaboration",
        description: "Shared virtual environments, avatar orchestration, and live event streaming integration.",
      },
      {
        title: "Experience Analytics",
        description: "Heatmaps, engagement funnels, and biometric inputs to optimize journeys in real time.",
      },
      {
        title: "Hardware Lifecycle Management",
        description: "Device provisioning, remote updates, and ops dashboards for distributed XR fleets.",
      },
    ],
    useCases: [
      {
        title: "Immersive Brand Launches",
        description: "Hybrid activations with physical-virtual synchronization and social amplification mechanics.",
        bullets: ["Venue-scale projection mapping", "Realtime VFX pipelines", "NFT and loyalty program tie-ins"],
      },
      {
        title: "Spatial Collaboration Hubs",
        description: "Persistent, secure environments for design reviews, town halls, and customer co-creation workshops.",
        bullets: ["Enterprise identity integration", "3D asset review tools", "Live whiteboarding & annotation"],
      },
      {
        title: "Immersive Learning & Onboarding",
        description: "Soft-skill training, compliance simulations, and knowledge retention analytics.",
        bullets: ["Adaptive scenario branching", "Speech & gesture analytics", "LMS / LXP integration"],
      },
    ],
    techStack: [
      { title: "Experiential Engines", items: ["Unreal Engine", "Unity", "Notch", "TouchDesigner"] },
      { title: "Immersive Hardware", items: ["Hololens 2", "Meta Quest Pro", "Varjo XR-4", "ARKit/ARCore"] },
      { title: "Experience Platforms", items: ["Microsoft Mesh", "ENGAGE XR", "Spatial.io", "Custom WebXR"] },
      { title: "Analytics & Ops", items: ["Azure PlayFab", "Amplitude", "Grafana", "Bynder DAM"] },
    ],
    engagement: [
      { title: "Concept & Story Lab", description: "Narrative framing, visual language, and interaction prototyping." },
      { title: "Experience Engineering", description: "Development sprints with VFX, audio, and systems integration." },
      { title: "Launch Orchestration", description: "Venue tech coordination, rehearsals, and failover planning." },
      { title: "Operate & Evolve", description: "Real-time monitoring, content refresh cycles, and performance tuning." },
    ],
    differentiators: [
      { title: "End-to-End Production", description: "Creative, technical, and operational crews under one roof." },
      { title: "Platform Agnostic", description: "Deploy on-prem, cloud streaming, or standalone devices without lock-in." },
      { title: "Analytics-Driven Creative", description: "Data instrumentation baked into the creative process from day one." },
    ],
    cta: {
      label: "Plan an immersive activation",
      href: "/contact?topic=xr",
      description: "Co-create an unforgettable XR moment with our spatial experience studio.",
    },
  },
  {
    slug: "iot-platforms",
    name: "IoT Platforms",
    category: "Connected Intelligence",
    tagline: "Instrument the physical world with resilient edge-to-cloud IoT.",
    description:
      "Capture, process, and act on device telemetry with secure IoT platforms purpose-built for industrial and smart city scale.",
    overview:
      "We design sensor networks, connectivity strategies, and event-driven applications that unlock real-time awareness and automation for mission-critical operations.",
    stats: [
      { label: "Edge Response", value: "<80ms", description: "Deterministic edge processing for time-sensitive actions." },
      { label: "Coverage", value: "500K+ devices", description: "Fleet management across utilities, logistics, and smart cities." },
      { label: "Security Posture", value: "Zero-trust", description: "Continuous monitoring aligned with IEC 62443 & NIST." },
    ],
    features: [
      {
        title: "Device Onboarding & Lifecycle",
        description: "Secure provisioning, certificate rotation, and remote firmware management at fleet scale.",
      },
      {
        title: "Edge Analytics",
        description: "Stream processing, rule engines, and ML inference deployed on ruggedized gateways.",
      },
      {
        title: "Command & Control",
        description: "Bidirectional messaging with safe-guarded actuation flows and human-in-the-loop overrides.",
      },
      {
        title: "Digital Command Centers",
        description: "Operations dashboards integrating GIS layers, telemetry, and alert workflows.",
      },
    ],
    useCases: [
      {
        title: "Smart Utilities & Energy",
        description: "Grid monitoring, demand response, and predictive maintenance for critical infrastructure.",
        bullets: ["AMI & SCADA integration", "Outage prediction & crew dispatch", "DER orchestration"],
      },
      {
        title: "Logistics & Asset Tracking",
        description: "Cold chain monitoring, fleet telematics, and warehouse automation.",
        bullets: ["Real-time location services", "Condition-based alerts", "Digital work instructions"],
      },
      {
        title: "Smart Cities & Built Environments",
        description: "Environmental sensing, adaptive lighting, and intelligent facilities management.",
        bullets: ["LoRaWAN / 5G connectivity", "Urban data exchanges", "Occupancy-based automation"],
      },
    ],
    techStack: [
      { title: "Connectivity", items: ["LoRaWAN", "NB-IoT", "5G", "OPC-UA"] },
      { title: "Edge & Gateways", items: ["Azure IoT Edge", "AWS IoT Greengrass", "K3s", "NVIDIA Jetson"] },
      { title: "Cloud Platforms", items: ["Azure IoT Hub", "AWS IoT Core", "Google Cloud IoT", "InfluxDB"] },
      { title: "Visualization", items: ["Grafana", "Kibana", "Kepler.gl", "Custom React dashboards"] },
    ],
    engagement: [
      { title: "Connectivity Blueprint", description: "Site surveys, hardware selection, and security architecture." },
      { title: "Pilot & Validation", description: "Proofs of concept with real-world devices and ROI benchmarks." },
      { title: "Platform Build", description: "Edge software, cloud integration, and data activation pipelines." },
      { title: "Operate & Scale", description: "24/7 NOC, SLA-based support, and continuous improvement cycles." },
    ],
    differentiators: [
      { title: "Harsh Environment Expertise", description: "Experience across oil & gas, utilities, and large-scale campuses." },
      { title: "Security First Delivery", description: "Pen-testing, SBOM management, and policy enforcement baked in." },
      { title: "Interop & Standards", description: "Support for open data models and existing enterprise systems." },
    ],
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
    tagline: "Design, modernize, and operate enterprise software with reusable excellence.",
    description:
      "Cross-functional squads translate mission requirements into resilient platforms, APIs, and experiences that keep pace with regulatory, linguistic, and performance demands.",
    overview:
      "We combine product strategy, bilingual experience design, and DevSecOps automation to build platforms that stay compliant, observable, and simple to evolve — whether refreshing legacy control rooms or launching new digital services.",
    stats: [
      { label: "Release Velocity", value: "+35%", description: "Faster production releases via trunk-based delivery and automation." },
      { label: "Defect Escape Rate", value: "<1%", description: "Quality gates and continuous testing limit production issues." },
      { label: "Reusable Accelerators", value: "120+", description: "Libraries for auth, telemetry, localization, and analytics." },
    ],
    features: [
      {
        title: "Domain-Driven Architecture",
        description: "Microservices, event-driven, and modular patterns designed around mission domains.",
      },
      {
        title: "Product Discovery & UX",
        description: "Research-backed journeys, bilingual interfaces, and accessibility embedded in each release train.",
      },
      {
        title: "DevSecOps Automation",
        description: "Infrastructure-as-code, policy-as-code, and secure pipelines spanning build, test, and deploy.",
      },
      {
        title: "Observability & Telemetry",
        description: "Tracing, logging, and health scoring integrated from sprint one for faster root-cause analysis.",
      },
    ],
    useCases: [
      {
        title: "Legacy Platform Modernization",
        description: "Refactor monoliths into cloud-ready services with API-first interfaces and CI/CD enablement.",
        bullets: ["Strangler patterns", "Containerization roadmaps", "Automated regression suites"],
      },
      {
        title: "Mission Systems & Field Apps",
        description: "Offline-first and ruggedized applications for command centers, utilities, and mobility teams.",
        bullets: ["Edge sync services", "Role-based UI", "Secure device management"],
      },
      {
        title: "Citizen & Customer Portals",
        description: "Service portals that connect payments, workflows, and knowledge bases across agencies.",
        bullets: ["Single Sign-On", "Multilingual content ops", "Analytics-driven personalization"],
      },
    ],
    techStack: [
      { title: "Application Frameworks", items: ["Next.js", "NestJS", "Spring Boot", ".NET 8"] },
      { title: "Runtime & Cloud", items: ["Azure Kubernetes Service", "AWS ECS/Fargate", "HashiCorp Nomad", "Azure App Service"] },
      { title: "DevSecOps", items: ["GitHub Actions", "Azure DevOps", "Argo CD", "SonarQube"] },
      { title: "Experience Engineering", items: ["Figma", "Storybook", "Framer Motion", "WebGL"] },
    ],
    engagement: [
      { title: "Discover & Blueprint", description: "Co-design journeys, KPIs, and architecture guardrails." },
      { title: "Backlog & Architecture", description: "Domain modeling, API specs, and infrastructure-as-code." },
      { title: "Build & Integrate", description: "Iterative delivery with automated testing and observability." },
      { title: "Operate & Evolve", description: "Runbooks, SRE coaching, and backlog acceleration." },
    ],
    differentiators: [
      { title: "Bilingual Product Craft", description: "Arabic and English UX, content, and workflows from day one." },
      { title: "Regulated Industry Know-how", description: "Patterns for government, finance, oil & gas, and healthcare." },
      { title: "Embedded Enablement", description: "Train-the-trainer and paired delivery to upskill internal teams." },
    ],
    cta: {
      label: "Launch your next software release",
      href: "/contact?topic=software",
      description: "Share your roadmap and we will co-create a modernization sprint plan.",
    },
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance & Global Standards",
    category: "Quality & Compliance",
    tagline: "Independent validation, audits, and automation that keep programs reliable and certified.",
    description:
      "Full lifecycle QA services — from strategy to continuous testing and regulatory documentation — tailored to national infrastructure and enterprise delivery.",
    overview:
      "Combining automation engineers, compliance specialists, and bilingual documentation experts, we ensure every release meets ISO, ITIL, and sector-specific mandates while maintaining velocity.",
    stats: [
      { label: "Automation Coverage", value: "80%", description: "Automated regression and smoke suites across tiers." },
      { label: "Compliance Readiness", value: "100%", description: "Evidence packs aligned with ISO, ITSM, and local mandates." },
      { label: "Defect Detection", value: "95%", description: "Shift-left testing and observability catch issues earlier." },
    ],
    features: [
      { title: "QA Strategy & Governance", description: "Playbooks, KPIs, and tooling architectures matched to delivery models." },
      { title: "Automated & Manual Testing", description: "Functional, API, mobile, and UX testing via reusable frameworks." },
      { title: "Performance & Resilience", description: "Load, endurance, and chaos testing validating SLAs for critical workloads." },
      { title: "Compliance & Audit Support", description: "Traceability matrices, bilingual evidence packs, and readiness workshops." },
    ],
    useCases: [
      {
        title: "Regulated Platform Launches",
        description: "Independent verification for banking, government, and healthcare solutions.",
        bullets: ["SIT/UAT orchestration", "Accessibility audits", "Security control validation"],
      },
      {
        title: "Cloud & ERP Migrations",
        description: "Testing accelerators that de-risk large-scale platform modernization.",
        bullets: ["Data reconciliation", "Interface certification", "Disaster recovery drills"],
      },
      {
        title: "Data & AI Pipelines",
        description: "Validate data lineage, model accuracy, and responsible AI controls.",
        bullets: ["Quality scoring", "Bias detection suites", "Monitoring dashboards"],
      },
    ],
    techStack: [
      { title: "Test Automation", items: ["Playwright", "Cypress", "Selenium", "Appium"] },
      { title: "QA Management", items: ["Azure Test Plans", "TestRail", "Zephyr", "K6"] },
      { title: "Security & Compliance", items: ["OWASP ZAP", "Burp Suite", "Prisma Cloud", "Wiz"] },
      { title: "Monitoring & Analytics", items: ["Grafana", "Dynatrace", "Elastic APM", "Power BI"] },
    ],
    engagement: [
      { title: "Assess & Calibrate", description: "Maturity assessment and tooling roadmap." },
      { title: "Design & Enable", description: "Test architecture, data management, and KPIs." },
      { title: "Execute & Automate", description: "Implement automation, performance, and compliance suites." },
      { title: "Certify & Optimize", description: "Audit support, shift-left coaching, and continuous improvement." },
    ],
    differentiators: [
      { title: "Industry Framework Expertise", description: "ISO, ITIL, NCA, and healthcare-specific compliance experience." },
      { title: "Bilingual Evidence & Training", description: "Arabic and English documentation, workshops, and playbooks." },
      { title: "Integrated Toolchain", description: "Accelerators bridging DevSecOps and QA platforms." },
    ],
    cta: {
      label: "Schedule a QA readiness review",
      href: "/contact?topic=quality",
      description: "Identify the fastest path to compliant, automated quality operations.",
    },
  },
  {
    slug: "digital-infrastructure",
    name: "Digital Infrastructure & IT Services",
    category: "Infrastructure & IT Services",
    tagline: "Cloud, network, and workplace platforms engineered for resilience and scale.",
    description:
      "We modernize hybrid infrastructure — from data centers to edge sites — with automation, observability, and managed services that keep business operations secure and performant.",
    overview:
      "Our architects cover cloud landing zones, software-defined networking, workplace productivity, and ITSM so you can deliver secure, always-on services for employees and citizens alike.",
    stats: [
      { label: "Cost Optimization", value: "25%", description: "Average reduction through right-sizing and automation." },
      { label: "Availability SLA", value: "99.95%", description: "SRE practices and multi-region design keep services online." },
      { label: "Ticket Deflection", value: "40%", description: "Self-service portals and AIOps reduce manual workloads." },
    ],
    features: [
      {
        title: "Cloud & Hybrid Landing Zones",
        description: "Policy, security, and automation patterns for Azure, AWS, and sovereign clouds.",
      },
      {
        title: "Network & Security Modernization",
        description: "Software-defined WAN, microsegmentation, and zero-trust edge architectures.",
      },
      {
        title: "Digital Workplace Services",
        description: "Device lifecycle, collaboration suites, and identity management as managed services.",
      },
      {
        title: "Observability & IT Operations",
        description: "Unified monitoring, AIOps, and runbooks to shorten MTTR and improve user experience.",
      },
    ],
    useCases: [
      {
        title: "Data Center to Cloud Transition",
        description: "Blueprint and migrate workloads with minimal downtime and governance baked in.",
        bullets: ["Landing zone build", "Workload prioritization", "Automation runbooks"],
      },
      {
        title: "Smart Campus & Facility Networks",
        description: "High-availability networks that support IoT, security, and immersive collaboration.",
        bullets: ["SD-WAN rollouts", "Wi-Fi 6/6E design", "Integrated OT security"],
      },
      {
        title: "Managed IT Operations",
        description: "24/7 monitoring, patching, and service management with localized SLAs.",
        bullets: ["SRE pods", "ServiceNow workflows", "Onsite & remote support"],
      },
    ],
    techStack: [
      { title: "Cloud Platforms", items: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud"] },
      { title: "Network & Security", items: ["Cisco Nexus", "Aruba", "Fortinet", "Palo Alto Networks"] },
      { title: "Workplace & Identity", items: ["Microsoft 365", "Intune", "Jamf", "Okta"] },
      { title: "Observability & ITSM", items: ["Dynatrace", "Datadog", "Splunk ITSI", "ServiceNow"] },
    ],
    engagement: [
      { title: "Assess & Plan", description: "Current-state review, architecture principles, and migration roadmap." },
      { title: "Design & Deploy", description: "Implement landing zones, networks, and security controls." },
      { title: "Transition & Automate", description: "Cutover, automation, and knowledge transfer." },
      { title: "Operate & Optimize", description: "Managed services, FinOps, and continuous improvement." },
    ],
    differentiators: [
      { title: "Sovereign Cloud Patterns", description: "Experience with GCC and on-prem mandates for sensitive workloads." },
      { title: "ITSM + AIOps Integration", description: "Closed-loop operations spanning monitoring and service management." },
      { title: "Field Engineering Network", description: "Regional engineers for onsite support and rapid response." },
    ],
    cta: {
      label: "Book an infrastructure strategy session",
      href: "/contact?topic=infrastructure",
      description: "Review your hybrid estate with our architects and SRE leads.",
    },
  },
  {
    slug: "enterprise-platforms",
    name: "Integrated Enterprise Solutions",
    category: "Enterprise Systems",
    tagline: "Unify ERP, CRM, and workflow platforms around measurable outcomes.",
    description:
      "We align enterprise applications, low-code ecosystems, and data fabrics so every function shares the same trusted view of operations.",
    overview:
      "From Dynamics 365 and SAP to Salesforce and bespoke low-code apps, we design operating models, integrations, and analytics that keep distributed teams coordinated and audits satisfied.",
    stats: [
      { label: "Process Automation", value: "60%", description: "Manual steps removed across finance, HR, and operations." },
      { label: "Integration Time", value: "-40%", description: "Reusable APIs and event hubs accelerate new workloads." },
      { label: "Data Trust Score", value: "98%", description: "Data governance and lineage deliver a single source of truth." },
    ],
    features: [
      {
        title: "ERP & CRM Modernization",
        description: "Roadmaps, implementation, and localization for Dynamics 365, SAP, and Salesforce suites.",
      },
      {
        title: "Integration & Data Fabric",
        description: "Event-driven architecture, API gateways, and data virtualization to connect every system.",
      },
      {
        title: "Automation & Low-Code Apps",
        description: "Power Platform, UiPath, and OutSystems solutions that digitize paper-heavy workflows.",
      },
      {
        title: "Analytics & Performance",
        description: "Dashboards, scorecards, and predictive models tied directly to enterprise KPIs.",
      },
    ],
    useCases: [
      {
        title: "Unified Service Centers",
        description: "Single pane for citizen, customer, and partner interactions across channels.",
        bullets: ["Case management", "Knowledge bases", "Omnichannel engagement"],
      },
      {
        title: "Supply Chain & Asset Visibility",
        description: "Track inventory, maintenance, and logistics with real-time alerts.",
        bullets: ["IoT integration", "Predictive maintenance", "Supplier portals"],
      },
      {
        title: "Finance & HR Transformation",
        description: "Automate approvals, reporting, and compliance for shared services.",
        bullets: ["Workflow automation", "Self-service portals", "Regulatory reporting packs"],
      },
    ],
    techStack: [
      { title: "Business Platforms", items: ["Microsoft Dynamics 365", "SAP S/4HANA", "Oracle Fusion", "Salesforce"] },
      { title: "Integration Fabric", items: ["MuleSoft", "Boomi", "Azure Integration Services", "Kafka"] },
      { title: "Automation & Low-Code", items: ["Power Platform", "UiPath", "OutSystems", "Camunda"] },
      { title: "Data & Analytics", items: ["Microsoft Fabric", "Snowflake", "Databricks", "Power BI"] },
    ],
    engagement: [
      { title: "Assess & Prioritize", description: "Process diagnostics, pain-point mapping, and value cases." },
      { title: "Design & Localize", description: "Solution architecture, localization, and change strategy." },
      { title: "Implement & Integrate", description: "Agile deployments with data migration and automation." },
      { title: "Adopt & Govern", description: "Center-of-excellence coaching, analytics, and release governance." },
    ],
    differentiators: [
      { title: "Full-Stack Enterprise Expertise", description: "ERP, CRM, HCM, and bespoke apps delivered as one program." },
      { title: "Localized Experiences", description: "Arabic-first templates, content, and training." },
      { title: "Measured Outcomes", description: "Operational scorecards and adoption analytics embedded in delivery." },
    ],
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
    tagline: "Advisory blueprints that connect strategy, operating models, and delivery execution.",
    description:
      "We co-create transformation programs, governance models, and investment cases so boards, regulators, and delivery teams stay aligned.",
    overview:
      "Our consultants blend market research, financial modeling, and delivery enablement to fast-track national programs, mega projects, and enterprise transformations across the region.",
    stats: [
      { label: "Roadmap Acceleration", value: "50%", description: "Alignment through reusable playbooks and diagnostics." },
      { label: "Stakeholder Adoption", value: "90%", description: "Structured change management and bilingual communications." },
      { label: "Investment Confidence", value: "+30%", description: "Evidence-based business cases and KPI frameworks." },
    ],
    features: [
      {
        title: "Strategy & Vision Workshops",
        description: "Market scans, benchmarks, and opportunity framing with executive stakeholders.",
      },
      {
        title: "Operating Model & Governance",
        description: "Design PMOs, digital offices, and policy frameworks that keep execution on track.",
      },
      {
        title: "Portfolio & Value Management",
        description: "Prioritize initiatives, track KPIs, and connect funding to measurable outcomes.",
      },
      {
        title: "Change & Capability Uplift",
        description: "Communications, training, and leadership coaching tailored to bilingual audiences.",
      },
    ],
    useCases: [
      {
        title: "National Digital Programs",
        description: "Blueprint smart city, healthcare, or industrial transformation journeys.",
        bullets: ["Visioning labs", "Policy development", "Roadmap governance"],
      },
      {
        title: "Enterprise Transformation Offices",
        description: "Create digital PMOs with tooling, playbooks, and performance dashboards.",
        bullets: ["ServiceNow / Planview setup", "Benefit tracking", "Risk management"],
      },
      {
        title: "Capability & Innovation Labs",
        description: "Launch labs that prototype emerging tech with repeatable guardrails.",
        bullets: ["Innovation portfolios", "Partner ecosystems", "Upskilling academies"],
      },
    ],
    techStack: [
      { title: "Strategy & Collaboration", items: ["Miro", "Notion", "Jira Align", "Monday.com"] },
      { title: "Analytics & Insight", items: ["Power BI", "Tableau", "Looker", "ThoughtSpot"] },
      { title: "Portfolio & Automation", items: ["ServiceNow SPM", "Planview", "Smartsheet", "Jira"] },
      { title: "Innovation Tooling", items: ["Azure OpenAI", "GitHub Copilot", "NVIDIA Omniverse", "Hugging Face"] },
    ],
    engagement: [
      { title: "Diagnostics & Vision", description: "Assess maturity, define north-star KPIs, and co-create the vision." },
      { title: "Operating Model Design", description: "Establish governance, roles, and funding models." },
      { title: "Execution Enablement", description: "Stand up PMOs, toolchains, and reporting rhythms." },
      { title: "Value Realization", description: "Monitor KPIs, adjust portfolio mix, and embed capability." },
    ],
    differentiators: [
      { title: "Cross-Sector Insight", description: "Experience with government, energy, healthcare, and finance programs." },
      { title: "Bilingual Facilitation", description: "Arabic and English workshops, playbooks, and executive reporting." },
      { title: "Delivery-to-Strategy Continuity", description: "Advisory team stays involved through build and operate phases." },
    ],
    cta: {
      label: "Book a transformation workshop",
      href: "/contact?topic=consulting",
      description: "Align stakeholders on priorities and execution guardrails.",
    },
  },
]

export const solutionMap = new Map(solutions.map((solution) => [solution.slug, solution]))

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutionMap.get(slug)
}
