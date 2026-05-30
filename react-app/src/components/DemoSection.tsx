import { useEffect } from 'react';

export default function DemoSection() {
  useEffect(() => {
    const w = 'https://tally.so/widgets/embed.js';
    const v = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
          (e as HTMLIFrameElement).src = (e as HTMLIFrameElement).dataset.tallySrc || '';
        });
      }
    };
    if (typeof (window as any).Tally !== 'undefined') {
      v();
    } else if (!document.querySelector('script[src="' + w + '"]')) {
      const s = document.createElement('script');
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="demo" className="section" style={{ borderTop: '1px solid rgba(200,159,86,.1)', background: 'linear-gradient(160deg, #120c0b 0%, #1a1513 50%, #0f0a08 100%)', paddingTop: '4rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="eyebrow" style={{ color: '#c89f56' }}>
            <span className="eyebrow-line" style={{ background: '#c89f56' }} />
            Book A Demo
          </span>
          <h2 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', color: '#fdf8f3', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
            Join our next batch
          </h2>
        </div>
        <div className="fade-up" style={{ position: 'relative' }}>
          <div className="form-skeleton" id="formSkeleton">
            <div className="skel-row skel-row-sm" />
            <div className="skel-row skel-row-sm" style={{ width: '40%' }} />
            <div className="skel-row" />
            <div className="skel-row" />
            <div className="skel-row skel-row-lg" />
            <div className="skel-row skel-row-btn" />
          </div>
          <iframe
            data-tally-src="https://tally.so/embed/b5OMe2?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1"
            loading="lazy"
            width="100%"
            height={680}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Book Your Free Demo"
            style={{ filter: 'invert(1)' }}
            onLoad={() => document.getElementById('formSkeleton')?.classList.add('hide')}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28px', background: '#1a1513', zIndex: 1 }} />
        </div>
      </div>
    </section>
  );
}
