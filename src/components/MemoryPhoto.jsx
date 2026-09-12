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
        background: '#FFFFFF',
        border: '1px solid rgba(232, 160, 184, 0.35)',
        padding: '0.85rem 0.85rem 1.25rem 0.85rem',
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(184, 107, 130, 0.08), 0 2px 6px rgba(61, 48, 53, 0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
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
        borderRadius: '10px',
        backgroundColor: '#FFF0F4',
        position: 'relative'
      }}>
        <img
          src={photo.src}
          alt={photo.caption || 'Memory Photo'}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
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
              color: '#3D3035',
              fontSize: '1.05rem',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.3,
              fontWeight: 500
            }}>
              "{photo.caption}"
            </p>
          )}
          {photo.date && (
            <span style={{
              fontSize: '0.78rem',
              color: '#7A6870',
              display: 'block',
              marginTop: '0.25rem',
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
