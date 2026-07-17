import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, Terminal, Shield, Cpu, Layers } from "lucide-react";
import { PERSONAL_INFO } from "../data/content";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // GSAP entrance animation right on mount
      const elements = gsap.utils.toArray(".hero-anim");
      gsap.from(elements, {
        opacity: 0,
        y: 25,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.02,
        clearProps: "all",
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        // Subtle floating animation for background glow on desktop only
        gsap.to(".hero-glow", {
          opacity: 0.7,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] pt-36 pb-20 flex flex-col justify-center bg-grid-pattern overflow-hidden border-b border-[#161a24]"
    >
      {/* Background Radial Glow (High performance radial-gradient instead of heavy filter blur for WebKit/iPhone 60fps) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-87.5 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)] rounded-full pointer-events-none hero-glow opacity-50 -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        {/* Status Badge */}
        <div className="hero-anim inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#20293a] text-slate-300 font-mono text-xs mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Name */}
        <h1 className="hero-anim font-mono text-xs md:text-sm tracking-[0.2em] text-sky-400 uppercase font-semibold mb-3">
          {PERSONAL_INFO.name}
        </h1>

        {/* Main Title */}
        <h2 className="hero-anim text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6 font-sans">
          Desenvolvedor <span className="text-gradient">Full Stack</span>
        </h2>

        {/* Description / Engineering Value Proposition */}
        <p className="hero-anim text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10 font-sans font-light">
          {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Buttons & Quick Metrics Bar */}
        <div className="hero-anim flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:-translate-y-0.5"
          >
            <span>Explorar Competências</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#10131d] hover:bg-[#161b2a] border border-[#22283a] hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs sm:text-sm font-medium transition-all duration-300"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Ver Últimos Projetos</span>
          </a>
        </div>

        {/* Subtle Technical Highlights Footer of Hero */}
        <div className="hero-anim pt-8 border-t border-[#181d2c]/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-sky-400/80 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-mono text-xs font-semibold text-slate-200">
                Front & Back-end
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 font-sans">
                React, Node.js e PHP
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Cpu className="w-5 h-5 text-sky-400/80 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-mono text-xs font-semibold text-slate-200">
                APIs & Integrações
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 font-sans">
                RESTful, Gateways e ERPs
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-sky-400/80 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-mono text-xs font-semibold text-slate-200">
                Banco de Dados
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 font-sans">
                PostgreSQL, MySQL e MongoDB
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 text-sky-400/80 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-mono text-xs font-semibold text-slate-200">
                DevOps & Infra
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 font-sans">
                Docker, Cloudflare e Linux
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
