import React from 'react';
import { Music, Play, Pause } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

const AudioPlayer = () => {
  const { currentSong, isPlaying, togglePlay } = useAudio();

  if (!currentSong) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      background: 'rgba(255, 255, 255, 0.94)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid #D6EDF7',
      padding: '0.6rem 1.1rem',
      borderRadius: '50px',
      boxShadow: '0 8px 25px rgba(79, 168, 209, 0.16), 0 0 15px rgba(120, 197, 232, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      zIndex: 1000
    }}>
      <Music size={18} color="#78C5E8" className={isPlaying ? "animate-star-twinkle" : ""} />
      
      <span style={{ fontSize: '0.85rem', color: '#263B46', fontWeight: 600 }}>
        {currentSong.title} {currentSong.artist ? `• ${currentSong.artist}` : ''}
      </span>

      <button 
        onClick={togglePlay}
        className="btn-icon"
        style={{
          width: '34px',
          height: '34px',
          background: 'linear-gradient(135deg, #78C5E8, #4FA8D1)',
          border: 'none',
          boxShadow: '0 2px 8px rgba(79, 168, 209, 0.35)'
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={14} color="#FFFFFF" /> : <Play size={14} color="#FFFFFF" style={{ marginLeft: '2px' }} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
