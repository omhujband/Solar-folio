import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'
import InternshipsContent from '../components/content/InternshipsContent'
import { t } from '../utils/texturePath'

export default function InternshipsPage() {
  return (
    <SectionLayout
      title="Internships"
      subtitle="Earth · Grounded Experience"
      planetColor="#4a90d9"
      planetRadius={1.9}
      texture={t('/textures/2k_earth_daymap.jpg')}
    >
      <InternshipsContent />
    </SectionLayout>
  )
}