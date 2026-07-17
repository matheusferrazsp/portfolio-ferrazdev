import {
  Code2,
  Database,
  Server,
  Terminal,
  ShieldCheck,
  Workflow,
  Cloud,
  Layers,
  GitBranch,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Matheus Oliveira Ferraz",
  role: "Desenvolvedor Full Stack",
  tagline:
    "Focado em criar e escalar aplicações web ponta a ponta. Trago experiência sólida tanto na construção de aplicações modernas com ecossistema JavaScript (Node.js/React) quanto na sustentação e evolução de arquiteturas consolidadas em PHP e WordPress. Atuo desde a modelagem do banco de dados até o deploy e gestão da infraestrutura.",
  status: "Disponível para Projetos & Oportunidades como Full Stack",
  location: "Brasil",
  socials: {
    whatsapp: "https://wa.me/5511921848879",
    email: "mailto:contatomatheus.oferraz@gmail.com",
    linkedin: "https://www.linkedin.com/in/matheusferrazsp/",
    github: "https://github.com/matheusferrazsp",
  },
};

export const ABOUT_DATA = {
  title: "Background e Visão de Engenharia",
  subtitle:
    "Experiência consolidada ponta a ponta, unindo ecossistema moderno JavaScript a sistemas legados e em produção com PHP e WordPress.",
  paragraphs: [
    "Atuando como Desenvolvedor Full Stack, foco em criar e escalar aplicações web ponta a ponta. Trago experiência sólida tanto na construção de aplicações modernas com ecossistema JavaScript (Node.js/React) quanto na sustentação e evolução de arquiteturas consolidadas em PHP e WordPress.",
    "Minha abordagem alia sólida formação acadêmica — em Engenharia de Software e Análise e Desenvolvimento de Sistemas (ADS) — a uma visão pragmática voltada à estabilidade, manutenibilidade e entrega contínua de valor. Atuo em todas as etapas de um produto digital: desde a modelagem de dados até a publicação em produção e manutenção evolutiva.",
    "Acredito que um software de excelência requer interfaces limpas, responsivas e fluidas no front-end, sustentadas por back-ends seguros, APIs RESTful bem estruturadas e uma infraestrutura monitorada e resiliente.",
  ],
  principles: [
    {
      icon: Code2,
      title: "Ecossistema Moderno",
      desc: "Desenvolvimento ágil e estruturado de interfaces em React e APIs RESTful/microsserviços com Node.js.",
    },
    {
      icon: Terminal,
      title: "Sustentação & PHP",
      desc: "Manutenção, refatoração e evolução de sistemas corporativos em PHP e soluções em WordPress.",
    },
    {
      icon: Database,
      title: "Modelagem Relacional",
      desc: "Design de bancos de dados, garantia de integridade transacional e otimização de consultas com PostgreSQL e MySQL.",
    },
    {
      icon: Cloud,
      title: "DevOps & Governança",
      desc: "Versionamento com Git e Bitbucket, containerização Docker, servidores Linux e segurança na borda via Cloudflare.",
    },
  ],
};

