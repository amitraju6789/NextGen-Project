import React from 'react';
import { Search, Bell, Menu, Download, Sparkles } from 'lucide-react';
export default function Navbar({ toggleSidebar, searchTerm, setSearchTerm }) {
  return (
    <header className="h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-slate-400 hover:bg-slate-900 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative w-64 md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search transactions, customers, APIs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 placeholder-slate-500 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => alert('Exporting Financial Report (PDF)...')}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 text-xs font-semibold hover:bg-blue-600/20 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Report</span>
        </button>
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Latency: <strong className="text-emerald-400">24ms</strong></span>
        </div>
        <button className="relative p-2 text-slate-400 hover:bg-slate-900 rounded-lg transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        <div className="h-5 w-px bg-slate-800"></div>
        <div className="flex items-center gap-3 pl-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-[1px] shadow-md shadow-blue-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-blue-400">
              AS
            </div>
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-200 leading-tight">Amit Kumar Singh</p>
            <p className="text-[10px] text-slate-400 font-medium">Head of Engineering</p>
          </div>
        </div>
      </div>
    </header>
  );
}
