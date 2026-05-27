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
          <h2 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', color: '#120c0b', letterSpacing: '-.03em', lineHeight: '1.05', marginTop: '1rem', fontWeight: 400 }}>
            How we do it
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(42,27,24,.6)', marginTop: '1rem', maxWidth: '32rem', lineHeight: '1.7' }}>
            Most schools teach children <em>what</em> to think. We teach them <em>how</em> to be. Five principles, practised daily, that parents see transform their children.
          </p>
        </div>

        <div className="fade-up" style={{ marginTop: '3rem' }}>
          <ExpandableCards />
        </div>

        <div className="fade-up" style={{ marginTop: '3rem' }}>
          <div className="pullquote">
            <span className="pullquote-mark">&ldquo;</span>
            <p className="pullquote-text">We don't change children.<br />We give them the tools to <span className="gold-metallic">change themselves.</span></p>
            <div className="pullquote-attr">
              <div className="pullquote-dash" />
              <p className="pullquote-name">The Resamskar Philosophy</p>
              <div className="pullquote-dash" />
            </div>
            <a href="#demo" className="pullquote-btn">
              Book a demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="section-divider"><span className="section-divider-danda">॥</span></div>
    </section>
  );
}
