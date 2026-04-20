import { useEffect, useState } from 'react';
import axios from 'axios';

const journalPrompts = [
  "What am I grateful for today?",
  "What challenged me today, and how did I respond?",
  "What would I tell my younger self right now?"
];

const moodOptions = [
  { value: 'joyful', emoji: '😊', label: 'Joyful', color: '#FFD93D', direction: 'up', fact: 'Experiencing joy can boost your immune system.' },
  { value: 'hopeful', emoji: '🌟', label: 'Hopeful', color: '#A8E6CF', direction: 'up', fact: 'Optimism is linked to better heart health.' },
  { value: 'calm', emoji: '🧘', label: 'Calm', color: '#74B9FF', direction: 'neutral', fact: 'Calm improves focus and emotional stability.' },
  { value: 'anxious', emoji: '😰', label: 'Anxious', color: '#FFA07A', direction: 'down', fact: 'Anxiety is a survival mechanism; grounding helps.' },
  { value: 'sad', emoji: '😢', label: 'Sad', color: '#B19CD9', direction: 'down', fact: 'Crying releases stress-reducing hormones.' },
  { value: 'frustrated', emoji: '😤', label: 'Frustrated', color: '#FF6B6B', direction: 'down', fact: 'Frustration signals that a goal is important to you.' }
];

export default function Profile() {
  const [journal, setJournal] = useState('');
  const [mood, setMood] = useState('calm');
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [selectedMoodInfo, setSelectedMoodInfo] = useState(null);
  const token = localStorage.getItem('safetalk-token');

  const fetchEntries = async () => {
    try {
      const res = await axios.get('/api/profile/journals', { headers: { 'x-auth-token': token } });
      setEntries(res.data);
    } catch (err) { console.error("Could not fetch entries."); }
  };

  useEffect(() => { fetchEntries(); }, []);

  const submitJournal = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/profile/journals', { entry: journal, mood }, { headers: { 'x-auth-token': token } });
      setJournal('');
      setMessage({ text: 'Entry saved.', type: 'success' });
      fetchEntries();
    } catch (err) { setMessage({ text: 'Error saving.', type: 'error' }); }
  };

  return (
    <div className="page profile-page">
      <header className="profile-header card">
        <p className="quote-text">"Progress, not perfection."</p>
      </header>

      <div className="profile-dashboard-grid">
        <div className="dashboard-column">
          <section className="card mood-section">
            <h3>How is your energy today?</h3>
            <div className="mood-grid">
              {moodOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => { setMood(option.value); setSelectedMoodInfo(option); }}
                  className={`mood-box ${mood === option.value ? 'active' : ''}`}
                  style={{ '--mood-color': option.color }}
                >
                  <span className="mood-emoji">{option.emoji}</span>
                  <span className="mood-label">{option.label}</span>
                </button>
              ))}
            </div>
            {selectedMoodInfo && (
              <div className="mood-fact-popup">
                <p><strong>{selectedMoodInfo.label}:</strong> {selectedMoodInfo.fact}</p>
                <button onClick={() => setSelectedMoodInfo(null)}>Close</button>
              </div>
            )}
          </section>
        </div>

        <div className="dashboard-column">
          <section className="card journaling-section">
            <h3>Daily Reflection</h3>
            <form onSubmit={submitJournal}>
              <textarea 
                value={journal} 
                onChange={(e) => setJournal(e.target.value)} 
                placeholder="Write freely..." 
              />
              <button type="submit">Save My Thoughts</button>
            </form>
            {message.text && <p className={message.type}>{message.text}</p>}
          </section>

          <section className="card history-section">
            <h3>Wellness Timeline</h3>
            <div className="timeline-container">
              {entries.map((item) => (
                <div key={item._id} className="timeline-item">
                  <p>{item.entry}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}