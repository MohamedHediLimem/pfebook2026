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
    { id: 1, label: "Inclusivity", colorFrom: "#0b4fc6", colorTo: "#38bdf8" },
    { id: 2, label: "Innovation", colorFrom: "#6366f1", colorTo: "#8b5cf6" },
    { id: 3, label: "Commitment", colorFrom: "#0ea5a4", colorTo: "#67e8f9" },
    { id: 4, label: "Sustainability", colorFrom: "#0b4fc6", colorTo: "#2563eb" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-sky-300/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-300/20 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        {/* LEFT — Apple glass tiles */}
        <div className="w-full md:w-1/2">
          {/* Make grid responsive: 1 col on xs, 2 cols from sm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tiles.map((t, i) => (
              <div
                key={t.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl
                  transition-all duration-700 transform
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  hover:-translate-y-2 hover:scale-[1.02]`}
                style={{
                  background: `linear-gradient(135deg, ${t.colorFrom}22 0%, ${t.colorTo}12 100%)`,
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  boxShadow: "0 18px 50px rgba(2,6,23,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
                  minHeight: 160,
                }}
                aria-hidden={false}
              >
                {/* subtle white sheen overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))" }} />

                {/* content container keeps consistent alignment */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900/90 leading-none">
                      {String(t.id).padStart(2, "0")}
                    </div>
                    {/* optional icon placeholder — keep layout stable */}
                    <div className="w-8 h-8 rounded-lg bg-white/6 border border-white/10" />
                  </div>

                  <div className="mt-4">
                    <div
                      className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight"
                      style={{ textAlign: "left" }}
                    >
                      {t.label}
                    </div>
                  </div>                
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Text */}
        <div
          className={`w-full md:w-1/2 transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              Values
            </span>
          </h3>

          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            At Pura Solutions, our work is guided by a deep focus on{" "}
            <span className="font-semibold text-slate-700">inclusivity</span>,{" "}
            <span className="font-semibold text-slate-700">innovation</span>,{" "}
            <span className="font-semibold text-slate-700">commitment</span>, and{" "}
            <span className="font-semibold text-slate-700">sustainability</span>. These values shape how we build,
            collaborate, and deliver impactful solutions.
          </p>
        </div>
      </div>

      {/* Small responsive tweaks */}
      <style>{`
        @media (max-width: 640px) {
          /* slightly larger vertical spacing on small screens */
          .min-h-[160px] { min-height: 140px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .transition-all { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
