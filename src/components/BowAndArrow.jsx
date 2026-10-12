import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * BowAndArrow
 * 
 * Signature romantic interaction adhering to all 8 steps:
 * 1. A delicate bow appears on the screen.
 * 2. The bowstring slowly pulls back.
 * 3. A small glowing arrow appears, carrying a tiny heart.
 * 4. The bow releases the arrow smoothly.
 * 5. The arrow travels across the screen, leaving a soft sparkling trail.
 * 6. The arrow reaches a floating heart.
 * 7. The heart opens into a beautiful white tulip.
 * 8. White petals gently unfold, with a soft blue glow around the flower.
 */
export default function BowAndArrow({ onComplete }) {
  // Steps: 1 to 8
  const [step, setStep] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 1400); // 1.4s: pull back
    const t2 = setTimeout(() => setStep(3), 2900); // 2.9s: arrow appears
    const t3 = setTimeout(() => setStep(4), 4200); // 4.2s: release string
    const t4 = setTimeout(() => setStep(5), 4400); // 4.4s: arrow travels
    const t5 = setTimeout(() => setStep(6), 6000); // 6.0s: reaches heart
    const t6 = setTimeout(() => setStep(7), 6600); // 6.6s: heart opens into tulip
    const t7 = setTimeout(() => setStep(8), 8000); // 8.0s: petals unfold with glow
    const t8 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 11200); // auto-transition after admiring the bloom

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [onComplete]);

  // Coordinates & Dimensions (Canvas: 800 x 400)
  // Bow:
  // Top tip: (130, 80)
  // Center rest: (160, 200)
  // Bottom tip: (130, 320)
  // String nock point:
  // Step 1: 155
  // Step 2 & 3: 75 (pulled back)
  // Step 4+: 160 (snapped forward)
  const stringNockX = step === 1 ? 155 : (step === 2 || step === 3) ? 75 : 160;

  // Arrow position:
  // In step 3: nocked at 75
  // In step 4: at bow rest 160
  // In step 5: flying towards 590
  // In step 6+: reached heart (disappears / dissolves into bloom)
  const showArrow = step >= 3 && step <= 6;

  // Floating heart target at (600, 200)
  const showFloatingHeart = step < 7;
  const showTulip = step >= 7;

  return (
    <div
      className="bow-arrow-experience"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        padding: '1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Caption Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          maxWidth: '500px',
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#4FA8D1',
            fontWeight: 600,
          }}
        >
          An Arrow That Carries My Heart
        </span>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.4rem, 3.5vw, 2.1rem)',
            fontWeight: 500,
            color: '#263B46',
            marginTop: '0.35rem',
          }}
        >
          {step <= 3 && "Drawn with gentle care..."}
          {(step === 4 || step === 5) && "Carrying love across the distance..."}
          {step === 6 && "Arriving where it belongs..."}
          {step >= 7 && "Blooming into something pure and true."}
        </h2>
      </motion.div>

      {/* SVG Animation Stage */}
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          aspectRatio: '800 / 400',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 800 400"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="bowGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#DDF4FF" />
              <stop offset="80%" stopColor="#A9DDF5" />
              <stop offset="100%" stopColor="#4FA8D1" />
            </linearGradient>

            <linearGradient id="arrowShaftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A9DDF5" />
              <stop offset="60%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            <radialGradient id="softBlueAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A9DDF5" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#DDF4FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F7FCFF" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="tulipPetalGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F4FAFD" />
              <stop offset="100%" stopColor="#DDF4FF" />
            </radialGradient>

            {/* Drop Shadows and Filters */}
            <filter id="bowGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="sparkleGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. THE BOW (Delicate, Romantic, Curved) */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Bow Stave Curve */}
            <path
              d="M 130 80 Q 185 140 165 200 Q 185 260 130 320"
              fill="none"
              stroke="url(#bowGlowGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#bowGlow)"
            />

            {/* Bow Grip Detail */}
            <path
              d="M 163 186 Q 167 200 163 214"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="165" cy="200" r="3.5" fill="#4FA8D1" />

            {/* Bow Tips Ornamental Jewels */}
            <circle cx="130" cy="80" r="4.5" fill="#FFFFFF" stroke="#A9DDF5" strokeWidth="1.5" />
            <circle cx="130" cy="320" r="4.5" fill="#FFFFFF" stroke="#A9DDF5" strokeWidth="1.5" />

            {/* Bowstring (Pulls back in Step 2 & 3, snaps in Step 4) */}
            <motion.path
              animate={{
                d: `M 130 80 L ${stringNockX} 200 L 130 320`,
              }}
              transition={{
                duration: step === 4 ? 0.15 : 1.5,
                ease: step === 4 ? 'easeOut' : [0.25, 1, 0.5, 1],
              }}
              fill="none"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1.8"
              filter="url(#sparkleGlow)"
            />
          </motion.g>

          {/* 2. THE ARROW & SPARKLE TRAIL */}
          {showArrow && (
            <motion.g
              initial={{
                x: step === 3 ? 75 : 160,
                opacity: 0,
              }}
              animate={{
                x: step === 3 ? 75 : (step === 4 ? 160 : (step === 5 ? 590 : 600)),
                opacity: step === 6 ? 0 : 1,
              }}
              transition={{
                duration: step === 3 ? 0.6 : (step === 5 ? 1.6 : 0.2),
                ease: step === 5 ? [0.2, 0, 0.2, 1] : 'easeOut',
              }}
            >
              {/* Sparkling Stardust Trail behind the arrow during flight */}
              {step === 5 && (
                <g opacity="0.9">
                  {[-18, -36, -58, -84, -112, -145, -180].map((offset, i) => (
                    <motion.circle
                      key={i}
                      cx={offset}
                      cy={200 + (i % 2 === 0 ? 3 : -3) * (i * 0.7)}
                      r={Math.max(1.5, 4 - i * 0.45)}
                      fill={i % 2 === 0 ? '#FFFFFF' : '#A9DDF5'}
                      filter="url(#sparkleGlow)"
                      initial={{ opacity: 0.9, scale: 1 }}
                      animate={{ opacity: 0, scale: 0.2 }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.08 }}
                    />
                  ))}
                  {/* Subtle stardust crosses */}
                  <g transform="translate(-40, 195) scale(0.6)">
                    <line x1="-6" y1="0" x2="6" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1="0" y1="-6" x2="0" y2="6" stroke="#FFFFFF" strokeWidth="1.5" />
                  </g>
                  <g transform="translate(-90, 205) scale(0.5)">
                    <line x1="-6" y1="0" x2="6" y2="0" stroke="#DDF4FF" strokeWidth="1.5" />
                    <line x1="0" y1="-6" x2="0" y2="6" stroke="#DDF4FF" strokeWidth="1.5" />
                  </g>
                </g>
              )}

              {/* Arrow Shaft */}
              <line
                x1="0"
                y1="200"
                x2="85"
                y2="200"
                stroke="url(#arrowShaftGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Feather Fletching at Tail */}
              <path
                d="M 2 200 L -12 192 M 2 200 L -12 208 M 8 200 L -6 192 M 8 200 L -6 208"
                stroke="#A9DDF5"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              {/* Tiny Glowing Heart carried by the Arrow Head */}
              <g transform="translate(85, 200) scale(0.9)">
                <circle cx="2" cy="0" r="10" fill="url(#softBlueAura)" />
                <path
                  d="M 0 0 L 8 -5 C 11 -8 15 -5 15 -2 C 15 2 10 7 0 12 C -10 7 -15 2 -15 -2 C -15 -5 -11 -8 -8 -5 Z"
                  transform="rotate(90) scale(0.6)"
                  fill="#FFFFFF"
                  stroke="#4FA8D1"
                  strokeWidth="1.2"
                  filter="url(#sparkleGlow)"
                />
              </g>
            </motion.g>
          )}

          {/* 3. THE FLOATING HEART TARGET (Steps 1 to 6) */}
          {showFloatingHeart && (
            <motion.g
              transform="translate(600, 200)"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Pulsing halo */}
              <motion.circle
                cx="0"
                cy="0"
                r="38"
                fill="url(#softBlueAura)"
                animate={{
                  scale: [0.9, 1.15, 0.9],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Floating Heart Target */}
              <motion.path
                d="M 0 -8 C -6 -18 -20 -14 -20 -3 C -20 7 -6 14 0 22 C 6 14 20 7 20 -3 C 20 -14 6 -18 0 -8 Z"
                fill="#FFFFFF"
                stroke="#A9DDF5"
                strokeWidth="2"
                filter="url(#sparkleGlow)"
                animate={
                  step === 6
                    ? {
                        scale: [1, 1.4, 0],
                        opacity: [1, 1, 0],
                      }
                    : {
                        scale: [1, 1.04, 1],
                      }
                }
                transition={
                  step === 6
                    ? { duration: 0.5 }
                    : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }
              />
            </motion.g>
          )}

          {/* 4. THE WHITE TULIP BLOOM (Steps 7 & 8) */}
          {showTulip && (
            <motion.g
              transform="translate(600, 200)"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Soft Blue Glowing Aura around the flower (Step 8) */}
              <motion.circle
                cx="0"
                cy="-25"
                r="75"
                fill="url(#softBlueAura)"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: step === 8 ? [0.45, 0.75, 0.45] : 0.3,
                  scale: step === 8 ? [0.95, 1.15, 0.95] : 0.9,
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Tender Green Stem rising smoothly */}
              <motion.path
                d="M 0 100 Q 5 50 0 -5"
                fill="none"
                stroke="#A2CBB6"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />

              {/* Leaves branching gracefully */}
              <motion.path
                d="M 2 55 Q 26 35 24 10 Q 12 30 2 55"
                fill="#B7DCC9"
                opacity="0.85"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.85 }}
                transition={{ delay: 0.4, duration: 1.0, ease: 'easeOut' }}
              />
              <motion.path
                d="M -2 70 Q -24 45 -22 25 Q -10 45 -2 70"
                fill="#B7DCC9"
                opacity="0.85"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.85 }}
                transition={{ delay: 0.5, duration: 1.0, ease: 'easeOut' }}
              />

              {/* Tulip Blossom Petals Unfolding */}
              <g transform="translate(0, -20)">
                {/* Back Center Petal */}
                <motion.path
                  d="M 0 -36 C -14 -32 -18 -8 0 8 C 18 -8 14 -32 0 -36 Z"
                  fill="url(#tulipPetalGrad)"
                  stroke="#A9DDF5"
                  strokeWidth="1.2"
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Left Petal (Unfolds outward in Step 8) */}
                <motion.path
                  d="M 0 6 C -18 6 -28 -14 -18 -32 C -8 -26 0 -12 0 6 Z"
                  fill="url(#tulipPetalGrad)"
                  stroke="#C6E8F7"
                  strokeWidth="1.2"
                  filter="url(#sparkleGlow)"
                  initial={{ rotate: 0, x: 0 }}
                  animate={{
                    rotate: step === 8 ? -14 : -4,
                    x: step === 8 ? -6 : -1,
                  }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Right Petal (Unfolds outward in Step 8) */}
                <motion.path
                  d="M 0 6 C 18 6 28 -14 18 -32 C 8 -26 0 -12 0 6 Z"
                  fill="url(#tulipPetalGrad)"
                  stroke="#C6E8F7"
                  strokeWidth="1.2"
                  filter="url(#sparkleGlow)"
                  initial={{ rotate: 0, x: 0 }}
                  animate={{
                    rotate: step === 8 ? 14 : 4,
                    x: step === 8 ? 6 : 1,
                  }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Front Center Petal (Pure porcelain white) */}
                <motion.path
                  d="M 0 8 C -12 8 -16 -12 -8 -28 C -3 -30 3 -30 8 -28 C 16 -12 12 8 0 8 Z"
                  fill="#FFFFFF"
                  stroke="#DDF4FF"
                  strokeWidth="1"
                  filter="url(#sparkleGlow)"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />

                {/* Soft dew sparkling points */}
                <circle cx="-3" cy="-12" r="1.5" fill="#FFFFFF" opacity="0.9" />
                <circle cx="5" cy="-8" r="1.2" fill="#DDF4FF" opacity="0.9" />
              </g>
            </motion.g>
          )}
        </svg>
      </div>

      {/* Control / Progression options */}
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          zIndex: 3,
        }}
      >
        {step >= 7 ? (
          <motion.button
            onClick={onComplete}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="btn btn-primary"
            style={{
              padding: '0.7rem 1.8rem',
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '9999px',
            }}
          >
            <span>See the flower bloom 🤍</span>
            <span>→</span>
          </motion.button>
        ) : (
          <button
            onClick={onComplete}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#7E97A4',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: '0.82rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              padding: '0.4rem 0.8rem',
            }}
          >
            Skip ahead to message
          </button>
        )}
      </div>
    </div>
  );
}
