import React from 'react'
export default function Footer() {
  return (
    <footer className="py-8 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 text-slate-600 text-sm flex items-center justify-between">
        <div>© {new Date().getFullYear()} Pura Solutions</div>
        <div>pura-tech.com</div>
      </div>
    </footer>
  )
}
