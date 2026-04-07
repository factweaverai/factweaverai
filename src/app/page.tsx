import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">FactWeaver AI</h1>
          <p className="hero-subtitle">
            Truth-verification engine and knowledge synthesis.
          </p>
          <div className="hero-actions">
            <Link href="https://github.com/factweaverai" className="btn btn-primary">
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Core Infrastructure</h3>
              <p className="card-desc">
                Foundational tools and libraries that power the factweaverai ecosystem.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Open Standards</h3>
              <p className="card-desc">
                Commitment to interoperability and community-driven development.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Advanced Research</h3>
              <p className="card-desc">
                Exploring the frontiers of technology to solve tomorrow's challenges today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white' }}>Mission</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
            Our mission is to build robust, scalable, and accessible technology that empowers 
            the global developer community and drives meaningful innovation.
          </p>
        </div>
      </section>
    </div>
  );
}
