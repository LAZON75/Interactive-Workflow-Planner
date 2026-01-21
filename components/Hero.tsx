
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-4xl text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
          <span>New</span>
          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
          <span>Gemini 3 Powered Workflows</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Ship Faster With <br />
          <span className="gradient-text">AI Intelligence</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate guide to hyper-productivity. Learn how to combine Gemini's reasoning with modern frameworks to build world-class apps in record time.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-2xl font-bold text-white shadow-xl shadow-blue-500/25 hover:bg-blue-500 transition-all transform hover:-translate-y-1">
            Start Building Free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass rounded-2xl font-bold text-white hover:bg-white/5 transition-all">
            View Live Demo
          </button>
        </div>
      </div>

      {/* Floating UI elements mock-ups */}
      <div className="absolute top-[20%] left-[-5%] md:left-[5%] animate-float hidden lg:block">
        <div className="glass p-4 rounded-xl shadow-2xl border border-white/10 w-48">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="h-2 bg-slate-700/50 rounded-full w-full mb-2"></div>
          <div className="h-2 bg-slate-700/50 rounded-full w-[80%] mb-2"></div>
          <div className="h-2 bg-blue-500/50 rounded-full w-[60%]"></div>
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[-5%] md:right-[5%] animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="glass p-4 rounded-xl shadow-2xl border border-white/10 w-56">
          <div className="flex items-center space-x-2 mb-3">
             <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"></path><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
             </div>
             <span className="text-xs font-bold text-slate-300">Code Optimization</span>
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-purple-500/40 rounded-full w-full"></div>
            <div className="h-1 bg-purple-500/40 rounded-full w-full"></div>
          </div>
          <div className="mt-3 text-[10px] text-green-400 font-mono">+ 40% Efficiency</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
