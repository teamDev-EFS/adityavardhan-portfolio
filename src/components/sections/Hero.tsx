import { ArrowRight, BriefcaseBusiness, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';
import StatPill from '../ui/StatPill';
import { credibilityStats, profile } from '../../data/profile';
import FounderDashboard from './FounderDashboard';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden section-pad">
      <div className="container-shell grid min-h-[calc(100vh-4rem)] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary"
          >
            Founder & CEO • Full Stack Architect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 max-w-5xl text-5xl font-bold tracking-tight text-text-primary sm:text-6xl xl:text-7xl"
          >
            {profile.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
          >
            {profile.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <GradientButton as={Link} to="/#ventures" icon={Layers3}>
              View Products
            </GradientButton>
            <GradientButton as="a" href={`mailto:${profile.email}`} icon={ArrowRight} className="bg-transparent from-transparent to-transparent shadow-none border-white/15 bg-white/5 hover:bg-white/10">
              Book a Strategy Call
            </GradientButton>
            <Link
              to="/#experience"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              Explore Experience
              <BriefcaseBusiness className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {credibilityStats.map((stat) => (
              <StatPill key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </div>
        <FounderDashboard />
      </div>
    </section>
  );
};

export default Hero;