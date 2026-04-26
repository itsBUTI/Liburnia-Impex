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
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag" data-aos="fade-down">ZHVILLIMI I PASURIVE TË PATUNDSHME</span>
          <h1 data-aos="fade-up" data-aos-delay="100">NDËRTOJMË <span>TË ARDHMEN</span></h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">Apartamente dhe Hapësira Biznesi në Prizren</p>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            Liburnia Impex është kompania lider në zhvillimin e pasurive të patundshme në Prizren. 
            Ndërtojmë ndërtesa moderne, cilësore me çmime konkurruese.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <Link to="/project/liburnia-tower" className="btn btn-primary">Shiko Projektin E Pare</Link>
            <Link to="/contact" className="btn btn-secondary">Na Kontaktoni</Link>
          </div>
        </div>
        <div className="hero-scroll" data-aos="fade-up" data-aos-delay="500">
          <span></span>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 data-aos="fade-up">Përvoja që Ndërton Besim</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Me mbi 15 vjet përvojë në zhvillimin e pasurive të patundshme, Liburnia Impex është bërë 
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
                <span className="istat-num">15+</span>
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
              <div className="feature-icon">🏗️</div>
              <h3>Ndërtim i Level</h3>
              <p>Ndërtesa të ndërtuara me materiale cilësore dhe standarde evropiane</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">📍</div>
              <h3>Zona Premium</h3>
              <p>Lokacione në zemër të qytetit me qasje të shkëlqyer</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">💰</div>
              <h3>Çmime Konkuruese</h3>
              <p>Çmimet më të mira në treg për cilësi të lartë</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">🤝</div>
              <h3>Pa Ndërmjetës</h3>
              <p>Blerje direkt nga zhvilluesi - pa komision agjentësh</p>
            </div>
          </div>
        </div>
      </section>

      <section className="properties-section">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Projektet e Fundit</h2>
            <p data-aos="fade-up" data-aos-delay="100">Shiko projektet tona më të fundit në Prizren</p>
          </div>
          <div className="properties-grid">
            <div className="property-card" onClick={() => handleProjectClick('liburnia-tower')} data-aos="fade-up" data-aos-delay="100">
              <div className="property-image">
                <span className="property-status">NË NDËRTIM</span>
                <span className="property-icon">🏢</span>
              </div>
              <div className="property-info">
                <h3>Liburnia Tower</h3>
                <p className="property-location">📍 Qendër, Prizren</p>
                <div className="property-details">
                  <span>2+1, 3+1</span>
                  <span>12 kate</span>
                  <span>Parking</span>
                </div>
                <p className="property-price">Nga €55,000</p>
                <span className="property-link">Shiko Detaje →</span>
              </div>
            </div>
            <div className="property-card" onClick={() => handleProjectClick('liburnia-residence')} data-aos="fade-up" data-aos-delay="200">
              <div className="property-image">
                <span className="property-status">NË NDËRTIM</span>
                <span className="property-icon">🏢</span>
              </div>
              <div className="property-info">
                <h3>Liburnia Residence</h3>
                <p className="property-location">📍 Shatërvan, Prizren</p>
                <div className="property-details">
                  <span>1+1, 2+1</span>
                  <span>6 kate</span>
                  <span>Parking</span>
                </div>
                <p className="property-price">Nga €45,000</p>
                <span className="property-link">Shiko Detaje →</span>
              </div>
            </div>
            <div className="property-card" onClick={() => handleProjectClick('liburnia-business')} data-aos="fade-up" data-aos-delay="300">
              <div className="property-image">
                <span className="property-status done">I PËRFUNDUAR</span>
                <span className="property-icon">🏢</span>
              </div>
              <div className="property-info">
                <h3>Liburnia Business</h3>
                <p className="property-location">📍 Ukë Bytyçi, Prizren</p>
                <div className="property-details">
                  <span>Hapësira Biznesi</span>
                  <span>3 kate</span>
                  <span>Qendër</span>
                </div>
                <p className="property-price">Nga €80,000</p>
                <span className="property-link">Shiko Detaje →</span>
              </div>
            </div>
          </div>
          <div className="section-cta" data-aos="fade-up">
            <Link to="/contact" className="btn btn-primary">Na Kontaktoni për Më Shumë Projekte</Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Shërbimet Tona</h2>
            <p data-aos="fade-up" data-aos-delay="100">Një Spectrum i plotë shërbimesh për pasuri të patundshme</p>
          </div>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">🏠</div>
              <h3>Zhvillim Ndërtesash</h3>
              <p>Zhvillim i plotë nga koncepti deri te ndërtimi i ndërtesave rezidenciale dhe comerciale.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">🔑</div>
              <h3>Shitje Apartamentesh</h3>
              <p>Blerje direkt nga zhvilluesi. Apartamente moderne në lokacione prime.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">🏪</div>
              <h3>Hapësira Biznesi</h3>
              <p>Shops, zyra dhe hapësira comerciale në qendër të qytetit.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <div className="service-icon">⚙️</div>
              <h3>Menaxhim Pronash</h3>
              <p>Mirëmbajtje dhe menaxhim afatgjatë i ndërtesave tona.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 data-aos="fade-up">Gati për të Investuar?</h2>
            <p data-aos="fade-up" data-aos-delay="100">Na kontaktoni për një konsultë falas mbi mundësitë e investimit</p>
            <Link to="/contact" className="btn btn-white" data-aos="fade-up" data-aos-delay="200">Na Kontaktoni Tani</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home