import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';
import { photoConfig } from '../config/photoConfig';
import MemoryPhoto from './MemoryPhoto';
import Lightbox from './Lightbox';

const PhotoGallery = ({ categoryKey }) => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    photos: [],
    currentIndex: 0
  });

  // Determine photo list to display
  let categoriesToDisplay = [];
  if (categoryKey && photoConfig[categoryKey]) {
    categoriesToDisplay = [photoConfig[categoryKey]];
  } else {
    // Show categories that actually have photos
    categoriesToDisplay = Object.values(photoConfig).filter(cat => cat.photos && cat.photos.length > 0);
  }

  const handlePhotoClick = (photosList, index) => {
    setLightboxState({
      isOpen: true,
      photos: photosList,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxState(prev => ({ ...prev, currentIndex: newIndex }));
  };

  const totalPhotosCount = categoriesToDisplay.reduce((sum, cat) => sum + (cat.photos?.length || 0), 0);

  return (
    <div className="photo-gallery-wrapper" style={{ position: 'relative' }}>
      {totalPhotosCount === 0 ? (
        /* Graceful Empty State when user hasn't added photos yet */
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card"
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#FFF0F4',
            border: '1px dashed rgba(232, 160, 184, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Camera size={28} color="#B86B82" />
          </div>

          <h3 className="font-serif" style={{ color: '#3D3035', fontSize: '1.5rem', fontWeight: 600 }}>
            Ready For Your Photos
          </h3>

          <p className="text-small" style={{ color: '#7A6870', lineHeight: 1.7 }}>
            Add your personal images into <code>public/photos/</code> subfolders and list them in <code>src/config/photoConfig.js</code> to display them here!
          </p>
        </motion.div>
      ) : (
        /* Render Photo Categories that contain images */
        categoriesToDisplay.map((category, catIdx) => {
          if (!category.photos || category.photos.length === 0) return null;

          return (
            <div key={catIdx} style={{ marginBottom: catIdx === categoriesToDisplay.length - 1 ? 0 : '3.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={18} color="#E8A0B8" />
                <h3 className="font-serif" style={{ color: '#3D3035', fontSize: '1.6rem', fontWeight: 600 }}>
                  {category.title}
                </h3>
              </div>

              <div className="grid-3">
                {category.photos.map((photo, pIdx) => (
                  <MemoryPhoto
                    key={pIdx}
                    photo={photo}
                    index={pIdx}
                    onClick={() => handlePhotoClick(category.photos, pIdx)}
                  />
                ))}
              </div>
            </div>
          );
        })
      )}

      {/* Lightbox Fullscreen Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        photos={lightboxState.photos}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
};

export default PhotoGallery;
