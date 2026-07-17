# < / > Matheus Ferraz — Full Stack Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Single Page Application (SPA) minimalista, de alta performance e orientada a dados, desenvolvida para demonstrar competências de Engenharia de Software e Soluções Full Stack ponta a ponta.**

[Visão Geral](#-visão-geral) • [Destaques do Projeto](#-destaques-do-projeto) • [Tech Stack](#-tech-stack--ecossistema) • [Estrutura](#-estrutura-do-projeto) • [Como Rodar](#-como-rodar-localmente) • [Contato](#-contato)

---

</div>

## 🎯 Visão Geral

O **Portfólio FerrazDev** foi projetado do zero para refletir o posicionamento de **Desenvolvedor Full Stack Pleno**, com foco em criação, sustentação e escala de aplicações digitais robustas. 

A interface combina uma estética **Dark Mode Sóbria e Minimalista** com animações de rolagem fluidas e coreografadas pelo **GSAP ScrollTrigger**, garantindo uma experiência interativa, profissional e livre de distrações visuais ou jargões acadêmicos.

---

## ✨ Destaques do Projeto

- **⚡ Alta Performance & SPA Sólida:** Arquitetada com React + Vite, garantindo tempos de resposta instantâneos e carregamento otimizado de pacotes e ícones vetoriais.
- **🎨 Design System Minimalista & Dark Mode:** Paleta escura inspirada em terminais de engenharia (`Obsidian/Carbon`), contrastando com tons de azul celeste e ciano (`#38bdf8` / `#06b6d4`).
- **🎬 Animações GSAP Coreografadas:** Efeitos de revelação e *staggers* (`ScrollTrigger` e `useGSAP`) calibrados com precisão para guiar a atenção do usuário durante a navegação por seções.
- **🖥️ Terminal Interativo Windows PowerShell:** Seção de contato inovadora simulando um terminal PowerShell real com comandos `npm run role`, `npm run status` e `npm run audit-stack`.
- **📐 Logo Tech Customizada (`< / >`):** Ícone em SVG puro desenhado especificamente para o projeto, integrando camadas de código, brackets e indicador de pulso de servidor ativo (`#10b981`).

---

## 🛠️ Tech Stack & Ecossistema

O portfólio destaca competências em **12 tecnologias consolidadas** da indústria para o desenvolvimento e operação de sistemas modernos e legados:

| Categoria | Tecnologias Principal |
| :--- | :--- |
| **Linguagens & Front-end** | React, JavaScript (ES6+), TypeScript |
| **Back-end & APIs RESTful** | Node.js, PHP, WordPress |
| **Bancos de Dados (SQL & NoSQL)** | PostgreSQL, MySQL, MongoDB |
| **DevOps, Nuvem & Versionamento** | Docker, Git, Bitbucket, Cloudflare |

---

## 📁 Estrutura do Projeto

A arquitetura do código preza pela modularidade e separação de responsabilidades (dados centralizados vs. apresentação):

```text
d:\Projetos\ferrazdev\
├── public/
│   └── favicon.svg              # Logo vetorial tech (< / > com indicador de status)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navegação fixa com indicador de status animado
│   │   ├── Hero.tsx             # Apresentação principal com badges de stack
│   │   ├── About.tsx            # Background técnico e princípios de engenharia
│   │   ├── Solutions.tsx        # Grid com 4 pilares de atuação (Front, Back, DB, DevOps)
│   │   ├── RecentWork.tsx       # Casos de estudo e serviços entregues em produção
│   │   ├── TechStack.tsx        # Grid categorizado + Marquee infinita animada
│   │   ├── Contact.tsx          # Canais diretos + Terminal Windows PowerShell
│   │   └── Footer.tsx           # Rodapé dinâmico e botão de retorno ao topo
│   ├── data/
│   │   └── content.ts           # Fonte única de verdade (conteúdos, dados e links)
│   ├── App.tsx                  # Orquestrador SPA e inicialização de plugins GSAP
│   ├── main.tsx                 # Ponto de entrada React + DOM render
│   └── index.css                # Design tokens, utilitários e animações CSS puras
├── index.html                   # HTML base otimizado para SEO
├── package.json                 # Dependências e scripts npm
├── tailwind.config.js           # Configurações do Tailwind CSS
└── tsconfig.json                # Configurações rigorosas do TypeScript
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- [npm](https://www.npmjs.com/) ou `pnpm` / `yarn`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/matheusferrazsp/portfolio-ferrazdev.git
   cd portfolio-ferrazdev
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   > Acesse no navegador: `http://localhost:5173`

4. **Para gerar o build de produção (`dist/`):**
   ```bash
   npm run build
   ```

---

## 📬 Contato

Prontidão operacional ativa para desafios técnicos de engenharia de software, arquitetura web e colaborações estratégicas:

- **E-mail:** [matheusferraz.sp@gmail.com](mailto:matheusferraz.sp@gmail.com)
- **LinkedIn:** [linkedin.com/in/matheusferrazsp](https://www.linkedin.com/in/matheusferrazsp)
- **GitHub:** [github.com/matheusferrazsp](https://github.com/matheusferrazsp)
- **WhatsApp:** `+55 (11) 98725-6839`

<div align="center">
  <br />
  <p>Arquitetado e desenvolvido por <b>Matheus Oliveira Ferraz</b></p>
  <p>© 2026 Todos os direitos reservados.</p>
</div>
