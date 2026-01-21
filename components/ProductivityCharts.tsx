
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Initial Research', traditional: 120, aiAssisted: 15 },
  { name: 'UI Scaffolding', traditional: 180, aiAssisted: 30 },
  { name: 'Logic & API', traditional: 300, aiAssisted: 60 },
  { name: 'Testing/QA', traditional: 150, aiAssisted: 25 },
  { name: 'Documentation', traditional: 90, aiAssisted: 10 },
];

const ProductivityCharts: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">The Impact of <span className="text-blue-400">AI Assistance</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Benchmarking time spent (in minutes) on key development phases. Data reflects average team performance before and after implementing Gemini-integrated workflows.
        </p>
      </div>

      <div className="glass p-8 rounded-3xl h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#94a3b8" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#94a3b8" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="traditional" name="Traditional Dev" fill="#1e293b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="aiAssisted" name="AI-Assisted Dev" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="glass p-6 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-blue-400 mb-2">85%</div>
            <div className="text-sm text-slate-400 font-medium">Reduction in Research Time</div>
         </div>
         <div className="glass p-6 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-purple-400 mb-2">10x</div>
            <div className="text-sm text-slate-400 font-medium">Faster Feature Iteration</div>
         </div>
         <div className="glass p-6 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-pink-400 mb-2">0</div>
            <div className="text-sm text-slate-400 font-medium">Infrastructure Headache</div>
         </div>
      </div>
    </div>
  );
};

export default ProductivityCharts;
