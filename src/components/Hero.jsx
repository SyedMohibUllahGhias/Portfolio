import React from 'react';
import { data } from '../data/portfolio';

const codeLines = [
  { ln:'1', parts: [{ c:'kw', t:'from' }, { c:'', t:' openai_agents ' }, { c:'kw', t:'import' }, { c:'fn', t:' Agent' }, { c:'', t:', ' }, { c:'fn', t:'Runner' }] },
  { ln:'2', parts: [{ c:'kw', t:'from' }, { c:'', t:' langchain ' }, { c:'kw', t:'import' }, { c:'fn', t:' RAGChain' }] },
  { ln:'3', parts: [] },
  { ln:'4', parts: [{ c:'cm', t:'# Multi-agent orchestration' }] },
  { ln:'5', parts: [{ c:'va', t:'researcher' }, { c:'', t:' = ' }, { c:'fn', t:'Agent' }, { c:'', t:'(' }] },
  { ln:'6', parts: [{ c:'', t:'  model=' }, { c:'str', t:'"llama3.1"' }, { c:'', t:',' }] },
  { ln:'7', parts: [{ c:'', t:'  tools=[' }, { c:'fn', t:'web_search' }, { c:'', t:', ' }, { c:'fn', t:'rag_retrieval' }, { c:'', t:'],' }] },
  { ln:'8', parts: [{ c:'', t:'  output=' }, { c:'fn', t:'StructuredOutput' }] },
  { ln:'9', parts: [{ c:'', t:')' }] },
  { ln:'10', parts: [] },
  { ln:'11', parts: [{ c:'cm', t:'# Zero-cost local inference ✓' }] },
  { ln:'12', parts: [{ c:'va', t:'result' }, { c:'', t:' = ' }, { c:'kw', t:'await' }, { c:'fn', t:' Runner.run' }, { c:'', t:'(' }, { c:'va', t:'researcher' }, { c:'', t:')' }] },
];

const colors = { kw:'#ff79c6', fn:'#8be9fd', str:'#f1fa8c', cm:'#6272a4', va:'var(--accent3)', '':'var(--text)' };

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '6rem 4rem 4rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', opacity:0.12, background:'var(--accent)', top:-200, right:-100, pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', opacity:0.1, background:'var(--accent2)', bottom:-200, left:-100, pointerEvents:'none' }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        alignItems: 'center', position: 'relative', zIndex: 1,
      }} className="hero-inner">

        {/* Left */}
        <div>
          <p style={{
            fontFamily:"'DM Mono', monospace", fontSize:'0.75rem',
            letterSpacing:'0.2em', textTransform:'uppercase',
            color:'var(--accent)', marginBottom:'1.5rem',
            display:'flex', alignItems:'center', gap:'0.75rem',
          }}>
            <span style={{ display:'inline-block', width:32, height:1, background:'var(--accent)' }} />
            Available for Opportunities
          </p>

          <h1 style={{
            fontFamily:"'DM Serif Display', serif",
            fontSize:'clamp(2.8rem, 5vw, 4.5rem)',
            lineHeight:1.05, fontWeight:400,
            marginBottom:'1.5rem', letterSpacing:'-0.02em',
          }}>
            Syed Mohib<br />
            <em style={{ fontStyle:'italic', color:'var(--accent)' }}>Ullah Ghias</em>
          </h1>

          <p style={{ fontSize:'1rem', color:'var(--muted)', maxWidth:480, lineHeight:1.8, marginBottom:'2.5rem' }}>
            AI/ML Engineer specializing in <strong style={{ color:'var(--text)' }}>agentic systems</strong>, multi-agent frameworks, and LLM-powered pipelines. Building intelligent systems that reason, retrieve, and act — with a focus on local-first, cost-efficient inference.
          </p>

          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
              style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                padding:'0.75rem 1.75rem', borderRadius:4, fontSize:'0.85rem',
                fontWeight:500, letterSpacing:'0.05em', cursor:'pointer', border:'none',
                background:'var(--accent)', color:'#000', transition:'all 0.25s',
                fontFamily:"'Outfit', sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(0,212,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--accent)'; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
            >
              ▶ View Projects
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
              style={{
                display:'inline-flex', alignItems:'center', gap:'0.5rem',
                padding:'0.75rem 1.75rem', borderRadius:4, fontSize:'0.85rem',
                fontWeight:500, letterSpacing:'0.05em', cursor:'pointer',
                background:'transparent', color:'var(--text)',
                border:'1px solid var(--border)', transition:'all 0.25s',
                fontFamily:"'Outfit', sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.transform=''; }}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Code Card */}
        <div style={{
          background:'var(--card)', border:'1px solid var(--border)',
          borderRadius:12, padding:'2rem', backdropFilter:'blur(8px)',
          animation:'floatCard 6s ease-in-out infinite',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem', paddingBottom:'1rem', borderBottom:'1px solid var(--border)' }}>
            <div style={{ display:'flex', gap:6 }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />
              ))}
            </div>
            <span style={{ fontFamily:"'DM Mono', monospace", fontSize:'0.72rem', color:'var(--muted)' }}>
              agent_pipeline.py
            </span>
          </div>
          {codeLines.map(line => (
            <div key={line.ln} style={{ fontFamily:"'DM Mono', monospace", fontSize:'0.78rem', lineHeight:2, display:'flex', gap:'1rem' }}>
              <span style={{ color:'var(--muted)', minWidth:16, textAlign:'right' }}>{line.ln}</span>
              <span>
                {line.parts.map((p, i) => (
                  <span key={i} style={{ color: colors[p.c] || 'var(--text)' }}>{p.t}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr !important; }
          #hero { padding: 5rem 2rem 3rem !important; }
        }
      `}</style>
    </section>
  );
}
