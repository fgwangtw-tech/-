/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Activity, Cpu, Database } from 'lucide-react';
import { motion } from 'motion/react';

// 計時器組件 - 沉浸式硬體風格
const TimerCard = ({ 
  title, 
  subtitle, 
  accentColor, 
  glowColor, 
  textColor,
  subtitleStyle
}: { 
  title: string; 
  subtitle: string; 
  accentColor: string; 
  glowColor: string;
  textColor: string;
  subtitleStyle?: React.CSSProperties;
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    
    return {
      main: `${pad(minutes)}:${pad(secs)}`,
      hours: hours > 0 ? pad(hours) + ":" : ""
    };
  };

  const time = formatTime(seconds);

  return (
    <div className="relative bg-neutral-950 flex flex-col items-center justify-center p-12 overflow-hidden h-full group">
      {/* 氛圍溢光效果 */}
      <div className={`absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_40%,${glowColor}_0%,transparent_60%)] transition-opacity duration-1000 ${isActive ? 'opacity-25' : 'opacity-10'}`}></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-xs font-black tracking-[0.3em] ${textColor} uppercase mb-6`}
          style={subtitleStyle}
        >
          {subtitle} // {title}
        </motion.span>
        
        {/* 大型數位計時顯示 */}
        <div className={`text-[120px] lg:text-[160px] font-mono font-light leading-none tracking-tighter ${isActive ? 'text-white' : 'text-neutral-400'} drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-colors duration-500`}>
          <span className="opacity-30 text-[60px] lg:text-[80px]">{time.hours}</span>
          {time.main}
          <span className="text-[40px] lg:text-[60px] opacity-20">.00</span>
        </div>

        {/* 控制按鈕組：開始、暫停、重設 */}
        <div className="mt-16 flex gap-6">
          {/* 開始 */}
          <button
            id={`start-${title}`}
            onClick={() => setIsActive(true)}
            disabled={isActive}
            className={`w-20 h-20 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isActive 
                ? 'opacity-20 cursor-not-allowed border-white/5' 
                : `${accentColor.replace('bg-', 'border-')}/30 ${accentColor}/10 hover:${accentColor}/20 cursor-pointer`
            }`}
            title="開始"
          >
            <Play className={`w-8 h-8 ${isActive ? 'text-neutral-700' : textColor.replace('text-', 'fill-')}`} />
          </button>

          {/* 暫停 */}
          <button
            id={`pause-${title}`}
            onClick={() => setIsActive(false)}
            disabled={!isActive}
            className={`w-20 h-20 rounded-full border flex items-center justify-center transition-all duration-300 ${
              !isActive 
                ? 'opacity-20 cursor-not-allowed border-white/5' 
                : 'border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer'
            }`}
            title="暫停"
          >
            <Pause className="w-8 h-8 text-neutral-300" />
          </button>

          {/* 重設 */}
          <button
            id={`reset-${title}`}
            onClick={resetTimer}
            className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all"
            title="重設"
          >
            <Square className="w-6 h-6 text-neutral-500" />
          </button>
        </div>

        {/* 進度條/裝飾元素 */}
        <div className="mt-16 w-full max-w-md h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full ${accentColor} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
            animate={{ 
              width: isActive ? "100%" : "0%",
              opacity: isActive ? [0.4, 1, 0.4] : 0.4
            }}
            transition={{ 
              width: { duration: 60, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, repeat: Infinity } 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="h-screen flex flex-col font-sans">
      {/* 頂部狀態欄 */}
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-10 bg-neutral-900/50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-50"></div>
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] text-neutral-400 uppercase">
            Competition Control System v2.8 // Dual-Track Sync
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> Core: Active</span>
          <span className="flex items-center gap-2"><Database className="w-3 h-3" /> Sync: Optimal</span>
        </div>
      </header>

      {/* 主計時戰場 */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        <TimerCard 
          title="三年甲班" 
          subtitle="Sector 01"
          accentColor="bg-blue-500"
          glowColor="#3b82f6"
          textColor="text-blue-500"
          subtitleStyle={{ fontSize: '20px' }}
        />
        <TimerCard 
          title="三年乙班" 
          subtitle="Sector 02"
          accentColor="bg-amber-500" 
          glowColor="#f59e0b"
          textColor="text-amber-500"
          subtitleStyle={{ fontSize: '20px' }}
        />
      </main>

      {/* 底部數據欄 */}
      <footer className="h-24 bg-neutral-900 flex items-center px-10 border-t border-white/5">
        <div className="flex-1 flex gap-16">
          <div className="hidden sm:block">
            <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">System Frequency</p>
            <p className="font-mono text-xs text-neutral-300">60Hz / Real-time</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Transmission</p>
            <p className="font-mono text-xs text-emerald-400">Low Latency</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Environment</p>
            <p className="font-mono text-xs text-neutral-300">AIS Cloud Node</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-sm bg-white/5">
            <Activity className="w-3 h-3 text-emerald-500" />
            <span className="text-[10px] font-bold text-neutral-400 font-mono">LIVE MONITORING</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

