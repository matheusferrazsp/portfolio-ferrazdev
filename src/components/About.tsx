import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ABOUT_DATA } from '../data/content';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      // Reveal text block and cards when section enters viewport on desktop/tablet
      const items = gsap.utils.toArray('.about-reveal');
      gsap.from(items, {
        opacity: 0,
        y: 25,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
        clearProps: 'all'
      });
    });
  }, { scope: sectionRef });

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-28 bg-[#090b0f] border-b border-[#161a24] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="about-reveal mb-12">
          <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold block mb-2">
            01 // SOBRE O PROFISSIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            {ABOUT_DATA.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl font-light">
            {ABOUT_DATA.subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Narrative vs Academic/Engineering Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Block */}
          <div className="lg:col-span-7 space-y-6">
            {ABOUT_DATA.paragraphs.map((para, index) => (
              <p 
                key={index} 
                className="about-reveal text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right Column: Engineering Principles & Core Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="about-reveal mb-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                Pilares da Minha Atuação
              </h3>
            </div>
            {ABOUT_DATA.principles.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="about-reveal p-5 rounded bg-[#11141e]/80 border border-[#1d2333] hover:border-sky-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 text-sky-400 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
