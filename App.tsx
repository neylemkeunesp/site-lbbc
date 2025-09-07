
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <ResearchAreas />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
