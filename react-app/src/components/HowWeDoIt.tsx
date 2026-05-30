import ExpandableCards from './ExpandableCards';

export default function HowWeDoIt() {
  return (
    <section id="how" className="section" style={{ borderTop: '1px solid rgba(200,159,86,.1)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="fade-up" style={{ maxWidth: '48rem' }}>
          <span className="eyebrow" style={{ color: '#e07a5f' }}>
            <span className="eyebrow-line" style={{ background: '#e07a5f' }} />
            Our Method
          </span>
          <h2 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', color: '#fdf8f3', letterSpacing: '-.03em', lineHeight: '1.05', marginTop: '1rem', fontWeight: 400 }}>
            Five principles
          </h2>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#c89f56', fontFamily: "'DM Serif Display', serif", marginTop: '.5rem', letterSpacing: '-.02em', lineHeight: '1.2', fontWeight: 400 }}>
            one purpose
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(253,248,243,.55)', marginTop: '1rem', maxWidth: '32rem', lineHeight: '1.7' }}>
            Most schools teach children <em>what</em> to think. We teach them <em>how</em> to be. Five principles, practised daily, that parents see transform their children.
          </p>
        </div>

        <div className="fade-up" style={{ marginTop: '3rem' }}>
          <ExpandableCards />
        </div>

        <div className="fade-up" style={{ marginTop: '4rem' }}>
          <div className="how-bridge">
            <div className="how-bridge-line" />
            <span className="how-bridge-ornament">◈</span>
            <div className="how-bridge-line" />
          </div>
        </div>

        <div className="fade-up" style={{ marginTop: '2.5rem' }}>
          <div className="pullquote">
            <span className="pullquote-mark">&ldquo;</span>
            <p className="pullquote-text">We don't change children.<br />We give them the tools to <span className="gold-metallic">change themselves.</span></p>
            <div className="pullquote-attr">
              <div className="pullquote-dash" />
              <p className="pullquote-name">The Resamskar Philosophy</p>
              <div className="pullquote-dash" />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '.75rem', color: 'rgba(253,248,243,.35)', marginTop: '-.5rem', letterSpacing: '.05em' }}>
              Want to see it in action?
            </p>
            <a href="#contact" className="pullquote-btn">
              Book a demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
