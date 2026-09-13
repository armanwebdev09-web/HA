import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import BackgroundStars from './BackgroundStars';

const VirtualHugScreen = ({ onProceed }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hugConnected, setHugConnected] = useState(false);
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setHugConnected(true);
      setShowFirstText(true);
      setShowSecondText(true);
      setShowButton(true);
      return;
    }

    // Timing sequence for emotional pacing
    const tHug = setTimeout(() => setHugConnected(true), 2100);
    const tText1 = setTimeout(() => setShowFirstText(true), 4600);
    const tText2 = setTimeout(() => setShowSecondText(true), 6000);
    const tBtn = setTimeout(() => setShowButton(true), 7200);

    return () => {
      clearTimeout(tHug);
      clearTimeout(tText1);
      clearTimeout(tText2);
      clearTimeout(tBtn);
    };
  }, [shouldReduceMotion]);

  // Floating ambient hearts & clouds rising from the embrace
  const floatingHearts = [
    { id: 1, x: -35, y: -25, delay: 0.2, scale: 0.75, dur: 3.2, icon: '🤍' },
    { id: 2, x: 28, y: -35, delay: 0.8, scale: 0.9, dur: 3.6, icon: '🩵' },
    { id: 3, x: -15, y: -55, delay: 1.4, scale: 0.65, dur: 2.9, icon: '☁️' },
    { id: 4, x: 38, y: -20, delay: 2.0, scale: 0.7, dur: 3.4, icon: '✨' },
    { id: 5, x: -45, y: -10, delay: 1.1, scale: 0.8, dur: 3.8, icon: '🤍' },
    { id: 6, x: 12, y: -65, delay: 1.7, scale: 0.7, dur: 3.1, icon: '🩵' },
  ];

  return (
    <motion.div
      className="virtual-hug-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: shouldReduceMotion ? 1 : 1.04,
        filter: 'blur(8px)',
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#F7FCFF',
        backgroundImage: 'radial-gradient(circle at 50% 35%, #FFFFFF 0%, #EAF8FF 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Dreamy Ambient Stars & Particles */}
      <BackgroundStars count={shouldReduceMotion ? 12 : 28} />

      {/* Atmospheric Baby Blue Glows */}
      <div
        className="ambient-glow-blue"
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(169, 221, 245, 0.32) 0%, rgba(247, 252, 255, 0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(221, 244, 255, 0.45) 0%, rgba(247, 252, 255, 0) 75%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '620px',
          width: '100%',
        }}
      >
        {/* ========================================================= */}
        {/* ILLUSTRATION: The Warm Animated Hug                       */}
        {/* ========================================================= */}
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '210px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem'
          }}
        >
          {/* Hug Aura Glow when embrace occurs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={hugConnected ? {
              opacity: [0.55, 0.85, 0.6],
              scale: [0.95, 1.15, 0.98],
            } : { opacity: 0, scale: 0.6 }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              width: '190px',
              height: '190px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(169, 221, 245, 0.6) 0%, rgba(120, 197, 232, 0.3) 50%, transparent 72%)',
              filter: 'blur(16px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          {/* Floating Hearts and Sparkles (spawned upon embrace) */}
          {hugConnected && !shouldReduceMotion && floatingHearts.map((item) => (
            <motion.span
              key={item.id}
              initial={{
                opacity: 0,
                x: item.x * 0.4,
                y: 10,
                scale: 0.3
              }}
              animate={{
                opacity: [0, 0.9, 0],
                x: [item.x * 0.4, item.x, item.x * 1.3],
                y: [10, item.y, item.y - 35],
                scale: [0.4, item.scale, item.scale * 0.85]
              }}
              transition={{
                duration: item.dur,
                repeat: Infinity,
                delay: item.delay,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                fontSize: '1.15rem',
                pointerEvents: 'none',
                zIndex: 4,
                filter: 'drop-shadow(0 2px 8px rgba(120, 197, 232, 0.5))'
              }}
            >
              {item.icon}
            </motion.span>
          ))}

          {/* Gentle Heartbeat & Breathing Wrapper during hug */}
          <motion.div
            animate={hugConnected ? {
              scale: [1, 1.026, 1, 1.018, 1],
              y: [0, -1.8, 0, -1, 0]
            } : { scale: 1, y: 0 }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}
          >
            <svg
              viewBox="0 0 280 200"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
              }}
            >
              <defs>
                {/* Character 1 (Left): Soft Pure White to Sky Tint */}
                <linearGradient id="charLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#eef7fc" />
                  <stop offset="100%" stopColor="#ddf4ff" />
                </linearGradient>

                {/* Character 2 (Right): Gentle Sky White Gradient */}
                <linearGradient id="charRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#eaf8ff" />
                  <stop offset="100%" stopColor="#cdeaf7" />
                </linearGradient>

                {/* Arm gradients */}
                <linearGradient id="armGradLeft" x1="0%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#ddf4ff" />
                </linearGradient>

                <linearGradient id="armGradRight" x1="100%" y1="0%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#d6edf7" />
                </linearGradient>

                {/* Soft shadow under characters */}
                <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(38, 59, 70, 0.12)" />
                  <stop offset="100%" stopColor="rgba(38, 59, 70, 0)" />
                </radialGradient>
              </defs>

              {/* Ground Shadow */}
              <ellipse cx="140" cy="184" rx="68" ry="12" fill="url(#groundShadow)" />

              {/* ==================================================== */}
              {/* LEFT CHARACTER                                      */}
              {/* ==================================================== */}
              <motion.g
                initial={shouldReduceMotion ? { x: 0 } : { x: -48 }}
                animate={{ x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 2.0,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Character 1 Tilt/Lean into hug */}
                <motion.g
                  initial={shouldReduceMotion ? { rotate: 4 } : { rotate: -3 }}
                  animate={{ rotate: 4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 2.1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originX: '115px', originY: '175px' }}
                >
                  {/* Body / Head Silhouette */}
                  <path
                    d="M 115 62
                       C 95 62, 80 80, 80 108
                       C 80 134, 76 172, 115 174
                       C 142 173, 145 136, 145 108
                       C 145 80, 133 62, 115 62 Z"
                    fill="url(#charLeftGrad)"
                    stroke="rgba(255, 235, 238, 0.4)"
                    strokeWidth="1.2"
                  />

                  {/* Serene Closed Eyes (Arc of happiness) */}
                  <path
                    d="M 118 96 Q 124 90 130 96"
                    stroke="#7a4b56"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Soft Rosy Cheek Blush */}
                  <ellipse cx="127" cy="103" rx="5.5" ry="3.5" fill="#f497a7" opacity="0.6" />

                  {/* Gentle curved mouth / sweet smile */}
                  <path
                    d="M 124 105 Q 127 108 130 105"
                    stroke="#94636f"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.75"
                  />
                </motion.g>
              </motion.g>

              {/* ==================================================== */}
              {/* RIGHT CHARACTER                                     */}
              {/* ==================================================== */}
              <motion.g
                initial={shouldReduceMotion ? { x: 0 } : { x: 48 }}
                animate={{ x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 2.0,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Character 2 Tilt/Lean into hug */}
                <motion.g
                  initial={shouldReduceMotion ? { rotate: -4 } : { rotate: 3 }}
                  animate={{ rotate: -4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 2.1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originX: '165px', originY: '175px' }}
                >
                  {/* Body / Head Silhouette */}
                  <path
                    d="M 165 64
                       C 147 64, 135 82, 135 110
                       C 135 136, 138 173, 165 174
                       C 204 172, 200 134, 200 110
                       C 200 82, 185 64, 165 64 Z"
                    fill="url(#charRightGrad)"
                    stroke="rgba(255, 230, 235, 0.4)"
                    strokeWidth="1.2"
                  />

                  {/* Serene Closed Eyes */}
                  <path
                    d="M 150 97 Q 156 91 162 97"
                    stroke="#7a4b56"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Soft Rosy Cheek Blush */}
                  <ellipse cx="153" cy="104" rx="5.5" ry="3.5" fill="#f497a7" opacity="0.6" />

                  {/* Gentle curved mouth */}
                  <path
                    d="M 150 106 Q 153 109 156 106"
                    stroke="#94636f"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.75"
                  />
                </motion.g>
              </motion.g>

              {/* ==================================================== */}
              {/* WRAPPING EMBRACING ARMS                             */}
              {/* ==================================================== */}

              {/* Left Character's Arm: wraps around right character */}
              <motion.g
                initial={shouldReduceMotion ? { x: 0, rotate: 0 } : { x: -48, rotate: -25 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 2.1,
                  delay: 0.35,
                  ease: [0.25, 1, 0.4, 1],
                }}
                style={{ originX: '110px', originY: '120px' }}
              >
                <path
                  d="M 108 122
                     C 114 126, 138 132, 172 135
                     C 183 136, 186 124, 175 120
                     C 148 116, 126 114, 108 122 Z"
                  fill="url(#armGradLeft)"
                  stroke="rgba(255, 235, 238, 0.5)"
                  strokeWidth="1"
                />
                {/* Cute little resting hand */}
                <ellipse cx="178" cy="129" rx="6.5" ry="5" fill="#f8e5e8" />
              </motion.g>

              {/* Right Character's Arm: wraps around left character */}
              <motion.g
                initial={shouldReduceMotion ? { x: 0, rotate: 0 } : { x: 48, rotate: 25 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 2.1,
                  delay: 0.35,
                  ease: [0.25, 1, 0.4, 1],
                }}
                style={{ originX: '170px', originY: '126px' }}
              >
                <path
                  d="M 172 126
                     C 164 130, 142 138, 106 138
                     C 96 138, 94 127, 104 124
                     C 130 120, 154 118, 172 126 Z"
                  fill="url(#armGradRight)"
                  stroke="rgba(255, 230, 235, 0.5)"
                  strokeWidth="1"
                />
                {/* Cute little resting hand */}
                <ellipse cx="102" cy="131" rx="6.5" ry="5" fill="#f3d7dd" />
              </motion.g>

              {/* Little love heart over their heads when hugged */}
              <motion.g
                initial={{ opacity: 0, scale: 0, y: 10 }}
                animate={hugConnected ? {
                  opacity: 1,
                  scale: [1, 1.15, 1],
                  y: [-4, -8, -4]
                } : { opacity: 0, scale: 0, y: 10 }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2
                }}
                style={{ originX: '140px', originY: '48px' }}
              >
                <path
                  d="M 140 50
                     C 138 46, 133 43, 129 46
                     C 124 50, 125 57, 140 67
                     C 155 57, 156 50, 151 46
                     C 147 43, 142 46, 140 50 Z"
                  fill="#78C5E8"
                  filter="drop-shadow(0 2px 8px rgba(120, 197, 232, 0.6))"
                />
              </motion.g>
            </svg>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* SEQUENTIAL TYPOGRAPHY                                     */}
        {/* ========================================================= */}
        <div
          style={{
            minHeight: '140px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.9rem'
          }}
        >
          {/* Step 9: "A little hug for you before we begin. 🤍" */}
          {showFirstText && (
            <motion.h1
              initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 4.2vw, 2.3rem)',
                fontWeight: 600,
                color: '#263B46',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
                textShadow: '0 0 20px rgba(169, 221, 245, 0.3)',
                margin: 0
              }}
            >
              A little hug for you before we begin.{' '}
              <span style={{ display: 'inline-block', filter: 'drop-shadow(0 0 6px rgba(120, 197, 232, 0.5))' }}>
                🩵
              </span>
            </motion.h1>
          )}

          {/* Step 10: "Because I wish I could give you a real one right now." */}
          {showSecondText && (
            <motion.p
              initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.05rem, 2.6vw, 1.35rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#607782',
                letterSpacing: '0.015em',
                lineHeight: 1.5,
                margin: 0,
                maxWidth: '480px'
              }}
            >
              Because I wish I could give you a real one right now.
            </motion.p>
          )}

          {/* Step 11: Button "Come inside 🤍" */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: '0.8rem' }}
            >
              <motion.button
                onClick={onProceed}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 2.4rem',
                  fontSize: '1.05rem',
                  letterSpacing: '0.03em',
                  background: '#78C5E8',
                  boxShadow: '0 8px 24px rgba(79, 168, 209, 0.28), 0 0 20px rgba(120, 197, 232, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  borderRadius: '9999px',
                  color: '#FFFFFF',
                  fontWeight: 500,
                }}
                aria-label="Come inside"
              >
                <span>Come inside</span>
                <Heart size={17} style={{ fill: '#FFFFFF', stroke: '#FFFFFF' }} />
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default VirtualHugScreen;
