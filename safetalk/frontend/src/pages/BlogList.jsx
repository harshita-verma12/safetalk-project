import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'Managing Anxiety with Gentle Techniques', excerpt: 'Discover simple, compassionate ways to soothe anxious feelings. Learn breathing exercises, grounding techniques, and self-compassion practices that can help you find calm in challenging moments. Remember, anxiety is a normal response, and you have the power to nurture yourself through it.', image: '🧘' },
  { id: '2', title: 'Understanding Your Emotional Landscape', excerpt: 'Emotions are like weather patterns - they change and evolve. Explore how to recognize different feelings, understand their messages, and respond with kindness. Building emotional awareness is a journey of self-discovery and growth.', image: '🌤️' },
  { id: '3', title: 'Cultivating Emotional Resilience', excerpt: 'Resilience is not about avoiding difficulties, but learning to bounce back with grace. Discover practices that strengthen your inner resources, from mindfulness to supportive relationships. Every challenge is an opportunity to grow stronger and more compassionate.', image: '🌱' },
  { id: '4', title: 'The Power of Self-Compassion', excerpt: 'In a world that often demands perfection, self-compassion is revolutionary. Learn to treat yourself with the same kindness you would offer a dear friend. This gentle approach can transform how you relate to your struggles and successes.', image: '💝' },
  { id: '5', title: 'Finding Peace in Daily Life', excerpt: 'Peace is not the absence of chaos, but the ability to find calm within it. Explore simple practices for creating moments of tranquility in your busy day. Small acts of self-care can create ripples of peace that touch every aspect of your life.', image: '🌸' },
  { id: '6', title: 'Building Healthy Boundaries', excerpt: 'Boundaries are acts of self-love that protect your energy and well-being. Learn to recognize when to say yes and when to say no. Setting boundaries allows you to show up more fully for the relationships and activities that truly matter to you.', image: '🛡️' }
];

export default function BlogList() {
  return (
    <section className="page blog-list">
      <h2>Emotional Wellness Insights ;</h2>
      <p>Explore thoughtful articles designed to support your mental health journey with compassion and understanding.</p>
      <div className="cards">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <div className="illustration" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{post.image}</div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blogs/${post.id}`}>Read Full Article →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
