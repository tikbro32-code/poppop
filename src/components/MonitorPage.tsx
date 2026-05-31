import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Terminal, Shield, Cpu, Globe, Smartphone, Zap } from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  event: string;
  device: string;
  mode: string;
  page: string;
  status: 'success' | 'pending' | 'error';
}

export default function MonitorPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const initialLogs: LogEntry[] = [
      {
        id: '1',
        timestamp: new Date().toLocaleTimeString(),
        event: 't0',
        device: 'mobile',
        mode: 'direct',
        page: 'homepage_hot',
        status: 'success'
      },
      {
        id: '2',
        timestamp: new Date().toLocaleTimeString(),
        event: 'page_view',
        device: 'mobile',
        mode: 'direct',
        page: 'homepage_hot',
        status: 'success'
      }
    ];
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const newEntry: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleTimeString(),
        event: Math.random() > 0.5 ? 'page_view' : 'collect',
        device: 'mobile',
        mode: 'direct',
        page: 'homepage_hot',
        status: Math.random() > 0.1 ? 'success' : 'pending'
      };
      setLogs(prev => [newEntry, ...prev].slice(0, 20));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-[var(--bg-dark)] p-6 scrollbar-hide text-[var(--text-main)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="text-[var(--primary-green)]" size={24} />
              <span className="text-[var(--primary-green)] font-black tracking-widest text-sm uppercase">System Monitor</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter">
              <span className="text-[var(--accent-2)]">Mon</span>
              <span className="text-[var(--accent-1)]">itoring</span>
            </h1>
          </div>
          <div className="flex items-center gap-4 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-2xl p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--primary-green)] animate-pulse" />
              <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Live Status: Active</span>
            </div>
            <div className="h-4 w-[1px] bg-[var(--border-color)]" />
            <div className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
              Uptime: <span className="text-[var(--text-main)]">99.9%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Globe, label: 'Network', value: 'Stable', color: 'var(--primary-green)' },
            { icon: Cpu, label: 'CPU Load', value: '12%', color: 'var(--primary-green)' },
            { icon: Shield, label: 'Security', value: 'Protected', color: 'var(--primary-green)' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-3xl p-6 hover:bg-[var(--border-color)] transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[var(--primary-green)]/10 rounded-2xl text-[var(--primary-green)] group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <Zap size={16} className="text-[var(--text-secondary)] opacity-50" />
              </div>
              <p className="text-[var(--text-secondary)] text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-[var(--text-main)]">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-[2rem] overflow-hidden shadow-2xl shadow-[var(--primary-green)]/5">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--sidebar-bg)]">
            <div className="flex items-center gap-3">
              <Terminal size={20} className="text-[var(--primary-green)]" />
              <span className="text-lg font-black tracking-tight">
                <span className="text-[var(--primary-green)]">Event </span>
                <span className="text-[var(--text-main)]">Collector</span>
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-[var(--primary-green)]/20 border border-[var(--primary-green)]/40" />
            </div>
          </div>

          <div className="p-6 font-mono text-sm overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-[var(--text-secondary)] opacity-70 uppercase text-[10px] tracking-[0.2em] font-bold">
                  <th className="pb-4 pl-4">Timestamp</th>
                  <th className="pb-4">Event</th>
                  <th className="pb-4">Device</th>
                  <th className="pb-4">Mode</th>
                  <th className="pb-4">Page Name</th>
                  <th className="pb-4 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {logs.map((log) => (
                    <motion.tr
                      key={log.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-[var(--sidebar-bg)] hover:bg-[var(--border-color)] transition-colors group"
                    >
                      <td className="py-4 pl-4 rounded-l-2xl text-[var(--text-secondary)]">{log.timestamp}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-[var(--primary-green)]/10 text-[var(--primary-green)] rounded-md font-bold text-xs">
                          {log.event}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2 text-[var(--text-main)]">
                          <Smartphone size={14} className="text-[var(--text-secondary)]" />
                          {log.device}
                        </div>
                      </td>
                      <td className="py-4 text-[var(--text-main)]">{log.mode}</td>
                      <td className="py-4 font-bold text-[var(--primary-green)]">{log.page}</td>
                      <td className="py-4 pr-4 rounded-r-2xl">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${log.status === 'success' ? 'bg-[var(--primary-green)]' : 'bg-yellow-500'}`} />
                          <span className={log.status === 'success' ? 'text-[var(--primary-green)]' : 'text-yellow-500'}>
                            {log.status}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 py-8 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="flex items-center gap-2">
            <Shield size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Real-time</span>
          </div>
        </div>
      </div>
    </div>
  );
}
