import React from 'react';
import { Calendar, ListFilter, ChevronDown, Check } from 'lucide-react';
import { MOCK_ENTRIES, StockEntry } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export default function Journal() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white font-headline">交易日誌歸檔</h1>
          <p className="text-slate-400 text-sm mt-2">Project overview for the selected market cycle</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="text-slate-200">所有日期</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
            <ListFilter className="w-4 h-4 text-slate-400" />
            <span className="text-slate-200">篩選條件</span>
          </button>
        </div>
      </header>

      {/* Filter Chips */}
      <div className="flex gap-2 pb-2 overflow-x-auto selection-none">
        {['全部紀錄', '錯失恐懼 (FOMO)', '技術面突破', '報復性交易', '耐心進場', '超賣反彈'].map((tag, i) => (
          <button 
            key={tag}
            className={cn(
              "px-6 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border",
              i === 0 
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative space-y-16">
        <div className="absolute left-[23.5px] top-4 bottom-0 w-px bg-white/5 -z-10" />
        
        <div className="space-y-8">
           <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/10 flex items-center justify-center relative z-10">
              <span className="text-xs font-bold text-white">24</span>
            </div>
            <h3 className="font-semibold text-lg text-white">2023年10月</h3>
          </div>

          <div className="space-y-6 ml-6">
            {MOCK_ENTRIES.filter(e => e.execution).map((entry) => (
              <JournalItem key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>

      <footer className="py-12 flex flex-col items-center gap-6">
        <div className="w-16 h-1 bg-surface-high/40 rounded-full" />
        <p className="text-xs font-black uppercase tracking-[0.4em] text-on-surface-variant/40">日誌紀錄結束</p>
        <button className="text-primary font-black text-sm flex items-center gap-2 hover:opacity-80">
          <ChevronDown className="w-4 h-4" />
          載入 Q3 歷史紀錄
        </button>
      </footer>
    </div>
  );
}

const JournalItem: React.FC<{ entry: StockEntry }> = ({ entry }) => {
  return (
    <article className={cn(
      "ml-12 glass-card p-8 hover:bg-white/10 transition-all group overflow-hidden relative",
      entry.change > 0 ? "border-l-emerald-500/50" : "border-l-rose-500/50"
    )}>
      {/* Accent Background Blob */}
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16 opacity-10 pointer-events-none",
        entry.change > 0 ? "bg-emerald-500" : "bg-rose-500"
      )} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-light text-white tracking-tight uppercase">{entry.symbol}</span>
            <span className={cn(
              "px-3 py-0.5 rounded-full text-[10px] font-bold uppercase border",
              entry.type === 'buy' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border-rose-500/20"
            )}>
              {entry.type === 'buy' ? '買進' : '賣出'}
            </span>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">時間: 14:32 EST</p>
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag: any) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-slate-400 font-semibold group-hover:border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center border-x border-white/5 px-8">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-3">交易執行</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">進場</span>
              <span className="text-slate-200 font-medium">${entry.execution.entry}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">出場</span>
              <span className="text-slate-200 font-medium">${entry.execution.exit}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center text-center">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">損益表現</p>
          <div className={cn(
            "text-3xl font-light",
            entry.execution.pnlPercent > 0 ? "text-emerald-400" : "text-rose-400"
          )}>
            {entry.execution.pnlPercent > 0 ? `+${entry.execution.pnlPercent}%` : `${entry.execution.pnlPercent}%`}
          </div>
          <div className="text-xs font-medium text-slate-500 mt-1">{entry.execution.pnl}</div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-center pl-8">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-3">心理狀態與筆記</p>
          <p className="text-sm text-slate-400 leading-relaxed italic opacity-80 line-clamp-3">
            "{entry.psychology}"
          </p>
        </div>
      </div>
    </article>
  );
}
