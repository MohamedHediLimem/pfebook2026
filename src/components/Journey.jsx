import React from "react";
import { PHASES, RHYTHM } from "../data/content";
import { Reveal } from "./ui";

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="aurora -left-40 top-20 h-[420px] w-[420px] bg-[#0788CC] !opacity-30" />
        <div className="aurora -right-40 bottom-0 h-[380px] w-[380px] bg-[#2D5FB0] !opacity-40" style={{ animationDelay: "-8s" }} />
        <div className="grid-bg absolute inset-0 opacity-60" />
      </div>

      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow !text-pura-sky"><span className="h-px w-6 bg-pura-sky" />How it works</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A structured <span className="text-grad">24-week journey.</span>
          </h2>
          <p className="mt-4 text-white/65">Every project follows the same five phases with clear gates, so you always know what is expected and when.</p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-pura-sky/0 via-pura-sky/50 to-pura-sun/0 lg:block" aria-hidden="true" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PHASES.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="relative flex flex-col">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-ink font-display text-lg font-bold text-pura-sky">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="glass-dark mt-5 flex-1 rounded-2xl p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">{p.weeks}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:grid-cols-2 lg:grid-cols-5">
          {RHYTHM.map(([when, what]) => (
            <div key={when} className="rounded-2xl px-4 py-3">
              <div className="font-display text-sm font-semibold text-pura-sun">{when}</div>
              <div className="mt-0.5 text-sm text-white/70">{what}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
