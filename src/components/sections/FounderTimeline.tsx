import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeader from '../ui/SectionHeader';
import { founderIntro, founderTimeline } from '../../data/founder';

const FounderTimeline = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader eyebrow={founderIntro.eyebrow} title={founderIntro.title} description={founderIntro.description} />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {founderTimeline.map((item, index) => (
          <motion.div key={item.year} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
            <GlassCard className="h-full">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-sm font-semibold text-primary">{item.year}</div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FounderTimeline;