import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg-glow"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section hover-lift">
            <h3>LIBURNIA <span>IMPEX</span></h3>
            <p>Kompani zhvillimi i pasurive të patundshme në Prizren. Ndërtojmë shtëpi të sigurta dhe moderne për të ardhmen tuaj.</p>
          </div>
          <div className="footer-section hover-lift">
            <h4>Na Kontaktoni</h4>
            <p>📍 Rr. Ukë Bytyçi, Prizren</p>
            <p>📞 <a href="tel:+38349119369">049 119 369</a></p>
            <p>📞 <a href="tel:+38349761420">049 761 420</a></p>
            <p>✉️ liburnia.impex@gmail.com</p>
          </div>
          <div className="footer-section hover-lift">
            <h4>Orari</h4>
            <p>Hen - Pre: 08:00 - 18:00</p>
            <p>Sht: 09:00 - 14:00</p>
            <p>Die: Mbyllur</p>
          </div>
          <div className="footer-section hover-lift">
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
  )
}