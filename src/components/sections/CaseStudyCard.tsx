import { motion } from 'framer-motion';
import { CaseStudy } from '../../types';
import GlassCard from '../ui/GlassCard';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
      <GlassCard className="h-full">
        <h3 className="text-xl font-semibold text-text-primary">{study.title}</h3>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">Challenge</p>
            <p className="mt-2">{study.challenge}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">Execution</p>
            <p className="mt-2">{study.execution}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-text-tertiary">Outcome</p>
            <p className="mt-2 text-text-primary">{study.outcome}</p>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
};

export default CaseStudyCard;