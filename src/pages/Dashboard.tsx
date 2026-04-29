import React, { useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { CheckCircle2, Clock, AlertTriangle, TrendingUp, Calendar, Flag, Plus } from 'lucide-react';
import { isOverdue, priorityDot, cn } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { mockUser } from '../data/user';

export default function LayoutDashboard() {
  const { tasks, projects } = useTaskContext();
  const navigate = useNavigate();

  const todayStr = new Date().toISOString().split('T')[0];

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    today: tasks.filter(t => !t.completed && t.dueDate === todayStr).length,
    overdue: tasks.filter(t => isOverdue(t.dueDate, t.completed)).length,
  }), [tasks]);

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  const recentTasks = useMemo(() =>
    tasks.filter(t => !t.completed).slice(0, 6), [tasks]
  );

  const priorityBreakdown = useMemo(() => [
    { label: '높음', count: tasks.filter(t => !t.completed && t.priority === 'high').length, color: 'bg-red-400', textColor: 'text-red-400' },
    { label: '보통', count: tasks.filter(t => !t.completed && t.priority === 'medium').length, color: 'bg-amber-400', textColor: 'text-amber-400' },
    { label: '낮음', count: tasks.filter(t => !t.completed && t.priority === 'low').length, color: 'bg-emerald-400', textColor: 'text-emerald-400' },
  ], [tasks]);

  const statCards = [
    { label: '전체 할 일', value: stats.total, icon: TrendingUp, color: 'bg-blue-500/10 text-blue-400', trend: '12개 프로젝트' },
    { label: '오늘 마감', value: stats.today, icon: Calendar, color: 'bg-amber-500/10 text-amber-400', trend: '집중 필요' },
    { label: '기한 초과', value: stats.overdue, icon: AlertTriangle, color: 'bg-red-500/10 text-red-400', trend: stats.overdue > 0 ? '즉시 처리' : '훌륭해요!' },
    { label: '완료됨', value: stats.completed, icon: CheckCircle2, color: 'bg-emerald-500/10 text-emerald-400', trend: `${completionRate}% 달성` },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[var(--text-primary)]">안녕하세요, {mockUser.name.split('').slice(0,2).join('')} 님 👋</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">
            {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
          </p>
        </div>
        <button
          onClick={() => navigate('/tasks')}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-medium rounded-lg transition-all duration-150 active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          새 할 일
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map(card => (
          <div key={card.label} className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-4 hover:border-[var(--border-strong)] transition-all duration-150">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[var(--text-secondary)]">{card.label}</span>
              <div className={cn('p-1.5 rounded-lg', card.color)}>
                <card.icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-[var(--text-primary)]">{card.value}</p>
            <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5">{card.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Progress */}
        <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">전체 진행률</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-28 h-28">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--surface-2)" strokeWidth="10" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary)" strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - completionRate / 100)}`}
                  strokeLinecap="round" className="transition-all duration-500" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-[var(--text-primary)]">{completionRate}%</span>
                <span className="text-[10px] text-[var(--text-tertiary)]">완료</span>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {priorityBreakdown.map(p => (
              <div key={p.label} className="flex items-center gap-2">
                <div className={cn('w-2 h-2 rounded-full flex-shrink-0', p.color)} />
                <span className="text-xs text-[var(--text-secondary)] flex-1">{p.label} 우선순위</span>
                <span className={cn('text-xs font-semibold', p.textColor)}>{p.count}개</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">프로젝트 현황</h2>
          <div className="space-y-3">
            {projects.map(project => {
              const rate = project.taskCount > 0 ? Math.round((project.completedCount / project.taskCount) * 100) : 0;
              return (
                <div key={project.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                      <span className="text-xs font-medium text-[var(--text-primary)]">{project.name}</span>
                    </div>
                    <span className="text-[10px] text-[var(--text-tertiary)]">{project.completedCount}/{project.taskCount}</span>
                  </div>
                  <div className="h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${rate}%`, backgroundColor: project.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Today Tasks */}
        <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">오늘 마감</h2>
          {tasks.filter(t => !t.completed && t.dueDate === todayStr).length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-[var(--text-tertiary)] mb-2" />
              <p className="text-xs text-[var(--text-tertiary)]">오늘 마감 예정 없음</p>
            </div>
          ) : (
            <div className="space-y-2">
              {tasks.filter(t => !t.completed && t.dueDate === todayStr).map(task => (
                <div key={task.id} className="flex items-center gap-2 p-2 rounded-lg bg-[var(--surface-2)]">
                  <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', priorityDot(task.priority))} />
                  <span className="text-xs text-[var(--text-primary)] truncate">{task.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent Incomplete Tasks */}
      <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">진행 중인 할 일</h2>
          <button onClick={() => navigate('/tasks')} className="text-xs text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors">전체 보기</button>
        </div>
        <div className="divide-y divide-[var(--border)]">
          {recentTasks.length === 0 ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="w-10 h-10 text-[var(--text-tertiary)] mx-auto mb-2" />
              <p className="text-sm text-[var(--text-tertiary)]">모든 할 일을 완료했어요!</p>
            </div>
          ) : recentTasks.map(task => {
            const project = projects.find(p => p.id === task.projectId);
            const overdue = isOverdue(task.dueDate, task.completed);
            return (
              <div key={task.id} className="flex items-center gap-3 px-5 py-3 hover:bg-[var(--surface-2)] transition-colors">
                <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0 mt-0.5', priorityDot(task.priority))} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[var(--text-primary)] truncate">{task.title}</p>
                  {project && <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5">{project.name}</p>}
                </div>
                {task.dueDate && (
                  <span className={cn('text-[10px] font-medium flex-shrink-0', overdue ? 'text-red-400' : 'text-[var(--text-tertiary)]')}>
                    {new Date(task.dueDate).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}