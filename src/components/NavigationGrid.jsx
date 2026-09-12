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
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px',
                background: '#FFFFFF',
                border: '1px solid rgba(232, 160, 184, 0.3)',
                boxShadow: '0 6px 22px rgba(184, 107, 130, 0.07)'
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
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
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

                {/* Title & Subtitle */}
                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#3D3035', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-small" style={{ color: '#7A6870', lineHeight: 1.6 }}>
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Row: Action Prompt */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1.5rem',
                color: '#B86B82',
                fontSize: '0.85rem',
                fontWeight: 600
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
