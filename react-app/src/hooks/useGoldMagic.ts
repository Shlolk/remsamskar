import { useEffect } from 'react';
import gsap from 'gsap';

export function useGoldMagic(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    els.forEach(el => {
      const card = el as HTMLElement;
      card.classList.add('gold-magic');
      const spot = document.createElement('div');
      spot.className = 'gold-spotlight';
      card.appendChild(spot);
    });

    function spawnParticles(card: HTMLElement, count: number) {
      const rect = card.getBoundingClientRect();
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'gold-particle';
        const size = 2 + Math.random() * 3;
        p.style.cssText = 'left:' + (Math.random() * rect.width) + 'px;top:' + (Math.random() * rect.height) + 'px;width:' + size + 'px;height:' + size + 'px';
        card.appendChild(p);

        gsap.fromTo(p, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)',
          onComplete: () => {
            gsap.to(p, {
              x: (Math.random() - 0.5) * 60,
              y: (Math.random() - 0.5) * 60,
              opacity: 0.25,
              duration: 1.5 + Math.random() * 2,
              ease: 'none',
              repeat: -1,
              yoyo: true
            });
          }
        });

        const all = card.querySelectorAll('.gold-particle');
        if (all.length > 30) {
          const old = all[0] as HTMLElement;
          gsap.to(old, { opacity: 0, scale: 0, duration: 0.15, onComplete: () => { if (old.parentNode) old.parentNode.removeChild(old); } });
        }
      }
    }

    function clearParticles(card: HTMLElement) {
      card.querySelectorAll('.gold-particle').forEach(p => {
        gsap.killTweensOf(p);
        gsap.to(p, { opacity: 0, scale: 0, duration: 0.15, onComplete: () => { if (p.parentNode) p.parentNode.removeChild(p); } });
      });
    }

    const timers: Map<HTMLElement, ReturnType<typeof setTimeout>> = new Map();
    const insideFlags: Map<HTMLElement, boolean> = new Map();

    els.forEach(el => {
      const card = el as HTMLElement;

      const onEnter = () => {
        insideFlags.set(card, true);
        clearTimeout(timers.get(card));
        timers.set(card, setTimeout(() => {
          if (insideFlags.get(card)) spawnParticles(card, 6);
        }, 200));
      };

      const onLeave = () => {
        insideFlags.set(card, false);
        clearTimeout(timers.get(card));
        clearParticles(card);
        gsap.to(card, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
      };

      const onMove = (e: MouseEvent) => {
        if (!insideFlags.get(card)) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const relX = (x / rect.width) * 100;
        const relY = (y / rect.height) * 100;

        card.style.setProperty('--glow-x', relX + '%');
        card.style.setProperty('--glow-y', relY + '%');
        const spot = card.querySelector('.gold-spotlight') as HTMLElement | null;
        if (spot) { spot.style.setProperty('--spot-x', relX + '%'); spot.style.setProperty('--spot-y', relY + '%'); }

        gsap.to(card, { rotateX: ((y - cy) / cy) * -6, rotateY: ((x - cx) / cx) * 6, duration: 0.12, ease: 'power2.out', transformPerspective: 1000 });

        gsap.to(card, { x: (x - cx) * 0.03, y: (y - cy) * 0.03, duration: 0.25, ease: 'power2.out' });
      };

      const onClick = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const maxDist = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
        const ripple = document.createElement('div');
        ripple.className = 'gold-ripple';
        ripple.style.cssText = 'width:' + (maxDist * 2) + 'px;height:' + (maxDist * 2) + 'px;left:' + (x - maxDist) + 'px;top:' + (y - maxDist) + 'px';
        card.appendChild(ripple);
        gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); } });
      };

      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      card.addEventListener('mousemove', onMove);
      card.addEventListener('click', onClick);
    });

    return () => {
      els.forEach(el => {
        const card = el as HTMLElement;
        card.classList.remove('gold-magic');
        clearParticles(card);
      });
      timers.forEach(t => clearTimeout(t));
    };
  }, [selector]);
}
