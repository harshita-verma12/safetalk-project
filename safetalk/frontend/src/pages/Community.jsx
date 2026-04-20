import { useEffect, useState } from 'react';
import axios from 'axios';

const categories = [
  { value: 'all', label: 'All', emoji: '🏠' },
  { value: 'anxiety', label: 'Anxiety', emoji: '😰' },
  { value: 'depression', label: 'Sadness', emoji: '😢' },
  { value: 'success', label: 'Success', emoji: '✨' }
];

export default function Community() {
  const [stories, setStories] = useState([]); // Imagine this is populated with 10+ entries
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="page community-page">
      {/* 1. Announcement Banner */}
      <div className="announcement-banner">
        <h2>Welcome to SafeTalk Community</h2>
        <p>A space built for support, shared wisdom, and genuine human connection. 1.2k members online.</p>
      </div>

      <div className="community-grid-layout">
        {/* 2. LEFT: Profile & Stats */}
        <aside className="sidebar-left">
          <div className="card user-profile-card">
            <div className="profile-banner"></div>
            <div className="avatar-large">H</div>
            <h3>Harshita</h3>
            <p className="bio">"Turning vulnerability into strength."</p>
            <div className="stats-row">
              <div><span>Stories</span><strong>12</strong></div>
              <div><span>Support</span><strong>45</strong></div>
            </div>
          </div>
          <div className="card navigation-card">
            <h4>Quick Links</h4>
            <ul>
              <li>My Saved Stories</li>
              <li>Community Guidelines</li>
              <li>Contact Moderators</li>
            </ul>
          </div>
        </aside>

        {/* 3. CENTER: Main Feed (Lenghty & Rich) */}
        <main className="feed-stream">
          <div className="card share-post">
            <textarea placeholder="Share your experience with the community..." />
            <div className="post-actions">
              <button>Photo</button>
              <button className="btn-post">Publish Story</button>
            </div>
          </div>

          {/* Stories List */}
          {stories.map((story) => (
            <article key={story._id} className="card story-card">
              <div className="story-header">
                <div className="author-info">
                  <div className="avatar-small">{story.author?.[0]}</div>
                  <div>
                    <h4>{story.author}</h4>
                    <span className="timestamp">Shared in {story.category} • 2h ago</span>
                  </div>
                </div>
              </div>
              <p className="story-text">{story.content}</p>
              <div className="story-actions">
                <button>💬 12 Comments</button>
                <button>💙 Support</button>
                <button>🔄 Share</button>
              </div>
            </article>
          ))}
          
          {/* Load more placeholder to make it feel lengthy */}
          <button className="load-more">Load more stories...</button>
        </main>

        {/* 4. RIGHT: Trending Section */}
        <aside className="sidebar-right">
          <div className="card trending-card">
            <h3>Trending Now</h3>
            <div className="trending-list">
              <p>#MentalHealthAwareness</p>
              <p>#SmallWins</p>
              <p>#GratitudeJourney</p>
            </div>
          </div>
          <div className="card support-card">
            <h3>Need Help?</h3>
            <p>You are never alone. Click here to speak with a mentor.</p>
            <button className="btn-help">Connect Now</button>
          </div>
        </aside>
      </div>
    </div>
  );
}