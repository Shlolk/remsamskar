import { useStatCounters } from '../hooks/useStatCounters';

export default function Hero() {
  useStatCounters();

  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-dots" />
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => <div key={i} className="hero-particle" />)}
      </div>
      <div className="hero-pattern" />
      <div className="hero-mandala" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-eyebrow" style={{ marginBottom: '1.75rem' }}>
          <span className="eyebrow" style={{ color: '#c89f56' }}>
            <span className="eyebrow-line" style={{ background: '#c89f56' }} />
            Foundational Development · Ages 5–16
          </span>
        </div>
        <div style={{ maxWidth: '56rem', marginBottom: '2rem', position: 'relative' }}>
          <h1 className="hero-h1">
            Raising children who are <span className="red-metallic">wise</span>, <span style={{ color: '#d4a017' }}>kind</span>,<br className="hidden-sm" /> and <em className="blue-metallic">grounded</em>
          </h1>
        </div>
        <img src="/kid.png" alt="" className="hero-kid-img" loading="lazy" />
        <p className="hero-p">
          Evidence-based programmes integrating modern developmental science with the timeless wisdom of classical Indian thought — building inner clarity, empathy, and purpose from childhood.
        </p>
        <a href="#programs" className="hero-cta">
          Explore Programmes
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2 7.5h11M7.5 2l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="metrics fade-up">
          <div className="metric">
            <p className="metric-n">3</p>
            <p className="metric-l">Age-group programmes</p>
          </div>
          <div className="metric">
            <p className="metric-n">15+</p>
            <p className="metric-l">Modules per programme</p>
          </div>
          <div className="metric">
            <p className="metric-n">200+</p>
            <p className="metric-l">Children enrolled</p>
          </div>
          <div className="metric">
            <p className="metric-n">5</p>
            <p className="metric-l">Partner schools</p>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
