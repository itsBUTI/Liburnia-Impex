import './Products.css'

function Products() {
  const products = [
    {
      category: 'ÇIMENTO & BETON',
      items: [
        { name: 'Çimento Portland', description: 'Çimento cilësor për të gjitha nevojat ndërtimore' },
        { name: 'Çimento Muri', description: 'Muri i specializuar' },
      ]
    },
    {
      category: 'TULLA & BLLOQE',
      items: [
        { name: 'Tulla Argjiles', description: 'Tulla tradicionale' },
        { name: 'Blloqe Betoni', description: 'Blloqe të zbrazura e të mbushura' },
        { name: 'Tulla Interlok', description: 'Zgjidhje moderne rrugësh' },
      ]
    },
    {
      category: 'ÇELIK & METAL',
      items: [
        { name: 'Shufra Përforcimi', description: 'Çelik i cilësisë së lartë' },
        { name: 'Shina Çeliku', description: 'Shina I dhe H' },
        { name: 'Rrjetë Teli', description: 'Rrjetë ndërtimi' },
      ]
    },
    {
      category: 'MATERIALE KULMI',
      items: [
        { name: 'Fleta Metalike', description: 'Truproje të valëzuara' },
        { name: 'Membrana Ujitëzezë', description: 'Izolim ujitëzezës' },
      ]
    },
    {
      category: 'IZOLIM',
      items: [
        { name: 'Les Minerale', description: 'Izolim termik dhe akustik' },
        { name: 'Styrofoam', description: 'Plaqe EPS dhe XPS' },
        { name: 'Fibër Qelqi', description: 'Izolim efikas' },
      ]
    },
    {
      category: 'MATERIALE FINISIMI',
      items: [
        { name: 'Tulla Dheshje', description: 'Ceramic dhe porcelain' },
        { name: 'Mbushje & Ngjitës', description: 'Materiale instalimi' },
        { name: 'Ngjyra', description: 'Ngjyra te brendshme dhe te jashtme' },
      ]
    },
  ]

  return (
    <div className="products page-fade-in">
      <section className="page-header">
        <div className="container">
          <span className="page-tag">PRODUKTET</span>
          <h1>Materiale Ndërtimore <span>Cilësore</span></h1>
          <p>Gamë e plotë produktesh për të gjitha nevojat e ndërtimit</p>
        </div>
      </section>

      <section className="categories-banner">
        <div className="container">
          <div className="categories-grid">
            <div className="cat-card">
              <div className="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h16M4 17h16M4 5h16M9 5v12M15 5v12M9 17v2M15 17v2"></path></svg></div>
              <h3>Çimento</h3>
            </div>
            <div className="cat-card">
              <div className="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="9" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="15"></line></svg></div>
              <h3>Tulla</h3>
            </div>
            <div className="cat-card">
              <div className="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
              <h3>Çelik</h3>
            </div>
            <div className="cat-card">
              <div className="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
              <h3>Kulm</h3>
            </div>
            <div className="cat-card">
              <div className="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <h3>Izolim</h3>
            </div>
            <div className="cat-card">
              <div className="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
              <h3>Finisim</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="products-grid">
            {products.map((category, index) => (
              <div key={index} className="product-category">
                <h2>{category.category}</h2>
                <div className="product-items">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="product-item">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Shërbimet Tona</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.2"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
              <h3>Furnizim me Shumicë</h3>
              <p>Për kontarktues dhe biznese me çmime speciale</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></div>
              <h3>Shitje Pakicë</h3>
              <p>Për klientë individualë në çdo sasi</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg></div>
              <h3>Dorëzim</h3>
              <p>Në të gjithë Kosovën brenda 24-48 orë</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div>
              <h3>Këshillë</h3>
              <p>Nga ekspertë të fushës</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products