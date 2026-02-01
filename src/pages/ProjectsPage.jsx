import React from 'react'
import SectionLayout from '../components/sections/SectionLayout'
import ProjectsContent from '../components/content/ProjectsContent'

export default function ProjectsPage() {
  return (
    <SectionLayout
      title="Projects"
      subtitle="Venus · Radiant Creations"
      planetColor="#e6c87a"
      planetRadius={1.8}
      texture="/textures/2k_venus_surface.jpg"
    >
      <ProjectsContent />
    </SectionLayout>
  )
}