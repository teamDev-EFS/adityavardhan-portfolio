import { Blocks, BrainCircuit, Cloud, Database, LayoutGrid, Network } from 'lucide-react';
import { CapabilityGroup } from '../types';

export const capabilities: CapabilityGroup[] = [
  {
    title: 'Frontend Engineering',
    summary: 'Interfaces built with product rigor, responsive systems thinking, and premium interaction quality.',
    skills: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'UI Systems'],
    icon: LayoutGrid
  },
  {
    title: 'Backend & APIs',
    summary: 'Application layers designed for reliable business logic, scalable service design, and clean system boundaries.',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL'],
    icon: Network
  },
  {
    title: 'Cloud & DevOps',
    summary: 'Deployment thinking centered on speed, resilience, and environments that support modern product operations.',
    skills: ['AWS', 'Docker', 'Jenkins', 'Netlify', 'Render'],
    icon: Cloud
  },
  {
    title: 'Databases',
    summary: 'Data systems chosen for real product needs, operational simplicity, and future scaling clarity.',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Data Modeling'],
    icon: Database
  },
  {
    title: 'AI Systems',
    summary: 'Practical intelligence layers for workflow automation, LLM-powered experiences, and business leverage.',
    skills: ['LLM Integrations', 'Agent Workflows', 'RAG Concepts', 'Automation Pipelines', 'MCP Concepts'],
    icon: BrainCircuit
  },
  {
    title: 'Leadership',
    summary: 'Founder-mode execution spanning product direction, team coordination, and architecture-level decision making.',
    skills: ['Product Strategy', 'Client Delivery', 'Team Building', 'Technical Architecture'],
    icon: Blocks
  }
];