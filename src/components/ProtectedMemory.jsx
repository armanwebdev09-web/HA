import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Key, AlertCircle } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

/**
 * ProtectedMemory Component
 * An experience-level frontend lock for private birthday content.
 * 
 * Note: Designed for UI privacy. Built with modular authentication handler
 * so proper backend API authentication can be easily plugged in if needed later.
 */
const ProtectedMemory = ({
  correctPasscode = "1496",
  title = "Some memories are just for you.",
  subtitle = "These are only yours.",
  photosKey = "locked",
  onUnlockSuccess
}) => {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  // Modular unlock validator (ready for async API call if backend auth is added in future)
  const validatePasscode = async (enteredCode) => {
    // Simulated check - replace with async fetch('/api/verify-passcode') if backend added
    return enteredCode === correctPasscode;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const isValid = await validatePasscode(passcode.trim());

    if (isValid) {
      setIsUnlocked(true);
      if (onUnlockSuccess) onUnlockSuccess();
    } else {
      setError('Incorrect passcode. Please try again.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="protected-memory-wrapper" style={{ width: '100%' }}>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="locked-screen"
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: isShaking ? [-10, 10, -8, 8, -4, 4, 0] : 0
            }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
            transition={{ duration: 0.4 }}
            className="glass-panel-wine"
            style={{
              maxWidth: '580px',
              margin: '0 auto',
              padding: '3rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            {/* Animated Lock Icon */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(212, 43, 88, 0.15)',
                border: '1px solid rgba(212, 43, 88, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(212, 43, 88, 0.2)'
              }}
            >
              <Lock size={28} color="#d42b58" />
            </motion.div>

            {/* Headers */}
            <div>
              <h3 className="font-serif text-glow" style={{ color: '#fcf9f2', fontSize: '1.85rem', marginBottom: '0.4rem' }}>
                "{title}"
              </h3>
              <p style={{ color: '#e4dec3', fontSize: '1.05rem', fontStyle: 'italic' }} className="font-serif">
                {subtitle}
              </p>
            </div>

            {/* Passcode Form */}
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '360px', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter passcode..."
                    maxLength={10}
                    autoComplete="off"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      borderRadius: '50px',
                      background: 'rgba(10, 7, 18, 0.7)',
                      border: error ? '1px solid #d42b58' : '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#fcf9f2',
                      fontSize: '1.1rem',
                      letterSpacing: '0.25em',
                      textAlign: 'center',
                      outline: 'none',
                      boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.5)',
                      transition: 'border-color 0.3s'
                    }}
                    aria-label="Passcode Input"
                  />
                </div>

                {/* Error Message Display */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      color: '#d42b58',
                      fontSize: '0.85rem'
                    }}
                  >
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem 1.5rem', marginTop: '0.25rem' }}
                >
                  <Key size={16} />
                  <span>Unlock Memories</span>
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* Unlocked Content View */
          <motion.div
            key="unlocked-content"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Unlocked Header Ribbon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              marginBottom: '2rem',
              color: '#ffb703'
            }}>
              <Unlock size={22} />
              <span className="font-serif" style={{ fontSize: '1.5rem', color: '#fcf9f2' }}>
                Private Gallery Unlocked ❤️
              </span>
            </div>

            {/* Render Photos coming exclusively from public/photos/locked/ */}
            <PhotoGallery categoryKey={photosKey} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProtectedMemory;
