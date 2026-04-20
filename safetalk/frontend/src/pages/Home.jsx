import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="slogan">Your journey to mental wellness starts here.</h1>
        <p className="hero-description">
          SafeTalk is your compassionate companion for emotional support, 
          self-discovery, and building resilience.
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="cta-primary">Get Started Free</Link>
          <Link to="/blogs" className="cta-secondary">Explore Insights</Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Confidential</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">Compassion</div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2>Explore Your Wellness Toolkit</h2>
        <div className="home-grid">
          <Link to="/community" className="card">
            <div className="illustration">🤝</div>
            <h3>Community Stories</h3>
            <p>Share your journey and connect with others who truly understand.</p>
          </Link>
          <Link to="/assistant" className="card">
            <div className="illustration">🤖</div>
            <h3>AI Comfort</h3>
            <p>Get supportive strategies and a listening ear whenever you need it.</p>
          </Link>
          <Link to="/moodboard" className="card">
            <div className="illustration">🌈</div>
            <h3>Mood Tracker</h3>
            <p>Track your daily patterns and discover activities tailored to your mood.</p>
          </Link>
          <Link to="/areas" className="card">
            <div className="illustration">🔍</div>
            <h3>Resources</h3>
            <p>Explore deep dives into stress, sleep, and relationship health.</p>
          </Link>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="testimonial-section">
        <h2>Community Voices</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"SafeTalk helped me understand my emotions better. The community support is incredible."</p>
            <div className="testimonial-author">— Sarah M., Community Member</div>
          </div>
        </div>
      </section>
    </div>
  );
}