import React from 'react';

export interface StockEntry {
  id: string;
  symbol: string;
  title: string;
  content: string;
  date: string;
  change: number;
  type: 'buy' | 'sell';
  tags: string[];
  psychology?: string;
  execution?: {
    entry: number;
    exit: number;
    pnl: string;
    pnlPercent: number;
  };
}

export const MOCK_ENTRIES: StockEntry[] = [
  {
    id: '1',
    symbol: 'AAPL',
    title: 'Q3 法說會分析',
    content: '服務營收的強勁成長持續抵銷硬體銷售的停滯。管理層對下季的財測偏向保守，但毛利率正在擴張。維持長期持有部位。',
    date: '今天, 09:30 AM',
    change: 1.2,
    type: 'buy',
    tags: ['技術面突破', 'AI 類股強勢'],
    psychology: '情緒狀態：自信，完全照計畫執行。'
  },
  {
    id: '2',
    symbol: 'NVDA',
    title: '資料中心擴張新聞',
    content: '宣布了新的大型雲端服務商合約。在 AI 基礎建設週期的這個階段，護城河看似堅不可摧。在早盤下跌時微幅加碼。',
    date: '昨天',
    change: 3.5,
    type: 'buy',
    tags: ['技術面突破', 'AI 類股強勢'],
    psychology: '乾脆地突破 $420 壓力位。成交量是平均的 1.5 倍。在第一次回測時保持耐心。',
    execution: {
      entry: 422.50,
      exit: 448.12,
      pnl: '+$2,562.00',
      pnlPercent: 6.06
    }
  },
  {
    id: '3',
    symbol: 'TSLA',
    title: '交車量不如預期之反思',
    content: '總經逆風影響全球汽車銷售。因降價導致毛利率壓縮幅度超出預期。考慮在總經環境穩定前減少曝險。',
    date: '2023年10月12日',
    change: -2.1,
    type: 'sell',
    tags: ['錯失恐懼 (FOMO)', '過度槓桿'],
    psychology: '開盤追高跳空缺口。進場點很差。因為錯過了 AAPL 早盤的行情而感到急躁。',
    execution: {
      entry: 254.10,
      exit: 248.30,
      pnl: '-$1,160.00',
      pnlPercent: -2.28
    }
  }
];

export const PERFORMANCE_DATA = [
  { name: '1月', value: 80 },
  { name: '2月', value: 75 },
  { name: '3月', value: 85 },
  { name: '4月', value: 70 },
  { name: '5月', value: 60 },
  { name: '6月', value: 50 },
  { name: '7月', value: 55 },
  { name: '8月', value: 45 },
  { name: '9月', value: 30 },
  { name: '10月', value: 20 },
  { name: '11月', value: 25 },
];

export const ALLOCATION_DATA = [
  { name: '科技', value: 45, color: '#4edea3' },
  { name: '金融', value: 35, color: '#bcc7de' },
  { name: '醫療保健', value: 20, color: '#ffb3ad' },
];

export const STRATEGY_DATA = [
  { name: '順勢交易', profit: 12400, percent: 85 },
  { name: '均值回歸', profit: 4200, percent: 35 },
  { name: '極短線 (高頻交易)', profit: -1105, percent: 15 },
];

export const HEATMAP_DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  value: Math.floor(Math.random() * 5), // 0: neutral, 1: small gain, 2: gain, 3: high alpha, 4: loss
}));
