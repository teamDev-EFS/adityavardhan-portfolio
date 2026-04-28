export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type Product = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  status: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export type CaseStudy = {
  title: string;
  outcome: string;
  context: string;
  approach: string[];
  metrics: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const portfolio = {
  profile: {
    name: 'Aditya Vardhan',
    role: 'Founder & CEO | Full Stack Architect',
    intro:
      'I design and ship intelligent software systems that turn complex operations into scalable products. From enterprise platforms to AI-first workflows, I build with product depth, systems thinking, and founder-level execution.',
    tagline: 'Building intelligent systems that replace manual work.',
    companies: ['EpicForge Software', 'Astrova Labs'],
    experience: ['7+ years as Software Engineer & Tech Lead', '2+ years as Founder & CEO'],
    location: 'India · Working with global teams remotely',
  },
  navigation: [
    { label: 'Overview', href: '/#overview', description: 'Positioning and founder story' },
    { label: 'Products', href: '/products', description: 'Platforms, systems, and product bets' },
    { label: 'Experience', href: '/#experience', description: 'Impact across engineering leadership' },
    { label: 'Case Studies', href: '/#case-studies', description: 'Outcome-driven execution' },
    { label: 'Contact', href: '/#contact', description: 'Collaboration and advisory' },
  ] as NavItem[],
  founderStory: {
    eyebrow: 'Founder perspective',
    title: 'Creating leverage through software, automation, and AI-native systems.',
    narrative:
      'Aditya operates at the intersection of architecture, execution, and product strategy. He has spent years building full-stack systems, leading engineering initiatives, and translating ambiguous business problems into resilient digital products. Through EpicForge Software and Astrova Labs, he is focused on building scalable platforms, intelligent automation, and products that create asymmetric value for teams and businesses.',
    timeline: [
      {
        year: '2018',
        title: 'Started building production-grade web systems',
        description:
          'Built end-to-end applications across frontend, backend, and cloud infrastructure with a strong focus on maintainability and speed.',
      },
      {
        year: '2021',
        title: 'Stepped into technical leadership',
        description:
          'Led delivery across cross-functional teams, improved engineering throughput, and re-architected performance-critical workflows.',
        },
      {
        year: '2024',
        title: 'Founded EpicForge Software and Astrova Labs',
        description:
          'Transitioned from engineering leadership into founder mode, building products around automation, AI systems, and scalable software operations.',
      },
    ] as TimelineEntry[],
  },
  products: [
    {
      name: 'ForgeOrbis',
      category: 'AI Operating System Concept',
      problem:
        'Modern teams lose time across fragmented tools, repetitive workflows, and poor operational visibility.',
      solution:
        'A unified AI operating layer designed to orchestrate tasks, automate internal workflows, and centralize operational decision-making.',
      stack: ['React', 'Node.js', 'MongoDB', 'AWS', 'LLM orchestration'],
      impact: 'Designed as a platform vision for autonomous team workflows and enterprise automation.',
      status: 'Concept + architecture in active exploration',
    },
    {
      name: 'PromptFloe',
      category: 'Vibe Coding Platform',
      problem:
        'Product teams and builders struggle to move from prompt-based ideation to structured product delivery.',
      solution:
        'A platform for shaping prompts, flows, and product logic into usable system blueprints with faster experimentation loops.',
      stack: ['React', 'TypeScript', 'Node.js', 'Agent workflows', 'Tailwind CSS'],
      impact: 'Built to accelerate product ideation, technical clarity, and execution consistency for AI-assisted building.',
      status: 'Prototype and workflow refinement',
    },
    {
      name: 'Enterprise Dashboard Systems',
      category: 'Custom Full-Stack Delivery',
      problem:
        'Large organizations need real-time visibility, workflow control, and reliable interfaces across distributed teams.',
      solution:
        'Built modular dashboard systems with scalable APIs, role-aware interfaces, and optimized data access layers.',
      stack: ['Angular', 'React', 'Node.js', 'MongoDB', 'AWS'],
      impact: 'Improved reporting clarity, operational decision speed, and long-term maintainability for internal platforms.',
      status: 'Delivered across production environments',
    },
  ] as Product[],
  skillGroups: [
    {
      title: 'Engineering',
      summary: 'Shipping robust user experiences and backend systems with product-level polish.',
      items: ['React', 'Angular', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'Architecture',
      summary: 'Designing systems that scale with clarity, modularity, and operational discipline.',
      items: ['Microservices', 'System Design', 'Scalable APIs', 'Cloud deployment', 'Performance optimization'],
    },
    {
      title: 'AI / Systems',
      summary: 'Building AI-native workflows that reduce manual work and increase decision velocity.',
      items: ['Agent systems', 'LLM integration', 'Automation workflows', 'Workflow orchestration'],
    },
    {
      title: 'Leadership',
      summary: 'Driving execution across product, engineering, and business priorities.',
      items: ['Team building', 'Product thinking', 'Execution', 'Founder-led decision making'],
    },
  ] as SkillGroup[],
  experience: [
    {
      company: 'Clarivate',
      role: 'Associate Lead Software Engineer',
      period: 'Enterprise engineering leadership',
      achievements: [
        'Led architecture improvements for high-traffic internal platforms supporting complex operational workflows.',
        'Drove performance and reliability enhancements across frontend and backend layers for faster product usage at scale.',
        'Contributed to system redesign decisions that improved maintainability, engineering alignment, and feature velocity.',
      ],
    },
    {
      company: 'EpicForge Software',
      role: 'Founder & CEO',
      period: 'Product studio and engineering execution',
      achievements: [
        'Built a founder-led software practice focused on scalable web systems, AI-native workflows, and product execution.',
        'Positioned the company around solving high-value business problems with modern software architecture and automation.',
        'Established a product mindset that balances speed of shipping with long-term systems quality.',
      ],
    },
    {
      company: 'Astrova Labs',
      role: 'Founder & CEO',
      period: 'AI systems and future-facing product bets',
      achievements: [
        'Exploring AI-enabled products focused on workflow intelligence, operational leverage, and autonomous execution.',
        'Developing systems concepts around orchestration, automation, and software that reduces coordination overhead.',
        'Building with a strong thesis: the future belongs to teams that operationalize intelligence, not just information.',
      ],
    },
  ] as ExperienceItem[],
  caseStudies: [
    {
      title: 'Built enterprise dashboards that turned fragmented reporting into decision-ready systems',
      outcome: 'Improved operational visibility and reduced time spent reconciling disconnected data sources.',
      context:
        'Teams needed a unified interface to monitor workflows, performance, and execution health without relying on manual updates.',
      approach: [
        'Designed modular UI architecture for complex dashboard views',
        'Implemented scalable APIs and structured data flows',
        'Optimized performance for dense, high-usage internal interfaces',
      ],
      metrics: ['Faster reporting loops', 'Higher team adoption', 'Better operational clarity'],
    },
    {
      title: 'Reduced system latency through architecture cleanup and performance-focused redesign',
      outcome: 'Created a noticeably faster product experience for business-critical workflows.',
      context:
        'Slow response times and inefficient data fetching patterns were affecting user confidence and system throughput.',
      approach: [
        'Identified bottlenecks across client rendering and API orchestration',
        'Refactored heavy flows into cleaner, more maintainable modules',
        'Improved query handling and request efficiency across services',
      ],
      metrics: ['Reduced latency', 'Smoother interaction flows', 'Improved maintainability'],
    },
    {
      title: 'Designed scalable microservices architecture for long-term platform growth',
      outcome: 'Enabled cleaner ownership boundaries and more resilient delivery across evolving product requirements.',
      context:
        'As complexity grew, the system required stronger service separation, better extensibility, and clearer integration patterns.',
      approach: [
        'Mapped domain boundaries around product capabilities',
        'Defined service contracts and integration patterns for reliability',
        'Improved developer clarity around deployment and system evolution',
      ],
      metrics: ['Scalable service boundaries', 'Improved team velocity', 'Better system resilience'],
    },
  ] as CaseStudy[],
  vision: {
    title: "The future I'm creating",
    summary:
      'I am building toward a world where intelligent systems handle coordination, repetitive execution, and operational overhead so teams can focus on leverage, creativity, and strategic decision-making. The next generation of software will not just assist people — it will operate with context, autonomy, and measurable business impact.',
    points: [
      'AI systems that orchestrate workflows across teams and tools',
      'Enterprise automation designed around reliability, not hype',
      'Software products that compress execution time without sacrificing quality',
    ],
  },
  contact: {
    heading: 'Build something category-defining.',
    message:
      'If you are building a serious product, modernizing a platform, or exploring AI-native systems, I am open to focused conversations with founders, teams, and collaborators who value clarity and execution.',
    links: [
      { label: 'Email', value: 'aditya@epicforge.software', href: 'mailto:aditya@epicforge.software' },
      { label: 'Book a call', value: 'Schedule a strategic conversation', href: 'mailto:aditya@epicforge.software?subject=Let%27s%20build%20something%20serious' },
      { label: 'Location', value: 'Available for global remote collaborations', href: '#' },
    ] as ContactLink[],
  },
};

export type PortfolioData = typeof portfolio;
