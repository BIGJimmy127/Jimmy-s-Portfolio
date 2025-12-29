import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-apple-blue selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;