import { useState, useEffect, useRef } from 'react';
import api from '../api';

export default function AIChat() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    { role: 'assistant', text: "Hello! I'm your SafeTalk AI companion. How are you feeling today? You can share anything that's on your mind." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const send = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userText = message;
    setConversation((prev) => [...prev, { role: 'user', text: userText }]);
    setMessage('');
    setIsLoading(true);

    try {
      // Sending context to the AI (ensure your backend handles history for better responses)
      const res = await api.post('/ai/assistant', { 
        message: userText,
        history: conversation.slice(-5) // Send last 5 messages for context
      });
      setConversation((prev) => [...prev, { role: 'assistant', text: res.data.response }]);
    } catch (error) {
      setConversation((prev) => [...prev, { 
        role: 'assistant', 
        text: "I'm here for you, but I'm having a technical hiccup. Could you try saying that again?" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page ai-chat">
      <div className="concern-intro">
        <h2>AI Comfort Assistant</h2>
      </div>

      <div className="chat-box">
        {conversation.map((item, idx) => (
          <div key={idx} className={item.role}>
            {item.text}
          </div>
        ))}
        {isLoading && <div className="assistant animate-pulse">AI is thinking...</div>}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={send} className="chat-input-form">
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Share your thoughts..."
          rows="1"
        />
        <button type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
}