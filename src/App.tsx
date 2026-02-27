/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Bell, 
  ChevronDown, 
  Play, 
  Layout, 
  Briefcase, 
  BarChart3, 
  FileText, 
  CheckSquare, 
  ArrowRight,
  Search,
  Users,
  Database,
  Library,
  Sparkles,
  Zap,
  Activity,
  BookOpen,
  Pencil,
  GraduationCap,
  Monitor,
  Cpu,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

const NeumorphicButton = ({ children, className = "", active = false }: { children: React.ReactNode, className?: string, active?: boolean }) => (
  <button className={`
    px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300
    ${active 
      ? 'bg-[#f0f7ff] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-blue-600' 
      : 'bg-[#f0f7ff] shadow-[6px_6px_12px_rgba(0,0,0,0.05),-6px_-6px_12px_rgba(255,255,255,0.8)] text-slate-600 hover:shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]'
    }
    ${className}
  `}>
    {children}
  </button>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-10 py-8">
      <div className="bg-[#f0f7ff] shadow-[8px_8px_16px_rgba(0,0,0,0.03),-8px_-8px_16px_rgba(255,255,255,0.8)] rounded-full px-4 py-2 flex items-center gap-2">
        <button className="px-6 py-2 rounded-full text-[13px] font-bold text-blue-600 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]">首页</button>
        <button className="px-6 py-2 rounded-full text-[13px] font-bold text-slate-500 hover:text-slate-800 transition-colors">社区</button>
        <button className="px-6 py-2 rounded-full text-[13px] font-bold text-slate-500 hover:text-slate-800 transition-colors">数据分析</button>
        <button className="px-6 py-2 rounded-full text-[13px] font-bold text-slate-500 hover:text-slate-800 transition-colors">资源库</button>
      </div>
      
      <div className="absolute right-12 flex items-center gap-4">
        <div className="bg-[#f0f7ff] shadow-[4px_4px_10px_rgba(0,0,0,0.03),-4px_-4px_10px_rgba(255,255,255,0.8)] rounded-full px-4 py-2 flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-white shadow-inner flex items-center justify-center text-blue-500 font-black text-xs">林</div>
          <span className="text-[13px] font-bold text-slate-700">林维康</span>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <button className="w-11 h-11 rounded-full bg-[#f0f7ff] shadow-[4px_4px_10px_rgba(0,0,0,0.03),-4px_-4px_10px_rgba(255,255,255,0.8)] flex items-center justify-center text-slate-500 hover:text-blue-500 transition-all active:shadow-inner">
          <Bell size={20} />
        </button>
      </div>
    </nav>
  );
};

const BackgroundMotifs = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#f8fbff]"></div>
    
    {/* Subtle Educational Pattern Overlay */}
    <div className="absolute inset-0 opacity-[0.05]" style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '120px 120px'
    }}></div>

    {/* Floating Educational Elements */}
    <motion.div 
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] right-[10%] opacity-[0.08] text-blue-600"
    >
      <GraduationCap size={240} />
    </motion.div>
    
    <motion.div 
      animate={{ 
        y: [0, 20, 0],
        rotate: [0, -5, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[10%] left-[5%] opacity-[0.08] text-blue-600"
    >
      <BookOpen size={200} />
    </motion.div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Modern Library/Classroom Background */}
        <img 
          src="https://picsum.photos/seed/modern_library/1920/1080?blur=2" 
          alt="Modern Library" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8fbff]/40 to-[#f8fbff]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 
          className="text-[110px] font-serif font-black text-white tracking-tighter text-center leading-[0.9]"
          style={{ 
            textShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 4px 12px rgba(0, 0, 0, 0.1)' 
          }}
        >
          AI 多功能<br/>教学平台
        </h1>
      </motion.div>
    </section>
  );
};

