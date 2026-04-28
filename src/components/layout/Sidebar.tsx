import { ArrowUpRight, BriefcaseBusiness, FolderKanban, Home, Mail, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { portfolio } from '../../data/portfolio';

const iconMap = {
  Overview: Home,
  Products: FolderKanban,
  Experience: BriefcaseBusiness,
  'Case Studies': Sparkles,
  Contact: Mail,
} as const;

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-60 flex-col border-r border-[var(--border)] bg-[var(--surface-1)]/95 px-4 py-5 backdrop-blur-xl">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-panel">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] ring-1 ring-[var(--primary)]/30">
            <span className="text-sm font-semibold">AV</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">Aditya Vardhan</p>
            <p className="text-xs text-[var(--text-secondary)]">Founder & Full Stack Architect</p>
          </div>
        </div>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-2">
        {portfolio.navigation.map((item) => {
          const Icon = iconMap[item.label as keyof typeof iconMap] ?? Home;
          const isHashLink = item.href.includes('#');

          if (isHashLink) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="group rounded-xl border border-transparent px-3 py-3 transition-all duration-150 hover:-translate-y-[1px] hover:border-white/10 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-[var(--text-secondary)] transition-colors duration-150 group-hover:text-[var(--primary)]" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.label}</p>
                    <p className="truncate text-xs text-[var(--text-tertiary)]">{item.description}</p>
                  </div>
                </div>
              </a>
            );
          }

          return (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `group rounded-xl border px-3 py-3 transition-all duration-150 hover:-translate-y-[1px] ${
                  isActive
                    ? 'border-[var(--primary)]/30 bg-[var(--primary)]/10'
                    : 'border-transparent hover:border-white/10 hover:bg-white/5'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-[var(--text-secondary)] transition-colors duration-150 group-hover:text-[var(--primary)]" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{item.label}</p>
                  <p className="truncate text-xs text-[var(--text-tertiary)]">{item.description}</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--primary)]/15 to-transparent p-4 shadow-panel">
        <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Currently building</p>
        <h3 className="mt-2 text-sm font-semibold text-[var(--text-primary)]">AI systems for enterprise execution</h3>
        <p className="mt-2 text-xs leading-snug text-[var(--text-secondary)]">
          Productizing automation, workflows, and scalable software operations.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[var(--primary)] transition-colors duration-150 hover:text-white"
        >
          Start a conversation
          <ArrowUpRight size={14} />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
