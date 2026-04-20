import { Link } from 'react-router-dom';

const topics = [
  {
    key: 'stress',
    title: 'Managing Stress',
    note: 'Learn techniques to identify stress triggers and build resilience. Practice deep breathing and time management.',
    tips: ['Take 5-minute breathing breaks', 'Prioritize tasks', 'Create a calming routine'],
    image: '😌'
  },
  // ... (keeping your other topics same)
  {
    key: 'work-life',
    title: 'Work-Life Balance',
    note: 'Maintain mental health in demanding environments. Set boundaries and prioritize self-care.',
    tips: ['Set work boundaries', 'Take regular breaks', 'Schedule personal time'],
    image: '⚖️'
  },
  {
    key: 'anxiety',
    title: 'Anxiety',
    image: '🌀',
    detailedInfo: 'Anxiety involves persistent worry, nervousness, or unease, typically about an imminent event or something with an uncertain outcome. It can manifest physically as rapid heartbeat or tension.',
    tips: ['Practice deep breathing', 'Grounding techniques (5-4-3-2-1)', 'Limit caffeine intake']
  },
  {
    key: 'depression',
    title: 'Depression',
    image: '☁️',
    detailedInfo: 'Depression is more than just feeling sad; it is a persistent feeling of hopelessness, loss of interest in activities you once enjoyed, and low energy levels affecting daily life.',
    tips: ['Set small, achievable goals', 'Maintain a routine', 'Talk to a trusted friend']
  },
  {
    key: 'stress',
    title: 'Chronic Stress',
    image: '⏳',
    detailedInfo: 'Chronic stress is the response to emotional or physical pressure that lasts for a long period. Left unmanaged, it can lead to burnout, fatigue, and weakened immune function.',
    tips: ['Time blocking/Planning', 'Physical movement', 'Digital detox periods']
  },
  {
    key: 'burnout',
    title: 'Academic Burnout',
    image: '📚',
    detailedInfo: 'Common in students, this is a state of physical, emotional, and mental exhaustion caused by excessive and prolonged academic demands. It often results in detachment.',
    tips: ['Take frequent micro-breaks', 'Prioritize sleep', 'Practice self-compassion']
  },
  {
    key: 'loneliness',
    title: 'Social Isolation',
    image: '🌙',
    detailedInfo: 'Loneliness is the distressing feeling of being alone or separated. It can deeply impact your mental clarity and sense of belonging, regardless of how many people are around you.',
    tips: ['Join hobby groups', 'Engage in volunteer work', 'Small social interactions']
  },
  {
    key: 'selfesteem',
    title: 'Low Self-Esteem',
    image: '🌱',
    detailedInfo: 'This involves a negative perception of oneself. It can hinder your ability to take risks, try new things, or maintain healthy boundaries in relationships.',
    tips: ['Daily gratitude journaling', 'Challenge negative self-talk', 'Focus on personal strengths']
  },
  {
    key: 'anger',
    title: 'Anger Management',
    image: '🔥',
    detailedInfo: 'Anger is a natural emotion, but when it becomes uncontrolled, it can become destructive. Learning to manage it helps in maintaining healthy communication.',
    tips: ['The 10-second pause rule', 'Physical exercise to release tension', 'Assertive (not aggressive) communication']
  }
];

export default function AreasOfConcern() {
  return (
  <div className="page areas-of-concern">
    <div className="concern-intro">
      <h2>Areas of Concern</h2>
      <p>
        Mental health is a journey, not a destination. Understanding the different facets of our emotional and psychological well-being is the first step toward self-care. 
        Below are common areas of concern; please remember that your feelings are valid, and seeking support is a courageous act of self-love.
      </p>
    </div>

    {/* The grid-container ensures the 7 cards layout beautifully */}
    <div className="grid-container">
      {topics.map((item) => (
        <article key={item.key} className="card concern-card">
          <div className="illustration">{item.image}</div>
          <h3>{item.title}</h3>
          <p>{item.detailedInfo || item.note}</p>
          
          <div className="tips">
            <h4>Quick Strategies:</h4>
            <ul>
              {item.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
          
          <Link to="/emotions" className="cta-secondary" style={{display: 'inline-block', marginTop: '1rem'}}>
            Explore Emotions →
          </Link>
        </article>
      ))}
    </div>

    {/* Professional Help Section */}
    <div className="help-section">
      <h3>🚨 When to Seek Professional Help</h3>
      <p>It is important to recognize when self-help strategies are no longer sufficient. Please reach out to a professional if:</p>
      <ul>
        <li>Symptoms persist for more than two weeks and begin to interfere with your work or studies.</li>
        <li>You find it difficult to perform daily tasks like eating, sleeping, or maintaining hygiene.</li>
        <li>You feel overwhelmed by thoughts of self-harm or hopelessness.</li>
        <li>You notice you are relying on substances to numb your emotions.</li>
        <li>Relationships are deteriorating due to constant emotional distress.</li>
      </ul>
      <p><strong>Note:</strong> Professional support is available 24/7. Never hesitate to contact emergency services or a local crisis hotline if you are in immediate danger.</p>
    </div>
  </div>
);
}
