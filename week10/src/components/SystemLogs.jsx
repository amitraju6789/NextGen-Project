import React from 'react';
import { Terminal, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { SYSTEM_LOGS } from '../data/dashboardData';
export default function SystemLogs() {
  return (
    <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-sky-400" />
          <h3 className="text-sm font-bold text-slate-100">Live Infrastructure & Event Stream</h3>
        </div>
        <span className="text-[10px] font-mono text-slate-500">AWS ap-south-1 • Healthy</span>
      </div>
      <div className="space-y-2.5 font-mono text-xs">
        {SYSTEM_LOGS.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50 hover:border-slate-700 transition-colors"
          >
            <span className="text-[10px] text-slate-500 pt-0.5">{log.time}</span>
            <div className="flex-1 text-slate-300">{log.event}</div>
            {log.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
            {log.type === 'warning' && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
            {log.type === 'info' && <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}
