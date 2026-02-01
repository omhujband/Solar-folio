import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'
import HomeContent from '../components/content/HomeContent'

export default function HomePage() {
  return (
    <SectionLayout
      title="Welcome Home"
      subtitle="Sol · The Center"
      isSun={true}
    >
      <HomeContent />
    </SectionLayout>
  )
}