const Workspace = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-12 -mt-24 relative z-20 mb-32">
      {/* Main Floating Container */}
      <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04),0_20px_80px_rgba(0,0,0,0.03)] p-16 border border-white/40">
        <div className="flex flex-col items-center justify-center mb-20 gap-4">
          <div className="bg-emerald-600 text-white px-10 py-3.5 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.3)] border border-white/20">
            <h2 className="text-3xl font-serif font-black tracking-tighter">工作区</h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {/* Left: Prep Area - Electronic Blackboard Style */}
          <div className="col-span-3 flex flex-col gap-8">
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="bg-white text-emerald-600 px-12 py-4 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-2 border-emerald-50/50 transform scale-110">
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">备课区 / Prep</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_10px_40px_rgba(0,0,0,0.02)] border border-slate-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-100 group-hover:scale-105 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">交互课件</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">交互课件与课堂互动内容</p>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_10px_40px_rgba(0,0,0,0.02)] border border-slate-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-100 group-hover:scale-105 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">日常工作</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">教学日程、任务和资料处理</p>
              </div>
            </div>
          </div>

          {/* Middle: Electronic Whiteboard UI */}
          <div className="col-span-6">
            <div className="h-full bg-slate-50/50 rounded-[24px] p-1 flex flex-col relative group">
              <div className="h-full bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-white p-12 flex flex-col items-center justify-center relative z-10 overflow-hidden">
                
                {/* Electronic Whiteboard UI */}
                <motion.div 
                  animate={{ 
                    y: [-5, 5, -5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full max-w-md aspect-video bg-slate-50 rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.1)] border-[12px] border-slate-200 p-6 flex flex-col overflow-hidden"
                >
                  {/* Signal Waves */}
                  <div className="absolute top-4 right-6 flex gap-1 items-end h-4">
                    {[0.4, 0.7, 0.5, 0.9].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: ['20%', '100%', '20%'] }}
                        transition={{ duration: 0.5 + i * 0.2, repeat: Infinity }}
                        className="w-1 bg-emerald-500 rounded-full"
                        style={{ height: `${h * 100}%` }}
                      />
                    ))}
                  </div>

                  {/* Current/Electricity Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div 
                      animate={{ opacity: [0, 1, 0], x: [-20, 20] }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute top-1/4 left-0 w-full h-px bg-blue-400/30 blur-sm"
                    />
                    <Zap size={20} className="absolute top-1/2 left-1/4 text-yellow-400 opacity-20 animate-pulse" />
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full"></div>
                      <Monitor size={80} className="text-slate-800 relative z-10" />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-2 -right-2 text-emerald-500"
                      >
                        <Activity size={24} />
                      </motion.div>
                    </div>
                    <div className="space-y-2 w-full max-w-[200px]">
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                      <div className="h-1.5 w-2/3 bg-slate-200 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-12 text-center flex flex-col items-center">
                  <h3 className="text-3xl font-serif font-black text-slate-900 mb-10 tracking-tighter">
                    AI 多功能课堂
                  </h3>
                  
                  {/* Circular Play Button UI - Green */}
                  <button className="w-20 h-20 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-[0_15px_35px_-5px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all active:scale-[0.9] group">
                    <Play size={32} fill="currentColor" className="ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/10 blur-[100px] rounded-full -z-10"></div>
              </div>
              {/* Layered Depth Effect */}
              <div className="absolute inset-0 translate-y-4 scale-[0.96] bg-white/40 rounded-[24px] -z-10 shadow-sm"></div>
            </div>
          </div>

          {/* Right: Analysis Area - Elegant Data Viz Containers */}
          <div className="col-span-3 flex flex-col gap-8">
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="bg-white text-emerald-600 px-12 py-4 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-2 border-emerald-50/50 transform scale-110">
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">分析 / Analysis</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-[24px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-50">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">成绩深度分析</h4>
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <BarChart3 size={16} />
                </div>
              </div>
              <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                ></motion.div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
                <span className="text-xs font-black text-blue-600">Growing...</span>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-50">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">课堂表现报告</h4>
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                  <Activity size={16} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold text-slate-800">教学资源库</div>
                  <div className="text-[11px] text-slate-400">报告生成已就绪</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-50">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">作业智能批改</h4>
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <CheckSquare size={16} />
                </div>
              </div>
              <div className="relative h-2 bg-slate-100 rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] flex items-center justify-end"
                >
                  {/* Moving Pen Icon */}
                  <motion.div 
                    className="absolute -right-2 -top-4 text-emerald-600"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Pencil size={20} />
                  </motion.div>
                </motion.div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grading</span>
                <span className="text-xs font-black text-emerald-600">Processing...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  const cards = [
    {
      title: "高等数学互动课件",
      desc: "包含微积分、线性代数等核心概念的动态可视化演示，支持实时参数调整。",
      tag: "数学 / Math",
      img: "https://picsum.photos/seed/math_edu/800/1000"
    },
    {
      title: "AI 英语口语私教",
      desc: "基于大语言模型的实时对话练习，提供语法纠错与发音指导。",
      tag: "语言 / Language",
      img: "https://picsum.photos/seed/lang_edu/800/1000"
    },
    {
      title: "物理力学实验模拟",
      desc: "虚拟实验室环境，支持自由落体、碰撞等经典物理实验的参数模拟。",
      tag: "物理 / Physics",
      img: "https://picsum.photos/seed/phys_edu/800/1000"
    },
    {
      title: "全球历史文献库",
      desc: "数字化珍稀历史文献，支持时间轴检索与多维度交叉分析。",
      tag: "历史 / History",
      img: "https://picsum.photos/seed/hist_edu/800/1000"
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-12 mb-40">
      <div className="flex flex-col items-center justify-center mb-20 gap-4">
        <div className="bg-emerald-600 text-white px-10 py-3.5 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.3)] border border-white/20">
          <h2 className="text-3xl font-serif font-black tracking-tighter">社区</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -12 }}
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-700 border border-slate-50 group"
          >
            <div className="h-64 overflow-hidden relative">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {card.tag}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{card.title}</h4>
              <p className="text-sm text-slate-400 mb-8 line-clamp-2 leading-relaxed font-medium">
                {card.desc}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">View Details</span>
                <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f7ff] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700 relative overflow-x-hidden">
      <BackgroundMotifs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Workspace />
        <Community />
      </main>
      
      <footer className="max-w-[1400px] mx-auto px-12 py-20 border-t-2 border-slate-200/30 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] relative z-10">
        <p>© 2026 AI 多功能教学平台 / Future Classroom</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
