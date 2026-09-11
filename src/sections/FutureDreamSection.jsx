import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Snowflake, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import SnowParticles from '../components/SnowParticles';
import WinterSceneIllustration from '../components/WinterSceneIllustration';

const FutureDreamSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { title, openingText, scenes, badge } = birthdayConfig.futureDreamStory;

  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const autoPlayTimerRef = useRef(null);

  const currentScene = scenes[activeSceneIndex] || scenes[0];

  // Auto-play movie mode
  useEffect(() => {
    if (isPlayingAuto) {
      // Hold hug longer (scene 4) for emotional impact (~4.5s), other scenes ~4s
      const delay = activeSceneIndex === 4 ? 4600 : 3800;
      autoPlayTimerRef.current = setTimeout(() => {
        if (activeSceneIndex < scenes.length - 1) {
          setActiveSceneIndex(prev => prev + 1);
        } else {
          setIsPlayingAuto(false);
        }
      }, delay);
    }
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [isPlayingAuto, activeSceneIndex, scenes.length]);

  const handleNext = () => {
    if (activeSceneIndex < scenes.length - 1) {
      setActiveSceneIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeSceneIndex > 0) {
      setActiveSceneIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setActiveSceneIndex(0);
    setIsPlayingAuto(false);
  };

  return (
    <section
      id="future"
      className="section"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #050814 0%, #0a0f24 50%, #080c1c 100%)',
        overflow: 'hidden',
        padding: '5rem 1.5rem',
        minHeight: '100vh',
      }}
    >
      {/* Falling Snow Particles */}
      <SnowParticles count={shouldReduceMotion ? 12 : 38} />

      {/* Atmospheric Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162, 210, 255, 0.12) 0%, rgba(8, 12, 28, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 200, 100, 0.08) 0%, rgba(8, 12, 28, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Section Header Badge & Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '50px',
              background: 'rgba(162, 210, 255, 0.12)',
              border: '1px solid rgba(162, 210, 255, 0.3)',
              color: '#a2d2ff',
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}
          >
            <Snowflake size={14} className="animate-star-twinkle" />
            <span>{badge || "A Memory Waiting For Us ❄️"}</span>
          </div>

          <h2
            className="font-serif text-glow"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              color: '#fcf9f2',
              margin: '0 0 0.6rem 0',
              fontWeight: 600
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.15rem, 2.6vw, 1.45rem)',
              fontStyle: 'italic',
              color: '#a2d2ff',
              margin: 0,
              letterSpacing: '0.015em'
            }}
          >
            "{openingText}"
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* CINEMATIC INTERACTIVE THEATER STAGE                       */}
        {/* ========================================================= */}
        <div style={{ position: 'relative', margin: '0 auto' }}>
          {/* Animated Winter Illustration Canvas */}
          <WinterSceneIllustration sceneIndex={activeSceneIndex} />

          {/* Interactive Story Progression Card */}
          <motion.div
            className="glass-card"
            style={{
              marginTop: '1.75rem',
              padding: '2.25rem 2rem',
              borderRadius: '20px',
              border: '1px solid rgba(162, 210, 255, 0.22)',
              background: 'rgba(10, 15, 32, 0.78)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(162, 210, 255, 0.1)',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            {/* Story Badge Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.9rem',
                  borderRadius: '50px',
                  background: activeSceneIndex === 4 ? 'rgba(212, 43, 88, 0.25)' : 'rgba(162, 210, 255, 0.14)',
                  border: activeSceneIndex === 4 ? '1px solid rgba(212, 43, 88, 0.4)' : '1px solid rgba(162, 210, 255, 0.25)',
                  color: activeSceneIndex === 4 ? '#ff9ebb' : '#a2d2ff',
                  fontWeight: 600
                }}
              >
                {currentScene.badge}
              </span>
              <span style={{ color: '#8ba5c9', fontSize: '0.8rem' }}>
                • Step {activeSceneIndex + 1} of {scenes.length}
              </span>
            </div>

            {/* Headline of Current Beat */}
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.35rem, 3.2vw, 1.85rem)',
                color: '#fcf9f2',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              {currentScene.headline}
            </h3>

            {/* Animated Story Paragraphs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScene.id}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  alignItems: 'center',
                  minHeight: '110px',
                  justifyContent: 'center'
                }}
              >
                {currentScene.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="font-serif"
                    style={{
                      fontSize: activeSceneIndex === 5 && idx === 1
                        ? 'clamp(1.25rem, 3vw, 1.65rem)'
                        : (activeSceneIndex === 4 ? 'clamp(1.15rem, 2.6vw, 1.4rem)' : 'clamp(1.05rem, 2.4vw, 1.28rem)'),
                      color: activeSceneIndex === 5 && idx === 1
                        ? '#ffd166'
                        : (activeSceneIndex === 4 ? '#ffe5ec' : '#fcf9f2'),
                      fontStyle: activeSceneIndex === 4 || (activeSceneIndex === 5 && idx === 0) ? 'italic' : 'normal',
                      fontWeight: (activeSceneIndex === 5 && idx === 1) || activeSceneIndex === 4 ? 600 : 300,
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: '620px',
                      textShadow: activeSceneIndex === 4 ? '0 0 15px rgba(255, 182, 193, 0.3)' : 'none'
                    }}
                  >
                    "{p}"
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Interactive Scene Navigation Controls */}
            <div
              style={{
                marginTop: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.25rem'
              }}
            >
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                disabled={activeSceneIndex === 0}
                className="btn btn-secondary"
                style={{
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.88rem',
                  opacity: activeSceneIndex === 0 ? 0.35 : 1,
                  cursor: activeSceneIndex === 0 ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
                aria-label="Previous Scene"
              >
                <ChevronLeft size={16} />
                <span>Back</span>
              </button>

              {/* Progress Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                {scenes.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSceneIndex(idx);
                      setIsPlayingAuto(false);
                    }}
                    style={{
                      width: activeSceneIndex === idx ? '24px' : '9px',
                      height: '9px',
                      borderRadius: '50px',
                      background: activeSceneIndex === idx
                        ? (idx === 4 ? '#ff4d79' : '#a2d2ff')
                        : 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    aria-label={`Jump to scene ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next / Play Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {/* Auto-Play Toggle */}
                <button
                  onClick={() => setIsPlayingAuto(!isPlayingAuto)}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.55rem 0.95rem',
                    fontSize: '0.84rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderColor: isPlayingAuto ? 'rgba(162, 210, 255, 0.5)' : 'rgba(255, 255, 255, 0.15)',
                    color: isPlayingAuto ? '#a2d2ff' : '#e4dec3'
                  }}
                  aria-label={isPlayingAuto ? "Pause Auto-play" : "Auto-play Scenes"}
                >
                  {isPlayingAuto ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlayingAuto ? "Pause" : "Auto-play"}</span>
                </button>

                {activeSceneIndex < scenes.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="btn btn-primary"
                    style={{
                      padding: '0.55rem 1.35rem',
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: activeSceneIndex === 3
                        ? 'linear-gradient(135deg, #d42b58 0%, #8b1532 100%)'
                        : 'linear-gradient(135deg, #2b5fd4 0%, #152c8b 100%)',
                      borderColor: activeSceneIndex === 3 ? 'rgba(212, 43, 88, 0.5)' : 'rgba(162, 210, 255, 0.4)',
                    }}
                    aria-label="Next Scene"
                  >
                    <span>{activeSceneIndex === 3 ? "The Hug ❤️" : "Next"}</span>
                    {activeSceneIndex === 3 ? <Heart size={15} style={{ fill: '#fff' }} /> : <ChevronRight size={16} />}
                  </button>
                ) : (
                  <button
                    onClick={handleRestart}
                    className="btn btn-secondary"
                    style={{
                      padding: '0.55rem 1.25rem',
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      borderColor: 'rgba(255, 209, 102, 0.4)',
                      color: '#ffd166'
                    }}
                    aria-label="Replay Story"
                  >
                    <RotateCcw size={15} />
                    <span>Replay</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureDreamSection;
