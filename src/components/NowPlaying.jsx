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
        background: 'radial-gradient(circle, #4A3840 0%, #2A1D23 70%)',
        border: '3px solid rgba(232, 160, 184, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        boxShadow: isPlaying ? '0 8px 30px rgba(232, 160, 184, 0.45)' : '0 4px 15px rgba(61, 48, 53, 0.15)',
        position: 'relative'
      }}>
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { repeat: Infinity, duration: 8, ease: 'linear' } : { duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Disc size={44} color="#E8A0B8" />
        </motion.div>
      </div>

      {/* Title & Artist */}
      <h3 className="font-serif text-glow" style={{ color: '#3D3035', fontSize: '1.6rem', marginBottom: '0.25rem' }}>
        {song.title || 'Untitled Track'}
      </h3>

      {song.artist && (
        <p style={{ color: '#B86B82', fontSize: '0.92rem', marginBottom: '0.75rem', letterSpacing: '0.05em', fontWeight: 500 }}>
          {song.artist}
        </p>
      )}

      {/* Personal Note */}
      {song.personalNote && (
        <div style={{
          marginTop: '0.5rem',
          padding: '0.75rem 1.1rem',
          borderRadius: '12px',
          background: '#FFF0F4',
          border: '1px solid rgba(232, 160, 184, 0.35)',
          maxWidth: '480px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#B86B82', fontSize: '0.78rem', marginBottom: '0.25rem', fontWeight: 600 }}>
            <HeartHandshake size={14} />
            <span>Personal Note</span>
          </div>
          <p className="font-serif" style={{ color: '#3D3035', fontSize: '0.98rem', fontStyle: 'italic', lineHeight: 1.5 }}>
            "{song.personalNote}"
          </p>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
