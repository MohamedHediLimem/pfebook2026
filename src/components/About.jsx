import React from "react";
import logo from "../assets/LPH.png";
import { STATS, WHY } from "../data/content";
import { CountUp, Icon, Reveal } from "./ui";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-sky-200/40 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative">
        {/* Company */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-6 bg-pura" />About Pura</span>
            <h2 className="h-section mt-4">
              Technology that moves <span className="text-grad">healthcare</span> and regulated industries forward.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Founded in 2021, Pura Solutions merges technology with healthcare to build powerful software, AI systems and
              smart products. We focus on innovation, teamwork, and delivering measurable impact.
            </p>
            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
              {[
                ["Vision", "Transform healthcare through seamless, intelligent technology."],
                ["Culture", "Built on teamwork, leadership, growth and responsibility."],
              ].map(([h, p]) => (
                <div key={h} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="font-display text-base font-semibold text-ink">{h}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(10,22,40,0.25)] sm:p-10">
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/70 to-transparent blur-2xl" aria-hidden="true" />
              <img src={logo} alt="Pura Solutions, driven by innovation" className="relative mx-auto h-40 w-auto object-contain sm:h-48" />
              <div className="relative mt-8 grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
                    <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Why */}
        <Reveal className="mt-28 text-center">
          <span className="eyebrow justify-center"><span className="h-px w-6 bg-pura" />Why do your PFE with us<span className="h-px w-6 bg-pura" /></span>
          <h2 className="h-section mx-auto mt-4 max-w-3xl">More than an internship: <span className="text-grad">a launchpad.</span></h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 70}
              className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                i === 0
                  ? "border-transparent bg-ink text-white shadow-[0_30px_70px_-30px_rgba(7,136,204,0.6)]"
                  : "border-slate-200 bg-white hover:border-sky-200 hover:shadow-[0_24px_60px_-30px_rgba(7,136,204,0.45)]"
              }`}
            >
              {i === 0 && <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-pura/40 blur-3xl" aria-hidden="true" />}
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${
                  i === 0 ? "bg-white/10 text-pura-sky" : "bg-gradient-to-br from-sky-50 to-blue-100 text-pura"
                }`}
              >
                <Icon name={w.icon} size={22} />
              </span>
              <h3 className={`relative mt-5 font-display text-lg font-semibold ${i === 0 ? "text-white" : "text-ink"}`}>{w.title}</h3>
              <p className={`relative mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-slate-600"}`}>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
