import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RECENT_WORK_DATA } from "../data/content";
import { Terminal, ArrowUpRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const RecentWork: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        // Staggered reveal of recent work cards when entering viewport on desktop
        const cards = gsap.utils.toArray(".recent-card");

        gsap.from(cards, {
          opacity: 0,
          y: 25,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 92%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
          clearProps: "all",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="servicos"
      ref={containerRef}
      className="py-28 bg-[#090b0f] border-b border-[#161a24] relative overflow-hidden"
    >
      {/* Subtle Background Glow (Hardware accelerated) */}
      <div className="absolute top-1/3 right-1/4 w-150 h-100 bg-sky-500/5 rounded-full blur-[160px] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold block mb-2">
            03 // ÚLTIMOS PROJETOS & CASOS DE USO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
            Projetos em Destaque & <br className="hidden sm:inline" />
            <span className="text-gradient">Entregas de Alto Impacto</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-3xl font-light leading-relaxed">
            Exemplos práticos de problemas complexos que resolvi recentemente,
            desde orquestração de APIs e automação comercial até refatoração de
            sistemas corporativos e soluções de alta disponibilidade.
          </p>
        </div>

        {/* Recent Work Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {RECENT_WORK_DATA.map((work, index) => {
            const IconComponent = work.icon;
            return (
              <div
                key={work.id}
                className="recent-card group relative p-7 sm:p-8 rounded bg-[#10131c] border border-[#1e2536] hover:border-sky-500/50 hover:bg-[#131724] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(56,189,248,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded bg-[#161a26] border border-[#232b3c] text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest px-2.5 py-1 rounded bg-[#141722] border border-[#1e2332]">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-sky-400 font-semibold block mb-2">
                    {work.category}
                  </span>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 font-sans group-hover:text-sky-300 transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-light mb-8">
                    {work.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Indicator */}
                <div className="pt-5 border-t border-[#1e2536]/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400/80" />
                      Tecnologias:
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#161b28] border border-[#232c40] text-slate-300 font-mono text-[11px] group-hover:border-sky-500/30 group-hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle corner accent on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom Banner encouraging custom solutions */}
        <div className="recent-card mt-12 p-6 sm:p-8 rounded bg-[#0c0e16] border border-[#1a2030] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white">
                Precisa de uma Solução Customizada ou Evolução de Sistema
                Legado?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-light mt-1 max-w-2xl">
                Atuo desde a análise arquitetural de gargalos e modelagem
                relacional de banco de dados até a entrega em produção com
                monitoramento na borda.
              </p>
            </div>
          </div>
          <a
            href="#contatos"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-bold transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            <span>Solicitar Análise Técnica</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
