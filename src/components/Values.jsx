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
    { id: 1, label: "Inclusivity", color: "from-sky-600/30 to-sky-400/20" },
    { id: 2, label: "Innovation", color: "from-gray-600/30 to-gray-400/20" },
    { id: 3, label: "Commitment", color: "from-gray-600/30 to-gray-400/20" },
    { id: 4, label: "Sustainability", color: "from-sky-600/30 to-sky-400/20" },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
    >

      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-sky-300/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-300/20 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">

        {/* LEFT — Apple glass tiles */}
        <div className="grid grid-cols-2 gap-6 w-full md:w-1/2">

          {tiles.map((t, i) => (
            <div
              key={t.id}
              className={`
                relative p-8 rounded-3xl bg-gradient-to-br ${t.color}
                backdrop-blur-2xl border border-white/30 shadow-2xl
                hover:-translate-y-3 hover:scale-[1.03] transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.08), inset 0 0 20px rgba(255,255,255,0.25)",
              }}
            >
              {/* subtle glow behind tile */}
              <div className="absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

              {/* number */}
              <div className="text-3xl font-extrabold text-slate-900/80 drop-shadow-sm">
                {String(t.id).padStart(2, "0")}
              </div>

              {/* label */}
              <div className="mt-4 text-2xl font-semibold text-slate-900 drop-shadow">
                {t.label}
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT — Text */}
        <div
          className={`
            w-full md:w-1/2 transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Our  
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              {" "}Values
            </span>
          </h3>

          <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-lg">
            At Pura Solutions, our work is guided by a deep focus on 
            <span className="font-semibold text-slate-600"> inclusivity</span>, 
            <span className="font-semibold text-slate-600"> innovation</span>, 
            <span className="font-semibold text-slate-600"> continuous commitment</span>, 
            and long-term 
            <span className="font-semibold text-slate-600"> sustainability</span>.  
            These values shape how we build, collaborate, and deliver impactful solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
