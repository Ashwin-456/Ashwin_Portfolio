import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Fingerprint, 
  Clock, 
  Zap,
  Search,
  Database
} from 'lucide-react';

// Visual 1: Driver Drowsiness CV & ESP32 Visual
export const DriverDrowsinessVisual: React.FC = () => {
  const [earValue, setEarValue] = useState(0.31);
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between normal and alert states for interactive demonstration
      setEarValue((prev) => {
        const nextVal = prev > 0.22 ? 0.18 : 0.32;
        setIsAlert(nextVal < 0.25);
        return nextVal;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#030617] border border-accent-blue/30 overflow-hidden p-3 font-mono flex flex-col justify-between">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-25" />
      
      {/* Top Status Bar */}
      <div className="relative z-10 flex items-center justify-between text-xs border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-bold">OPENCV-STREAM: 30 FPS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
            isAlert 
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
          }`}>
            {isAlert ? 'STATUS: DROWSINESS ALERT' : 'STATUS: DRIVER ALERT'}
          </span>
        </div>
      </div>

      {/* Center: Face Landmark HUD simulation */}
      <div className="relative z-10 flex items-center justify-around my-auto">
        {/* Eye Landmark Left */}
        <div className="relative flex flex-col items-center">
          <div className={`w-20 h-12 rounded-full border-2 ${
            isAlert ? 'border-rose-400 bg-rose-500/10' : 'border-accent-cyan bg-accent-blue/10'
          } flex items-center justify-center relative transition-colors duration-500`}>
            {/* Eye pupil */}
            <div className={`w-4 h-4 rounded-full ${
              isAlert ? 'h-1 bg-rose-400' : 'bg-accent-cyan'
            } transition-all duration-300`} />
            
            {/* Landmark crosshairs */}
            <span className="absolute top-0 w-1 h-1 bg-accent-blue rounded-full" />
            <span className="absolute bottom-0 w-1 h-1 bg-accent-blue rounded-full" />
            <span className="absolute left-0 w-1 h-1 bg-accent-blue rounded-full" />
            <span className="absolute right-0 w-1 h-1 bg-accent-blue rounded-full" />
          </div>
          <span className="text-[10px] text-slate-400 mt-1">L_EYE (P1-P6)</span>
        </div>

        {/* Center telemetry */}
        <div className="text-center px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-[10px] text-slate-400 block">EYE ASPECT RATIO (EAR)</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className={`text-2xl font-black ${isAlert ? 'text-rose-400' : 'text-accent-glow'}`}>
              {earValue.toFixed(2)}
            </span>
            <span className="text-[10px] text-slate-400">/ 0.25 THR</span>
          </div>
          <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isAlert ? 'bg-rose-500' : 'bg-accent-blue'}`}
              style={{ width: `${(earValue / 0.4) * 100}%` }}
            />
          </div>
        </div>

        {/* Eye Landmark Right */}
        <div className="relative flex flex-col items-center">
          <div className={`w-20 h-12 rounded-full border-2 ${
            isAlert ? 'border-rose-400 bg-rose-500/10' : 'border-accent-cyan bg-accent-blue/10'
          } flex items-center justify-center relative transition-colors duration-500`}>
            <div className={`w-4 h-4 rounded-full ${
              isAlert ? 'h-1 bg-rose-400' : 'bg-accent-cyan'
            } transition-all duration-300`} />
            <span className="absolute top-0 w-1 h-1 bg-accent-blue rounded-full" />
            <span className="absolute bottom-0 w-1 h-1 bg-accent-blue rounded-full" />
            <span className="absolute left-0 w-1 h-1 bg-accent-blue rounded-full" />
            <span className="absolute right-0 w-1 h-1 bg-accent-blue rounded-full" />
          </div>
          <span className="text-[10px] text-slate-400 mt-1">R_EYE (P1-P6)</span>
        </div>
      </div>

      {/* Bottom Hardware Actuator Status */}
      <div className="relative z-10 grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-white/10">
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded ${
          isAlert ? 'bg-rose-500/20 text-rose-300' : 'bg-white/5 text-slate-400'
        }`}>
          <Cpu className="w-3.5 h-3.5 shrink-0" />
          <span>ESP32 Vibration: {isAlert ? 'ACTIVE (PULSE)' : 'STANDBY'}</span>
        </div>
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded ${
          isAlert ? 'bg-rose-500/20 text-rose-300' : 'bg-white/5 text-slate-400'
        }`}>
          <Volume2 className="w-3.5 h-3.5 shrink-0" />
          <span>Voice Prompt: {isAlert ? 'MULTILINGUAL' : 'READY'}</span>
        </div>
      </div>
    </div>
  );
};

