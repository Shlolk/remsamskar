import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}

export function FloatingDock({ items, desktopClassName, mobileClassName }: FloatingDockProps) {
  return (
    <>
      <div className={cn('hidden md:flex items-center gap-3', desktopClassName)}>
        {items.map(item => (
          <DockIcon key={item.title} item={item} />
        ))}
      </div>
      <div className={cn('flex md:hidden', mobileClassName)}>
        <MobileDock items={items} />
      </div>
    </>
  );
}

function DockIcon({ item }: { item: DockItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-center group"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.6 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-neutral-800/90 text-white text-[11px] font-medium whitespace-nowrap border border-white/10 shadow-lg backdrop-blur-sm"
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c89f56]/40 text-white/70 hover:text-[#c89f56] transition-colors duration-200 cursor-pointer"
      >
        {item.icon}
      </motion.div>
    </a>
  );
}

function MobileDock({ items }: { items: DockItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8, y: 10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.8, y: 10 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 p-3 rounded-2xl bg-neutral-900/95 border border-white/10 backdrop-blur-md shadow-xl"
          >
            {items.map(item => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-[#c89f56] transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800/90 border border-white/10 text-white/70 hover:text-[#c89f56] shadow-lg backdrop-blur-sm transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
    </div>
  );
}
