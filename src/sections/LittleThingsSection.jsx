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
      <div className="ambient-glow-blush" style={{ bottom: '15%', left: '10%' }} />

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
            background: '#FFF0F4',
            border: '1px solid rgba(232, 160, 184, 0.4)',
            color: '#B86B82',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Heart size={14} fill="#B86B82" />
            <span>Why You Are So Special</span>
          </div>

          <h2 className="font-serif text-glow mb-xs" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#3D3035' }}>
            {title}
          </h2>

          <p style={{ color: '#7A6870', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
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
                className={isEmotional ? "glass-panel-romantic" : "glass-card"}
                style={{
                  textAlign: 'left',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '230px',
                  background: isEmotional ? 'linear-gradient(135deg, #FFFFFF 0%, #FFF0F4 100%)' : '#FFFFFF',
                  border: isEmotional 
                    ? '1px solid rgba(232, 160, 184, 0.45)' 
                    : '1px solid rgba(232, 160, 184, 0.28)',
                  boxShadow: '0 8px 24px rgba(184, 107, 130, 0.08)'
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
                      background: '#FFF0F4',
                      border: '1px solid rgba(232, 160, 184, 0.35)',
                      color: '#B86B82',
                      fontWeight: 600
                    }}>
                      {item.badge}
                    </span>

                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#FFF0F4',
                      border: '1px solid rgba(232, 160, 184, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={20} color="#B86B82" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#3D3035', marginBottom: '0.6rem', fontWeight: 600 }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: '#7A6870',
                    lineHeight: 1.7,
                    fontSize: '0.98rem'
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Dot */}
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8A0B8' }} />
                  <span style={{ fontSize: '0.75rem', color: '#9C8A92', textTransform: 'capitalize' }}>
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
