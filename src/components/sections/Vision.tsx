import { vision, visionPillars } from '../../data/vision';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const Vision = () => {
  return (
    <section id="vision" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading eyebrow="Vision" title={vision.title} description={vision.description} />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visionPillars.map((pillar) => (
            <ScrollReveal key={pillar.title}>
              <GlassCard className="h-full p-7">
                <h3 className="text-lg font-semibold text-text-primary">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{pillar.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8">
          <GlassCard className="overflow-hidden p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="text-lg font-semibold text-text-primary">What this means in practice</p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-text-secondary sm:text-base">
              The direction is clear: software should become more autonomous, more strategic, and more compounding. The goal is not to create more dashboards. The goal is to design systems that think, trigger, organize, and move operations forward with less manual intervention and more precision.
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Vision;