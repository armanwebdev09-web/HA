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
      background: 'rgba(255, 247, 248, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(232, 160, 184, 0.45)',
      padding: '0.6rem 1.1rem',
      borderRadius: '50px',
      boxShadow: '0 8px 25px rgba(61, 48, 53, 0.12), 0 0 15px rgba(232, 160, 184, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      zIndex: 1000
    }}>
      <Music size={18} color="#B86B82" className={isPlaying ? "animate-star-twinkle" : ""} />
      
      <span style={{ fontSize: '0.85rem', color: '#3D3035', fontWeight: 600 }}>
        {currentSong.title} {currentSong.artist ? `• ${currentSong.artist}` : ''}
      </span>

      <button 
        onClick={togglePlay}
        className="btn-icon"
        style={{
          width: '34px',
          height: '34px',
          background: 'linear-gradient(135deg, #E8A0B8, #B86B82)',
          border: 'none',
          boxShadow: '0 2px 8px rgba(184, 107, 130, 0.35)'
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={14} color="#FFFFFF" /> : <Play size={14} color="#FFFFFF" style={{ marginLeft: '2px' }} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
