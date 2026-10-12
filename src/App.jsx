import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingParticles from './components/FloatingParticles';
import OpeningScreen from './components/OpeningScreen';
import BowAndArrow from './components/BowAndArrow';
import StoryExperience from './components/StoryExperience';
import FinalScreen from './components/FinalScreen';

/**
 * App - An Arrow That Carries My Heart
 * 
 * Flow:
 * 1. Opening screen: "Some feelings are too beautiful to leave unspoken." -> "So I made you a little something. 🤍" -> Glowing heart
 * 2. Bow and arrow animation: Bow appears -> string draws back -> glowing arrow with tiny heart -> released -> sparkling trail -> reaches floating heart -> heart opens into white tulip with soft blue glow
 * 3. Tulip centerpiece & Love message: /videos/white-tulip.mp4 centerpiece + line-by-line gentle love message
 * 4. Final screen: Tulip video frame + "A little flower for someone who means a lot to me. 🤍" + "Just a little reminder that you are special." + "Read it again ♡"
 */
function App() {
  // Stages: 'opening' | 'bow-arrow' | 'story' | 'final'
  const [stage, setStage] = useState('opening');

  const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div
      className="romantic-experience-wrapper"
      style={{
        backgroundColor: '#F7FCFF',
        minHeight: '100vh',
        color: '#263B46',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Dreamy Ambient Particles */}
      <FloatingParticles />

      {/* Ambient background soft-glow orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(221, 244, 255, 0.45) 0%, rgba(247, 252, 255, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(169, 221, 245, 0.3) 0%, rgba(247, 252, 255, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Discrete Journey Progress Indicators */}
      <div
        aria-label="Story progress"
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.5rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          border: '1px solid rgba(214, 237, 247, 0.8)',
        }}
      >
        {['opening', 'bow-arrow', 'story', 'final'].map((st) => (
          <button
            key={st}
            onClick={() => setStage(st)}
            aria-label={`Jump to stage ${st}`}
            style={{
              width: stage === st ? '18px' : '6px',
              height: '6px',
              borderRadius: '9999px',
              backgroundColor: stage === st ? '#4FA8D1' : '#D6EDF7',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Stage Router */}
      <AnimatePresence mode="wait">
        {stage === 'opening' && (
          <motion.div key="opening-stage" {...pageTransition}>
            <OpeningScreen onProceed={() => setStage('bow-arrow')} />
          </motion.div>
        )}

        {stage === 'bow-arrow' && (
          <motion.div key="bow-arrow-stage" {...pageTransition}>
            <BowAndArrow onComplete={() => setStage('story')} />
          </motion.div>
        )}

        {stage === 'story' && (
          <motion.div key="story-stage" {...pageTransition}>
            <StoryExperience onComplete={() => setStage('final')} />
          </motion.div>
        )}

        {stage === 'final' && (
          <motion.div key="final-stage" {...pageTransition}>
            <FinalScreen onReplay={() => setStage('opening')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
