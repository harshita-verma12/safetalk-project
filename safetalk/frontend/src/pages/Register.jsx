import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', form);
      setMsg('Registered as ' + res.data.user.name);
      window.localStorage.setItem('safetalk-token', res.data.token);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <section className="page auth">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <label>Name<input type="text" value={form.name} onChange={e => setForm({...form,name:e.target.value})} required /></label>
        <label>Email<input type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required /></label>
        <label>Password<input type="password" value={form.password} onChange={e => setForm({...form,password:e.target.value})} required /></label>
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </section>
  );
}
