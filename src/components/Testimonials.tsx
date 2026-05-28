import { useGoldMagic } from '../hooks/useGoldMagic';

const testimonials = [
  {
    initials: 'MK', name: 'Meera Krishnan', from: 'Parent, Chennai',
    text: 'My daughter started the Sprouts programme at age six. Within three months she was resolving conflicts with her brother using breathing exercises she had learnt. I never expected such practical impact.'
  },
  {
    initials: 'RM', name: 'Rakesh Mehrotra', from: 'Parent, Pune',
    text: 'The way they weave the Gītā into practical life — not as religion but as psychology — was what convinced me. My son now asks "What would be the dharmic choice here?" before decisions. He is eleven.'
  },
];

export default function Testimonials() {
  useGoldMagic('.testimonial');

  return (
    <section id="testimonials" className="section" style={{ borderTop: '1px solid rgba(200,159,86,.1)' }}>
      <div className="container">
        <div className="fade-up" style={{ marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ color: '#c89f56' }}>
            <span className="eyebrow-line" style={{ background: '#c89f56' }} />
            What Parents Say
          </span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#120c0b', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
            Real children,<br />real <span className="gold-metallic">change</span>
          </h2>
        </div>
        <div className="grid-2">
          {testimonials.map((t, i) => (
            <div key={i} className="fade-up">
              <blockquote className="testimonial">
                <span className="testimonial-mark">"</span>
                <p className="testimonial-q">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-meta">
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-from">{t.from}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider"><span className="section-divider-danda">॥</span></div>
    </section>
  );
}
