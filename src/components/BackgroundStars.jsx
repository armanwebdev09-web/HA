import React, { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

const BackgroundStars = ({ count = 28 }) => {
  const shouldReduceMotion = useReducedMotion();

  // Generate static random coordinates once so re-renders don't trigger layout shifts
  const stars = useMemo(() => {
    // Automatically reduce particle count on mobile
    const effectiveCount = typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(count, 14) : count;
    const colors = ['#E8A0B8', '#F3C6D3', '#E8C7A8', '#FFFFFF'];

    return Array.from({ length: effectiveCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1.2,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.25,
      color: colors[i % colors.length]
    }));
  }, [count]);

  if (shouldReduceMotion) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: star.color,
            boxShadow: `0 0 6px ${star.color}`,
            opacity: star.opacity,
            animation: `starTwinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(BackgroundStars);
