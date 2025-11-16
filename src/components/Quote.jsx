import React from "react";

export default function Quote({ bgAccent = null }) {
  return (
    <section
      className="relative w-full min-h-[520px] overflow-hidden flex items-center"
      aria-label="Quote section"
    >
      {/* FULL-WIDTH LIQUID GLASS LAYER */}
      <div
        className="absolute inset-0 z-0 liquid-glass-surface"
        aria-hidden="true"
      />

      {/* optional subtle background texture/image behind the glass (very dim) */}
      {bgAccent && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[-1] bg-center bg-cover opacity-6"
          style={{ backgroundImage: `url(${bgAccent})`, mixBlendMode: "overlay" }}
        />
      )}

      {/* vignette to add depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(213, 213, 213, 0) 40%, rgba(95, 95, 95, 0.13) 100%)",
        }}
      />

      {/* CONTENT (left-center) */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-6">
        <div className="flex items-center min-h-[440px]">
          <div className="w-full md:w-1/2 flex items-center">
            <div className="pl-2 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black">
                Your <span className="font-extrabold">ideas</span>,{" "}
                <span className="font-extrabold">passion</span>, and{" "}
                <span className="font-extrabold">impact</span> will drive our next milestones.
              </h2>

              <div className="mt-4 text-sm font-bold text-black/70">- Pura Solutions</div>

              <div className="mt-8">
                <a
                  href="https://forms.gle/GxK7AeTZRGNw1NSV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-button text-sm font-medium"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Apply Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* optional right gap */}
          <div className="hidden md:block md:w-1/2" />
        </div>
      </div>

      {/* decorative floating blobs (on top of the glass surface) */}
      <div className="blob blob-1 pointer-events-none z-15" aria-hidden="true" />
      <div className="blob blob-2 pointer-events-none z-15" aria-hidden="true" />
      <div className="blob blob-3 pointer-events-none z-15" aria-hidden="true" />

      {/* Inline styles for liquid glass surface + animations */}
      <style>{`
      

        /* glass button */
        .glass-button {
          background: rgba(255,255,255,0.85);
          color: black;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 8px 24px rgba(2,6,23,0.08);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .glass-button:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(2,6,23,0.10); }

      `}</style>
    </section>
  );
}
