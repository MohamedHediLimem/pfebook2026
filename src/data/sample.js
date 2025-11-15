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
    tags: ["Flutter","NestJS","Microservices","gRPC","MongoDB","Firebase","Security","OAuth2","GDPR","HIPAA"],
    excerpt: "Develop a cross-platform Flutter mobile app for medical tourism with real-time features, backend sync, and secure data handling.",
    description: "Extend the existing medical tourism platform by developing a fully functional Flutter mobile application.Key objectives include: secure authentication (JWT/OAuth2), real-time notifications (FCM), encrypted communication, appointment scheduling, online payments, medical record access, and multilingual UX. Ensure API integration with NestJS microservices using REST/gRPC, guarantee GDPR/HIPAA compliance, and deliver a production-ready Android/iOS app."
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
    tags: ["NLP","Chatbot","Rasa","Dialogflow","Transformers","NestJS Integration","Privacy","Multilingual AI"],
    excerpt: "Design and integrate an AI chatbot for medical tourism to automate answers, guide users, and connect to backend services.",
    description: "Design and build a multilingual AI chatbot that assists users with booking, FAQs, quotation tracking, and medical service navigation. Objectives include NLP intent detection, entity extraction, dynamic responses, integration with NestJS microservices, secure data handling (GDPR/HIPAA), anonymized logs, and human-handoff support."
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
    excerpt: "Develop a Flutter app for salon appointments with admin dashboards, online payments, and real-time notifications.",
    description: "Design and develop a cross-platform Flutter mobile app for beauty & nail salon appointment scheduling. Objectives: client booking flows, salon admin management, central admin supervision, secure REST APIs, payments, FCM notifications, and scalable architecture."
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
    excerpt: "Redesign Pura’s website with a modern interface and integrate a multilingual AI chatbot for visitor support.",
    description: "Redesign the entire Pura Solutions website with a modern responsive UI, animations, stronger brand identity, and SEO optimization. Integrate a chatbot widget (Dialogflow/Chatbase), performance tuning, and deploy to Vercel/Netlify."
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
    excerpt: "Build cloud-native DevOps infrastructure for an AI medical platform using Kubernetes, Terraform, CI/CD, and monitoring tools.",
    description: "Design and implement cloud architecture (AWS/GCP/Azure) for a medical AI platform: Kubernetes clusters, Dockerized microservices, IaC (Terraform), CI/CD, secure storage, RBAC, model deployment, monitoring (Prometheus,Grafana), and compliance with GDPR/HIPAA."
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
    excerpt: "Execute digital marketing activities including SEO, ads, content, CRM hygiene, and analytics for growth.",
    description: "Own the execution of the digital marketing strategy: growth plan, SEO, content, ads, CRM hygiene, dashboards, and analytics. Deliverables: 90-day plan, SEO briefs, campaigns, CRM dashboards, monthly reports."
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
    excerpt: "Support sales by sourcing leads, managing partnerships, and standardizing onboarding flows.",
    description: "Grow supply and demand: map ICPs, source leads, prospect multichannel, support negotiations, manage onboarding, maintain CRM hygiene. Deliverables: ICP profiles, 300+ leads, outreach scripts, onboarding playbook."
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
    excerpt: "Acquire and onboard partners, run growth experiments, and support GTM for marketplace expansion.",
    description: "Accelerate go-to-market: ecosystem mapping, acquisition, onboarding, experiments, pricing, CRM reporting. Deliverables: market map, 250+ leads, onboarding kit, experiment logs."
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
    excerpt: "Build a full-stack website with SEO foundations, chatbot for lead capture, and lightweight CRM module.",
    description: "Design a fast, SEO-optimized web platform with CMS, authentication, chatbot lead capture, CRM module, analytics, and performance optimization."
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
    level: "Bachelor / Master",
    tags: ["ISO 27001","Information Security","Risk Management","Compliance","ISMS"],
    excerpt: "Assist in implementing an ISO/IEC 27001 ISMS: risk assessment, documentation, controls, and security processes.",
    description: "Support the implementation of ISO/IEC 27001: identify security risks, create documents, maintain ISMS records, support access control, data protection, incident response, and performance tracking."
  },

  {
    id: "PFE-26-QLT2",
    title: "AI Management System (AIMS) – ISO/IEC 42001:2023",
    company: "Pura Solutions",
    domain: "Quality Management",
    subdomain: "ISO",
    location: "On Site",
    duration: "4–6 months",
    level: "Bachelor / Master",
    tags: ["ISO 42001","AI Governance","Risk Management","Ethical AI","Bias Detection"],
    excerpt: "Help implement an ISO/IEC 42001 AI Management System: ethical AI controls, documentation, monitoring, and compliance.",
    description: "Learn ISO/IEC 42001 requirements and help implement an AI Management System for ethical, safe, transparent AI. Tasks include risk identification, documentation, controls, monitoring, and improving fairness."
  },

  {
    id: "PFE-26-QLT3",
    title: "GDPR Compliance Implementation for Qurelio Platform",
    company: "Pura Solutions — Qurelio",
    domain: "Quality Management",
    subdomain: "GDPR",
    location: "On Site",
    duration: "4–6 months",
    level: "Bachelor / Master",
    tags: ["GDPR","Compliance","Privacy","Data Protection","DPIA"],
    excerpt: "Implement GDPR compliance for Qurelio: data mapping, consent flows, DPIA, documentation, and privacy controls.",
    description: "Implement GDPR compliance for Qurelio by conducting data mapping, DPIA, consent management, retention policy design, privacy notices, and documentation. Support legal & technical teams in building compliant workflows and privacy controls."
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
    level: "Bachelor / Master",
    tags: ["QA","Testing","Manual Testing","ISTQB","Automation","Bug Tracking"],
    excerpt: "Design and execute test cases, automate key flows, and improve QA pipelines for the Qurelio platform.",
    description: "Support Qurelio by designing test plans, writing manual and automated test cases, reporting issues, improving QA pipelines, and ensuring full feature coverage across document control, audits, CAPA workflows, and dashboards."
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
    excerpt: "Develop core Qurelio features such as document control, audit workflows, KPI dashboards, and permission systems.",
    description: "Build frontend and backend features for Qurelio: document and version control, audit execution, CAPA workflows, dashboards, ISO templates, and role-based permissions."
  }
   ,{
    id: "PFE-26-BIO1",
    title: "Biomedical Engineering Internship: Support for Medical Device Development",
    company: "Pura Solutions",
    domain: "Biomedical Engineering",
    subdomain: "Biomedical Engineering",
    location: "On Site",
    duration: "4–6 months",
    level: "Engineering/Master",
    tags: ["Medical Devices","ISO 13485","Testing","Design","Technical Documentation"],
    excerpt: "Assist in design and testing of medical device prototypes, ensure regulatory compliance and support documentation.",    
    description: 'Support the biomedical engineering team in designing, prototyping, and testing medical devices. Assist with regulatory compliance (ISO 13485), risk assessments, usability testing, and creating technical documentation for device development.'

}

];

export default SAMPLE_INTERNSHIPS;
