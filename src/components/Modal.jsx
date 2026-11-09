import React, { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import { DOMAINS, EMAIL, FORM_URL, START_LABEL, domainColor } from "../data/content";
import { Icon } from "./ui";

const toHtml = (value) => {
  if (!value) return "";
  if (Array.isArray(value)) return `<ul>${value.map((v) => `<li>${DOMPurify.sanitize(String(v))}</li>`).join("")}</ul>`;
  const s = String(value).trim();
  if (/[<>]/.test(s)) return DOMPurify.sanitize(s);
  return s.split(/\n{2,}/).map((p) => `<p>${DOMPurify.sanitize(p)}</p>`).join("");
};

export default function Modal({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  if (!item) return null;
  const c = domainColor(item.domain);
  const sections = [
    ["Context & objectives", item.Objectives || item.objectives],
    ["Scope, tools & profile", item.Scope || item.scope],
    ["Deliverables", item.Deliverables || item.Delivrables || item.deliverables],
  ].filter(([, v]) => v);

  const meta = [
    ["pin", item.location],
    ["clock", item.duration],
    ["calendar", `Starts ${START_LABEL}`],
    ["cap", item.level],
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={`${item.title} details`}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} style={{ animation: "fadeIn .25s ease" }} />

      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        style={{ "--c": c, animation: "popIn .35s cubic-bezier(.2,.8,.2,1)" }}
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden px-6 pb-7 pt-6 text-white sm:px-9 sm:pt-8" style={{ background: `linear-gradient(135deg, ${c} 0%, color-mix(in srgb, ${c} 45%, #0A1628) 100%)` }}>
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-white/20 px-2.5 py-1 font-mono text-xs font-semibold tracking-wider">{item.id}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/80">
                <Icon name={DOMAINS[item.domain]?.icon} size={14} /> {item.domain}
                {item.subdomain ? ` · ${item.subdomain}` : ""}
              </span>
            </div>
            <button ref={closeRef} onClick={onClose} className="rounded-full bg-white/15 p-2 transition hover:bg-white/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40" aria-label="Close">
              <Icon name="close" size={18} />
            </button>
          </div>
          <h3 className="relative mt-4 max-w-3xl font-display text-2xl font-bold leading-tight sm:text-3xl">{item.title}</h3>
          {item.excerpt && <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">{item.excerpt}</p>}
          <div className="relative mt-5 flex flex-wrap gap-2">
            {meta.filter(([, v]) => v).map(([icon, v]) => (
              <span key={v} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                <Icon name={icon} size={13} /> {v}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-7 sm:px-9">
          <div className="grid gap-8">
            {sections.map(([title, value], idx) => (
              <section key={title}>
                <h4 className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: c }}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] text-white" style={{ background: c }}>{idx + 1}</span>
                  {title}
                  <span className="h-px flex-1 bg-slate-200" />
                </h4>
                <div className="prose-pura mt-3 text-[15px] leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(toHtml(value)) }} />
              </section>
            ))}
          </div>

          {item.tags?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${c}12`, color: c }}>{t}</span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex shrink-0 flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`PFE 2027 – ${item.id}`)}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-ink">
            <Icon name="mail" size={16} /> Questions? Email us
          </a>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn text-white shadow-lg hover:-translate-y-0.5" style={{ background: c, boxShadow: `0 12px 30px -10px ${c}` }}>
            Apply for {item.id} <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn { from { opacity: 0; transform: translateY(24px) scale(.98) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) { [role=dialog] * { animation: none !important } }
      `}</style>
    </div>
  );
}
