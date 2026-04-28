import ContactCTA from '../components/sections/ContactCTA';
import GlassCard from '../components/ui/GlassCard';
import { Mail, Building2, Rocket } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <p className="text-[11px] font-medium uppercase tracking-widest text-primary">Reach out</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">Built for serious conversations.</h1>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Whether you’re building a software product, rethinking architecture, or designing AI-driven internal systems, I’m open to conversations where execution quality and long-term leverage actually matter.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="space-y-4 text-sm text-text-secondary">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"><Mail className="h-4 w-4 text-primary" />aditya@example.com</div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"><Building2 className="h-4 w-4 text-primary" />EpicForge Software • Astrova Labs</div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"><Rocket className="h-4 w-4 text-primary" />Global clients • Investors • Remote teams • Collaborators</div>
            </div>
          </GlassCard>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default Contact;