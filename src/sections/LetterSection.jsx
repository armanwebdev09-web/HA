import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import BackgroundStars from '../components/BackgroundStars';

const LetterSection = () => {
  return (
    <section id="letter" className="section" style={{ position: 'relative' }}>
      <BackgroundStars count={14} />
      <div className="container container-narrow" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
            background: '#EAF8FF',
            border: '1px solid #D6EDF7',
            color: '#397D9F',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Heart size={14} fill="#78C5E8" color="#78C5E8" />
            <span>A Letter From Me 💌</span>
          </div>

          <h2 className="font-serif text-glow mb-md" style={{ color: '#263B46' }}>
            To My Dearest {birthdayConfig.name}
          </h2>

          <div className="glass-panel-romantic" style={{
            textAlign: 'left',
            padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
            position: 'relative',
            background: '#FFFFFF',
            border: '1px solid #D6EDF7',
            boxShadow: '0 12px 36px rgba(79, 168, 209, 0.10)'
          }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <Sparkles size={22} color="#78C5E8" />
            </div>

            <h3 className="font-serif" style={{ color: '#263B46', fontSize: '1.85rem', marginBottom: '1.5rem', fontWeight: 600 }}>
              Happy Birthday, {birthdayConfig.nickname || birthdayConfig.name}!
            </h3>

            <div style={{ color: '#3D4F57', lineHeight: 1.95, fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #D6EDF7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-serif" style={{ fontSize: '1.35rem', color: '#397D9F', fontStyle: 'italic', fontWeight: 600 }}>
                Forever Yours 🩵
              </span>
              <span style={{ fontSize: '0.85rem', color: '#607782' }}>
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
