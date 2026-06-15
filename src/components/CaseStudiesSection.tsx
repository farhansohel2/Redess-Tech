import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { caseStudies } from '../data';

export default function CaseStudiesSection() {
  const [activeStudyId, setActiveStudyId] = useState(caseStudies[0].id);

  const activeStudy = caseStudies.find(c => c.id === activeStudyId) || caseStudies[0];

  return (
    <div className="text-white py-12 space-y-16 text-left" id="case-studies-container">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold uppercase">কেস স্টাডিজ</span>
        <h1 className="text-4xl font-extrabold font-sans">বাস্তব কেস স্টাডি এবং ব্যবসায়িক গ্রোথ রিপোর্ট</h1>
        <p className="text-slate-400 text-sm">
          REDESS TECH-এর তৈরি কাস্টম প্রযুক্তি সমাধান ব্যবহারে আমাদের সম্মানিত ক্লায়েন্টের প্রাতিষ্ঠানিক প্রবৃদ্ধি এবং খরচ সাশ্রয়ের বিস্তারিত পরিসংখ্যানমূলক বিবরণ।
        </p>
      </section>

      {/* Case Studies Navigator / Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Side Selector */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 mb-2">সাফল্য গাঁথা স্টোরিজ</h3>
            {caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveStudyId(study.id)}
                className={`w-full p-5 text-left border rounded-2xl transition duration-200 cursor-pointer flex items-start space-x-3 group ${
                  activeStudyId === study.id 
                    ? 'bg-gradient-to-r from-indigo-950 to-slate-900 border-indigo-500 text-white shadow-lg' 
                    : 'bg-slate-900/60 border-white/5 hover:border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${
                  activeStudyId === study.id ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-slate-400'
                }`}>
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 block uppercase mb-1">{study.industry}</span>
                  <p className="text-sm font-bold font-sans line-clamp-2 leading-snug">{study.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Study Deep View */}
          <div className="lg:col-span-8 bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 relative">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-md border border-indigo-400/20">
                {activeStudy.industry} // SUCCESS REPORT
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-sans text-white mt-2 leading-relaxed">
                {activeStudy.title}
              </h2>
            </div>

            {/* Metrics Dashboard Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-white/5 text-center relative group overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-indigo-500/5 rounded-full blur-lg pointer-events-none" />
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{m.label}</p>
                  <p className="text-2xl font-black text-emerald-400 font-sans mt-1">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center space-x-1">
                  <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                  <span>প্রাতিষ্ঠানিক জটিলতা (Challenge)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-rose-500/5 p-4 rounded-xl border border-rose-500/10">
                  {activeStudy.challenge}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1">
                  <Check className="h-4.5 w-4.5 shrink-0" />
                  <span>REDESS কাস্টম সমাধান (Solution)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Success Milestones Checklist */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">অর্জিত চূড়ান্ত মাইলস্টোনসমূহ</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                {activeStudy.results.map((r, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="p-0.5 bg-emerald-500/10 text-emerald-400 rounded-md">
                      <Check className="h-4 w-4 shrink-0" />
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Testimonial Capsule */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic font-sans leading-relaxed">
                "{activeStudy.clientFeedback.comment}"
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-white/5">
                <img 
                  src={activeStudy.clientFeedback.avatar} 
                  alt={activeStudy.clientFeedback.author} 
                  className="w-10 h-10 rounded-full object-cover referrerPolicy='no-referrer'" 
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{activeStudy.clientFeedback.author}</h4>
                  <p className="text-[10px] text-slate-500">{activeStudy.clientFeedback.designation}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
