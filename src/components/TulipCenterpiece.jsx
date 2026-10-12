import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * TulipCenterpiece
 * 
 * Visual centerpiece after the arrow animation.
 * Uses exact local video file: /videos/white-tulip.mp4
 * Attributes:
 * - autoplay
 * - muted
 * - playsInline
 * - loop
 * - object-fit: cover
 * 
 * If the file is missing/fails to load, shows the graceful CSS/SVG tulip animation
 * fallback and explains where to place the video without leaving anything blank.
 */
export default function TulipCenterpiece({ compact = false }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt playback if video element exists
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy or media loading fallback
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="tulip-centerpiece-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: compact ? '320px' : '440px',
        margin: '0 auto',
      }}
    >
      {/* Outer Soft Blue Ambient Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-12px',
          background: 'radial-gradient(circle, rgba(169, 221, 245, 0.45) 0%, rgba(221, 244, 255, 0.2) 50%, transparent 75%)',
          filter: 'blur(20px)',
          borderRadius: '36px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Elegant Cinematic Frame */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          aspectRatio: '4 / 5',
          borderRadius: '26px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(169, 221, 245, 0.65)',
          boxShadow: '0 16px 40px rgba(79, 168, 209, 0.16), 0 2px 10px rgba(120, 197, 232, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Local Video Element */}
        {!hasError && (
          <video
            ref={videoRef}
            src="/videos/white-tulip.mp4"
            autoPlay
            muted
            playsInline
            loop
            onLoadedData={() => setIsLoaded(true)}
            onPlaying={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(false);
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }}
          />
        )}

        {/* Graceful Fallback CSS/SVG Tulip Animation */}
        {(!isLoaded || hasError) && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.75rem',
              textAlign: 'center',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F3FAFE 100%)',
            }}
          >
            {/* Animated SVG White Tulip */}
            <svg
              width="180"
              height="220"
              viewBox="0 0 180 220"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <radialGradient id="fallbackTulipAura" cx="50%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#A9DDF5" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#DDF4FF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="fallbackPetalWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="75%" stopColor="#F5FBFE" />
                  <stop offset="100%" stopColor="#DDF4FF" />
                </linearGradient>
              </defs>

              {/* Pulsing Aura */}
              <circle cx="90" cy="85" r="70" fill="url(#fallbackTulipAura)" />

              {/* Stem */}
              <path
                d="M 90 200 Q 94 140 90 95"
                fill="none"
                stroke="#A8D1BD"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Leaves */}
              <path
                d="M 91 160 Q 120 135 116 100 Q 102 125 91 160"
                fill="#BFE1D1"
                opacity="0.9"
              />
              <path
                d="M 89 175 Q 60 145 64 120 Q 76 145 89 175"
                fill="#BFE1D1"
                opacity="0.9"
              />

              {/* Unfolded Tulip Petals */}
              <g transform="translate(90, 85)">
                {/* Back Petal */}
                <path
                  d="M 0 -50 C -22 -44 -26 -12 0 12 C 26 -12 22 -44 0 -50 Z"
                  fill="url(#fallbackPetalWhite)"
                  stroke="#A9DDF5"
                  strokeWidth="1.2"
                />

                {/* Left Petal */}
                <path
                  d="M 0 10 C -26 10 -38 -18 -26 -44 C -12 -36 0 -18 0 10 Z"
                  fill="url(#fallbackPetalWhite)"
                  stroke="#C5E8F8"
                  strokeWidth="1.2"
                />

                {/* Right Petal */}
                <path
                  d="M 0 10 C 26 10 38 -18 26 -44 C 12 -36 0 -18 0 10 Z"
                  fill="url(#fallbackPetalWhite)"
                  stroke="#C5E8F8"
                  strokeWidth="1.2"
                />

                {/* Front Center Petal */}
                <path
                  d="M 0 12 C -16 12 -22 -16 -12 -38 C -4 -42 4 -42 12 -38 C 22 -16 16 12 0 12 Z"
                  fill="#FFFFFF"
                  stroke="#DDF4FF"
                  strokeWidth="1.2"
                />
              </g>
            </svg>

            {/* Graceful explanation where to place the video */}
            {hasError && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '0.75rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid #D6EDF7',
                  color: '#607782',
                  fontSize: '0.74rem',
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  lineHeight: 1.4,
                }}
              >
                <span>🤍 Place your video at </span>
                <code style={{ color: '#263B46', fontWeight: 600 }}>/videos/white-tulip.mp4</code>
              </motion.div>
            )}
          </div>
        )}

        {/* Delicate Glass Highlight Reflection */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 50%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </motion.div>
  );
}
