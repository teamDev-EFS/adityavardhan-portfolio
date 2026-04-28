interface StatPillProps {
  value: string;
  label: string;
}

const StatPill = ({ value, label }: StatPillProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
      <div className="text-2xl font-bold tracking-tight text-text-primary">{value}</div>
      <div className="mt-1 text-xs leading-5 text-text-secondary">{label}</div>
    </div>
  );
};

export default StatPill;