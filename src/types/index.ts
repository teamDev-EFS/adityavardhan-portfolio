export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in_progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  completed: boolean;
  projectId: string;
  createdAt: string;
  tags: string[];
}

export interface Project {
  id: string;
  name: string;
  color: string;
  icon: string;
  taskCount: number;
  completedCount: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}