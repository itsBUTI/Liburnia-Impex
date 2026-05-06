import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import './Projects.css'

const projects = [
  {
    slug: 'liburnia-1',
    name: 'Liburnia 1',
    tagline: 'Kompleks Rezidencial & Komercial',
    location: 'Rrethrotullimi i Ortakollit, Prizren',
    locationLink: 'https://maps.app.goo.gl/gwkr4Q8F2nZL6FnD8',
    status: 'I Përfunduar',
    statusKey: 'done',
    year: '2025',
    floors: 6,
    units: { total: 24, available: 8, sold: 16 },
    types: ['1+1', '2+1'],
    sqm: { min: 55, max: 75 },
    amenities: ['Ashensor', 'Parking Privat', 'Hapësira për Magazina', 'Lokale (500m² & 1000m²)', 'Sigurim 24/7'],
    description:
      'Liburnia 1 ofron mundësi unike për zhvillimin e biznesit tuaj në një nga zonat më të frekuentuara të Prizrenit. Përveç apartamenteve moderne, ofrojmë lokale ekskluzive me sipërfaqe prej 500m² dhe 1000m², të përshtatshme për veprimtari të ndryshme komerciale, në shitje ose me qira. Gjithashtu, kompleksi disponon hapësira të bollshme të dedikuara për magazina, duke plotësuar çdo nevojë logjistike dhe afariste.',
    highlights: [
      { icon: '🏢', label: '6 Kate' },
      { icon: '🏬', label: 'Lokale 500-1000m²' },
      { icon: '📦', label: 'Hapësira Magazinimi' },
      { icon: '🚗', label: 'Parking Privat' },
    ],
    gallery: ['/images/l1-1.jpg', '/images/l1-2.jpg', '/images/l1-3.jpg'],
    coverImage: '/images/l1-1.jpg',
    floorPlan: {
      '1+1': { sqm: '55m²', bedrooms: 1, bathrooms: 'E mobiluar pjesërisht', price: 'Kontaktoni' },
      '2+1': { sqm: '75m²', bedrooms: 2, bathrooms: 'Pamje nga qyteti', price: 'Kontaktoni' },
      'Lokale': { sqm: '500-1000m²', bedrooms: 0, bathrooms: 'Qasje direkte në rrugë, tavan i lartë', price: 'Shitje/Qira' },
      'Magazina': { sqm: 'Sipas kërkesës', bedrooms: 0, bathrooms: 'Hyrje e pavarur, ventilim industrial', price: 'Kontaktoni' },
    },
  },
  {
    slug: 'liburnia-2',
    name: 'Liburnia 2',
    tagline: 'Kompleks Banesor & Afarist',
    location: 'Ukë Bytyqi, Prizren',
    locationLink: 'https://maps.app.goo.gl/gwkr4Q8F2nZL6FnD8',
    status: 'I Përfunduar',
    statusKey: 'done',
    year: '2025',
    floors: 5,
    units: { total: 20, available: 8, sold: 12 },
    types: ['1+1', '2+1', '3+1'],
    sqm: { min: 50, max: 95 },
    amenities: ['Ashensor', 'Parking Privat', 'Bodrum Magazinë', 'Hapësira Biznesi', 'Afër Autostradës'],
    description:
      'Liburnia 2 ndodhet në rrugën Ukë Bytyqi, një zonë me zhvillim të shpejtë dhe qasje të lehtë në autostradën kryesore. Ky kompleks 5-katësh kombinon apartamente moderne rezidenciale me hapësira biznesi të dizajnuara për nevojat e tregut bashkëkohor. Ndërtesa plotëson standardet më të larta të ndërtimit dhe ofron një mjedis jetësor të qetë dhe funksional.',
    highlights: [
      { icon: '🏢', label: '5 Kate' },
      { icon: '🚗', label: 'Parking Privat' },
      { icon: '🛗', label: 'Ashensor' },
      { icon: '💼', label: 'Hapësira Biznesi' },
    ],
    gallery: ['/images/l2-1.jpg', '/images/l2-2.jpg', '/images/l2-3.jpg'],
    coverImage: '/images/l2-1.jpg',
    floorPlan: {
      '1+1': { sqm: '50m²', bedrooms: 1, bathrooms: 1, price: 'Kontaktoni' },
      '2+1': { sqm: '70m²', bedrooms: 2, bathrooms: 1, price: 'Kontaktoni' },
      '3+1': { sqm: '95m²', bedrooms: 3, bathrooms: 2, price: 'Kontaktoni' },
    },
  },
]

