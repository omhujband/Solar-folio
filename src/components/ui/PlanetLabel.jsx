import React from 'react'

export default function PlanetLabel({ name, section, position, isVisible }) {
  if (!isVisible) return null

  return (
    <div
      className="absolute pointer-events-none z-30 transform -translate-x-1/2"
      style={{
        left: position.x,
        top: position.y - 60,
      }}
    >
      <div 
        className={`
          glass-panel px-4 py-2 rounded-lg text-center
          transition-all duration-200 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
      >
        <p className="text-starlight font-medium text-sm">{name}</p>
        <p className="text-stardust text-xs">{section}</p>
      </div>
      
      {/* Pointer */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10" />
      </div>
    </div>
  )
}