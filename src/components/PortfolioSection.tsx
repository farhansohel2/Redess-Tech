import React, { useState } from 'react';
import { 
  Check, 
  ExternalLink, 
  Sparkles, 
  X, 
  ArrowUpRight, 
  Cpu, 
  Code2, 
  Layers 
} from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'LMS Development', 'Software Development', 'E-Commerce', 'ERP Solutions', 'AI Solutions'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="text-white py-12 space-y-12 text-left" id="portfolio-container">
      
      {/* Portfolio Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">সফল কাজসমূহ</span>
        <h1 className="text-4xl font-extrabold font-sans">নির্ভরযোগ্য কাজের জীবন্ত পোর্টফোলিও</h1>
        <p className="text-slate-400 text-sm">
          টেমপ্লেটের যুগ পেরিয়ে আমরা প্রতিটি ক্লায়েন্টের ব্র্যান্ডের মান রক্ষা করতে সম্পূর্ণ কাস্টম হ্যান্ডকোড আর্কিটেকচার তৈরি করি। কিছু সফল উদাহরনের গ্যালারি নিচে দেওয়া হলো।
        </p>
      </section>

      {/* FILTER BUTTONS PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl border transition-all duration-250 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 border-indigo-500 text-white shadow-lg' 
                  : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-300'
              }`}
            >
              {cat === 'All' ? 'সবগুলো' : cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:shadow-indigo-500/5 hover:shadow-2xl transition duration-300 flex flex-col justify-between cursor-pointer group"
              id={`portfolio-card-${proj.id}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 referrerPolicy='no-referrer'" 
                />
                
                {/* Float Category badge */}
                <span className="absolute top-4 left-4 bg-slate-950/90 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-cyan-400 rounded-lg">
                  {proj.category}
                </span>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-indigo-600/90 text-[11px] font-bold uppercase tracking-widest text-white rounded-xl shadow-lg flex items-center space-x-1">
                    <span>প্রজেক্ট ডিটেইলস দেখুন</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                    ক্লায়েন্ট: {proj.client}
                  </span>
                  <h3 className="text-base font-bold text-white font-sans mt-1 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/5 text-[9px] font-mono text-cyan-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.metrics && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-emerald-400 text-xs font-bold font-sans flex items-center justify-center bg-emerald-500/5 py-1.5 rounded-lg border border-emerald-500/20">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400 mr-1.5 animate-pulse shrink-0" />
                      <span>{proj.metrics}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED PROJECT MODAL SCREENOVERLAY */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
            id="portfolio-dialog"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-950 text-slate-400 hover:text-white rounded-full border border-white/10 z-10 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Body */}
            <div className="max-h-[90vh] overflow-y-auto">
              <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover referrerPolicy='no-referrer'" 
                />
                <span className="absolute bottom-4 left-4 bg-slate-950/90 border border-white/10 px-3 py-1 rounded-lg text-xs font-bold text-cyan-400">
                  {activeProject.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-slate-500">CLIENT SUCCESS METRICS</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">{activeProject.title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">সম্মানিত ক্লায়েন্ট</p>
                    <p className="text-sm font-bold text-white mt-0.5">{activeProject.client}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">অর্জিত সাফল্য মাইলস্টোন</p>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">{activeProject.metrics || '২৪/৭ অটোমেশন প্রস্তুত'}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-300 leading-relaxed font-sans">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">প্রজেক্ট কেস পরিচিতি</h3>
                  <p>{activeProject.description}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">ব্যবহৃত আইটি মডিউলস ও প্রযুক্তি</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-xs font-mono font-bold text-indigo-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fake action web reference */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">রেকর্ড রেফারেন্স আইডি: #RDT-{activeProject.id.toUpperCase()}</p>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold shadow cursor-pointer"
                  >
                    গ্যালারিতে ফিরে যান
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
