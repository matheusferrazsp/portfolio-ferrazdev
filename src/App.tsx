import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Register GSAP plugins globally once
gsap.registerPlugin(ScrollTrigger);

export function App() {
  useEffect(() => {
    // Refresh ScrollTrigger instances when layout settles or window resizes
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-slate-200 selection:bg-sky-500/20 selection:text-sky-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
