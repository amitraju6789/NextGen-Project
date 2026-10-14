import React from 'react';
import { LayoutDashboard, ShoppingBag, Users, BarChart3, Settings, Package, LogOut, ShieldCheck, Cpu } from 'lucide-react';
export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  const navItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard, badge: 'Live' },
    { id: 'orders', label: 'Transactions & Orders', icon: ShoppingBag, count: 5 },
    { id: 'products', label: 'Catalog Management', icon: Package },
    { id: 'analytics', label: 'Revenue Analytics', icon: BarChart3 },
    { id: 'customers', label: 'Customer CRM', icon: Users },
    { id: 'settings', label: 'System Preferences', icon: Settings },
  ];
  return (
    <aside
      className={`fixed lg:static top-0 left-0 z-40 h-screen w-72 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/80 flex flex-col transition-all duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-wide">
              NEXAFLOW
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">v2.4 Enterprise</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Core Workspaces
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-600/20 ring-1 ring-blue-400/30'
                  : 'text-slate-400 hover:bg-slate-900/80 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.badge}
                </span>
              )}
              {item.count && (
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300">
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800/80 space-y-3">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div className="text-[11px]">
            <p className="font-semibold text-slate-200">System Protected</p>
            <p className="text-slate-500">2FA Active • SSL Encrypted</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all">
          <LogOut className="w-4 h-4" />
          <span>Terminate Session</span>
        </button>
      </div>
    </aside>
  );
}
