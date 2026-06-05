import { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-void noise-overlay">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navigation scrollY={scrollY} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
