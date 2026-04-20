import { Link } from 'react-router-dom';

const posts = [
  { 
    id: '1', 
    title: 'Managing Anxiety with Gentle Techniques', 
    content: 'Anxiety often feels like an internal alarm system stuck in the "on" position. Instead of fighting it, learn to coexist with these sensations using somatic grounding. Techniques like the 5-4-3-2-1 method or "Box Breathing" help signal to your nervous system that you are safe in the present moment.', 
    image: '🧘',
    category: 'Mental Health'
  },
  { 
    id: '2', 
    title: 'The Science of Restorative Sleep', 
    content: 'Sleep is the foundation of emotional regulation. Chronic sleep deprivation impairs the prefrontal cortex, making it harder to manage daily stressors. Discover why a consistent bedtime ritual—free from blue light and heavy thoughts—is essential for mental clarity.', 
    image: '🌙',
    category: 'Wellness'
  },
  { 
    id: '3', 
    title: 'Mindful Digital Consumption', 
    content: 'Our digital habits deeply influence our mental peace. Learn to cultivate a "digital garden" by curating your feeds to inspire rather than deplete you. We discuss the benefits of intentional scrolling and setting clear digital boundaries.', 
    image: '📱',
    category: 'Lifestyle'
  },
  { 
    id: '4', 
    title: 'Understanding Emotional Triggers', 
    content: 'Triggers are often echoes of past experiences surfacing in the present. By practicing self-inquiry, you can learn to pause before reacting, transforming a moment of distress into an opportunity for profound self-understanding.', 
    image: '🌱',
    category: 'Psychology'
  },
  { 
    id: '5', 
    title: 'The Power of Self-Compassion', 
    content: 'We are often our own harshest critics. Self-compassion involves treating yourself with the same kindness you would offer a dear friend in pain. Learn the three pillars: self-kindness, common humanity, and mindfulness.', 
    image: '✨',
    category: 'Self-Growth'
  },
  { 
    id: '6', 
    title: 'Building Healthy Boundaries', 
    content: 'Boundaries are not walls; they are the gates that protect your energy and define your identity. Setting them is an act of self-respect. Explore practical scripts on how to say "no" with confidence and grace.', 
    image: '🛡️',
    category: 'Relationships'
  }
];

export default function BlogList() {
  return (
    <div className="page blog-list">
      <div className="concern-intro">
        <h2>Emotional Wellness Insights</h2>
        <p>Thoughtful articles designed to support your journey with compassion and evidence-based guidance.</p>
      </div>

      <div className="grid-container">
        {posts.map((post) => (
          <article key={post.id} className="card blog-card">
            <div className="illustration">{post.image}</div>
            <span className="category-tag">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/blogs/${post.id}`} className="cta-secondary">
              Read Full Article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}