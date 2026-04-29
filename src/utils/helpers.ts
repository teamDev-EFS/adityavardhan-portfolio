export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return '오늘';
  if (diff === 1) return '내일';
  if (diff === -1) return '어제';
  if (diff < 0) return `${Math.abs(diff)}일 초과`;
  if (diff <= 7) return `${diff}일 후`;
  return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
};

export const isOverdue = (dateStr: string, completed: boolean): boolean => {
  if (completed) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateStr) < today;
};

export const priorityLabel = (p: string) => ({ high: '높음', medium: '보통', low: '낮음' }[p] ?? p);
export const priorityColor = (p: string) => ({ high: 'text-red-400 bg-red-400/10', medium: 'text-amber-400 bg-amber-400/10', low: 'text-emerald-400 bg-emerald-400/10' }[p] ?? '');
export const priorityDot = (p: string) => ({ high: 'bg-red-400', medium: 'bg-amber-400', low: 'bg-emerald-400' }[p] ?? 'bg-gray-400');

export const cn = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(' ');