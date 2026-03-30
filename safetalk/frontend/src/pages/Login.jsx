import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      setMsg('Logged in as ' + res.data.user.name);
      window.localStorage.setItem('safetalk-token', res.data.token);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <section className="page auth">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label>Email<input type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required /></label>
        <label>Password<input type="password" value={form.password} onChange={e => setForm({...form,password:e.target.value})} required /></label>
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </section>
  );
}
