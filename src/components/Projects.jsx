import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Projects - Fully responsive cards with Apple-like glass look
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
    <section id="catalog" className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <div className="mb-3 inline-block animate-pulse w-full sm:w-auto">
              <div className="deadline-glass">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
                <p className="relative text-red-600 font-semibold text-sm sm:text-base flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-lg">⚠️</span>
                  <span className="flex-1 min-w-[200px]">Deadline: December 1st, 2025, at 11:59 PM</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Internship Projects
              </h3>
              <p className="text-slate-500 mt-2 text-sm sm:text-base">Explore roles across IT, Business Management, Quality Management, and Biomedical Engineering.</p>
            </div>
          </div>
          
          {/* Search Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="text-sm text-slate-600 sm:mr-2">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-1 sm:flex-initial">
              <input
                aria-label="Search roles, skills or companies"
                value={queryRaw}
                onChange={(e) => setQueryRaw(e.target.value)}
                placeholder="Search roles, skills or companies"
                className="search-glass px-4 py-2.5 sm:py-2 rounded-xl w-full sm:min-w-[220px] lg:min-w-[280px] outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm sm:text-base"
              />
              <select
                value={filterDomain}
                onChange={(e) => setFilterDomain(e.target.value)}
                className="select-glass px-3 py-2.5 sm:py-2 rounded-xl w-full sm:w-auto outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm sm:text-base"
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

        {/* Domain chips - Glass style */}
        <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3 flex-wrap">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setFilterDomain(d)}
              className={`chip-glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all transform hover:scale-105 ${
                filterDomain === d ? "chip-active" : ""
              }`}
              aria-pressed={filterDomain === d}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grid - Fully responsive */}
        <div ref={containerRef} className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filtered.map((i, idx) => (
            <article
              key={i.id}
              tabIndex={0}
              aria-labelledby={`proj-${i.id}-title`}
              onKeyDown={(e) => {
                if (e.key === "Enter") onOpen(i);
              }}
              className={`card-glass flex flex-col h-full rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transform transition-all duration-500 hover:scale-[1.02] ${
                reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Top meta (domain and optional right-side small tag) */}
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="domain-badge text-xs px-2 py-1.5 font-bold rounded-lg flex-shrink-0">{i.domain}</div>
                {i.level && <div className="text-xs py-1 font-bold text-slate-400 flex-shrink-0">{i.level}</div>}
              </div>

              {/* Body: title, company, description, tags */}
              <div className="flex-1 flex flex-col mt-3">
                <h4 id={`proj-${i.id}-id`} className="font-semibold text-base sm:text-lg bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent leading-tight">
                  <Highlight text={i.id} />
                </h4>
                <h4 id={`proj-${i.id}-title`} className="font-semibold text-base sm:text-lg text-slate-900 leading-tight mt-1">
                  <Highlight text={i.title} />
                </h4>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">
                  <Highlight text={` ${i.location || "Remote"}`} />
                </div>

                {/* description (clamped) */}
                <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm description">
                  <Highlight text={i.excerpt || i.description || ""} />
                </p>

                {/* tags - fixed area */}
                <div className="mt-3 sm:mt-1 tags-row">
                  <div className="flex flex-wrap gap-1">
                    {(i.tags || []).slice(0, 12).map((t) => (
                      <span key={t} className="tag-glass text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer: meta + buttons (bottom aligned) */}
              <div className="mt-4 sm:mt-6 pt-3 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  {/* Details - primary gradient button */}
                  <button
                    onClick={() => onOpen(i)}
                    className="button-gradient flex-1 sm:flex-initial sm:w-28 lg:w-32 h-10 sm:h-11 rounded-full inline-flex items-center justify-center text-white font-semibold text-sm sm:text-base transform transition hover:scale-105"
                    aria-label={`Details for ${i.title}`}
                  >
                    Details
                  </button>

                  {/* Apply - secondary glass button with same size */}
                  <a
                    href="https://forms.gle/GxK7AeTZRGNw1NSV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-glass flex-1 sm:flex-initial sm:w-28 lg:w-32 h-10 sm:h-11 rounded-full inline-flex items-center justify-center font-medium text-sm sm:text-base transform transition hover:scale-105"
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
          <div className="mt-8 text-slate-500 text-sm sm:text-base text-center sm:text-left">No internships found. Try a different search or clear filters.</div>
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
          min-height: 60px;
          max-height: 60px;
        }

        @media (min-width: 640px) {
          .description {
            min-height: 72px;
            max-height: 72px;
          }
        }

        /* tags area fixed height (prevents long tag lists from pushing footer) */
        .tags-row {
          min-height: 48px;
          max-height: 48px;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .tags-row {
            min-height: 56px;
            max-height: 56px;
          }
        }

        /* Apple Glass Deadline Badge */
        .deadline-glass {
          position: relative;
          overflow: hidden;
          padding: 0.625rem 1rem;
          border-radius: 0.75rem;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          background: linear-gradient(135deg, rgba(255,245,245,0.9) 0%, rgba(254,242,242,0.8) 100%);
          border: 1px solid rgba(239,68,68,0.2);
          box-shadow: 
            0 8px 32px 0 rgba(239,68,68,0.18),
            inset 0 1px 0 0 rgba(255,255,255,0.6),
            inset 0 -1px 0 0 rgba(239,68,68,0.1);
        }

        @media (min-width: 640px) {
          .deadline-glass {
            padding: 0.75rem 1.5rem;
            border-radius: 1rem;
          }
        }

        /* Search & Select Glass */
        .search-glass, .select-glass {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(15,23,42,0.08);
          box-shadow: 
            0 4px 20px rgba(2,6,23,0.06),
            inset 0 1px 0 0 rgba(255,255,255,0.8);
        }

        .search-glass::placeholder {
          color: rgba(100,116,139,0.6);
        }

        /* Domain Chips Glass */
        .chip-glass {
          backdrop-filter: blur(12px) saturate(160%);
          -webkit-backdrop-filter: blur(12px) saturate(160%);
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(15,23,42,0.06);
          color: #475569;
          box-shadow: 0 2px 12px rgba(2,6,23,0.04);
        }

        .chip-active {
          background: linear-gradient(135deg, rgba(59,130,246,0.95) 0%, rgba(139,92,246,0.95) 100%);
          color: white;
          border-color: rgba(59,130,246,0.3);
          box-shadow: 
            0 4px 20px rgba(59,130,246,0.3),
            inset 0 1px 0 0 rgba(255,255,255,0.3);
        }

        /* Card Glass */
        .card-glass {
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,251,0.9) 100%);
          border: 1px solid rgba(15,23,42,0.06);
          box-shadow: 
            0 10px 40px rgba(2,6,23,0.08),
            inset 0 1px 0 0 rgba(255,255,255,0.9);
        }

        .card-glass:hover {
          box-shadow: 
            0 20px 60px rgba(2,6,23,0.12),
            inset 0 1px 0 0 rgba(255,255,255,0.9);
        }

        /* Domain Badge Glass */
        .domain-badge {
          backdrop-filter: blur(8px) saturate(150%);
          -webkit-backdrop-filter: blur(8px) saturate(150%);
          background: rgba(241,245,249,0.8);
          color: #475569;
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: 0 2px 8px rgba(2,6,23,0.04);
        }

        /* Tag Glass */
        .tag-glass {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          background: rgba(241,245,249,0.7);
          color: #475569;
          border: 1px solid rgba(15,23,42,0.04);
        }

        /* Gradient Button */
        .button-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          box-shadow: 
            0 8px 28px rgba(59,130,246,0.25),
            inset 0 1px 0 0 rgba(255,255,255,0.3);
        }

        .button-gradient:hover {
          box-shadow: 
            0 12px 36px rgba(59,130,246,0.35),
            inset 0 1px 0 0 rgba(255,255,255,0.3);
        }

        /* Glass Button */
        .button-glass {
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(15,23,42,0.08);
          color: #1e293b;
          box-shadow: 
            0 6px 20px rgba(2,6,23,0.08),
            inset 0 1px 0 0 rgba(255,255,255,0.9);
        }

        .button-glass:hover {
          background: rgba(255,255,255,0.95);
          box-shadow: 
            0 8px 28px rgba(2,6,23,0.12),
            inset 0 1px 0 0 rgba(255,255,255,0.9);
        }
      `}</style>
    </section>
  );
}