import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
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
          <Link to="/projects" onClick={closeMenu}>Projektet</Link>
          <Link to="/contact" className="btn" onClick={closeMenu}>Na Kontaktoni</Link>
        </nav>
      </div>
    </header>
  )
}