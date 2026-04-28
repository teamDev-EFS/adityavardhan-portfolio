import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = useMemo(() => caseStudies.find((item) => item.slug === slug), [slug]);

  if (!caseStudy) {
    return (
      <section className="container-shell section-pad">
        <GlassCard>
          <h1 className="text-2xl font-semibold text-text-primary">Case study not found</h1>
          <Link to="/" className="mt-4 inline-block text-sm text-primary">Return home</Link>
        </GlassCard>
      </section>
    );
  }

  return (
    <section className="container-shell section-pad">
      <div className="max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Case Study</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">{caseStudy.title}</h1>
        <p className="mt-4 text-base leading-8 text-text-secondary">
          {caseStudy.sector} • {caseStudy.role}
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Problem</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{caseStudy.problem}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Solution</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{caseStudy.solution}</p>
        </GlassCard>
        <GlassCard className="lg:col-span-2">
          <p className="text-sm font-semibold text-text-primary">Impact</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{caseStudy.impact}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {caseStudy.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary">{item}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CaseStudyDetail;