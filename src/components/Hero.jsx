import React, { useEffect, useMemo, useState } from "react";
import { DEADLINE_ISO, DEADLINE_LABEL, DOMAINS, FORM_URL, LOCATION_LABEL, START_LABEL, TOPICS } from "../data/content";
import { Icon } from "./ui";

const pad = (n) => String(n).padStart(2, "0");

export function useCountdown(iso) {
  const target = useMemo(() => new Date(iso).getTime(), [iso]);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const ms = Math.max(0, target - now);
  const s = Math.floor(ms / 1000);
  // progress over the last 45 days before the deadline
  const windowMs = 45 * 864e5;
  const progress = Math.min(100, Math.max(0, 100 - (ms / windowMs) * 100));
  return { done: ms === 0, d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60, progress };
}

export default function Hero({ internships = [], onPickDomain }) {
  const t = useCountdown(DEADLINE_ISO);
  const counts = useMemo(() => {
    const c = {};
    internships.forEach((i) => (c[i.domain] = (c[i.domain] || 0) + 1));
    return c;
  }, [internships]);

  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-10 pt-32 text-white sm:pt-40">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="aurora left-[-10%] top-[-10%] h-[520px] w-[520px] bg-[#0788CC]" />
        <div className="aurora right-[-8%] top-[10%] h-[460px] w-[460px] bg-[#2D5FB0]" style={{ animationDelay: "-6s" }} />
        <div className="aurora bottom-[-20%] left-[30%] h-[420px] w-[420px] bg-[#4FC3F7] !opacity-30" style={{ animationDelay: "-12s" }} />
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2.5 pr-4 text-xs font-medium text-white/80 backdrop-blur">
            <span className={`h-2 w-2 rounded-full ${t.done ? "bg-red-400" : "pulse-dot bg-green-400"}`} />
            {t.done ? "Applications are closed" : "Applications open · PFE Book 2027"}
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            Build what’s next, <br className="hidden sm:block" />
            <span className="text-grad">on real products.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {internships.length} final-year projects in quality management, software engineering, cybersecurity, business
            development and bioinformatics. Real users, expert mentors, measurable impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="btn-primary">
              Explore the projects <Icon name="arrow" size={16} />
            </a>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
              Apply now <Icon name="arrowUpRight" size={16} />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              ["Start", START_LABEL],
              ["Duration", "4–6 months"],
              ["Location", LOCATION_LABEL],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">{k}</dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: countdown + domains */}
        <div className="glass-dark ring-grad relative rounded-3xl p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              {t.done ? "Deadline passed" : "Applications close in"}
            </span>
            <Icon name="clock" size={18} className="text-pura-sky" />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3" role="timer" aria-live="off">
            {[
              [t.d, "Days"],
              [t.h, "Hours"],
              [t.m, "Min"],
              [t.s, "Sec"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.06] py-3 text-center">
                <div className="font-display text-2xl font-bold tabular-nums sm:text-4xl">{pad(v)}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-pura-sky via-pura to-pura-sun transition-[width] duration-1000" style={{ width: `${t.progress}%` }} />
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/75">
              <Icon name="calendar" size={15} className="text-pura-sun" />
              Deadline: <span className="font-semibold text-white">{DEADLINE_LABEL}</span>
            </div>
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="space-y-2">
            {Object.entries(DOMAINS).map(([name, meta]) => (
              <a
                key={name}
                href="#catalog"
                onClick={() => onPickDomain && onPickDomain(name)}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5 transition hover:border-white/15 hover:bg-white/[0.07]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `${meta.color}2e`, color: meta.color }}>
                  <Icon name={meta.icon} size={18} />
                </span>
                <span className="flex-1 text-sm font-medium text-white/90">{name}</span>
                <span className="font-display text-lg font-bold" style={{ color: meta.color }}>{counts[name] || 0}</span>
                <Icon name="arrow" size={15} className="text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white/70" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Topic marquee */}
      <div className="marquee relative mt-16 overflow-hidden border-y border-white/10 py-4" aria-label="Topics covered">
        <div className="marquee-track gap-8 pr-8">
          {[...TOPICS, ...TOPICS].map((topic, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-pura-sky/70" />
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
