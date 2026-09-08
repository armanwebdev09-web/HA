import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Lock } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import ProtectedMemory from '../components/ProtectedMemory';

const PhotosSection = () => {
  return (
    <section id="photos" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            background: 'rgba(212, 43, 88, 0.12)',
            border: '1px solid rgba(212, 43, 88, 0.25)',
            color: '#d42b58',
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Lock size={14} />
            <span>Passcode Protected</span>
          </div>

          <h2 className="font-serif text-glow mb-md" style={{ color: '#fcf9f2' }}>
            Our Photos 🔐
          </h2>

          <p style={{ color: '#b8b09d', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            This photo album is locked for {birthdayConfig.name}. Enter your passcode to unlock our memories.
          </p>

          {/* Passcode Protected Photo Gallery */}
          <ProtectedMemory
            correctPasscode="1496"
            title="Some memories are just for you."
            subtitle="Enter the passcode to view our photos."
            photosKey={null} // null renders all configured photo categories once unlocked
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PhotosSection;
