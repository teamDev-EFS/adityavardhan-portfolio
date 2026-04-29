import { Search, SlidersHorizontal } from 'lucide-react';
import { cn } from '../utils/helpers';

interface FilterBarProps {
  search: string;
  onSearch: (v: string) => void;
  filter: string;
  onFilter: (v: string) => void;
  filters: { value: string; label: string }[];
  placeholder?: string;
}

export default function FilterBar({ search, onSearch, filter, onFilter, filters, placeholder }: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="relative flex-1 min-w-[180px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-tertiary)]" />
        <input
          type="text" value={search} onChange={e => onSearch(e.target.value)}
          placeholder={placeholder ?? '검색...'}
          className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg pl-8 pr-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all duration-150"
        />
      </div>
      <div className="flex items-center gap-1">
        {filters.map(f => (
          <button key={f.value} onClick={() => onFilter(f.value)}
            className={cn(
              'px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150',
              filter === f.value
                ? 'bg-[var(--primary-subtle)] text-[var(--primary)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]'
            )}>
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}