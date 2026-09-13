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
      <div className="ambient-glow-light-blue" style={{ top: '25%', right: '15%' }} />
      <div className="ambient-glow-blue" style={{ bottom: '15%', left: '10%' }} />

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
            background: '#EAF8FF',
            border: '1px solid #D6EDF7',
            color: '#397D9F',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Heart size={14} fill="#397D9F" />
            <span>Why You Are So Special</span>
          </div>

          <h2 className="font-serif text-glow mb-xs" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#263B46' }}>
            {title}
          </h2>

          <p style={{ color: '#607782', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
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
                whileHover={{
                  y: isEmotional ? -8 : -10,
                  transition: isEmotional ? { duration: 0.3 } : { type: 'spring', stiffness: 350, damping: 14 }
                }}
                className={isEmotional ? "glass-panel-romantic" : "glass-card"}
                style={{
                  textAlign: 'left',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '230px',
                  background: isEmotional ? 'linear-gradient(135deg, #FFFFFF 0%, #EAF8FF 100%)' : '#FFFFFF',
                  border: '1px solid #D6EDF7',
                  boxShadow: '0 8px 24px rgba(79, 168, 209, 0.08)'
                }}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <span style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '20px',
                      background: '#EAF8FF',
                      border: '1px solid #D6EDF7',
                      color: '#397D9F',
                      fontWeight: 600
                    }}>
                      {item.badge}
                    </span>

                    <div 
                      className={!isEmotional ? "animate-bounce-gentle" : ""}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: '#EAF8FF',
                        border: '1px solid #D6EDF7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={20} color="#397D9F" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#263B46', marginBottom: '0.6rem', fontWeight: 600 }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: '#607782',
                    lineHeight: 1.7,
                    fontSize: '0.98rem'
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Dot */}
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#78C5E8' }} />
                  <span style={{ fontSize: '0.75rem', color: '#607782', textTransform: 'capitalize' }}>
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
