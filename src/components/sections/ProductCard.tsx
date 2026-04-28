import { motion } from 'framer-motion';
import { Layers3, Wrench, Zap } from 'lucide-react';
import { Product } from '../../types';
import GlassCard from '../ui/GlassCard';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
      <GlassCard className="overflow-hidden p-0">
        <img src={product.image} alt={product.name} loading="lazy" className="h-56 w-full object-cover" />
        <div className="p-6">
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{product.category}</div>
          <h3 className="mt-4 text-xl font-semibold text-text-primary">{product.name}</h3>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
            <div className="flex gap-3"><Layers3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-text-primary">Problem:</strong> {product.problem}</span></div>
            <div className="flex gap-3"><Wrench className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-text-primary">Solution:</strong> {product.solution}</span></div>
            <div className="flex gap-3"><Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span><strong className="text-text-primary">Impact:</strong> {product.impact}</span></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary">{item}</span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
};

export default ProductCard;