// Visual 2: Age-Invariant Face Recognition Biometric Pipeline
export const FaceRecognitionVisual: React.FC = () => {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#030617] border border-accent-blue/30 overflow-hidden p-3 font-mono flex flex-col justify-between">
      <div className="absolute inset-0 cyber-grid opacity-25" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-xs border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-4 h-4 text-accent-cyan" />
          <span className="text-slate-200 font-bold">DEEP BIOMETRIC PIPELINE</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-accent-purple/20 text-purple-300 border border-accent-purple/30">
          UIDAI DATASET BENCHMARK
        </span>
      </div>

      {/* Visual Pipeline Comparison */}
      <div className="relative z-10 grid grid-cols-3 gap-2 items-center my-auto text-center">
        {/* Sample 1: T1 (Reference) */}
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
          <div className="w-12 h-14 rounded-md border border-accent-blue/40 bg-accent-blue/10 flex items-center justify-center relative">
            <span className="text-[10px] text-accent-glow font-bold">AGE: 18</span>
            <div className="absolute inset-1 border border-accent-cyan/30 border-dashed rounded" />
          </div>
          <span className="text-[9px] text-slate-400 mt-1">Landmark Align</span>
          <span className="text-[8px] text-slate-500 font-mono">512-d Vector A</span>
        </div>

        {/* Center: Cosine Similarity Metric */}
        <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex flex-col items-center justify-center">
          <span className="text-[9px] text-slate-300">COSINE SIMILARITY</span>
          <span className="text-xl font-black text-emerald-400">0.892</span>
          <span className="text-[9px] text-emerald-300 flex items-center gap-1 mt-0.5">
            <ShieldCheck className="w-3 h-3" /> MATCH &gt; 0.75
          </span>
          <div className="mt-1 w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full w-[89%]" />
          </div>
        </div>

        {/* Sample 2: T2 (Probe +15 Yrs) */}
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
          <div className="w-12 h-14 rounded-md border border-accent-purple/40 bg-accent-purple/10 flex items-center justify-center relative">
            <span className="text-[10px] text-purple-300 font-bold">AGE: 35</span>
            <div className="absolute inset-1 border border-purple-400/30 border-dashed rounded" />
          </div>
          <span className="text-[9px] text-slate-400 mt-1">Invariant Mesh</span>
          <span className="text-[8px] text-slate-500 font-mono">512-d Vector B</span>
        </div>
      </div>

      {/* Bottom Benchmarks: FMR, EER & ROC */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[10px] pt-2 border-t border-white/10">
        <div className="px-2 py-1 rounded bg-white/5 text-slate-300 text-center">
          <span className="text-slate-500 block text-[8px]">EVALUATION</span>
          <span className="font-semibold text-accent-glow">ROC Curves</span>
        </div>
        <div className="px-2 py-1 rounded bg-white/5 text-slate-300 text-center">
          <span className="text-slate-500 block text-[8px]">FALSE MATCH</span>
          <span className="font-semibold text-accent-cyan">FMR Minimized</span>
        </div>
        <div className="px-2 py-1 rounded bg-white/5 text-slate-300 text-center">
          <span className="text-slate-500 block text-[8px]">OPTIMAL THR</span>
          <span className="font-semibold text-purple-300">EER Calibrated</span>
        </div>
      </div>
    </div>
  );
};

// Visual 3: StudyMate AI Adaptive Learning & RAG Engine
export const StudyMateVisual: React.FC = () => {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#030617] border border-accent-blue/30 overflow-hidden p-3 font-mono flex flex-col justify-between">
      <div className="absolute inset-0 cyber-grid opacity-25" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-xs border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-slate-200 font-bold">LANGGRAPH AUTONOMOUS AGENT</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          FASTAPI + PGVECTOR
        </span>
      </div>

      {/* Adaptive Workflow Diagram */}
      <div className="relative z-10 flex items-center justify-between gap-1 my-auto text-[10px]">
        {/* Node 1: Web Grounded RAG */}
        <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/10 text-center flex flex-col items-center">
          <Search className="w-3.5 h-3.5 text-accent-cyan mb-1" />
          <span className="font-bold text-white text-[9px]">Web RAG</span>
          <span className="text-[8px] text-slate-400">Autonomous Docs</span>
        </div>

        <span className="text-accent-blue font-bold">→</span>

        {/* Node 2: Semantic Grading */}
        <div className="flex-1 p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-center flex flex-col items-center">
          <Activity className="w-3.5 h-3.5 text-accent-glow mb-1" />
          <span className="font-bold text-accent-glow text-[9px]">Quiz Grader</span>
          <span className="text-[8px] text-slate-300">Semantic Vector</span>
        </div>

        <span className="text-accent-blue font-bold">→</span>

        {/* Node 3: Time Rebalance */}
        <div className="flex-1 p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-center flex flex-col items-center">
          <Clock className="w-3.5 h-3.5 text-purple-300 mb-1" />
          <span className="font-bold text-purple-300 text-[9px]">Hours Shift</span>
          <span className="text-[8px] text-slate-300">+2.5h Weak Topic</span>
        </div>
      </div>

      {/* Subject Hour Rebalancing Bar Chart */}
      <div className="relative z-10 space-y-1 pt-1 pb-1">
        <div className="flex justify-between text-[9px] text-slate-400">
          <span>Neural Networks (Score: 42% ⚠️)</span>
          <span className="text-accent-cyan font-bold">+2.0 hrs auto-shifted</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-full w-[85%]" />
        </div>

        <div className="flex justify-between text-[9px] text-slate-400 pt-1">
          <span>SQL & Joins (Score: 94% ✓)</span>
          <span className="text-slate-500 font-bold">-1.0 hr optimized</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-400 h-full w-[35%]" />
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 flex items-center justify-between text-[9px] pt-1.5 border-t border-white/10 text-slate-400">
        <span className="flex items-center gap-1">
          <Database className="w-3 h-3 text-accent-blue" />
          PostgreSQL Vector Embeddings
        </span>
        <span className="text-emerald-400">Dynamic Feedback Loop Active</span>
      </div>
    </div>
  );
};
