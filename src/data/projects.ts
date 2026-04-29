import { Project } from '../types';

export const mockProjects: Project[] = [
  { id: 'p1', name: '프로덕트 디자인', color: '#8B5CF6', icon: 'Palette', taskCount: 5, completedCount: 2, createdAt: '2024-06-01' },
  { id: 'p2', name: '백엔드 개발', color: '#10B981', icon: 'Code2', taskCount: 4, completedCount: 1, createdAt: '2024-06-05' },
  { id: 'p3', name: '팀 운영', color: '#F59E0B', icon: 'Users', taskCount: 4, completedCount: 1, createdAt: '2024-06-10' }
];