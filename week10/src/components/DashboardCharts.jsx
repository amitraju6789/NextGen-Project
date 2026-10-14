import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { REVENUE_CHART_DATA, CATEGORY_CHART_DATA } from '../data/dashboardData';
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 p-5 bg-slate-950 border border-slate-800 rounded-xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-100">Revenue Overview</h3>
            <p className="text-xs text-slate-400">Monthly sales performance & order trends</p>
          </div>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE_CHART_DATA}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                itemStyle={{ color: '#f8fafc' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl">
        <h3 className="text-base font-semibold text-slate-100 mb-1">Sales by Category</h3>
        <p className="text-xs text-slate-400 mb-4">Distribution across inventory</p>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={CATEGORY_CHART_DATA}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {CATEGORY_CHART_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {CATEGORY_CHART_DATA.map((cat, index) => (
            <div key={cat.name} className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
              <span className="truncate">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
