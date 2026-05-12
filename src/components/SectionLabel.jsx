import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.72rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' }} />
      {children}
    </p>
  );
}
