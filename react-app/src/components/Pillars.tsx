import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { pillars } from '../data/pillars';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

const pillarColors = [
  { bg: 'from-amber-800 to-yellow-900', colors: [[200, 159, 86], [232, 196, 106]], titleText: '#c89f56' },
  { bg: 'from-orange-800 to-red-900', colors: [[224, 122, 95], [200, 100, 80]], titleText: '#e07a5f' },
  { bg: 'from-teal-800 to-cyan-900', colors: [[15, 59, 70], [20, 80, 100]], titleText: '#2a9d8f' },
  { bg: 'from-stone-700 to-amber-900', colors: [[212, 138, 90], [180, 110, 70]], titleText: '#d48a5a' },
];

function CornerAccent({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1 19V1H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Card({
  number,
  title,
  body,
  colorSet,
  index,
}: {
  number: string;
  title: string;
  body: string;
  colorSet: typeof pillarColors[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="pillar-card group"
    >
      <CornerAccent className="pillar-corner pillar-corner-tl" />
      <CornerAccent className="pillar-corner pillar-corner-tr" />
      <CornerAccent className="pillar-corner pillar-corner-bl" />
      <CornerAccent className="pillar-corner pillar-corner-br" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pillar-canvas-wrap"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`bg-gradient-to-br ${colorSet.bg}`}
              colors={colorSet.colors}
              dotSize={2.5}
            />
            <div className="pillar-canvas-mask" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Number watermark */}
      <span
        className={`pillar-number-watermark ${hovered ? 'opacity-20 scale-110' : 'opacity-[0.06] scale-100'}`}
      >
        {number}
      </span>

      <div className="pillar-card-content">
        <div className="pillar-badge" style={{ color: colorSet.titleText }}>
          Pillar {number}
        </div>

        <h3
          className={`pillar-card-title ${hovered ? 'text-white' : ''}`}
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {title}
        </h3>

        <p
          className={`pillar-card-body ${hovered ? 'text-white/80' : ''}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section id="pillars" className="section">
      <div className="container">
        <div className="pillars-header fade-up">
          <div>
            <span className="eyebrow" style={{ color: '#e07a5f' }}>
              <span className="eyebrow-line" style={{ background: '#e07a5f' }} />
              Our Approach
            </span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: '#fdf8f3', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
              Four pillars of
            </h2>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#c89f56', fontFamily: "'DM Serif Display', serif", marginTop: '.5rem', letterSpacing: '-.02em', lineHeight: '1.2', fontWeight: 400 }}>
              inner development
            </h2>
          </div>
          <p style={{ fontSize: '.875rem', color: 'rgba(253,248,243,.5)', lineHeight: '1.7', maxWidth: '32rem' }}>
            We do not teach children what to think. We create conditions in which they learn how to think — clearly, kindly, and courageously.
          </p>
        </div>

        <div className="pillar-grid">
          {pillars.map((p, i) => (
            <Card
              key={p.n}
              number={p.n}
              title={p.title}
              body={p.body}
              colorSet={pillarColors[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
