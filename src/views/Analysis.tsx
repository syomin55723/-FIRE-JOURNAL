import React from 'react';
import { Lightbulb, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { STRATEGY_DATA, HEATMAP_DATA } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export default function Analysis() {
  return (
    <div className="flex flex-col gap-10">
      {/* Metrics Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 glass-card p-10 relative overflow-hidden flex flex-col justify-end min-h-[220px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-2">投資組合績效</h2>
          <div className="flex items-baseline gap-6">
            <span className="text-5xl font-light tracking-tight text-white">$242,508.12</span>
            <span className="text-emerald-400 text-lg font-medium">+12.4%</span>
          </div>
          <p className="text-slate-500 text-xs mt-6 leading-relaxed font-medium">過去30天內14種機構級策略的系統性成長回報。</p>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-2">交易勝率</p>
          <div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-light text-white leading-none">64.2%</h2>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '64.2%' }} />
            </div>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-2">獲利因子</p>
          <div>
            <h2 className="text-3xl font-light text-white leading-none">2.84</h2>
            <p className="text-[10px] text-slate-500 font-bold mt-4 opacity-40">機構基準：1.50</p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Strategy Bar Chart */}
        <div className="col-span-12 lg:col-span-8 glass-card p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">策略表現</h3>
              <p className="text-xs text-slate-400 font-medium">相對 Alpha 創造</p>
            </div>
            <div className="flex bg-white/5 p-1 rounded-full">
              <button className="px-6 py-2 text-[10px] font-bold bg-white/10 rounded-full text-white">每週</button>
              <button className="px-6 py-2 text-[10px] font-bold text-slate-500">每月</button>
            </div>
          </div>
          <div className="space-y-10">
            {STRATEGY_DATA.map((strategy) => (
              <div key={strategy.name}>
                <div className="flex justify-between text-xs font-bold mb-3 uppercase tracking-wider">
                  <span className="text-slate-300">{strategy.name}</span>
                  <span className={cn(strategy.profit > 0 ? "text-emerald-400" : "text-rose-400")}>
                    {strategy.profit > 0 ? `+$${strategy.profit.toLocaleString()}` : `-$${Math.abs(strategy.profit).toLocaleString()}`}
                  </span>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full flex items-center px-1 overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${strategy.percent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn(
                      "h-1 rounded-full",
                      strategy.profit > 0 ? "bg-emerald-500 shadow-lg shadow-emerald-500/20" : "bg-rose-500 shadow-lg shadow-rose-500/20"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk/Reward */}
        <div className="col-span-12 lg:col-span-4 glass-card p-10 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-8">風險與回報比例</h3>
          <div className="flex-1 flex flex-col justify-center items-center gap-12 relative">
             <div className="text-center relative">
                <div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center relative shadow-lg shadow-emerald-500/5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">平均獲利</span>
                  <span className="text-xl font-light text-white">$1,450</span>
                </div>
             </div>

             <div className="text-center relative">
                <div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center relative shadow-lg shadow-rose-500/5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">平均虧損</span>
                  <span className="text-xl font-light text-white">$620</span>
                </div>
             </div>
          </div>
          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-2xl text-center flex items-center justify-center gap-2">
             <span className="text-xs text-slate-400">期望值比例:</span>
             <span className="text-sm font-bold text-primary">2.33</span>
             <TrendingUp className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Heatmap */}
        <div className="col-span-12 glass-card p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white">活動熱力圖</h3>
              <p className="text-xs text-slate-400 font-medium opacity-60 mt-1">交易頻次與勝率分佈</p>
            </div>
            <div className="flex items-center gap-6">
               <div className="flex gap-4">
                  {[
                    { label: '虧損', color: 'bg-rose-500/50' },
                    { label: '中立', color: 'bg-white/5' },
                    { label: '獲利', color: 'bg-emerald-500/30' },
                    { label: '高 Alpha', color: 'bg-emerald-500' },
                  ].map(leg => (
                    <div key={leg.label} className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500">
                      <div className={cn("w-2 h-2 rounded-full", leg.color)} />
                      {leg.label}
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-14 lg:grid-cols-16 gap-3">
            {HEATMAP_DATA.map((day) => (
              <div 
                key={day.day}
                className={cn(
                  "aspect-square rounded-lg border border-white/5 transition-all cursor-pointer hover:scale-110 flex items-center justify-center relative group",
                  day.value === 0 && "bg-white/5",
                  day.value === 1 && "bg-primary/10",
                  day.value === 2 && "bg-primary/25",
                  day.value === 3 && "bg-primary/50 shadow-lg shadow-primary/10",
                  day.value === 4 && "bg-rose-500/20",
                )}
              >
                <span className="text-[10px] font-bold text-white opacity-20 group-hover:opacity-100 transition-opacity">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 glass-card p-10">
           <h3 className="text-lg font-semibold text-white mb-8">認知偏誤分析</h3>
           <div className="flex flex-wrap gap-3">
              {[
                { label: '耐心進場', stats: '勝率 88%', active: true },
                { label: '新聞催化劑', stats: '勝率 52%', active: false },
                { label: '收盤出場', stats: '勝率 74%', active: true },
                { label: '報復性交易', stats: '勝率 12%', error: true },
                { label: 'VWAP反彈', stats: '勝率 61%', active: false },
              ].map(tag => (
                <div key={tag.label} className={cn(
                   "px-6 py-3 rounded-full flex items-center gap-3 transition-colors",
                   tag.active ? "bg-primary/10 border border-primary/20" : 
                   tag.error ? "bg-rose-500/10 border border-rose-500/20" : "bg-white/5 border border-white/5"
                )}>
                  <span className={cn("text-xs font-bold", tag.active ? "text-primary" : tag.error ? "text-rose-400" : "text-slate-400")}>{tag.label}</span>
                  <span className="text-[10px] font-medium text-slate-500">{tag.stats}</span>
                </div>
              ))}
           </div>

           <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all scale-150 rotate-12">
                 <Lightbulb className="w-24 h-24" />
              </div>
              <div className="flex gap-6 items-start relative z-10">
                 <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                    <Lightbulb className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-white text-lg mb-2 tracking-tight">機構級操作洞見</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                       數據顯示當您的交易持有時間超過 4 小時，夏普值顯著提升。將每盤隨機交易次數減少 15%，可透過節省滑價成本提升 8% 的年度報酬率上限。
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="col-span-12 lg:col-span-5 glass-card p-10 flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-3 mb-8">
                 <Sparkles className="w-5 h-5 text-primary" />
                 <h3 className="text-lg font-semibold text-white">精選實戰案例</h3>
              </div>
              
              <div className="space-y-6">
                 {[
                   { title: 'NVDA 牛旗突破形態', type: '最佳執行', img: 'https://images.unsplash.com/photo-1611974717535-7c8faaff6823?w=200&h=200&fit=crop', color: 'text-primary' },
                   { title: 'TSLA 盤前消息失控', type: '關鍵教訓', img: 'https://images.unsplash.com/photo-1644335017052-167823528b74?w=200&h=200&fit=crop', color: 'text-rose-400' },
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center group cursor-pointer">
                       <div className="w-16 h-16 rounded-xl overflow-hidden glass-card p-0 group-hover:border-primary/50">
                          <img src={item.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" />
                       </div>
                       <div>
                          <span className={cn("text-[9px] font-bold uppercase tracking-widest mb-1 block", item.color)}>{item.type}</span>
                          <h4 className="font-bold text-slate-200 group-hover:text-white leading-snug transition-colors">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">Capture alpha with disciplined entry...</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <button className="w-full mt-10 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:bg-white/10 hover:text-white transition-all">
              檢視完整回顧檔案庫
           </button>
        </div>
      </div>
    </div>
  );
}
