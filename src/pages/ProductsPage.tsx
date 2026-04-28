import { ArrowUpRight, Layers3, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

function ProductsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-white/10 bg-[var(--surface-1)] px-8 py-10 shadow-panel">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
              <Layers3 size={14} />
              Product systems
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text-primary)]">Built like a product company, not a portfolio.</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
              The focus is not just shipping code. It is building systems with a sharp problem thesis, strong architecture, and measurable business leverage.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/10"
          >
            Discuss a build
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="grid gap-4">
        {portfolio.products.map((product) => (
          <article
            key={product.name}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-panel transition-all duration-150 hover:-translate-y-[1px] hover:border-white/20"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--text-secondary)]">
                  <Sparkles size={14} className="text-[var(--primary)]" />
                  {product.category}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{product.name}</h3>
                <p className="mt-2 text-sm text-[var(--primary)]">{product.status}</p>
              </div>
              <div className="rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-3 text-sm text-[var(--text-primary)]">
                {product.impact}
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Problem</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-primary)]">{product.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Solution</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-primary)]">{product.solution}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-xs text-[var(--text-secondary)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProductsPage;
