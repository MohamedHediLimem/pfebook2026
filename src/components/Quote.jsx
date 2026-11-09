import React from "react";
import { DEADLINE_LABEL, EMAIL, FORM_URL, STEPS } from "../data/content";
import { Icon, Reveal } from "./ui";

/* Final call to action: quote, how to apply, contact. */
export default function Quote() {
  return (
    <section id="apply" className="relative px-3 pb-24 sm:px-6 sm:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="aurora -left-20 -top-32 h-[460px] w-[460px] bg-[#0788CC] !opacity-50" />
          <div className="aurora -bottom-40 right-0 h-[420px] w-[420px] bg-[#4FC3F7] !opacity-30" style={{ animationDelay: "-10s" }} />
          <div className="grid-bg absolute inset-0" />
        </div>

        <div className="relative grid gap-12 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16">
          <Reveal className="flex flex-col">
            <span className="eyebrow !text-pura-sky"><span className="h-px w-6 bg-pura-sky" />Join us</span>
            <blockquote className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Your <span className="text-grad">ideas</span>, <span className="text-grad">passion</span> and{" "}
              <span className="text-pura-sun">impact</span> will drive our next milestones.
            </blockquote>
            <div className="mt-4 text-sm font-medium text-white/50">Pura Solutions</div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !px-7 !py-3.5 text-base">
                Apply now <Icon name="arrowUpRight" size={18} />
              </a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost-dark !px-6 !py-3.5">
                <Icon name="mail" size={16} /> Contact us
              </a>
            </div>
            <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-pura-sun px-4 py-2 text-sm font-semibold text-ink">
              <Icon name="calendar" size={16} /> Deadline: {DEADLINE_LABEL}
            </div>
          </Reveal>

          <Reveal delay={120} className="glass-dark rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">How to apply</h3>
            <ol className="mt-6 space-y-5">
              {STEPS.map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pura-sky to-pura-deep font-display text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="mt-0.5 text-sm text-white/60">{text}</div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
