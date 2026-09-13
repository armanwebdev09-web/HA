import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const RealRelationshipSection = () => {
  const { badge, lines, realDetail, closingQuote } = birthdayConfig.relationshipStory;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="relationship" className="section" style={{ position: 'relative' }}>
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-blue" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2rem' }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '50px',
            background: '#EAF8FF',
            border: '1px solid #D6EDF7',
            color: '#397D9F',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            <RefreshCw size={14} />
            <span>{badge || "Honest & Real"}</span>
          </div>
        </motion.div>

        {/* Main Emotional Glass Card */}
        <div className="glass-panel-romantic" style={{
          padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2.5rem)',
          position: 'relative',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #EAF8FF 100%)',
          border: '1px solid #D6EDF7',
          boxShadow: '0 10px 32px rgba(79, 168, 209, 0.08)'
        }}>
          {/* Sequential Animated Lines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}
          >
            {lines.map((line, idx) => (
              <motion.p
                key={idx}
                variants={lineVariants}
                className="font-serif"
                style={{
                  fontSize: idx === lines.length - 1 ? 'clamp(1.75rem, 4vw, 2.5rem)' : 'clamp(1.35rem, 3vw, 1.85rem)',
                  color: idx === lines.length - 1 ? '#263B46' : '#607782',
                  fontWeight: idx === lines.length - 1 ? 600 : 400,
                  fontStyle: idx === lines.length - 1 ? 'normal' : 'italic',
                  letterSpacing: '0.01em'
                }}
              >
                {line}
              </motion.p>
            ))}

            {/* Divider */}
            <motion.div
              variants={lineVariants}
              style={{
                width: '60px',
                height: '1px',
                background: 'linear-gradient(to right, transparent, #78C5E8, transparent)',
                margin: '1.5rem 0'
              }}
            />

            {/* Real Detail Paragraph */}
            <motion.p
              variants={lineVariants}
              style={{
                color: '#607782',
                fontSize: '1.08rem',
                lineHeight: 1.8,
                maxWidth: '560px'
              }}
            >
              "{realDetail}"
            </motion.p>

            {/* Closing Favorite Thing Quote */}
            <motion.div
              variants={lineVariants}
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#397D9F',
                fontSize: '1.15rem',
                fontWeight: 600
              }}
              className="font-serif"
            >
              <Heart size={18} fill="#397D9F" />
              <span>"{closingQuote}"</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealRelationshipSection;
