import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-[11px] font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">{description}</p>
    </motion.div>
  );
};

export default SectionHeader;