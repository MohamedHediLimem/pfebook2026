import React from 'react'
export default function Modal({ item, onClose }) {
  if (!item) return null
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 z-10">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-500">Close</button>
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <div className="text-sm text-slate-500">{item.company} • {item.location} • {item.duration}</div>
        <div className="mt-4 text-slate-700">{item.description}</div>
        <div className="mt-6 flex gap-3">
          <a className="px-4 py-2 bg-pura text-white rounded" href={`#apply-${item.id}`}>Apply</a>
          <a className="px-4 py-2 border rounded" href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}
