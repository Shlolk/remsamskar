import ScrollStack, { ScrollStackItem } from './ScrollStack';

const testimonials = [
  {
    initials: 'MK', name: 'Meera Krishnan', from: 'Parent, Chennai',
    text: 'My daughter started the Sprouts programme at age six. Within three months she was resolving conflicts with her brother using breathing exercises she had learnt. I never expected such practical impact.'
  },
  {
    initials: 'RM', name: 'Rakesh Mehrotra', from: 'Parent, Pune',
    text: 'The way they weave the Gītā into practical life — not as religion but as psychology — was what convinced me. My son now asks "What would be the dharmic choice here?" before decisions. He is eleven.'
  },
  {
    initials: 'SN', name: 'Shanti Narayan', from: 'Parent, Bangalore',
    text: 'After just two terms in the Vidyarthi programme, our daughter\'s teachers noticed she was more focused and empathetic in class. She even started a small "mindfulness minute" with her friends before exams.'
  },
  {
    initials: 'AP', name: 'Anjali Patel', from: 'Parent, Mumbai',
    text: 'We were initially hesitant about online value education. But the way ReSamskar engages children through stories, art, and discussion made all the difference. Our son actually looks forward to each session.'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ borderTop: '1px solid rgba(200,159,86,.1)', overflow: 'hidden' }}>
      <div className="container">
        <div className="fade-up" style={{ marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ color: '#c89f56' }}>
            <span className="eyebrow-line" style={{ background: '#c89f56' }} />
            What Parents Say
          </span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#fdf8f3', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
            Real children,
          </h2>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#c89f56', fontFamily: "'DM Serif Display', serif", marginTop: '.5rem', letterSpacing: '-.02em', lineHeight: '1.2', fontWeight: 400 }}>
            real change
          </h2>
        </div>
        <ScrollStack useWindowScroll baseScale={0.9} itemDistance={120} itemStackDistance={40} stackPosition="15%" blurAmount={2}>
          {testimonials.map((t, i) => (
            <ScrollStackItem key={i}>
              <blockquote style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3rem', lineHeight: 1, color: '#c89f56', opacity: 0.3 }}>"</span>
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontSize: '1.125rem', lineHeight: 1.375, flex: 1, color: '#fdf8f3' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem', paddingTop: '1rem', borderTop: '1px solid rgba(200,159,86,.1)', marginTop: 'auto' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', background: 'linear-gradient(135deg,#c89f56,#e8c46a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Serif Display', serif", fontSize: '1rem', color: '#120c0b', fontWeight: 500, flexShrink: 0, boxShadow: '0 4px 12px rgba(200,159,86,.2)' }}>{t.initials}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.15rem' }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '.875rem', fontWeight: 500, lineHeight: '1.25rem', color: '#fdf8f3' }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '.75rem', lineHeight: '1rem', color: 'rgba(253,248,243,.4)' }}>{t.from}</p>
                  </div>
                </div>
              </blockquote>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
