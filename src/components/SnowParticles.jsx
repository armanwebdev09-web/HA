import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SnowParticles = ({ count = 32 }) => {
  const shouldReduceMotion = useReducedMotion();

  const flakes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 5 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3,
      sway: Math.random() * 30 - 15
    }));
  }, [count]);

  if (shouldReduceMotion) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {flakes.map((flake) => (
        <motion.div
          key={flake.id}
          style={{
            position: 'absolute',
            left: `${flake.x}%`,
            top: '-5%',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
          }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, flake.sway, 0],
            opacity: [0, flake.opacity, 0.2, 0]
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: flake.delay
          }}
        />
      ))}
    </div>
  );
};

export default SnowParticles;
