import React, { useEffect, useState } from "react";
import logo from "../assets/LPB.png";
import { FORM_URL } from "../data/content";
import { Icon } from "./ui";

const LINKS = [
  ["Projects", "#catalog"],
  ["Journey", "#journey"],
  ["About", "#about"],
  ["Apply", "#apply"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-slate-200/70 bg-white/95 shadow-[0_10px_40px_-12px_rgba(10,22,40,0.25)] backdrop-blur-xl"
            : "border-white/60 bg-white/95 backdrop-blur-md"
        }`}
        aria-label="Main"
      >
        <a href="#top" className="flex items-center" aria-label="Pura Solutions, back to top">
          <img src={logo} alt="Pura Solutions" className="h-8 w-auto sm:h-9" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Apply now <Icon name="arrowUpRight" size={16} />
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur-xl md:hidden">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              {label}
            </a>
          ))}
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-1 w-full">
            Apply now <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
