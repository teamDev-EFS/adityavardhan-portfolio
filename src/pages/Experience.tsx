import ImpactCard from '../components/sections/ImpactCard';
import SectionHeader from '../components/ui/SectionHeader';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Experience" title="Experience presented through impact, not a resume dump." description="Across enterprise engineering and founder-led execution, Aditya’s career has been shaped by one consistent pattern: building stronger systems that improve how teams ship, scale, and operate." />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {experience.map((item) => (
          <ImpactCard key={item.company} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;