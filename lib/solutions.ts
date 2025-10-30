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
]

export const solutionMap = new Map(solutions.map((solution) => [solution.slug, solution]))

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutionMap.get(slug)
}
