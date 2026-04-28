import { motion } from 'framer-motion';
import { Orbit } from 'lucide-react';
import { VisionItem } from '../../types';
import GlassCard from '../ui/GlassCard';

interface VisionPillarProps {
  item: VisionItem;
}

const VisionPillar = ({ item }: VisionPillarProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
      <GlassCard className="h-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Orbit className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-text-primary">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
      </GlassCard>
    </motion.div>
  );
};

export default VisionPillar;