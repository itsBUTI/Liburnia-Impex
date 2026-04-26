import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import './ProjectDetail.css'

const projectsData = {
  'liburnia-tower': {
    name: 'Liburnia Tower',
    location: 'Qendër, Prizren',
    description: 'Liburnia Tower është ndërtesa jonë flagship - një kullë moderne 12-katëshe në zemër të qytetit të Prizrenit.',
    fullDescription: 'Liburnia Tower përfaqëson kulmin e arkitekturës moderne në Prizren. Ndërtesa 12-katëshe ndodhet në zemër të qytetit, me qasje të shkëlqyer në të gjitha pikat kryesore të qytetit. Çdo apartament është projektuar me vëmendje ndaj detajeve, duke përfshirë dritare të mëdha që lejojnë dritë natyrale dhe pamje panorama.',
    details: ['12 kate', '2+1, 3+1, Penthouse', 'Ashensor', 'Parking', 'Sistem Ngrohje Qendrore', 'Siguri 24/7'],
    features: ['Pamje panoramike e qytetit', 'Bodrum me parking', 'Ashensor i shpejtë', 'Sistem ngrohje qendrore', 'Camerat e sigurisë', 'Recepsion', 'Tarracë në kulm'],
    price: 'Nga €55,000',
    status: 'Në Ndërtim',
    year: '2026',
    completion: 'Qershor 2026',
    units: { total: 48, available: 12, sold: 36 },
    gallery: ['🏢', '🏢', '🏢', '🏢'],
    floorPlan: {
      '2+1': { sqm: '85m²', bedrooms: 2, bathrooms: 1, price: '€55,000' },
      '3+1': { sqm: '120m²', bedrooms: 3, bathrooms: 2, price: '€75,000' },
      'Penthouse': { sqm: '180m²', bedrooms: 4, bathrooms: 3, price: '€120,000' }
    }
  },
  'liburnia-residence': {
    name: 'Liburnia Residence',
    location: 'Shatërvan, Prizren',
    description: 'Kompleks rezidencial premium në një nga zonat më të kërkuara të Prizrenit.',
    fullDescription: 'Liburnia Residence ndodhet në një nga zonat më të kërkuara të Prizrenit - lagjia e Shatërvanit. Ky kompleks ofron një jetë të qetë familjare, me parqe dhe shkolla në afërsi, duke e bërë ideal për familje.',
    details: ['6 kate', '1+1, 2+1', 'Bodrum', 'Parking', 'Arka', 'Lojëra Fëmijësh'],
    features: ['Lokacion i qetë', 'Afër shkollave', 'Parking privat', 'Bodrum magazinë', 'Arkë fëmijësh', 'Pishinë'],
    price: 'Nga €45,000',
    status: 'Në Ndërtim',
    year: '2026',
    completion: 'Mars 2026',
    units: { total: 24, available: 8, sold: 16 },
    gallery: ['🏢', '🏢', '🏢', '🏢'],
    floorPlan: {
      '1+1': { sqm: '55m²', bedrooms: 1, bathrooms: 1, price: '€45,000' },
      '2+1': { sqm: '75m²', bedrooms: 2, bathrooms: 1, price: '€58,000' }
    }
  },
  'liburnia-business': {
    name: 'Liburnia Business Center',
    location: 'Ukë Bytyçi, Prizren',
    description: 'Qendër biznesi moderne me hapësira comerciale dhe zyra në qendër të qytetit.',
    fullDescription: 'Liburnia Business Center është një qendër biznesi e nivelit të lartë në zemër të qytetit të Prizrenit. Me hapësira të konfigurueshme që mund të përshtaten sipas nevojave të biznesit tuaj, ky kompleks ofron të gjitha facilitetet e nevojshme për një ambient biznesi profesionist.',
    details: ['3 kate', '6 dyqane', 'Zyra', 'Qendër', 'Parking', 'Recepsion'],
    features: ['Lokacion qendror', 'Hapesira e konfigurueshme', 'Recepsion 24/7', 'Parking nendervesor', 'Camera sigurie', 'Internet i shpejte'],
    price: 'Nga €80,000',
    status: 'i Përfunduar',
    year: '2024',
    completion: 'Tetor 2024',
    units: { total: 12, available: 4, sold: 8 },
    gallery: ['🏢', '🏢', '🏢', '🏢'],
    floorPlan: {
      'Dyqan 1': { sqm: '45m²', floor: 'Bodrum', price: '€80,000' },
      'Dyqan 2': { sqm: '60m²', floor: 'Bodrum', price: '€95,000' },
      'Zyra 1': { sqm: '35m²', floor: '1', price: '€70,000' },
      'Zyra 2': { sqm: '50m²', floor: '1', price: '€85,000' }
    }
  },
  'liburnia-marina': {
    name: 'Liburnia Marina',
    location: 'Lumë, Prizren',
    description: 'Kompleks luksoz buzë lumit me apartamente premium.',
    fullDescription: 'Liburnia Marina do të jetë projekti ynë më ambicioz deri më tanë. Ndodhur buzë lumit Bistricë, ky kompleks do të ofrojë jetesë luksoze me pamje të drejtpërdrejtë të lumit. Me facilitete të nivelit 5-ykeshe si Restorant, Spa dhe Marinë, ky do të jetë një destinacion i vetë.',
    details: ['15 kate', 'Penthouse', 'Restorant', 'Spa', 'Marinë', 'Pishinë'],
    features: ['Pamje lumit', 'Restorant luksoz', 'Spa & Wellness', 'Marinë private', 'Pishinë infinity', 'Bar në kulm'],
    price: 'Nga €120,000',
    status: 'Së Shpejti',
    year: '2027',
    completion: '2027',
    units: { total: 60, available: 60, sold: 0 },
    gallery: ['🏢', '🏢', '🏢', '🏢'],
    floorPlan: {
      '2+1': { sqm: '90m²', bedrooms: 2, bathrooms: 2, price: '€120,000' },
      '3+1': { sqm: '130m²', bedrooms: 3, bathrooms: 2, price: '€165,000' },
      'Penthouse': { sqm: '250m²', bedrooms: 5, bathrooms: 4, price: '€350,000' }
    }
  },
  'liburnia-green': {
    name: 'Liburnia Green',
    location: 'Mbretënia, Prizren',
    description: 'Kompleks ekologjik i parë i llojit në Kosovë.',
    fullDescription: 'Liburnia Green është vizioni ynë për të ardhmen e qëndrueshme. Ky kompleks do të përdorë energji diellore, materiale ekologjike dhe do të ketë hapësira të gjelbëruara në çdo kat. Ky është kompleks i parë "zero karbon" në Kosovë.',
    details: ['8 kate', 'Park', 'Fitnes', 'Çerdhe', 'Bio', 'Solar'],
    features: ['Energji diellore', 'Materiale ekologjike', 'Park i brendshëm', 'Fitnes bio', 'Çerdhe', 'Transport publik afër'],
    price: 'Nga €65,000',
    status: 'Së Shpejti',
    year: '2027',
    completion: '2027',
    units: { total: 32, available: 32, sold: 0 },
    gallery: ['🏢', '🏢', '🏢', '🏢'],
    floorPlan: {
      '2+1': { sqm: '80m²', bedrooms: 2, bathrooms: 1, price: '€65,000' },
      '3+1': { sqm: '110m²', bedrooms: 3, bathrooms: 2, price: '€85,000' }
    }
  }
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug]

  useEffect(() => {
    AOS.refresh()
  }, [])

  if (!project) {
    return (
      <div className="not-found">
        <h1 data-aos="fade-up">Projekti nuk u gjet</h1>
        <Link to="/contact" className="btn btn-primary" data-aos="fade-up" data-aos-delay="100">Kthehu te Kontakti</Link>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <section className="pd-hero">
        <div className="pd-hero-overlay"></div>
        <div className="pd-hero-content">
          <Link to="/" className="pd-back" data-aos="fade-left">← Kthehu</Link>
          <span className={`pd-status ${project.status === 'i Përfunduar' ? 'done' : project.status === 'Së Shpejti' ? 'coming' : ''}`} data-aos="fade-down">{project.status}</span>
          <h1 data-aos="fade-up" data-aos-delay="100">{project.name}</h1>
          <p className="pd-location" data-aos="fade-up" data-aos-delay="200">📍 {project.location}</p>
          <p className="pd-price" data-aos="fade-up" data-aos-delay="300">{project.price}</p>
        </div>
        <div className="pd-gallery" data-aos="fade-left" data-aos-delay="400">
          {project.gallery.map((icon, idx) => (
            <div key={idx} className="pd-gallery-item">{icon}</div>
          ))}
        </div>
      </section>

      <section className="pd-info">
        <div className="container">
          <div className="pd-grid">
            <div className="pd-main">
              <div className="pd-description" data-aos="fade-up">
                <h2>Përshkrimi i Projektit</h2>
                <p className="pd-desc-full">{project.fullDescription}</p>
              </div>

              <div className="pd-features" data-aos="fade-up" data-aos-delay="100">
                <h2>Karakteristikat</h2>
                <ul className="pd-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pd-apartments" data-aos="fade-up" data-aos-delay="200">
                <h2>Llojet e Apartamenteve</h2>
                <div className="pd-apartments-grid">
                  {Object.entries(project.floorPlan).map(([type, data], idx) => (
                    <div key={idx} className="pd-apartment-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                      <h3>{type}</h3>
                      <div className="pd-apartment-details">
                        <p><strong>Siperfaqja:</strong> {data.sqm}</p>
                        {data.bedrooms && <p><strong>Dhoma gjumi:</strong> {data.bedrooms}</p>}
                        {data.bathrooms && <p><strong>Banjo:</strong> {data.bathrooms}</p>}
                        {data.floor && <p><strong>Kat:</strong> {data.floor}</p>}
                        <p className="pd-apartment-price">{data.price}</p>
                      </div>
                      <Link to="/contact" className="btn btn-outline">Interesohu</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pd-sidebar">
              <div className="pd-sidebar-card" data-aos="fade-left" data-aos-delay="100">
                <h3>Informacione</h3>
                <div className="pd-info-item">
                  <span className="label">Viti i Ndërtimit</span>
                  <span className="value">{project.year}</span>
                </div>
                <div className="pd-info-item">
                  <span className="label">Dorëzimi</span>
                  <span className="value">{project.completion}</span>
                </div>
                <div className="pd-info-item">
                  <span className="label">Njësi gjithsej</span>
                  <span className="value">{project.units.total}</span>
                </div>
                <div className="pd-info-item">
                  <span className="label">Të shitura</span>
                  <span className="value">{project.units.sold}</span>
                </div>
                <div className="pd-info-item">
                  <span className="label">Të disponueshme</span>
                  <span className="value available">{project.units.available}</span>
                </div>
              </div>

              <div className="pd-sidebar-card" data-aos="fade-left" data-aos-delay="200">
                <h3>Detajet</h3>
                <ul className="pd-details-list">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn btn-primary btn-full" data-aos="fade-up" data-aos-delay="300">Na Kontaktoni për më shumë</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail