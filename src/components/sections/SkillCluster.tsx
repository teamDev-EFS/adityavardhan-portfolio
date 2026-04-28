import { motion } from 'framer-motion';
import { Brain, Boxes, Code2, Users } from 'lucide-react';
import { SkillCluster as SkillClusterType } from '../../types';
import GlassCard from '../ui/GlassCard';

const icons = {
  Engineering: Code2,
  Architecture: Boxes,
  'AI / Systems': Brain,
  Leadership: Users,
};

interface SkillClusterProps {
  cluster: SkillClusterType;
}

const SkillCluster = ({ cluster }: SkillClusterProps) => {
  const Icon = icons[cluster.title as keyof typeof icons] || Code2;

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }}>
      <GlassCard className="h-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-text-primary">{cluster.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{cluster.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {cluster.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">{skill}</span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default SkillCluster;