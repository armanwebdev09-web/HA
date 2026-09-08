import React from 'react';
import { motion } from 'framer-motion';
import { Disc, HeartHandshake } from 'lucide-react';

const NowPlaying = ({ song, isPlaying }) => {
  if (!song) return null;

  return (
    <div className="glass-panel-wine" style={{
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
        background: 'radial-gradient(circle, #2d0b16 0%, #0d0714 70%)',
        border: '3px solid rgba(212, 43, 88, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        boxShadow: isPlaying ? '0 0 30px rgba(212, 43, 88, 0.4)' : '0 4px 15px rgba(0, 0, 0, 0.4)',
        position: 'relative'
      }}>
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { repeat: Infinity, duration: 8, ease: 'linear' } : { duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Disc size={44} color="#d42b58" />
        </motion.div>
      </div>

      {/* Title & Artist */}
      <h3 className="font-serif text-glow" style={{ color: '#fcf9f2', fontSize: '1.6rem', marginBottom: '0.25rem' }}>
        {song.title || 'Untitled Track'}
      </h3>

      {song.artist && (
        <p style={{ color: '#ffb703', fontSize: '0.92rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
          {song.artist}
        </p>
      )}

      {/* Personal Note */}
      {song.personalNote && (
        <div style={{
          marginTop: '0.5rem',
          padding: '0.75rem 1.1rem',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          maxWidth: '480px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#d42b58', fontSize: '0.78rem', marginBottom: '0.25rem' }}>
            <HeartHandshake size={14} />
            <span>Personal Note</span>
          </div>
          <p className="font-serif" style={{ color: '#e4dec3', fontSize: '0.98rem', fontStyle: 'italic', lineHeight: 1.5 }}>
            "{song.personalNote}"
          </p>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
