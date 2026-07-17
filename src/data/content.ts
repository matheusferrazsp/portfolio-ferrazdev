import {
  Code2,
  Cpu,
  Database,
  Server,
  Terminal,
  ShieldCheck,
  Workflow,
  Cloud,
  Layers,
  GitBranch,
  Activity,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Matheus Oliveira Ferraz",
  role: "Desenvolvedor Full Stack | Especialista em Arquitetura e Integrações",
  tagline:
    "Projetando e orquestrando ecossistemas robustos de alto desempenho. Transformo gargalos de integração e complexidade de infraestrutura em arquiteturas escaláveis, seguras e altamente disponíveis.",
  status: "Disponível para Projetos & Consultoria em Arquitetura",
  location: "Brasil",
  socials: {
    whatsapp: "https://wa.me/5511921848879", // Link configurável
    email: "mailto:contatomatheus.oferraz@gmail.com", // E-mail profissional configurável
    linkedin: "https://www.linkedin.com/in/matheus-oliveira-ferraz",
    github: "https://github.com/matheusferrazsp",
  },
};

export const ABOUT_DATA = {
  title: "Background e Visão de Engenharia",
  subtitle:
    "Sólida base teórica combinada com pragmatismo na resolução de problemas complexos.",
  paragraphs: [
    "Com sólida formação acadêmica — cursando Engenharia de Software e Análise e Desenvolvimento de Sistemas (ADS) —, minha abordagem no desenvolvimento full stack vai muito além de escrever código funcional: meu foco está na longevidade, manutenibilidade e integridade arquitetural do software.",
    "Especializado no ecossistema back-end, infraestrutura e banco de dados, possuo experiência aprofundada na concepção de sistemas capazes de processar grandes volumes de dados, orquestrar integrações entre múltiplas APIs externas e manter alta disponibilidade em ambientes críticos.",
    "Acredito que o verdadeiro design de software minimalista se reflete tanto na interface clara e sem ruídos quanto no código limpo, desacoplado e tolerante a falhas que roda nos bastidores.",
  ],
  principles: [
    {
      icon: Layers,
      title: "Arquitetura Desacoplada",
      desc: "Sistemas modulares projetados para evoluir sem acoplamento excessivo ou dívida técnica.",
    },
    {
      icon: Workflow,
      title: "Resiliência & Retries",
      desc: "Integrações assíncronas com tratamento avançado de exceções, filas e idempotência.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança por Defeito",
      desc: "Práticas rigorosas de sanitização, controle de acesso, criptografia e proteção de APIs.",
    },
    {
      icon: Activity,
      title: "Performance & Tuning",
      desc: "Otimização contínua de queries SQL, cache com Redis e latência mínima na borda.",
    },
  ],
};

export const SOLUTIONS_DATA = [
  {
    id: "fullstack",
    title: "Desenvolvedor Full Stack",
    category: "Engenharia de Ponta a Ponta",
    description:
      "Desenvolvimento de aplicações completas utilizando TypeScript, React, Node.js e PHP. Construção de interfaces de alto contraste e performance (SPA/SSR) totalmente sincronizadas com back-ends robustos e regras de negócio estruturadas.",
    icon: Code2,
    highlights: [
      "React / TypeScript SPA",
      "APIs RESTful & GraphQL",
      "Regras de Negócio Complexas",
      "UI/UX Responsivo e Limpo",
    ],
  },
  {
    id: "integrations",
    title: "Integrações & Orquestração de APIs",
    category: "Conectividade & Fluxos",
    description:
      "Conexão e sincronização de sistemas heterogêneos, ERPs, gateways de pagamento e serviços de terceiros. Projeto de webhooks resilientes, processamento assíncrono por filas e controle rigoroso de concorrência e taxa de requisições.",
    icon: Workflow,
    highlights: [
      "Orquestração de Microsserviços",
      "Filas de Processamento (MQ/Redis)",
      "Webhooks Resilientes",
      "Idempotência & Tolerância a Falhas",
    ],
  },
  {
    id: "infrastructure",
    title: "Infraestrutura & Servidores Linux",
    category: "DevOps & Cloud Engineering",
    description:
      "Administração avançada de ambientes Linux (Debian/Ubuntu), conteinerização com Docker e orquestração de deploys. Configuração de proxies reversos (Nginx), pipelines de CI/CD, monitoramento contínuo e hardening de segurança em nuvem (AWS/VPS).",
    icon: Server,
    highlights: [
      "Linux Server Administration",
      "Conteinerização com Docker",
      "Nginx Proxy & Load Balancing",
      "Hardening & CI/CD Pipelines",
    ],
  },
  {
    id: "database",
    title: "Modelagem & Administração de Banco de Dados",
    category: "Persistência & Otimização",
    description:
      "Projeto estrutural de bancos relacionais e NoSQL para alta escalabilidade (PostgreSQL, MySQL, Redis). Otimização de consultas lentas (Query Tuning & Indexing), controle de concorrência ACID e estratégias de backup e replicação.",
    icon: Database,
    highlights: [
      "PostgreSQL & MySQL Tuning",
      "Modelagem Relacional de Alta Carga",
      "Cache Estratégico com Redis",
      "Integridade Transacional (ACID)",
    ],
  },
];

export const TECH_STACK = [
  { name: "PHP", category: "Core Backend", level: "Avançado", icon: Terminal },
  {
    name: "Node.js",
    category: "Core Backend",
    level: "Avançado",
    icon: Server,
  },
  { name: "TypeScript", category: "Language", level: "Avançado", icon: Code2 },
  {
    name: "JavaScript (ES6+)",
    category: "Language",
    level: "Avançado",
    icon: Code2,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Avançado",
    icon: Database,
  },
  { name: "MySQL", category: "Database", level: "Avançado", icon: Database },
  { name: "Redis", category: "Cache / Queue", level: "Sólido", icon: Cpu },
  {
    name: "Linux Administration",
    category: "Infrastructure",
    level: "Avançado",
    icon: Terminal,
  },
  { name: "Docker", category: "Containers", level: "Sólido", icon: Cloud },
  {
    name: "Nginx",
    category: "Proxy / Web Server",
    level: "Avançado",
    icon: Server,
  },
  { name: "React", category: "Frontend", level: "Sólido", icon: Code2 },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: "Avançado",
    icon: Layers,
  },
  {
    name: "Git & CI/CD",
    category: "DevOps",
    level: "Avançado",
    icon: GitBranch,
  },
  {
    name: "RESTful APIs / Webhooks",
    category: "Architecture",
    level: "Especialista",
    icon: Workflow,
  },
];
