import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SOLUTIONS_DATA } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Solutions: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Staggered reveal of solution cards when entering viewport
    const cards = gsap.utils.toArray('.solution-card');
    
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.16,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      clearProps: 'all'
    });
  }, { scope: containerRef });

  return (
    <section 
      id="solucoes" 
      ref={containerRef}
      className="py-28 bg-[#070709] border-b border-[#161a24] relative overflow-hidden"
    >
      {/* Subtle Background Glow (Hardware accelerated) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-sky-500/5 rounded-full blur-[160px] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold block mb-2">
            02 // COMPETÊNCIAS & O QUE EU FAÇO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
            Competências Principais & <br className="hidden sm:inline" />
            <span className="text-gradient">Especialidades Técnicas</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl font-light leading-relaxed">
            Atuação técnica sólida de ponta a ponta, combinando o ecossistema moderno JavaScript a arquiteturas consolidadas em PHP, bancos de dados relacionais e governança DevOps.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SOLUTIONS_DATA.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={solution.id}
                className={`solution-card group relative p-7 sm:p-8 rounded bg-[#0f121a] border border-[#1d2334] hover:border-sky-500/50 hover:bg-[#121622] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(56,189,248,0.12)] flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Top Header Card */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded bg-[#161b28] border border-[#232c40] text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest px-2.5 py-1 rounded bg-[#12151f] border border-[#1c2232]">
                      0{index + 1} // {solution.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 font-sans group-hover:text-sky-300 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-light mb-8">
                    {solution.description}
                  </p>
                </div>

                {/* Highlights Checklist */}
                <div className="pt-6 border-t border-[#1a2030]/80">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Principais Competências Aplicadas:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                    {solution.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle corner glow accent on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
