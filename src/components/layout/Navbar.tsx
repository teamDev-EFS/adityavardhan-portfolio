import { ArrowUpRight, Command, Sparkles } from 'lucide-react';
import { portfolio } from '../../data/portfolio';

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Founder portfolio</p>
          <h1 className="mt-1 text-base font-medium text-[var(--text-primary)]">{portfolio.profile.role}</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[var(--text-secondary)] md:flex">
            <Command size={14} className="text-[var(--text-tertiary)]" />
            Enterprise systems · AI workflows · Product execution
          </div>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-150 hover:-translate-y-[1px] hover:bg-[var(--primary)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            <Sparkles size={16} className="text-[var(--primary)]" />
            Book a Call
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
