import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    
    // Basic Frontend Validation
    if (form.password.length < 6) {
      setMsg({ text: 'Password must be at least 6 characters long.', type: 'error' });
      return;
    }

    setIsLoading(true);
    setMsg({ text: '', type: '' });

    try {
      const res = await axios.post('/api/auth/register', form);
      
      // Save token and redirect
      window.localStorage.setItem('safetalk-token', res.data.token);
      setMsg({ text: `Account created! Welcome, ${res.data.user.name}.`, type: 'success' });
      
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
      
    } catch (err) {
      setMsg({ 
        text: err.response?.data?.msg || 'Registration failed. Try a different email.', 
        type: 'error' 
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Join SafeTalk</h2>
          <p className="text-gray-500 mt-2">Start your journey toward a calmer mind.</p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input 
              name="name"
              type="text" 
              value={form.name} 
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Enter your name"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              name="email"
              type="email" 
              value={form.email} 
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="you@example.com"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input 
              name="password"
              type="password" 
              value={form.password} 
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Create a strong password"
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100'
            }`}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {msg.text && (
          <div className={`mt-6 p-3 rounded-xl text-center text-sm font-medium ${
            msg.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {msg.text}
          </div>
        )}

        <p className="mt-8 text-center text-gray-600 text-sm">
          Already have an account? 
          <Link to="/login" className="text-blue-600 font-bold hover:underline ml-1">Log In</Link>
        </p>
      </div>
    </section>
  );
}