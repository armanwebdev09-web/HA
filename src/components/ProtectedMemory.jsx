import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Key, AlertCircle, Sparkles } from 'lucide-react';
import PhotoGallery from './PhotoGallery';
import BackgroundStars from './BackgroundStars';

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
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  // Modular unlock validator (ready for async API call if backend auth is added in future)
  const validatePasscode = async (enteredCode) => {
    return enteredCode === correctPasscode;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const isValid = await validatePasscode(passcode.trim());

    if (isValid) {
      setIsUnlocking(true);
      setTimeout(() => {
        setIsUnlocked(true);
        setIsUnlocking(false);
        if (onUnlockSuccess) onUnlockSuccess();
      }, 1300);
    } else {
      setError('Incorrect passcode. Please try again.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="protected-memory-wrapper" style={{ width: '100%', position: 'relative' }}>
      <AnimatePresence mode="wait">
        {isUnlocking ? (
          /* Unlocking Animation State: 🔒 -> 🔓 with soft blue glow & tiny particles */
          <motion.div
            key="unlocking-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: '520px',
              margin: '0 auto',
              padding: '3.5rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              background: '#EAF8FF',
              border: '1px solid #A9DDF5',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(120, 197, 232, 0.35)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <BackgroundStars count={14} />

            <motion.div
              initial={{ scale: 0.8, rotate: -15 }}
              animate={{ scale: [0.9, 1.2, 1.1], rotate: [0, -10, 0] }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '2px solid #78C5E8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(120, 197, 232, 0.6)'
              }}
            >
              <Unlock size={34} color="#4FA8D1" />
            </motion.div>

            <h3 className="font-serif" style={{ color: '#263B46', fontSize: '1.8rem', fontWeight: 600 }}>
              Unlocking Our Memories... 🩵
            </h3>
          </motion.div>
        ) : !isUnlocked ? (
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
            className="glass-card"
            style={{
              maxWidth: '580px',
              margin: '0 auto',
              padding: '3rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              background: '#EAF8FF',
              border: '1px solid #A9DDF5',
              borderRadius: '20px',
              boxShadow: '0 10px 32px rgba(79, 168, 209, 0.12)'
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
                background: '#FFFFFF',
                border: '1px solid #A9DDF5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(79, 168, 209, 0.14)'
              }}
            >
              <Lock size={28} color="#4FA8D1" />
            </motion.div>

            {/* Headers */}
            <div>
              <h3 className="font-serif text-glow" style={{ color: '#263B46', fontSize: '1.85rem', marginBottom: '0.4rem', fontWeight: 600 }}>
                "{title}"
              </h3>
              <p style={{ color: '#607782', fontSize: '1.05rem', fontStyle: 'italic' }} className="font-serif">
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
                      background: '#FFFFFF',
                      border: error ? '1px solid #4FA8D1' : '1px solid #A9DDF5',
                      color: '#263B46',
                      fontSize: '1.1rem',
                      letterSpacing: '0.25em',
                      textAlign: 'center',
                      outline: 'none',
                      boxShadow: 'inset 0 2px 5px rgba(79, 168, 209, 0.05)',
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
                      color: '#397D9F',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.5rem',
                    marginTop: '0.25rem',
                    background: '#78C5E8',
                    color: '#FFFFFF'
                  }}
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
              color: '#397D9F'
            }}>
              <Unlock size={22} color="#4FA8D1" />
              <span className="font-serif" style={{ fontSize: '1.6rem', color: '#263B46', fontWeight: 600 }}>
                Private Gallery Unlocked 🩵
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
