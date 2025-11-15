import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Projects section — improved UX + style
 * Props:
 *  - internships: array of project objects (same shape you used)
 *  - onOpen: function(project) to open details
 */
export default function Projects({ internships = [], onOpen }) {
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
    () => ["All", ...Array.from(new Set(internships.map((i) => i.domain || "Other")))],
    [internships]
  );

  // filtered results (memoized)
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return internships.filter((i) => {
      const hay = [i.title, i.company, (i.tags || []).join(" "), i.excerpt, i.location]
        .join(" ")
        .toLowerCase();
      const matchQuery = q === "" ? true : hay.includes(q);
      const matchDomain = filterDomain === "All" ? true : (i.domain || "Other") === filterDomain;
      return matchQuery && matchDomain;
    });
  }, [internships, query, filterDomain]);

  // reveal-on-scroll for cards
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // helper: highlight matching words
  const Highlight = ({ text = "" }) => {
    if (!query) return <>{text}</>;
    const parts = [];
    const lower = text.toLowerCase();
    const q = query.toLowerCase();
    let start = 0;
    let idx = lower.indexOf(q, start);
    while (idx !== -1) {
      if (idx > start) parts.push(text.slice(start, idx));
      parts.push(<mark key={idx} className="bg-yellow-100 text-yellow-800 px-[2px] rounded-sm">{text.slice(idx, idx + q.length)}</mark>);
      start = idx + q.length;
      idx = lower.indexOf(q, start);
    }
    if (start < text.length) parts.push(text.slice(start));
    return <>{parts}</>;
  };

  return (
    <section id="catalog" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-3xl font-extrabold">Internship Projects</h3>
            <p className="text-slate-500 mt-2">Explore roles across IT, Quality Management, Business and Biomedical.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-600 mr-2 hidden md:block">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </div>

            {/* search */}
            <div className="flex items-center gap-2">
              <input
                aria-label="Search roles, skills or companies"
                value={queryRaw}
                onChange={(e) => setQueryRaw(e.target.value)}
                placeholder="Search roles, skills or companies"
                className="px-4 py-2 border rounded-lg min-w-[220px] outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pura"
              />

              {/* domain select (hidden on wide screens; chips available below) */}
              <select
                value={filterDomain}
                onChange={(e) => setFilterDomain(e.target.value)}
                className="px-3 py-2 border rounded-lg hidden sm:inline-block"
                aria-label="Filter domain"
              >
                {domains.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* domain chips (quick filters) */}
        <div className="mt-4 flex gap-3 flex-wrap">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setFilterDomain(d)}
              className={`px-3 py-1 rounded-full text-sm border transition 
                ${filterDomain === d ? "bg-pura text-white border-transparent" : "bg-white text-slate-600 border-slate-200"}`}
              aria-pressed={filterDomain === d}
            >
              {d}
            </button>
          ))}
        </div>

        {/* grid */}
        <div ref={containerRef} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((i, idx) => (
            <article
              key={i.id}
              tabIndex={0}
              aria-labelledby={`proj-${i.id}-title`}
              onKeyDown={(e) => { if (e.key === "Enter") onOpen(i); }}
              className={`rounded-xl p-6 shadow-md glass-card focus:outline-none focus:ring-4 focus:ring-pura/30 cursor-pointer
                transform transition-all duration-500 ${reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                hover:shadow-xl`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="items-start justify-between gap-4">
                 
                <div className="text-xs px-2 py-1 rounded-md bg-gray/10 text-black">{i.domain}</div>
                 <div className="flex-1">
                  <h4 id={`proj-${i.id}-title`} className="font-semibold text-lg text-slate-900">
                    <Highlight text={i.title} />
                  </h4>
                  <div className="text-sm text-slate-500 mt-1">
                    <Highlight text={`${i.company} • ${i.location || "Remote"}`} />
                  </div>
                </div>

              </div>

              <p className="mt-3 text-slate-600 text-sm">
                <Highlight text={i.excerpt || ""} />
              </p>

              <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {(i.tags || []).slice(0, 6).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-700">{t}</span>
                  ))}
                </div>

                <div className="flex gap-2 items-center">
                  <div className="text-sm text-slate-500 mr-2">{i.duration} • {i.level}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onOpen(i)}
                      className="px-3 py-2 bg-pura text-white rounded hover:opacity-95"
                    >
                      Details
                    </button>
                    <a
  href="https://forms.gle/GxK7AeTZRGNw1NSV7"
  target="_blank"
  rel="noopener noreferrer"
  className="px-3 py-2 border rounded text-sm"
>
  Apply
</a>

                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 text-slate-500">
            No internships found. Try a different search or clear filters.
          </div>
        )}
      </div>
    </section>
  );
}
