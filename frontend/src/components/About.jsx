import React from 'react';
import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

function StatCard({ num, label }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 8, padding: '1.5rem',
      transition: 'border-color 0.25s, transform 0.25s, opacity 0.6s',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.transform='translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)'; }}
    >
      <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:'2.2rem', color:'var(--accent)', lineHeight:1, marginBottom:'0.4rem' }}>{num}</div>
      <div style={{ fontSize:'0.78rem', color:'var(--muted)', letterSpacing:'0.05em' }}>{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <SectionLabel>Who I Am</SectionLabel>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }} className="about-grid">
          <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
            <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(2rem,3.5vw,3rem)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:'1.5rem', lineHeight:1.1 }}>
              Building the <em style={{ fontStyle:'italic', color:'var(--accent)' }}>intelligent</em> layer of software
            </h2>
            {data.about.map((p, i) => (
              <p key={i} style={{ color:'var(--muted)', marginBottom:'1.25rem', fontSize:'0.97rem', lineHeight:1.9 }}
                dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text);font-weight:500">$1</strong>') }}
              />
            ))}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {data.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        @media (max-width: 500px) { }
      `}</style>
    </section>
  );
}
