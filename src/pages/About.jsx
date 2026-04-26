import { useEffect } from 'react'
import AOS from 'aos'
import './About.css'

function About() {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="about">
      <section className="page-header">
        <div className="container">
          <span className="page-tag" data-aos="fade-down">RRETH NESH</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Partneri Juaj i <span>Besueshëm</span> Immobiliar</h1>
          <p data-aos="fade-up" data-aos-delay="200">Më shumë se 15 vjet përvojë në zhvillimin e pasurive të patundshme në Kosovë</p>
        </div>
      </section>

      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div className="about-content" data-aos="fade-right">
              <h2>Historia Jonë</h2>
              <p>
                <strong>Liburnia Impex</strong> është themeluar në vitin 2008 si një kompani e specializuar në ndërtimin dhe zhvillimin e pasurive të patundshme. 
                Që atëherë, ne kemi ndërtuar mbi shumë ndërtesa në Prizren dhe zonat përreth.
              </p>
              <p>
                Misioni ynë ka qenë gjithmonë i njëjtë: të ofrojmë hapësira jetese dhe biznesi cilësore që sjellin vlerë afatgjatë për investitorët tanë. 
                Sot, Liburnia Impex njihet si një nga zhvilluesit më të besuar immobiliarë në rajon.
              </p>
              <div className="about-features">
                <div className="af-item">
                  <span className="af-icon">✓</span>
                  <span>Mbi 500 apartamente të shitura</span>
                </div>
                <div className="af-item">
                  <span className="af-icon">✓</span>
                  <span>50+ ndërtesa të ndërtuara</span>
                </div>
                <div className="af-item">
                  <span className="af-icon">✓</span>
                  <span>100% kënaqësi e klientëve</span>
                </div>
              </div>
            </div>
            <div className="about-image" data-aos="fade-left" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1545328608-91dbbf8b77d2?w=800&q=80" alt="Liburnia Impex" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-icon">🎯</div>
              <h3>Misioni</h3>
              <p>Të krijojmë hapësira moderne, funksionale dhe të qëndrueshme që përmirësojnë jetesën urbane dhe ofrojnë investime të sigurta.</p>
            </div>
            <div className="mission-card" data-aos="fade-up" data-aos-delay="200">
              <div className="mission-icon">🔭</div>
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
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <span className="value-num">01</span>
              <h3>Zhvillim i Plote</h3>
              <p>Ne ndërtojmë dhe shërbejmë vetë - pa ndërmjetës, pa komision agjentësh. Ju bleni drejtpërdrejt nga zhvilluesi.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <span className="value-num">02</span>
              <h3>Cilësi e Lartë</h3>
              <p>Ndërtesat tona ndërtohen me materiale më të mira dhe standarde evropiane. Cilësi që zgjat.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <span className="value-num">03</span>
              <h3>Lokacione Prime</h3>
              <p>Të gjitha projektet tona gjenden në lokacione të zgjedhura në zemër të qytetit ose zona në rritje.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="400">
              <span className="value-num">04</span>
              <h3>Çmime Konkuruese</h3>
              <p>Çmimet më të mira në treg për cilësinë e ofruar. Investim i sigurt me rritje valori.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <span className="stat-number">15+</span>
              <span className="stat-label">Vite Përvojë</span>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <span className="stat-number">500+</span>
              <span className="stat-label">Apartamente të Shitura</span>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <span className="stat-number">50+</span>
              <span className="stat-label">Ndërtesa të Ndërtuara</span>
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