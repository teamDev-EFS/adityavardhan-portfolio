import { Product } from '../types';

export const products: Product[] = [
  {
    name: 'ForgeOrbis',
    category: 'AI Operating System Concept',
    problem:
      'Teams lose time across fragmented tools, repetitive execution loops, and disconnected operational intelligence.',
    solution:
      'A unified AI-first operating layer for orchestrating workflows, decision support, internal tooling, and execution visibility from one controlled system.',
    stack: ['React', 'Node.js', 'MongoDB', 'Agent Workflows', 'LLM Integrations'],
    impact:
      'Designed to reduce context switching, accelerate execution, and give founders and operators a central command layer for work.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=720&fit=crop',
  },
  {
    name: 'PromptFloe',
    category: 'Vibe Coding Platform',
    problem:
      'Prompt-driven app generation often breaks on quality, structure, and production readiness.',
    solution:
      'A generation pipeline that transforms product requirements into structured, premium-grade codebases with stronger UX and enterprise scaffolding.',
    stack: ['TypeScript', 'React', 'Tailwind CSS', 'Prompt Orchestration', 'Developer Tooling'],
    impact:
      'Created to compress idea-to-interface time and raise the floor for generated product quality across startup teams and builders.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=720&fit=crop',
  },
  {
    name: 'Enterprise Delivery Systems',
    category: 'Custom Platforms',
    problem:
      'Growing businesses struggle with brittle dashboards, siloed operations, and workflows that don’t scale under pressure.',
    solution:
      'End-to-end product systems including admin dashboards, analytics layers, internal tools, and API architecture designed for scale and velocity.',
    stack: ['Angular', 'React', 'Node.js', 'AWS', 'Microservices'],
    impact:
      'Enabled faster delivery, cleaner architecture, and lower operational friction for high-value business workflows.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=720&fit=crop',
  },
];