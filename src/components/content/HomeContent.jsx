import React from 'react'

export default function HomeContent() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-display-sm text-starlight">About Me</h2>
        <p className="text-body">
          Computer Engineering undergraduate (BE, 2027) with hands-on experience in Flutter-based Android
          application development, and Web development. Strong foundation in Data Structures, OOP, DBMS,
          and SDLC. Experienced in building offline-first mobile apps, secure data handling
          tools, and database-driven web applications. Actively seeking Software Engineer / Android Developer
          internship opportunities.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg text-starlight font-medium">At a Glance</h3>
        <div className="grid gap-4">
          <div className="glass-panel p-4 rounded-lg">
            <p className="text-caption text-stardust/60 mb-1">Location</p>
            <p className="text-starlight">Dombivli, Thane, Maharashtra</p>
          </div>
          <div className="glass-panel p-4 rounded-lg">
            <p className="text-caption text-stardust/60 mb-1">Focus</p>
            <p className="text-starlight">Android App Developer</p>
          </div>
          <div className="glass-panel p-4 rounded-lg">
            <p className="text-caption text-stardust/60 mb-1">Currently</p>
            <p className="text-starlight">DeepFake Detection using CNN</p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-4">
        <blockquote className="border-l-2 border-solar-gold/50 pl-4 italic text-stardust">
          "Loyalty is a two-way street. If I ask it of you, you have it from me."
        </blockquote>
      </section>
    </div>
  )
}