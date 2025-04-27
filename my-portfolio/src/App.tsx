
import NavBar from './NavBar.tsx'
import LandingPage from './LandingPage.tsx'
import AboutSection from './AboutPage.tsx'
import Projects from './ProjectsPage.tsx'
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
        <Projects />
      </section>

      <section id="contact">
        < ContactPage />
      </section>
    </>
  )
}

export default App
