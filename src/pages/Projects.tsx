import React, { useState, useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import { Task } from '../types';
import { FolderKanban, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../utils/helpers';

const projectColors = ['#3B82F6','#8B5CF6','#10B981','#F59E0B','#EF4444','#06B6D4','#EC4899'];

export default function Projects() {
  const { tasks, projects, toggleTask, deleteTask, addProject } = useTaskContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>(
    Object.fromEntries(projects.map(p => [p.id, true]))
  );
  const [newProjectModal, setNewProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectColor, setNewProjectColor] = useState(projectColors[0]);

  const toggleExpand = (id: string) => setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  const handleEdit = (task: Task) => { setEditingTask(task); setModalOpen(true); };
  const handleDelete = (id: string) => setDeleteConfirm(id);
  const confirmDelete = () => { if (deleteConfirm) { deleteTask(deleteConfirm); setDeleteConfirm(null); } };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    addProject({ name: newProjectName.trim(), color: newProjectColor, icon: 'FolderKanban' });
    setNewProjectName(''); setNewProjectModal(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderKanban className="w-5 h-5 text-[var(--primary)]" />
          <h1 className="text-lg font-bold text-[var(--text-primary)]">프로젝트</h1>
        </div>
        <button onClick={() => setNewProjectModal(true)}
          className="flex items-center gap-2 px-3 py-2 border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] text-sm font-medium rounded-lg transition-all duration-150">
          <Plus className="w-4 h-4" />
          새 프로젝트
        </button>
      </div>

      {projects.map(project => {
        const projectTasks = tasks.filter(t => t.projectId === project.id && !t.completed);
        const completedTasks = tasks.filter(t => t.projectId === project.id && t.completed);
        const rate = (project.taskCount > 0) ? Math.round((project.completedCount / project.taskCount) * 100) : 0;
        const isExpanded = expandedProjects[project.id] ?? true;
        return (
          <div key={project.id} className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">
            <button onClick={() => toggleExpand(project.id)}
              className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-[var(--surface-2)] transition-colors">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
              <span className="flex-1 text-sm font-semibold text-left text-[var(--text-primary)]">{project.name}</span>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-20 h-1 bg-[var(--surface-3)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${rate}%`, backgroundColor: project.color }} />
                  </div>
                  <span className="text-[10px] text-[var(--text-tertiary)]">{rate}%</span>
                </div>
                <span className="text-xs text-[var(--text-tertiary)]">{projectTasks.length}개 남음</span>
                {isExpanded ? <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)]" /> : <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)]" />}
              </div>
            </button>
            {isExpanded && (
              <div className="border-t border-[var(--border)]">
                {projectTasks.length === 0 && completedTasks.length === 0 ? (
                  <div className="py-8 text-center">
                    <p className="text-xs text-[var(--text-tertiary)]">이 프로젝트에 할 일이 없어요</p>
                  </div>
                ) : (
                  <div className="divide-y divide-[var(--border)]">
                    {projectTasks.map(task => (
                      <TaskCard key={task.id} task={task}
                        project={project}
                        onToggle={toggleTask} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                    {completedTasks.length > 0 && (
                      <div className="px-4 py-2 bg-[var(--surface-2)/50]">
                        <span className="text-[10px] text-[var(--text-tertiary)]">완료됨 {completedTasks.length}개</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="px-4 py-2.5 border-t border-[var(--border)]">
                  <button onClick={() => { setEditingTask(null); setModalOpen(true); }}
                    className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    할 일 추가
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} editingTask={editingTask} />

      {/* New Project Modal */}
      {newProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setNewProjectModal(false)} />
          <div className="relative z-10 w-full max-w-sm bg-[var(--surface-1)] border border-[var(--border-strong)] rounded-2xl shadow-2xl p-5">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">새 프로젝트 만들기</h3>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">프로젝트 이름</label>
                <input type="text" value={newProjectName} onChange={e => setNewProjectName(e.target.value)} placeholder="새 프로젝트"
                  className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">색상</label>
                <div className="flex gap-2">
                  {projectColors.map(color => (
                    <button key={color} type="button" onClick={() => setNewProjectColor(color)}
                      className={cn('w-6 h-6 rounded-full transition-all duration-150', newProjectColor === color ? 'ring-2 ring-offset-2 ring-offset-[var(--surface-1)] ring-white scale-110' : '')}
                      style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <button type="button" onClick={() => setNewProjectModal(false)} className="flex-1 px-4 py-2 border border-[var(--border-strong)] rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-2)] transition-all">취소</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-lg text-sm font-medium transition-all active:scale-[0.98]">만들기</button>
              </div>
            </form>
          </div>
        </div>
      )}

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