import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles.css';

// Pages imports remain the same...
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Community from './pages/Community';
import AreasOfConcern from './pages/AreasOfConcern';
import AIChat from './pages/AIChat';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import MoodBoard from './pages/MoodBoard';
import UnderstandingEmotions from './pages/UnderstandingEmotions';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

// A "Protected Route" component to guard private pages
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('safetalk-token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('safetalk-token');
    setIsLoggedIn(!!token);
  }, [location]); // Re-check login status whenever the URL changes

  const handleLogout = () => {
    localStorage.removeItem('safetalk-token');
    window.location.href = '/'; // Simple reset
  };

  return (
  <div className="app">
    <header className="site-header">
      <h1>SafeTalk <span style={{fontSize: '1rem', fontWeight: '400'}}>v1.0</span></h1>
      
      <nav>
        <Link to="/community">Community</Link>
        <Link to="/areas">Areas</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/moodboard">Moodboard</Link>
        <Link to="/assistant" className="auth-btn">AI Guide</Link>
        
        {isLoggedIn ? (
          <>
            <Link to="/profile">My Sanctuary</Link>
            <button onClick={handleLogout} style={{width: 'auto'}}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="auth-btn">Join Free</Link>
          </>
        )}
      </nav>
    </header>

    <main>
      {/* The 'page' class adds the card styling and shadow to all routes */}
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<div className="page auth"><Login /></div>} />
          <Route path="/register" element={<div className="page auth"><Register /></div>} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/emotions" element={<UnderstandingEmotions />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/moodboard" element={<ProtectedRoute><MoodBoard /></ProtectedRoute>} />
          <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
          <Route path="/areas" element={<ProtectedRoute><AreasOfConcern /></ProtectedRoute>} />
          <Route path="/assistant" element={<ProtectedRoute><AIChat /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </main>

    <footer>
      <p>© 2026 SafeTalk • Empower Your Mind</p>
    </footer>
  </div>
);
}

export default App;