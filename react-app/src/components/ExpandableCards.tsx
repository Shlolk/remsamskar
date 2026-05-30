import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { IconArrowRight } from '@tabler/icons-react';

interface CardData {
  number: string;
  title: string;
  description: string;
  content: string;
  gradient: string;
  accent: string;
  icon: ReactNode;
  image?: string;
}

const cardsData: CardData[] = [
  {
    number: '01',
    title: 'Stories that stick',
    description: 'Narrative learning that lands values',
    gradient: 'linear-gradient(135deg, #e07a5f, #d4664a)',
    accent: '#e07a5f',
    icon: <img src="/stores.png" alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />,
    image: '/stores.png',
    content: 'We don\'t lecture. Every session opens with a story, a real-life dilemma, or a Bhagavad Gītā scene that children debate, role-play, and make their own. Values land when they live in story. Neuroscience confirms that narrative-based learning increases retention by up to 70% compared to direct instruction.',
  },
  {
    number: '02',
    title: 'Body before books',
    description: 'Movement and breath as foundations',
    gradient: 'linear-gradient(135deg, #c89f56, #b8903a)',
    accent: '#c89f56',
    image: '/body.png',
    icon: <img src="/body.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    content: 'Every session contains breath and movement. Neuroscience confirms it: a regulated nervous system learns, retains, and relates far better. Yoga here is not exercise — it\'s preparation for life. Children learn to recognize their emotional states through their bodies, building self-awareness that lasts a lifetime.',
  },
  {
    number: '03',
    title: 'Shlokas as life tools',
    description: 'Ancient wisdom for modern challenges',
    gradient: 'linear-gradient(135deg, #0f3b46, #0a2a33)',
    accent: '#0f3b46',
    image: '/shlok.png',
    icon: <img src="/shlok.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    content: 'Ancient verses taught as mental frameworks — not religious recitation. Children carry them into exams, conflicts, and friendships as inner anchors. Each shloka becomes a tool for clarity: the Gītā\'s teachings on detachment help with test anxiety, its lessons on duty guide friendships, and its wisdom on equanimity builds resilience.',
  },
  {
    number: '04',
    title: 'Seva as curriculum',
    description: 'Real-world empathy through service',
    gradient: 'linear-gradient(135deg, #e07a5f, #c89f56)',
    accent: '#d48a5a',
    image: '/saves.png',
    icon: <img src="/saves.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    content: 'Children cook, garden, and serve. Real-world empathy grows from the hand, the soil, the kitchen — not from a textbook. Research shows that service-learning activates the brain\'s empathy circuits more effectively than classroom discussion alone. Our children don\'t just learn about kindness; they practice it daily.',
  },
  {
    number: '05',
    title: 'Parents as partners',
    description: 'Building families, not just students',
    gradient: 'linear-gradient(135deg, #c89f56, #e8c46a)',
    accent: '#c89f56',
    image: '/child.png',
    icon: <img src="/child.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    content: 'Monthly parent circles share the same tools children use. Growth at home mirrors growth in the classroom. We build families, not just students. When parents practice the same breathing, reflection, and communication techniques, the child\'s learning environment becomes seamless — school and home working in concert.',
  },
];

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
    </svg>
  );
}

