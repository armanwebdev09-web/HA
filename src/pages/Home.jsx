import React from 'react';
import Navbar from '../components/Navbar';
import AudioPlayer from '../components/AudioPlayer';
import SectionDivider from '../components/SectionDivider';
import MainLandingSection from '../sections/MainLandingSection';
import BeginningSection from '../sections/BeginningSection';
import LittleThingsSection from '../sections/LittleThingsSection';
import RealRelationshipSection from '../sections/RealRelationshipSection';
import FutureDreamSection from '../sections/FutureDreamSection';
import MemoriesSection from '../sections/MemoriesSection';
import PhotosSection from '../sections/PhotosSection';
import SongsSection from '../sections/SongsSection';
import LetterSection from '../sections/LetterSection';
import FinalClosingSection from '../sections/FinalClosingSection';

const Home = () => {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <MainLandingSection />
        <SectionDivider accent="pink" />

        <BeginningSection />
        <SectionDivider accent="gold" />

        <LittleThingsSection />
        <SectionDivider accent="pink" />

        <RealRelationshipSection />
        <SectionDivider accent="gold" />

        <FutureDreamSection />
        <SectionDivider accent="pink" />

        <MemoriesSection />
        <SectionDivider accent="gold" />

        <PhotosSection />
        <SectionDivider accent="pink" />

        <SongsSection />
        <SectionDivider accent="gold" />

        <LetterSection />
        <SectionDivider accent="pink" />

        <FinalClosingSection />
      </main>
      <AudioPlayer />
    </div>
  );
};

export default Home;
