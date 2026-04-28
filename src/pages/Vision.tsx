import VisionPillar from '../components/sections/VisionPillar';
import SectionHeader from '../components/ui/SectionHeader';
import GlassCard from '../components/ui/GlassCard';
import { visionIntro, visionItems } from '../data/vision';

const Vision = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Vision" title={visionIntro.title} description={visionIntro.description} />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {visionItems.map((item) => (
          <VisionPillar key={item.title} item={item} />
        ))}
      </div>
      <div className="mt-10">
        <GlassCard>
          <p className="text-lg font-semibold text-text-primary">What this means in practice</p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-text-secondary">
            The direction is clear: software should become more autonomous, more strategic, and more compounding. The goal is not to create more dashboards for the sake of dashboards. The goal is to create systems that think, trigger, organize, and move operations forward with less manual intervention and greater precision.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default Vision;