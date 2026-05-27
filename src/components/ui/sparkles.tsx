import { useEffect, useRef } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export function SparklesCore({
  id = 'tsparticles',
  background = 'transparent',
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className,
  particleColor = '#FFFFFF',
}: SparklesCoreProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      await loadSlim(tsParticles);

      const container = await tsParticles.load({
        id,
        options: {
          background: { color: { value: background } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: { enable: true },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: particleColor },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: { enable: true, width: 400, height: 400 },
              value: particleDensity,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: {
                enable: true,
                speed: 1.5,
                sync: false,
              },
            },
            shape: { type: 'circle' },
            size: {
              value: { min: minSize, max: maxSize },
            },
          },
          detectRetina: true,
        },
      });

      return () => {
        if (container) container.destroy();
      };
    })();
  }, [id, background, minSize, maxSize, particleDensity, particleColor]);

  return (
    <div id={id} className={className} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
  );
}
