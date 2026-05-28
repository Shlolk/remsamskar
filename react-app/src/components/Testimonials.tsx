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
            Real children,
          </h2>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#c89f56', fontFamily: "'DM Serif Display', serif", marginTop: '.5rem', letterSpacing: '-.02em', lineHeight: '1.2', fontWeight: 400 }}>
            real change
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
    </section>
  );
}
