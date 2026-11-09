import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Values from "./components/Values";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { Icon } from "./components/ui";
import SAMPLE_INTERNSHIPS from "./data/sample";
import { EMAIL } from "./data/content";
import logo from "./assets/LPB.png";

// Set to true to replace the whole site with the "applications closed" page.
const APPLICATIONS_CLOSED = false;

function ClosedOnly() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink p-6 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="aurora left-1/4 top-0 h-[420px] w-[420px] bg-[#0788CC]" />
        <div className="grid-bg absolute inset-0" />
      </div>
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-10 text-center text-slate-700 shadow-2xl">
        <img src={logo} alt="Pura Solutions" className="mx-auto h-12 w-auto" />
        <h1 className="mt-8 font-display text-3xl font-bold text-ink">Applications are now closed</h1>
        <p className="mt-3 text-slate-600">Your applications are under review. We will contact you by email when decisions are made.</p>
        <a href={`mailto:${EMAIL}`} className="btn-primary mt-8">
          <Icon name="mail" size={16} /> Contact us
        </a>
        <div className="mt-8 border-t border-slate-100 pt-5 text-sm text-slate-400">Pura Connect Students Program · Powered by Pura Solutions</div>
      </div>
    </main>
  );
}

export default function App() {
  const [modalItem, setModalItem] = useState(null);
  const [domain, setDomain] = useState("All");
  const closeModal = useCallback(() => setModalItem(null), []);

  if (APPLICATIONS_CLOSED) return <ClosedOnly />;

  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero internships={SAMPLE_INTERNSHIPS} onPickDomain={setDomain} />
        <Projects internships={SAMPLE_INTERNSHIPS} onOpen={setModalItem} domain={domain} setDomain={setDomain} />
        <Journey />
        <About />
        <Values />
        <Quote />
      </main>
      <Footer />
      <Modal item={modalItem} onClose={closeModal} />
    </div>
  );
}
