import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AudioProvider } from './context/AudioContext';
import OpeningScreen from './components/OpeningScreen';
import Home from './pages/Home';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <AudioProvider>
      <div className="app-container" style={{ backgroundColor: '#0a0712', minHeight: '100vh', color: '#fcf9f2' }}>
        <AnimatePresence mode="wait">
          {!hasEntered ? (
            <OpeningScreen key="intro" onEnter={() => setHasEntered(true)} />
          ) : (
            <motion.div
              key="main-experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <Home />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AudioProvider>
  );
}

export default App;
