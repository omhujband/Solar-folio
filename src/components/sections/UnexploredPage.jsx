import React from 'react'
import { useNavigate } from 'react-router-dom'
import SectionLayout from './SectionLayout'

export default function UnexploredPage({
  title,
  planetColor,
  planetRadius = 2,
  hasRings = false,
  tilt = 0,
  texture,
  ringTexture,
  uniqueLine,
}) {
  const navigate = useNavigate()

  return (
    <SectionLayout
      title={title}
      subtitle="Unexplored Region"
      planetColor={planetColor}
      planetRadius={planetRadius}
      hasRings={hasRings}
      tilt={tilt}
      texture={texture}
      ringTexture={ringTexture}
    >
      <div className="space-y-12">
        {/* Core message - EXACT TEXT REQUIRED */}
        <div className="space-y-6">
          <p className="text-body leading-relaxed">
            This region of Solar-folio is intentionally left unexplored — a 
            reminder that learning and creativity never truly end.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Unique metaphor line */}
        <div className="space-y-4">
          <p className="text-stardust/80 italic text-lg leading-relaxed">
            "{uniqueLine}"
          </p>
        </div>

        {/* Return prompt */}
        <div className="pt-8">
          <button
            onClick={() => navigate('/')}
            className="text-stardust hover:text-starlight transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span>Continue exploring the known regions</span>
          </button>
        </div>
      </div>
    </SectionLayout>
  )
}