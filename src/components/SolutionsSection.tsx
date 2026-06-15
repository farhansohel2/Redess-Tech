import React, { useState } from 'react';
import { 
  Building, 
  GraduationCap, 
  ShieldAlert, 
  Factory, 
  Store, 
  HeartHandshake, 
  Check, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { solutions } from '../data';

interface SolutionsSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function SolutionsSection({ setCurrentPage }: SolutionsSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const iconMap: { [key: string]: any } = {
    GraduationCap: GraduationCap,
    ShieldAlert: ShieldAlert,
    Factory: Factory,
    Store: Store,
    HeartHandshake: HeartHandshake
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : <Building className="h-6 w-6" />;
  };

  return (
    <div className="text-white py-12 space-y-16 text-left" id="solutions-parent">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold uppercase">শিল্প-নির্দিষ্ট প্রযুক্তি</span>
        <h1 className="text-4xl font-extrabold font-sans">নির্দিষ্ট খাতের জন্য উপযোগী কাস্টম সমাধান</h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          আমরা কোনো সাধারণ ছাঁচে বসানো প্যাক বিক্রি করি না। আপনার ইন্ডাস্ট্রির কমপ্লায়েন্স, আইনগত সুবিধা ও অপারেশনাল চ্যালেঞ্জ মাথায় রেখে কাস্টম ডিজাইন বিল্ড আপ করি।
        </p>
      </section>

      {/* Grid of Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition duration-300 relative flex flex-col justify-between group"
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold font-mono">
                  {sol.industry}
                </span>

                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                    {getIcon(sol.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">{sol.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sol.description}
                </p>

                {/* Benefits list */}
                <div className="space-y-2 pt-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">সুবিধাসমূহ</h4>
                  <ul className="space-y-2">
                    {sol.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5 text-xs text-slate-400">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Pill badges */}
                <div className="space-y-2 pt-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">ইন্টিগ্রেটেড ফিচারস</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.features.map((f, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-zinc-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botton CTA redirect */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => {
                    setCurrentPage('quote');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-xs font-semibold rounded-xl border border-white/10 hover:border-white/20 transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  id={`sol-cta-${sol.id}`}
                >
                  <span>ব্যক্তিগত ডেমো সেশন বুক করুন</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Case-study preview banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-emerald-950/20 border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold">SUCCESS METRIC ACCLAIM</span>
            <h3 className="text-xl font-bold font-sans text-white">কিভাবে প্যাসিফিক টেক্সটাইল তাদের উৎপাদনশীলতা ৩৫% বৃদ্ধি করেছে?</h3>
            <p className="text-xs text-slate-400 max-w-3xl">
              রিয়েল-টাইম মেটেরিয়াল ট্র্যাকিং ও জটিল রোল পারমিশন সফটওয়্যারের সাহায্যে আমরা তাদের ১০টি ম্যানুফ্যাকচারিং ইউনিটের স্টক অপচয় মডিউল সম্পূর্ণ সফলভাবে বিল্ড করে দিয়েছি।
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('case-studies');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shrink-0 cursor-pointer shadow"
            id="sol-case-studies-cta"
          >
            কেস স্টাডি সম্পূর্ণ বিবরণ দেখুন
          </button>
        </div>
      </section>

    </div>
  );
}
