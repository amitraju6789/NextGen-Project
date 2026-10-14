import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import KpiCards from './components/KpiCards';
import DashboardCharts from './components/DashboardCharts';
import OrdersTable from './components/OrdersTable';
import AddProductForm from './components/AddProductForm';
import SystemLogs from './components/SystemLogs';
export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <KpiCards />
            <DashboardCharts />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <OrdersTable searchTerm={searchTerm} />
              </div>
              <div>
                <SystemLogs />
              </div>
            </div>
            <AddProductForm />
          </>
        );
      case 'orders':
        return (
          <div className="space-y-6">
            <OrdersTable searchTerm={searchTerm} />
          </div>
        );
      case 'products':
        return (
          <div className="space-y-6">
            <AddProductForm />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <DashboardCharts />
          </div>
        );
      case 'customers':
        return (
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
            <h2 className="text-lg font-bold text-slate-100">Enterprise Customer Accounts</h2>
            <p className="text-xs text-slate-400">Manage high-net-worth accounts, VIP tiers, and SLA permissions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-200 text-sm">Amit Kumar Singh</p>
                  <p className="text-xs text-slate-400">amit.singh@dev.io • Enterprise Tier</p>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  SLA Active
                </span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-200 text-sm">Priya Sharma</p>
                  <p className="text-xs text-slate-400">priya.s@techcorp.in • Pro Tier</p>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
            <h2 className="text-lg font-bold text-slate-100">Enterprise API & Gateway Settings</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-xs text-slate-300">
                <input type="checkbox" defaultChecked className="rounded border-slate-700 bg-slate-900" />
                Enable automated Webhook alerts via Slack / Telegram
              </label>
              <label className="flex items-center gap-3 text-xs text-slate-300">
                <input type="checkbox" defaultChecked className="rounded border-slate-700 bg-slate-900" />
                Enforce strict 2FA requirement for all administrative logins
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex font-sans">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-100 capitalize">
                {activeTab === 'dashboard' ? 'Executive Overview' : activeTab}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time operational metrics and enterprise telemetry
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-semibold text-emerald-400">Live Gateway Sync</span>
            </div>
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
