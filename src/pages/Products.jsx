import './Products.css'

function Products() {
  const products = [
    {
      category: 'ÇIMENTO & BETON',
      items: [
        { name: 'Çimento Portland', description: 'Çimento cilësor për të gjitha nevojat ndërtimore' },
        { name: 'Beton i Gatshëm', description: 'Përzierje profesionale betoni' },
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
        { name: 'Tulla Kulmi', description: 'Tulla argjile dhe betoni' },
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
    <div className="products">
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
              <span className="cat-icon">🧱</span>
              <h3>Çimento</h3>
            </div>
            <div className="cat-card">
              <span className="cat-icon">🧱</span>
              <h3>Tulla</h3>
            </div>
            <div className="cat-card">
              <span className="cat-icon">⚙️</span>
              <h3>Çelik</h3>
            </div>
            <div className="cat-card">
              <span className="cat-icon">🏠</span>
              <h3>Kulm</h3>
            </div>
            <div className="cat-card">
              <span className="cat-icon">❄️</span>
              <h3>Izolim</h3>
            </div>
            <div className="cat-card">
              <span className="cat-icon">🎨</span>
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
              <div className="service-icon">📦</div>
              <h3>Furnizim me Shumicë</h3>
              <p>Për kontarktues dhe biznese me çmime speciale</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>Shitje Pakicë</h3>
              <p>Për klientë individualë në çdo sasi</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Dorëzim</h3>
              <p>Në të gjithë Kosovën brenda 24-48 orë</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
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