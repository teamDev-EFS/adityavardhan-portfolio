import GlassCard from '../components/ui/GlassCard';
import { profile } from '../data/profile';

const PressKit = () => {
  return (
    <section className="container-shell section-pad">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Press Kit</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">Founder profile and brand snapshot.</h1>
        <p className="mt-5 text-base leading-8 text-text-secondary">
          A concise reference for collaborators, clients, media, and teams looking to understand the work and positioning quickly.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Name</p>
          <p className="mt-3 text-sm text-text-secondary">{profile.name}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Role</p>
          <p className="mt-3 text-sm text-text-secondary">{profile.role}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Companies</p>
          <p className="mt-3 text-sm text-text-secondary">{profile.companies.join(' • ')}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Primary positioning</p>
          <p className="mt-3 text-sm text-text-secondary">AI product builder, systems thinker, founder-operator, and full stack architect.</p>
        </GlassCard>
      </div>
    </section>
  );
};

export default PressKit;