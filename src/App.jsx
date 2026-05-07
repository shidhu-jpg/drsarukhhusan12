import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const toggle = () => setIsDark(d => !d)

  return (
    <div className="min-h-screen bg-dark">
      <Navbar isDark={isDark} onToggle={toggle} />
      <Hero isDark={isDark} />
      <About />
      <Services />
      <Projects isDark={isDark} />
      <Reviews isDark={isDark} />
      <Footer />
    </div>
  )
}
