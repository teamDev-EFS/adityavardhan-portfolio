import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const FounderDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-transparent to-sky-400/10 blur-3xl" />
      <GlassCard className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="grid gap-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">Founder console</p>
              <p className="mt-1 text-sm font-medium text-text-primary">AI Infrastructure Thesis</p>
            </div>
            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-blue-300">Active</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">Current Focus</p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">Founder-led product systems, AI workflow orchestration, and premium software infrastructure.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">Operating Mode</p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">High-trust execution for ventures, enterprise-facing products, and digital systems that compound.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-text-primary">Command Surface</p>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {['Product architecture', 'AI systems & automation', 'Enterprise delivery', 'Founder-led execution'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <span className="text-xs font-medium text-primary">0{index + 1}</span>
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default FounderDashboard;