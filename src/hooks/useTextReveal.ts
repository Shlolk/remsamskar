import { useEffect } from 'react';

export function useTextReveal() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    document.querySelectorAll('h2').forEach(h2 => {
      const words = h2.textContent.trim().split(/\s+/);
      if (words.length < 2) return;
      h2.innerHTML = words.map(w => `<span class="reveal-word">${w}</span>`).join(' ');
      const ro = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal-word').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 60);
            });
            ro.unobserve(e.target);
          }
        });
      }, { rootMargin: '-30px' });
      ro.observe(h2);
      observers.push(ro);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
}
