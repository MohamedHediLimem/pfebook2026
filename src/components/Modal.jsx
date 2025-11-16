import React, { useEffect } from "react";
import DOMPurify from "dompurify";

/**
 * Modal - shows full project details including Objectives, Scope and Deliverables.
 * Accepts project object `item` (from SAMPLE_INTERNSHIPS) and `onClose`.
 *
 * Behavior:
 * - Locks body scroll while open.
 * - Panel is scrollable (max-height: 90vh, overflow: auto).
 */
export default function Modal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!item) return;
    const prev = { overflow: document.body.style.overflow, paddingRight: document.body.style.paddingRight };
    // account for potential scrollbar width to avoid layout shift (optional)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = prev.overflow || "";
      document.body.style.paddingRight = prev.paddingRight || "";
    };
  }, [item]);

  if (!item) return null;

  // helper to retrieve the first existing field from a list of possible keys
  const pick = (...keys) => {
    for (const k of keys) {
      if (typeof item[k] !== "undefined" && item[k] !== null && item[k] !== "") {
        return item[k];
      }
    }
    return "";
  };

  // Accept arrays too: if array -> join with <li>
  const toHtml = (value) => {
    if (!value) return "";
    if (Array.isArray(value)) {
      return `<ul>${value.map((v) => `<li>${DOMPurify.sanitize(String(v))}</li>`).join("")}</ul>`;
    }
    const s = String(value).trim();
    if (/[<>]/.test(s)) return DOMPurify.sanitize(s);
    const parts = s.split(/\n{2,}/).map(p => `<p>${DOMPurify.sanitize(p)}</p>`);
    return parts.join("");
  };

  const rawDescription = pick("description", "excerpt");
  const rawObjectives = pick("Objectives", "objectives", "objectivesText", "ObjectivesText");
  const rawScope = pick("Scope", "scope", "SCOPE");
  const rawDeliverables = pick("Deliverables", "Delivrables", "deliverables");

  const safeDescription = DOMPurify.sanitize(toHtml(rawDescription));
  const safeObjectives = DOMPurify.sanitize(toHtml(rawObjectives));
  const safeScope = DOMPurify.sanitize(toHtml(rawScope));
  const safeDeliverables = DOMPurify.sanitize(toHtml(rawDeliverables));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} details`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* modal glass panel (centered) */}
      <div
        className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        {/* subtle gradient accent behind glass */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.03) 50%, rgba(236,72,153,0.03) 100%)",
            mixBlendMode: "screen",
          }}
        />

        {/* PANEL: make this the scrollable area */}
        <div
          className="relative p-6 md:p-8 rounded-2xl"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.68))",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.68)",
            boxShadow: "0 20px 50px rgba(2,6,23,0.35)",
            color: "#0f172a",
            // make the panel scrollable while keeping header/actions visible if desired
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 rounded-full p-1 text-slate-700 hover:text-slate-900 transition"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-3">
            <div className="text-sm text-slate-500">{item.domain}{item.subdomain ? ` • ${item.subdomain}` : ""}</div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent leading-tight mt-1">{item.id}</h3>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight mt-1">{item.title}</h3>
            <div className="text-sm text-slate-700 mt-1">
              {item.company} • {item.location} • {item.duration}
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 mt-4">
            {/* Description */}


            {/* Objectives */}
            {safeObjectives ? (
              <section>
                <h4 className="text-base font-semibold text-slate-900 mb-2">Objectives</h4>
                <div className="text-slate-800 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: safeObjectives }} />
              </section>
            ) : null}

            {/* Scope */}
            {safeScope ? (
              <section>
                <h4 className="text-base font-semibold text-slate-900 mb-2">Scope</h4>
                <div className="text-slate-800 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: safeScope }} />
              </section>
            ) : null}

            {/* Deliverables */}
            {safeDeliverables ? (
              <section>
                <h4 className="text-base font-semibold text-slate-900 mb-2">Deliverables</h4>
                <div className="text-slate-800 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: safeDeliverables }} />
              </section>
            ) : null}
          </div>

          {/* tags */}
          {item.tags?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* actions (kept at the bottom of content — panel scrolls above it) */}
          <div className="mt-6 flex gap-3 items-center">
            <a
              href="https://forms.gle/GxK7AeTZRGNw1NSV7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold"
              style={{
                background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                color: "white",
                boxShadow: "0 10px 30px rgba(59,130,246,0.18)",
              }}
            >
              Apply
            </a>

            <button onClick={onClose} className="px-4 py-2 rounded-full border text-slate-800 bg-white/70">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
