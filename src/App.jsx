import { Routes, Route } from 'react-router-dom'
import Home from './screens/home/home.jsx'
import About from './screens/about/about.jsx'
import HardSkill from './screens/Skills/hardSkill.jsx'
import Contact from './screens/contact/contact.jsx'
import Certifications from './screens/certifications/certifications.jsx'
import Projects from './screens/projects/projetcts.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<HardSkill />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/projects" element={<Projects />} />
      
    </Routes>
  )
}

export default App