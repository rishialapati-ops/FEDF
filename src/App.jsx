import './App.css'

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FlightLens</p>
          <h1>FlightLens</h1>
          <p>
            Fast, clear, and polished flight booking homepage. Discover routes, compare fares, and plan your next trip with confidence.
          </p>
          <div className="hero-actions">
            <button className="button button-primary">Explore flights</button>
            <button className="button button-secondary">How it works</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-card">
            <span>Featured route</span>
            <h2>New York → London</h2>
            <p>Nonstop flights with flexible booking and modern service.</p>
          </div>
        </div>
      </header>

      <section className="features">
        <h2>Designed for seamless flight planning</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Fast search</h3>
            <p>Find great routes in seconds with a clean homepage experience.</p>
          </article>
          <article className="feature-card">
            <h3>Clear pricing</h3>
            <p>Transparent fares and easy-to-read options keep booking simple.</p>
          </article>
          <article className="feature-card">
            <h3>Modern design</h3>
            <p>A polished blue-and-white interface that looks clean and professional.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>FlightLens · Your homepage for flight discovery.</p>
      </footer>
    </div>
  )
}

export default App
