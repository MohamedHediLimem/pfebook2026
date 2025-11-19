import React, { useEffect, useRef, useState } from "react";

export default function Values() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const tiles = [
    { id: 1, label: "Inclusivity", color: "from-sky-600/30 to-sky-400/20", short: "Everyone belongs." },
    { id: 2, label: "Innovation", color: "from-gray-600/30 to-gray-400/20", short: "Always improving." },
    { id: 3, label: "Commitment", color: "from-gray-600/30 to-gray-400/20", short: "We deliver." },
    { id: 4, label: "Sustainability", color: "from-sky-600/30 to-sky-400/20", short: "Built to last." },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
      aria-labelledby="values-heading"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-sky-300/25 blur-[100px] sm:blur-[130px] md:blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[450px] h-[280px] sm:h-[380px] md:h-[450px] rounded-full bg-indigo-300/20 blur-[90px] sm:blur-[120px] md:blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {/* LEFT — Apple glass tiles - ALWAYS 2x2 GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full md:w-1/2">
          {tiles.map((t, i) => (
            <div
              key={t.id}
              className={`relative p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl
                bg-gradient-to-br ${t.color}
                backdrop-blur-2xl border border-white/30
                transform transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.02]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: "0 20px 60px rgba(0,0,0,0.08), inset 0 0 20px rgba(255,255,255,0.16)",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              role="article"
              aria-label={`${t.label} value`}
            >
              {/* subtle glow behind tile */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-18 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              <div className="z-10">
                {/* number */}
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900/85 drop-shadow-sm">
                  {String(t.id).padStart(2, "0")}
                </div>

                {/* label */}
                <div className="mt-1.5 sm:mt-2 md:mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 drop-shadow leading-tight">
                  {t.label}
                </div>

                {/* micro-description */}
                <div className="mt-1 sm:mt-1.5 md:mt-2 text-xs sm:text-sm text-slate-600 max-w-[18rem]">
                  {t.short}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Text */}
        <div
          className={`w-full md:w-1/2 transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 id="values-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Our
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              {" "} Values
            </span>
          </h3>

          <p className="mt-4 sm:mt-6 md:mt-8 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            At Pura Solutions, our work is guided by a deep focus on{" "}
            <span className="font-semibold text-slate-600">inclusivity</span>,{" "}
            <span className="font-semibold text-slate-600">innovation</span>,{" "}
            <span className="font-semibold text-slate-600">commitment</span>, and long-term{" "}
            <span className="font-semibold text-slate-600">sustainability</span>. These values shape how we build, collaborate, and deliver impactful solutions.
          </p>
        </div>
      </div>

      {/* Responsive min-height adjustments */}
      <style>{`
        @media (min-width: 640px) {
          .grid > div {
            min-height: 120px;
          }
        }
        @media (min-width: 768px) {
          .grid > div {
            min-height: 140px;
          }
        }
        @media (min-width: 1024px) {
          .grid > div {
            min-height: 160px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .transition-all, .animate { 
            transition: none !important; 
            animation: none !important; 
          }
        }
      `}</style>
    </section>
  );
}