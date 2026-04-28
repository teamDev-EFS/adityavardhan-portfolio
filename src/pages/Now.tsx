import GlassCard from '../components/ui/GlassCard';

const Now = () => {
  return (
    <section className="container-shell section-pad">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Now</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">Current focus, in plain terms.</h1>
        <p className="mt-5 text-base leading-8 text-text-secondary">
          Right now, the emphasis is on founder-led software execution, AI workflow systems, and product concepts that turn operational complexity into cleaner digital infrastructure.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Building</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">PromptFloe, AI-native tooling ideas, and product-grade systems for modern operators.</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Exploring</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">AI operating layers, workflow orchestration, and scalable delivery models for high-value software builds.</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm font-semibold text-text-primary">Open to</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">Strategic collaborations, premium product work, and conversations with teams building serious technology.</p>
        </GlassCard>
      </div>
    </section>
  );
};

export default Now;