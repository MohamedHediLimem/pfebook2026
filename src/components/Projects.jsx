import React, { useMemo, useState } from "react";
import { DEADLINE_LABEL, DOMAINS, FORM_URL, domainColor } from "../data/content";
import { Icon, Reveal } from "./ui";

function Highlight({ text, query }) {
  if (!query) return text;
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded bg-yellow-200/80 px-0.5 text-inherit">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  );
}

function Card({ item, query, onOpen }) {
  const c = domainColor(item.domain);
  const tags = item.tags || [];
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_var(--glow)]"
      style={{ "--c": c, "--glow": `${c}99` }}
    >
      {/* coloured top edge + hover wash */}
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${c}, ${c}33)` }} />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: `${c}22` }} />

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: `${c}14`, color: c }}>
          <Icon name={DOMAINS[item.domain]?.icon} size={13} stroke={2.2} />
          {item.domain}
        </span>
        <span className="text-[11px] font-medium text-slate-400">{item.level}</span>
      </div>

      <div className="relative mt-5 font-mono text-xs font-semibold tracking-wider" style={{ color: c }}>
        <Highlight text={item.id} query={query} />
      </div>
      <h3 className="relative mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
        <button onClick={() => onOpen(item)} className="text-left after:absolute after:inset-0 focus:outline-none">
          <Highlight text={item.title} query={query} />
        </button>
      </h3>
      <p className="line-clamp-3 relative mt-3 text-sm leading-relaxed text-slate-600">
        <Highlight text={item.excerpt || ""} query={query} />
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {tags.slice(0, 4).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
        {tags.length > 4 && <span className="chip !bg-white">+{tags.length - 4}</span>}
      </div>

      <div className="flex-1 min-h-6" />
      <div className="relative z-10 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        <button onClick={() => onOpen(item)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition group-hover:gap-2.5" style={{ color: c }}>
          View details <Icon name="arrow" size={16} />
        </button>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-transparent hover:text-white" style={{ "--c": c }}
          onMouseEnter={(e) => (e.currentTarget.style.background = c)} onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
          Apply
        </a>
      </div>
    </article>
  );
}

export default function Projects({ internships = [], onOpen, domain, setDomain }) {
  const [query, setQuery] = useState("");
  const q = query.trim();

  const counts = useMemo(() => {
    const c = { All: internships.length };
    internships.forEach((i) => (c[i.domain] = (c[i.domain] || 0) + 1));
    return c;
  }, [internships]);
  const tabs = ["All", ...Object.keys(DOMAINS).filter((d) => counts[d])];

  const filtered = useMemo(() => {
    const ql = q.toLowerCase();
    return internships.filter((i) => {
      const okDomain = domain === "All" || i.domain === domain;
      const hay = [i.id, i.title, i.excerpt, i.domain, i.subdomain, (i.tags || []).join(" ")].join(" ").toLowerCase();
      return okDomain && (!ql || hay.includes(ql));
    });
  }, [internships, domain, q]);

  return (
    <section id="catalog" className="relative bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-6 bg-pura" />The projects</span>
            <h2 className="h-section mt-4">
              {internships.length} projects. <span className="text-grad">One team.</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Pick the project that fits you. Every one ships something real, with a dedicated supervisor and clear milestones.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
              <Icon name="calendar" size={16} /> Deadline: {DEADLINE_LABEL}
            </div>
          </Reveal>
        </div>

        {/* Controls */}
        <div className="sticky top-[84px] z-30 -mx-4 mt-10 px-4 py-3 sm:top-[92px] sm:mx-0 sm:px-0">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/85 p-2 shadow-[0_10px_40px_-20px_rgba(10,22,40,0.3)] backdrop-blur-xl lg:flex-row lg:items-center">
            <div className="flex gap-1 overflow-x-auto" role="tablist" aria-label="Filter by domain">
              {tabs.map((t) => {
                const active = domain === t;
                const c = t === "All" ? "#0A1628" : domainColor(t);
                return (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setDomain(t)}
                    className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${active ? "text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}
                    style={active ? { background: c } : undefined}
                  >
                    {t !== "All" && <span className="h-2 w-2 rounded-full" style={{ background: active ? "#fff" : c }} />}
                    {t}
                    <span className={`rounded-md px-1.5 text-[11px] font-semibold ${active ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>{counts[t]}</span>
                  </button>
                );
              })}
            </div>
            <label className="relative flex-1 lg:ml-auto lg:max-w-xs">
              <span className="sr-only">Search projects</span>
              <Icon name="search" size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills, tools, codes…"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-9 text-sm outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600" aria-label="Clear search">
                  <Icon name="close" size={14} />
                </button>
              )}
            </label>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500" aria-live="polite">
          Showing <span className="font-semibold text-ink">{filtered.length}</span> of {internships.length} projects
        </p>

        {filtered.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80} className="h-full">
                <Card item={item} query={q} onOpen={onOpen} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-3xl border border-dashed border-slate-300 py-16 text-center">
            <div className="font-display text-lg font-semibold text-ink">No project matches “{q}”</div>
            <p className="mt-1 text-sm text-slate-500">Try another keyword or show all domains.</p>
            <button onClick={() => { setQuery(""); setDomain("All"); }} className="btn-ghost mt-5">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
