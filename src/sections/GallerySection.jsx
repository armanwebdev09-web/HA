import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const GallerySection = () => {
  return (
    <section id="gallery" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="font-serif mb-sm" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#fcf9f2' }}>
          Our Special Moments
        </h2>
        <p style={{ color: '#b8b09d', marginBottom: '2.5rem' }}>
          Photos from <code>/public/photos</code> will be showcased in this gallery.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid-3"
        >
          {/* Card placeholder */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', color: '#b8b09d' }}>
            <ImageIcon size={36} color="#d42b58" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontWeight: 500, color: '#fcf9f2' }}>Photo Frame</p>
            <span className="text-small" style={{ marginTop: '0.25rem' }}>Add photos to /public/photos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
