import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'

export default function EducationPage() {
  const education = [
    {
      degree: 'Your Degree',
      institution: 'University Name',
      period: '2020 - 2024',
      description: 'Brief description of your studies and achievements.',
      highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
    },
  ]

  return (
    <SectionLayout
      title="Education"
      subtitle="Mercury · The Swift Learner"
      planetColor="#b5b5b5"
      planetRadius={1.5}
      texture="/textures/2k_mercury.jpg"
    >
      <div className="space-y-8">
        <p className="text-body">
          The foundations of knowledge that shaped this journey.
        </p>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <article 
              key={index}
              className="glass-panel p-6 rounded-lg space-y-4"
            >
              <header>
                <h3 className="text-lg text-starlight font-medium">
                  {edu.degree}
                </h3>
                <p className="text-stardust">{edu.institution}</p>
                <p className="text-caption text-stardust/60">{edu.period}</p>
              </header>
              
              <p className="text-body">{edu.description}</p>
              
              {edu.highlights && (
                <ul className="space-y-1">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="text-stardust text-sm flex items-start gap-2">
                      <span className="text-planet-mercury mt-1">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}