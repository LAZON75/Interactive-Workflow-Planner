
import React, { useState } from 'react';
import { generateDevPlan } from '../services/geminiService';
import { AIWorkflowResponse } from '../types';

const AIWorkflowTool: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIWorkflowResponse | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setError('');
    try {
      const plan = await generateDevPlan(idea);
      setResult(plan);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
      </div>
      
      {!result ? (
        <div className="space-y-6">
          <label className="block text-sm font-medium text-slate-400 uppercase tracking-widest">Your Project Concept</label>
          <textarea 
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g. A real-time dashboard for crypto portfolio management using React and Tailwind..."
            className="w-full h-32 bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none placeholder:text-slate-600"
          />
          <button 
            onClick={handleGenerate}
            disabled={loading || !idea}
            className={`w-full py-4 rounded-2xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 ${
              loading ? 'bg-slate-700 cursor-wait' : 'bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/20'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing Architecture...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Generate Dev Strategy</span>
              </>
            )}
          </button>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-start">
             <div>
               <h3 className="text-2xl font-bold text-blue-400">{result.projectName}</h3>
               <p className="text-slate-400 text-sm mt-1">{result.summary}</p>
             </div>
             <button onClick={() => setResult(null)} className="text-slate-500 hover:text-white transition-colors">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
          </div>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {result.steps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-3">
                <div className="flex items-center space-x-2">
                   <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs flex items-center justify-center font-bold">{idx + 1}</span>
                   <h4 className="font-bold text-slate-200">{step.title}</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                <div className="bg-slate-900 rounded-xl p-3 relative group">
                  <div className="text-[10px] text-blue-400/50 absolute top-2 right-3 font-mono">Gemini Prompt</div>
                  <code className="text-[11px] text-slate-300 block font-mono leading-relaxed select-all">
                    {step.promptExample}
                  </code>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => window.print()} 
            className="w-full py-3 glass rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-all"
          >
            Export Implementation Guide
          </button>
        </div>
      )}
    </div>
  );
};

export default AIWorkflowTool;
