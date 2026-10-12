import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * OpeningScreen
 * 
 * Displays:
 * 1. "Some feelings are too beautiful to leave unspoken."
 * Pause briefly.
 * 2. "So I made you a little something. 🤍"
 * 3. A glowing heart in the center of the screen.
 */
export default function OpeningScreen({ onProceed }) {
  const [stage, setStage] = useState(1); // 1: first text, 2: second text, 3: glowing heart

  useEffect(() => {
    // Step 1 -> Step 2 after 2.4s
    const timer1 = setTimeout(() => {
      setStage(2);
    }, 2400);

    // Step 2 -> Step 3 (glowing heart) after another 2.2s
    const timer2 = setTimeout(() => {
      setStage(3);
    }, 4600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className="opening-screen"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '640px', width: '100%', margin: '0 auto' }}>
        {/* First text line */}
        <motion.p
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
            fontWeight: 500,
            lineHeight: 1.35,
            color: '#263B46',
            letterSpacing: '-0.01em',
            marginBottom: '1.75rem',
          }}
        >
          Some feelings are too beautiful to leave unspoken.
        </motion.p>

        {/* Second text line */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)',
                fontWeight: 400,
                color: '#4FA8D1',
                lineHeight: 1.6,
                letterSpacing: '0.01em',
                marginBottom: '2.5rem',
              }}
            >
              So I made you a little something. 🤍
            </motion.p>
          )}
        </AnimatePresence>

        {/* Glowing Heart */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: '1rem',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              {/* Pulsing Glowing Heart button / touch target */}
              <motion.button
                onClick={onProceed}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Begin journey"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  outline: 'none',
                }}
              >
                {/* Ambient Soft Blue Radial Halo */}
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.35, 0.75, 0.35],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(169, 221, 245, 0.55) 0%, rgba(221, 244, 255, 0.2) 55%, transparent 75%)',
                    filter: 'blur(12px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Heart SVG */}
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    filter: 'drop-shadow(0 0 16px rgba(169, 221, 245, 0.95)) drop-shadow(0 0 32px rgba(79, 168, 209, 0.45))',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <defs>
                    <linearGradient id="glowingHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="50%" stopColor="#DDF4FF" />
                      <stop offset="100%" stopColor="#A9DDF5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="url(#glowingHeartGrad)"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="0.8"
                  />
                </svg>
              </motion.button>

              {/* Gentle subtle prompt */}
              <motion.button
                onClick={onProceed}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.0 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(169, 221, 245, 0.55)',
                  padding: '0.55rem 1.4rem',
                  borderRadius: '9999px',
                  color: '#397D9F',
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(79, 168, 209, 0.1)',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#4FA8D1';
                  e.currentTarget.style.color = '#263B46';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(169, 221, 245, 0.55)';
                  e.currentTarget.style.color = '#397D9F';
                }}
              >
                <span>Touch gently to begin</span>
                <span style={{ fontSize: '0.75rem' }}>♡</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
