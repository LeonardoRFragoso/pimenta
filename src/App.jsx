import React, { useState, useEffect } from 'react'
import AgeGate from './components/AgeGate'
import Header from './components/Header'
import Hero from './components/Hero'
import VibeSection from './components/VibeSection'
import Gallery from './components/Gallery'
import Manifesto from './components/Manifesto'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappFloatingButton from './components/WhatsappFloatingButton'

const WA_LINK = 'https://wa.me/5521976870833?text=Oi%20Luiza%2C%20vi%20a%20p%C3%A1gina%20da%20Melt%20Pimenta%20e%20queria%20falar%20com%20voc%C3%AA.'

export default function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const [ageRejected, setAgeRejected] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const confirmed = sessionStorage.getItem('melt_age_confirmed')
    if (confirmed === 'true') {
      setAgeConfirmed(true)
    }
    setChecked(true)
  }, [])

  const handleConfirm = () => {
    sessionStorage.setItem('melt_age_confirmed', 'true')
    setAgeConfirmed(true)
  }

  const handleReject = () => {
    setAgeRejected(true)
  }

  if (!checked) return null

  if (ageRejected) {
    return (
      <div className="min-h-screen bg-deep flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-cream/60 text-xl font-display">Conteúdo indisponível.</p>
        </div>
      </div>
    )
  }

  if (!ageConfirmed) {
    return <AgeGate onConfirm={handleConfirm} onReject={handleReject} />
  }

  return (
    <div className="relative bg-deep min-h-screen grain">
      <Header waLink={`https://wa.me/5521976870833`} />
      <main>
        <Hero waLink={WA_LINK} />
        <VibeSection />
        <Gallery />
        <Manifesto />
        <Contact waLink={WA_LINK} />
      </main>
      <Footer />
      <WhatsappFloatingButton waLink={WA_LINK} />
    </div>
  )
}
