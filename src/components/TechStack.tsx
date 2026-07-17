import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TECH_STACK } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Staggered reveal of the cards grid
    const items = gsap.utils.toArray('.stack-item');
    gsap.from(items, {
      opacity: 0,
      scale: 0.97,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 92%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      clearProps: 'all'
    });

    // 2. Continuous slow marquee animation (paused when off-screen to save mobile CPU/GPU)
    if (marqueeRef.current) {
      const totalWidth = marqueeRef.current.scrollWidth / 2;
      const tween = gsap.to(marqueeRef.current, {
        x: -totalWidth,
        duration: 35,
        repeat: -1,
        ease: 'none',
        force3D: true,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 100%',
        end: 'bottom 0%',
        onEnter: () => tween.play(),
        onLeave: () => tween.pause(),
        onEnterBack: () => tween.play(),
        onLeaveBack: () => tween.pause(),
      });
    }
  }, { scope: sectionRef });

  // Categorize tech stack for clean structured presentation
  const categories = [
    { title: "Linguagens & Front-end", filter: ["React", "JavaScript", "TypeScript"] },
    { title: "Back-end & APIs RESTful", filter: ["Node.js", "PHP", "WordPress"] },
    { title: "Bancos de Dados SQL & NoSQL", filter: ["PostgreSQL", "MySQL", "MongoDB"] },
    { title: "DevOps, Nuvem & Versionamento", filter: ["Docker", "Git", "Bitbucket", "Cloudflare"] }
  ];

  return (
    <section 
      id="stack" 
      ref={sectionRef}
      className="py-28 bg-[#090b0f] border-b border-[#161a24] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 mb-20">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold block mb-2">
            04 // ARSENAL TECNOLÓGICO & TOOLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Tech Stack & <br className="hidden sm:inline" />
            <span className="text-gradient">Ambiente de Desenvolvimento</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Seleção criteriosa de tecnologias consolidadas para garantir alta estabilidade, baixa latência e facilidade de manutenção em longo prazo.
          </p>
        </div>

        {/* Structured Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded bg-[#10131c] border border-[#1e2536] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold mb-5 border-b border-[#1e2536] pb-3">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TECH_STACK.filter(t => cat.filter.includes(t.name)).map((tech, tIdx) => {
                    const IconComponent = tech.icon;
                    return (
                      <div 
                        key={tIdx}
                        className="stack-item flex items-center gap-3 p-3 rounded bg-[#151926] border border-[#232b3e] hover:border-sky-500/40 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded bg-[#1b2132] text-slate-300 group-hover:text-sky-400 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-mono text-xs font-semibold text-slate-200 block truncate group-hover:text-white">
                            {tech.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-sans block">
                            {tech.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Slow Marquee Banner representing fluid ecosystem */}
      <div className="w-full border-y border-[#161a24] bg-[#0c0f17] py-6 overflow-hidden relative select-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#090b0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#090b0f] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max transform-gpu will-change-transform" ref={marqueeRef}>
          {/* Double array for seamless loop */}
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-2.5 px-6 border-r border-[#1e2536]/80 text-slate-400 hover:text-sky-400 transition-colors shrink-0 font-mono text-xs"
              >
                <IconComp className="w-4 h-4 text-sky-400/80" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-[10px] text-slate-600">[{tech.category}]</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
