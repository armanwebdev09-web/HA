import React from 'react';
import { motion } from 'framer-motion';
import { Disc, HeartHandshake } from 'lucide-react';

const NowPlaying = ({ song, isPlaying }) => {
  if (!song) return null;

  return (
    <div className="glass-card" style={{
      padding: '2rem 1.75rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Vinyl Record Spinning Graphic */}
      <div style={{
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #395260 0%, #263B46 70%)',
        border: '3px solid #78C5E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        boxShadow: isPlaying ? '0 8px 30px rgba(120, 197, 232, 0.45)' : '0 4px 15px rgba(38, 59, 70, 0.12)',
        position: 'relative'
      }}>
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { repeat: Infinity, duration: 8, ease: 'linear' } : { duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Disc size={44} color="#A9DDF5" />
        </motion.div>
      </div>

      {/* Animated Sound Wave Bars when playing */}
      {isPlaying && (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '18px', marginBottom: '0.85rem' }}>
          {[0.6, 1, 0.4, 0.8, 0.5].map((scale, i) => (
            <motion.span
              key={i}
              animate={{ height: ['4px', '18px', '6px', '14px', '4px'] }}
              transition={{ repeat: Infinity, duration: 0.8 + i * 0.15, ease: 'easeInOut' }}
              style={{
                width: '3px',
                background: '#78C5E8',
                borderRadius: '3px',
                display: 'inline-block'
              }}
            />
          ))}
        </div>
      )}

      {/* Title & Artist */}
      <h3 className="font-serif text-glow" style={{ color: '#263B46', fontSize: '1.6rem', marginBottom: '0.25rem' }}>
        {song.title || 'Untitled Track'}
      </h3>

      {song.artist && (
        <p style={{ color: '#397D9F', fontSize: '0.92rem', marginBottom: '0.75rem', letterSpacing: '0.05em', fontWeight: 500 }}>
          {song.artist}
        </p>
      )}

      {/* Personal Note */}
      {song.personalNote && (
        <div style={{
          marginTop: '0.5rem',
          padding: '0.75rem 1.1rem',
          borderRadius: '12px',
          background: '#EAF8FF',
          border: '1px solid #D6EDF7',
          maxWidth: '480px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#397D9F', fontSize: '0.78rem', marginBottom: '0.25rem', fontWeight: 600 }}>
            <HeartHandshake size={14} />
            <span>Personal Note</span>
          </div>
          <p className="font-serif" style={{ color: '#263B46', fontSize: '0.98rem', fontStyle: 'italic', lineHeight: 1.5 }}>
            "{song.personalNote}"
          </p>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
