import React, { useState } from "react";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import SAMPLE_INTERNSHIPS from "./data/sample";

// Import images (keep as before)
import heroImg from "./assets/LPB.png";
import aboutImg from "./assets/LPH.png";

/**
 * App.jsx
 * - Toggle full-site closed mode with APPLICATIONS_CLOSED flag below
 * - If true: render the "closed only" section (inlined here)
 * - If false: render the normal site
 */

const APPLICATIONS_CLOSED = true; // <-- set to true to show only the closed page

export default function App() {
  const [modalItem, setModalItem] = useState(null);

  // dynamic timestamp for the closed footer
  const lastUpdated = new Date().toLocaleString();

  // Reusable small ClosedOnly content inlined to avoid adding another file
  const ClosedOnly = () => (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f6fb] via-[#eaf1fb] to-white p-6">
      <div
        className="w-full max-w-2xl rounded-3xl p-8 md:p-12 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
          backdropFilter: "blur(18px) saturate(140%)",
          WebkitBackdropFilter: "blur(18px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 24px 64px rgba(14,165,233,0.06)",
        }}
        aria-labelledby="closed-title"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={heroImg}
            alt="Pura Connect logo"
            style={{ height: 64, objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(14,165,233,0.18))" }}
          />
        </div>

        {/* Title */}
        <h1
          id="closed-title"
          className="text-2xl md:text-3xl font-extrabold mb-3"
          style={{ color: "#ce1818ff", lineHeight: 1.05 }}
        >
          Applications are now closed
        </h1>

        {/* Subheading + loader just below this sentence (as requested) */}
        <p className="text-slate-600 text-base md:text-lg mb-4">
          Your submitted applications are now under review.
        </p>

        {/* LOADER: placed exactly under the previous sentence */}
        <div aria-hidden className="flex justify-center mb-4">
          {/* accessible loader: aria-hidden so screen readers read the status text above */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background:
                    i === 0 ? "linear-gradient(135deg,#0ea5e9,#0ea5e9)" :
                    i === 1 ? "linear-gradient(135deg,#3b82f6,#3b82f6)" :
                    i === 2 ? "linear-gradient(135deg,#6366f1,#6366f1)" : "linear-gradient(135deg,#8b5cf6,#8b5cf6)",
                  boxShadow: "0 3px 10px rgba(14,165,233,0.22)",
                  display: "inline-block",
                  animation: "dotBounce 1.2s infinite ease-in-out",
                  animationDelay: `${i * 0.13}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Secondary message */}
        <p className="text-slate-500 text-sm md:text-base mb-6">
          We will contact you by email when decisions are made.
        </p>

        {/* Contact CTA */}
        <div className="mb-6">
          <a
            href="mailto:purasolutions.careerservices@outlook.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold"
            style={{
              background: "linear-gradient(135deg,#0ea5e9,#3b82f6)",
              color: "white",
              boxShadow: "0 10px 30px rgba(14,165,233,0.18)",
            }}
          >
            Contact us
          </a>
        </div>

        {/* Footer small lines */}
        <div style={{ borderTop: "1px solid rgba(226,232,240,0.8)", paddingTop: 14 }}>
          <div style={{ color: "#64748b", fontWeight: 600 }}>Pura Connect Students Program</div>
          <div style={{ color: "#94a3b8", marginTop: 4 }}>Powered by Pura Solutions</div>
          <div style={{ color: "#cbd5e1", marginTop: 8, fontStyle: "italic", fontSize: 13 }}>
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* local styles for loader animation */}
        <style>{`
          @keyframes dotBounce {
            0%, 80%, 100% { transform: scale(0.8) translateY(0); opacity: 0.6; }
            40% { transform: scale(1.05) translateY(-6px); opacity: 1; }
          }
          @media (max-width: 640px) {
            #closed-title { font-size: 20px; }
          }
        `}</style>
      </div>
    </main>
  );

  // Standard site layout
  const NormalSite = () => (
    <div className="font-sans text-slate-800">
      <main>
        <Hero img={heroImg} />
        <Quote />
        <About img={aboutImg} />
        <Values />
        <Projects internships={SAMPLE_INTERNSHIPS} onOpen={setModalItem} />
      </main>
      <Footer />
      <Modal item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  );

  // Render based on flag
  return APPLICATIONS_CLOSED ? <ClosedOnly /> : <NormalSite />;
}
