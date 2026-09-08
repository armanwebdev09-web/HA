import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ photos = [], currentIndex = 0, isOpen = false, onClose, onNavigate }) => {
  const [touchStart, setTouchStart] = useState(null);

  // Keyboard navigation & Esc key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || {};

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold > 40px
    if (diff > 40) {
      // Swiped Left -> Next Photo
      onNavigate((currentIndex + 1) % photos.length);
    } else if (diff < -40) {
      // Swiped Right -> Previous Photo
      onNavigate((currentIndex - 1 + photos.length) % photos.length);
    }
    setTouchStart(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(6, 4, 10, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            userSelect: 'none',
            boxSizing: 'border-box'
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="btn-icon"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '44px',
              height: '44px',
              zIndex: 10002
            }}
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Index Counter */}
          <div style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            color: '#b8b09d',
            fontSize: '0.85rem',
            letterSpacing: '0.1em'
          }}>
            {currentIndex + 1} / {photos.length}
          </div>

          {/* Navigation Previous Button */}
          {photos.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
              className="btn-icon"
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                zIndex: 10002
              }}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Active Image Container */}
          <div style={{
            position: 'relative',
            maxWidth: '92vw',
            maxHeight: '78vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto.src || currentIndex}
                src={currentPhoto.src}
                alt={currentPhoto.caption || 'Memory Photo'}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </AnimatePresence>

            {/* Photo Caption & Date */}
            {(currentPhoto.caption || currentPhoto.date) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  color: '#fcf9f2',
                  maxWidth: '90vw'
                }}
              >
                {currentPhoto.caption && (
                  <p className="font-serif" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                    "{currentPhoto.caption}"
                  </p>
                )}
                {currentPhoto.date && (
                  <span style={{ fontSize: '0.8rem', color: '#b8b09d', letterSpacing: '0.08em' }}>
                    {currentPhoto.date}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          {/* Navigation Next Button */}
          {photos.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % photos.length)}
              className="btn-icon"
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                zIndex: 10002
              }}
              aria-label="Next Photo"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
