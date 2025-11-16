const SAMPLE_INTERNSHIPS = [
  // DEV / IT (with subdomains)
  {
    id: "PFE-26-DEV1",
    title: "Mobile Application for a Medical Tourism Platform",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "Mobile Development",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering",
    tags: ["Flutter","NestJS","Microservices","MongoDB","Firebase","Security","OAuth2","GDPR","HIPAA"],
    excerpt: "Build a secure Flutter app for patients and providers with bookings, payments, and medical record access.",
    Objectives: "Deliver a production-ready Flutter application for Android and iOS that enables international patients and providers to manage quotations, appointments, payments, and medical records with multilingual support and strong privacy/security controls.",
    Scope: "Implement secure authentication and authorization (JWT/OAuth2), encrypted communications, role-based access, appointment booking and reminders, quotation request and tracking, payment integration, and medical record viewing; integrate with NestJS API Gateway and microservices via REST/gRPC, and enable real-time notifications via FCM; out of scope: creating new medical workflows beyond existing backend logic.",
    Delivrables: "Published apps on Play Store and App Store, integrated mobile client with backend services, CI/CD pipelines for builds, and documentation covering architecture, API usage, security controls, and a user guide."
  },

  {
    id: "PFE-26-DEV2",
    title: "AI Chatbot Assistant for Medical Tourism Platform",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "AI",
    location: "On Site",
    duration: "4–6 months",
    level: "Egnineering/License",
    tags: ["NLP","Chatbot","Dialogflow","Transformers","NestJS Integration","Privacy","Multilingual AI"],
    excerpt: "Develop a multilingual AI chatbot that automates FAQs, quotations, and appointment guidance.",
    Objectives: "Design and integrate a multilingual AI chatbot that automates FAQs, assists with quotations, appointments, and payment guidance, and escalates complex cases to human agents while preserving context.",
    Scope: "Build intents/entities and dialog flows using Dialogflow CX, Rasa, or Transformers; connect to NestJS microservices via secure APIs/WebSockets for real-time data; implement token-based auth and anonymized logs for privacy; include English/French/Arabic support; out of scope: building new backend microservices not related to chatbot operations.",
    Delivrables: "Embedded chatbot on web and mobile, training datasets and NLU configuration, conversation flow documentation, analytics/monitoring dashboard, and runbooks for updates and retraining."
  },

  {
    id: "PFE-26-DEV3",
    title: "Cross-Platform Flutter App for Management Center",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "Mobile Development",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering",
    tags: ["Flutter","Firebase","Bookings","Payments","NestJS","State Management","Notifications"],
    excerpt: "Create a cross-platform Flutter app for salon bookings, admin operations, and online payments.",
    Objectives: "Deliver a cross-platform Flutter app for salon and beauty center scheduling that supports client booking, salon admin operations, platform oversight, and secure online transactions with a modern, accessible UI.",
    Scope: "Implement booking lifecycle (create/modify/cancel), service catalogs and pricing, availability management, push notifications, role-based access (platform admin, salon admin, client), and payment gateway integration; integrate with NestJS/Node.js backend and Firebase/PostgreSQL/MongoDB; out of scope: advanced analytics and loyalty programs beyond initial hooks.",
    Delivrables: "Android/iOS app, integrated booking and payment modules, notification system, and technical documentation (architecture, APIs, state management, and user guides)."
  },

  {
    id: "PFE-26-DEV4",
    title: "Website Redesign & AI Chatbot Integration",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "Web Development",
    location: "On Site",
    duration: "3-5 months",
    level: "License",
    tags: ["Next.js","React","Tailwind","UI/UX","Chatbot","SEO","Performance","Analytics"],
    excerpt: "Redesign the marketing site with modern UI, SEO upgrades, and an integrated multilingual chatbot.",
    Objectives: "Redesign the marketing website to be fully responsive, performant, and SEO-friendly, and integrate a multilingual chatbot to guide visitors to relevant content and conversion actions.",
    Scope: "Implement Next.js or Vite+React front-end with Tailwind or Framer Motion; optimize media, code-splitting, and caching; configure structured metadata, sitemap, and OG tags; integrate a Dialogflow/Chatbase widget with guided flows; deploy on Vercel/Netlify with SSL and CI; out of scope: backend CMS migration beyond static or current data sources.",
    Delivrables: "Deployed responsive site, integrated chatbot widget, SEO/performance improvements with Lighthouse targets, and design documentation (Figma wireframes, component library, chatbot flow diagrams)."
  },

  {
    id: "PFE-26-DEV5",
    title: "Cloud & DevOps Infrastructure for AI-Driven Medical Platform",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "DevOps & Cloud",
    location: "Onsite",
    duration: "4–6 months",
    level: "Engineering",
    tags: ["DevOps","Kubernetes","Docker","Terraform","CI/CD","MLOps","Monitoring","Cloud"],
    excerpt: "Build cloud-native infrastructure with Kubernetes, IaC, CI/CD, monitoring, and secure microservices.",
    Objectives: "Provision a secure, compliant, and cost-efficient cloud-native infrastructure supporting microservices and AI model lifecycle with automated CI/CD, observability, and resiliency for medical workloads.",
    Scope: "Stand up Kubernetes (EKS/AKS/GKE) for containerized services; configure object storage for files/models; implement IaC (Terraform/Pulumi), CI/CD (GitHub Actions/Jenkins/GitLab), RBAC and secrets management, encryption in transit/at rest, and monitoring/logging (Prometheus/Grafana/ELK); support GPU-enabled nodes and model deployment (TF Serving/TorchServe/FastAPI); out of scope: training new AI models from scratch.",
    Delivrables: "Infrastructure code repositories, multi-environment clusters, CI/CD pipelines, monitoring/alerting dashboards, and compliance documentation (architecture diagram, security checklist, backup/DR procedures)."
  },

  // BUSINESS / MARKETING & SALES
  {
    id: "PFE-26-MKT1",
    title: "Digital Marketing, Community & Growth Ops",
    company: "Pura Solutions",
    domain: "Business Management",
    subdomain: "Digital Marketing, Community & Growth Ops",
    location: "On Site",
    duration: "4–6 months",
    level: "Bachelor / Master",
    tags: ["SEO","Google Ads","Meta Ads","Analytics","CRM","Content","Community","Growth"],
    excerpt: "Execute SEO, ads, content, CRM cleanup, and analytics for measurable growth.",
    Objectives: "Drive qualified traffic and conversions through SEO, paid campaigns, content, and community initiatives while establishing analytics and CRM hygiene for measurable growth.",
    Scope: "Execute SEO (technical/on-page), manage Google/Meta Ads with budgets and creatives, publish content calendar, maintain CRM data quality, and implement analytics dashboards with defined KPIs; out of scope: full brand re-identity or web platform rebuilds.",
    Delivrables: "SEO audit and implementation plan, ad campaigns with performance reports, content calendar and assets, CRM cleanup report, analytics dashboard, and a growth playbook with experiments and results."
  },

  {
    id: "PFE-26-SLS1",
    title: "Partnerships, Prospection & Onboarding",
    company: "Pura Solutions",
    domain: "Business Management",
    subdomain: "Partnerships, Prospection & Onboarding",
    location: "On Site",
    duration: "4–6 months",
    level: "Bachelor / Master",
    tags: ["Prospection","CRM","Negotiation","Onboarding","Sales","Lead Generation","B2B"],
    excerpt: "Source leads, qualify partners, manage outreach, and streamline onboarding.",
    Objectives: "Build and qualify a pipeline of potential partners, negotiate terms, and standardize onboarding to accelerate time-to-value and partner retention.",
    Scope: "Lead sourcing and outreach, CRM pipeline management, discovery and proposal support, onboarding checklist creation, and feedback loop to product/ops; out of scope: legal contract drafting beyond standard templates.",
    Delivrables: "Curated lead lists and outreach sequences, CRM dashboards and reports, partner onboarding playbook and templates, and a performance summary with conversion metrics and recommendations."
  },

  {
    id: "PFE-26-SLS2",
    title: "Market Expansion & Partner Acquisition",
    company: "Pura Solutions",
    domain: "Business Management",
    subdomain: "Market Expansion & Partner Acquisition",
    location: "On Site",
    duration: "4–6 months",
    level: "Bachelor / Master",
    tags: ["Market Research","CRM","Prospection","Partner Acquisition","B2B2C"],
    excerpt: "Research new markets, refine ICPs, run outreach, and support partner acquisition.",
    Objectives: "Validate new markets and acquire partners through research-driven GTM activities, structured prospection, and scalable onboarding processes.",
    Scope: "Market research and segmentation, ICP refinement, messaging experiments, outreach and qualification, pilot onboarding, and GTM feedback loops; out of scope: long-form brand campaigns or multi-market paid media ownership.",
    Delivrables: "Market research brief, ICP/persona documents, outreach scripts and results, onboarding reports, and GTM insights deck with next-step recommendations."
  },

  {
    id: "PFE-26-DEV6",
    title: "Full-Stack Web, SEO & Chatbot/CRM Development",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "Web Development",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering/License",
    tags: ["Next.js","React","Node.js","CRM","SEO","Chatbot","Analytics","PostgreSQL"],
    excerpt: "Develop a full-stack website with SEO, a lead-capture chatbot, and a lightweight CRM system.",
    Objectives: "Build a full-stack web presence with SEO foundations, a lead-capture chatbot, and a lightweight CRM module to streamline marketing-to-sales handoff.",
    Scope: "Implement Next.js/React front-end, Node.js/NestJS backend with PostgreSQL, SEO essentials (sitemap, meta, structured data), chatbot for lead qualification, and basic CRM features (contacts, deals, notes); out of scope: enterprise CRM migration.",
    Delivrables: "Deployed web app, chatbot flows and integrations, SEO baseline report, CRM module with schema and APIs, and developer/admin documentation."
  },

  // QUALITY MANAGEMENT (ISO, GDPR)
  {
    id: "PFE-26-QLT1",
    title: "ISO/IEC 27001:2013 Information Security Management System (ISMS)",
    company: "Pura Solutions",
    domain: "Quality Management",
    subdomain: "ISO",
    location: "On Site",
    duration: "4–6 months",
    level: "Enginnering / Master",
    tags: ["ISO 27001","Information Security","Risk Management","Compliance","ISMS"],
    excerpt: "Implement an ISMS with risk assessment, controls, documentation, and audit readiness.",
    Objectives: "Establish an ISMS scope, perform risk assessment and treatment planning, implement core controls and documentation, and prepare for internal audit readiness.",
    Scope: "Define ISMS scope and context, asset inventory, risk methodology, SoA drafting, policy/procedure creation, awareness planning, internal audit and management review preparation; out of scope: certification audit purchase and execution.",
    Delivrables: "ISMS scope statement, risk register and SoA, policy/procedure set, training materials, internal audit checklist, and audit-readiness report with remediation plan."
  },

  {
    id: "PFE-26-QLT2",
    title: "AI Management System (AIMS) – ISO/IEC 42001:2023",
    company: "Pura Solutions",
    domain: "Quality Management",
    subdomain: "ISO",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering / Master",
    tags: ["ISO 42001","AI Governance","Risk Management","Ethical AI","Bias Detection"],
    excerpt: "Deploy AI governance controls covering risk, ethics, bias, and lifecycle documentation.",
    Objectives: "Implement an AIMS framework addressing AI risk, ethics, bias, and lifecycle controls to support responsible AI operations and audit readiness.",
    Scope: "Define AIMS scope and roles, risk and impact assessments, data governance and model documentation templates, monitoring and incident procedures, and stakeholder transparency artifacts; out of scope: building new AI models beyond governance controls.",
    Delivrables: "AIMS scope and policy set, risk/bias assessment templates, model cards and change logs, monitoring/incident SOPs, and an audit-readiness checklist."
  },

  {
    id: "PFE-26-QLT3",
    title: "GDPR Compliance Implementation for Integrated Management System",
    company: "Pura Solutions",
    domain: "Quality Management",
    subdomain: "GDPR",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering / Master",
    tags: ["GDPR","Compliance","Privacy","Data Protection","DPIA"],
    excerpt: "Map data, design consent flows, perform DPIAs, and implement GDPR operational procedures.",
    Objectives: "Achieve GDPR operational compliance for Integrated Management Platform by implementing data mapping, lawful bases and consent flows, DPIA where required, and user rights procedures with evidence.",
    Scope: "Data inventory and RoPA, consent and preference management, privacy notices, DPIA/LIAs, vendor assessments and SCC tracking, DSR workflows, and retention/safeguards; out of scope: full legal counsel services.",
    Delivrables: "Data map and RoPA, updated privacy policy/consents, DPIA reports, vendor assessment records, DSR playbooks, and compliance evidence pack for audits."
  },

  // QA / Testing
  {
    id: "PFE-26-QA1",
    title: "QA & Software Testing",
    company: "Pura Solutions",
    domain: "Quality Assurance",
    subdomain: "Testing",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering / License",
    tags: ["QA","Testing","Manual Testing","ISTQB","Automation","Bug Tracking"],
    excerpt: "Build testing strategies, execute functional tests, automate key flows, and improve QA pipelines.",
    Objectives: "Improve product quality by building test strategies, executing manual and automated tests, and integrating QA metrics into pipelines for continuous improvement.",
    Scope: "Test plan and cases, functional/regression testing, basic automation for critical paths, bug reporting workflow, CI integration, and release readiness criteria; out of scope: performance/security testing beyond agreed scope.",
    Delivrables: "Test strategy and suite, automation scripts for priority flows, defect reports with metrics, CI test integration, and a QA report per release cycle."
  },

  // QURELIO IT (web dev already included)
  {
    id: "PFE-26-DEV7",
    title: "Web Development for Quality Management Platform",
    company: "Pura Solutions",
    domain: "Information Technology",
    subdomain: "Web Development",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering",
    tags: ["React","NestJS","MongoDB","CI/CD","Docker","Kubernetes","Tailwind"],
    excerpt: "Implement Qurelio modules for documents, audits, KPIs, permissions, and CI/CD deployment.",
    Objectives: "Implement core Quality Management Platform modules for document control, audits, KPIs, and permissions with scalable architecture and CI/CD.",
    Scope: "React front-end with Tailwind UI, NestJS services, MongoDB schema design, role/permission management, audit workflows, KPI dashboards, dockerized deployment with CI/CD; out of scope: third-party marketplace integrations.",
    Delivrables: "Feature-complete modules (documents, audits, KPIs, permissions), API documentation, environment setup with CI/CD, and admin/user guides."
  },

  {
    id: "PFE-26-BIO1",
    title: "Biomedical Engineering Internship: Support for Medical Device Development",
    company: "Pura Solutions",
    domain: "Biomedical Engineering",
    subdomain: "Biomedical Engineering",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering/Master",
    tags: ["Medical Devices","ISO 13485","Testing","Design","Technical Documentation"],
    excerpt: "Support design, testing, and regulatory documentation of medical device prototypes.",
    Objectives: "Support design, verification, and regulatory documentation of medical device prototypes aligned with ISO 13485 processes.",
    Scope: "Requirements capture, design inputs/outputs, test protocol development and execution, risk management contributions (ISO 14971 alignment), and DHF documentation; out of scope: clinical trials or regulatory submissions ownership.",
    Delivrables: "Prototype test plans and reports, design review records, risk files updates, and ISO 13485-compliant documentation package drafts."
  }
];

export default SAMPLE_INTERNSHIPS;
