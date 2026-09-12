import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Calendar, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const FinalClosingSection = () => {
  const {
    dateLabel,
    headline,
    summaryLines,
    beginningLine,
    toBeContinuedText,
    replayButtonText
  } = birthdayConfig.finalSectionStory;

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="closing" className="section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #FFF7F8 0%, #FCECEF 100%)',
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '6rem'
    }}>
      {/* Calm ambient background lighting */}
      <div className="ambient-glow-blush" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.35 }} />

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          {/* Date Badge */}
          <motion.div variants={itemVariants}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '50px',
              background: '#FFF0F4',
              border: '1px solid rgba(232, 160, 184, 0.4)',
              color: '#B86B82',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.15em'
            }}>
              <Calendar size={14} color="#B86B82" />
              <span>{dateLabel || "14 • 09 • 2026"}</span>
            </div>
          </motion.div>

          {/* Birthday Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-glow"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#3D3035', margin: 0, fontWeight: 600 }}
          >
            {headline || "Happy Birthday ❤️"}
          </motion.h2>

          {/* Summary Lines */}
          <motion.div variants={itemVariants} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {summaryLines.map((line, index) => (
              <p
                key={index}
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  color: '#7A6870',
                  fontStyle: 'italic',
                  lineHeight: 1.6
                }}
              >
                "{line}"
              </p>
            ))}
          </motion.div>

          {/* Transition Divider */}
          <motion.div
            variants={itemVariants}
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(232, 160, 184, 0.8), transparent)',
              margin: '1.5rem 0'
            }}
          />

          {/* "This is only the beginning." */}
          <motion.p
            variants={itemVariants}
            className="font-serif"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', color: '#3D3035', fontWeight: 600 }}
          >
            {beginningLine}
          </motion.p>

          {/* Prominent "TO BE CONTINUED..." */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '2rem', marginBottom: '2.5rem' }}
          >
            <h1
              className="font-serif text-glow"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                letterSpacing: '0.1em',
                color: '#B86B82',
                fontWeight: 700,
                textShadow: '0 0 25px rgba(232, 160, 184, 0.4)'
              }}
            >
              {toBeContinuedText || "TO BE CONTINUED..."}
            </h1>
          </motion.div>

          {/* Replay Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={handleReplay}
              className="btn btn-secondary"
              style={{
                padding: '0.8rem 1.75rem',
                fontSize: '0.92rem',
                letterSpacing: '0.04em',
                background: '#FFFFFF',
                color: '#3D3035',
                border: '1px solid rgba(232, 160, 184, 0.4)'
              }}
              aria-label="Replay Our Story"
            >
              <RotateCcw size={16} color="#B86B82" />
              <span>{replayButtonText || "Replay Our Story"}</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalClosingSection;
