import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Clock } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const MemoriesSection = () => {
  return (
    <section id="memories" className="section" style={{ position: 'relative' }}>
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
            background: 'rgba(255, 183, 3, 0.12)',
            border: '1px solid rgba(255, 183, 3, 0.25)',
            color: '#ffb703',
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Bookmark size={14} />
            <span>Chapter 02</span>
          </div>

          <h2 className="font-serif text-glow mb-md" style={{ color: '#fcf9f2' }}>
            Our Memories
          </h2>

          <p style={{ color: '#b8b09d', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            A timeline of special moments, inside jokes, and unforgettable days together.
          </p>

          <div className="grid-2" style={{ textAlign: 'left' }}>
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb703', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <Clock size={15} />
                <span>Memory Highlight #1</span>
              </div>
              <h3 className="font-serif" style={{ color: '#fcf9f2', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                The Late Night Conversations
              </h3>
              <p className="text-small" style={{ color: '#e4dec3' }}>
                Talking for hours until the stars faded away, sharing dreams and building our world together.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb703', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <Clock size={15} />
                <span>Memory Highlight #2</span>
              </div>
              <h3 className="font-serif" style={{ color: '#fcf9f2', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                Unforgettable Smiled Moments
              </h3>
              <p className="text-small" style={{ color: '#e4dec3' }}>
                Every single smile and laugh we shared that made time stand completely still.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoriesSection;
