import React from "react";

export default function Quote({ bgAccent = null }) {
  return (
    <section className="relative w-full min-h-[520px] overflow-hidden">
      {/* Full glass section background */}
      <div className="glass-section absolute inset-0 z-0" />

      {/* optional subtle background texture/image behind the glass (very dim) */}
      {bgAccent && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[-1] bg-center bg-cover opacity-10"
          style={{ backgroundImage: `url(${bgAccent})`, mixBlendMode: "overlay" }}
        />
      )}

      {/* subtle vignette to match screenshot depth */}
      <div className="absolute inset-0 z-0 pointer-events-none glass-vignette" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          {/* Big decorative quote marks (part of the background look) */}
          <div className="quote-mark-large pointer-events-none">“”</div>

          {/* Actual readable quote text */}
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-white leading-tight">
            Your <span className="font-extrabold">ideas</span>,{" "}
            <span className="font-extrabold">passion</span>, and{" "}
            <span className="font-extrabold">impact</span> will drive our next milestones.
          </h2>

          <div className="mt-6 text-white/80">— Pura Solutions</div>

          <div className="mt-8">
            <button className="glass-button inline-flex items-center gap-3 px-6 py-3 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-medium text-white">Apply Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* decorative blobs on top of the glass background */}
      <div className="blob blob-1 pointer-events-none" />
      <div className="blob blob-2 pointer-events-none" />
      <div className="blob blob-3 pointer-events-none" />
    </section>
  );
}
