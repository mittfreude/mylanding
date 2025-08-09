import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SecondaryHero from './components/SecondaryHero'
import Features from './components/Features'
import ProjectTypes from './components/ProjectTypes'
import PaymentSection from './components/PaymentSection'
import PersonalizationSection from './components/PersonalizationSection'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FounderMemo from './components/FounderMemo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SecondaryHero />
      <Features />
      <ProjectTypes />
      <PaymentSection />
      <PersonalizationSection />
      <HowItWorks />
      <Pricing />
      <FounderMemo />
      <Footer />
    </div>
  )
}

export default App
