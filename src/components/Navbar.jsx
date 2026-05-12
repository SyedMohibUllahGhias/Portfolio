import React, { useState, useEffect } from 'react';

const links = ['About','Skills','Projects','Education','Certs','Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.25rem 4rem',
        background: scrolled ? 'rgba(10,12,16,0.92)' : 'rgba(10,12,16,0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid var(--border)`,
        transition: 'background 0.3s',
      }}>
        <a href="#hero" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.85rem',
          color: 'var(--accent)',
          letterSpacing: '0.08em',
        }}>
          SMUG<span style={{ color: 'var(--muted)' }}>.dev</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.5rem', '@media(max-width:900px)': { display: 'none' } }}
          className="nav-desktop">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.8rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--muted)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{l}</button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="hamburger-btn" style={{
          display: 'none', flexDirection: 'column', gap: 5,
          background: 'none', border: 'none', cursor: 'pointer', padding: 4, zIndex: 101,
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 1.5, background: 'var(--text)',
              transition: 'all 0.3s',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(4px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(4px, -5px)'
                : 'none'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,12,16,0.98)',
          backdropFilter: 'blur(12px)', zIndex: 99,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.3rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--text)',
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          nav { padding: 1rem 2rem !important; }
        }
      `}</style>
    </>
  );
}
