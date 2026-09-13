import React from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, HeartHandshake } from 'lucide-react';

const Playlist = ({ songs = [], currentSongIndex = 0, isPlaying = false, onSelectTrack }) => {
  if (!songs || songs.length === 0) return null;

  return (
    <div className="playlist-container" style={{ marginTop: '2rem', width: '100%' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
        color: '#607782',
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: 600
      }}>
        <Music size={15} color="#397D9F" />
        <span>Playlist ({songs.length} {songs.length === 1 ? 'song' : 'songs'})</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {songs.map((song, index) => {
          const isActive = index === currentSongIndex;

          return (
            <motion.div
              key={song.id || index}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              onClick={() => onSelectTrack(index)}
              className="glass-card"
              style={{
                padding: '1rem 1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: isActive ? '1.5px solid #78C5E8' : '1px solid #D6EDF7',
                background: isActive ? '#EAF8FF' : '#FFFFFF',
                boxShadow: isActive ? '0 4px 16px rgba(120, 197, 232, 0.3)' : '0 2px 8px rgba(38, 59, 70, 0.04)'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectTrack(index)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Index / Play Indicator */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isActive ? 'linear-gradient(135deg, #78C5E8, #4FA8D1)' : '#DDF4FF',
                  color: isActive ? '#FFFFFF' : '#397D9F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  {isActive && isPlaying ? (
                    <Pause size={14} />
                  ) : isActive ? (
                    <Play size={14} style={{ marginLeft: '2px' }} />
                  ) : (
                    <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
                  )}
                </div>

                {/* Song Details */}
                <div style={{ textAlign: 'left' }}>
                  <h4 className="font-serif" style={{ color: '#263B46', fontSize: '1.1rem', margin: 0, fontWeight: isActive ? 600 : 500 }}>
                    {song.title || `Track ${index + 1}`}
                  </h4>
                  {song.artist && (
                    <span style={{ fontSize: '0.8rem', color: '#607782' }}>
                      {song.artist}
                    </span>
                  )}
                </div>
              </div>

              {/* Personal Note Indicator */}
              {song.personalNote && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: '#397D9F',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '12px',
                  background: '#DDF4FF',
                  border: '1px solid #D6EDF7',
                  fontWeight: 500
                }}>
                  <HeartHandshake size={12} />
                  <span className="hide-mobile">Note</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
