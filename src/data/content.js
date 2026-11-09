// Site-wide content and settings. Projects themselves live in sample.js (generated from the PDF book data).

export const FORM_URL = "https://forms.gle/i9htSti5wpC15FPh8";
export const EMAIL = "purasolutions.careerservices@outlook.com";
export const WEBSITE = "https://pura-tech.com";
export const DEADLINE_ISO = "2026-12-09T23:59:00+01:00"; // Africa/Tunis
export const DEADLINE_LABEL = "December 9th, 2026 · 11:59 PM";
export const START_LABEL = "February 2027";
export const LOCATION_LABEL = "On site / Hybrid";

// Same colours as the PDF book
export const DOMAINS = {
  "Quality Management": { short: "Quality", color: "#0E9F8E", icon: "shield" },
  "Information Technology": { short: "IT", color: "#0788CC", icon: "code" },
  "Business Development": { short: "Business", color: "#E08A00", icon: "chart" },
  Bioinformatics: { short: "Bio", color: "#7B4FD1", icon: "dna" },
};
export const domainColor = (d) => (DOMAINS[d] ? DOMAINS[d].color : "#0788CC");

export const TOPICS = [
  "Full-Stack Development", "QA Test Automation", "n8n", "Cybersecurity", "DevSecOps", "ISO 9001",
  "ISO/IEC 27001", "ISO/IEC 42001", "EU AI Act", "AI Validation", "Regulatory Monitoring",
  "Multi-Omics", "Bioinformatics", "Partnerships", "Market Expansion", "Kubernetes", "Next.js", "NestJS",
];

export const STATS = [
  { value: 5, suffix: "+", label: "Years building" },
  { value: 15, suffix: "+", label: "Satisfied clients" },
  { value: 15, suffix: "+", label: "Successful projects" },
  { value: 30, suffix: "+", label: "Trusted engineers" },
];

export const WHY = [
  { icon: "rocket", title: "Real products in production", text: "Work on an AI-powered compliance & quality SaaS platform and a translational research platform used by real customers and researchers." },
  { icon: "users", title: "Mentored by experts", text: "Weekly check-ins with a dedicated supervisor, technical advisors, and steering with the founders." },
  { icon: "code", title: "A modern stack", text: "Next.js, NestJS microservices, Python AI services, Docker & Kubernetes, n8n, multi-omics pipelines." },
  { icon: "shield", title: "Standards that matter", text: "Hands-on ISO 9001, ISO/IEC 27001, ISO/IEC 42001, GDPR and EU AI Act experience." },
  { icon: "link", title: "Team, not silos", text: "Projects are linked: interns review each other's work, audit each other and ship together." },
  { icon: "star", title: "Beyond the internship", text: "Strong interns are considered for hiring; bioinformatics results can lead to co-authored publications." },
];

export const PHASES = [
  { weeks: "Weeks 1–3", title: "Onboarding", text: "Discover the product and the team, sign your project charter." },
  { weeks: "Weeks 4–8", title: "Diagnosis", text: "As-is analysis, requirements, gap analysis and design." },
  { weeks: "Weeks 9–16", title: "Build", text: "Deliver the core work. Mid-term review in week 12." },
  { weeks: "Weeks 17–21", title: "Deploy & test", text: "Run it for real: pilots, tests, audits." },
  { weeks: "Weeks 22–24", title: "Hand over", text: "Final report, defence rehearsal and demo day." },
];

export const RHYTHM = [
  ["Daily", "15-min team stand-up"],
  ["Weekly", "Check-in with your supervisor"],
  ["Every 2 weeks", "Steering with the founders"],
  ["Week 12", "Mid-term review with your school"],
  ["Week 24", "Demo day and handover"],
];

export const VALUES = [
  { title: "Inclusivity", text: "Everyone belongs, every voice counts." },
  { title: "Innovation", text: "We question, prototype and keep improving." },
  { title: "Commitment", text: "We own our work and we deliver." },
  { title: "Sustainability", text: "We build products and teams that last." },
];

export const STEPS = [
  ["Choose your project", "Note its code, for example PFE-27-DEV1. You can pick up to two."],
  ["Prepare your file", "CV, a short motivation letter and your latest transcript."],
  ["Apply", "Fill in the application form before the deadline."],
  ["Interview", "A technical or case interview with the project supervisor."],
  ["Welcome on board", "Internship agreement, onboarding pack and start in February 2027."],
];
