import React, { useEffect, useMemo, useRef, useState } from "react";

// Sample data
const SAMPLE_INTERNSHIPS = [
  { id: 1, title: "Web / Mobile Development" },
  { id: 2, title: "GDPR Regulations" },
  { id: 3, title: "AI & Machine Learning" },
  { id: 4, title: "DevOps & Cloud" },
  { id: 5, title: "SEO & Web Development" },
  { id: 6, title: "UI/UX Design" },
  { id: 7, title: "CRM" },
  { id: 8, title: "ISO/IEC 27001, ISO/IEC 42001 Implementation" },
];

export default function HeroCarousel({
  logoSrc = "src/assets/LPB.webp",
  internships = SAMPLE_INTERNSHIPS,
  ctaHref = "https://forms.gle/GxK7AeTZRGNw1NSV7",
  carouselSpeed = 5, // Speed in seconds for one complete cycle
}) {
  const items = useMemo(() => internships || [], [internships]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const listRef = useRef(null);
  const heroRef = useRef(null);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3500);
    return () => clearInterval(t);
  }, [items.length, paused]);

  // Smooth scroll to active item
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const active = el.querySelector(`[data-idx="${index}"]`);
    if (active) {
      const left =
        active.offsetLeft - el.offsetLeft - (el.clientWidth - active.clientWidth) / 2;
      el.scrollTo({ left, behavior: "smooth" });
    }
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  // helper: scroll to projects section
  const scrollToProjects = () => {
    const target = document.getElementById("catalog");
    if (!target) {
      // fallback: try anchor navigation
      window.location.hash = "#catalog";
      return;
    }
    // prefer scrollIntoView with smooth behavior, fallback to scrollTop
    try {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-visible pb-16"
      style={{ background: "linear-gradient(180deg, #f0f6fb 0%, #eaf1fb 100%)" }}
    >
      {/* Animated gradient orbs with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-[100px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
            top: "5%",
            left: "10%",
            transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
            transition: "transform 0.3s ease-out",
            animation: "float 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[90px] opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(168,85,247,0.18) 50%, transparent 70%)",
            top: "40%",
            right: "5%",
            transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
            transition: "transform 0.3s ease-out",
            animation: "float 30s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(244,114,182,0.15) 50%, transparent 70%)",
            bottom: "15%",
            left: "25%",
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
            transition: "transform 0.3s ease-out",
            animation: "float 35s ease-in-out infinite",
          }}
        />
      </div>

      {/* Premium glass layer */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.45) 100%)",
          backdropFilter: "blur(60px) saturate(200%)",
          WebkitBackdropFilter: "blur(60px) saturate(200%)",
        }}
      />

      {/* Elegant noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-8 min-h-screen flex flex-col">
        {/* Top section with logo and company card */}
        <div className="flex-1 flex items-center pt-4 sm:pt-8 pb-8 sm:pb-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Liquid glass card with company info */}
            <div>
              {/* Mobile Logo - positioned at top */}
              <div className="lg:hidden flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative">
                  <img
                    src={logoSrc}
                    alt="Pura logo"
                    className="h-28 sm:h-36 object-contain"
                    style={{ filter: "drop-shadow(0 10px 40px rgba(56,189,248,0.22))" }}
                  />
                </div>
              </div>

              <div className="inline-block group cursor-default">
                <div
                  className="relative px-8 py-6 rounded-[28px] transition-all duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.16) 100%)",
                    backdropFilter: "blur(40px) saturate(180%)",
                    WebkitBackdropFilter: "blur(40px) saturate(180%)",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(255,255,255,0.44) 0%, rgba(255,255,255,0.26) 100%)";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 60px rgba(56,189,248,0.12), inset 0 1px 0 rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.16) 100%)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)";
                  }}
                >
                  {/* Liquid reflective shimmer effect on hover */}
                  <div
                    className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                      animation: "liquidShine 3s ease-in-out infinite",
                    }}
                  />

                  {/* Accent line */}
                  <div
                    className="w-2 h-20 rounded-full absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{
                      background: "linear-gradient(180deg, #38bdf8 0%, #8b5cf6 100%)",
                      boxShadow: "0 0 20px rgba(56,189,248,0.24)",
                    }}
                  />

                  {/* Content */}
                  <div className="ml-6">
                    <h2
                      className="text-2xl md:text-3xl text-slate-900 transition-colors duration-500 group-hover:text-sky-600"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 10px rgba(0,0,0,0.03)",
                      }}
                    >
                      Pura Solutions
                    </h2>
                    <p
                      className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      Pura Connect Students Program
                    </p>
                  </div>

                  {/* Decorative gradient orb */}
                  <div
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, #38bdf8 0%, #8b5cf6 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Main content below card */}
              <div className="space-y-6 sm:space-y-8 max-w-4xl mt-8 sm:mt-12">
                {/* Title */}
                <h1
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[0.95]"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontWeight: "700",
                    letterSpacing: "-0.05em",
                  }}
                >
                  Internship Catalog
                </h1>

                {/* Year with tuned gradient */}
                <div className="relative inline-block" style={{ overflow: "visible", paddingBottom: 20 }}>
                  <h2
                    className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem]"
                    style={{
                      display: "inline-block",
                      lineHeight: 0.95,
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      fontWeight: 900,
                      letterSpacing: "-0.01em",
                      /* Tuned gradient: slightly less saturated to match teal/blue */
                      background: "linear-gradient(90deg, #4f9ff6 0%, #6b6ff1 50%, #9b7be8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 8s ease infinite",
                      overflow: "visible",
                    }}
                  >
                    2026
                  </h2>
                </div>

                {/* Description */}
                <p
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl leading-relaxed"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    fontWeight: "400",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Explore innovative projects across{" "}
                  <span className="text-sky-600 font-medium" style={{ background: "linear-gradient(90deg,#23a3de,#3b82f6)", WebkitBackgroundClip: "text", color: "transparent" }}>
                    Information Technology
                  </span>
                  ,{" "}
                  <span className="text-indigo-600 font-medium" style={{ background: "linear-gradient(90deg,#23a3de,#3b82f6)", WebkitBackgroundClip: "text", color: "transparent" }}>
                    Quality Management & Assurance
                  </span>
                  ,{" "}
                  <span className="text-purple-600 font-medium" style={{ background: "linear-gradient(90deg,#23a3de,#3b82f6)", WebkitBackgroundClip: "text", color: "transparent" }}>
                    Business Management
                  </span>{" "}
                  &{" "}
                  <span className="text-pink-600 font-medium" style={{ background: "linear-gradient(90deg,#23a3de,#3b82f6)", WebkitBackgroundClip: "text", color: "transparent" }}>
                    Biomedical Engineering
                  </span>
                </p>

                {/* CTA Buttons with liquid glass */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-[20px] font-semibold text-white transition-all duration-500 overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg,#23a3de,#3b82f6)",
                      backdropFilter: "blur(30px) saturate(180%)",
                      WebkitBackdropFilter: "blur(30px) saturate(180%)",
                      border: "1.5px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 10px 40px rgba(35,163,222,0.16), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                      e.currentTarget.style.boxShadow = "0 18px 60px rgba(35,163,222,0.22)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 10px 40px rgba(35,163,222,0.16)";
                    }}
                  >
                    <span className="relative z-10 drop-shadow-lg text-base sm:text-lg">Apply Now</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
                        animation: "shimmer 2s infinite",
                      }}
                    />
                  </a>

                  <button
                    // <-- CHANGED: now scrolls to #catalog instead of cycling carousel
                    onClick={scrollToProjects}
                    aria-controls="catalog"
                    className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-[20px] font-semibold text-slate-700 transition-all duration-500"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(25px) saturate(150%)",
                      WebkitBackdropFilter: "blur(25px) saturate(150%)",
                      border: "1.5px solid rgba(255, 255, 255, 0.6)",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.42)";
                      e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                      e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";
                    }}
                  >
                    <span className="text-base sm:text-lg">Browse Projects</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Logo (desktop only, in grid layout) */}
            <div className="hidden lg:block">
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <img
                    src={logoSrc}
                    alt="Pura logo"
                    className="h-58 md:h-66 lg:h-74 xl:h-82 object-contain"
                    style={{ filter: "drop-shadow(0 10px 40px rgba(56,189,248,0.22))" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Carousel - Full Width */}
        <div className="pb-10 -mx-6 md:-mx-12">
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays for fade effect */}
            <div
              className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(90deg,  0%, transparent 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(270deg, 0%, transparent 100%)",
              }}
            />

            {/* Scrolling content */}
            <div className="flex animate-scroll" ref={listRef}>
              {/* First set of items */}
              {items.map((it) => (
                <div key={`first-${it.id}`} className="flex-shrink-0 mx-6">
                  <span
                    className="text-xl md:text-xl font-bold text-slate-600 opacity-70"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      letterSpacing: "-0.02em",
                      whiteSpace: "nowrap",
                    }}
                    data-idx={items.indexOf(it)}
                  >
                    {it.title}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {items.map((it) => (
                <div key={`second-${it.id}`} className="flex-shrink-0 mx-6">
                  <span
                    className="text-xl md:text-xl font-bold text-slate-600 opacity-70"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      letterSpacing: "-0.02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {it.title}
                  </span>
                </div>
              ))}
              {/* Third set for extra smooth infinite loop */}
              {items.map((it) => (
                <div key={`third-${it.id}`} className="flex-shrink-0 mx-6">
                  <span
                    className="text-xl md:text-xl font-bold text-slate-600 opacity-70"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      letterSpacing: "-0.02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {it.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center text-sm text-slate-500 pb-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
            fontWeight: "400",
            letterSpacing: "0.02em",
          }}
        >
          PFE Book 2026 - Pura Solutions
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-scroll {
          animation: scroll ${carouselSpeed}s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes liquidShine {
          0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(50px, -50px) scale(1.08) rotate(4deg); }
          66% { transform: translate(-30px, 30px) scale(0.96) rotate(-4deg); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(200%); }
        }

        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .text-8xl { font-size: 4rem !important; }
          .text-9xl { font-size: 5rem !important; }
          .text-\\[11rem\\] { font-size: 5.5rem !important; }
        }

        @media (max-width: 640px) {
          .text-4xl { font-size: 2.25rem !important; }
          .text-5xl { font-size: 2.5rem !important; }
          .text-6xl { font-size: 3rem !important; }
          .text-7xl { font-size: 3rem !important; }
          .text-8xl { font-size: 3.5rem !important; }
        }
      `}</style>
    </section>
  );
}
