import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Community() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [stories, setStories] = useState([]);
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState('all');

  const token = window.localStorage.getItem('safetalk-token');

  const categories = [
    { value: 'general', label: 'General Support', emoji: '🤝' },
    { value: 'anxiety', label: 'Anxiety & Worry', emoji: '😰' },
    { value: 'depression', label: 'Sadness & Depression', emoji: '😢' },
    { value: 'relationships', label: 'Relationships', emoji: '💕' },
    { value: 'self-care', label: 'Self-Care & Growth', emoji: '🌱' },
    { value: 'success', label: 'Success Stories', emoji: '✨' }
  ];

  const loadStories = async () => {
    const res = await axios.get('/api/community');
    setStories(res.data);
  };

  useEffect(() => {
    loadStories();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!token) {
      setMessage('Please login to share your story. Your voice matters and deserves to be heard.');
      return;
    }
    try {
      await axios.post('/api/community', { title, content, category }, { headers: { 'x-auth-token': token } });
      setTitle('');
      setContent('');
      setCategory('general');
      setMessage('Thank you for sharing your story. Your courage inspires others.');
      loadStories();
    } catch (err) {
      setMessage('Unable to share your story right now. Please try again.');
    }
  };

  const filteredStories = filter === 'all' ? stories : stories.filter(story => story.category === filter);

  return (
    <section className="page community">
      <h2>Community Support Circle</h2>
      <p>You are not alone in your journey. This is a safe space where we share our experiences, offer support, and remind each other that healing is possible. Every story matters.</p>

      <div className="community-intro">
        <h3>🌟 Community Guidelines</h3>
        <ul>
          <li><strong>Be Kind:</strong> Offer support and understanding to others</li>
          <li><strong>Respect Privacy:</strong> Share only what you're comfortable sharing</li>
          <li><strong>Seek Professional Help:</strong> When needed, encourage professional support</li>
          <li><strong>Stay Positive:</strong> Focus on hope, growth, and healing</li>
          <li><strong>Listen Actively:</strong> Read others' stories with compassion</li>
        </ul>
      </div>

      <div className="share-story">
        <h3>Share Your Story</h3>
        <p>Your experience can light the way for someone else. What would you like to share today?</p>
        <form onSubmit={submit} className="story-form">
          <div className="form-row">
            <label>
              Category
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.emoji} {cat.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your story a title"
                required
              />
            </label>
          </div>
          <label>
            Your Story
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, experiences, or what you're going through. Remember, you can be as open as you feel comfortable being."
              required
            />
          </label>
          <button type="submit" className="share-btn">Share My Story</button>
        </form>
      </div>

      {message && <p className="message">{message}</p>}

      <div className="stories-section">
        <div className="stories-header">
          <h3>Community Stories</h3>
          <div className="filter-controls">
            <label>Filter by category:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Stories</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.emoji} {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredStories.length === 0 ? (
          <div className="empty-stories">
            <p>No stories in this category yet. Be the first to share!</p>
            <div className="illustration" style={{ fontSize: '3rem', margin: '1rem 0' }}>💭</div>
          </div>
        ) : (
          <div className="stories">
            {filteredStories.map((story) => (
              <article key={story._id} className="story">
                <div className="story-header">
                  <h4>{story.title}</h4>
                  <span className="story-category">
                    {categories.find(cat => cat.value === story.category)?.emoji} {categories.find(cat => cat.value === story.category)?.label}
                  </span>
                </div>
                <p className="story-content">{story.content}</p>
                <div className="story-footer">
                  <small className="story-date">{new Date(story.createdAt).toLocaleDateString()}</small>
                  <span className="support-emoji">💙</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="community-support">
        <h3>🫂 Remember</h3>
        <p>Reading others' stories and sharing your own takes courage. You're part of a community that cares. If you're struggling, please reach out to a mental health professional. You deserve support and healing.</p>
        <div className="crisis-resources">
          <p><strong>Crisis Support:</strong> If you're in crisis, call 988 (US) or text HOME to 741741 for the Crisis Text Line.</p>
        </div>
      </div>
    </section>
  );
}
