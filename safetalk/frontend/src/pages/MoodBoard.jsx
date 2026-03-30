import { useState } from 'react';

const themes = [
  { name: 'Calm', color: '#74b9ff', tip: 'Take deep breaths and focus on the present moment.' },
  { name: 'Peaceful', color: '#55efc4', tip: 'Find a quiet space and let your mind rest.' },
  { name: 'Hopeful', color: '#ffeaa7', tip: 'Remember that brighter days are ahead.' },
  { name: 'Grateful', color: '#fd79a8', tip: 'List three things you are thankful for today.' },
  { name: 'Strong', color: '#a29bfe', tip: 'Acknowledge your resilience and inner strength.' },
  { name: 'Loved', color: '#fdcb6e', tip: 'Surround yourself with positive, caring energy.' }
];

export default function MoodBoard() {
  const [selection, setSelection] = useState(themes[0]);
  return (
    <section className="page moodboard">
      <h2>Your Mood Sanctuary</h2>
      <p>Choose a mood that resonates with you today, and discover gentle ways to nurture it.</p>
      <div className="mood-grid">
        {themes.map((item) => (
          <button key={item.name} style={{ background: item.color }} onClick={() => setSelection(item)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="mood-summary">
        <h3>{selection.name}</h3>
        <p>{selection.tip}</p>
        <div className="illustration" style={{ fontSize: '3rem', marginTop: '1rem' }}>💖</div>
      </div>
    </section>
  );
}
