import React from 'react';
import { IndianRupee, ShoppingBag, Zap, Activity } from 'lucide-react';
import { KPI_DATA } from '../data/dashboardData';
const iconMap = {
  IndianRupee,
  ShoppingBag,
  Zap,
  Activity,
};
export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {KPI_DATA.map((kpi) => {
        const Icon = iconMap[kpi.icon] || Activity;
        return (
          <div
            key={kpi.id}
            className="p-5 bg-slate-950 border border-slate-800/80 rounded-xl shadow-sm hover:border-slate-700/80 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {kpi.title}
              </span>
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-100">{kpi.value}</h3>
                <p className="text-[10px] text-slate-500 mt-0.5">{kpi.subtext}</p>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded ${
                  kpi.isPositive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}
              >
                {kpi.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
