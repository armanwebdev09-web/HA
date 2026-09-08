import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bookmark, Camera, Music, Lock, Heart, ArrowRight } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

// Map icon string names to actual Lucide components
const iconMap = {
  Sparkles,
  Bookmark,
  Camera,
  Music,
  Lock,
  Heart
};

const NavigationGrid = () => {
  const handleCardClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  const cardVariants = {
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
    <div style={{ position: 'relative', zIndex: 2, marginTop: '3.5rem' }}>
      <motion.div
        className="grid-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {birthdayConfig.navigationItems.map((item) => {
          const IconComponent = iconMap[item.iconName] || Heart;

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => handleCardClick(item.id)}
              className="glass-card"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(item.id)}
              aria-label={`Navigate to ${item.title}`}
            >
              {/* Top Row: Badge & Icon */}
              <div>
                <div style={{
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#e4dec3'
                  }}>
                    {item.badge}
                  </span>
                  
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(212, 43, 88, 0.12)',
                    border: '1px solid rgba(212, 43, 88, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={20} color={item.accentColor || '#d42b58'} />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#fcf9f2', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p className="text-small" style={{ color: '#b8b09d', lineHeight: 1.6 }}>
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Row: Action Prompt */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1.5rem',
                color: '#d42b58',
                fontSize: '0.85rem',
                fontWeight: 500
              }}>
                <span>Explore Section</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NavigationGrid;
