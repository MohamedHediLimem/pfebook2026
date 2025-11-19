import React, { useState } from 'react'
import Hero from './components/Hero'
import Quote from './components/Quote'
import About from './components/About'
import Values from './components/Values'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SAMPLE_INTERNSHIPS from './data/sample'

// Importer les images
import heroImg from './assets/LPB.webp'
import aboutImg from './assets/LPH.png'


export default function App() {
  const [modalItem, setModalItem] = useState(null)

  return (
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
  )
}