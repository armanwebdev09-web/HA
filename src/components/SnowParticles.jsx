import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

const SnowParticles = ({ count = 35 }) => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;

    // Resize handler
    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    handleResize();

    // Responsive flake count
    const isMobile = window.innerWidth < 768;
    const flakeCount = isMobile ? Math.min(count, 16) : count;

    // Initialize snow particles
    const particles = Array.from({ length: flakeCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 1,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      opacity: Math.random() * 0.6 + 0.35,
      swayAngle: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01
    }));

    // Animation Loop
    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.swayAngle += p.swaySpeed;
        p.y += p.speedY;
        p.x += Math.sin(p.swayAngle) * 0.6 + p.speedX;

        // Wrap around boundaries
        if (p.y > canvas.height + 5) {
          p.y = -5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.x < -5) p.x = canvas.width + 5;

        // Draw flake
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause animation when section is outside viewport (Zero CPU consumption when off-screen)
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible && !isVisible) {
          isVisible = true;
          animationFrameId = requestAnimationFrame(render);
        } else if (!nowVisible && isVisible) {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2
      }}
      aria-hidden="true"
    />
  );
};

export default React.memo(SnowParticles);
