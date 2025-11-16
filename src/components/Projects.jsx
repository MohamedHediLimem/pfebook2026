import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Projects - Fixed, uniform cards with Apple-like glass look
 * Props:
 *  - internships: array of project objects
 *  - onOpen: function(project) to open details
 */
export default function ProjectsFixed({ internships = [], onOpen = () => {} }) {
  // UI state
  const [queryRaw, setQueryRaw] = useState("");
  const [query, setQuery] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");

  // debounce search input (300ms)
  useEffect(() => {
    const t = setTimeout(() => setQuery(queryRaw.trim()), 300);
    return () => clearTimeout(t);
  }, [queryRaw]);

  // derive domains
  const domains = useMemo(
    () => ["All", ...Array.from(new Set((internships || []).map((i) => i.domain || "Other")))],
    [internships]
  );

  // filtered results (memoized)
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return (internships || []).filter((i) => {
      const hay = [i.title, i.company, (i.tags || []).join(" "), i.excerpt, i.location]
        .join(" ")
        .toLowerCase();
      const matchQuery = q === "" ? true : hay.includes(q);
      const matchDomain = filterDomain === "All" ? true : (i.domain || "Other") === filterDomain;
      return matchQuery && matchDomain;
    });
  }, [internships, query, filterDomain]);

  // subtle reveal-on-scroll (optional)
  const containerRef = useRef(null);
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setReveal(true);
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // highlight helper
  const Highlight = ({ text = "" }) => {
    if (!query) return <>{text}</>;
    const parts = [];
    const lower = text.toLowerCase();
    const q = query.toLowerCase();
    let start = 0;
    let idx = lower.indexOf(q, start);
    while (idx !== -1) {
      if (idx > start) parts.push(text.slice(start, idx));
      parts.push(
        <mark key={idx} className="bg-yellow-100 text-yellow-800 px-[2px] rounded-sm">
          {text.slice(idx, idx + q.length)}
        </mark>
      );
      start = idx + q.length;
      idx = lower.indexOf(q, start);
    }
    if (start < text.length) parts.push(text.slice(start));
    return <>{parts}</>;
  };

  return (
    <section id="catalog" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-3xl font-extrabold">Internship Projects</h3>
            <p className="text-slate-500 mt-2">Explore roles across IT, Business Management, Quality Management, and Biomedical Engineering.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-600 mr-2 hidden md:block">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <input
                aria-label="Search roles, skills or companies"
                value={queryRaw}
                onChange={(e) => setQueryRaw(e.target.value)}
                placeholder="Search roles, skills or companies"
                className="px-4 py-2 border rounded-lg min-w-[220px] outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pura"
              />
              <select
                value={filterDomain}
                onChange={(e) => setFilterDomain(e.target.value)}
                className="px-3 py-2 border rounded-lg hidden sm:inline-block"
                aria-label="Filter domain"
              >
                {domains.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Domain chips */}
        <div className="mt-4 flex gap-3 flex-wrap">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setFilterDomain(d)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                filterDomain === d ? "bg-pura text-white border-transparent" : "bg-white text-slate-600 border-slate-200"
              }`}
              aria-pressed={filterDomain === d}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {filtered.map((i, idx) => (
            <article
              key={i.id}
              tabIndex={0}
              aria-labelledby={`proj-${i.id}-title`}
              onKeyDown={(e) => {
                if (e.key === "Enter") onOpen(i);
              }}
              className={`flex flex-col h-full rounded-xl p-6 glass-card focus:outline-none focus:ring-4 focus:ring-pura/30 transform transition-all duration-500 ${
                reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Top meta (domain and optional right-side small tag) */}
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs py-1 font-bold rounded-md bg-gray/10 text-slate-700">{i.domain}</div>
                {i.level && <div className="text-xs py-1 font-bold text-slate-400">{i.level}</div>}
              </div>

              {/* Body: title, company, description, tags */}
              <div className="flex-1 flex flex-col mt-3">
                <h4 id={`proj-${i.id}-id`} className="font-semibold text-lg bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent leading-tight">
                  <Highlight text={i.id} />
                </h4>
                <h4 id={`proj-${i.id}-title`} className="font-semibold text-lg text-slate-900 leading-tight">
                  <Highlight text={i.title} />
                </h4>
                <div className="text-sm text-slate-500 mt-1">
                  <Highlight text={` ${i.location || "Remote"}`} />
                </div>

                {/* description (clamped) */}
                <p className="mt-4 text-slate-600 text-sm description">
                  <Highlight text={i.excerpt || i.description || ""} />
                </p>

                {/* tags - fixed area */}
                <div className="mt-4 tags-row">
                  <div className="flex flex-wrap gap-2">
                    {(i.tags || []).slice(0, 12).map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer: meta + buttons (bottom aligned) */}
              <div className="mt-6 pt-3 border-t border-transparent flex items-center justify-left gap-4">
                <div className="text-sm text-slate-500">
                    
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {/* Details - primary gradient button */}
                  <button
                    onClick={() => onOpen(i)}
                    className="w-28 md:w-32 h-11 rounded-full inline-flex items-center justify-center text-white font-semibold shadow-md transform transition"
                    style={{
                      background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                      boxShadow: "0 8px 28px rgba(59,130,246,0.18)",
                    }}
                    aria-label={`Details for ${i.title}`}
                  >
                    Details
                  </button>

                  {/* Apply - secondary button with same size */}
                  <a
                    href="https://forms.gle/GxK7AeTZRGNw1NSV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 md:w-32 h-11 rounded-full inline-flex items-center justify-center bg-white border text-slate-900 font-medium shadow-sm"
                    style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.06)", borderColor: "rgba(15,23,42,0.06)" }}
                    aria-label={`Apply to ${i.title}`}
                  >
                    Apply
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 text-slate-500">No internships found. Try a different search or clear filters.</div>
        )}
      </div>

      {/* Local styles to enforce consistent heights, clamps, and glass look */}
      <style>{`
        /* description clamp to 3 lines and fixed height to preserve card consistency */
        .description {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 72px;   /* adjust if you want larger/smaller */
          max-height: 72px;
        }

        /* tags area fixed height (prevents long tag lists from pushing footer) */
        .tags-row {
          min-height: 56px;   /* fits two rows; tweak if needed */
          max-height: 56px;
          overflow: hidden;
        }

        /* glass-card fallback style */
        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,250,251,0.96));
          backdrop-filter: blur(6px) saturate(120%);
          -webkit-backdrop-filter: blur(6px) saturate(120%);
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: 0 10px 30px rgba(2,6,23,0.04);
        }

        /* responsiveness */
        @media (max-width: 768px) {
          .w-28 { width: 96px; }
          .md\\:w-32 { width: 96px; }
          .h-11 { height: 40px; }
        }
      `}</style>
    </section>
  );
}
