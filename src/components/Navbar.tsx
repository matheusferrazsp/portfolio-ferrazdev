import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/content";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Apresentação", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Competências", href: "#solucoes" },
    { name: "Últimos Projetos", href: "#servicos" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Contatos", href: "#contatos" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070709]/80 backdrop-blur-md border-b border-[#1e293b]/60 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name Indicator */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-9 h-9 rounded bg-[#111318] border border-[#222834] flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors duration-300 shadow-inner overflow-hidden p-1.5">
            <img
              src="/favicon.svg"
              alt="Dev Logo"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase block group-hover:text-sky-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-slate-500 tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-400 hover:text-white transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contatos"
            onClick={(e) => handleNavClick(e, "#contatos")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono font-medium text-slate-200 bg-[#121620] hover:bg-[#1a2030] border border-[#222834] hover:border-sky-500/40 transition-all duration-300 group shadow-sm"
          >
            <span>Iniciar Conexão</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded bg-[#111318] border border-[#222834] text-slate-300 hover:text-white focus:outline-none"
          aria-label="Alternar Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-[55] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Slide-over Drawer (70% width, 100% height from right to left) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[70%] max-w-sm h-full bg-[#090b10] border-l border-[#1e293b] shadow-2xl z-[60] flex flex-col justify-between p-6 overflow-y-auto transform-gpu transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header (Logo + Close Button) */}
          <div className="flex items-center justify-between pb-6 border-b border-[#181d28]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#111318] border border-[#222834] flex items-center justify-center text-sky-400 p-1.5 overflow-hidden">
                <img
                  src="/favicon.svg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-200 uppercase">
                Menu
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded bg-[#131722] border border-[#222834] text-slate-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Fechar Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 mt-6 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-sky-400 py-3 px-3 rounded hover:bg-[#111520] transition-all flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-600 group-hover:text-sky-400 transition-colors">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer (Status + CTA) */}
        <div className="pt-6 border-t border-[#181d28] flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#111622] border border-[#20293a] text-slate-300 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate">{PERSONAL_INFO.status}</span>
          </div>
          <a
            href="#contatos"
            onClick={(e) => handleNavClick(e, "#contatos")}
            className="flex items-center justify-center gap-2 w-full py-3 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-mono font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          >
            <span>Iniciar Conexão</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
