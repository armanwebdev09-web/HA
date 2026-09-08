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
      background: 'rgba(19, 13, 36, 0.9)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(212, 43, 88, 0.3)',
      padding: '0.6rem 1.1rem',
      borderRadius: '50px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 43, 88, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      zIndex: 1000
    }}>
      <Music size={18} color="#d42b58" className={isPlaying ? "animate-star-twinkle" : ""} />
      
      <span style={{ fontSize: '0.85rem', color: '#fcf9f2', fontWeight: 500 }}>
        {currentSong.title} {currentSong.artist ? `• ${currentSong.artist}` : ''}
      </span>

      <button 
        onClick={togglePlay}
        className="btn-icon"
        style={{ width: '34px', height: '34px', background: 'rgba(212, 43, 88, 0.2)', border: '1px solid rgba(212, 43, 88, 0.5)' }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={14} color="#fcf9f2" /> : <Play size={14} color="#fcf9f2" style={{ marginLeft: '2px' }} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
