import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PERSONAL_INFO } from '../data/content';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.footer-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
      clearProps: 'all'
    });
  }, { scope: footerRef });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-[#050608] border-t border-[#141822] py-12 text-slate-400 font-mono text-xs"
    >
      <div className="footer-content max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#10131c] border border-[#1e2536] flex items-center justify-center text-sky-400 overflow-hidden p-1">
            <img
              src="/favicon.svg"
              alt="Dev Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-semibold text-slate-200 uppercase tracking-wider block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-500 font-sans">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-center sm:text-left text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Matheus Oliveira Ferraz. Todos os direitos reservados.</p>
          <p className="mt-0.5 text-slate-600">Arquitetado com React, Tailwind CSS e GSAP.</p>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded bg-[#10131c] hover:bg-[#161a26] border border-[#1e2536] hover:border-sky-500/40 text-slate-300 hover:text-white transition-all duration-300 group shadow-sm"
          aria-label="Voltar ao topo"
        >
          <span>Topo</span>
          <ArrowUp className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
