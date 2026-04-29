import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task, Project } from '../types';
import { mockTasks } from '../data/tasks';
import { mockProjects } from '../data/projects';

interface TaskContextType {
  tasks: Task[];
  projects: Project[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'taskCount' | 'completedCount'>) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = { ...task, id: `t${Date.now()}`, createdAt: new Date().toISOString().split('T')[0] };
    setTasks(prev => [newTask, ...prev]);
    setProjects(prev => prev.map(p => p.id === task.projectId ? { ...p, taskCount: p.taskCount + 1 } : p));
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const deleteTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    setTasks(prev => prev.filter(t => t.id !== id));
    if (task) {
      setProjects(prev => prev.map(p => p.id === task.projectId ? {
        ...p,
        taskCount: Math.max(0, p.taskCount - 1),
        completedCount: task.completed ? Math.max(0, p.completedCount - 1) : p.completedCount
      } : p));
    }
  };

  const toggleTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    const newCompleted = !task.completed;
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: newCompleted } : t));
    setProjects(prev => prev.map(p => p.id === task.projectId ? {
      ...p,
      completedCount: newCompleted ? p.completedCount + 1 : Math.max(0, p.completedCount - 1)
    } : p));
  };

  const addProject = (project: Omit<Project, 'id' | 'createdAt' | 'taskCount' | 'completedCount'>) => {
    const newProject: Project = { ...project, id: `p${Date.now()}`, createdAt: new Date().toISOString().split('T')[0], taskCount: 0, completedCount: 0 };
    setProjects(prev => [...prev, newProject]);
  };

  return (
    <TaskContext.Provider value={{ tasks, projects, addTask, updateTask, deleteTask, toggleTask, addProject }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTaskContext must be used within TaskProvider');
  return ctx;
};