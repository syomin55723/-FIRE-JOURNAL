import React from 'react';
import { 
  ChevronRight, 
  Search, 
  Verified, 
  ArrowDown, 
  ArrowUp, 
  Save, 
  PlusCircle, 
  MinusCircle,
  TrendingUp,
  Layout,
  Bell
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function StockDetail() {
  const checklist = [
    { label: '50日均線大於200日均線', active: true },
    { label: '相對強弱指標 > 80', active: true },
    { label: '距離52週高點不到5%', active: false },
    { label: '成交量分佈支撐', active: true },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Breadcrumbs & Header */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3 text-slate-500 text-sm font-semibold">
           <Layout className="w-4 h-4" />
           <ChevronRight className="w-3 h-3 opacity-30" />
           <span className="hover:text-white cursor-pointer transition-colors">個股詳情與分析</span>
           <ChevronRight className="w-3 h-3 opacity-30" />
           <span className="text-primary">台積電 (2330)</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
           <div className="space-y-2">
              <div className="flex items-center gap-4">
                 <h2 className="text-5xl font-light tracking-tight text-white">台積電 (2330)</h2>
                 <span className="px-4 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold uppercase tracking-wider">PRIMARY FOCUS</span>
              </div>
              <p className="text-xl text-slate-400 font-medium">台灣積體電路製造 • 半導體產業龍頭</p>
           </div>
           
           <div className="text-right flex flex-col items-end">
              <div className="flex items-baseline gap-4">
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] opacity-40">當前股價</span>
                 <span className="text-5xl font-light tracking-tight text-white">$950.00</span>
                 <span className="text-emerald-400 text-2xl font-medium">+2.5%</span>
              </div>
              <p className="text-slate-500 text-sm font-medium mt-2 opacity-60">盤中即時報價 • 2024年6月14日</p>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Chart View */}
        <div className="col-span-12 lg:col-span-8 glass-card p-10 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <TrendingUp className="w-48 h-48" />
           </div>
           
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-20 relative z-10">
              <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 w-fit">
                 {['1天', '1週', '1個月', '1年', '全部'].map((t, i) => (
                    <button 
                      key={t}
                      className={cn(
                        "px-4 md:px-6 py-2 rounded-xl text-xs font-bold transition-all",
                        i === 0 ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                      )}
                    >
                      {t}
                    </button>
                 ))}
              </div>
              <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" /> 買進信號
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]" /> 賣出控制
                 </div>
              </div>
           </div>

           {/* Price Action Simulation */}
           <div className="h-[400px] w-full bg-white/5 rounded-3xl p-8 relative flex items-end gap-3 px-12 border border-white/5">
              <div className="absolute inset-0 flex flex-col justify-between py-12 px-6 pointer-events-none">
                 {[1,2,3].map(i => <div key={i} className="w-full h-px bg-white/5" />)}
              </div>
              
              <div className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                 <div className="w-full bg-rose-500/10 h-[30%] rounded-sm" />
                 <div className="w-full bg-rose-500/40 h-[15%] rounded-sm" />
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                 <div className="w-full bg-emerald-500/10 h-[25%] rounded-sm" />
                 <div className="w-full bg-emerald-500/40 h-[20%] rounded-sm" />
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                 <div className="w-full bg-emerald-500/10 h-[40%] rounded-sm" />
                 <div className="w-full bg-emerald-500/40 h-[30%] rounded-sm" />
                 <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg shadow-emerald-500/20 mb-1">買進</span>
                    <div className="w-px h-6 bg-emerald-500/40" />
                 </div>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                 <div className="w-full bg-white/5 h-[35%] rounded-sm" />
                 <div className="w-full bg-white/10 h-[20%] rounded-sm" />
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                 <div className="w-full bg-emerald-500/10 h-[45%] rounded-sm" />
                 <div className="w-full bg-emerald-500/40 h-[25%] rounded-sm" />
                 <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg shadow-rose-500/20 mb-1">減碼</span>
                    <div className="w-px h-6 bg-rose-500/40" />
                 </div>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                 <div className="w-full bg-primary/20 h-[50%] rounded-sm" />
                 <div className="w-full bg-primary/60 h-[35%] rounded-sm" />
              </div>
           </div>

           <div className="mt-8 flex justify-between text-[10px] font-black text-on-surface-variant/40 tracking-[0.3em] uppercase">
             <span>2024年1月</span>
             <span>2024年2月</span>
             <span>2024年3月</span>
             <span>2024年4月</span>
             <span>2024年5月</span>
             <span>2024年6月</span>
           </div>
        </div>

        {/* Sidebar Tools */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
           <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-8">
                 <Verified className="w-5 h-5 text-primary" />
                 <h3 className="text-sm font-semibold text-white tracking-tight">策略契合度分析</h3>
              </div>
              <div className="space-y-4">
                 {checklist.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 group cursor-pointer">
                       <div className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center transition-all border",
                          item.active ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" : "bg-white/5 border-white/5 text-slate-700"
                       )}>
                          {item.active ? <Save className="w-3 h-3 fill-current" /> : <PlusCircle className="w-3 h-3 opacity-20" />}
                       </div>
                       <span className={cn("text-xs font-medium transition-colors", item.active ? "text-slate-200" : "text-slate-600")}>{item.label}</span>
                    </div>
                 ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                 <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">訊號完整度</span>
                    <span className="text-primary font-bold text-sm">75%</span>
                 </div>
                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '75%' }} />
                 </div>
              </div>
           </div>

           <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-8">
                 <Bell className="w-5 h-5 text-primary" />
                 <h3 className="text-sm font-semibold text-white tracking-tight">目標價格監控</h3>
              </div>
              <div className="space-y-4 font-body">
                 <PriceTarget label="風險止損價格" value="880.00" type="loss" icon={ArrowDown} />
                 <PriceTarget label="第一停利目標" value="1,050.00" type="win" icon={ArrowUp} />
              </div>
           </div>
        </div>

        {/* Notes & Related Entries */}
        <div className="col-span-12 lg:col-span-6 glass-card p-10">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold text-white">技術分析觀點</h3>
              <button className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:brightness-110">
                 <Save className="w-4 h-4" /> 儲存日誌
              </button>
           </div>
           
           <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 min-h-[220px] backdrop-blur-md">
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                 最新的法說會釋出樂觀展望，帶動股價突破 880 至 920 的整理區間。週線 RSI 顯示在進入超買區前仍有上漲空間。
                 <br /><br />
                 密切觀察 950 關卡的心理壓力。如果回測時股價能穩守 920 之上，我將增加 20% 的部位。其基本面在 AI 基礎設施領域依然無可匹敵。
              </p>
           </div>

           <div className="mt-8 flex flex-wrap gap-2">
              {['#技術面突破', '#AI與半導體', '#CoWoS'].map(tag => (
                 <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/5 text-[10px] font-bold text-slate-500 rounded-full hover:text-white cursor-pointer transition-all">
                    {tag}
                 </span>
              ))}
           </div>
        </div>

        <div className="col-span-12 lg:col-span-6 glass-card p-10">
            <h3 className="text-xl font-semibold text-white mb-8">相關交易紀錄</h3>
            <div className="space-y-4">
               {[
                  { title: '建立核心多單部位', date: 'OCT 24', desc: '營收創高與均線金叉確認...', icon: PlusCircle, color: 'text-emerald-400' },
                  { title: '拉回支撐加碼', date: 'OCT 28', desc: '於920支撐區域分批吸納...', icon: PlusCircle, color: 'text-emerald-400' },
                  { title: '部分獲利調節', date: 'NOV 02', desc: '關鍵壓力位減碼10%鎖定利潤...', icon: MinusCircle, color: 'text-rose-400' },
               ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer border border-white/5">
                     <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5", 
                        item.color === 'text-emerald-400' ? 'bg-emerald-500/10' : 'bg-rose-500/10')}>
                        <item.icon className={cn("w-5 h-5", item.color)} strokeWidth={2.5} />
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-1">
                           <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</h4>
                           <span className="text-[10px] font-bold text-slate-500">{item.date}</span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium opacity-60 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
        </div>
      </div>
    </div>
  );
}

function PriceTarget({ label, value, type, icon: Icon }: any) {
  return (
    <div className={cn(
      "p-6 rounded-2xl flex flex-col gap-1 border-l-4 transition-all hover:translate-x-2 bg-white/5 backdrop-blur-md border border-white/5",
      type === 'loss' ? "border-l-rose-500" : "border-l-emerald-500"
    )}>
       <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{label}</p>
            <p className="text-3xl font-light tracking-tight text-white">${value}</p>
          </div>
          <div className={cn("p-2 rounded-lg", type === 'loss' ? "bg-rose-500/10 text-rose-400" : "bg-emerald-500/10 text-emerald-400")}>
             <Icon className="w-5 h-5" />
          </div>
       </div>
    </div>
  );
}
