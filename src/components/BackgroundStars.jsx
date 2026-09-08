import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundStars = ({ count = 35 }) => {
  // Generate static random coordinates once so re-renders don't trigger layout shifts
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.7 + 0.2,
    }));
  }, [count]);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: '#fcf9f2',
            boxShadow: '0 0 8px rgba(252, 249, 242, 0.8)',
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
            y: [0, -15, 0],
          }}
          transition={{
            duration: star.duration + 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundStars;
