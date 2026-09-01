import React from 'react';
import { data } from '../data/portfolio';

export default function Footer() {
  const { email, phone, linkedin, github, address } = data.contact;
  return (
    <footer style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)', padding:'3rem 4rem', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr auto', gap:'2rem', alignItems:'center' }} className="footer-inner">
        <div style={{ fontSize:'0.8rem', color:'var(--muted)', lineHeight:1.8, fontFamily:"'DM Mono', monospace" }}>
          <strong style={{ color:'var(--text)', display:'block', marginBottom:'0.25rem', fontSize:'0.85rem', fontFamily:"'Outfit', sans-serif", letterSpacing:'0.05em' }}>
            {data.name}
          </strong>
          {address}<br />
          {phone} &nbsp;·&nbsp; {email}
        </div>
        <div style={{ fontSize:'0.75rem', color:'var(--muted)', fontFamily:"'DM Mono', monospace", textAlign:'right' }} className="footer-copy">
          <span style={{ display:'block', marginBottom:'0.4rem' }}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color:'var(--accent)' }}>LinkedIn</a>
            &nbsp;·&nbsp;
            <a href={github} target="_blank" rel="noopener noreferrer" style={{ color:'var(--accent)' }}>GitHub</a>
          </span>
          © {new Date().getFullYear()} {data.name}.<br />All rights reserved.
        </div>
      </div>
      <style>{`
        @media (max-width:900px) {
          footer { padding: 2.5rem 2rem !important; }
          .footer-inner { grid-template-columns: 1fr !important; }
          .footer-copy { text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