export default function Projects() {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 })
    AOS.refresh()
  }, [])

  return (
    <div className="projects-page page-fade-in">
      {/* ── PAGE HERO ── */}
      <section className="proj-hero">
        <div className="proj-hero-bg" />
        <div className="proj-hero-overlay" />
        <div className="proj-hero-content container">
          <span className="proj-hero-tag" data-aos="fade-down">PROJEKTET TONA</span>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Ndërtesa Premium<br /><span>në Prizren</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Çdo projekt i Liburnia Impex është dëshmi e angazhimit tonë për cilësi,<br />
            dizajn modern dhe standarde evropiane të ndërtimit.
          </p>
          <div className="proj-hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="proj-hstat">
              <span className="proj-hstat-num">2</span>
              <span className="proj-hstat-label">Projekte</span>
            </div>
            <div className="proj-hstat-div" />
            <div className="proj-hstat">
              <span className="proj-hstat-num">44</span>
              <span className="proj-hstat-label">Njësi Gjithsej</span>
            </div>
            <div className="proj-hstat-div" />
            <div className="proj-hstat">
              <span className="proj-hstat-num">11</span>
              <span className="proj-hstat-label">Kate</span>
            </div>
            <div className="proj-hstat-div" />
            <div className="proj-hstat">
              <span className="proj-hstat-num">16</span>
              <span className="proj-hstat-label">Njësi të Disponueshme</span>
            </div>
          </div>
        </div>
        <div className="proj-hero-scroll">
          <div className="mouse" />
        </div>
      </section>

      {/* ── PROJECTS LIST ── */}
      <section className="proj-list">
        <div className="container">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`proj-card ${index % 2 === 1 ? 'proj-card--reversed' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image side */}
              <div className="proj-card-visual">
                <div className="proj-card-img-wrap">
                  <img src={project.coverImage} alt={project.name} className="proj-card-img" />
                  <div className="proj-card-img-overlay" />
                  <span className={`proj-card-status proj-status--${project.statusKey}`}>
                    {project.status}
                  </span>
                  {/* Thumbnail strip */}
                  <div className="proj-card-thumbs">
                    {project.gallery.slice(0, 3).map((img, i) => (
                      <div key={i} className="proj-thumb">
                        <img src={img} alt={`${project.name} ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info side */}
              <div className="proj-card-info">
                <div className="proj-card-meta">
                  <span className="proj-card-number">0{index + 1}</span>
                  <span className="proj-card-year">{project.year}</span>
                </div>

                <h2 className="proj-card-name">{project.name}</h2>
                <p className="proj-card-tagline">{project.tagline}</p>

                <a
                  href={project.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-card-location"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </a>

                <p className="proj-card-desc">{project.description}</p>

                {/* Highlights */}
                <div className="proj-card-highlights">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="proj-highlight">
                      <span className="proj-highlight-icon">{h.icon}</span>
                      <span className="proj-highlight-label">{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* Floor plans - Hidden for Liburnia 1 as requested */}
                {project.slug !== 'liburnia-1' && (
                  <div className="proj-card-plans">
                    <h4 className="proj-plans-title">Llojet e Apartamenteve</h4>
                    <div className="proj-plans-grid">
                      {Object.entries(project.floorPlan).map(([type, data]) => (
                        <div key={type} className="proj-plan-item">
                          <span className="proj-plan-type">{type}</span>
                          <span className="proj-plan-sqm">{data.sqm}</span>
                          <span className="proj-plan-rooms">
                            {data.bedrooms > 0 ? `${data.bedrooms} Hapësira` : data.bathrooms}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Availability bar - Hidden for Liburnia 1 as requested */}
                {project.slug !== 'liburnia-1' && (
                  <div className="proj-card-avail">
                    <div className="proj-avail-bar-wrap">
                      <div className="proj-avail-bar-labels">
                        <span>Disponueshmëria</span>
                        <span className="proj-avail-count">
                          {project.units.available} / {project.units.total} njësi
                        </span>
                      </div>
                      <div className="proj-avail-bar-track">
                        <div
                          className="proj-avail-bar-fill"
                          style={{ width: `${(project.units.available / project.units.total) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="proj-avail-stats">
                      <span className="proj-avail-stat avail">
                        <strong>{project.units.available}</strong> Disponueshme
                      </span>
                      <span className="proj-avail-stat sold">
                        <strong>{project.units.sold}</strong> Të Shitura
                      </span>
                      <span className="proj-avail-stat total">
                        <strong>{project.units.total}</strong> Gjithsej
                      </span>
                    </div>
                  </div>
                )}

                {/* Amenities */}
                <div className="proj-card-amenities">
                  {project.amenities.map((a, i) => (
                    <span key={i} className="proj-amenity">{a}</span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="proj-card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/project/${project.slug}`)}
                  >
                    Shiko Projektin
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                  <Link to="/contact" className="btn btn-secondary">Na Kontaktoni</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="proj-why">
        <div className="container">
          <div className="proj-why-header" data-aos="fade-up">
            <span className="proj-why-tag">PSE LIBURNIA IMPEX</span>
            <h2>Standarde Evropiane,<br />Çmime Konkurruese</h2>
            <p>Me mbi 35 vjet përvojë, Liburnia Impex ka ndërtuar reputacionin e saj mbi cilësi, integritet dhe inovacion.</p>
          </div>
          <div className="proj-why-grid">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                ),
                title: 'Materiale Premium',
                text: 'Çdo ndërtesë është ndërtuar me materiale të importit të certifikuara sipas standardeve BE.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Direkt nga Zhvilluesi',
                text: 'Pa ndërmjetës, pa komision agjentësh. Çmimet tona janë transparente dhe konkurruese.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: 'Dorëzim në Kohë',
                text: 'Respektojmë afatin e dorëzimit. Të gjitha projektet tona janë dorëzuar sipas planit.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ),
                title: 'Garancion Ligjor',
                text: 'Çdo blerje vjen me garancion të plotë ligjor dhe dokumente të rregullta pronësie.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: 'Lokacion Strategjik',
                text: 'Ndërtesa tona janë të vendosura në zonat me vlerën më të lartë të pasurive në Prizren.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                ),
                title: 'Plan Fleksibël Pagese',
                text: 'Ofrojmë mundësi pagese me këste, me kushte të favorshme për blerësit.',
              },
            ].map((item, i) => (
              <div key={i} className="proj-why-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="proj-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="proj-process">
        <div className="container">
          <div className="proj-process-header" data-aos="fade-up">
            <span className="proj-why-tag">PROCESI I BLERJES</span>
            <h2>Si të Bleni<br />Apartamentin Tuaj</h2>
          </div>
          <div className="proj-process-steps">
            {[
              { num: '01', title: 'Kontaktoni', text: 'Na kontaktoni për të caktuar një takim konsultimi falas.' },
              { num: '02', title: 'Zgjidhni Njësinë', text: 'Vizitoni projektin dhe zgjidhni apartamentin që i përshtatet nevojave tuaja.' },
              { num: '03', title: 'Kontrata', text: 'Nënshkruajmë kontratën me të gjitha kushtet e qarta dhe transparente.' },
              { num: '04', title: 'Dorëzimi', text: 'Merrni çelësat e shtëpisë suaj me të gjitha dokumentet ligjore në rregull.' },
            ].map((step, i) => (
              <div key={i} className="proj-step" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="proj-step-num">{step.num}</div>
                <div className="proj-step-connector" />
                <div className="proj-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="proj-cta" data-aos="fade-up">
        <div className="container">
          <div className="proj-cta-inner">
            <div className="proj-cta-text">
              <h2>Gati për të Investuar?</h2>
              <p>Na kontaktoni sot dhe merrni konsultën falas nga ekspertët tanë të pasurive të patundshme.</p>
            </div>
            <div className="proj-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Kontaktoni Tani
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="tel:+38344123456" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.48 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.08 6.08l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.6 16.92z" />
                </svg>
                Na Telefononi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
