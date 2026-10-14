import React, { useState } from 'react';
import { 
  Rocket, 
  GitBranch, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Server, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Play, 
  RefreshCw 
} from 'lucide-react';

export default function App() {
  const [pipelineState, setPipelineState] = useState('idle'); // 'idle' | 'running' | 'success'
  const [activeStep, setActiveStep] = useState(0);
  const [logs, setLogs] = useState([
    '[SYSTEM] Production Deployment & CI/CD Pipeline initialized.',
    '[ENVIRONMENT] Target: Vercel Production & Edge Network.',
    '[MONITOR] Ready to trigger GitHub Workflows.'
  ]);

  const pipelineSteps = [
    { title: 'Code Checkout & Setup', icon: GitBranch, detail: 'actions/checkout@v4 & setup-node@v4 (Node 20.x)' },
    { title: 'Dependency Audit & Lint', icon: ShieldCheck, detail: 'npm ci --prefer-offline && oxlint / eslint check' },
    { title: 'Multi-Project Build', icon: Cpu, detail: 'Vite production bundle & assets tree shaking' },
    { title: 'Containerization Check', icon: Server, detail: 'Multi-stage Dockerfile verified & healthcheck configured' },
    { title: 'Edge Deployment', icon: Globe, detail: 'Vercel Edge Network deploy with SSL & CDN caching' }
  ];

  const weeksList = [
    { week: 'Week 1', name: 'HTML5 Semantic Portfolio', status: 'Deployed', path: '/week1' },
    { week: 'Week 2', name: 'InnovateX Responsive Landing', status: 'Deployed', path: '/week2' },
    { week: 'Week 3', name: 'TaskMaster DOM Operations', status: 'Deployed', path: '/week3' },
    { week: 'Week 4', name: 'Expense Tracker with LocalStorage', status: 'Deployed', path: '/week4' },
    { week: 'Week 5', name: 'React Task Manager', status: 'Deployed', path: '/week5' },
    { week: 'Week 6', name: 'React Hooks Expense Tracker', status: 'Deployed', path: '/week6' },
    { week: 'Week 7', name: 'Multi-Page Router Blog App', status: 'Deployed', path: '/week7' },
    { week: 'Week 8', name: 'CineSearch OMDb Explorer', status: 'Deployed', path: '/week8' },
    { week: 'Week 9', name: 'Modern E-Commerce Cart & Modal', status: 'Deployed', path: '/week9' },
    { week: 'Week 10', name: 'NEXAFLOW Enterprise Admin Dashboard', status: 'Live Vercel', path: '/week10' },
    { week: 'Week 11', name: 'Secure Auth & Registration System', status: 'Deployed', path: '/week11' },
    { week: 'Week 12', name: 'Production Deployment & CI/CD', status: 'Active (Current)', path: '/week12' },
    { week: 'Week 13', name: 'Node.js Core HTTP Server', status: 'Backend Ready', path: '/week13' },
    { week: 'Week 14', name: 'Express.js Task CRUD REST API', status: 'Backend Ready', path: '/week14' },
    { week: 'Week 15', name: 'MongoDB & Mongoose Task API', status: 'Backend Ready', path: '/week15' }
  ];

  const triggerPipeline = () => {
    if (pipelineState === 'running') return;
    setPipelineState('running');
    setActiveStep(1);
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] 🚀 GitHub Workflow triggered: deploy.yml`]);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < pipelineSteps.length) {
          const currentStepInfo = pipelineSteps[prev];
          setLogs((l) => [
            ...l,
            `[${new Date().toLocaleTimeString()}] ✓ Step ${prev}: ${currentStepInfo.title} completed.`
          ]);
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setPipelineState('success');
          setLogs((l) => [
            ...l,
            `[${new Date().toLocaleTimeString()}] 🎉 Pipeline executed successfully! Live on Production CDN.`
          ]);
          return prev;
        }
      });
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
              <Rocket className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">NextGen Production Deployment Hub</h1>
              <p className="text-xs text-slate-400">Week 12 — GitHub Actions CI/CD Workflows, Vercel & Containerization</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={triggerPipeline}
            disabled={pipelineState === 'running'}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg font-medium text-xs transition"
          >
            {pipelineState === 'running' ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Running CI/CD Pipeline...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Simulate Workflow Run
              </>
            )}
          </button>
        </div>
      </header>

      {/* Metrics Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400">Target Environment</span>
          <p className="text-lg font-bold text-white mt-1">Production (Vercel Edge)</p>
          <span className="text-[11px] text-emerald-400 font-medium">99.99% Target Uptime</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400">CI/CD Engine</span>
          <p className="text-lg font-bold text-white mt-1">GitHub Actions</p>
          <span className="text-[11px] text-blue-400 font-medium">Automated PR & Push Triggers</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400">Monorepo Projects</span>
          <p className="text-lg font-bold text-white mt-1">15 Weekly Modules</p>
          <span className="text-[11px] text-purple-400 font-medium">Weeks 1 to 15 Audited & Verified</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-slate-400">Container Ready</span>
          <p className="text-lg font-bold text-white mt-1">Docker & Nginx</p>
          <span className="text-[11px] text-cyan-400 font-medium">Multi-Stage Dockerfile Included</span>
        </div>
      </section>

      {/* CI/CD Pipeline Visualizer */}
      <section className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">CI/CD Workflow Pipeline Matrix</h2>
            <p className="text-xs text-slate-400">Live visualization of GitHub Actions build matrix</p>
          </div>
          <span className={`px-2.5 py-1 text-xs rounded-full font-bold ${
            pipelineState === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
            pipelineState === 'running' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse' :
            'bg-slate-800 text-slate-300'
          }`}>
            {pipelineState === 'success' ? 'Passed' : pipelineState === 'running' ? 'In Progress' : 'Idle'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isDone = activeStep > idx;
            const isCurrent = activeStep === idx + 1 && pipelineState === 'running';

            return (
              <div 
                key={idx}
                className={`p-3.5 rounded-lg border text-left transition-all ${
                  isDone ? 'bg-emerald-950/20 border-emerald-500/40' :
                  isCurrent ? 'bg-blue-950/30 border-blue-500/60 shadow-lg shadow-blue-500/10' :
                  'bg-slate-950/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isDone ? 'text-emerald-400' : isCurrent ? 'text-blue-400' : 'text-slate-500'}`} />
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                  ) : (
                    <span className="text-[10px] text-slate-500 font-mono">0{idx + 1}</span>
                  )}
                </div>
                <h3 className="text-xs font-semibold text-white">{step.title}</h3>
                <p className="text-[10px] text-slate-400 mt-1 leading-tight">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Terminal Logs & Weekly Module Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Terminal Stream */}
        <section className="lg:col-span-2 p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono font-medium text-slate-300">pipeline-telemetry.log</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">STREAMING</span>
          </div>
          <div className="flex-1 bg-slate-950 p-3 rounded-lg font-mono text-xs text-slate-300 space-y-1.5 overflow-y-auto max-h-64 border border-slate-850">
            {logs.map((log, index) => (
              <div key={index} className="leading-relaxed">
                <span className="text-blue-400">&gt;</span> {log}
              </div>
            ))}
          </div>
        </section>

        {/* Monorepo Weekly Status Summary */}
        <section className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col">
          <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            Monorepo Coursework Matrix (15 Weeks)
          </h2>
          <div className="space-y-2 overflow-y-auto max-h-64 pr-1">
            {weeksList.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800/60 text-xs">
                <div>
                  <span className="font-semibold text-slate-200">{item.week}</span>
                  <p className="text-[10px] text-slate-400 truncate max-w-[150px]">{item.name}</p>
                </div>
                <span className="px-2 py-0.5 text-[9px] rounded font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
