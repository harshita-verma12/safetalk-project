import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate(); // This allows us to move the user to another page

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg({ text: '', type: '' });

    try {
      const res = await axios.post('/api/auth/login', form);
      
      // 1. Save the token
      window.localStorage.setItem('safetalk-token', res.data.token);
      
      setMsg({ text: `Welcome back, ${res.data.user.name}! Redirecting...`, type: 'success' });
      
      // 2. Redirect to Profile/Dashboard after 1.5 seconds
      // The delay gives the user time to see the success message
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
      
    } catch (err) {
      setMsg({ 
        text: err.response?.data?.msg || 'Login failed. Please check your credentials.', 
        type: 'error' 
      });
      setIsLoading(false); // Only stop loading if it fails so the button doesn't flicker
    }
  };

  
  return (
    <div className="page auth-page">
      <div className="auth-wrapper card">
        <div className="concern-intro">
          <h2>Welcome Back</h2>
          <p>We're glad to see you again. Please sign in to continue your journey.</p>
        </div>
        
        <form onSubmit={submit} className="stack">
          <div className="field-group">
            <label>Email Address</label>
            <input 
              name="email"
              type="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="you@example.com"
              required 
            />
          </div>
          
          <div className="field-group">
            <label>Password</label>
            <input 
              name="password"
              type="password" 
              value={form.password} 
              onChange={handleChange} 
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" disabled={isLoading} className="cta-primary">
            {isLoading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        {msg.text && (
          <p className={`message-box ${msg.type}`}>
            {msg.text}
          </p>
        )}

        <p className="auth-footer">
          New to SafeTalk? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}