function Modal({ active, onClose, cardId, align }: { active: CardData; onClose: () => void; cardId: string; align: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10"
        />
      </AnimatePresence>
      <div className="fixed inset-0 grid place-items-center z-[100]" style={align}>
        <motion.button
          key={`close-${active.title}-${cardId}`}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.05 } }}
          className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-20"
          onClick={onClose}
        >
          <CloseIcon />
        </motion.button>
        <motion.div
          layoutId={`card-${active.title}-${cardId}`}
          ref={ref}
          className="w-full max-w-[520px] max-h-[100vh] sm:max-h-[90vh] flex flex-col bg-[#fdf8f3] sm:rounded-3xl overflow-y-auto shadow-2xl shadow-black/15"
        >
          <motion.div layoutId={`image-${active.title}-${cardId}`} className="w-full h-56 sm:h-64 shrink-0 overflow-hidden relative">
            <div style={{ background: active.gradient }} className="absolute inset-0" />
            {active.image && (
              <img src={active.image} alt="" className="w-full h-full object-cover absolute inset-0" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            )}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(18,12,11,.6) 0%, transparent 50%)' }} />
            <span className="absolute inset-0 flex items-center justify-center text-7xl sm:text-8xl font-serif font-bold text-white/15 select-none">
              {active.number}
            </span>
            <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white/60 text-xs font-mono tracking-widest">
              <span className="w-16 h-px bg-white/30" />
              Step {active.number} of 05
            </div>
          </motion.div>
          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex justify-between items-start pb-5">
              <div className="min-w-0 flex-1 mr-4">
                <motion.h3 layoutId={`title-${active.title}-${cardId}`} className="font-bold text-xl sm:text-2xl text-[#120c0b] leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {active.title}
                </motion.h3>
                <motion.p layoutId={`desc-${active.description}-${cardId}`} className="text-sm sm:text-base text-[rgba(42,27,24,.5)] mt-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {active.description}
                </motion.p>
              </div>
              <motion.a
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                href="#contact"
                className="shrink-0 px-5 py-2.5 text-sm rounded-full font-semibold text-white shadow-sm"
                style={{ background: active.accent }}
              >
                Join
              </motion.a>
            </div>
            <p className="text-[rgba(42,27,24,.65)] text-sm sm:text-base leading-[1.8]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {active.content}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default function ExpandableCards() {
  const [active, setActive] = useState<CardData | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
  }, [active]);

  const modalAlign = active?.number === '01' ? { alignItems: 'flex-start', paddingTop: '3vh' } as React.CSSProperties :
    active?.number === '02' || active?.number === '03' ? { alignItems: 'flex-start', paddingTop: '45vh' } as React.CSSProperties :
    active?.number === '05' ? { alignItems: 'flex-end', paddingBottom: '6vh' } as React.CSSProperties :
    {} as React.CSSProperties;

  return (
    <>
      {active && (
        <Modal active={active} onClose={() => setActive(null)} cardId={id} align={modalAlign} />
      )}

      <div ref={sectionRef} className="premium-card-grid">
        {/* Card 01 — Hero */}
        <motion.div
          layoutId={`card-${cardsData[0].title}-${id}`}
          onClick={() => setActive(cardsData[0])}
          className={`premium-card premium-card-hero fade-up ${isInView ? 'visible' : ''}`}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.3 }}
        >
          <div className="premium-card-inner">
            <motion.div layoutId={`image-${cardsData[0].title}-${id}`} className="premium-media">
              <img src={cardsData[0].image} alt="" className="premium-img" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <div className="premium-media-overlay" style={{ background: 'linear-gradient(to right, transparent 40%, rgba(18,12,11,.7) 90%, #120c0b)' }} />
              <div className="premium-glow" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(200,159,86,.12), transparent)' }} />
            </motion.div>
            <div className="premium-content">
              <div className="premium-badge" style={{ color: cardsData[0].accent }}>Principle {cardsData[0].number}</div>
              <span className="premium-number">{cardsData[0].number}</span>
              <motion.h3 layoutId={`title-${cardsData[0].title}-${id}`} className="premium-title">{cardsData[0].title}</motion.h3>
              <motion.p layoutId={`desc-${cardsData[0].description}-${id}`} className="premium-desc">{cardsData[0].description}</motion.p>
              <p className="premium-excerpt">{cardsData[0].content.slice(0, 100)}…</p>
              <div className="premium-cta" style={{ color: cardsData[0].accent }}>
                <span>Explore principle</span>
                <IconArrowRight size={16} stroke={2} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards 02 & 03 — Split grid */}
        <div className="premium-split">
          {[cardsData[1], cardsData[2]].map((card) => (
            <motion.div
              key={card.title}
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className={`premium-card premium-card-half fade-up ${isInView ? 'visible' : ''}`}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div layoutId={`image-${card.title}-${id}`} className="premium-media" style={{ background: card.gradient, width: '100%', height: '100%', minHeight: '320px' }}>
                <img src={card.image} alt="" className="premium-img" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <div className="premium-media-overlay" style={{ background: 'linear-gradient(to top, rgba(18,12,11,.85) 0%, transparent 50%)' }} />
                <span className="premium-media-number" style={{ position: 'absolute', bottom: '1rem', right: '1rem', top: 'auto', fontSize: '5rem' }}>{card.number}</span>
                <div className="premium-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(18,12,11,.92) 0%, rgba(18,12,11,.3) 60%, transparent 100%)', border: 'none', borderRadius: 0, padding: '3.5rem 1.75rem 1.5rem' }}>
                  <div className="premium-badge" style={{ color: card.accent }}>Principle {card.number}</div>
                  <motion.h3 layoutId={`title-${card.title}-${id}`} className="premium-title" style={{ color: '#fff' }}>{card.title}</motion.h3>
                  <motion.p layoutId={`desc-${card.description}-${id}`} className="premium-desc" style={{ color: 'rgba(255,255,255,.7)' }}>{card.description}</motion.p>
                  <p className="premium-excerpt" style={{ color: 'rgba(255,255,255,.5)' }}>{card.content.slice(0, 70)}…</p>
                  <div className="premium-cta" style={{ color: '#fff' }}>
                    <span>Explore</span>
                    <IconArrowRight size={14} stroke={2} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Card 04 — Wide */}
        <motion.div
          layoutId={`card-${cardsData[3].title}-${id}`}
          onClick={() => setActive(cardsData[3])}
          className={`premium-card premium-card-wide fade-up ${isInView ? 'visible' : ''}`}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.3 }}
        >
          <div className="premium-card-inner">
            <motion.div layoutId={`image-${cardsData[3].title}-${id}`} className="premium-media">
              <img src={cardsData[3].image} alt="" className="premium-img" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <div className="premium-media-overlay" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(18,12,11,.8) 100%)' }} />
            </motion.div>
            <div className="premium-content">
              <div className="premium-badge" style={{ color: cardsData[3].accent }}>Principle {cardsData[3].number}</div>
              <span className="premium-number">{cardsData[3].number}</span>
              <motion.h3 layoutId={`title-${cardsData[3].title}-${id}`} className="premium-title">{cardsData[3].title}</motion.h3>
              <motion.p layoutId={`desc-${cardsData[3].description}-${id}`} className="premium-desc">{cardsData[3].description}</motion.p>
              <p className="premium-excerpt">{cardsData[3].content.slice(0, 90)}…</p>
              <div className="premium-cta" style={{ color: cardsData[3].accent }}>
                <span>Explore principle</span>
                <IconArrowRight size={16} stroke={2} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 05 — Wide */}
        <motion.div
          layoutId={`card-${cardsData[4].title}-${id}`}
          onClick={() => setActive(cardsData[4])}
          className={`premium-card premium-card-wide fade-up ${isInView ? 'visible' : ''}`}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.3 }}
        >
          <div className="premium-card-inner">
            <motion.div layoutId={`image-${cardsData[4].title}-${id}`} className="premium-media">
              <img src={cardsData[4].image} alt="" className="premium-img" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <div className="premium-media-overlay" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(18,12,11,.8) 100%)' }} />
            </motion.div>
            <div className="premium-content">
              <div className="premium-badge" style={{ color: cardsData[4].accent }}>Principle {cardsData[4].number}</div>
              <span className="premium-number">{cardsData[4].number}</span>
              <motion.h3 layoutId={`title-${cardsData[4].title}-${id}`} className="premium-title">{cardsData[4].title}</motion.h3>
              <motion.p layoutId={`desc-${cardsData[4].description}-${id}`} className="premium-desc">{cardsData[4].description}</motion.p>
              <p className="premium-excerpt">{cardsData[4].content.slice(0, 90)}…</p>
              <div className="premium-cta" style={{ color: cardsData[4].accent }}>
                <span>Explore principle</span>
                <IconArrowRight size={16} stroke={2} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
