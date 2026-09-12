import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

const PhotoFrame = ({ photoPath, caption }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div style={{
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(232, 160, 184, 0.3)',
      background: '#FFF0F4',
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
          border: '1px dashed rgba(232, 160, 184, 0.45)',
          borderRadius: '16px',
          background: '#FFF0F4',
          color: '#7A6870',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <Camera size={24} color="#B86B82" />
          <span style={{ fontSize: '0.85rem' }}>Photo Slot</span>
          <code style={{ fontSize: '0.75rem', opacity: 0.7 }}>{photoPath}</code>
        </div>
      )}
    </div>
  );
};

export default PhotoFrame;
