import { useEffect } from 'react';

export function use3DTilt(selector: string) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    const handlers: (() => void)[] = [];

    cards.forEach(el => {
      const card = el as HTMLElement;
      const imgWrap = card.querySelector('.photo-img-wrap') as HTMLElement | null;
      const dot = card.querySelector('.photo-dot') as HTMLElement | null;
      const caption = card.querySelector('.photo-caption') as HTMLElement | null;
      const label = card.querySelector('.photo-label') as HTMLElement | null;
      const divider = card.querySelector('.photo-divider') as HTMLElement | null;

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const pctX = (x / rect.width) * 100;
        const pctY = (y / rect.height) * 100;
        const rotY = ((x - cx) / cx) * 10;
        const rotX = ((y - cy) / cy) * -10;
        const mX = (x - cx) * 0.04;
        const mY = (y - cy) * 0.04;

        card.style.transform = 'perspective(1000px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        card.style.setProperty('--card-glow-x', pctX + '%');
        card.style.setProperty('--card-glow-y', pctY + '%');

        if (imgWrap) imgWrap.style.transform = 'translate(' + (mX * 0.3) + 'px, ' + (mY * 0.3) + 'px)';
        if (label) label.style.transform = 'translate(' + (mX * 0.6) + 'px, ' + (mY * 0.6) + 'px)';
        if (divider) divider.style.transform = 'translate(' + (mX * 0.8) + 'px, ' + (mY * 0.8) + 'px)';
        if (caption) caption.style.transform = 'translate(' + (mX * 1.2) + 'px, ' + (mY * 1.2) + 'px)';
        if (dot) dot.style.transform = 'translate(' + (mX * 1.5) + 'px, ' + (mY * 1.5) + 'px)';
      };

      const onLeave = () => {
        card.style.transform = '';
        card.style.setProperty('--card-glow-x', '50%');
        card.style.setProperty('--card-glow-y', '50%');
        if (imgWrap) imgWrap.style.transform = '';
        if (label) label.style.transform = '';
        if (divider) divider.style.transform = '';
        if (caption) caption.style.transform = '';
        if (dot) dot.style.transform = '';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push(() => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); });
    });

    return () => handlers.forEach(h => h());
  }, [selector]);
}
