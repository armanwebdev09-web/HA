import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

const PhotoFrame = ({ photoPath, caption }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div style={{
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      background: 'rgba(255, 255, 255, 0.02)',
      marginTop: '1.25rem',
      position: 'relative'
    }}>
      {photoPath && !hasError ? (
        <img
          src={photoPath}
          alt={caption || 'Memory Photo'}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '380px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      ) : (
        <div style={{
          padding: '2rem 1.5rem',
          textAlign: 'center',
          border: '1px dashed rgba(212, 43, 88, 0.3)',
          borderRadius: '16px',
          background: 'rgba(107, 15, 36, 0.15)',
          color: '#b8b09d',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <Camera size={24} color="#d42b58" />
          <span style={{ fontSize: '0.85rem' }}>Photo Slot</span>
          <code style={{ fontSize: '0.75rem', opacity: 0.7 }}>{photoPath}</code>
        </div>
      )}
    </div>
  );
};

export default PhotoFrame;
