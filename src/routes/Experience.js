import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import ExperienceContent from '../components/ExperienceContent'

export default function Experience() {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="EXPERIENCE" text="My professional journey and industry training history." />
      <ExperienceContent />
      <Footer />
    </div>
  )
}
