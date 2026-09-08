import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

const BeginningSection = () => {
  const { title, subtitle, chapters } = birthdayConfig.beginningStory;

  return (
    <section id="beginning" className="section" style={{ position: 'relative' }}>
      {/* Ambient background glow */}
      <div className="ambient-glow-burgundy" style={{ top: '30%', left: '10%' }} />
      <div className="ambient-glow-pink" style={{ bottom: '20%', right: '10%' }} />

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
            background: 'rgba(212, 43, 88, 0.12)',
            border: '1px solid rgba(212, 43, 88, 0.25)',
            color: '#d42b58',
            fontSize: '0.82rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Sparkles size={14} />
            <span>Our Journey</span>
          </div>

          <h2 className="font-serif text-glow mb-sm" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fcf9f2' }}>
            {title}
          </h2>
          <p style={{ color: '#b8b09d', fontSize: '1.02rem' }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Timeline Container (Responsive padding & node offsets) */}
        <div style={{
          position: 'relative',
          paddingLeft: 'clamp(1rem, 4vw, 1.75rem)',
          borderLeft: '2px solid rgba(212, 43, 88, 0.25)',
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
                  background: isProminent ? '#d42b58' : '#0a0712',
                  border: isProminent ? '3px solid #fcf9f2' : '2px solid #d42b58',
                  boxShadow: isProminent ? '0 0 12px rgba(212, 43, 88, 0.8)' : 'none',
                  zIndex: 2
                }} />

                {/* Chapter Card */}
                <div 
                  className={isProminent ? "glass-panel-wine" : "glass-card"}
                  style={{
                    padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                    position: 'relative'
                  }}
                >
                  {/* Chapter Tag Header */}
                  <div style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isProminent ? '#ffb703' : '#d42b58',
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
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#fcf9f2',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                      }}>
                        <Calendar size={12} color="#d42b58" />
                        <span>{chapter.dateLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif" style={{
                    fontSize: isProminent ? 'clamp(1.5rem, 4vw, 1.85rem)' : 'clamp(1.25rem, 3.5vw, 1.5rem)',
                    color: '#fcf9f2',
                    marginBottom: chapter.highlightText ? '0.25rem' : '0.75rem'
                  }}>
                    {chapter.title}
                  </h3>

                  {/* Prominent Highlight Subtitle */}
                  {chapter.highlightText && (
                    <div style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                      color: '#d42b58',
                      fontStyle: 'italic',
                      marginBottom: '0.85rem',
                      fontWeight: 600
                    }}>
                      "{chapter.highlightText}"
                    </div>
                  )}

                  {/* Chapter Content Story Lines */}
                  <div style={{
                    color: isProminent ? '#fcf9f2' : '#e4dec3',
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
