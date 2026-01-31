import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'

export default function ContactPage() {
  // PLACEHOLDER: Replace with your contact info
  const contacts = [
    { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: '#' },
    { label: 'GitHub', value: 'github.com/yourusername', href: '#' },
  ]

  return (
    <SectionLayout
      title="Contact Me"
      subtitle="Jupiter · Gateway to Connection"
      planetColor="#d4a574"
      planetRadius={2.2}
      texture="/textures/2k_jupiter.jpg"
    >
      <div className="space-y-8">
        <p className="text-body">
          The largest planet marks the boundary of the interactive regions — 
          and the beginning of new conversations.
        </p>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="glass-panel p-5 rounded-lg block group hover:border-planet-jupiter/30 transition-colors"
              target={contact.href.startsWith('mailto') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              <p className="text-caption text-stardust/60 mb-1">
                {contact.label}
              </p>
              <p className="text-starlight group-hover:text-planet-jupiter transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="pt-4">
          <p className="text-stardust/60 text-sm italic">
            Open to conversations about collaboration, opportunities, or just 
            sharing ideas about the cosmos.
          </p>
        </div>
      </div>
    </SectionLayout>
  )
}