import React from 'react'

export default function InternshipsContent() {
  const internships = [
    {
      role: 'Web Developer Intern',
      company: 'V2V EdTech',
      period: 'June 2023',
      location: 'Kalyan, Thane, Maharashtra',
      description: 'I got to learn about Web development fundamentals including core HTML, CSS, JS, Bootstrap and PHP. Worked on a mini project that simulates real-world scenarios. Improved understanding of website structure and clean coding practices.',
      achievements: ['Backend PHP integration'],
    },
  ]

  return (
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
  )
}