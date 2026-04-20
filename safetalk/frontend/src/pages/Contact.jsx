import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        text: 'Message sent! We’ll get back to you soon.' 
      });
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h2>
        <p className="text-gray-600">Have questions? We're here to listen and help.</p>
      </div>

      <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100" onSubmit={submit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            name="name"
            value={form.name} 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="Your name" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            name="email"
            type="email" 
            value={form.email} 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="you@example.com" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            name="message"
            value={form.message} 
            onChange={handleChange} 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="How can we help?" 
            required 
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.text && (
          <div className={`mt-4 p-4 rounded-lg text-center text-sm font-medium ${
            status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {status.text}
          </div>
        )}
      </form>
    </section>
  );
}