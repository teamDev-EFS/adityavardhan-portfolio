interface StatusBadgeProps {
  status: 'Live' | 'Building' | 'Concept' | 'Advisory';
}

const statusStyles: Record<StatusBadgeProps['status'], string> = {
  Live: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  Building: 'border-blue-400/20 bg-blue-400/10 text-blue-300',
  Concept: 'border-white/15 bg-white/5 text-text-secondary',
  Advisory: 'border-amber-400/20 bg-amber-400/10 text-amber-300'
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${statusStyles[status]}`}>{status}</span>;
};

export default StatusBadge;