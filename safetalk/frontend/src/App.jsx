import { Routes, Route, Link } from 'react-router-dom';
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

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>SafeTalk - Empower Your Mind</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/community">Community</Link>
          <Link to="/areas">Areas of concern</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/moodboard">Moodboard</Link>
          <Link to="/emotions">Emotions</Link>
          <Link to="/assistant">AI Assistant</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="auth-btn">Login</Link>
          <Link to="/register" className="auth-btn">Register</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/moodboard" element={<MoodBoard />} />
          <Route path="/emotions" element={<UnderstandingEmotions />} />
          <Route path="/areas" element={<AreasOfConcern />} />
          <Route path="/assistant" element={<AIChat />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 SafeTalk - Your compassionate companion for mental wellness. Remember, you are not alone. 💙</p>
      </footer>
    </div>
  );
}

export default App;
