import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ accent = "pink" }) => {
  const isPink = accent === "pink";
  const glowColor = isPink ? "rgba(212, 43, 88, 0.4)" : "rgba(255, 183, 3, 0.4)";

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 0',
      position: 'relative',
      zIndex: 2,
      pointerEvents: 'none'
    }}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '300px',
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${glowColor} 50%, transparent 100%)`,
          boxShadow: `0 0 15px ${glowColor}`
        }}
      />
    </div>
  );
};

export default SectionDivider;
