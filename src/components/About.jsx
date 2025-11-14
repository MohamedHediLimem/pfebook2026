import React, { useEffect, useRef, useState } from "react";

export default function About({ img = "/assets/about.png" }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // refs for the new counters
  const statRefs = {
    experience: useRef(null),
    clients: useRef(null),
    projects: useRef(null),
    engineers: useRef(null),
  };

  // target values for the countup
  const targets = {
    experience: 4,
    clients: 15,
    projects: 15,
    engineers: 30,
  };

  /* Reveal on scroll */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Count-up animation */
  useEffect(() => {
    if (!visible) return;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animateTo = (node, endValue, duration = 1300) => {
      if (!node) return;
      const startTime = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = easeOut(t);
        node.textContent = Math.round(endValue * eased);
        if (t < 1) requestAnimationFrame(tick);
        else node.textContent = endValue; // final
      };

      requestAnimationFrame(tick);
    };

    animateTo(statRefs.experience.current, targets.experience, 1200);
    animateTo(statRefs.clients.current, targets.clients, 1300);
    animateTo(statRefs.projects.current, targets.projects, 1300);
    animateTo(statRefs.engineers.current, targets.engineers, 1400);

  }, [visible]);

  return (
    <section id="about" className="relative py-24 bg-white">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT CONTENT */}
        <div
          className={
            "space-y-6 transition-transform duration-700 " +
            (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
          }
        >
          <span className="inline-block px-4 py-1 rounded-full text-xs font-medium glass-tag text-slate-700">
            ABOUT PURA
          </span>

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Pura <span className="text-pura">Solutions</span>
          </h3>

          <p className="text-lg text-slate-600 max-w-xl">
            Founded in 2021, Pura Solutions merges technology with healthcare to build
            powerful software, AI systems, and smart products. We focus on innovation,
            teamwork, and delivering measurable impact.
          </p>

          {/* NEW STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 pt-4">

            <div className="stat-item">
  <div className="flex items-baseline gap-1">
    <span ref={statRefs.experience} className="stat-number">0</span>
    <span className="stat-plus">+</span>
  </div>
  <div className="stat-label">Years of Experience</div>
</div>


            <div className="stat-item">
  <div className="flex items-baseline gap-1">
    <span ref={statRefs.clients} className="stat-number">0</span>
    <span className="stat-plus">+</span>
  </div>
  <div className="stat-label">Satisfied Clients</div>
</div>


            <div className="stat-item">
  <div className="flex items-baseline gap-1">
    <span ref={statRefs.projects} className="stat-number">0</span>
    <span className="stat-plus">+</span>
  </div>
  <div className="stat-label">Successful Projects</div>
</div>


            <div className="stat-item">
  <div className="flex items-baseline gap-1">
    <span ref={statRefs.engineers} className="stat-number">0</span>
    <span className="stat-plus">+</span>
  </div>
  <div className="stat-label">Trusted Engineers</div>
</div>


          </div>

          {/* Vision / Culture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
            <div className="info-card">
              <h4 className="font-semibold text-slate-900">Vision</h4>
              <p className="mt-1 text-slate-600 text-sm">
                Transform healthcare through seamless, intelligent technology.
              </p>
            </div>

            <div className="info-card">
              <h4 className="font-semibold text-slate-900">Culture</h4>
              <p className="mt-1 text-slate-600 text-sm">
                Built on teamwork, leadership, growth and responsibility.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE — Clean PNG */}
        <div
          className={
            "flex justify-center md:justify-end transition-opacity duration-900 delay-100 " +
            (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
          }
        >
          <img
            src={img}
            alt="Pura Solutions logo"
            className="w-full max-w-sm object-contain"
          />
        </div>

      </div>
    </section>
  );
}
