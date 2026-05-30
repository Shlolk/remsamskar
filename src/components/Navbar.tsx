import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/Public/ReSamskar_Logo.png" alt="ReSamskar logo" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <span>ReSamskar</span>
          </a>
          <nav className="nav-tabs">
            <a href="/" className="nav-tab active">Home</a>
            <a href="#programs" className="nav-tab">Programmes</a>
            <a href="#how" className="nav-tab">Method</a>
            <a href="#testimonials" className="nav-tab">Testimonials</a>
            <a href="#contact" className="nav-tab">Contact</a>
          </nav>
          <a href="#contact" className="nav-cta">
            Connect
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="#programs" onClick={closeMenu}>Programmes</a>
        <a href="#how" onClick={closeMenu}>Method</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
