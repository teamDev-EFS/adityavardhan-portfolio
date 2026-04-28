import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ventures } from '../data/ventures';
import GlassCard from '../components/ui/GlassCard';
import StatusBadge from '../components/ui/StatusBadge';

const VentureDetail = () => {
  const { slug } = useParams();
  const venture = useMemo(() => ventures.find((item) => item.slug === slug), [slug]);

  if (!venture) {
    return (
      <section className="container-shell section-pad">
        <GlassCard>
          <h1 className="text-2xl font-semibold text-text-primary">Venture not found</h1>
          <Link to="/" className="mt-4 inline-block text-sm text-primary">Return home</Link>
        </GlassCard>
      </section>
    );
  }

  return (
    <section className="container-shell section-pad">
      <div className="max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Venture Detail</p>
        <div className="mt-4 flex items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary">{venture.name}</h1>
          <StatusBadge status={venture.status} />
        </div>
        <p className="mt-4 text-base leading-8 text-text-secondary">{venture.detail}</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Problem</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{venture.problem}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Vision</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{venture.vision}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Tech Angle</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{venture.techAngle}</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {venture.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-text-secondary">{item}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default VentureDetail;