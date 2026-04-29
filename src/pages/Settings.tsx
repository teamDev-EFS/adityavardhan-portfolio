import React, { useState } from 'react';
import { Settings as Settings, User, Bell, Palette, Shield, LogOut, Check } from 'lucide-react';
import { mockUser } from '../data/user';
import { cn } from '../utils/helpers';

type Tab = 'profile' | 'notifications' | 'appearance' | 'security';

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'profile', label: '프로필', icon: User },
  { id: 'notifications', label: '알림', icon: Bell },
  { id: 'appearance', label: '화면', icon: Palette },
  { id: 'security', label: '보안', icon: Shield },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({ email: true, push: false, weekly: true, overdue: true });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="w-5 h-5 text-[var(--primary)]" />
        <h1 className="text-lg font-bold text-[var(--text-primary)]">설정</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Tabs */}
        <div className="sm:w-40 flex-shrink-0">
          <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-1.5 flex sm:flex-col gap-0.5">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 flex-1 sm:flex-none',
                  activeTab === tab.id
                    ? 'bg-[var(--primary-subtle)] text-[var(--primary)] font-medium'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]'
                )}>
                <tab.icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-5">
          {activeTab === 'profile' && (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-[var(--border)]">
                <img src={mockUser.avatar} alt={mockUser.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{mockUser.name}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">{mockUser.role}</p>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">이름</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">이메일</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">직책</label>
                <input type="text" defaultValue={mockUser.role}
                  className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all" />
              </div>
              <div className="flex items-center gap-3 pt-1">
                <button type="submit"
                  className={cn('flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 active:scale-[0.98]', saved ? 'bg-emerald-500 text-white' : 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white')}>
                  {saved ? <><Check className="w-4 h-4" />저장됨</> : '변경사항 저장'}
                </button>
              </div>
            </form>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">알림 설정</h2>
              {[
                { key: 'email' as const, label: '이메일 알림', desc: '마감일 및 업데이트를 이메일로 받기' },
                { key: 'push' as const, label: '푸시 알림', desc: '브라우저 푸시 알림 활성화' },
                { key: 'weekly' as const, label: '주간 요약', desc: '매주 월요일 주간 리포트 받기' },
                { key: 'overdue' as const, label: '기한 초과 알림', desc: '할 일 기한 초과 시 즉시 알림' },
              ].map(item => (
                <div key={item.key} className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.label}</p>
                    <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                    className={cn('relative w-10 h-5.5 h-6 rounded-full transition-all duration-200 flex-shrink-0', notifications[item.key] ? 'bg-[var(--primary)]' : 'bg-[var(--surface-3)]')}>
                    <span className={cn('absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200', notifications[item.key] ? 'left-5' : 'left-0.5')} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">화면 설정</h2>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-2">테마</label>
                <div className="flex gap-2">
                  {['다크 모드', '라이트 모드', '시스템'].map(theme => (
                    <button key={theme}
                      className={cn('px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-150', theme === '다크 모드' ? 'border-[var(--primary)] bg-[var(--primary-subtle)] text-[var(--primary)]' : 'border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--surface-2)]')}>
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-2">언어</label>
                <select className="bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] transition-all">
                  <option>한국어</option>
                  <option>English</option>
                  <option>日本語</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">보안 설정</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">현재 비밀번호</label>
                  <input type="password" placeholder="••••••••"
                    className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5">새 비밀번호</label>
                  <input type="password" placeholder="••••••••"
                    className="w-full bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all" />
                </div>
                <button className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-medium rounded-lg transition-all duration-150 active:scale-[0.98]">비밀번호 변경</button>
              </div>
              <div className="pt-4 border-t border-[var(--border)]">
                <h3 className="text-sm font-medium text-red-400 mb-2">위험 구역</h3>
                <button className="flex items-center gap-2 px-4 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm font-medium rounded-lg transition-all duration-150">
                  <LogOut className="w-4 h-4" />
                  계정에서 로그아웃
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}