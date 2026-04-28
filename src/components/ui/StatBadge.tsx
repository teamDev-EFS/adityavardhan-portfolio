import { motion } from 'framer-motion';

interface StatBadgeProps {
  label: string;
  value: string;
}

const StatBadge = ({ label, value }: StatBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
    >
      <div className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">{value}</div>
      <div className="mt-2 text-sm text-text-secondary">{label}</div>
    </motion.div>
  );
};

export default StatBadge;