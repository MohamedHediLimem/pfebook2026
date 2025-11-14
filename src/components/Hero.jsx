import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden min-h-screen">
      {/* Motifs géométriques en arrière-plan - Côté droit */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grandes formes géométriques */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-5">
          {/* Lignes diagonales parallèles */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="40" stroke="#64748b" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>

        {/* Formes 3D stylisées */}
        <div className="absolute top-1/4 right-10 w-96 h-96 opacity-10">
          <div className="absolute inset-0 bg-slate-400 transform rotate-45 skew-y-12"></div>
        </div>
        <div className="absolute top-1/2 right-32 w-64 h-64 opacity-8">
          <div className="absolute inset-0 bg-slate-300 transform -rotate-12 skew-x-6"></div>
        </div>
        
        {/* Lignes fines supplémentaires */}
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-slate-300 opacity-20"
              style={{
                width: '1px',
                height: '120%',
                left: `${i * 6}%`,
                top: '-10%',
                transform: `rotate(${35 + i * 2}deg)`,
                transformOrigin: 'top left',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bande bleue verticale à gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-4 md:w-5 bg-pura"></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-16 flex flex-col justify-between min-h-screen">
        {/* Header en haut à gauche */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
            Pura Solutions
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-1">
            Pura Connect Students Program
          </p>
        </div>

        {/* Contenu central - Logo et titre */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          {/* Logo Pura */}
          <div className="mb-12 md:mb-16">
            <img 
              src="pura-logo.png" 
              alt="Pura - Driven by innovation" 
              className="h-20 md:h-28 lg:h-32 w-auto object-contain mx-auto"
            />
          </div>

          {/* Titre principal */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight">
              Internship Catalog
            </h1>
            <p className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              2027
            </p>
          </div>
          <span><div className="space-y-4 md:space-y-6">
            <h1 className="text-md md:text-5xl lg:text-6xl xl:text-xl font-bold text-slate-800 leading-tight">
              PFE Book 
            </h1>
          </div>
          </span>
          
        </div>

       {/* Footer glassmorphism en bas */}
        <div className="text-center mt-8">
          <a 
            href="https://pura-tech.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/50 rounded-full blur-l opacity-50 group-hover:opacity-50 transition-all duration-900"></div>
              <div className="relative backdrop-blur-m bg-transparent/2 border border-tranparent/80 rounded-full px-10 py-4 shadow-lg shadow-blue-300/5 hover:shadow-s hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105">
                <p className="text-xl md:text-2xl bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent font-bold">
                  Pura-tech.com
                </p>
              </div>
 </div>
          </a>
        </div>
      </div>

      {/* Effet de lumière subtil au centre */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none"></div>
    </section>
  )
}