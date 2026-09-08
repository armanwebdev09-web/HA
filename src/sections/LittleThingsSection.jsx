import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Eye, Smile, Heart, Ruler } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const iconMap = {
  Sparkles,
  Flame,
  Eye,
  Smile,
  Heart,
  Ruler
};

const LittleThingsSection = () => {
  const { title, subtitle, items } = birthdayConfig.littleThingsStory;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="little-things" className="section" style={{ position: 'relative' }}>
      {/* Ambient glow backgrounds */}
      <div className="ambient-glow-pink" style={{ top: '25%', right: '15%' }} />
      <div className="ambient-glow-burgundy" style={{ bottom: '15%', left: '10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '50px',
            background: 'rgba(255, 183, 3, 0.12)',
            border: '1px solid rgba(255, 183, 3, 0.25)',
            color: '#ffb703',
            fontSize: '0.82rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Heart size={14} fill="#ffb703" />
            <span>Why You Are So Special</span>
          </div>

          <h2 className="font-serif text-glow mb-xs" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#fcf9f2' }}>
            {title}
          </h2>

          <p style={{ color: '#b8b09d', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Cards Grid Alternating Emotional & Playful */}
        <motion.div
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Heart;
            const isEmotional = item.type === 'emotional';

            return (
              <motion.div
                key={item.id || index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={isEmotional ? "glass-panel-wine" : "glass-card"}
                style={{
                  textAlign: 'left',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  minHeight: '230px',
                  border: isEmotional 
                    ? '1px solid rgba(212, 43, 88, 0.35)' 
                    : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isEmotional 
                    ? '0 10px 30px rgba(107, 15, 36, 0.3)' 
                    : '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <span style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '20px',
                      background: isEmotional ? 'rgba(212, 43, 88, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      border: isEmotional ? '1px solid rgba(212, 43, 88, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: isEmotional ? '#ff4d6d' : '#ffb703',
                      fontWeight: 600
                    }}>
                      {item.badge}
                    </span>

                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: isEmotional ? 'rgba(212, 43, 88, 0.15)' : 'rgba(255, 183, 3, 0.15)',
                      border: `1px solid ${item.accent || '#d42b58'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={20} color={item.accent || '#d42b58'} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#fcf9f2', marginBottom: '0.6rem' }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: isEmotional ? '#fcf9f2' : '#e4dec3',
                    lineHeight: 1.7,
                    fontSize: '0.98rem'
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Dot */}
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.accent || '#d42b58' }} />
                  <span style={{ fontSize: '0.75rem', color: '#b8b09d', textTransform: 'capitalize' }}>
                    {item.type} moment
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LittleThingsSection;
