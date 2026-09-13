import React from 'react';

const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds) || !isFinite(timeInSeconds) || timeInSeconds <= 0) return '0:00';
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const ProgressBar = ({ currentTime = 0, duration = 0, onSeek }) => {
  const safeCurrentTime = isNaN(currentTime) || !isFinite(currentTime) || currentTime < 0 ? 0 : currentTime;
  const safeDuration = isNaN(duration) || !isFinite(duration) || duration <= 0 ? 0 : duration;
  
  const progressPercent = safeDuration > 0 ? Math.min(100, Math.max(0, (safeCurrentTime / safeDuration) * 100)) : 0;

  const handleSeekChange = (e) => {
    const newTime = parseFloat(e.target.value);
    if (onSeek && !isNaN(newTime)) onSeek(newTime);
  };

  return (
    <div className="progress-bar-container" style={{ width: '100%' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
        <input
          type="range"
          min={0}
          max={safeDuration > 0 ? safeDuration : 1}
          step={0.1}
          value={safeDuration > 0 ? Math.min(safeCurrentTime, safeDuration) : 0}
          onChange={handleSeekChange}
          onInput={handleSeekChange}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '4px',
            appearance: 'none',
            WebkitAppearance: 'none',
            background: `linear-gradient(to right, #78C5E8 ${progressPercent}%, #DDF4FF ${progressPercent}%)`,
            cursor: 'pointer',
            outline: 'none',
            margin: 0
          }}
          aria-label="Audio Seek Bar"
        />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.45rem',
        fontSize: '0.8rem',
        color: '#607782',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 500
      }}>
        <span>{formatTime(safeCurrentTime)}</span>
        <span>{formatTime(safeDuration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
