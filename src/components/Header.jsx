import React from 'react'
export default function Header({ onNavClick }) {
  return (
    <header className="w-full bg-white/60 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-400 text-white font-bold">P</div>
          <div>
            <div className="text-lg font-semibold">Pura Solutions</div>
            <div className="text-xs text-slate-500">Pura Connect — Students Program</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <button onClick={() => onNavClick('catalog')} className="hover:text-pura-dark">Catalog</button>
          <button onClick={() => onNavClick('about')} className="hover:text-pura-dark">About</button>
          <button onClick={() => onNavClick('projects')} className="hover:text-pura-dark">Projects</button>
          <a href="#apply" className="ml-4 inline-block px-4 py-2 bg-pura text-white rounded-lg shadow">Apply</a>
        </nav>
        <div className="md:hidden">
          <button className="px-3 py-2 rounded bg-slate-100">Menu</button>
        </div>
      </div>
    </header>
  )
}
