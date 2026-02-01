import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'
import CertificatesContent from '../components/content/CertificatesContent'

export default function CertificatesPage() {
  return (
    <SectionLayout
      title="Certificates"
      subtitle="Mars · Achievements Earned"
      planetColor="#cd5c5c"
      planetRadius={1.6}
      texture="/textures/2k_mars.jpg"
    >
      <CertificatesContent />
    </SectionLayout>
  )
}