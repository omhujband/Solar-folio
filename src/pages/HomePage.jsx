import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'

export default function HomePage() {
  return (
    <SectionLayout
      title="Welcome Home"
      subtitle="Sol · The Center"
      isSun={true}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-display-sm text-starlight">About Me</h2>
          <p className="text-body">
            {/* PLACEHOLDER: Add your personal introduction here */}
            This is where your story begins. A brief introduction about who you 
            are, what drives you, and what visitors can expect to find as they 
            explore the orbits of your Solar-folio.
          </p>
        </section>

        {/* Quick facts */}
        <section className="space-y-4">
          <h3 className="text-lg text-starlight font-medium">At a Glance</h3>
          <div className="grid gap-4">
            {/* PLACEHOLDER: Add your details */}
            <div className="glass-panel p-4 rounded-lg">
              <p className="text-caption text-stardust/60 mb-1">Location</p>
              <p className="text-starlight">Your City, Country</p>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <p className="text-caption text-stardust/60 mb-1">Focus</p>
              <p className="text-starlight">Your Primary Focus Area</p>
            </div>
            <div className="glass-panel p-4 rounded-lg">
              <p className="text-caption text-stardust/60 mb-1">Currently</p>
              <p className="text-starlight">What you're working on</p>
            </div>
          </div>
        </section>

        {/* Philosophy or motto */}
        <section className="space-y-4 pt-4">
          <blockquote className="border-l-2 border-solar-gold/50 pl-4 italic text-stardust">
            "Your personal motto or philosophy goes here."
          </blockquote>
        </section>
      </div>
    </SectionLayout>
  )
}