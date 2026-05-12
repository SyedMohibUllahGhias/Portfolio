import React from 'react';
import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

function SkillGroup({ title, tags }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 10, padding: '1.75rem',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.6s ease',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent2)'; e.currentTarget.style.transform='translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=visible?'translateY(0)':'translateY(30px)'; }}
    >
      <h3 style={{ fontFamily:"'DM Mono', monospace", fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.05em', marginBottom:'1rem', textTransform:'uppercase', color:'var(--accent)' }}>
        {title}
      </h3>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize:'0.73rem', padding:'0.3rem 0.75rem', borderRadius:100,
            border:'1px solid var(--border)', color:'var(--muted)',
            fontFamily:"'DM Mono', monospace", transition:'all 0.2s', cursor:'default',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.background='rgba(0,212,255,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.background='transparent'; }}
          >{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <SectionLabel>Technical Arsenal</SectionLabel>
        <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(2rem,3.5vw,3rem)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:'3rem', lineHeight:1.1 }}>
          Skills &amp; <em style={{ fontStyle:'italic', color:'var(--accent)' }}>Technologies</em>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem' }}>
          {data.skills.map((s, i) => <SkillGroup key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
