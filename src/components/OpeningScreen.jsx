import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import BackgroundStars from './BackgroundStars';

const OpeningScreen = ({ onEnter }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation parameters tailored for slow, elegant cinematic feel
  const transitionDuration = shouldReduceMotion ? 0.3 : 1.2;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.1 : 1.2,
        delayChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.04,
      filter: 'blur(10px)',
      transition: {
        duration: shouldReduceMotion ? 0.4 : 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 18,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: transitionDuration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="opening-screen-wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FFF7F8',
        backgroundImage: 'radial-gradient(circle at 50% 35%, #FFF7F8 0%, #FCECEF 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      {/* Background Stars & Ambient Glow */}
      <BackgroundStars count={shouldReduceMotion ? 10 : 25} />
      
      <div className="ambient-glow-blush animate-pulse-glow" style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="ambient-glow-champagne" style={{ bottom: '20%', right: '20%' }} />

      {/* Sequential Text & Content */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '680px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem'
        }}
      >
        {/* Step 1 */}
        <motion.h1 
          variants={itemVariants} 
          className="font-serif text-glow"
          style={{ 
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            color: '#3D3035',
            fontWeight: 600,
            letterSpacing: '-0.02em'
          }}
        >
          Hey, You. <span style={{ color: '#E8A0B8', display: 'inline-block' }}>❤️</span>
        </motion.h1>

        {/* Step 2 */}
        <motion.p 
          variants={itemVariants}
          style={{ 
            fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
            color: '#7A6870',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            letterSpacing: '0.01em'
          }}
        >
          I made something for you.
        </motion.p>

        {/* Step 3 */}
        <motion.div variants={itemVariants} style={{ marginTop: '0.5rem' }}>
          <p 
            style={{ 
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              color: '#7A6870',
              lineHeight: 1.8,
              fontWeight: 400
            }}
          >
            Not just a birthday website...<br />
            <span style={{ color: '#3D3035', fontWeight: 600 }}>A little piece of us.</span>
          </p>
        </motion.div>

        {/* Step 4: CTA Button */}
        <motion.div variants={itemVariants} style={{ marginTop: '1.5rem' }}>
          <button
            onClick={onEnter}
            className="btn btn-primary"
            style={{
              padding: '0.95rem 2.25rem',
              fontSize: '1.05rem',
              letterSpacing: '0.03em',
            }}
            aria-label="Enter My Little World"
          >
            <Sparkles size={18} style={{ color: '#FFF' }} />
            <span>Enter My Little World</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpeningScreen;
