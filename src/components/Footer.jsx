import React from "react";
import logo from "../assets/LPB.png";
import { EMAIL, WEBSITE } from "../data/content";
import { Icon } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <img src={logo} alt="Pura Solutions" className="h-9 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-slate-500">Pura Connect Students Program · PFE Book 2027</p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-ink">
            <Icon name="mail" size={16} /> {EMAIL}
          </a>
          <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
            <Icon name="globe" size={16} /> pura-tech.com <Icon name="arrowUpRight" size={14} />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="container-x py-5 text-xs text-slate-400">© {new Date().getFullYear()} Pura Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
}
