import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemoryPhoto = ({ photo, onClick, index = 0, tilt = 0 }) => {
  const [hasError, setHasError] = useState(false);

  // If image fails to load or no source provided, return null to gracefully hide broken frames
  if (!photo || !photo.src || hasError) {
    return null;
  }

  // Calculate subtle alternating scrapbook tilt if not explicitly provided
  const rotationDegrees = tilt !== 0 ? tilt : (index % 2 === 0 ? -1.8 : 1.8);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ scale: 1.03, rotate: 0, zIndex: 10, transition: { duration: 0.3 } }}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        transform: `rotate(${rotationDegrees}deg)`,
        background: 'linear-gradient(145deg, #1c152c 0%, #110c1e 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '0.9rem 0.9rem 1.25rem 0.9rem',
        borderRadius: '14px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick && onClick()}
      aria-label={photo.caption ? `View photo: ${photo.caption}` : 'View photo'}
    >
      {/* Polaroid Image Wrapper */}
      <div style={{
        width: '100%',
        aspectRatio: '4/3',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: '#0a0712',
        position: 'relative'
      }}>
        <img
          src={photo.src}
          alt={photo.caption || 'Memory Photo'}
          loading="lazy"
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease'
          }}
        />
      </div>

      {/* Polaroid Caption & Date */}
      {(photo.caption || photo.date) && (
        <div style={{
          marginTop: '0.85rem',
          textAlign: 'center',
          width: '100%',
          padding: '0 0.25rem'
        }}>
          {photo.caption && (
            <p className="font-serif" style={{
              color: '#fcf9f2',
              fontSize: '1.05rem',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.3
            }}>
              "{photo.caption}"
            </p>
          )}
          {photo.date && (
            <span style={{
              fontSize: '0.75rem',
              color: '#b8b09d',
              display: 'block',
              marginTop: '0.2rem',
              letterSpacing: '0.05em'
            }}>
              {photo.date}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default MemoryPhoto;
