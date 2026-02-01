import React from 'react'

export default function CertificatesContent() {
  const certificates = [
    {
      name: 'Prompt Engineering',
      issuer: 'Sololearn',
      date: '2024',
      credentialId: 'ABC123',
      link: 'https://www.sololearn.com/certificates/CC-8I4ONMWL',
    },
    {
      name: 'Vibe Coding',
      issuer: 'Sololearn',
      date: '2024',
      credentialId: 'ABC123',
      link: 'https://www.sololearn.com/certificates/CC-SO7ID9FZ',
    },
    {
      name: 'SQL',
      issuer: 'Sololearn',
      date: '2024',
      credentialId: 'ABC123',
      link: 'https://www.sololearn.com/certificates/CT-XEPTPNAH',
    },
    {
      name: 'JavaScript Intermediate',
      issuer: 'Sololearn',
      date: '2024',
      credentialId: 'ABC123',
      link: 'https://www.sololearn.com/certificates/CC-XN4IU3VU',
    },
  ]

  return (
    <div className="space-y-8">
      <p className="text-body">
        Formal recognitions of skills acquired and knowledge demonstrated.
      </p>

      <div className="grid gap-4">
        {certificates.map((cert, index) => (
          <article 
            key={index}
            className="glass-panel p-5 rounded-lg flex items-center justify-between group hover:border-planet-mars/30 transition-colors"
          >
            <div className="space-y-1">
              <h3 className="text-starlight font-medium group-hover:text-planet-mars transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-stardust">{cert.issuer}</p>
              <p className="text-caption text-stardust/60">{cert.date}</p>
            </div>
            
            {cert.link && (
              <a 
                href={cert.link}
                className="btn-secondary text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}