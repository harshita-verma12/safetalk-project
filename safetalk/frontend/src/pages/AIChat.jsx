import { useState } from 'react';
import axios from 'axios';

export default function AIChat() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const send = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const userText = message;
    setConversation((prev) => [...prev, { role: 'user', text: userText }]);
    setMessage('');

    const res = await axios.post('/api/ai/assistant', { message: userText });
    setConversation((prev) => [...prev, { role: 'assistant', text: res.data.response }]);
  };

  return (
    <section className="page ai-chat">
      <h2>AI Comfort Assistant</h2>
      <div className="chat-box">
        {conversation.map((item, idx) => (
          <div key={idx} className={item.role}>{item.role}: {item.text}</div>
        ))}
      </div>
      <form onSubmit={send} className="stack">
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share how you feel" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
