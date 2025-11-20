
import NavBar from './NavBar.tsx'
import LandingPage from './LandingPage.tsx'
import AboutSection from './AboutPage.tsx'
import LessonsSection from './LessonsPage.tsx'

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

      <section id="lessons">
        < LessonsSection />
      </section>


    </>
  )
}

export default App
