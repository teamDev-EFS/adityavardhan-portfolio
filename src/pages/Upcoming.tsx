import React, { useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Calendar, ChevronRight } from 'lucide-react';
import { priorityDot, cn, isOverdue } from '../utils/helpers';

function groupByDate(tasks: import('../types').Task[]): Record<string, import('../types').Task[]> {
  return tasks.reduce((acc, task) => {
    const key = task.dueDate || 'no-date';
    if (!acc[key]) acc[key] = [];
    acc[key].push(task);
    return acc;
  }, {} as Record<string, import('../types').Task[]>);
}

export default function Upcoming() {
  const { tasks, projects, toggleTask } = useTaskContext();
  const todayStr = new Date().toISOString().split('T')[0];

  const upcomingTasks = useMemo(() =>
    tasks
      .filter(t => !t.completed && t.dueDate && t.dueDate >= todayStr)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate)),
    [tasks, todayStr]
  );

  const grouped = useMemo(() => groupByDate(upcomingTasks), [upcomingTasks]);
  const sortedDates = Object.keys(grouped).sort();

  const formatGroupDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date(); today.setHours(0,0,0,0);
    const target = new Date(d); target.setHours(0,0,0,0);
    const diff = Math.ceil((target.getTime() - today.getTime()) / (1000*60*60*24));
    if (diff === 0) return '오늘';
    if (diff === 1) return '내일';
    return d.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'short' });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-[var(--primary)]" />
        <h1 className="text-lg font-bold text-[var(--text-primary)]">예정된 할 일</h1>
        <span className="text-xs font-medium text-[var(--text-tertiary)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full">{upcomingTasks.length}</span>
      </div>

      {upcomingTasks.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center">
          <Calendar className="w-12 h-12 text-[var(--text-tertiary)] mb-3" />
          <p className="text-sm font-medium text-[var(--text-secondary)]">예정된 할 일이 없어요</p>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">마감일이 있는 할 일을 추가해보세요</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedDates.map(dateStr => (
            <div key={dateStr}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[var(--text-secondary)]">{formatGroupDate(dateStr)}</span>
                <span className="text-[10px] text-[var(--text-tertiary)] bg-[var(--surface-2)] px-1.5 py-0.5 rounded-full">{grouped[dateStr].length}</span>
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>
              <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">
                <div className="divide-y divide-[var(--border)]">
                  {grouped[dateStr].map(task => {
                    const project = projects.find(p => p.id === task.projectId);
                    return (
                      <div key={task.id} className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--surface-2)] transition-colors">
                        <button onClick={() => toggleTask(task.id)} className="flex-shrink-0">
                          <span className={cn('w-3 h-3 rounded-full block border-2 transition-colors', task.completed ? 'bg-[var(--primary)] border-[var(--primary)]' : 'border-[var(--text-tertiary)] hover:border-[var(--primary)]')} />
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-[var(--text-primary)] truncate">{task.title}</p>
                          {project && <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5">{project.name}</p>}
                        </div>
                        <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', priorityDot(task.priority))} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}