export const SOLUTIONS_DATA = [
  {
    id: "frontend",
    title: "Desenvolvimento Front-end",
    category: "Interfaces & UX",
    description:
      "Criação de interfaces responsivas, fluidas e componentizadas utilizando React e ecossistema moderno.",
    icon: Code2,
    highlights: [
      "React & Componentes Reutilizáveis",
      "UI/UX Responsivo e Fluido",
      "Consumo de APIs RESTful",
      "Styling Moderno com Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Desenvolvimento Back-end & APIs",
    category: "Arquitetura & Integrações",
    description:
      "Construção de APIs RESTful e microsserviços escaláveis com Node.js e manutenção de sistemas complexos em PHP. Forte vivência com integrações de terceiros (Gateways de pagamento, CRMs, ERPs).",
    icon: Server,
    highlights: [
      "Node.js & APIs RESTful",
      "Sistemas Complexos em PHP",
      "Microsserviços Escaláveis",
      "Integração com Gateways, CRMs e ERPs",
    ],
  },
  {
    id: "database",
    title: "Banco de Dados",
    category: "Persistência & Modelagem",
    description:
      "Modelagem relacional, otimização de consultas e garantia de integridade de dados utilizando PostgreSQL e MySQL.",
    icon: Database,
    highlights: [
      "Modelagem Relacional Sólida",
      "PostgreSQL & MySQL",
      "Otimização de Consultas (Tuning)",
      "Integridade de Dados & ACID",
    ],
  },
  {
    id: "devops",
    title: "DevOps, Infra e Controle de Versão",
    category: "Deploy & Governança",
    description:
      "Versionamento seguro com Git e Bitbucket. Containerização com Docker, gestão de tráfego/segurança via Cloudflare e administração de servidores Linux (cPanel, aaPanel).",
    icon: Cloud,
    highlights: [
      "Git & Bitbucket",
      "Docker & Containerização",
      "Cloudflare Security & Traffic",
      "Servidores Linux (cPanel, aaPanel)",
    ],
  },
  {
    id: "wordpress",
    title: "Ecossistema WordPress",
    category: "CMS & Performance",
    description:
      "Criação de temas, plugins customizados e otimização de performance para e-commerces e portais de alto tráfego.",
    icon: Layers,
    highlights: [
      "Temas & Plugins Customizados",
      "WooCommerce & E-commerce",
      "Otimização de Performance",
      "Portais de Alto Tráfego",
    ],
  },
];

export const RECENT_WORK_DATA = [
  {
    id: "ecommerce-automation",
    title: "Integração e Automação de E-commerce",
    category: "Orquestração & Pagamentos",
    description:
      "Orquestração de APIs para sistemas de pagamento e emissão de notas fiscais, automatizando o fluxo operacional de lojas virtuais.",
    technologies: ["Node.js", "REST APIs"],
    icon: Workflow,
  },
  {
    id: "corporate-platform",
    title: "Evolução de Plataforma Corporativa",
    category: "Refatoração & Sistemas Legados",
    description:
      "Manutenção e refatoração de código legado, otimização de banco de dados e implementação de novas features em sistema financeiro/logístico.",
    technologies: ["PHP", "MySQL", "Bitbucket"],
    icon: Server,
  },
  {
    id: "wordpress-solutions",
    title: "Soluções Customizadas em WordPress",
    category: "Funcionalidades Sob Medida & Infra",
    description:
      "Desenvolvimento de funcionalidades sob medida e gestão de infraestrutura de hospedagem para alta disponibilidade.",
    technologies: ["WordPress", "PHP", "Cloudflare"],
    icon: Layers,
  },
];

export const TECH_STACK = [
  {
    name: "React",
    category: "Linguagens & Front-end",
    level: "Avançado",
    icon: Code2,
  },
  {
    name: "Node.js",
    category: "Back-end & APIs",
    level: "Avançado",
    icon: Server,
  },
  {
    name: "PHP",
    category: "Back-end & APIs",
    level: "Avançado",
    icon: Terminal,
  },
  {
    name: "JavaScript",
    category: "Linguagens & Front-end",
    level: "Avançado",
    icon: Code2,
  },
  {
    name: "TypeScript",
    category: "Linguagens & Front-end",
    level: "Avançado",
    icon: Code2,
  },
  {
    name: "PostgreSQL",
    category: "Bancos de Dados",
    level: "Avançado",
    icon: Database,
  },
  {
    name: "MySQL",
    category: "Bancos de Dados",
    level: "Avançado",
    icon: Database,
  },
  { name: "Docker", category: "DevOps & Nuvem", level: "Sólido", icon: Cloud },
  {
    name: "Git",
    category: "DevOps & Nuvem",
    level: "Avançado",
    icon: GitBranch,
  },
  {
    name: "Bitbucket",
    category: "DevOps & Nuvem",
    level: "Avançado",
    icon: GitBranch,
  },
  {
    name: "Cloudflare",
    category: "DevOps & Nuvem",
    level: "Avançado",
    icon: ShieldCheck,
  },
  {
    name: "WordPress",
    category: "Back-end & APIs",
    level: "Avançado",
    icon: Layers,
  },
];
