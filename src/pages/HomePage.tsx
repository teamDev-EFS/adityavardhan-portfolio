import {
  ArrowUpRight,
  Bot,
  Building2,
  BriefcaseBusiness,
  Layers3,
  MoveRight,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';

function HomePage() {
  return (
    <div className="space-y-6">
      <section id="overview" className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[var(--surface-1)] px-8 py-10 shadow-panel">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
              <Sparkles size={14} />
              Founder-led software systems
            </div>
            <h2 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {portfolio.profile.name}
            </h2>
            <p className="mt-3 text-xl font-medium text-[var(--text-secondary)]">{portfolio.profile.tagline}</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">{portfolio.profile.intro}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--primary)] px-5 text-sm font-medium text-white transition-all duration-150 hover:-translate-y-[1px] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-1)]"
              >
                View Work
                <MoveRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/10"
              >
                Book a Call
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/products"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-transparent px-5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-150 hover:-translate-y-[1px] hover:border-[var(--primary)]/30 hover:text-[var(--text-primary)]"
              >
                Explore Products
                <Layers3 size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Companies</p>
              <div className="mt-4 space-y-3">
                {portfolio.profile.companies.map((company) => (
                  <div key={company} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
                    <Building2 size={18} className="text-[var(--primary)]" />
                    <span className="text-sm font-medium text-[var(--text-primary)]">{company}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Experience</p>
              <div className="mt-4 space-y-3">
                {portfolio.profile.experience.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-[var(--text-primary)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div id="founder" className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">{portfolio.founderStory.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{portfolio.founderStory.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{portfolio.founderStory.narrative}</p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Timeline</p>
          <div className="mt-4 space-y-4">
            {portfolio.founderStory.timeline.map((item) => (
              <div key={item.year} className="relative border-l border-white/10 pl-4">
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                <p className="text-xs font-medium text-[var(--primary)]">{item.year}</p>
                <h4 className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{item.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
          <div className="flex items-center gap-2">
            <Bot size={18} className="text-[var(--primary)]" />
            <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Capabilities</p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {portfolio.skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">{group.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">{group.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-xs text-[var(--text-secondary)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="experience" className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={18} className="text-[var(--primary)]" />
            <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Experience</p>
          </div>
          <div className="mt-5 space-y-4">
            {portfolio.experience.map((item) => (
              <article key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">{item.company}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-2.5 py-1 text-xs text-[var(--primary)]">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      <ShieldCheck size={14} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
        <div className="flex items-center gap-2">
          <Rocket size={18} className="text-[var(--primary)]" />
          <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Case studies</p>
        </div>
        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {portfolio.caseStudies.map((study) => (
            <article key={study.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20">
              <h3 className="text-base font-medium text-[var(--text-primary)]">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{study.outcome}</p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-tertiary)]">{study.context}</p>
              <div className="mt-4 space-y-2">
                {study.approach.map((step) => (
                  <div key={step} className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-xs text-[var(--text-secondary)]">
                    {step}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.metrics.map((metric) => (
                  <span key={metric} className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-2.5 py-1 text-xs text-[var(--primary)]">
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Vision</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{portfolio.vision.title}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">{portfolio.vision.summary}</p>
          <div className="mt-5 grid gap-3">
            {portfolio.vision.points.map((point) => (
              <div key={point} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--text-primary)]">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Contact</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{portfolio.contact.heading}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{portfolio.contact.message}</p>
          <div className="mt-5 space-y-3">
            {portfolio.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs text-[var(--text-tertiary)]">{link.label}</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{link.value}</p>
                </div>
                <ArrowUpRight size={16} className="text-[var(--primary)]" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
