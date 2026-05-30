import { useEffect } from 'react';
import { IconBrandInstagram, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';

export default function Footer() {
  useEffect(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact">
      <div className="footer-cta">
        <div className="container">
          <div className="footer-grid fade-up">
            <div>
              <span className="eyebrow" style={{ color: '#c89f56' }}>
                <span className="eyebrow-line" style={{ background: '#c89f56' }} />
                Gift Your Child
              </span>
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: '#120c0b', marginTop: '1rem', letterSpacing: '-.03em', lineHeight: '1.06', fontWeight: 400 }}>
                Begin the <span className="gold-metallic">journey</span>
              </h2>
              <p style={{ fontSize: '.875rem', marginTop: '1rem', maxWidth: '22rem', lineHeight: '1.7', color: 'rgba(42,27,24,.6)' }}>
                Every child deserves an education that speaks to their whole being — mind, heart, and spirit.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', textAlign: 'right' }}>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:resamskar@gmail.com"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-[#c89f56]/10 border border-[#c89f56]/20 text-[#c89f56] hover:bg-[#c89f56] hover:text-[#120c0b] transition-all duration-300 group"
                  title="Email"
                >
                  <IconMail className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/9955366996"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-[#c89f56]/10 border border-[#c89f56]/20 text-[#c89f56] hover:bg-[#c89f56] hover:text-[#120c0b] transition-all duration-300 group"
                  title="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/resamskar/"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-[#c89f56]/10 border border-[#c89f56]/20 text-[#c89f56] hover:bg-[#c89f56] hover:text-[#120c0b] transition-all duration-300 group"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandInstagram className="w-5 h-5" />
                </a>
              </div>
              <div className="email-capture" style={{ alignItems: 'flex-end' }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(42,27,24,.38)' }}>Stay connected</p>
                <div className="email-capture-inner">
                  <input type="email" placeholder="Your email" aria-label="Email address" style={{ color: '#120c0b' }} />
                  <button onClick={() => alert('Thank you! We will keep you updated.')}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-brand">
              <img src="/Public/ReSamskar_Logo.png" alt="ReSamskar logo" onError={(e) => (e.currentTarget.style.display = 'none')} />
              <span>ReSamskar </span>
            </div>
            <p className="footer-copy">&copy; <span id="year" /> Resamskar</p>
          </div>
          <div className="footer-tagline">
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontSize: '0.875rem', lineHeight: '1.25rem', color: 'rgba(42, 27, 24, 0.40)' }}>
              &ldquo;Ātmano mokṣārthaṃ jagadhitāya ca&rdquo; — For one's own liberation and for the welfare of the world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
