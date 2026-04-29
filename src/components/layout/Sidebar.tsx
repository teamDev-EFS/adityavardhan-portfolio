import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Sun, Calendar, FolderKanban, CheckCircle2, Settings, Plus, Inbox, X, ChevronRight, Circle } from 'lucide-react';
import { useTaskContext } from '../../context/TaskContext';
import { mockUser } from '../../data/user';

const navItems = [
  { to: '/', label: '대시보드', icon: LayoutDashboard },
  { to: '/tasks', label: '내 할 일', icon: CheckSquare },
  { to: '/today', label: '오늘', icon: Sun },
  { to: '/upcoming', label: '예정', icon: Calendar },
  { to: '/projects', label: '프로젝트', icon: FolderKanban },
  { to: '/completed', label: '완료됨', icon: CheckCircle2 },
];

const projectColorMap: Record<string, string> = {
  '#8B5CF6': 'bg-violet-500',
  '#10B981': 'bg-emerald-500',
  '#F59E0B': 'bg-amber-500',
  '#3B82F6': 'bg-blue-500',
  '#EF4444': 'bg-red-500',
};

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const { tasks, projects } = useTaskContext();
  const navigate = useNavigate();
  const todayCount = tasks.filter(t => !t.completed && t.dueDate === new Date().toISOString().split('T')[0]).length;
  const inboxCount = tasks.filter(t => !t.completed).length;

  return (
    <aside className="flex flex-col h-full w-60 bg-[var(--surface-1)] border-r border-[var(--border)] select-none">
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[var(--primary)] flex items-center justify-center">
            <CheckSquare className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-[var(--text-primary)] tracking-tight">TaskFlow</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-1 rounded-md hover:bg-[var(--surface-2)] text-[var(--text-tertiary)] transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Add Task Button */}
      <div className="px-3 pt-4 pb-2">
        <button
          onClick={() => navigate('/tasks')}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-medium transition-all duration-150 active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>새 할 일 추가</span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 group ${
                isActive
                  ? 'bg-[var(--primary-subtle)] text-[var(--primary)] font-medium'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]'}`} />
                <span className="flex-1 truncate">{label}</span>
                {label === '오늘' && todayCount > 0 && (
                  <span className="text-[10px] font-semibold bg-[var(--primary)] text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center">{todayCount}</span>
                )}
                {label === '내 할 일' && (
                  <span className="text-[10px] font-semibold text-[var(--text-tertiary)]">{inboxCount}</span>
                )}
              </>
            )}
          </NavLink>
        ))}

        {/* Projects */}
        <div className="pt-4 pb-1 px-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">프로젝트</span>
        </div>
        {projects.map(project => (
          <NavLink
            key={project.id}
            to={`/projects`}
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] transition-all duration-150 group"
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0`} style={{ backgroundColor: project.color }} />
            <span className="flex-1 truncate">{project.name}</span>
            <span className="text-[10px] text-[var(--text-tertiary)]">{project.taskCount - project.completedCount}</span>
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="mt-auto border-t border-[var(--border)] p-3">
        <NavLink to="/settings" onClick={onClose} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[var(--surface-2)] transition-all duration-150 group">
          <img src={mockUser.avatar} alt={mockUser.name} className="w-7 h-7 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[var(--text-primary)] truncate">{mockUser.name}</p>
            <p className="text-[10px] text-[var(--text-tertiary)] truncate">{mockUser.role}</p>
          </div>
          <Settings className="w-3.5 h-3.5 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </NavLink>
      </div>
    </aside>
  );
}