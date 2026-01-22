import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import TemplateDetails from './pages/TemplateDetails'
import Navigation from '../components/Navigation'
import MobileMenu from '../components/MobileMenu'
import Home from './pages/Home'
import TemplatesPage from './pages/TemplatesPage'
import Footer from '../components/Footer'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'
import Paquetes from './pages/Paquetes'
import SobreMi from './pages/SobreMi'

// Main App Component
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-dark text-cream antialiased selection:bg-primary selection:text-dark'>
      <Navigation toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/templates' element={<TemplatesPage />} />
        <Route path='/paquetes' element={<Paquetes />} />
        <Route path='/about' element={<SobreMi />} />
        <Route path='/template-details/:id' element={<TemplateDetails />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default App
