import React from 'react'

export default function UnexploredContent({ uniqueLine }) {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <p className="text-body leading-relaxed">
          This region of Solar-folio is intentionally left unexplored — a 
          reminder that learning and creativity never truly end.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="space-y-4">
        <p className="text-stardust/80 italic text-lg leading-relaxed">
          "{uniqueLine}"
        </p>
      </div>
    </div>
  )
}