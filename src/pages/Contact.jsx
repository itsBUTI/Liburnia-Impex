import { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import './Contact.css'

function Contact() {
  useEffect(() => {
    AOS.refresh()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Faleminderit për mesazhin tuaj! Do t\'ju kontaktojmë së shpejti.')
    setFormData({ name: '', email: '', phone: '', project: '', message: '' })
  }

  return (
    <div className="contact page-fade-in">
      <section className="page-header">
        <div className="container">
          <span className="page-tag" data-aos="fade-down">KONTAKTI</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Na <span>Kontaktoni</span></h1>
          <p data-aos="fade-up" data-aos-delay="200">Jemi këtu për t\'ju ndihmuar me çdo pyetje mbi investimet tuaja</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section" data-aos="fade-right">
              <h2>Dërgo një Mesazh</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Emri i Plotë</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Numri i Telefonit</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="project">Projekti i Interesuar</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                  >
                    <option value="">Zgjedhni një projekt</option>
                    <option value="tower">Liburnia 1</option>
                    <option value="residence">Liburnia 2</option>
        
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesazhi</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Dërgo Mesazhin</button>
              </form>
            </div>

            <div className="contact-info-section" data-aos="fade-left" data-aos-delay="200">
              <h2>Informacionet e Kontaktit</h2>
              <div className="info-cards">
                <div className="info-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3>Adresa</h3>
                    <p>Rr. Ukë Bytyçi</p>
                    <p>Prizren 20000, Kosovë</p>
                  </div>
                </div>
                <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h3>Telefoni</h3>
                    <p><a href="tel:+38349119369">049 119 369</a></p>
                    <p><a href="tel:+38349761420">049 761 420</a></p>
                  </div>
                </div>
                <div className="info-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:[EMAIL_ADDRESS]">liburnia.impex@gmail.com</a></p>
                  </div>
                </div>
                <div className="info-card" data-aos="fade-up" data-aos-delay="400">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <h3>Orari i Punës</h3>
                    <p>Hen - Pre: 08:00 - 18:00</p>
                    <p>Sht: 09:00 - 14:00</p>
                    <p>Die: Mbyllur</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-cta" data-aos="fade-up" data-aos-delay="500">
                <h3>Gati për të investuar?</h3>
                <p>Na kontaktoni për një takim konsulte falas</p>
                <a href="tel:+38349761420" className="btn btn-primary btn-full">Cakto Takim</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 data-aos="fade-up">Na Gjeni</h2>
          <div className="map-container" data-aos="fade-up" data-aos-delay="100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0663663274616!2d20.74189831547881!3d42.3688248791867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCMjIxMS0yMSwgQnXhara4IEtoYW5h!5e0!3m2!1sen!2s!4v1640000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Liburnia Impex Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact