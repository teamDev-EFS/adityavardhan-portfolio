import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceItem } from '../../types';
import GlassCard from '../ui/GlassCard';

interface ImpactCardProps {
  item: ExperienceItem;
}

const ImpactCard = ({ item }: ImpactCardProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }}>
      <GlassCard className="h-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-primary">{item.company}</p>
            <h3 className="mt-2 text-xl font-semibold text-text-primary">{item.role}</h3>
            <p className="mt-2 text-sm text-text-secondary">{item.period}</p>
          </div>
          <div className="rounded-2xl bg-primary/10 p-3 text-primary"><ArrowUpRight className="h-5 w-5" /></div>
        </div>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-text-secondary">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="rounded-xl border border-white/8 bg-white/5 px-4 py-3">{highlight}</li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">{item.metric}</div>
      </GlassCard>
    </motion.div>
  );
};

export default ImpactCard;