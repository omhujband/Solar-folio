import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'
import ContactContent from '../components/content/ContactContent'
import { t } from '../utils/texturePath'

export default function ContactPage() {
  return (
    <SectionLayout
      title="Contact Me"
      subtitle="Jupiter · Gateway to Connection"
      planetColor="#d4a574"
      planetRadius={2.2}
      texture={t('/textures/2k_jupiter.jpg')}
    >
      <ContactContent />
    </SectionLayout>
  )
}