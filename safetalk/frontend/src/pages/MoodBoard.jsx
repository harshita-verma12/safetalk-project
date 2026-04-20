import { useState } from 'react';

const moodMatrix = [
  { name: 'Joyful', color: '#FCD34D', icon: '😊', context: 'Reflects genuine achievement or connection; it signals that our needs are being met.' },
  { name: 'Hopeful', color: '#6EE7B7', icon: '🌟', context: 'The belief that positive change is possible, keeping us moving forward through uncertainty.' },
  { name: 'Calm', color: '#7DD3FC', icon: '🧘', context: 'A state of nervous system regulation, where we feel safe and present in our surroundings.' },
  { name: 'Anxious', color: '#FCA5A5', icon: '😰', context: 'Our survival brain anticipating threats; it is a signal to slow down and seek safety.' },
  { name: 'Sad', color: '#C4B5FD', icon: '😢', context: 'A response to loss or unmet expectations, essential for processing change and healing.' },
  { name: 'Frustrated', color: '#F97316', icon: '😤', context: 'Often triggered by obstacles to a goal; it shows that you care deeply about your progress.' },
  { name: 'Inspired', color: '#A78BFA', icon: '💡', context: 'The intersection of curiosity and passion, signaling potential for growth and creation.' },
  { name: 'Reflective', color: '#94A3B8', icon: '📖', context: 'A quiet mental space for learning from the past to improve the future.' },
  { name: 'Content', color: '#86EFAC', icon: '🍃', context: 'An appreciation for the present, free from the urge to change the current moment.' },
  { name: 'Overwhelmed', color: '#FDA4AF', icon: '🌪️', context: 'Signals that our current inputs exceed our capacity; an invitation to prioritize.' },
  { name: 'Curious', color: '#FDBA74', icon: '🔍', context: 'A drive to explore the unknown, indicating an active and engaged mind.' },
  { name: 'Resilient', color: '#60A5FA', icon: '🛡️', context: 'The ability to recover quickly; a testament to your past endurance.' }
];

export default function MoodBoard() {
  const [selected, setSelected] = useState(moodMatrix[0]);

  return (
    <div className="page mood-sanctuary">
      <div className="mood-header text-center">
        <h2>Mood Matrix</h2>
        <p>Explore the landscape of your emotions.</p>
      </div>
      
      <div className="mood-matrix">
        {moodMatrix.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelected(mood)}
            className={`mood-square ${selected.name === mood.name ? 'active' : ''}`}
            style={{ backgroundColor: mood.color }}
          >
            <span className="matrix-icon">{mood.icon}</span>
            <span className="matrix-label">{mood.name}</span>
          </button>
        ))}
      </div>

      <div className="insight-card">
        <h3 style={{ color: selected.color }}>Understanding {selected.name}</h3>
        <p>{selected.context}</p>
      </div>
    </div>
  );
}