import { Lucide } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Stat {
  label: string;
  value: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  companies: string[];
  tagline: string;
  intro: string;
  longBio: string;
  email: string;
  location: string;
  social: {
    linkedin: string;
    github: string;
  };
}

export interface Venture {
  slug: string;
  name: string;
  category: string;
  status: 'Live' | 'Building' | 'Concept' | 'Advisory';
  problem: string;
  vision: string;
  techAngle: string;
  stack: string[];
  ctaLabel: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  role: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  summary: string;
  metric: string;
}

export interface CapabilityGroup {
  title: string;
  summary: string;
  skills: string[];
  icon: Lucide;
}

export interface Principle {
  title: string;
  description: string;
}

export interface VisionPillar {
  title: string;
  description: string;
}

export interface WritingPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
}

export interface PressAsset {
  label: string;
  value: string;
}

export interface CredibilityPoint {
  title: string;
  description: string;
}