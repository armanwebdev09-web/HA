import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const BeginningSection = () => {
  const { title, subtitle, chapters } = birthdayConfig.beginningStory;

  return (
    <section id="beginning" className="section" style={{ position: 'relative' }}>
      {/* Ambient background glow */}
      <div className="ambient-glow-blue" style={{ top: '30%', left: '10%' }} />
      <div className="ambient-glow-light-blue" style={{ bottom: '20%', right: '10%' }} />

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
            <Sparkles size={14} />
            <span>Our Journey</span>
          </div>

          <h2 className="font-serif text-glow mb-sm" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#263B46' }}>
            {title}
          </h2>
          <p style={{ color: '#607782', fontSize: '1.02rem' }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Timeline Container (Responsive padding & node offsets) */}
        <div style={{
          position: 'relative',
          paddingLeft: 'clamp(1rem, 4vw, 1.75rem)',
          borderLeft: '2px solid #A9DDF5',
          marginLeft: '0.5rem'
        }}>
          {chapters.map((chapter, index) => {
            const isProminent = chapter.isProminent;

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                style={{
                  position: 'relative',
                  marginBottom: index === chapters.length - 1 ? 0 : '2.5rem'
                }}
              >
                {/* Glowing Node Dot on Timeline Line */}
                <div style={{
                  position: 'absolute',
                  left: 'calc(-1.5rem - 1px)',
                  top: '0.5rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: isProminent ? '#4FA8D1' : '#FFFFFF',
                  border: isProminent ? '3px solid #78C5E8' : '2px solid #78C5E8',
                  boxShadow: isProminent ? '0 0 12px rgba(120, 197, 232, 0.7)' : 'none',
                  zIndex: 2
                }} />

                {/* Chapter Card */}
                <div 
                  className={isProminent ? "glass-panel-romantic" : "glass-card"}
                  style={{
                    padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                    position: 'relative',
                    background: isProminent ? 'linear-gradient(135deg, #FFFFFF 0%, #EAF8FF 100%)' : '#FFFFFF',
                    border: '1px solid #D6EDF7',
                    boxShadow: isProminent ? '0 8px 24px rgba(79, 168, 209, 0.12)' : '0 4px 16px rgba(79, 168, 209, 0.06)'
                  }}
                >
                  {/* Chapter Tag Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#397D9F',
                      fontWeight: 600
                    }}>
                      {chapter.chapterTag}
                    </span>

                    {chapter.dateLabel && (
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '20px',
                        background: '#EAF8FF',
                        border: '1px solid #D6EDF7',
                        color: '#263B46',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                      }}>
                        <Calendar size={12} color="#397D9F" />
                        <span>{chapter.dateLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif" style={{
                    fontSize: isProminent ? 'clamp(1.5rem, 4vw, 1.85rem)' : 'clamp(1.25rem, 3.5vw, 1.5rem)',
                    color: '#263B46',
                    fontWeight: 600,
                    marginBottom: chapter.highlightText ? '0.25rem' : '0.75rem'
                  }}>
                    {chapter.title}
                  </h3>

                  {/* Prominent Highlight Subtitle */}
                  {chapter.highlightText && (
                    <div style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                      color: '#397D9F',
                      fontStyle: 'italic',
                      marginBottom: '0.85rem',
                      fontWeight: 600
                    }}>
                      "{chapter.highlightText}"
                    </div>
                  )}

                  {/* Chapter Content Story Lines */}
                  <div style={{
                    color: '#607782',
                    lineHeight: 1.7,
                    fontSize: '0.98rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    {chapter.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeginningSection;
