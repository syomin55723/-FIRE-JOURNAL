/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  Wallet,
  ArrowRight,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Dashboard from './views/Dashboard';
import Journal from './views/Journal';
import Analysis from './views/Analysis';
import StockDetail from './views/StockDetail';
import Portfolio from './views/Portfolio';
import Watchlist from './views/Watchlist';

type ViewType = 'dashboard' | 'journal' | 'analysis' | 'stockDetail' | 'portfolio' | 'watchlist';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');

  const navItems = [
    { id: 'dashboard', label: '儀表板', icon: LayoutDashboard },
    { id: 'journal', label: '交易日誌', icon: BookOpen },
    { id: 'analysis', label: '數據分析', icon: BarChart3 },
    { id: 'stockDetail', label: '個股分析', icon: TrendingUp },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <Dashboard />;
      case 'journal': return <Journal />;
      case 'analysis': return <Analysis />;
      case 'stockDetail': return <StockDetail />;
      case 'portfolio': return <Portfolio />;
      case 'watchlist': return <Watchlist />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-on-surface overflow-hidden relative">
      {/* Mesh Gradient Blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] -right-[5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-3xl border-r border-white/5 flex flex-col justify-between flex-shrink-0 z-50">
        <div className="flex flex-col p-6 gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-primary shadow-lg shadow-primary/20 p-2 rounded-xl">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-headline font-bold text-lg leading-tight text-white">FIRE 股票成長</h1>
              <p className="text-slate-400 text-[10px] tracking-widest uppercase font-bold opacity-80">STOCKS JOURNAL</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as ViewType)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                  activeView === item.id 
                    ? "bg-white/10 text-white font-bold" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5", activeView === item.id && "fill-current/10")} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-4">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4 stroke-[3]" />
              <span className="text-xs uppercase tracking-wider">新增交易筆記</span>
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-white/5 flex flex-col gap-1">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">設定</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">支援</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* TopNavBar */}
        <header className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-xl border-b border-white/10 z-40">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="搜尋股票代號、策略..." 
                className="bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm w-80 focus:ring-1 focus:ring-primary/30 focus:bg-white/10 placeholder:text-slate-500"
              />
            </div>
            <nav className="flex gap-8 text-sm font-medium">
              <button 
                onClick={() => setActiveView('portfolio')}
                className={cn(
                  "transition-all border-b-2 py-1",
                  activeView === 'portfolio' ? "text-primary border-primary" : "text-slate-400 border-transparent hover:text-white"
                )}
              >
                投資組合
              </button>
              <button 
                onClick={() => setActiveView('watchlist')}
                className={cn(
                  "transition-all border-b-2 py-1",
                  activeView === 'watchlist' ? "text-primary border-primary" : "text-slate-400 border-transparent hover:text-white"
                )}
              >
                觀察名單
              </button>
              <button 
                onClick={() => setActiveView('analysis')}
                className={cn(
                  "transition-all border-b-2 py-1",
                  activeView === 'analysis' ? "text-primary border-primary" : "text-slate-400 border-transparent hover:text-white"
                )}
              >
                策略
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Wallet className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden ml-2 bg-slate-800">
               <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-y-auto p-10 relative scroll-smooth overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="max-w-7xl mx-auto w-full pb-12"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
