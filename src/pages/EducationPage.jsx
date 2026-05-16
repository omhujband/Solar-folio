import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'
import EducationContent from '../components/content/EducationContent'
import { t } from '../utils/texturePath'

export default function EducationPage() {
  return (
    <SectionLayout
      title="Education"
      subtitle="Mercury · The Swift Learner"
      planetColor="#b5b5b5"
      planetRadius={1.5}
      texture={t('/textures/2k_mercury.jpg')}
    >
      <EducationContent />
    </SectionLayout>
  )
}