import React, { useMemo } from 'react';

/**
 * FloatingParticles
 * Lightweight, GPU-accelerated dreamy particles.
 * Floats gently without CPU overhead.
 */
export default function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: 3 + (i % 4) * 2, // 3px to 9px
      left: `${(i * 17 + 7) % 96}%`,
      top: `${(i * 23 + 13) % 94}%`,
      duration: 12 + (i % 7) * 4, // 12s to 36s
      delay: (i % 5) * 1.5,
      opacity: 0.25 + (i % 3) * 0.2,
      blur: i % 2 === 0 ? '1px' : '0px',
      color: i % 3 === 0 ? '#FFFFFF' : i % 3 === 1 ? '#DDF4FF' : '#A9DDF5',
    }));
  }, []);

  return (
    <div
      className="floating-particles-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            opacity: p.opacity,
            filter: `blur(${p.blur})`,
            animation: `gentleDrift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      <style>{`
        @keyframes gentleDrift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, -24px, 0) scale(1.15);
          }
          100% {
            transform: translate3d(-14px, -45px, 0) scale(0.85);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .floating-particles-container span {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
