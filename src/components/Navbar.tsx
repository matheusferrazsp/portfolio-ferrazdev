import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
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
    { name: "Últimos Serviços", href: "#servicos" },
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
          <div className="w-9 h-9 rounded bg-[#111318] border border-[#222834] flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors duration-300 shadow-inner">
            <Terminal className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10] border-b border-[#1e293b] px-6 py-6 mt-3 animate-fadeIn">
          <nav className="flex flex-col gap-4 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-sky-400 py-2 border-b border-[#181d28] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contatos"
                onClick={(e) => handleNavClick(e, "#contatos")}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold"
              >
                <span>Conectar com Matheus</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
