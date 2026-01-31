import React from 'react'
import UnexploredPage from '../../components/sections/UnexploredPage'

export default function UranusPage() {
  return (
    <UnexploredPage
      title="Uranus"
      planetColor="#7de3f4"
      planetRadius={1.8}
      tilt={Math.PI * 0.5}
      texture="/textures/2k_uranus.jpg"
      uniqueLine="Sometimes the most profound perspectives come from tilting 
        your axis — seeing the universe from an angle no one else considered."
    />
  )
}