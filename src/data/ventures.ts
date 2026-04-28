import { Venture } from '../types';

export const ventures: Venture[] = [
  {
    slug: 'epicforge-software',
    name: 'EpicForge Software',
    category: 'Product Engineering Venture',
    status: 'Live',
    problem:
      'Companies with ambitious product goals often hit a wall between design intent, engineering quality, and scalable delivery.',
    vision:
      'EpicForge is built to close that gap through premium product execution, system-first thinking, and founder-grade delivery discipline.',
    techAngle:
      'Modern full-stack platforms, internal tools, dashboards, and architecture designed for long-term maintainability.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    ctaLabel: 'View venture',
    detail:
      'EpicForge Software focuses on shipping scalable product systems for teams that care about durability, velocity, and technical clarity.'
  },
  {
    slug: 'astrova-labs',
    name: 'Astrova Labs',
    category: 'AI Systems Venture',
    status: 'Building',
    problem:
      'Most organizations still rely on fragmented tools and manual coordination for workflows that should be intelligently orchestrated.',
    vision:
      'Astrova Labs explores AI-native operating layers that compress repetitive work into autonomous workflows and decision support systems.',
    techAngle:
      'Agent workflows, LLM integrations, automation systems, and intelligent internal tooling for business operations.',
    stack: ['LLM Workflows', 'Automation', 'RAG Concepts', 'Node.js', 'Cloud Infrastructure'],
    ctaLabel: 'Explore vision',
    detail:
      'Astrova Labs exists to build practical AI infrastructure products that help teams operate with more leverage and less noise.'
  },
  {
    slug: 'promptfloe',
    name: 'PromptFloe',
    category: 'Vibe Coding Platform',
    status: 'Building',
    problem:
      'Prompt-led app generation often produces weak UX, shallow architecture, and codebases that break under real-world requirements.',
    vision:
      'PromptFloe turns product intent into structured, premium-grade frontends and systems with stronger UX, clearer scaffolding, and founder-level polish.',
    techAngle:
      'Prompt orchestration, code generation pipelines, component systems, and production-aware app scaffolding.',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Prompt Orchestration', 'Developer Tooling'],
    ctaLabel: 'See details',
    detail:
      'PromptFloe is designed to raise the quality floor of AI-assisted product generation while compressing idea-to-interface time.'
  },
  {
    slug: 'forgeorbis',
    name: 'ForgeOrbis',
    category: 'AI Operating System Concept',
    status: 'Concept',
    problem:
      'Operators and founders lose momentum switching between dashboards, communication layers, execution tools, and disconnected intelligence.',
    vision:
      'ForgeOrbis is a unified operating layer for orchestrating workflows, insights, and internal execution from a more intelligent command surface.',
    techAngle:
      'AI command layers, operational dashboards, automation triggers, and business intelligence stitched into one product system.',
    stack: ['React', 'Node.js', 'MongoDB', 'AI Agents', 'Workflow Orchestration'],
    ctaLabel: 'Read concept',
    detail:
      'ForgeOrbis is a future-facing product direction centered on software that actively drives work forward rather than simply recording it.'
  },
  {
    slug: 'forgeorion',
    name: 'ForgeOrion',
    category: 'Intelligence Layer',
    status: 'Concept',
    problem:
      'Enterprise teams need visibility and orchestration without adding another layer of dashboard fatigue.',
    vision:
      'ForgeOrion explores an intelligence layer that brings decision support, diagnostics, and workflow clarity into mission-critical operations.',
    techAngle:
      'Telemetry-rich interfaces, execution visibility, AI summarization, and system-level recommendations.',
    stack: ['Analytics', 'AI Summaries', 'Operational Data', 'System Design'],
    ctaLabel: 'Open concept',
    detail:
      'ForgeOrion extends the broader product thesis: software should become strategic infrastructure, not another interface burden.'
  }
];