import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [journal, setJournal] = useState('');
  const [mood, setMood] = useState('neutral');
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const token = localStorage.getItem('safetalk-token');

  const journalPrompts = [
    "What am I grateful for today?",
    "What challenged me today, and how did I respond?",
    "What would I tell my younger self right now?",
    "What brings me peace in difficult moments?",
    "How have I grown this week?",
    "What boundaries do I need to set?",
    "What does self-care look like for me today?",
    "What emotions am I feeling, and what do they need?"
  ];

  const moodOptions = [
    { value: 'joyful', emoji: '😊', label: 'Joyful', color: '#FFD93D' },
    { value: 'hopeful', emoji: '🌟', label: 'Hopeful', color: '#A8E6CF' },
    { value: 'calm', emoji: '🧘', label: 'Calm', color: '#74B9FF' },
    { value: 'anxious', emoji: '😰', label: 'Anxious', color: '#FFA07A' },
    { value: 'sad', emoji: '😢', label: 'Sad', color: '#B19CD9' },
    { value: 'frustrated', emoji: '😤', label: 'Frustrated', color: '#FF6B6B' },
    { value: 'grateful', emoji: '🙏', label: 'Grateful', color: '#FFEAA7' },
    { value: 'overwhelmed', emoji: '😵', label: 'Overwhelmed', color: '#DDA0DD' }
  ];

  const fetchEntries = async () => {
    if (!token) return;
    const res = await axios.get('/api/profile/journals', { headers: { 'x-auth-token': token } });
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries().catch(() => {});
  }, []);

  const submitJournal = async (e) => {
    e.preventDefault();
    if (!token) {
      setMessage('Please login to save your journal entries.');
      return;
    }
    try {
      await axios.post('/api/profile/journals', { entry: journal, mood }, { headers: { 'x-auth-token': token } });
      setJournal('');
      setMessage('Your thoughts have been safely stored. Remember, your feelings are valid.');
      fetchEntries();
    } catch (err) {
      setMessage('Unable to save entry. Please try again.');
    }
  };

  const selectPrompt = (prompt) => {
    setSelectedPrompt(prompt);
    setJournal(prompt + '\n\n');
  };

  return (
    <section className="page profile">
      <h2>Your Personal Wellness Space</h2>
      <p>Welcome to your safe space for reflection and self-care. Here you can track your emotional journey, express your thoughts, and nurture your well-being.</p>

      <div className="profile-intro">
        <h3>Daily Check-In</h3>
        <p>How are you feeling right now? Taking a moment to check in with yourself is an act of self-care.</p>
      </div>

      <form onSubmit={submitJournal} className="journal-form">
        <div className="mood-selection">
          <label>Current Mood</label>
          <div className="mood-buttons">
            {moodOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`mood-btn ${mood === option.value ? 'selected' : ''}`}
                style={{ backgroundColor: option.color }}
                onClick={() => setMood(option.value)}
              >
                {option.emoji} {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="journal-prompts">
          <label>Journaling Prompts (Optional)</label>
          <p>Need inspiration? Choose a prompt to get started:</p>
          <div className="prompt-buttons">
            {journalPrompts.map((prompt, index) => (
              <button
                key={index}
                type="button"
                className="prompt-btn"
                onClick={() => selectPrompt(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <label>
          Your Thoughts & Reflections
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Write freely about your day, your feelings, your hopes, or anything on your mind. This is your private space."
            required
          />
        </label>
        <button type="submit" className="save-btn">Save My Entry</button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="journal-history">
        <h3>Your Journal History</h3>
        <p>Reflect on your journey. Each entry is a step in understanding yourself better.</p>
        {entries.length === 0 ? (
          <p className="empty-state">Your first entry awaits! Start your journey of self-discovery today.</p>
        ) : (
          <ul className="entries">
            {entries.slice(0, 10).map((item) => (
              <li key={item._id} className="entry-item">
                <div className="entry-header">
                  <span className="entry-mood">
                    {moodOptions.find(m => m.value === item.mood)?.emoji || '😐'} {item.mood}
                  </span>
                  <span className="entry-date">{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="entry-content">{item.entry}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="self-care-reminder">
        <h3>💝 Self-Care Reminder</h3>
        <p>You are worthy of kindness, especially from yourself. Every small step toward understanding your emotions is a victory. Be patient with your process.</p>
      </div>
    </section>
  );
}
