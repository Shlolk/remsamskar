import { useEffect } from 'react';
import gsap from 'gsap';

export function useStatCounters() {
  useEffect(() => {
    const metrics = document.querySelector('.metrics');
    if (!metrics) return;

    const run = () => {
      const els = metrics.querySelectorAll('.metric-n');
      if (!els.length) return;
      const stats: { el: Element; target: number; suffix: string }[] = [];
      els.forEach(el => {
        const text = el.textContent.trim();
        const m = text.match(/^([\d.]+)(.*)$/);
        if (m) {
          stats.push({ el, target: parseFloat(m[1]), suffix: m[2] || '' });
          el.textContent = '0' + (m[2] || '');
        }
      });
      if (!stats.length) return;
      stats.forEach((s, i) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: s.target,
          duration: 1.6,
          delay: i * 0.15,
          ease: 'power2.out',
          onUpdate: () => { s.el.textContent = Math.round(obj.val) + s.suffix; },
          onComplete: () => {
            s.el.textContent = s.target + s.suffix;
            (s.el as HTMLElement).style.color = '#c89f56';
          },
        });
      });
    };

    // Wait for scroll-reveal to add the .visible class
    const check = setInterval(() => {
      if (metrics.classList.contains('visible')) {
        clearInterval(check);
        run();
      }
    }, 100);

    // Fallback: run after 2s no matter what
    const fallback = setTimeout(() => {
      clearInterval(check);
      if (metrics.querySelector('.metric-n')?.textContent?.startsWith('0')) run();
    }, 2000);

    return () => { clearInterval(check); clearTimeout(fallback); };
  }, []);
}
