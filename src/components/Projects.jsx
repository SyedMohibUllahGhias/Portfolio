import React from 'react';
import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

function ProjectCard({ num, category, title, desc, stack, link }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 12, padding: '2rem', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: '1rem',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.6s ease',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(0,212,255,0.3)'; e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.querySelector('.top-bar').style.opacity='1'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=visible?'translateY(0)':'translateY(30px)'; e.currentTarget.querySelector('.top-bar').style.opacity='0'; }}
    >
      <div className="top-bar" style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg, var(--accent), var(--accent2))', opacity:0, transition:'opacity 0.3s' }} />
      <span style={{ fontFamily:"'DM Mono', monospace", fontSize:'0.7rem', color:'var(--accent)', letterSpacing:'0.1em' }}>{num} / {category}</span>
      <h3 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'1.3rem', fontWeight:400, lineHeight:1.2 }}>{title}</h3>
      <p style={{ fontSize:'0.88rem', color:'var(--muted)', lineHeight:1.8, flex:1 }}>{desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
        {stack.map(s => (
          <span key={s} style={{ fontFamily:"'DM Mono', monospace", fontSize:'0.68rem', padding:'0.2rem 0.6rem', borderRadius:3, background:'rgba(123,97,255,0.12)', color:'var(--accent2)', border:'1px solid rgba(123,97,255,0.2)' }}>{s}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', fontSize:'0.8rem', color:'var(--accent)', fontFamily:"'DM Mono', monospace", letterSpacing:'0.05em', transition:'gap 0.2s', marginTop:'auto' }}
        onMouseEnter={e => e.currentTarget.style.gap='0.7rem'}
        onMouseLeave={e => e.currentTarget.style.gap='0.4rem'}
      >
        View on GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <SectionLabel>Selected Work</SectionLabel>
        <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(2rem,3.5vw,3rem)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:'3rem', lineHeight:1.1 }}>
          Projects &amp; <em style={{ fontStyle:'italic', color:'var(--accent)' }}>Builds</em>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:'1.5rem' }}>
          {data.projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}
