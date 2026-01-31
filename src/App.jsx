import React, { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import DisclaimerModal from './components/ui/DisclaimerModal'
import EntryAnimation from './components/ui/EntryAnimation'
import SolarSystemView from './components/canvas/SolarSystem'
import InteractionLegend from './components/ui/InteractionLegend'

// Section Pages
import HomePage from './pages/HomePage'
import EducationPage from './pages/EducationPage'
import ProjectsPage from './pages/ProjectsPage'
import InternshipsPage from './pages/InternshipsPage'
import CertificatesPage from './pages/CertificatesPage'
import ContactPage from './pages/ContactPage'

// Unexplored Pages
import SaturnPage from './pages/unexplored/SaturnPage'
import UranusPage from './pages/unexplored/UranusPage'
import NeptunePage from './pages/unexplored/NeptunePage'

export default function App() {
  const [appState, setAppState] = useState('disclaimer') // disclaimer | intro | explore

  const handleDisclaimerAccept = useCallback(() => {
    setAppState('intro')
  }, [])

  const handleIntroComplete = useCallback(() => {
    setAppState('explore')
  }, [])

  return (
    <div className="app-container">
      <Routes>
        {/* Main Solar System View */}
        <Route
          path="/"
          element={
            <>
              {appState === 'disclaimer' && (
                <DisclaimerModal onAccept={handleDisclaimerAccept} />
              )}
              {appState === 'intro' && (
                <EntryAnimation onComplete={handleIntroComplete} />
              )}
              {appState === 'explore' && (
                <>
                  <SolarSystemView />
                  <InteractionLegend />
                </>
              )}
            </>
          }
        />

        {/* Interactive Section Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Unexplored Planets */}
        <Route path="/saturn" element={<SaturnPage />} />
        <Route path="/uranus" element={<UranusPage />} />
        <Route path="/neptune" element={<NeptunePage />} />
      </Routes>
    </div>
  )
}