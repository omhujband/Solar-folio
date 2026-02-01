import React from 'react'

export default function PauseButton({ isPaused, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 left-6 z-40 glass-panel rounded-lg p-3 hover:bg-white/5 transition-all duration-300 group"
      aria-label={isPaused ? 'Resume orbital motion' : 'Pause orbital motion'}
      title={isPaused ? 'Resume orbits' : 'Pause orbits (easier clicking)'}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full border border-solar-gold/50 flex items-center justify-center group-hover:border-solar-gold group-hover:bg-solar-gold/10 transition-all duration-300">
          {isPaused ? (
            // Play icon
            <svg 
              className="w-5 h-5 text-solar-gold ml-0.5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            // Pause icon
            <svg 
              className="w-5 h-5 text-solar-gold" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </div>

        {/* Text */}
        <div className="pr-2">
          <p className="text-starlight text-sm font-medium">
            {isPaused ? 'Resume' : 'Pause'}
          </p>
          <p className="text-stardust/60 text-xs">
            {isPaused ? 'Continue orbits' : 'Freeze to click'}
          </p>
        </div>
      </div>

      {/* Pulse indicator when paused */}
      {isPaused && (
        <div className="absolute -top-1 -right-1 w-3 h-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-solar-gold/40 animate-ping" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-solar-gold" />
        </div>
      )}
    </button>
  )
}