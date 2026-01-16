// ============================================
// CONFIG DO SITE — Odin’s Vault
// ============================================

export const siteConfig = {
  // ============================================
  // METADADOS & SEO
  // ============================================
  site: {
    name: "Odin’s Vault",
    title: "Odin’s Vault — Sites e MVPs Web sob medida",
    description:
      "Sites e aplicativos web sob medida para pequenos negócios — entrega rápida, alto polimento e zero vibe de template.",
    keywords:
      "site, landing page, MVP, web app, pequenos negócios, Santa Catarina, Brasil, Astro",
    email: "your-next-devops@proton.me",

    // Open Graph / Twitter
    ogTitle: "Odin’s Vault — Sites e MVPs sob medida",
    ogDescription:
      "Se fosse pra ser igual, você não estaria fazendo o seu. Tire sua ideia da gaveta e coloque no mundo.",
    twitterCard: "summary_large_image",
    twitterTitle: "Odin’s Vault",
    twitterDescription:
      "Sites e MVPs web sob medida — rápido, bonito e direto.",
  },

  // ============================================
  // NAVEGAÇÃO
  // ============================================
  navigation: {
    links: [
      { name: "Recursos", href: "#features" },
      { name: "Como funciona", href: "#how-it-works" },
      { name: "Serviços", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    cta: { text: "Começar agora", href: "#contact" },
  },

  // ============================================
  // HERO
  // ============================================  hero: {
    headline: "Seu site não veio pra ser",
    subheadline: "igual a todo mundo.",
    description:
      "Algumas ideias nasceram medíocres. A sua não. A Odin’s Vault constrói sites e MVPs web sob medida, com a tranquilidade de quem domina a stack — e a urgência de quem sabe que tempo custa caro.",
    cta: {
      primary: {
        text: "Agendar no Calendly",
        href: "https://calendly.com/your-next-devops/quick-chat",
      },
      secondary: {
        text: "Chamar no WhatsApp",
        href: "https://wa.me/5548998142779",
      },
    },
    stats: [
      { value: "MVP", label: "oferta produtizada" },
      { value: "IA", label: "execução acelerada" },
      { value: "SC/BR", label: "online e local" },
    ],
  },
    secondary: {
      text: "Chamar no WhatsApp",
      href: "https://wa.me/5548998142779",
    },
    stats: [
      { value: "MVP", label: "oferta produtizada" },
      { value: "IA", label: "execução acelerada" },
      { value: "SC/BR", label: "online e local" },
    ],
  },

  // ============================================
  // FEATURES
  // ============================================
  features: {
    title: "Recursos que importam",
    subtitle:
      "A gente não coleciona “site bonito”. Coleciona resultado. E resultado é clareza + velocidade + execução.",
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: "Como funciona",
    subtitle:
      "Todo mundo tem medo. Quem enfrenta vence. A gente te guia do zero ao ar no menor caminho possível.",
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: "Provas (em breve)",
    subtitle:
      "Aqui vai entrar depoimento real, print e case. Placeholder por enquanto.",
    companies: ["Clientes antigos", "Pequenos negócios", "Produtos sob medida"],
  },

  // ============================================
  // SERVIÇOS (Pricing component)
  // ============================================
  pricing: {
    title: "Serviços",
    subtitle:
      "Oferta produtizada (MVP). Se a sua ideia for fora da curva… melhor ainda.",
    plans: [
      {
        name: "Landing Page",
        price: "Sob consulta",
        period: "",
        description: "Uma página pensada pra converter. Perfeita pra lançamento.",
        features: [
          "Oferta + prova + CTA (sem floreio)",
          "Mobile-first + performance",
          "Calendly + WhatsApp",
          "GA (opcional)",
        ],
        cta: { text: "Quero uma landing", href: "#contact" },
        featured: false,
      },
      {
        name: "Site Institucional",
        badge: "Mais pedido",
        price: "Sob consulta",
        period: "",
        description: "Multi-páginas com cara de premium e confiança.",
        features: [
          "Home, Serviços, Tech, Sobre, Provas, Contato",
          "Estrutura limpa e expansível",
          "SEO básico + Analytics",
          "Hospedagem estática simples (GitHub Pages)",
        ],
        cta: {
          text: "Agendar conversa",
          href: "https://calendly.com/your-next-devops/quick-chat",
        },
        featured: true,
      },
      {
        name: "MVP Web App + Landing",
        price: "Projeto",
        period: "",
        description: "Validar a ideia com um app real + landing pra vender.",
        features: [
          "Autenticação + fluxos principais",
          "Integrações SaaS quando reduz custo",
          "Admin/dashboard quando fizer sentido",
          "Entrega incremental (ship > guess)",
        ],
        cta: { text: "Vamos tirar do papel", href: "#contact" },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: "FAQ (sem filtro)",
    subtitle:
      "Resposta direta. Sem papo de agência. Sem medo vendido em forma de orçamento.",
  },

  // ============================================
  // CONTATO
  // ============================================
  contact: {
    title: "Vamos construir seu tesouro",
    subtitle:
      'Quer parar de ouvir "isso é muito complicado"? Agende uma conversa rápida ou chama no WhatsApp.',
    benefits: [
      "Comunicação direta (sem teatro)",
      "Protótipo rápido → iteração → lançamento",
      "Produto sob medida (não template)",
      "SC/BR • atendimento online",
    ],
    email: "your-next-devops@proton.me",
    calendlyUrl: "https://calendly.com/your-next-devops/quick-chat",
    whatsappUrl: "https://wa.me/5548998142779",
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      "Sites e aplicativos web sob medida. A gente coleciona tesouros — não templates.",
  },
} as const;
