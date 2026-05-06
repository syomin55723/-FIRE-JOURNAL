import React from 'react';
import { TrendingUp, TrendingDown, PieChart, ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart as RePieChart,
  Pie
} from 'recharts';

const HOLDINGS = [
  { symbol: 'AAPL', name: 'Apple Inc.', qty: 50, avgPrice: 172.40, currentPrice: 189.43, sector: '科技' },
  { symbol: 'NVDA', name: 'Nvidia Corp.', qty: 30, avgPrice: 420.50, currentPrice: 894.32, sector: '科技' },
  { symbol: 'TSMC', name: 'TSM ADR', qty: 100, avgPrice: 92.10, currentPrice: 145.20, sector: '半導體' },
  { symbol: 'MSFT', name: 'Microsoft', qty: 20, avgPrice: 310.20, currentPrice: 415.12, sector: '軟體' },
  { symbol: 'VOO', name: 'Vanguard S&P 500', qty: 45, avgPrice: 380.50, currentPrice: 472.30, sector: '指數' },
];

const SECTOR_DATA = [
  { name: '科技', value: 45, color: '#6366f1' },
  { name: '半導體', value: 25, color: '#10b981' },
  { name: '軟體', value: 20, color: '#f43f5e' },
  { name: '指數', value: 10, color: '#f59e0b' },
];

export default function Portfolio() {
  const totalValue = HOLDINGS.reduce((acc, stock) => acc + stock.qty * stock.currentPrice, 0);
  const totalCost = HOLDINGS.reduce((acc, stock) => acc + stock.qty * stock.avgPrice, 0);
  const totalGain = totalValue - totalCost;
  const totalGainPercent = (totalGain / totalCost) * 100;

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-light tracking-tight text-white font-headline">投資組合總覽</h2>
        <p className="text-slate-400 text-sm font-medium">機構級資產追蹤與 Alpha 分析</p>
      </header>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 flex flex-col justify-between min-h-[160px]">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">總資產價值</p>
            <h3 className="text-4xl font-light text-white tracking-tight">${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 text-sm mt-4">
             <TrendingUp className="w-4 h-4" />
             <span>較上月 +12.4%</span>
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between min-h-[160px]">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">總盈虧 (Unrealized P/L)</p>
            <h3 className="text-4xl font-light text-emerald-400 tracking-tight">+${totalGain.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
          </div>
          <p className="text-slate-500 text-xs font-bold mt-4 uppercase">投資回報率: {totalGainPercent.toFixed(2)}%</p>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between min-h-[160px]">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">購買力 / 現金</p>
            <h3 className="text-4xl font-light text-white tracking-tight font-mono">$12,408.00</h3>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm mt-4">
             <Wallet className="w-4 h-4" />
             <span>可用於 14 種策略</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Holdings Table */}
        <div className="col-span-12 lg:col-span-8 glass-card p-0 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
             <h3 className="text-lg font-semibold text-white">持倉明細</h3>
             <button className="text-xs font-bold text-primary uppercase tracking-widest hover:text-white transition-colors">匯出報告</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">標的</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">數量 / 成本</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">市價 / 價值</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">盈虧</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {HOLDINGS.map((stock) => {
                  const value = stock.qty * stock.currentPrice;
                  const cost = stock.qty * stock.avgPrice;
                  const gain = value - cost;
                  const gainPercent = (gain / cost) * 100;
                  return (
                    <tr key={stock.symbol} className="hover:bg-white/5 transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                            {stock.symbol[0]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{stock.symbol}</p>
                            <p className="text-[10px] text-slate-500 uppercase font-bold">{stock.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-medium text-slate-200">{stock.qty} Shares</p>
                        <p className="text-[10px] text-slate-500 font-bold tracking-wider">${stock.avgPrice.toFixed(2)} Base</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold text-white">${value.toLocaleString()}</p>
                        <p className="text-[10px] text-slate-500 font-bold tracking-wider">${stock.currentPrice.toFixed(2)} Last</p>
                      </td>
                      <td className="px-8 py-6">
                        <div className={cn(
                          "flex items-center gap-1 text-sm font-bold",
                          gain >= 0 ? "text-emerald-400" : "text-rose-400"
                        )}>
                          {gain >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {gainPercent.toFixed(2)}%
                        </div>
                        <p className="text-[10px] text-slate-500 font-bold mt-1">${Math.abs(gain).toLocaleString()}</p>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sector Allocation */}
        <div className="col-span-12 lg:col-span-4 glass-card p-10 flex flex-col justify-between">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">產業權重</h3>
            <p className="text-xs text-slate-500 font-medium tracking-tight">Portfolio Alpha Decomposition</p>
          </div>
          
          <div className="h-[240px] w-full flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={SECTOR_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {SECTOR_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </RePieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <PieChart className="w-6 h-6 text-slate-500 opacity-20 mb-1" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">權重分佈</span>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            {SECTOR_DATA.map((sector) => (
              <div key={sector.name} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: sector.color }} />
                  <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{sector.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-white">{sector.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
