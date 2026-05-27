import { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';

interface CardData {
  title: string;
  description: string;
  content: string;
  gradient: string;
  accent: string;
  number: string;
}

const cardsData: CardData[] = [
  {
    number: '01',
    title: 'Stories that stick',
    description: 'Narrative learning that lands values',
    gradient: 'linear-gradient(135deg, #e07a5f, #d4664a)',
    accent: '#e07a5f',
    content: 'We don\'t lecture. Every session opens with a story, a real-life dilemma, or a Bhagavad Gītā scene that children debate, role-play, and make their own. Values land when they live in story. Neuroscience confirms that narrative-based learning increases retention by up to 70% compared to direct instruction.',
  },
  {
    number: '02',
    title: 'Body before books',
    description: 'Movement and breath as foundations',
    gradient: 'linear-gradient(135deg, #c89f56, #b8903a)',
    accent: '#c89f56',
    content: 'Every session contains breath and movement. Neuroscience confirms it: a regulated nervous system learns, retains, and relates far better. Yoga here is not exercise — it\'s preparation for life. Children learn to recognize their emotional states through their bodies, building self-awareness that lasts a lifetime.',
  },
  {
    number: '03',
    title: 'Shlokas as life tools',
    description: 'Ancient wisdom for modern challenges',
    gradient: 'linear-gradient(135deg, #0f3b46, #0a2a33)',
    accent: '#0f3b46',
    content: 'Ancient verses taught as mental frameworks — not religious recitation. Children carry them into exams, conflicts, and friendships as inner anchors. Each shloka becomes a tool for clarity: the Gītā\'s teachings on detachment help with test anxiety, its lessons on duty guide friendships, and its wisdom on equanimity builds resilience.',
  },
  {
    number: '04',
    title: 'Seva as curriculum',
    description: 'Real-world empathy through service',
    gradient: 'linear-gradient(135deg, #e07a5f, #c89f56)',
    accent: '#d48a5a',
    content: 'Children cook, garden, and serve. Real-world empathy grows from the hand, the soil, the kitchen — not from a textbook. Research shows that service-learning activates the brain\'s empathy circuits more effectively than classroom discussion alone. Our children don\'t just learn about kindness; they practice it daily.',
  },
  {
    number: '05',
    title: 'Parents as partners',
    description: 'Building families, not just students',
    gradient: 'linear-gradient(135deg, #c89f56, #e8c46a)',
    accent: '#c89f56',
    content: 'Monthly parent circles share the same tools children use. Growth at home mirrors growth in the classroom. We build families, not just students. When parents practice the same breathing, reflection, and communication techniques, the child\'s learning environment becomes seamless — school and home working in concert.',
  },
];

const easeOut = [0.32, 0.72, 0, 1] as const;

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
    </svg>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: easeOut },
  }),
};

export default function ExpandableCards() {
  const [active, setActive] = useState<CardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActive(null);
    }
    document.body.style.overflow = active ? 'hidden' : 'auto';
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-3 sm:p-4" key="modal">
            <motion.button
              key={`close-${active.title}-${id}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 30 }}
              className="flex absolute top-4 right-4 sm:top-6 sm:right-6 lg:hidden items-center justify-center bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg z-20 hover:bg-white transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              transition={{ duration: 0.45, ease: easeOut }}
              className="w-full max-w-[520px] h-full md:h-fit md:max-h-[85%] flex flex-col bg-[#fdf8f3] sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/15"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div style={{ background: active.gradient }} className="w-full h-56 sm:h-64 md:h-72 flex items-center justify-center overflow-hidden">
                  <motion.span
                    initial={{ scale: 1.1, opacity: 0.4 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-white/15 select-none"
                  >
                    {active.number}
                  </motion.span>
                </div>
              </motion.div>
              <div className="flex flex-col flex-1 min-h-0">
                <div className="flex justify-between items-start p-5 sm:p-6 pb-2">
                  <div className="min-w-0 flex-1 mr-3">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xl sm:text-2xl text-[#120c0b] leading-tight"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-sm sm:text-base text-[rgba(42,27,24,.5)] mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href="#contact"
                    className="shrink-0 px-5 py-2.5 text-sm rounded-full font-semibold text-white shadow-sm"
                    style={{ background: active.accent }}
                    whileHover={{ scale: 1.04, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Join
                  </motion.a>
                </div>
                <div className="relative px-5 sm:px-6 pb-6 sm:pb-8 flex-1 min-h-0">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                    className="text-[rgba(42,27,24,.65)] text-sm sm:text-base leading-[1.8] overflow-y-auto pr-1"
                    style={{ fontFamily: "'Inter', sans-serif", maxHeight: '160px' }}
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-2.5">
        {cardsData.map((card, i) => (
          <motion.div
            key={`card-${card.title}-${id}`}
            layout
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 rounded-xl bg-white/70 backdrop-blur-sm border border-[rgba(200,159,86,.15)] hover:border-[rgba(200,159,86,.35)] cursor-pointer shadow-[0_2px_12px_-4px_rgba(18,12,11,.08)] hover:shadow-[0_8px_28px_-8px_rgba(200,159,86,.18)] transition-shadow duration-300 group"
            style={{ willChange: 'transform' }}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div layoutId={`image-${card.title}-${id}`} className="shrink-0">
              <div
                style={{ background: card.gradient }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-sm"
              >
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white/25 font-serif select-none">{card.number}</span>
              </div>
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-sm sm:text-base md:text-lg text-[#120c0b] group-hover:text-[#c89f56] transition-colors duration-300"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-xs sm:text-sm text-[rgba(42,27,24,.45)] mt-0.5 truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.description}
              </motion.p>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-medium bg-[rgba(200,159,86,.08)] text-[rgba(42,27,24,.5)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05, background: card.accent, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore
            </motion.button>
          </motion.div>
        ))}
      </div>
    </>
  );
}
