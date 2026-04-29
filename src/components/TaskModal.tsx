import React, { useState, useEffect } from 'react';
import { Task, Priority } from '../types';
import { useTaskContext } from '../context/TaskContext';
import { X, Calendar, Flag, FolderKanban } from 'lucide-react';
import { cn } from '../utils/helpers';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingTask?: Task | null;
}

const priorities: { value: Priority; label: string; color: string }[] = [
  { value: 'high', label: '높음', color: 'text-red-400 border-red-400/40 bg-red-400/10' },
  { value: 'medium', label: '보통', color: 'text-amber-400 border-amber-400/40 bg-amber-400/10' },
  { value: 'low', label: '낮음', color: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10' },
];

export default function TaskModal({ isOpen, onClose, editingTask }: TaskModalProps) {
  const { projects, addTask, updateTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [projectId, setProjectId] = useState(projects[0]?.id ?? '');
  const [tags, setTags] = useState('');
  const [errors, setErrors] = useState<{ title?: string }>({});

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
      setPriority(editingTask.priority);
      setProjectId(editingTask.projectId);
      setTags(editingTask.tags.join(', '));
    } else {
      setTitle(''); setDescription(''); setDueDate(''); setPriority('medium');
      setProjectId(projects[0]?.id ?? ''); setTags('');
    }
    setErrors({});
  }, [editingTask, isOpen]);

  const validate = () => {
    const e: { title?: string } = {};
    if (!title.trim()) e.title = '제목을 입력해주세요';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const taskData = {
      title: title.trim(), description: description.trim(), dueDate,
      priority, projectId, completed: editingTask?.completed ?? false,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean)
    };
    if (editingTask) updateTask(editingTask.id, taskData);
    else addTask(taskData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-[var(--surface-1)] border border-[var(--border-strong)] rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[var(--border)]">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">
            {editingTask ? '할 일 수정' : '새 할 일 추가'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-tertiary)] transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">제목 *</label>
            <input
              type="text" value={title} onChange={e => setTitle(e.target.value)}
              placeholder="무엇을 해야 하나요?"
              className={cn(
                'w-full bg-[var(--surface-2)] border rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-150',
                errors.title ? 'border-red-500 focus:ring-1 focus:ring-red-500/20' : 'border-[var(--border-strong)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20'
              )}
            />
            {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">설명</label>
            <textarea
              value={description} onChange={e => setDescription(e.target.value)}
              placeholder="상세 내용을 입력하세요 (선택)"
              rows={2}
              className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all duration-150 resize-none"
            />
          </div>

          {/* Due Date + Priority */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 마감일</span>
              </label>
              <input
                type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}
                className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all duration-150 [color-scheme:dark]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">
                <span className="flex items-center gap-1"><Flag className="w-3 h-3" /> 우선순위</span>
              </label>
              <div className="flex gap-1">
                {priorities.map(p => (
                  <button key={p.value} type="button" onClick={() => setPriority(p.value)}
                    className={cn('flex-1 text-[10px] font-medium py-2 rounded-lg border transition-all duration-150', priority === p.value ? p.color : 'border-[var(--border-strong)] text-[var(--text-tertiary)] hover:border-[var(--border-strong)]')}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project */}
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">
              <span className="flex items-center gap-1"><FolderKanban className="w-3 h-3" /> 프로젝트</span>
            </label>
            <select
              value={projectId} onChange={e => setProjectId(e.target.value)}
              className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all duration-150"
            >
              {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">태그 (쉼표로 구분)</label>
            <input
              type="text" value={tags} onChange={e => setTags(e.target.value)}
              placeholder="디자인, UI, 백엔드"
              className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all duration-150"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg border border-[var(--border-strong)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] transition-all duration-150 active:scale-[0.98]">
              취소
            </button>
            <button type="submit"
              className="flex-1 px-4 py-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-medium transition-all duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2">
              {editingTask ? '수정 완료' : '추가하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}