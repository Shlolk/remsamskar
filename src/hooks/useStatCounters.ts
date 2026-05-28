import { useEffect } from 'react';
import gsap from 'gsap';

export function useStatCounters() {
  useEffect(() => {
    const metrics = document.querySelector('.metrics');
    if (!metrics) return;
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

    setTimeout(() => {
      stats.forEach((s, i) => {
        let cycles = 0;
        const maxCycles = 8 + Math.floor(Math.random() * 4);
        const cycleTimer = setInterval(() => {
          const rand = Math.floor(Math.random() * (s.target + 5));
          s.el.textContent = rand + s.suffix;
          cycles++;
          if (cycles >= maxCycles) {
            clearInterval(cycleTimer);
            const proxy = { val: parseInt(s.el.textContent) || 0 };
            gsap.to(proxy, {
              val: s.target,
              duration: 0.8,
              ease: 'power3.out',
              onUpdate: () => { s.el.textContent = Math.round(proxy.val) + s.suffix; },
              onComplete: () => { s.el.textContent = s.target + s.suffix; (s.el as HTMLElement).style.color = '#c89f56'; }
            });
          }
        }, 60 + i * 20);
      });
    }, 400);
  }, []);
}
