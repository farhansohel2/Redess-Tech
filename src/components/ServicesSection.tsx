import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  BookOpen, 
  Layers, 
  ShoppingBag, 
  Wand2, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { services } from '../data';

interface ServicesSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function ServicesSection({ setCurrentPage }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const activeService = services.find(s => s.id === selectedServiceId) || services[0];

  const iconMap: { [key: string]: any } = {
    Globe: Globe,
    Cpu: Cpu,
    Smartphone: Smartphone,
    BookOpen: BookOpen,
    Layers: Layers,
    ShoppingBag: ShoppingBag,
    Wand2: Wand2
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : <Globe className="h-6 w-6" />;
  };

  return (
    <div className="text-white py-12 space-y-16 text-left" id="services-parent">
      
      {/* Services Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">সেবাসমূহ</span>
        <h1 className="text-4xl font-extrabold font-sans">আমরা যেসব হাই-এন্ড সলিউশন প্রদান করি</h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          কোনো ডুপ্লিকেট টেমপ্লেট নয়, আমাদের আইটি সলিউশনগুলি সর্বোচ্চ দক্ষতার সাথে স্ক্র্যাচ থেকে ডিজাইন করা হয়। নিচের ক্যাটাগরিগুলি সিলেক্ট করে আমাদের কার্যপ্রনালী ও টেক স্ট্যাক দেখুন।
        </p>
      </section>

      {/* Interactive Tabs Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Left Nav list */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-4">সার্ভিস ক্যাটাগরি</h3>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl border text-left transition duration-200 cursor-pointer ${
                  selectedServiceId === service.id 
                    ? 'bg-gradient-to-r from-indigo-900 to-indigo-950 border-indigo-500/80 text-white shadow-lg' 
                    : 'bg-slate-900/60 border-white/5 hover:border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  selectedServiceId === service.id ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-slate-400'
                }`}>
                  {getIcon(service.icon)}
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans leading-snug">{service.title}</h4>
                </div>
              </button>
            ))}
          </div>

          {/* Service Detail Panel */}
          <div className="lg:col-span-8 bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 relative">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Title & Description */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
                ACTIVE SERVICE DETAILS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">{activeService.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{activeService.description}</p>
            </div>

            {/* Core Benefits */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono">গ্রাহকের সুনির্দিষ্ট সুবিধাসমুহ (Benefits)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3.5 bg-slate-950/40 rounded-xl border border-white/5">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed 4 Steps workflow */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest font-mono">ডেভেলপমেন্ট রোডম্যাপ পাইপলাইন</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {activeService.process.map((step, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-xl relative border border-white/5">
                    <span className="text-xl font-bold text-slate-700 font-mono">০{idx + 1}.</span>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack & Launch Action */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-500 mb-2 tracking-wider">রুপায়নে ব্যবহৃত টেকনোলজি স্ট্যাক</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.techStack.map((stack) => (
                    <span key={stack} className="px-2.5 py-1 bg-white/5 border border-white/5 text-[11px] font-mono font-bold text-cyan-400 rounded-lg">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 shrink-0">
                <button 
                  onClick={() => {
                    setCurrentPage('quote');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-500/20 flex items-center space-x-1.5 cursor-pointer"
                  id="services-detail-cta"
                >
                  <span>বাজেট হিসাব করুন</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* General Service Guarantee banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-950/40 via-slate-950 to-cyan-950/40 border border-white/10 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          
          <div className="space-y-2 col-span-2">
            <h3 className="text-lg font-bold text-white font-sans flex items-center justify-center md:justify-start space-x-2">
              <Zap className="h-5 w-5 text-yellow-400 shrink-0" />
              <span>আপনার নিজস্ব কোনো কাস্টম আইডিয়া বা ফিচার রয়েছে কি?</span>
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl">
              আমরা যেকোনো ধরণের মডিউল ও এপিআই সংহতকরণে অভিজ্ঞ। আপনার কাছে যদি প্রজেক্টের রিকোয়ারমেন্ট শিট তৈরি করা থাকে, তবে সরাসরি সেটি আমাদের আইটি কনসালট্যান্ট টিমের কাছে সেন্ড করতে পারেন।
            </p>
          </div>

          <div className="text-center md:text-right shrink-0">
            <button 
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-xs font-bold text-white rounded-xl border border-white/15 transition cursor-pointer"
              id="services-custom-idea-cta"
            >
              আইডিয়া শেয়ার করুন
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
