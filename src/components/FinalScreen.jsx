import React from 'react';
import { motion } from 'framer-motion';
import TulipCenterpiece from './TulipCenterpiece';

/**
 * FinalScreen
 * 
 * Shows:
 * 1. The white tulip video inside an elegant frame.
 * 2. "A little flower for someone who means a lot to me. 🤍"
 * 3. "Just a little reminder that you are special."
 * 4. Button: "Read it again ♡" which replays the experience from the beginning.
 */
export default function FinalScreen({ onReplay }) {
  return (
    <div
      className="final-screen-container"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '580px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* White Tulip Video Centerpiece */}
        <TulipCenterpiece compact={true} />

        {/* Closing Texts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
              fontWeight: 500,
              color: '#263B46',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            A little flower for someone who means a lot to me. 🤍
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.15rem)',
              fontWeight: 400,
              color: '#4FA8D1',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Just a little reminder that you are special.
          </p>
        </motion.div>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onReplay}
            className="btn btn-secondary"
            style={{
              padding: '0.8rem 2.2rem',
              fontSize: '0.95rem',
              fontWeight: 500,
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D6EDF7',
              color: '#397D9F',
              boxShadow: '0 6px 20px rgba(79, 168, 209, 0.12)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#DDF4FF';
              e.currentTarget.style.borderColor = '#A9DDF5';
              e.currentTarget.style.color = '#263B46';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#D6EDF7';
              e.currentTarget.style.color = '#397D9F';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Read it again</span>
            <span>♡</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
