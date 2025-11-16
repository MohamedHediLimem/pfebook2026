import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-slate-600 text-sm flex items-center justify-between">

        {/* Left side */}
        <div>© {new Date().getFullYear()} Pura Solutions</div>

        {/* Right side — Apply-themed button linking to pura-tech.com */}
        <a
          href="https://pura-tech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white transition-all duration-500 overflow-hidden"
          style={{
            background: "rgba(18, 121, 232, 1)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1.5px solid rgba(255, 255, 255, 0.21)",
            boxShadow: "0 8px 25px rgba(59,130,246,0.28)",
          }}
        >
          <span className="relative z-10">pura-tech.com</span>

          {/* Arrow icon */}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>

          {/* Shimmer effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              animation: "shimmer 2s infinite",
            }}
          />
        </a>
      </div>

      {/* shimmer animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </footer>
  );
}
