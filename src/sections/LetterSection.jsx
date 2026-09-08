import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const LetterSection = () => {
  return (
    <section id="letter" className="section" style={{ position: 'relative' }}>
      <div className="container container-narrow" style={{ textAlign: 'center' }}>
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
            <Heart size={14} fill="#d42b58" />
            <span>A Letter From Me 💌</span>
          </div>

          <h2 className="font-serif text-glow mb-md" style={{ color: '#fcf9f2' }}>
            To My Dearest {birthdayConfig.name}
          </h2>

          <div className="glass-panel-wine" style={{ textAlign: 'left', padding: '3rem 2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <Sparkles size={22} color="#ffb703" />
            </div>

            <h3 className="font-serif" style={{ color: '#fcf9f2', fontSize: '1.85rem', marginBottom: '1.5rem' }}>
              Happy Birthday, {birthdayConfig.nickname || birthdayConfig.name}!
            </h3>

            <div style={{ color: '#e4dec3', lineHeight: 1.9, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                On this special day, {birthdayConfig.displayDateFormatted}, I want to remind you just how deeply loved and appreciated you are.
              </p>
              <p>
                Having you in my life is the greatest gift. Your smile brightens up my darkest days, and your laughter is my favorite sound in the world.
              </p>
              <p>
                I created this private space so you can always come back here and feel how much you mean to me. May this birthday bring you as much joy as you bring into my life every single day.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-serif" style={{ fontSize: '1.25rem', color: '#fcf9f2', fontStyle: 'italic' }}>
                Forever Yours ❤️
              </span>
              <span style={{ fontSize: '0.85rem', color: '#b8b09d' }}>
                {birthdayConfig.birthdayDate}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
