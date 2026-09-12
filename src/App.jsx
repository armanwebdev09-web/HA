import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AudioProvider } from './context/AudioContext';
import VirtualHugScreen from './components/VirtualHugScreen';
import OpeningScreen from './components/OpeningScreen';
import Home from './pages/Home';

function App() {
  // Navigation sequence: 'hug' -> 'intro' -> 'main'
  const [screenStage, setScreenStage] = useState('hug');

  return (
    <AudioProvider>
      <div className="app-container" style={{ backgroundColor: '#FFF7F8', minHeight: '100vh', color: '#3D3035' }}>
        <AnimatePresence mode="wait">
          {screenStage === 'hug' && (
            <VirtualHugScreen
              key="virtual-hug"
              onProceed={() => setScreenStage('intro')}
            />
          )}

          {screenStage === 'intro' && (
            <OpeningScreen
              key="intro"
              onEnter={() => setScreenStage('main')}
            />
          )}

          {screenStage === 'main' && (
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
