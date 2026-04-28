import { Mail, CalendarRange, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';

const ContactCTA = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }} className="glass rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-black/30 sm:p-10 lg:p-14">
        <p className="text-[11px] font-medium uppercase tracking-widest text-primary">Contact</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">If the ambition is serious, the systems should be too.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              I work with founders, teams, and companies that want more than surface-level development. If you need scalable software, intelligent automation, or product systems built with long-term leverage in mind, let’s talk.
            </p>
          </div>
          <div className="space-y-4">
            <GradientButton as="a" href="mailto:aditya@example.com" icon={Mail} className="w-full">aditya@example.com</GradientButton>
            <a href="mailto:aditya@example.com" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <CalendarRange className="h-4 w-4" />Book a strategic intro call
            </a>
            <a href="/case-studies" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary/15 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <ArrowUpRight className="h-4 w-4" />See outcomes and execution depth
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;