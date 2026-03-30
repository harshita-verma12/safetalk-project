import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setSent('Thanks, we received your message and will reach out soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="page contact">
      <h2>Get in touch</h2>
      <form className="stack" onSubmit={submit}>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" required />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
      {sent && <p>{sent}</p>}
    </section>
  );
}
