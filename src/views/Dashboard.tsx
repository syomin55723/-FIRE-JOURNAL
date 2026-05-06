import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Layers, 
  ArrowUp, 
  ArrowRight 
} from 'lucide-react';
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
  Cell
} from 'recharts';
import { PERFORMANCE_DATA, ALLOCATION_DATA, MOCK_ENTRIES } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          title="總資產價值" 
          value="$142,530.00" 
          change="+15.4%" 
          changeLabel="今年以來"
          icon={Wallet}
        />
        <SummaryCard 
          title="今日損益" 
          value="+$3,420.00" 
          change="+2.4%" 
          changeLabel="今日"
          icon={TrendingUp}
        />
        <SummaryCard 
          title="持倉部位" 
          value="18" 
          subText="涵蓋 4 個產業"
          icon={Layers}
        />
      </div>

      {/* Main Charts area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 glass-card p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">投資組合績效</h3>
              <p className="text-slate-400 text-sm mt-1">1 年成長軌跡</p>
            </div>
            <div className="flex bg-white/5 p-1 rounded-xl">
              {['1週', '1個月', '1年'].map((t) => (
                <button 
                  key={t}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                    t === '1年' 
                      ? "bg-white/10 text-white" 
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}
                  itemStyle={{ color: '#6366f1' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation Chart */}
        <div className="glass-card p-8 flex flex-col">
          <h4 className="text-sm font-semibold text-white mb-8">資產配置</h4>
          <div className="flex-1 flex flex-col justify-between">
            <div className="relative aspect-square w-full max-w-[200px] mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ALLOCATION_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="100%"
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {ALLOCATION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-light text-white leading-none">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">已投入</span>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              {ALLOCATION_DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-medium text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Notes */}
      <div className="glass-card overflow-hidden">
        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/5">
          <h3 className="text-lg font-semibold text-white">近期交易筆記</h3>
          <button className="text-primary font-bold text-sm flex items-center gap-1 hover:brightness-110 transition-all">
            查看全部
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="divide-y divide-white/5">
          {MOCK_ENTRIES.map((entry) => (
            <div key={entry.id} className="p-8 hover:bg-white/5 transition-all cursor-pointer group flex gap-8 items-start">
              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-2xl font-light text-white tracking-tight">{entry.symbol}</span>
                <span className={cn(
                  "mt-2 px-3 py-1 rounded-full text-[10px] font-black uppercase",
                  entry.change > 0 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                )}>
                  {entry.change > 0 ? `+${entry.change}%` : `${entry.change}%`}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">{entry.title}</h4>
                  <span className="text-xs text-slate-500 font-medium">{entry.date}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{entry.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, change, changeLabel, subText, icon: Icon }: any) {
  return (
    <div className="glass-card p-6 flex flex-col gap-2 relative overflow-hidden group hover:bg-white/10">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-all scale-150 rotate-12 pointer-events-none">
        <Icon className="w-12 h-12" />
      </div>
      <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1 relative z-10">{title}</p>
      <div className="flex items-end gap-3 relative z-10">
        <h2 className="text-3xl font-light text-white leading-none">{value}</h2>
        {change && (
          <span className="text-emerald-400 text-sm font-medium mb-0.5">{change}</span>
        )}
      </div>
      <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden relative z-10">
        <div className={cn("h-full bg-primary", title === ' 持倉部位' ? 'w-[45%]' : 'w-[70%]')} />
      </div>
      {(changeLabel || subText) && (
        <p className="text-slate-500 text-[10px] font-bold mt-2 relative z-10">
           {subText || `${changeLabel}損益 Stable`}
        </p>
      )}
    </div>
  );
}
