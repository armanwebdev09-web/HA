import React from 'react';
import { motion } from 'framer-motion';
import TulipCenterpiece from './TulipCenterpiece';
import LoveMessages from './LoveMessages';

/**
 * StoryExperience
 * 
 * Houses the Tulip Centerpiece (Section 4) and the Love Messages (Section 5).
 */
export default function StoryExperience({ onComplete }) {
  return (
    <div
      className="story-experience-container"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.25rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
        }}
      >
        {/* Subtle section label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4FA8D1',
              fontWeight: 600,
            }}
          >
            For You 🤍
          </span>
        </motion.div>

        {/* Section 4: White Tulip Video Centerpiece */}
        <TulipCenterpiece />

        {/* Section 5: Love Messages Line-by-Line Reveal */}
        <LoveMessages onComplete={onComplete} />
      </div>
    </div>
  );
}
