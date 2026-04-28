import { credibilityStats } from '../../data/profile';
import { experience } from '../../data/experience';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import StatPill from '../ui/StatPill';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="A premium timeline shaped around operating impact, not job-history noise."
            description="From engineering depth to founder-level system design, the pattern has remained consistent: build stronger platforms, improve throughput, and create products that scale with intent."
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {credibilityStats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <StatPill value={stat.value} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <ScrollReveal key={`${item.year}-${item.company}`}>
              <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl lg:grid-cols-[120px_1fr]">
                <div className="relative">
                  <div className="text-sm font-semibold text-primary">{item.year}</div>
                  {index !== experience.length - 1 ? <div className="absolute left-[7px] top-8 hidden h-[calc(100%+2rem)] w-px bg-white/10 lg:block" /> : null}
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
                      <p className="text-sm text-text-secondary">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-blue-300">
                      {item.metric}
                    </span>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-text-secondary">{item.summary}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;