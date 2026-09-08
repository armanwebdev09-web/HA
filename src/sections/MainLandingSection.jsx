import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import NavigationGrid from '../components/NavigationGrid';

const MainLandingSection = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '85vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Ambient background lighting */}
      <div className="ambient-glow-burgundy animate-pulse-glow" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="ambient-glow-pink" style={{ top: '60%', right: '10%' }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Date Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(212, 43, 88, 0.12)',
            border: '1px solid rgba(212, 43, 88, 0.3)',
            color: '#fcf9f2',
            padding: '0.5rem 1.35rem',
            borderRadius: '50px',
            marginBottom: '1.75rem',
            fontSize: '0.9rem',
            letterSpacing: '0.15em'
          }}>
            <Calendar size={15} color="#d42b58" />
            <span>{birthdayConfig.birthdayDate}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-glow mb-sm" style={{ fontSize: 'clamp(2.75rem, 7.5vw, 5rem)', color: '#fcf9f2' }}>
            {birthdayConfig.heroHeadline} <span style={{ color: '#d42b58', fontStyle: 'italic', display: 'inline-block' }}>{birthdayConfig.name} ❤️</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif mb-md" style={{ fontSize: 'clamp(1.35rem, 3.5vw, 2.1rem)', color: '#e4dec3', fontStyle: 'italic' }}>
            "{birthdayConfig.heroSubtitle}"
          </p>

          <p style={{ maxWidth: '640px', margin: '0 auto 2.5rem auto', color: '#b8b09d', fontSize: '1.05rem', lineHeight: 1.8 }}>
            {birthdayConfig.heroDescription}
          </p>
        </motion.div>

        {/* 6 Navigation Cards */}
        <NavigationGrid />
      </div>
    </section>
  );
};

export default MainLandingSection;
