import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="section" style={{ textAlign: 'center', minHeight: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="container container-narrow"
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(212, 43, 88, 0.12)',
          border: '1px solid rgba(212, 43, 88, 0.3)',
          color: '#fcf9f2',
          padding: '0.5rem 1.25rem',
          borderRadius: '50px',
          marginBottom: '1.5rem',
          fontSize: '0.88rem',
          letterSpacing: '0.05em'
        }}>
          <Calendar size={15} color="#d42b58" />
          <span>14 September 2026</span>
        </div>

        <h1 className="font-serif text-glow mb-md" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', color: '#fcf9f2' }}>
          Happy Birthday, <span style={{ color: '#d42b58', fontStyle: 'italic' }}>My Love</span>
        </h1>

        <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1.15rem', color: '#e4dec3', lineHeight: 1.8 }}>
          Welcome to your private digital world. A place crafted with love, memories, and moments shared between us.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
