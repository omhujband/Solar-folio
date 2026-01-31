import React from 'react'
import UnexploredPage from '../../components/sections/UnexploredPage'

export default function SaturnPage() {
  return (
    <UnexploredPage
      title="Saturn"
      planetColor="#f4d59e"
      planetRadius={2}
      hasRings={true}
      texture="/textures/2k_saturn.jpg"
      ringTexture="/textures/2k_saturn_ring_alpha.png"
      uniqueLine="Even the grandest rings are made of countless small pieces, 
        orbiting patiently — proof that beauty emerges from fragments given time."
    />
  )
}