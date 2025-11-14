import React, { useEffect, useRef, useState } from "react";

export default function Values() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll reveal animation
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
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const tiles = [
    { id: 1, label: "Inclusivity", color: "from-[#053a9a] to-[#0b4fc6]", text: "text-white" },
    { id: 2, label: "Innovation", color: "from-[#4f82d6] to-[#6ba2ff]", text: "text-white" },
    { id: 3, label: "Commitment", color: "from-[#d7e7ff] to-[#b2d4ff]", text: "text-slate-900" },
    { id: 4, label: "Sustainability", color: "from-slate-900 to-slate-800", text: "text-white" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT — Animated Value Tiles */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          {tiles.map((t, i) => (
            <div
              key={t.id}
              className={`
                p-6 rounded-2xl bg-gradient-to-br ${t.color} ${t.text}
                shadow-lg hover:-translate-y-2 transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="text-xl font-bold opacity-80">{String(t.id).padStart(2, "0")}</span>
              <span className="block mt-4 text-xl font-semibold">{t.label}</span>
            </div>
          ))}
        </div>

        {/* RIGHT — Text Section */}
        <div
          className={`
            w-full md:w-1/2 transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full text-xs font-medium glass-tag text-slate-700">
            OUR VALUES
          </span>

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Our <span className="text-pura">Values</span>
          </h3>

          <p className="mt-6 text-slate-600 text-lg max-w-lg">
            We prioritize inclusivity, innovation, commitment and long-term sustainability 
            in every project we deliver — ensuring quality, impact and meaningful progress.
          </p>
        </div>

      </div>
    </section>
  );
}
