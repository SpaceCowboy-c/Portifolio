import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importe sua Navbar (Ajuste o caminho se necessário)
import Navbar from './components/navbar/navbar.jsx'

// Suas Telas
import Home from './screens/home/home.jsx'
import About from './screens/about/about.jsx'
import HardSkill from './screens/Skills/hardSkill.jsx'
import Contact from './screens/contact/contact.jsx'
import Certifications from './screens/certifications/certifications.jsx'
import Projects from './screens/projects/projetcts.jsx'

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) {
    return (
      <div className="mobile-app">
        <Home isMobile={isMobile} />
        <About />
        <HardSkill />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    )
  }
  return (
    <div className="desktop-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<HardSkill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App