# Matheus Ferraz — Portfólio Full Stack

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**Meu portfólio pessoal e interativo, construído para apresentar minha trajetória, serviços recentes e principais tecnologias de trabalho como Desenvolvedor Full Stack.**

[Sobre o Projeto](#-sobre-o-projeto) • [Estrutura do Projeto](#-estrutura-do-projeto) • [Como Rodar](#-como-rodar-localmente) • [Contato](#-contato)

---

</div>

## 👋 Sobre o Projeto

Olá! Este é o repositório do meu portfólio profissional. A ideia principal aqui é apresentar de forma clara e direta quem eu sou, como penso arquitetura de software e quais soluções entrego no dia a dia como **Desenvolvedor Full Stack**.

O site foi pensado como uma **Single Page Application (SPA)** leve e agradável de navegar. Optei por um visual minimalista e escuro (*Dark Mode*), complementado por animações de rolagem suaves criadas com **GSAP**, para que a leitura seja fluida e o foco esteja no que realmente importa: **código bem feito, estabilidade e experiência do usuário**.

Aqui você encontrará um resumo da minha experiência unindo o ecossistema moderno de **JavaScript/TypeScript (React e Node.js)** à sustentação e evolução de arquiteturas consolidadas em **PHP, WordPress** e bancos de dados relacionais e NoSQL (**PostgreSQL, MySQL e MongoDB**).

---

## 📁 Estrutura do Projeto

Organizei o código de forma modular e limpa para facilitar a leitura e a manutenção. A separação entre os dados/conteúdos do site e os componentes visuais permite que qualquer alteração de texto seja feita em um único lugar:

```text
d:\Projetos\ferrazdev\
├── public/
│   └── favicon.svg              # Logo vetorial tech (< / >)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Barra de navegação e indicador de status
│   │   ├── Hero.tsx             # Seção inicial de apresentação
│   │   ├── About.tsx            # Minha visão de trabalho e background prático
│   │   ├── Solutions.tsx        # O que eu faço (Front-end, Back-end, Banco e Infra)
│   │   ├── RecentWork.tsx       # Principais serviços e projetos entregues
│   │   ├── TechStack.tsx        # Todas as ferramentas do meu dia a dia
│   │   ├── Contact.tsx          # Meus contatos + Terminal interativo PowerShell
│   │   └── Footer.tsx           # Rodapé do site
│   ├── data/
│   │   └── content.ts           # Fonte única de verdade (textos, links e dados)
│   ├── App.tsx                  # Componente principal que une todas as seções
│   ├── main.tsx                 # Ponto de entrada da aplicação
│   └── index.css                # Estilos globais e utilitários Tailwind
├── index.html                   # Estrutura base da página
└── package.json                 # Configurações e scripts do projeto
```

---

## 🚀 Como Rodar Localmente

Se você quiser clonar este projeto para dar uma olhada no código rodando na sua máquina, o processo é bem simples:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/matheusferrazsp/portfolio-ferrazdev.git
   cd portfolio-ferrazdev
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   > Depois disso, basta abrir o seu navegador em `http://localhost:5173`.

4. **Para gerar a versão final de produção:**
   ```bash
   npm run build
   ```

---

## 📬 Contato

Se você quiser bater um papo sobre tecnologia, trocar ideias ou falar sobre alguma oportunidade ou projeto, sinta-se à vontade para me chamar em qualquer um dos canais abaixo:

- **E-mail:** [matheusferraz.sp@gmail.com](mailto:matheusferraz.sp@gmail.com)
- **LinkedIn:** [linkedin.com/in/matheusferrazsp](https://www.linkedin.com/in/matheusferrazsp)
- **GitHub:** [github.com/matheusferrazsp](https://github.com/matheusferrazsp)
- **WhatsApp:** `+55 (11) 98725-6839`

<div align="center">
  <br />
  <p>Feito com dedicação por <b>Matheus Oliveira Ferraz</b></p>
</div>
