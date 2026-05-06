import React from 'react';
import { Search, Plus, Bell, Star, ArrowUpRight, ArrowDownRight, TrendingUp, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const WATCHLIST_STOCKS = [
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.22, change: 1.45, signal: '強勢突破', color: 'emerald' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 154.30, change: -0.82, signal: '回測支撐', color: 'rose' },
  { symbol: 'META', name: 'Meta Platforms', price: 484.10, change: 2.10, signal: '量價俱增', color: 'emerald' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: 162.30, change: -3.40, signal: '轉向邊緣', color: 'rose' },
  { symbol: 'COST', name: 'Costco Wholesale', price: 712.10, change: 0.15, signal: '高檔盤整', color: 'indigo' },
  { symbol: 'ASML', name: 'ASML Holding', price: 924.50, change: 1.10, signal: '季線支撐', color: 'emerald' },
];

export default function Watchlist() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-white font-headline">觀察名單</h2>
          <p className="text-slate-400 text-sm font-medium mt-1">追蹤下一波 Alpha 機會與技術面信號</p>
        </div>
        <div className="flex gap-4">
           <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-slate-400 hover:text-white transition-all">
              <Plus className="w-4 h-4" />
              <span>新增標的</span>
           </button>
           <button className="flex items-center gap-2 px-6 py-2.5 bg-primary rounded-full text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <Star className="w-4 h-4" />
              <span>儲存清單</span>
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WATCHLIST_STOCKS.map((stock) => (
          <div key={stock.symbol} className="glass-card p-8 group hover:bg-white/10 transition-all relative overflow-hidden">
            <div className={cn(
              "absolute top-0 right-0 w-32 h-32 blur-3xl opacity-5 -mr-16 -mt-16",
              stock.color === 'emerald' ? "bg-emerald-500" : stock.color === 'rose' ? "bg-rose-500" : "bg-indigo-500"
            )} />
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-primary transition-colors uppercase">{stock.symbol}</h3>
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-bold uppercase",
                    stock.color === 'emerald' ? "bg-emerald-500/10 text-emerald-400" : stock.color === 'rose' ? "bg-rose-500/10 text-rose-400" : "bg-indigo-500/10 text-indigo-400"
                  )}>
                    {stock.signal}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stock.name}</p>
              </div>
              <button className="p-2 bg-white/5 rounded-xl border border-white/10 text-slate-500 hover:text-white transition-all">
                <Bell className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">即時報價</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light text-white">${stock.price.toFixed(2)}</span>
                  <div className={cn(
                    "flex items-center text-xs font-bold",
                    stock.change >= 0 ? "text-emerald-400" : "text-rose-400"
                  )}>
                    {stock.change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {Math.abs(stock.change)}%
                  </div>
                </div>
              </div>
              <div className="h-10 w-24 opacity-20 flex items-end gap-1">
                 {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-full rounded-t-sm",
                        stock.color === 'emerald' ? "bg-emerald-500" : "bg-rose-500"
                      )} 
                      style={{ height: `${Math.random() * 100}%` }} 
                    />
                 ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
               <button className="flex-1 py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:bg-white/10 hover:text-white transition-all">詳情</button>
               <button className="flex-1 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all">交易</button>
            </div>
          </div>
        ))}

        {/* Empty State / Add New */}
        <button className="glass-card p-10 border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all text-slate-500 hover:text-white group">
          <div className="w-16 h-16 rounded-full border border-dashed border-white/10 flex items-center justify-center group-hover:scale-110 transition-all group-hover:border-primary">
            <Plus className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest">新增至觀察名單</p>
        </button>
      </div>

      {/* Market Sentiment Insight */}
      <section className="glass-card p-10 bg-indigo-600/5 border-indigo-500/10 flex items-start gap-8">
        <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400">
          <TrendingUp className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-headline font-bold text-white mb-2">Alpha 偵測報告</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            偵測到科技類股中 4 個觀察標的出現相對強弱指標 (RSI) 的背離特徵，且成交量分佈呈現吸籌跡象。建議密切關注 META 與 AMZN 的跳空缺口支撐。
          </p>
          <div className="flex gap-10 mt-6 items-center">
             <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">市場恐懼指數</span>
                <span className="text-lg font-bold text-white">VIX: 12.84</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">情緒權重</span>
                <span className="text-lg font-bold text-emerald-400">貪婪模式</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
