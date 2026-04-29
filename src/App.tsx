import { Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import MyTasks from './pages/MyTasks';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Projects from './pages/Projects';
import Completed from './pages/Completed';
import Settings from './pages/Settings';

export default function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<MyTasks />} />
          <Route path="today" element={<Today />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="projects" element={<Projects />} />
          <Route path="completed" element={<Completed />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </TaskProvider>
  );
}