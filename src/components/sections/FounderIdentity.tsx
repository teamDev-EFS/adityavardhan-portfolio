import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { profile } from '../../data/profile';

const FounderIdentity = () => {
  return (
    <section id="founder" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Founder Identity"
            title="A founder perspective built on systems, leverage, and execution clarity."
            description="This is not a resume narrative. It is the operating lens behind the work: build durable systems, remove friction, and turn complexity into products that scale with intent."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <GlassCard className="h-full p-8">
              <p className="text-lg font-semibold text-text-primary">Who I am</p>
              <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
                {profile.longBio}
              </p>
              <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
                I build from both sides of the table: as an engineer who understands implementation depth and as a founder who cares about leverage, business fit, and execution quality. That combination shapes how I approach products, AI systems, and digital infrastructure.
              </p>
            </GlassCard>
          </ScrollReveal>
          <div className="grid gap-6">
            <ScrollReveal>
              <GlassCard>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">What I build</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  AI-enabled operating systems, scalable web platforms, workflow automation, internal tools, and software products designed to create durable business leverage.
                </p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal>
              <GlassCard>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">Why I build</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Because modern companies still waste too much time inside fragmented systems. Better software should reduce operational drag, improve execution quality, and allow serious teams to move faster with more confidence.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderIdentity;