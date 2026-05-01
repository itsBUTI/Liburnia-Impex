import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`)
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <img src="/images/hero1.jpg" alt="Liburnia Building" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag" data-aos="fade-down">ZHVILLIMI I PASURIVE TË PATUNDSHME</span>
          <h1 data-aos="fade-up" data-aos-delay="100">NDËRTOJMË <span>TË ARDHMEN</span></h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">Apartamente dhe Hapësira Biznesi në Prizren</p>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            Liburnia Impex është kompania lider në zhvillimin e pasurive të patundshme në Prizren. 
            Ndërtojmë ndërtesa moderne, cilësore me standarde evropiane.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <Link to="/project/liburnia-1" className="btn btn-primary">Shiko Projektin</Link>
            <Link to="/contact" className="btn btn-secondary">Na Kontaktoni</Link>
          </div>
        </div>
        <div className="hero-scroll" data-aos="fade-up" data-aos-delay="500">
          <span>Zbulo më shumë</span>
          <div className="mouse"></div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 data-aos="fade-up">Përvoja që Ndërton Besim</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Me mbi 35 vjet përvojë në zhvillimin e pasurive të patundshme, Liburnia Impex është bërë 
              sinonim i cilësisë dhe besimit në tregun e pasurive të patundshme në Kosovë. Çdo projekt i ndërtuar 
              është dëshmi e angazhimit tonë për ekselencë.
            </p>
            <div className="intro-stats" data-aos="fade-up" data-aos-delay="200">
              <div className="istat">
                <span className="istat-num">500+</span>
                <span className="istat-label">Apartamente të Shitura</span>
              </div>
              <div className="istat">
                <span className="istat-num">50+</span>
                <span className="istat-label">Ndërtesa të Ndërtuara</span>
              </div>
              <div className="istat">
                <span className="istat-num">37+</span>
                <span className="istat-label">Vite Përvojë</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Pse të Zgjidhni Liburnia Impex</h2>
            <p data-aos="fade-up" data-aos-delay="100">Bëhemi partneri juaj për investimin më të sigurt në pasuri të patundshme</p>
          </div>
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Ndërtim Premium</h3>
              <p>Ndërtesa të ndërtuara me materiale cilësore dhe standarde evropiane</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3>Zona Ekskluzive</h3>
              <p>Lokacione në zemër të qytetit me qasje të shkëlqyer</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>Investim i Sigurt</h3>
              <p>Vlera e pronës rritet me kalimin e kohës falë lokacionit</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>Pa Ndërmjetës</h3>
              <p>Blerje direkt nga zhvilluesi - pa komision agjentësh</p>
            </div>
          </div>
        </div>
      </section>

      <section className="properties-section">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Projektet Tona Ekskluzive</h2>
            <p data-aos="fade-up" data-aos-delay="100">Zbuloni hapësirat tona moderne të banimit dhe biznesit</p>
          </div>
          <div className="properties-grid">
            <div className="property-card" onClick={() => handleProjectClick('liburnia-1')} data-aos="fade-up" data-aos-delay="100">
              <div className="property-image">
                <img src="/images/l1-1.jpg" alt="Liburnia 1" />
                <span className="property-status done">I PËRFUNDUAR</span>
              </div>
              <div className="property-info">
                <h3>Liburnia 1</h3>
                <p className="property-location">
                  <a href="https://maps.app.goo.gl/gwkr4Q8F2nZL6FnD8" target="_blank" rel="noopener noreferrer">
                    📍 Rrethrotullimi i Ortakollit, Prizren
                  </a>
                </p>
                <div className="property-details">
                  <span>1+1, 2+1</span>
                  <span>6 kate</span>
                  <span>Ashensor & Parking</span>
                </div>
                <div className="property-footer">
                  <span className="property-price">Kontaktoni</span>
                  <span className="property-link">Shiko Detaje <span>→</span></span>
                </div>
              </div>
            </div>

            <div className="property-card" onClick={() => handleProjectClick('liburnia-2')} data-aos="fade-up" data-aos-delay="200">
              <div className="property-image">
                <img src="/images/l2-1.jpg" alt="Liburnia 2" />
                <span className="property-status done">I PËRFUNDUAR</span>
              </div>
              <div className="property-info">
                <h3>Liburnia 2</h3>
                <p className="property-location">
                  <a href="https://maps.app.goo.gl/gwkr4Q8F2nZL6FnD8" target="_blank" rel="noopener noreferrer">
                    📍 Ukë Bytyqi, Prizren
                  </a>
                </p>
                <div className="property-details">
                  <span>1+1, 2+1, 3+1</span>
                  <span>5 kate</span>
                  <span>Hapësira Biznesi</span>
                </div>
                <div className="property-footer">
                  <span className="property-price">Kontaktoni</span>
                  <span className="property-link">Shiko Detaje <span>→</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cta text-center" data-aos="fade-up">
            <Link to="/contact" className="btn btn-outline">Na Kontaktoni për Më Shumë</Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Shërbimet Tona</h2>
            <p data-aos="fade-up" data-aos-delay="100">Një spektër i plotë shërbimesh për pasuri të patundshme</p>
          </div>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3>Zhvillim Ndërtesash</h3>
              <p>Zhvillim i plotë nga koncepti deri te ndërtimi i ndërtesave rezidenciale dhe comerciale me standarde evropiane.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Hapësira Biznesi</h3>
              <p>Dyqane, zyra dhe hapësira komerciale në qendër të qytetit për biznesin tuaj të suksesshëm.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
              </div>
              <h3>Menaxhim Pronash</h3>
              <p>Mirëmbajtje profesionale dhe menaxhim afatgjatë i ndërtesave dhe pronave tuaja.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 data-aos="fade-up">Gati për të Investuar?</h2>
            <p data-aos="fade-up" data-aos-delay="100">Na kontaktoni sot për një konsultë falas mbi mundësitë e investimit në Prizren.</p>
            <Link to="/contact" className="btn btn-primary" data-aos="fade-up" data-aos-delay="200">Kontaktoni Ekipin Tonë</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home