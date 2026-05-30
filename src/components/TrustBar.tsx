import { useEffect, useRef } from 'react';

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      const parent = trackRef.current.parentElement;
      if (parent && !parent.querySelector('.trust-track[data-clone]')) {
        const clone = trackRef.current.cloneNode(true) as HTMLDivElement;
        clone.setAttribute('data-clone', '');
        parent.appendChild(clone);
      }
    }
  }, []);

  return (
    <section id="trust">
      <div className="container">
        <div className="trust-inner fade-up">
          <p className="trust-label">Trusted by families & educators across India</p>
          <div className="trust-logos">
            <div className="trust-track" ref={trackRef}>
              <span className="trust-item">200<em>+</em> Families</span>
              <span className="trust-item">5 <em>Partner</em> Schools</span>
              <span className="trust-item">3 <em>Age</em> Programmes</span>
              <span className="trust-item">15<em>+</em> Modules Each</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
