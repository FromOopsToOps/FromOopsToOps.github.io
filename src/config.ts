// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: "Odin’s Vault",
    title: "Odin’s Vault — Websites & MVP Web Apps",
    description: "Custom websites and MVP web apps for small businesses — fast delivery, high polish, and zero template vibes.",
    keywords: "websites, landing page, MVP, web app, small business, Astro, Brazil, SC",
    email: "your-next-devops@proton.me",

    // Open Graph / Twitter
    ogTitle: "Odin’s Vault — Custom Websites & MVPs",
    ogDescription: "Turn your idea into a real product. Custom websites and MVP web apps — fast, sharp, and tailored.",
    twitterCard: 'summary_large_image',
    twitterTitle: "Odin’s Vault",
    twitterDescription: "Custom websites & MVP web apps — zero template vibes.",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Services', href: '#pricing' },
      { name: 'All Services', href: '/services' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Tech', href: '/tech' },
      { name: 'About', href: '/about' },
      { name: 'Proof', href: '/proof' },
    ],
    cta: {
      text: 'Get Started',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: "Custom Websites",
    subheadline: "and MVP Web Apps",
    description: "If it was meant to be like everyone else, you wouldn’t be building yours. We ship fast, clean and custom — so your idea leaves the drawer and hits the world.",
    cta: {
      primary: {
        text: 'Get Started Free',
        href: '#contact',
      },
      secondary: {
        text: 'See How It Works',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: '10k+', label: 'Active Agents' },
      { value: '99.9%', label: 'Uptime' },
      { value: '5M+', label: 'Tasks Automated' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: "What you get",
    subtitle: "Avant‑garde, tech, trend — with a calm builder vibe. You bring the idea; we ship the product.",
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: "How it works",
    subtitle: 'Get started in minutes with our simple 5-step process',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Loved by Teams Worldwide',
    subtitle: 'See what our customers have to say about AI Agent Platform',
    companyLogos: [
      'TECHFLOW',
      'INNOVATE',
      'DATASTREAM',
      'CLOUDSYNC',
      'NEXUSAI',
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: "Services",
    subtitle: "Productized MVP offers. Custom beyond that is the fun part.",
               plans: [
    {
      name: 'Landing Page',
      price: 'From R$ 1.490',
      period: '',
      description: 'One page built to convert. Perfect for launches and campaigns.',
      features: [
        'Offer + proof + CTA (no fluff)',
        'Mobile-first + performance minded',
        'Calendly + WhatsApp built-in',
        'GA-ready',
      ],
      cta: { text: 'Get this', href: '#contact' },
      featured: false,
    },
    {
      name: 'Institutional Website',
      badge: 'Most Popular',
      price: 'From R$ 2.990',
      period: '',
      description: 'Multi-page site that looks premium and trustworthy.',
      features: [
        'Home, Services, Tech, About, Proof, Contact',
        'Clean structure, easy to extend',
        'SEO basics + analytics',
        'Fast static hosting (GitHub Pages)',
      ],
      cta: { text: 'Book a chat', href: 'https://calendly.com/your-next-devops/quick-chat' },
      featured: true,
    },
    {
      name: 'MVP Web App + Landing',
      price: 'Custom',
      period: '',
      description: 'Validate your product idea with a real app and a landing page to sell it.',
      features: [
        'Auth + core workflows',
        'SaaS integrations when it reduces cost',
        'Admin/dashboard when relevant',
        'Incremental delivery (ship > guess)',
      ],
      cta: { text: 'Talk to Odin', href: '#contact' },
      featured: false,
    },
  ],
},

// ============================================

  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about AI Agent Platform',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: "Let’s build your treasure",
    subtitle: "If you’re ready to stop hearing ‘it has to follow the rules’, book a quick chat or ping me on WhatsApp.",
    benefits: [
      'Direct, no-fluff communication',
      'Fast prototype → iterate → launch',
      'Custom product (not a template)',
      'SC/BR • available online',
    ],
    email: 'your-next-devops@proton.me',
    calendlyUrl: 'https://calendly.com/your-next-devops/quick-chat',
    whatsappUrl: 'https://wa.me/5548998142779',
    form: {
      cta: 'Get Started Free',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Company',
          placeholder: 'Your Company Inc.',
          required: false,
        },
        message: {
          label: 'What would you like to automate?',
          placeholder: 'Tell us about your workflow and automation needs...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Custom websites and MVP web apps for small businesses. We collect treasures — not templates.',
    columns: [
      {
        title: 'Product',
        links: [
          { name: 'Features', href: '#features' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'Integrations', href: '#' },
          { name: 'API Docs', href: '#' },
          { name: 'Changelog', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Press Kit', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'Security', href: '#' },
          { name: 'Compliance', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} AI Agent Platform. All rights reserved.`,
  },
};
