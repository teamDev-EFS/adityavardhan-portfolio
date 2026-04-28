import { principles } from '../../data/principles';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const OperatingPrinciples = () => {
  return (
    <section id="principles" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Operating Principles"
            title="Principles that shape how products are designed, built, and scaled."
            description="The standard is simple: useful systems, disciplined execution, and software that earns its place by creating leverage."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {principles.map((principle) => (
            <ScrollReveal key={principle.title}>
              <GlassCard className="h-full p-6">
                <p className="text-sm font-semibold leading-6 text-text-primary">{principle.title}</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{principle.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;