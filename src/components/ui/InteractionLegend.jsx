import React, { useState } from 'react'

export default function InteractionLegend() {
  const [isMinimized, setIsMinimized] = useState(false)

  const controls = [
    { action: 'Scroll', description: 'Zoom', icon: '⟳' },
    { action: 'Drag', description: 'Move', icon: '✥' },
    { action: 'Hover', description: 'Identify', icon: '◎' },
    { action: 'Click', description: 'Explore', icon: '◉' },
  ]

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-40
        glass-panel rounded-lg
        transition-all duration-300 ease-out
        ${isMinimized ? 'p-2' : 'p-4'}
      `}
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center justify-center w-8 h-8 text-stardust hover:text-starlight transition-colors"
          aria-label="Expand controls legend"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      ) : (
        <>
          <div className="flex items-center justify-between mb-3">
            <span className="text-caption text-stardust/80 uppercase tracking-wider text-xs">
              Controls
            </span>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-stardust/60 hover:text-stardust transition-colors ml-4"
              aria-label="Minimize legend"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="space-y-2">
            {controls.map(({ action, description, icon }) => (
              <div key={action} className="flex items-center gap-3 text-sm">
                <span className="w-5 text-center text-solar-gold/80 text-xs">
                  {icon}
                </span>
                <span className="text-stardust/90 font-medium min-w-[50px]">
                  {action}
                </span>
                <span className="text-stardust/60">→</span>
                <span className="text-stardust/70">{description}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}