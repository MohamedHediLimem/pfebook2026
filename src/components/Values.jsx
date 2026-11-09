import React from "react";
import { VALUES } from "../data/content";
import { Reveal } from "./ui";

const ACCENTS = ["#4FC3F7", "#0788CC", "#2D5FB0", "#F8CC08"];

export default function Values() {
  return (
    <section className="relative pb-24 pt-4 sm:pb-32" aria-labelledby="values-heading">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <span className="eyebrow"><span className="h-px w-6 bg-pura" />Our values</span>
          <h2 id="values-heading" className="h-section mt-4">
            What we stand for, <span className="text-grad">every day.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
            These values shape how we build, collaborate and deliver, and they are what we look for in every intern who joins us.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,22,40,0.35)]`}
            >
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: ACCENTS[i] }} />
              <div className="font-display text-5xl font-extrabold" style={{ color: ACCENTS[i], opacity: 0.9 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-slate-600">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
