import FounderTimeline from '../components/sections/FounderTimeline';
import GlassCard from '../components/ui/GlassCard';
import { founderStats } from '../data/founder';

const Founder = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-widest text-primary">Founder</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">A founder narrative rooted in systems, not noise.</h1>
        <p className="mt-5 text-base leading-relaxed text-text-secondary">
          Aditya Vardhan operates from a simple belief: the strongest companies are built on systems that compound. That means scalable product architecture, intelligent automation, sharp technical execution, and a founder mindset that prioritizes leverage over vanity.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {founderStats.map((stat) => (
          <GlassCard key={stat.label}>
            <div className="text-3xl font-bold tracking-tight text-text-primary">{stat.value}</div>
            <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
      <FounderTimeline />
    </div>
  );
};

export default Founder;