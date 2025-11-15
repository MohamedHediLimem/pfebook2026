import React, { useEffect } from "react";
import DOMPurify from "dompurify";

export default function Modal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;

  const safeHtml = DOMPurify.sanitize(item.description || "");

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal (glass layers) */}
      <div
        className="relative z-10 max-w-3xl w-full rounded-3xl overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        {/* 1) gradient background layer */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(106,90,205,0.14) 0%, rgba(16,185,129,0.10) 35%, rgba(59,130,246,0.10) 70%, rgba(236,72,153,0.08) 100%)",
            filter: "saturate(1.05)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />

        {/* 2) frosted glass card */}
        <div
          className="
            relative
            bg-white/10
            backdrop-blur-[22px]
            border border-white/20
            shadow-2xl
            px-8 py-7
            text-slate-50
          "
          style={{
            // subtle inner glow + glass sheen
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(2,6,23,0.6)",
            WebkitBackdropFilter: "blur(22px)",
            MozBackdropFilter: "blur(22px)",
          }}
        >
          {/* glossy highlight streak (rotated) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-30%",
              right: "-10%",
              width: "140%",
              height: "60%",
              transform: "rotate(25deg)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              filter: "blur(18px)",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          />

          {/* subtle noise / grain overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><filter id=\"n\"><feTurbulence baseFrequency=\"0.9\" numOctaves=\"1\" stitchTiles=\"stitch\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.02\"/></svg>')",
              mixBlendMode: "overlay",
              pointerEvents: "none",
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-20 rounded-full p-1 text-white/80 hover:text-white/100 transition"
          >
            ✕
          </button>

          {/* Content */}
          <h3 className="text-2xl font-extrabold leading-tight z-10">{item.title}</h3>
          <div className="text-sm text-white/75 mt-1 z-10">
            {item.company} • {item.location} • {item.duration}
          </div>

          <div
            className="mt-5 text-sm text-white/90 z-10 space-y-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />

          <div className="mt-6 flex flex-wrap gap-3 z-10">
            <a
              href="https://forms.gle/GxK7AeTZRGNw1NSV7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                px-5 py-2.5 rounded-full text-sm font-medium
                bg-gradient-to-r from-white/18 via-white/12 to-white/8
                border border-white/20
                backdrop-blur-md
                shadow-md hover:scale-[1.02] transition-transform
                text-white
              "
            >
              Apply
            </a>

            <button
              onClick={onClose}
              className="
                px-4 py-2 rounded-full text-sm font-medium
                bg-white/6 border border-white/12 text-white/90
                hover:bg-white/8
                transition
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
