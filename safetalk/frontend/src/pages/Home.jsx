import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page home">
      <div className="hero-section">
        <div className="slogan">Empower Your Mind</div>
        <p className="hero-description">
          Your journey to mental wellness starts here. SafeTalk is your compassionate companion for emotional support,
          self-discovery, and building resilience. Every step you take matters.
        </p>
        <div className="illustration">🧠</div>
      </div>

      <div className="stats-section">
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
      </div>

      <div className="quote-section">
        <p className="quote">"Your mental health is a priority. Take care of your mind, and your mind will take care of you."</p>
      </div>

      <div className="features-section">
        <h2>Explore Your Wellness Journey</h2>
        <div className="home-grid">
          <Link to="/community" className="card">
            <h3>Community Stories</h3>
            <p>Share your journey and connect with others who understand. Find strength in shared experiences and build meaningful connections.</p>
            <div className="illustration">🤝</div>
          </Link>
          <Link to="/blogs" className="card">
            <h3>Emotional Insights</h3>
            <p>Discover thoughtful blogs about emotions, mental states, and practical wellness tips to support your growth.</p>
            <div className="illustration">📖</div>
          </Link>
          <Link to="/moodboard" className="card">
            <h3>Mood Tracker</h3>
            <p>Track your daily moods and discover comforting activities tailored to how you're feeling right now.</p>
            <div className="illustration">🌈</div>
          </Link>
          <Link to="/emotions" className="card">
            <h3>Understand Emotions</h3>
            <p>Learn about feelings and how to navigate them with compassion. Build emotional intelligence one step at a time.</p>
            <div className="illustration">💭</div>
          </Link>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Community Says</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"SafeTalk helped me understand my emotions better. The community support is incredible."</p>
            <div className="testimonial-author">- Sarah M.</div>
          </div>
          <div className="testimonial">
            <p>"The journaling feature has become part of my daily routine. It's so helpful for processing my thoughts."</p>
            <div className="testimonial-author">- Alex K.</div>
          </div>
          <div className="testimonial">
            <p>"I love the AI assistant - it's like having a supportive friend available anytime."</p>
            <div className="testimonial-author">- Jordan L.</div>
          </div>
        </div>
      </div>

      <div className="quote-section">
        <p className="quote">"Every small step towards self-care is a victory. You are stronger than you know."</p>
      </div>

      <div className="tools-section">
        <h2>Your Wellness Toolkit</h2>
        <div className="home-grid">
          <Link to="/profile" className="card">
            <h3>Daily Journaling</h3>
            <p>Reflect on your day, track your mood, and build emotional awareness through guided journaling prompts.</p>
            <div className="illustration">📝</div>
          </Link>
          <Link to="/assistant" className="card">
            <h3>AI Comfort Assistant</h3>
            <p>Get supportive tips, coping strategies, and a compassionate listening ear whenever you need it.</p>
            <div className="illustration">🤖</div>
          </Link>
          <Link to="/areas" className="card">
            <h3>Areas of Concern</h3>
            <p>Explore topics like stress management, sleep health, relationships, and building resilience.</p>
            <div className="illustration">🔍</div>
          </Link>
          <Link to="/contact" className="card">
            <h3>Get in Touch</h3>
            <p>Reach out for support, ask questions, or learn more about our services. We're here to help.</p>
            <div className="illustration">📞</div>
          </Link>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          SafeTalk is dedicated to making mental health support accessible, compassionate, and stigma-free.
          We believe that everyone deserves tools and resources to understand their emotions, build resilience,
          and live a more balanced life. Your well-being matters to us.
        </p>
        <div className="mission-features">
          <div className="mission-item">
            <div className="illustration">🔒</div>
            <h4>Confidential & Safe</h4>
            <p>Your privacy and security are our top priorities.</p>
          </div>
          <div className="mission-item">
            <div className="illustration">💝</div>
            <h4>Compassionate Support</h4>
            <p>Every interaction is designed with kindness and understanding.</p>
          </div>
          <div className="mission-item">
            <div className="illustration">🌱</div>
            <h4>Growth-Focused</h4>
            <p>Tools and resources to help you build emotional strength.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands who are taking positive steps toward better mental health.</p>
        <div className="cta-buttons">
          <Link to="/register" className="cta-primary">Get Started Free</Link>
          <Link to="/login" className="cta-secondary">Sign In</Link>
        </div>
      </div>

      <div className="quote-section">
        <p className="quote">"Mental health is not a destination, but a process. It's about finding balance and peace within."</p>
        <div className="illustration">🕊️</div>
      </div>
    </section>
  );
}
