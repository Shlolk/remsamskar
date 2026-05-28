import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);

    document.addEventListener('mousemove', (e) => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    });

    const interactive = document.querySelectorAll('a, button, .photo-card, .prog-card, .testimonial, .method-step, .social-link, .nav-tab, .nav-cta, .pullquote-btn, .hero-cta');
    const addHover = () => ring.classList.add('hover');
    const removeHover = () => ring.classList.remove('hover');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      ring.remove();
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return null;
}
