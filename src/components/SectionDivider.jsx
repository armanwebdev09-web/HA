import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ accent = "blue" }) => {
  const isBlue = accent === "blue";
  const glowColor = isBlue ? "rgba(120, 197, 232, 0.55)" : "rgba(169, 221, 245, 0.45)";

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
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '280px',
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${glowColor} 50%, transparent 100%)`,
          boxShadow: `0 0 10px ${glowColor}`
        }}
      />
    </div>
  );
};

export default SectionDivider;
