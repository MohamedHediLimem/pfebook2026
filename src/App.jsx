import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Quote from './components/Quote'
import About from './components/About'
import Values from './components/Values'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SAMPLE_INTERNSHIPS from './data/sample'

// Importer les images
import heroImg from './assets/pura-logo.png'
import quoteImg from './assets/quote.png'
import aboutImg from './assets/about.png'
import valuesImg from './assets/values.png'

export default function App() {
  const [modalItem, setModalItem] = useState(null)

  return (
    <div className="font-sans text-slate-800">
      <Header onNavClick={(id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }} />

      <main>
        <Hero img={heroImg} />
        <Quote img={quoteImg} />
        <About img={aboutImg} />
        <Values img={valuesImg} />
        <Projects internships={SAMPLE_INTERNSHIPS} onOpen={setModalItem} />
      </main>

      <Footer />

      <Modal item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  )
}