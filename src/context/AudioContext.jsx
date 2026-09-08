import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { musicConfig } from '../config/musicConfig';

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const songs = musicConfig.songs || [];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex] || null;

  // Safely encode URI for spaces in audio file paths
  const getAudioSrc = (filePath) => {
    if (!filePath) return '';
    return encodeURI(filePath);
  };

  // Synchronize audio source when track changes
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    const audio = audioRef.current;
    const targetSrc = getAudioSrc(currentSong.file);

    if (audio.src !== window.location.origin + targetSrc && audio.src !== targetSrc) {
      audio.src = targetSrc;
      audio.load();
      setCurrentTime(0);
      setDuration(0);

      if (isPlaying) {
        audio.play().catch(err => console.log('Autoplay prevented:', err));
      }
    }
  }, [currentSongIndex, currentSong]);

  // Audio Event Listeners for precise timing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!isNaN(audio.currentTime) && isFinite(audio.currentTime)) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleDurationChange = () => {
      if (!isNaN(audio.duration) && isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      if (songs.length > 1) {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextIndex);
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleDurationChange);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleDurationChange);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex, songs.length]);

  const togglePlay = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Playback error:', err));
    }
  };

  const handleSeek = (newTime) => {
    if (audioRef.current && !isNaN(newTime) && isFinite(newTime)) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (newVol === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const nextTrack = () => {
    if (songs.length === 0) return;
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    if (songs.length === 0) return;
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const selectTrack = (index) => {
    if (index === currentSongIndex) {
      togglePlay();
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{
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
    }}>
      {/* Single Global Audio Tag */}
      <audio ref={audioRef} preload="auto" />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
