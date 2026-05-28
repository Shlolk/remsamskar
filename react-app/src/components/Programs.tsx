import { programs } from '../data/programs';
import { useGoldMagic } from '../hooks/useGoldMagic';

export default function Programs() {
  useGoldMagic('.prog-card');

  return (
    <section id="programs" className="section" style={{ background: 'linear-gradient(160deg, rgba(219,202,176,.14) 0%, rgba(243,237,227,.2) 50%, rgba(219,202,176,.08) 100%)', borderTop: '1px solid rgba(200,159,86,.1)' }}>
      <div className="container">
        <div className="section-header fade-up">
          <div>
            <span className="eyebrow" style={{ color: '#c89f56' }}>
              <span className="eyebrow-line" style={{ background: '#c89f56' }} />
              Programmes
            </span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: '#120c0b', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
              Three stages
            </h2>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#c89f56', fontFamily: "'DM Serif Display', serif", marginTop: '.5rem', letterSpacing: '-.02em', lineHeight: '1.2', fontWeight: 400 }}>
              one inner journey
            </h2>
          </div>
          <p>Each stage is developmentally calibrated — meeting children where they are and guiding them gently forward.</p>
        </div>
        <div className="grid-3">
          {programs.map(p => (
            <div key={p.idx} className="fade-up">
              <div className="prog-card">
                <div className="prog-header" style={{ background: p.colorLt }}>
                  <span className="prog-watermark" style={{ color: p.color }}>{String(p.idx + 1).padStart(2, '0')}</span>
                  <div>
                    <span className="prog-age" style={{ background: p.color, boxShadow: `0 4px 14px -2px ${p.color}55` }}>{p.age}</span>
                  </div>
                  <p className="prog-stage" style={{ color: p.color }}>{p.label}</p>
                  <h3 className="prog-name" style={{ color: p.color }}>{p.name}</h3>
                  <p className="prog-title">{p.title}</p>
                  <p className="prog-body">{p.body}</p>
                  <span className="prog-pricing">{p.pricing}</span>
                </div>
                <div className="prog-modules">
                  <p className="prog-modules-label">Programme Modules</p>
                  {p.modules.map((m, i) => (
                    <div key={i} className="prog-module">
                      <div className="prog-module-line" style={{ background: p.color }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
                <div className="prog-cta-wrap">
                  <a href="#contact" className="prog-cta" style={{ background: p.colorLt, color: p.color, border: `1.5px solid ${p.color}30` }}>
                    Explore Programme
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
