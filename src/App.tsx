import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { RecentWork } from './components/RecentWork';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Register GSAP plugins globally once
gsap.registerPlugin(ScrollTrigger);

// Prevent layout thrashing on mobile when address bar hides/shows during scroll
ScrollTrigger.config({
  ignoreMobileResize: true,
});

export function App() {
  useEffect(() => {
    // Refresh ScrollTrigger cleanly once after initial layout/fonts finish loading
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-slate-200 selection:bg-sky-500/20 selection:text-sky-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <RecentWork />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
