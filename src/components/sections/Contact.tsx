import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { profile } from '../../data/profile';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <ScrollReveal>
          <GlassCard className="overflow-hidden rounded-[2rem] p-8 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Contact / CTA</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                  Let&apos;s build something that compounds.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                  I’m open to high-trust conversations around premium product builds, architecture, AI systems, and strategic software execution for teams that are serious about quality and leverage.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <GradientButton as="a" href={`mailto:${profile.email}`} icon={ArrowUpRight}>
                    Book a Call
                  </GradientButton>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                  >
                    Contact via Mail
                  </a>
                  <Link
                    to="/#ventures"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
              <div className="space-y-4 text-sm text-text-secondary">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" />{profile.email}</div>
                </div>
                <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:text-text-primary"><Linkedin className="h-4 w-4 text-primary" />LinkedIn</a>
                <a href={profile.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:text-text-primary"><Github className="h-4 w-4 text-primary" />GitHub</a>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;