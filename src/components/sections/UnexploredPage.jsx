import React from 'react'
import { useNavigate } from 'react-router-dom'
import SectionLayout from './SectionLayout'

export default function UnexploredPage({
  title,
  planetColor,
  planetRadius = 2,
  hasRings = false,
  tilt = 0,
  texture,
  ringTexture,
  children,
}) {
  const navigate = useNavigate()

  return (
    <SectionLayout
      title={title}
      subtitle="Unexplored Region"
      planetColor={planetColor}
      planetRadius={planetRadius}
      hasRings={hasRings}
      tilt={tilt}
      texture={texture}
      ringTexture={ringTexture}
    >
      {children}
    </SectionLayout>
  )
}