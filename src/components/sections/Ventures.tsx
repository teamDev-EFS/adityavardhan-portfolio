import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ventures } from '../../data/ventures';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import StatusBadge from '../ui/StatusBadge';

const Ventures = () => {
  return (
    <section id="ventures" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Product Ventures"
            title="Ventures and systems positioned like products, not portfolio tiles."
            description="From software execution infrastructure to AI-native operating concepts, each venture reflects a systems-first view of where modern digital businesses are heading."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {ventures.map((venture) => (
            <ScrollReveal key={venture.slug}>
              <GlassCard className="flex h-full flex-col justify-between p-7">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-text-primary">{venture.name}</p>
                      <p className="mt-1 text-sm text-text-secondary">{venture.category}</p>
                    </div>
                    <StatusBadge status={venture.status} />
                  </div>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-text-secondary">
                    <p><span className="font-medium text-text-primary">Problem:</span> {venture.problem}</p>
                    <p><span className="font-medium text-text-primary">Vision:</span> {venture.vision}</p>
                    <p><span className="font-medium text-text-primary">Tech angle:</span> {venture.techAngle}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {venture.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/ventures/${venture.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-primary"
                >
                  {venture.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;