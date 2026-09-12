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
            background: '#FFF0F4',
            border: '1px solid rgba(232, 160, 184, 0.4)',
            color: '#B86B82',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Bookmark size={14} />
            <span>Chapter 02</span>
          </div>

          <h2 className="font-serif text-glow mb-md" style={{ color: '#3D3035' }}>
            Our Memories
          </h2>

          <p style={{ color: '#7A6870', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            A timeline of special moments, inside jokes, and unforgettable days together.
          </p>

          <div className="grid-2" style={{ textAlign: 'left' }}>
            <div className="glass-card" style={{ background: '#FFFFFF', border: '1px solid rgba(232, 160, 184, 0.3)', boxShadow: '0 6px 20px rgba(184, 107, 130, 0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B86B82', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: 600 }}>
                <Clock size={15} />
                <span>Memory Highlight #1</span>
              </div>
              <h3 className="font-serif" style={{ color: '#3D3035', fontSize: '1.4rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                The Late Night Conversations
              </h3>
              <p className="text-small" style={{ color: '#7A6870' }}>
                Talking for hours until the stars faded away, sharing dreams and building our world together.
              </p>
            </div>

            <div className="glass-card" style={{ background: '#FFFFFF', border: '1px solid rgba(232, 160, 184, 0.3)', boxShadow: '0 6px 20px rgba(184, 107, 130, 0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B86B82', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: 600 }}>
                <Clock size={15} />
                <span>Memory Highlight #2</span>
              </div>
              <h3 className="font-serif" style={{ color: '#3D3035', fontSize: '1.4rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                Unforgettable Smiled Moments
              </h3>
              <p className="text-small" style={{ color: '#7A6870' }}>
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
