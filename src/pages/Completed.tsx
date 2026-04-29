import React, { useState, useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import FilterBar from '../components/FilterBar';
import { Task } from '../types';
import { CheckCircle2, Trash2 } from 'lucide-react';

const filters = [
  { value: 'all', label: '전체' },
  { value: 'high', label: '높음' },
  { value: 'medium', label: '보통' },
  { value: 'low', label: '낮음' },
];

export default function Completed() {
  const { tasks, projects, toggleTask, deleteTask } = useTaskContext();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const completed = useMemo(() =>
    tasks
      .filter(t => t.completed)
      .filter(t => filter === 'all' || t.priority === filter)
      .filter(t => !search || t.title.toLowerCase().includes(search.toLowerCase())),
    [tasks, filter, search]
  );

  const handleEdit = (task: Task) => { setEditingTask(task); setModalOpen(true); };
  const handleDelete = (id: string) => setDeleteConfirm(id);
  const confirmDelete = () => { if (deleteConfirm) { deleteTask(deleteConfirm); setDeleteConfirm(null); } };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        <h1 className="text-lg font-bold text-[var(--text-primary)]">완료됨</h1>
        <span className="text-xs font-medium text-[var(--text-tertiary)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full">{completed.length}</span>
      </div>

      <FilterBar search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} filters={filters} placeholder="완료된 항목 검색..." />

      <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">
        {completed.length === 0 ? (
          <div className="py-16 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-10 h-10 text-[var(--text-tertiary)] mb-3" />
            <p className="text-sm font-medium text-[var(--text-secondary)]">완료된 할 일이 없어요</p>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">할 일을 완료하면 여기에 표시됩니다</p>
          </div>
        ) : (
          <div className="divide-y divide-[var(--border)]">
            {completed.map(task => (
              <TaskCard key={task.id} task={task}
                project={projects.find(p => p.id === task.projectId)}
                onToggle={toggleTask} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </div>
        )}
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