import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Outcome-driven case studies built around system impact."
            description="The focus is never surface-level implementation. It is how product architecture, workflow design, and technical execution create measurable operational value."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <ScrollReveal key={study.slug}>
              <GlassCard className="h-full p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">{study.sector}</p>
                <h3 className="mt-3 text-xl font-semibold text-text-primary">{study.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-text-secondary">
                  <p><span className="font-medium text-text-primary">Role:</span> {study.role}</p>
                  <p><span className="font-medium text-text-primary">Problem:</span> {study.problem}</p>
                  <p><span className="font-medium text-text-primary">Solution:</span> {study.solution}</p>
                  <p><span className="font-medium text-text-primary">Impact:</span> {study.impact}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary">{item}</span>
                  ))}
                </div>
                <Link to={`/case-studies/${study.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-primary">
                  Open case study
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

export default CaseStudies;