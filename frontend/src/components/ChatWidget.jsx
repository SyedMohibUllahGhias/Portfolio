import React, { useEffect, useRef, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function sessionId() {
  const key = 'smug_chat_session';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    sessionStorage.setItem(key, id);
  }
  return id;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi, I'm Mohib's portfolio assistant. Ask me about his projects, skills, or experience." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setError(null);
    setMessages(m => [...m, { role: 'user', text }]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId(), message: text }),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const data = await res.json();
      setMessages(m => [...m, { role: 'assistant', text: data.answer }]);
    } catch (e) {
      setError("Couldn't reach the assistant. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat with portfolio assistant'}
        style={{
          position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 200,
          width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'var(--text)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(20,22,25,0.22)', transition: 'transform 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={e => (e.currentTarget.style.transform = '')}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        )}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: '5.5rem', right: '1.75rem', zIndex: 199,
          width: 360, maxWidth: 'calc(100vw - 2rem)', height: 480, maxHeight: 'calc(100vh - 8rem)',
          background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 14,
          boxShadow: '0 24px 60px rgba(20,22,25,0.18)', display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }} className="chat-panel">
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.2rem' }}>
              Ask about Mohib
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Answers powered by a RAG assistant over his portfolio.</p>
          </div>

          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%', padding: '0.6rem 0.85rem', borderRadius: 10,
                fontSize: '0.85rem', lineHeight: 1.6,
                background: m.role === 'user' ? 'var(--text)' : 'var(--card)',
                color: m.role === 'user' ? '#fff' : 'var(--text)',
                border: m.role === 'user' ? 'none' : '1px solid var(--border)',
              }}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', fontSize: '0.8rem', color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>
                thinking…
              </div>
            )}
            {error && (
              <div style={{ alignSelf: 'flex-start', fontSize: '0.78rem', color: '#b3261e' }}>{error}</div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', padding: '0.85rem', borderTop: '1px solid var(--border)' }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask a question…"
              rows={1}
              style={{
                flex: 1, resize: 'none', border: '1px solid var(--border)', borderRadius: 8,
                padding: '0.6rem 0.75rem', fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif",
                color: 'var(--text)', background: 'var(--bg)', outline: 'none',
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                border: 'none', borderRadius: 8, padding: '0 1rem', cursor: loading ? 'default' : 'pointer',
                background: 'var(--accent)', color: '#000', fontSize: '0.8rem', fontWeight: 500,
                opacity: loading || !input.trim() ? 0.5 : 1,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 480px) {
          .chat-panel { right: 1rem !important; left: 1rem !important; width: auto !important; }
        }
      `}</style>
    </>
  );
}
