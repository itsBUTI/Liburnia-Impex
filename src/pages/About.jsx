import { useEffect } from 'react'
import AOS from 'aos'
import './About.css'

function About() {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="about page-fade-in">
      <section className="page-header">
        <div className="container">
          <span className="page-tag" data-aos="fade-down">RRETH NESH</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Partneri Juaj i <span>Besueshëm</span> Immobiliar</h1>
          <p data-aos="fade-up" data-aos-delay="200">Më shumë se 37 vjet përvojë në zhvillimin e pasurive të patundshme në Kosovë</p>
        </div>
      </section>

      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div className="about-content" data-aos="fade-right">
              <h2>Historia Jonë</h2>
              <p>
                <strong>Liburnia Impex</strong> është themeluar në vitin 1989, duke nisur aktivitetin e saj fillestar në tregtimin e materialeve ndërtimore. Me kalimin e viteve dhe përmes përvojës së fituar në industrinë e ndërtimit, kompania ka evoluar në një zhvillues të plotë të pasurive të patundshme.
              </p>
              <p>
                Sot, Liburnia Impex përfaqëson një emër të konsoliduar në sektorin e ndërtimit dhe zhvillimit imobiliar, me një portofol të gjerë projektesh të realizuara në Prizren dhe zonat përreth.
              </p>
              <p>
                Misioni ynë ka qenë gjithmonë i njëjtë: të ndërtojmë hapësira moderne banimi dhe biznesi që kombinojnë cilësinë e lartë të ndërtimit me funksionalitetin dhe vlerën afatgjatë për klientët dhe investitorët tanë.
              </p>
              <div className="about-features">
                <div className="af-item">
                  <span className="af-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Themeluar në 1989</span>
                </div>
                <div className="af-item">
                  <span className="af-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>500+ apartamente të shitura</span>
                </div>
                <div className="af-item">
                  <span className="af-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>50+ ndërtesa të ndërtuara</span>
                </div>
              </div>
            </div>
            <div className="about-image" data-aos="fade-left" data-aos-delay="200">
              <img src="../images/hero1.jpg" alt="Liburnia Impex" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card hover-lift" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3>Misioni</h3>
              <p>Të krijojmë hapësira moderne, funksionale dhe të qëndrueshme që përmirësojnë jetesën urbane dhe ofrojnë investime të sigurta.</p>
            </div>
            <div className="mission-card" data-aos="fade-up" data-aos-delay="200">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
              </div>
              <h3>Vizioni</h3>
              <p>Të bëhemi një nga zhvilluesit më të besuar immobiliarë në Kosovë duke ofruar projekte cilësore dhe vlerë afatgjatë pronash.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Pse të Zgjidhni Liburnia Impex</h2>
            <p data-aos="fade-up" data-aos-delay="100">Ato që na bëjnë të veçantë në treg</p>
          </div>
          <div className="values-grid">
            <div className="value-card hover-lift" data-aos="fade-up" data-aos-delay="100">
              <span className="value-num">01</span>
              <h3>Zhvillim i Plotë</h3>
              <p>Ne ndërtojmë dhe shërbejmë vetë - pa ndërmjetës, pa komision agjentësh. Ju bleni drejtpërdrejt nga zhvilluesi.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <span className="value-num">02</span>
              <h3>Cilësi e Lartë</h3>
              <p>Ndërtesat tona ndërtohen me materialet më të mira dhe standarde evropiane. Cilësi që zgjat.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <span className="value-num">03</span>
              <h3>Lokacione Prime</h3>
              <p>Të gjitha projektet tona gjenden në lokacione të zgjedhura në zemër të qytetit ose zona në rritje.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="400">
              <span className="value-num">04</span>
              <h3>Çmime Konkuruese</h3>
              <p>Çmimet më të mira në treg për cilësinë e ofruar. Investim i sigurt me rritje vlere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <span className="stat-number">37+</span>
              <span className="stat-label">Vite Përvojë</span>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <span className="stat-number">500+</span>
              <span className="stat-label">Apartamente</span>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <span className="stat-number">50+</span>
              <span className="stat-label">Ndërtesa</span>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
              <span className="stat-number">100%</span>
              <span className="stat-label">Kënaqësi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About