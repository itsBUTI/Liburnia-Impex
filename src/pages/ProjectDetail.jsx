import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import './ProjectDetail.css'

const projectsData = {
  'liburnia-1': {
    name: 'Liburnia 1',
    location: 'Rrethrotullimi i Ortakollit, Prizren',
    locationLink: 'https://maps.app.goo.gl/gwkr4Q8F2nZL6FnD8',
    description: 'Kompleks rezidencial dhe komercial në qendër të Prizrenit.',
    fullDescription: 'Liburnia 1 ndodhet në Rrethrotullimin e Ortakollit në Prizren. Ky kompleks moderne ofron apartamente dhe hapësira comerciale në një lokacion strategjik. Ndërtesa ka 6 kate dhe përfshin parking, bodrum dhe ashensor.',
    details: ['6 kate', '1+1, 2+1', 'Parking', 'Bodrum', 'Ashensor', 'Hapësira Comerciale'],
    features: ['Lokacion qendror', 'Afër shkollave', 'Parking privat', 'Bodrum magazinë', 'Ashensor', 'Çmime konkurruese'],
    status: 'I Përfunduar',
    year: '2025',
    completion: 'Dhjetor 2025',
    units: { total: 24, available: 8, sold: 16 },
    gallery: [
      '/images/l1-1.jpg',
      '/images/l1-2.jpg',
      '/images/l1-3.jpg',
      '/images/l1-4.jpg',
      '/images/l1-5.jpg',
      '/images/l1-6.jpg'
    ],
    floorPlan: {
      '1+1': { sqm: '55m²', bedrooms: 1, bathrooms: 1 },
      '2+1': { sqm: '75m²', bedrooms: 2, bathrooms: 1 }
    }
  },
  'liburnia-2': {
    name: 'Liburnia 2',
    location: 'Ukë Bytyqi, Prizren',
    locationLink: 'https://maps.app.goo.gl/gwkr4Q8F2nZL6FnD8',
    description: 'Kompleks banesor dhe afarist në Ukë Bytyqi, Prizren.',
    fullDescription: 'Liburnia 2 ndodhet në rrugën Ukë Bytyqi në Prizren. Ky kompleks banesor dhe afarist ofron apartamente moderne dhe hapësira biznesi në një lokacion të shkëlqyer. Ndërtesa ka 5 kate dhe përfshin parking, bodrum dhe ashensor.',
    details: ['5 kate', '1+1, 2+1, 3+1', 'Parking', 'Bodrum', 'Ashensor', 'Hapësira Biznesi'],
    features: ['Lokacion strategjik', 'Afër autostradë', 'Parking privat', 'Bodrum magazinë', 'Ashensor', 'Çmime konkurruese'],
    status: 'I Përfunduar',
    year: '2025',
    completion: 'Dhjetor 2025',
    units: { total: 20, available: 8, sold: 12 },
    gallery: [
      '/images/l2-1.jpg',
      '/images/l2-2.jpg',
      '/images/l2-3.jpg',
      '/images/l2-4.jpg',
      '/images/l2-5.jpg',
      '/images/l2-6.jpg',
      '/images/l2-7.jpg'
    ],
    floorPlan: {
      '1+1': { sqm: '50m²', bedrooms: 1, bathrooms: 1 },
      '2+1': { sqm: '70m²', bedrooms: 2, bathrooms: 1 },
      '3+1': { sqm: '95m²', bedrooms: 3, bathrooms: 2 }
    }
  }
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
    AOS.refresh()
  }, [])

  useEffect(() => {
    if (project && project.gallery) {
      const interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % project.gallery.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [project])

  useEffect(() => {
    setCurrentImage(0)
  }, [slug])

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

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
        <div className="pd-slider-container">
          {project.gallery.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${project.name} - Image ${idx + 1}`}
              className="pd-slider-image"
              style={{ opacity: idx === currentImage ? 1 : 0, transition: 'opacity 0.6s ease-in-out' }}
            />
          ))}
          <div className="pd-slider-overlay"></div>
        </div>

        <button className="pd-slider-nav pd-slider-prev" onClick={prevImage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button className="pd-slider-nav pd-slider-next" onClick={nextImage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div className="pd-slider-dots">
          {project.gallery.map((_, idx) => (
            <button 
              key={idx} 
              className={`pd-slider-dot ${idx === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        <div className="pd-hero-content">
          <div className="pd-hero-inner">
            <Link to="/" className="pd-back" data-aos="fade-left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Kthehu
            </Link>
            
            <div className="pd-header-top">
              <span className={`pd-status ${project.status === 'I Përfunduar' ? 'done' : project.status === 'Në Ndërtim' ? 'under-construction' : 'coming'}`} data-aos="fade-down">
                {project.status}
              </span>
            </div>
            
            <h1 data-aos="fade-up" data-aos-delay="100">{project.name}</h1>
            
            <p className="pd-location" data-aos="fade-up" data-aos-delay="200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {project.locationLink ? (
                <a href={project.locationLink} target="_blank" rel="noopener noreferrer">
                  {project.location}
                </a>
              ) : (
                <>{project.location}</>
              )}
            </p>
          </div>
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
                      <span className="check"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
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
                        <p><strong>Siperfaqja:</strong> <span>{data.sqm}</span></p>
                        {data.bedrooms && <p><strong>Dhoma gjumi:</strong> <span>{data.bedrooms}</span></p>}
                        {data.bathrooms && <p><strong>Banjo:</strong> <span>{data.bathrooms}</span></p>}
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

              <Link to="/contact" className="btn btn-primary btn-full" data-aos="fade-up" data-aos-delay="300">Na Kontaktoni</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail