import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import { musicConfig } from '../config/musicConfig';
import MusicPlayer from '../components/MusicPlayer';

const SongsSection = () => {
  return (
    <section id="songs" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Chapter Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            background: 'rgba(230, 57, 70, 0.12)',
            border: '1px solid rgba(230, 57, 70, 0.25)',
            color: '#e63946',
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Music size={14} />
            <span>Chapter 04</span>
          </div>

          {/* Section Headline */}
          <h2 className="font-serif text-glow mb-xs" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#fcf9f2' }}>
            {musicConfig.headline || "Songs That Remind Me Of You"}
          </h2>

          <p style={{ color: '#b8b09d', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            {musicConfig.description}
          </p>

          {/* Full Custom Audio Player & Playlist */}
          <MusicPlayer />
        </motion.div>
      </div>
    </section>
  );
};

export default SongsSection;
