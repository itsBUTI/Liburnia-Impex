import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
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
            <p>✉️ <a href="mailto:liburnia.impex@gmail.com">liburnia.impex@gmail.com</a></p>
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
  )
}