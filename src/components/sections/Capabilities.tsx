import { capabilities } from '../../data/capabilities';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Capability System"
            title="Capabilities organized like operating leverage, not a random skill dump."
            description="The value is not just knowing tools. It is understanding how frontend systems, backend architecture, cloud environments, data models, and AI layers combine into durable products."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((group) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={group.title}>
                <GlassCard className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{group.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;