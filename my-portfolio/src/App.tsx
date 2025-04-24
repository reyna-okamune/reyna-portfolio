import { useState } from 'react'
import NavBar from './NavBar.tsx'
import LandingPage from './LandingPage.tsx'
import AboutSection from './AboutPage.tsx'
import ContactPage from './ContactPage.tsx'
import './App.css'

function App() {


  return (
    <>
      < NavBar />

      <section id="landing">
        < LandingPage />
      </section>

      <section id="about">
        < AboutSection />
      </section>

      <section id="projects">
        <h1>Projects</h1>
        {/* Your projects */}
      </section>
      <section id="contact">
        < ContactPage />
      </section>
    </>
  )
}

export default App
