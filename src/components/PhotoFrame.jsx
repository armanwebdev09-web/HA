import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

const PhotoFrame = ({ photoPath, caption }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div style={{
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #D6EDF7',
      background: '#EAF8FF',
      marginTop: '1.25rem',
      position: 'relative'
    }}>
      {photoPath && !hasError ? (
        <img
          src={photoPath}
          alt={caption || 'Memory Photo'}
          loading="lazy"
          decoding="async"
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
          border: '1px dashed #A9DDF5',
          borderRadius: '16px',
          background: '#EAF8FF',
          color: '#607782',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <Camera size={24} color="#397D9F" />
          <span style={{ fontSize: '0.85rem' }}>Photo Slot</span>
          <code style={{ fontSize: '0.75rem', opacity: 0.7 }}>{photoPath}</code>
        </div>
      )}
    </div>
  );
};

export default PhotoFrame;
