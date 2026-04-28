import { FounderProfile, Stat } from '../types';

export const profile: FounderProfile = {
  name: 'Aditya Vardhan',
  role: 'Founder & CEO | Full Stack Architect',
  companies: ['EpicForge Software', 'Astrova Labs'],
  tagline: 'Building AI-native systems for the next generation of digital businesses.',
  intro:
    'Founder of EpicForge Software and Astrova Labs. Full-stack architect with 7+ years of engineering leadership and 2+ years building companies, products, and AI-powered platforms.',
  longBio:
    'Aditya Vardhan operates at the intersection of product architecture, intelligent automation, and founder-grade execution. His work is centered on building systems that remove operational drag, unlock leverage, and help ambitious teams move with more precision.',
  email: 'aditya@example.com',
  location: 'India • Remote Worldwide',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
};

export const credibilityStats: Stat[] = [
  { label: 'Years in engineering & tech leadership', value: '7+' },
  { label: 'Years building as founder & CEO', value: '2+' },
  { label: 'Platforms, products & systems shipped', value: '18+' },
  { label: 'Core focus', value: 'AI • Automation • Architecture' }
];