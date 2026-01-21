
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import AIWorkflowTool from './components/AIWorkflowTool';
import ProductivityCharts from './components/ProductivityCharts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Background blobs for aesthetic */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <Header />
      
      <main>
        <Hero />
        
        <section id="features" className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Redefine Your <span className="gradient-text">Build Pipeline</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                AI isn't just a tool; it's your new lead architect. From ideation to deployment, automate the mundane and focus on the innovative.
              </p>
            </div>
            <FeatureGrid />
          </div>
        </section>

        <section id="interactive" className="py-24 bg-slate-900/40 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Interactive <span className="text-blue-400">Workflow Planner</span></h2>
                  <p className="text-slate-400 text-lg mb-8">
                    Curious how AI fits into your specific project? Describe your idea below, and Gemini will architect an AI-first development plan in real-time.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-slate-300">Automated Prompt Generation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-slate-300">Architectural Scaffolding</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-slate-300">Step-by-Step AI Integration</span>
                    </li>
                  </ul>
                </div>
                <AIWorkflowTool />
             </div>
          </div>
        </section>

        <section id="stats" className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
             <ProductivityCharts />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
