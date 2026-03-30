import { Link } from 'react-router-dom';

const topics = [
  {
    key: 'stress',
    title: 'Managing Stress',
    note: 'Learn techniques to identify stress triggers and build resilience. Practice deep breathing, progressive muscle relaxation, and time management strategies.',
    tips: ['Take 5-minute breathing breaks', 'Prioritize tasks with the Eisenhower matrix', 'Create a calming evening routine'],
    image: '😌'
  },
  {
    key: 'sleep',
    title: 'Sleep & Rest',
    note: 'Quality sleep is essential for mental health. Discover sleep hygiene practices, relaxation techniques, and how to create a restful environment.',
    tips: ['Maintain consistent sleep schedule', 'Create a cool, dark bedroom', 'Avoid screens 1 hour before bed'],
    image: '😴'
  },
  {
    key: 'relationships',
    title: 'Healthy Relationships',
    note: 'Build and maintain supportive connections. Learn communication skills, boundary-setting, and how to recognize toxic patterns.',
    tips: ['Practice active listening', 'Express needs clearly', 'Set healthy boundaries'],
    image: '🤝'
  },
  {
    key: 'self-esteem',
    title: 'Building Self-Esteem',
    note: 'Develop a positive self-image through self-compassion practices, achievement recognition, and challenging negative self-talk.',
    tips: ['Practice daily affirmations', 'Celebrate small wins', 'Challenge negative thoughts'],
    image: '✨'
  },
  {
    key: 'anxiety',
    title: 'Anxiety Management',
    note: 'Understand anxiety patterns and learn coping strategies. From generalized anxiety to panic attacks, find tools to regain control.',
    tips: ['Grounding techniques (5-4-3-2-1)', 'Cognitive restructuring', 'Gradual exposure practice'],
    image: '🧘'
  },
  {
    key: 'depression',
    title: 'Overcoming Depression',
    note: 'Navigate depressive episodes with evidence-based strategies. Learn about behavioral activation, social support, and professional help.',
    tips: ['Daily structure and routine', 'Physical activity', 'Reach out to support network'],
    image: '🌱'
  },
  {
    key: 'grief',
    title: 'Processing Grief',
    note: 'Grief is a natural response to loss. Learn about the stages of grief, self-care during mourning, and when to seek additional support.',
    tips: ['Allow yourself to grieve', 'Create memorials or rituals', 'Seek grief support groups'],
    image: '💔'
  },
  {
    key: 'work-life',
    title: 'Work-Life Balance',
    note: 'Maintain mental health in demanding work environments. Set boundaries, manage workload, and prioritize self-care amidst professional responsibilities.',
    tips: ['Set work boundaries', 'Take regular breaks', 'Schedule personal time'],
    image: '⚖️'
  }
];

export default function AreasOfConcern() {
  return (
    <section className="page concern">
      <h2>Areas of Concern</h2>
      <p>Explore common mental health challenges and discover practical strategies for each. Remember, seeking help is a sign of strength, not weakness.</p>

      <div className="concern-intro">
        <h3>Why These Areas Matter</h3>
        <p>Mental health challenges can affect anyone, regardless of age, background, or circumstances. Understanding these areas helps you recognize when support might be beneficial and provides tools to navigate difficulties.</p>
      </div>

      <div className="cards">
        {topics.map((item) => (
          <article key={item.key} className="card concern-card">
            <div className="illustration" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.image}</div>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <div className="tips">
              <h4>Quick Tips:</h4>
              <ul>
                {item.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <Link to="/emotions">Learn more about emotions</Link>
          </article>
        ))}
      </div>

      <div className="help-section">
        <h3>When to Seek Professional Help</h3>
        <ul>
          <li>When symptoms persist or worsen over time</li>
          <li>If daily functioning is significantly impacted</li>
          <li>When experiencing thoughts of self-harm or suicide</li>
          <li>If substance use becomes a coping mechanism</li>
          <li>When relationships are severely affected</li>
        </ul>
        <p><strong>Remember:</strong> Professional help is available 24/7. In crisis, contact emergency services or a crisis hotline immediately.</p>
      </div>
    </section>
  );
}
