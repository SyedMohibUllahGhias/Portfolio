import React from 'react';
import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

export default function Education() {
  const { ref, visible } = useReveal();
  const { degree, institution, location, period, courses } = data.education;

  return (
    <section id="education" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <SectionLabel>Academic Background</SectionLabel>
        <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(2rem,3.5vw,3rem)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:'3rem', lineHeight:1.1 }}>Education</h2>

        <div ref={ref} style={{
          background:'var(--card)', border:'1px solid var(--border)', borderRadius:12,
          padding:'2.5rem', display:'grid', gridTemplateColumns:'auto 1fr',
          gap:'2rem', alignItems:'start', maxWidth:860,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
          className="edu-card"
        >
          <div style={{ width:56, height:56, background:'rgba(0,255,179,0.08)', border:'1px solid rgba(0,255,179,0.2)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent3)" strokeWidth="1.5">
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'1.5rem', fontWeight:400, marginBottom:'0.3rem' }}>{degree}</h3>
            <p style={{ fontSize:'0.85rem', color:'var(--accent3)', marginBottom:'0.75rem', fontWeight:500 }}>{institution} — {location}</p>
            <p style={{ fontFamily:"'DM Mono', monospace", fontSize:'0.72rem', color:'var(--muted)', letterSpacing:'0.1em', marginBottom:'1rem' }}>{period}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
              {courses.map(c => (
                <span key={c} style={{ fontSize:'0.72rem', padding:'0.25rem 0.65rem', borderRadius:3, background:'rgba(0,255,179,0.06)', color:'var(--muted)', border:'1px solid rgba(0,255,179,0.15)', fontFamily:"'DM Mono', monospace" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:600px) { .edu-card { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
