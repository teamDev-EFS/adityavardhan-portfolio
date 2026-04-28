import CaseStudyCard from '../components/sections/CaseStudyCard';
import SectionHeader from '../components/ui/SectionHeader';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Case Studies" title="Proof of thought process, architecture judgment, and outcome-driven execution." description="The work below reflects how Aditya approaches technical complexity: understand the operational bottleneck, design the right system, and execute with production-level quality." />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} study={study} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;