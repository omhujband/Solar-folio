import React from 'react'
import UnexploredPage from '../../components/sections/UnexploredPage'

export default function NeptunePage() {
  return (
    <UnexploredPage
      title="Neptune"
      planetColor="#4b70dd"
      planetRadius={1.7}
      texture="/textures/2k_neptune.jpg"
      uniqueLine="At the edge of the known, where light takes hours to arrive, 
        the deepest truths wait in patient silence — discovered only by those 
        willing to journey far."
    />
  )
}