import React from 'react';
import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

const icons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
];

function CertCard({ name, issuer, icon }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      background:'var(--card)', border:'1px solid var(--border)',
      borderRadius:10, padding:'1.5rem', display:'flex', alignItems:'flex-start', gap:'1rem',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.6s ease',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.transform='translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=visible?'translateY(0)':'translateY(30px)'; }}
    >
      <div style={{ width:44, height:44, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.15)' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize:'0.92rem', fontWeight:500, marginBottom:'0.3rem' }}>{name}</div>
        <div style={{ fontSize:'0.78rem', color:'var(--muted)', fontFamily:"'DM Mono', monospace" }}>{issuer}</div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certs" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <SectionLabel>Credentials</SectionLabel>
        <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(2rem,3.5vw,3rem)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:'3rem', lineHeight:1.1 }}>Certifications</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.25rem' }}>
          {data.certifications.map((c, i) => <CertCard key={i} {...c} icon={icons[i]} />)}
        </div>
      </div>
    </section>
  );
}
