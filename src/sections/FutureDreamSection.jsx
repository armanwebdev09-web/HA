import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Mountain, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import SnowParticles from '../components/SnowParticles';

const FutureDreamSection = () => {
  const { badge, headline, lines, endingQuote } = birthdayConfig.futureDreamStory;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="future" className="section" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(13, 20, 38, 0.8) 0%, rgba(10, 7, 18, 0.95) 100%)',
      overflow: 'hidden'
    }}>
      {/* Falling Snow Particles */}
      <SnowParticles count={36} />

      {/* Frosty Blue Ambient Glow */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(162, 210, 255, 0.15) 0%, rgba(10, 7, 18, 0) 70%)',
        filter: 'blur(60px)',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '50px',
            background: 'rgba(162, 210, 255, 0.12)',
            border: '1px solid rgba(162, 210, 255, 0.3)',
            color: '#a2d2ff',
            fontSize: '0.82rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <Snowflake size={14} className="animate-star-twinkle" />
            <span>{badge || "A Memory Waiting For Us ❄️"}</span>
          </div>

          <h2 className="font-serif text-glow mb-md" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#fcf9f2' }}>
            {headline}
          </h2>
        </motion.div>

        {/* Snowy Mountain Cinematic Card */}
        <div className="glass-card" style={{
          padding: '3.5rem 2.5rem',
          position: 'relative',
          border: '1px solid rgba(162, 210, 255, 0.2)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(162, 210, 255, 0.12)'
        }}>
          {/* Mountain Silhouette Graphic */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#a2d2ff',
            marginBottom: '2rem'
          }}>
            <Mountain size={44} />
          </div>

          {/* Sequential Animated Copy Lines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}
          >
            {lines.map((line, idx) => (
              <motion.p
                key={idx}
                variants={lineVariants}
                className="font-serif"
                style={{
                  fontSize: idx === 0 ? 'clamp(1.5rem, 3.5vw, 2.1rem)' : 'clamp(1.25rem, 2.8vw, 1.6rem)',
                  color: idx === 0 ? '#a2d2ff' : '#fcf9f2',
                  fontStyle: idx === 0 ? 'italic' : 'normal',
                  lineHeight: 1.6
                }}
              >
                "{line}"
              </motion.p>
            ))}

            {/* Frosty Ending Quote Highlight */}
            <motion.div
              variants={lineVariants}
              style={{
                marginTop: '2rem',
                padding: '0.85rem 1.75rem',
                borderRadius: '50px',
                background: 'rgba(212, 43, 88, 0.15)',
                border: '1px solid rgba(212, 43, 88, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#fcf9f2',
                fontSize: '1.2rem',
                fontWeight: 600
              }}
              className="font-serif text-glow"
            >
              <span>{endingQuote}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureDreamSection;
