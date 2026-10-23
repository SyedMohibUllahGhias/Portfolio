import { data } from '../data/portfolio';
import SectionLabel from './SectionLabel';
import { useReveal } from './useReveal';

function ExperienceCard({ company, role, period, location, description }) {
  const { ref, visible } = useReveal();
  return (
    <article ref={ref} style={{
      padding: '1.5rem 1.75rem', background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 10, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.55s ease',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.35rem', fontWeight: 400 }}>{company}</h3>
        <span style={{ color: 'var(--accent)', fontFamily: "'DM Mono', monospace", fontSize: '.72rem' }}>{period}</span>
      </div>
      <p style={{ color: 'var(--text)', marginBottom: '.4rem', fontWeight: 500 }}>{role}</p>
      <p style={{ color: 'var(--muted)', fontSize: '.8rem', marginBottom: '.75rem' }}>{location}</p>
      <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem' }}>{description}</p>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <SectionLabel>Professional Journey</SectionLabel>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 400, marginBottom: '2rem', lineHeight: 1.1 }}>
          Internships &amp; <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Experience</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {data.experience.map((item) => <ExperienceCard key={item.company} {...item} />)}
        </div>
      </div>
    </section>
  );
}
