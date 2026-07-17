import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PERSONAL_INFO } from "../data/content";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Custom High-Contrast SVGs for brand icons removed from lucide-react
const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax effect and gradual reveal on scroll near bottom of page
      const elements = gsap.utils.toArray(".contact-anim");
      gsap.from(elements, {
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
    },
    { scope: containerRef },
  );

  const contactOptions = [
    {
      name: "WhatsApp",
      desc: "Comunicação direta para consultas e alinhamento rápido",
      value: "Iniciar Conversa ->",
      href: PERSONAL_INFO.socials.whatsapp,
      icon: MessageSquare,
      accent:
        "hover:border-emerald-500/50 hover:bg-emerald-500/5 text-emerald-400",
    },
    {
      name: "E-mail Profissional",
      desc: "Propostas técnicas, arquitetura de sistemas e consultoria",
      value: "contatomatheus.oferraz@gmail.com",
      href: PERSONAL_INFO.socials.email,
      icon: Mail,
      accent: "hover:border-sky-500/50 hover:bg-sky-500/5 text-sky-400",
    },
    {
      name: "LinkedIn",
      desc: "Conexão profissional, publicações e rede de contatos",
      value: "linkedin.com/in/matheusferrazsp",
      href: PERSONAL_INFO.socials.linkedin,
      icon: LinkedinIcon,
      accent: "hover:border-blue-500/50 hover:bg-blue-500/5 text-blue-400",
    },
    {
      name: "GitHub",
      desc: "Repositórios de estudos em arquitetura e algoritmos",
      value: "github.com/matheusferrazsp",
      href: PERSONAL_INFO.socials.github,
      icon: GithubIcon,
      accent:
        "hover:border-purple-500/50 hover:bg-purple-500/5 text-purple-400",
    },
  ];

  return (
    <section
      id="contatos"
      ref={containerRef}
      className="py-28 bg-[#070709] relative overflow-hidden"
    >
      {/* Background Subtle Gradient (Hardware accelerated) */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-sky-500/5 rounded-full blur-[150px] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="contact-anim mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold block mb-2">
            05 // CONEXÃO & CALL TO ACTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
            Vamos Construir Soluções <br className="hidden sm:inline" />
            <span className="text-gradient">Sólidas e Escaláveis</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Estou disponível para discussões arquiteturais, consultoria em
            integrações complexas e desenvolvimento de sistemas críticos.
            Escolha o canal de sua preferência:
          </p>
        </div>

        {/* Contact Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactOptions.map((opt, idx) => {
            const IconComp = opt.icon;
            return (
              <a
                key={idx}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-anim p-6 sm:p-7 rounded bg-[#10131c] border border-[#1e2536] transition-all duration-300 flex flex-col justify-between group ${opt.accent} shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-[#161a26] border border-[#232b3c] text-slate-300 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-mono text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {opt.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-sans font-light">
                    {opt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1a2030] font-mono text-xs font-medium text-slate-300 flex items-center justify-between">
                  <span>{opt.value}</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-300">
                    [Conectar]
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Quick Engineering Terminal Box */}
        <div className="contact-anim p-6 sm:p-8 rounded bg-[#0b0e14] border border-[#1b2232] font-mono text-xs sm:text-sm text-slate-300 shadow-xl">
          <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[#1b2232] text-slate-500 text-[11px] select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 font-semibold text-slate-400">
              Windows PowerShell — ferrazdev@portfolio
            </span>
          </div>
          <div className="space-y-4 text-slate-400">
            <div>
              <p className="flex flex-wrap items-center gap-1.5 text-slate-200">
                <span className="text-sky-400 font-semibold">
                  PS D:\Projetos\ferrazdev&gt;
                </span>
                <span>npm run role</span>
              </p>
              <p className="text-slate-500 text-[11px] mt-1">
                &gt; ferrazdev@2.0.0 role
              </p>
              <p className="text-white font-semibold mt-0.5">
                {"->"} {PERSONAL_INFO.role}
              </p>
            </div>

            <div>
              <p className="flex flex-wrap items-center gap-1.5 text-slate-200">
                <span className="text-sky-400 font-semibold">
                  PS D:\Projetos\ferrazdev&gt;
                </span>
                <span>npm run status</span>
              </p>
              <p className="text-slate-500 text-[11px] mt-1">
                &gt; ferrazdev@2.0.0 status
              </p>
              <p className="text-emerald-400 font-medium mt-0.5">
                {"->"} Prontidão Operacional: Ativa. {PERSONAL_INFO.status}.
              </p>
            </div>

            <div>
              <p className="flex flex-wrap items-center gap-1.5 text-slate-200">
                <span className="text-sky-400 font-semibold">
                  PS D:\Projetos\ferrazdev&gt;
                </span>
                <span>npm run audit-stack</span>
              </p>
              <p className="text-slate-500 text-[11px] mt-1">
                &gt; ferrazdev@2.0.0 audit-stack
              </p>
              <p className="text-slate-400 mt-0.5">
                {"->"} 0 vulnerabilities found. Stack: React + Node.js + PHP +
                Docker + Cloudflare [100% Reliability]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
