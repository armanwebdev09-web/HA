import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoveMessages
 * 
 * Reveals the 4 sincere love messages line by line with comfortable reading speed:
 * 1. "Somewhere between ordinary days and little moments, you became someone very special to me."
 * 2. "I love the little things that make you who you are. The way you smile, the way you get angry at my silly jokes, your innocence, your eyes, and the happiness you bring into my life."
 * 3. "I don't need every moment to be perfect. I just want to keep creating honest, happy, beautiful memories with you."
 * 4. "I love you, and I'm grateful that you're a part of my story. 🤍"
 */
export default function LoveMessages({ onComplete }) {
  // Revealed count (1 to 4)
  const [revealedCount, setRevealedCount] = useState(1);

  const messages = [
    {
      id: 1,
      text: "Somewhere between ordinary days and little moments, you became someone very special to me.",
      isHighlight: true,
    },
    {
      id: 2,
      text: "I love the little things that make you who you are. The way you smile, the way you get angry at my silly jokes, your innocence, your eyes, and the happiness you bring into my life.",
      isHighlight: false,
    },
    {
      id: 3,
      text: "I don't need every moment to be perfect. I just want to keep creating honest, happy, beautiful memories with you.",
      isHighlight: false,
    },
    {
      id: 4,
      text: "I love you, and I'm grateful that you're a part of my story. 🤍",
      isHighlight: true,
    },
  ];

  useEffect(() => {
    // Comfortably reveal message 2 after 3.8s
    const t1 = setTimeout(() => {
      setRevealedCount((prev) => Math.max(prev, 2));
    }, 3800);

    // Reveal message 3 after another 4.5s
    const t2 = setTimeout(() => {
      setRevealedCount((prev) => Math.max(prev, 3));
    }, 8300);

    // Reveal message 4 after another 4.5s
    const t3 = setTimeout(() => {
      setRevealedCount((prev) => Math.max(prev, 4));
    }, 12800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleNext = () => {
    if (revealedCount < 4) {
      setRevealedCount((prev) => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  return (
    <div
      className="love-messages-container"
      style={{
        width: '100%',
        maxWidth: '620px',
        margin: '0 auto',
        padding: '0 0.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
        }}
      >
        {messages.slice(0, revealedCount).map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              padding: '1.4rem 1.6rem',
              borderRadius: '20px',
              backgroundColor: index === 3 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: index === 3 ? '1px solid rgba(120, 197, 232, 0.6)' : '1px solid #D6EDF7',
              boxShadow: index === 3 ? '0 10px 30px rgba(79, 168, 209, 0.16)' : '0 4px 18px rgba(79, 168, 209, 0.06)',
            }}
          >
            <p
              style={{
                fontFamily: msg.isHighlight ? "'Cormorant Garamond', Georgia, serif" : "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: msg.isHighlight ? 'clamp(1.25rem, 3.2vw, 1.65rem)' : 'clamp(1rem, 2.2vw, 1.15rem)',
                fontWeight: msg.isHighlight ? 500 : 400,
                lineHeight: msg.isHighlight ? 1.45 : 1.75,
                color: index === 3 ? '#263B46' : msg.isHighlight ? '#263B46' : '#607782',
                fontStyle: msg.isHighlight ? 'italic' : 'normal',
                letterSpacing: msg.isHighlight ? '0.01em' : '0.005em',
                margin: 0,
              }}
            >
              {msg.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Reading Pace Controls */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {revealedCount < 4 ? (
          <button
            onClick={handleNext}
            style={{
              background: 'transparent',
              border: '1px solid #D6EDF7',
              padding: '0.45rem 1.2rem',
              borderRadius: '9999px',
              color: '#4FA8D1',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease',
            }}
          >
            <span>Read next thought</span>
            <span>↓</span>
          </button>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onClick={onComplete}
            className="btn btn-primary"
            style={{
              padding: '0.75rem 2rem',
              fontSize: '0.95rem',
              borderRadius: '9999px',
              cursor: 'pointer',
            }}
          >
            <span>A little flower for you 🤍</span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
