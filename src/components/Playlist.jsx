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
        color: '#b8b09d',
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        <Music size={15} color="#d42b58" />
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
                justify: 'space-between',
                border: isActive ? '1px solid rgba(212, 43, 88, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: isActive ? 'rgba(107, 15, 36, 0.3)' : 'rgba(255, 255, 255, 0.03)',
                boxShadow: isActive ? '0 0 20px rgba(212, 43, 88, 0.2)' : 'none'
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
                  background: isActive ? '#d42b58' : 'rgba(255, 255, 255, 0.06)',
                  color: '#fcf9f2',
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
                  <h4 className="font-serif" style={{ color: isActive ? '#fcf9f2' : '#e4dec3', fontSize: '1.1rem', margin: 0 }}>
                    {song.title || `Track ${index + 1}`}
                  </h4>
                  {song.artist && (
                    <span style={{ fontSize: '0.8rem', color: '#b8b09d' }}>
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
                  color: '#ffb703',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 183, 3, 0.1)'
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
