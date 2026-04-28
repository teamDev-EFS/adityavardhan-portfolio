import { ShieldCheck, Building2, Cpu, BriefcaseBusiness, Layers3 } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const items = [
  {
    title: 'Enterprise engineering experience',
    description: 'Built within enterprise-grade environments where delivery quality, scale, and architecture discipline actually matter.',
    icon: Building2
  },
  {
    title: 'Founder of two ventures',
    description: 'Operating with founder-level accountability across EpicForge Software and Astrova Labs.',
    icon: ShieldCheck
  },
  {
    title: 'Full-stack product delivery',
    description: 'From frontend systems to backend architecture, the work spans the complete product execution stack.',
    icon: Layers3
  },
  {
    title: 'Client-facing execution',
    description: 'Built platforms and software systems shaped by real operational constraints, not portfolio theater.',
    icon: BriefcaseBusiness
  },
  {
    title: 'AI-first platform building',
    description: 'Focused on practical intelligence layers, automation workflows, and software that creates compounding leverage.',
    icon: Cpu
  }
];

const Credibility = () => {
  return (
    <section id="credibility" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Credibility"
            title="Signals of trust without fake social proof."
            description="No invented testimonials. No inflated claims. Just clear indicators of technical depth, founder ownership, and product-minded execution."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title}>
                <GlassCard className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-text-primary">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credibility;