import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import NowPlaying from './NowPlaying';
import ProgressBar from './ProgressBar';
import Playlist from './Playlist';

const MusicPlayer = () => {
  const {
    songs,
    currentSong,
    currentSongIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    handleSeek,
    handleVolumeChange,
    toggleMute,
    nextTrack,
    prevTrack,
    selectTrack
  } = useAudio();

  if (!songs || songs.length === 0) {
    return (
      <div className="glass-card" style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '3rem 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#FFF0F4',
          border: '1px dashed rgba(232, 160, 184, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Music size={30} color="#B86B82" />
        </div>

        <h3 className="font-serif" style={{ color: '#3D3035', fontSize: '1.6rem' }}>
          Music Room Ready
        </h3>

        <p style={{ color: '#7A6870', lineHeight: 1.7, fontSize: '0.98rem' }}>
          Place your MP3 files inside <code>public/music/</code> and list them in <code>src/config/musicConfig.js</code> to listen to your personal soundtrack here!
        </p>
      </div>
    );
  }

  return (
    <div className="music-player-wrapper" style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>
      {/* Currently Playing Card */}
      <NowPlaying song={currentSong} isPlaying={isPlaying} />

      {/* Player Controls Container */}
      <div className="glass-card" style={{ marginTop: '1.25rem', padding: '1.5rem 1.75rem' }}>
        {/* Seek Progress Bar */}
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />

        {/* Playback & Volume Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1.25rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Main Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0 auto' }}>
            <button
              onClick={prevTrack}
              className="btn-icon"
              style={{ width: '42px', height: '42px' }}
              aria-label="Previous Song"
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={togglePlay}
              className="btn-primary"
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label={isPlaying ? "Pause Song" : "Play Song"}
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '3px' }} />}
            </button>

            <button
              onClick={nextTrack}
              className="btn-icon"
              style={{ width: '42px', height: '42px' }}
              aria-label="Next Song"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Volume Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
            <button
              onClick={toggleMute}
              style={{ background: 'none', border: 'none', color: '#7A6870', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} color="#B86B82" /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              style={{
                width: '80px',
                height: '4px',
                appearance: 'none',
                WebkitAppearance: 'none',
                background: `linear-gradient(to right, #E8A0B8 ${(isMuted ? 0 : volume) * 100}%, rgba(232, 160, 184, 0.25) ${(isMuted ? 0 : volume) * 100}%)`,
                borderRadius: '2px',
                cursor: 'pointer',
                outline: 'none'
              }}
              aria-label="Volume Control Slider"
            />
          </div>
        </div>
      </div>

      {/* Playlist Tracks */}
      <Playlist
        songs={songs}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        onSelectTrack={selectTrack}
      />
    </div>
  );
};

export default MusicPlayer;
