import { Task, Project } from '../types';
import { formatDate, isOverdue, priorityColor, priorityDot, priorityLabel } from '../utils/helpers';
import { Calendar, Tag, Trash2, Edit3, Circle, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/helpers';

interface TaskCardProps {
  task: Task;
  project?: Project;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, project, onToggle, onEdit, onDelete }: TaskCardProps) {
  const overdue = isOverdue(task.dueDate, task.completed);

  return (
    <div className={cn(
      'group flex items-start gap-3 px-4 py-3 rounded-lg border transition-all duration-150 hover:bg-[var(--surface-2)]',
      task.completed ? 'border-transparent opacity-50' : 'border-transparent hover:border-[var(--border-strong)]'
    )}>
      {/* Checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className="mt-0.5 flex-shrink-0 w-4 h-4 transition-all duration-150 hover:scale-110"
      >
        {task.completed
          ? <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
          : <Circle className="w-4 h-4 text-[var(--text-tertiary)] hover:text-[var(--primary)]" />}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={cn('text-sm font-medium truncate', task.completed ? 'line-through text-[var(--text-tertiary)]' : 'text-[var(--text-primary)]')}>
          {task.title}
        </p>
        {task.description && (
          <p className="text-xs text-[var(--text-tertiary)] mt-0.5 truncate">{task.description}</p>
        )}
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {/* Priority */}
          <span className={cn('inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full', priorityColor(task.priority))}>
            <span className={cn('w-1 h-1 rounded-full', priorityDot(task.priority))} />
            {priorityLabel(task.priority)}
          </span>
          {/* Due Date */}
          {task.dueDate && (
            <span className={cn('inline-flex items-center gap-1 text-[10px] font-medium', overdue ? 'text-red-400' : 'text-[var(--text-tertiary)]')}>
              <Calendar className="w-3 h-3" />
              {formatDate(task.dueDate)}
            </span>
          )}
          {/* Project */}
          {project && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[var(--text-tertiary)]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
              {project.name}
            </span>
          )}
          {/* Tags */}
          {task.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--surface-3)] text-[var(--text-tertiary)]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <button
          onClick={() => onEdit(task)}
          className="p-1 rounded-md hover:bg-[var(--surface-3)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <Edit3 className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-1 rounded-md hover:bg-red-500/10 text-[var(--text-tertiary)] hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}