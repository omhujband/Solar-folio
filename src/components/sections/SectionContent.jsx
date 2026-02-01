import React from 'react'

// This component extracts just the content part from section pages
export default function SectionContent({ planet, children }) {
  return (
    <div className="space-y-6">
      {/* Section header */}
      <div>
        <p className="text-stardust text-sm tracking-widest uppercase mb-2">
          {planet.section}
        </p>
        <h1 className="text-display-lg text-starlight">
          {planet.displayName}
        </h1>
      </div>

      {/* Content */}
      {children}
    </div>
  )
}