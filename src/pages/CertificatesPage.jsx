import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'

export default function CertificatesPage() {
  // PLACEHOLDER: Replace with your certificates
  const certificates = [
    {
      name: 'Certificate Name',
      issuer: 'Issuing Organization',
      date: 'Month 2024',
      credentialId: 'ABC123',
      link: '#',
    },
  ]

  return (
    <SectionLayout
      title="Certificates"
      subtitle="Mars · Achievements Earned"
      planetColor="#cd5c5c"
      planetRadius={1.6}
      texture="/textures/2k_mars.jpg"
    >
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
    </SectionLayout>
  )
}