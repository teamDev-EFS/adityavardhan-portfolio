import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';

export default function LayoutDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--background)] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative z-10 w-60">
            <Sidebar onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center h-14 px-4 border-b border-[var(--border)] bg-[var(--surface-1)]">
          <button onClick={() => setMobileOpen(true)} className="p-2 rounded-lg hover:bg-[var(--surface-2)] text-[var(--text-secondary)] transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <span className="ml-3 text-sm font-bold text-[var(--text-primary)]">TaskFlow</span>
        </div>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}