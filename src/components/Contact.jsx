import React from 'react';
import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

const { email, phone, linkedin, github } = data.contact;

const contactItems = [
  { label:'Email', value: email, href:`mailto:${email}`, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { label:'Phone', value: phone, href:`tel:${phone.replace(/\s/g,'')}`, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  { label:'LinkedIn', value:'linkedin.com/in/syed-mohib-ullah-ghias', href:linkedin, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label:'GitHub', value:'github.com/SyedMohibUllahGhias', href:github, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
];

export default function Contact() {
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();

  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} className="contact-grid">

          <div ref={leftRef} style={{ opacity: leftVisible?1:0, transform: leftVisible?'translateY(0)':'translateY(30px)', transition:'all 0.6s ease' }}>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(2rem,3.5vw,3rem)', fontWeight:400, letterSpacing:'-0.02em', marginBottom:'1rem', lineHeight:1.1 }}>
              Let's Build Something <em style={{ fontStyle:'italic', color:'var(--accent)' }}>Together</em>
            </h2>
            <p style={{ color:'var(--muted)', fontSize:'0.97rem', lineHeight:1.8, marginBottom:'2rem' }}>
              Open to work, research collaborations, freelance AI/ML projects, and full-time roles in AI engineering. Feel free to reach out through any of the channels below.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              {contactItems.map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'1rem 1.25rem', background:'var(--card)', border:'1px solid var(--border)', borderRadius:8, color:'var(--text)', transition:'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.transform='translateX(6px)'; e.currentTarget.style.color='var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=''; e.currentTarget.style.color='var(--text)'; }}
                >
                  {item.icon}
                  <div>
                    <span style={{ fontSize:'0.72rem', color:'var(--muted)', fontFamily:"'DM Mono', monospace", letterSpacing:'0.08em', textTransform:'uppercase', display:'block', marginBottom:'0.15rem' }}>{item.label}</span>
                    <span style={{ fontSize:'0.9rem' }}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div ref={rightRef} style={{ display:'flex', flexDirection:'column', gap:'1rem', opacity: rightVisible?1:0, transform: rightVisible?'translateY(0)':'translateY(30px)', transition:'all 0.6s ease' }}>
            <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:10, padding:'2rem', textAlign:'center' }}>
              <p style={{ fontSize:'0.75rem', fontFamily:"'DM Mono', monospace", color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.75rem' }}>Current Status</p>
              <p style={{ fontSize:'0.85rem', fontWeight:500, color:'var(--accent3)' }}>
                <span style={{ display:'inline-block', width:10, height:10, borderRadius:'50%', background:'var(--accent3)', marginRight:'0.5rem', animation:'pulse 2s ease-in-out infinite' }} />
                Open to Opportunities
              </p>
              <p style={{ fontSize:'0.8rem', color:'var(--muted)', marginTop:'0.5rem' }}>Aspiring AI/ML Engineer | Open to New Opportunities</p>
            </div>
            <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:10, padding:'2rem', textAlign:'center' }}>
              <p style={{ fontSize:'0.75rem', fontFamily:"'DM Mono', monospace", color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'1rem' }}>Preferred Work</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', justifyContent:'center' }}>
                {['Agentic AI Systems','LLM Pipelines','RAG Engineering','ML Research','Data Engineering'].map(t => (
                  <span key={t} style={{ fontSize:'0.73rem', padding:'0.3rem 0.75rem', borderRadius:100, border:'1px solid var(--border)', color:'var(--muted)', fontFamily:"'DM Mono', monospace" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,179,0.4)}50%{box-shadow:0 0 0 8px rgba(0,255,179,0)} }
        @media (max-width:900px) { .contact-grid { grid-template-columns:1fr !important; gap:2.5rem !important; } }
      `}</style>
    </section>
  );
}
