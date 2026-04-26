import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src="/logo.png" alt="Liburnia Impex" />
              <span>LIBURNIA <strong>IMPEX</strong></span>
            </Link>
            
            <button 
              className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={closeMenu}>Kreu</Link>
              <Link to="/about" onClick={closeMenu}>Rreth Nesh</Link>
              <Link to="/contact" className="btn" onClick={closeMenu}>Na Kontaktoni</Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>LIBURNIA <span>IMPEX</span></h3>
                <p>Kompani zhvillimi i pasurive të patundshme në Prizren. Ndërtojmë shtëpi të sigurta dhe moderne për të ardhmen tuaj.</p>
              </div>
              <div className="footer-section">
                <h4>Kontakti</h4>
                <p>📍 Rr. Ukë Bytyçi, Prizren 20000</p>
                <p>📞 <a href="tel:+38349761420">+383 49 761 420</a></p>
                <p>✉️ <a href="mailto:info@liburnia-impex.com">info@liburnia-impex.com</a></p>
              </div>
              <div className="footer-section">
                <h4>Orari</h4>
                <p>Hen - Pre: 08:00 - 18:00</p>
                <p>Sht: 09:00 - 14:00</p>
                <p>Die: Mbyllur</p>
              </div>
              <div className="footer-section">
                <h4>Shërbimet</h4>
                <p>Zhvillimi i ndërtesave</p>
                <p>Shitje apartamentesh</p>
                <p>Qira comerciale</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2026 Liburnia Impex. Të gjitha të drejtat e rezervuara.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App