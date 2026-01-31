import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'

export default function InternshipsPage() {
  // PLACEHOLDER: Replace with your internships
  const internships = [
    {
      role: 'Software Engineering Intern',
      company: 'Company Name',
      period: 'Summer 2024',
      location: 'City, Country',
      description: 'What you worked on and what you learned.',
      achievements: ['Achievement 1', 'Achievement 2'],
    },
  ]

  return (
    <SectionLayout
      title="Internships"
      subtitle="Earth · Grounded Experience"
      planetColor="#4a90d9"
      planetRadius={1.9}
      texture="/textures/2k_earth_daymap.jpg"
    >
      <div className="space-y-8">
        <p className="text-body">
          Real-world experiences that bridged theory and practice.
        </p>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <article 
              key={index}
              className="glass-panel p-6 rounded-lg space-y-4"
            >
              <header>
                <h3 className="text-lg text-starlight font-medium">
                  {internship.role}
                </h3>
                <p className="text-planet-earth font-medium">
                  {internship.company}
                </p>
                <p className="text-caption text-stardust/60">
                  {internship.period} · {internship.location}
                </p>
              </header>

              <p className="text-body">{internship.description}</p>

              {internship.achievements && (
                <div className="space-y-2">
                  <p className="text-sm text-stardust/80">Key Contributions:</p>
                  <ul className="space-y-1">
                    {internship.achievements.map((item, i) => (
                      <li key={i} className="text-stardust text-sm flex items-start gap-2">
                        <span className="text-planet-earth mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}