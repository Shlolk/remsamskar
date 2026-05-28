import { pillars } from '../data/pillars';

export default function Pillars() {
  return (
    <section id="pillars" className="section">
      <div className="container">
        <div className="pillars-header fade-up">
          <div>
            <span className="eyebrow" style={{ color: '#e07a5f' }}>
              <span className="eyebrow-line" style={{ background: '#e07a5f' }} />
              Our Approach
            </span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: '#120c0b', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
              Four pillars of<br />inner <span className="gold-metallic">development</span>
            </h2>
          </div>
          <p style={{ fontSize: '.875rem', color: 'rgba(42,27,24,.6)', lineHeight: '1.7', maxWidth: '32rem' }}>
            We do not teach children what to think. We create conditions in which they learn how to think — clearly, kindly, and courageously.
          </p>
        </div>
        {pillars.map((p, i) => (
          <div key={p.n} className="pillar-row fade-up" style={i === pillars.length - 1 ? { borderBottom: 'none' } : {}}>
            <div className="pillar-num">{p.n}</div>
            <div className="pillar-content">
              <h4 className="pillar-title">{p.title}</h4>
              <p className="pillar-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="section-divider"><span className="section-divider-danda">॥</span></div>
    </section>
  );
}
