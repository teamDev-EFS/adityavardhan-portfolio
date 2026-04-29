import React, { useState, useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import { Task } from '../types';
import { Sun, Plus, CheckCircle2 } from 'lucide-react';

export default function Today() {
  const { tasks, projects, toggleTask, deleteTask } = useTaskContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const todayTasks = useMemo(() =>
    tasks.filter(t => !t.completed && t.dueDate === todayStr), [tasks, todayStr]);
  const overdueTasks = useMemo(() =>
    tasks.filter(t => !t.completed && t.dueDate && t.dueDate < todayStr), [tasks, todayStr]);

  const handleEdit = (task: Task) => { setEditingTask(task); setModalOpen(true); };
  const handleDelete = (id: string) => setDeleteConfirm(id);
  const confirmDelete = () => { if (deleteConfirm) { deleteTask(deleteConfirm); setDeleteConfirm(null); } };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold text-[var(--text-primary)]">오늘</h1>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
            {new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', weekday: 'long' })}
          </p>
        </div>
        <button onClick={() => { setEditingTask(null); setModalOpen(true); }}
          className="flex items-center gap-2 px-3 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-medium rounded-lg transition-all duration-150 active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          추가
        </button>
      </div>

      {/* Overdue */}
      {overdueTasks.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-red-400">기한 초과 ({overdueTasks.length})</span>
            <div className="flex-1 h-px bg-red-400/20" />
          </div>
          <div className="bg-[var(--surface-1)] border border-red-400/20 rounded-xl overflow-hidden">
            <div className="divide-y divide-[var(--border)]">
              {overdueTasks.map(task => (
                <TaskCard key={task.id} task={task}
                  project={projects.find(p => p.id === task.projectId)}
                  onToggle={toggleTask} onEdit={handleEdit} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Today */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-[var(--text-secondary)]">오늘 ({todayTasks.length})</span>
          <div className="flex-1 h-px bg-[var(--border-strong)]" />
        </div>
        <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">
          {todayTasks.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-3" />
              <p className="text-sm font-medium text-[var(--text-primary)]">오늘 할 일을 모두 완료했어요!</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">내일도 파이팅!</p>
            </div>
          ) : (
            <div className="divide-y divide-[var(--border)]">
              {todayTasks.map(task => (
                <TaskCard key={task.id} task={task}
                  project={projects.find(p => p.id === task.projectId)}
                  onToggle={toggleTask} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
            </div>
          )}
        </div>
      </div>

      <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} editingTask={editingTask} />

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)} />
          <div className="relative z-10 w-full max-w-sm bg-[var(--surface-1)] border border-[var(--border-strong)] rounded-2xl shadow-2xl p-6">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">할 일 삭제</h3>
            <p className="text-xs text-[var(--text-secondary)] mb-4">정말 삭제하시겠어요?</p>
            <div className="flex gap-2">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2 border border-[var(--border-strong)] rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-2)] transition-all">취소</button>
              <button onClick={confirmDelete} className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-all active:scale-[0.98]">삭제</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}