import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Sparkles, 
  Star, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Users, 
  Award,
  Globe,
  Cpu,
  Smartphone,
  Layers,
  Wand2,
  TrendingUp,
  Clock,
  Code
} from 'lucide-react';
import { motion } from 'motion/react';
import { stats, clientLogos, services, solutions, projects, faqItems, blogArticles } from '../data';

interface HomeSectionProps {
  setCurrentPage: (page: string) => void;
  onOpenOffer: () => void;
}

export default function HomeSection({ setCurrentPage, onOpenOffer }: HomeSectionProps) {
  const [activeSolutionIdx, setActiveSolutionIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-white overflow-hidden" id="home-view">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-slate-950" id="hero-section">
        {/* Advanced Aurora / Radiant background effects */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full text-indigo-400 text-xs font-semibold"
              >
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>২০২৬ সালের সেরা প্রিমিয়াম এন্টারপ্রাইজ আইটি সলিউশন</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-sans"
              >
                ডিজিটাল বিপ্লবে আপনার <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  বিশ্বস্ত প্রযুক্তি অংশীদার
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
              >
                REDESS TECH-এ আমরা প্রস্তুত করি দ্রুততম গতিসম্পন্ন স্টাইলিশ ওয়েবসাইট, কাস্টম এন্টারপ্রাইজ ইআরপি, হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন এবং ইন্টেলিজেন্ট এআই সলিউশন। আমাদের প্রযুক্তি আপনার ব্যবসার উৎপাদনশীলতা বাড়াবে শতভাগ।
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  onClick={() => navigateTo('quote')}
                  className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 text-white transition flex items-center space-x-2 pointer-events-auto cursor-pointer"
                  id="hero-cta-quote"
                >
                  <span>প্রজেক্টের প্রপোজাল নিন</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => navigateTo('consultation')}
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition cursor-pointer"
                  id="hero-cta-consult"
                >
                  ফ্রি কনসালটেশন বুক করুন
                </button>
              </motion.div>

              {/* Mini trust features */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4"
              >
                <div>
                  <h4 className="text-xl font-bold text-cyan-400">২৮০+</h4>
                  <p className="text-xs text-slate-400">সফলভাবে হস্তান্তরকৃত প্রজেক্ট</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-indigo-400">৯৯.৪%</h4>
                  <p className="text-xs text-slate-400">ক্লায়েন্ট স্যাটিসফ্যাকশন রেট</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-400">৩ গুণ</h4>
                  <p className="text-xs text-slate-400">ব্যবসায়িক রূপান্তর হার বৃদ্ধি</p>
                </div>
              </motion.div>
            </div>

            {/* Simulated Floating Mockup Graphic */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative bg-gradient-to-b from-indigo-500/10 to-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden"
              >
                {/* Header of mock console */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono flex items-center space-x-1">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>redesstech.online // active</span>
                  </span>
                </div>

                {/* Dashboard-Style Widgets */}
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Code className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">কোড কোয়ালিটি ও আর্কিটেকচার</h4>
                        <p className="text-[10px] text-emerald-400">Clean, Modular Enterprise Stack</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">১০/১০</span>
                  </div>

                  {/* Graph visualization simulation */}
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-sans">ব্যবসার পারফরম্যান্স গ্রোথ</span>
                      <span className="text-xs font-mono font-semibold text-emerald-400">+২৪০.৫%</span>
                    </div>
                    <div className="h-28 flex items-end justify-between space-x-1 pt-4">
                      <div className="w-full bg-indigo-600/30 h-1/4 rounded-sm" />
                      <div className="w-full bg-indigo-600/40 h-2/5 rounded-sm" />
                      <div className="w-full bg-indigo-600/50 h-3/5 rounded-sm" />
                      <div className="w-full bg-indigo-600/70 h-3/4 rounded-sm animate-pulse" />
                      <div className="w-full bg-gradient-to-t from-indigo-500 to-cyan-400 h-full rounded-sm shadow-indigo-500/50 shadow-md" />
                    </div>
                  </div>

                  {/* System Stats Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[10px] text-slate-400">লোডিং সময়</p>
                      <p className="text-lg font-bold text-cyan-400 font-sans">১.২ সেকেন্ড</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[10px] text-slate-400">সার্ভার আপটাইম</p>
                      <p className="text-lg font-bold text-emerald-400 font-sans">৯৯.৯৯%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mini decoration pills */}
              <div className="absolute -bottom-4 -left-6 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl flex items-center space-x-2 shadow-xl">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-white">এআই ইঞ্জিন অনলাইন</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS MARQUEE */}
      <section className="bg-slate-950 py-10 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-6 font-semibold">আমাদের সলিউশনের ওপর আস্থা রেখেছেন যারা</p>
          <div className="flex flex-wrap items-center justify-around gap-6 opacity-60">
            {clientLogos.map((client, i) => (
              <div key={i} className="flex items-center space-x-2 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer">
                <span className="h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/30">
                  {client.logo}
                </span>
                <span className="text-white text-sm font-semibold tracking-wide">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES BENTO GRID */}
      <section className="py-20 bg-slate-950 text-left relative" id="our-bento-services">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider">আমাদের প্রযুক্তিসমূহ</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans">ব্যবসার ডিজিটাল রূপান্তরে আমাদের বিশেষ সেবাসমূহ</h2>
            <p className="text-slate-400">আমরা ছকবাঁধা কাজের বাইরে গিয়ে প্রতিটি বিজনেসের সুনির্দিষ্ট প্রয়োজন বুঝে ডেডিকেটেড কোড টিম দিয়ে নিখুঁত কাস্টম সলিউশন তৈরি করি।</p>
          </div>

          {/* Bento-Inspired Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1: Web Development (Large Box) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="p-3 bg-indigo-500/10 rounded-2xl w-fit mb-6">
                  <Globe className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">ওয়েব ডেভেলপমেন্ট ও নেক্সট-জেন পোর্টাল</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  আমরা সম্পূর্ণ কাস্টম রিঅ্যাক্ট এবং নেক্সট.জেএস ব্যবহার করে অত্যন্ত আল্ট্রা-ফাস্ট ল্যান্ডিং ও এন্টারপ্রাইজ পোর্টাল সার্ভিস তৈরি করি। এগুলো এসইও অপ্টিমাইজড এবং ১ সেকেন্ডের মধ্যে বিশ্বব্যাপী লোড নিতে সক্ষম।
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 mb-8">
                  <span className="flex items-center space-x-1.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> <span>আল্ট্রা-ফাস্ট এজ ক্যাশিং</span></span>
                  <span className="flex items-center space-x-1.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> <span>নিখুঁত এসইও ফ্রেন্ডলি মেটা</span></span>
                  <span className="flex items-center space-x-1.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> <span>রেসপন্সিভ গ্রিড লেআউট</span></span>
                  <span className="flex items-center space-x-1.5"><Check className="h-4 w-4 text-emerald-400 shrink-0" /> <span>পেমেন্ট গেটওয়ে ইন্টিগ্রেশন</span></span>
                </div>
              </div>
              <button 
                onClick={() => navigateTo('services')} 
                className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 group-hover:translate-x-1 transition-all text-left"
              >
                <span>আরও বিস্তারিত বিবরণ দেখুন</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Box 2: Custom Software */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-purple-500/10 rounded-2xl w-fit mb-6">
                  <Cpu className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">কাস্টম সফ্টওয়্যার অটোমেশন</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  আপনার প্রতিষ্ঠানের পুরনো এবং অগোছালো খাতা-পত্র বা এক্সেল ফাইলের ব্যবহার চিরতরে সমাপ্ত করতে একচ্ছত্র মালিকানার কাস্টম ব্যাকএন্ড অটোমেশন অ্যাপ্লিকেশন।
                </p>
              </div>
              <button 
                onClick={() => navigateTo('services')} 
                className="text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center space-x-1 cursor-pointer"
              >
                <span>সফটওয়্যার বিবরণ</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Box 3: Cross Platform Apps */}
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-cyan-500/10 rounded-2xl w-fit mb-6">
                  <Smartphone className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">অ্যান্ড্রয়েড ও আইওএস অ্যাপস</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Flutter এবং React Native দিয়ে উন্নত মানের হাইব্রিড মোবাইল অ্যাপ। নেটিভ অভিজ্ঞতাসম্পন্ন ইউজার ফ্লো যা ডিভাইস রিসোর্স সাশ্রয়ী।
                </p>
              </div>
              <button 
                onClick={() => navigateTo('services')} 
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
              >
                <span>অ্যাপস বিবরণ</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Box 4: LMS & ERP Combo (Large Box) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20 p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-emerald-500/10 rounded-2xl w-fit mb-6 flex items-center justify-center">
                  <Layers className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">স্মার্ট এন্টারপ্রাইজ ইআরপি ও এলএমএস প্ল্যাটফর্ম</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  শিক্ষা প্রতিষ্ঠানের শতভাগ পরিচালনা সহজ করতে কাস্টম এলএমএস ও বাণিজ্যের হিসাবরক্ষণ, এইচআর পেরোল এবং রানিং সাপ্লাই চেইনের নিখুঁত ডেটা কন্ট্রোল প্যানেল সম্বলিত ইআরপি সমাধান।
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs text-slate-400 mb-6">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="font-bold text-emerald-400">অ্যাকাউন্টিং</p>
                    <p className="text-[10px]">১০০% নির্ভুল</p>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="font-bold text-emerald-400">স্টাফ পেরোল</p>
                    <p className="text-[10px]">অটো ট্র্যাক</p>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-center">
                    <p className="font-bold text-emerald-400">লাইভ ক্লাস</p>
                    <p className="text-[10px]">ইনস্ট্যান্ট ব্রডকাস্ট</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigateTo('services')} 
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
              >
                <span>সলিউশন ওভারভিউ</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigateTo('services')}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/10 hover:border-white/20 transition cursor-pointer"
            >
              আমাদের সকল সেবাসমূহ একত্রে দেখুন
            </button>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE REDESS TECH (Enterprise vs Template) */}
      <section className="py-20 bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase tracking-wider">তুলনামূলক সুবিধা</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans">কেন সাধারণ টেমপ্লেট সাইট ছেড়ে REDESS TECH কাস্টম কোডিং বেছে নেবেন?</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                পাবলিক ওয়ার্ডপ্রেস টেমপ্লেট বা হ্যাকড প্লাগইন দিয়ে তৈরি ওয়েবসাইট প্রায়শই হ্যাক হয়, লোডিং টাইম ১০ সেকেন্ড ছাড়িয়ে যায় এবং বিজনেসের প্রয়োজন অনুযায়ী পরিবর্তন করা অসম্ভব। আমাদের কাস্টম কোডিং সলিউশন আপনাকে দেয় সীমাহীন স্বাধীনতা এবং সর্বোচ্চ নিরাপত্তা।
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-indigo-500/20 text-indigo-400 rounded-lg shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">১০০% নিজস্ব মালিকানার সোর্স কোড</h4>
                    <p className="text-xs text-slate-400">আমাদের হস্তান্তর শেষে সম্পূর্ণ ফাইলের লাইসেন্স ও সোর্স আপনার, কোন মান্থলি ড্রিবল চার্জ নেই।</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-indigo-500/20 text-indigo-400 rounded-lg shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">এন্টারপ্রাইজ লেভেল সিকিউরিটি ও ব্যাকআপ</h4>
                    <p className="text-xs text-slate-400">সুরক্ষিত পোস্টগ্রি ডাটাবেস ও অ্যামাজন ভিপিএস যা কোনো হ্যাকিং অ্যাটাক প্রতিরোধে সম্পূর্ণ সক্ষম।</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-indigo-500/20 text-indigo-400 rounded-lg shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">২৪/৭ সরাসরি হোয়াটসঅ্যাপ ও অন-কল সাপোর্ট</h4>
                    <p className="text-xs text-slate-400">যেকোনো ক্র্যাশ বা জিজ্ঞাসা মেটাতে আমাদের ডেডিকেটেড সাপোর্ট টিম সরাসরি সাড়া দেবে ৩ সেকেন্ডে।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Ordinary Template */}
              <div className="bg-slate-950/40 p-6 rounded-2xl border border-white/5 relative">
                <span className="absolute -top-3 right-4 px-2 py-0.5 bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[10px] rounded-full font-sans">অন্যান্য সাধারণ মেকার</span>
                <h4 className="text-slate-400 font-bold mb-4 font-sans mt-2">টেমপ্লেট ও থিম সলিউশন</h4>
                <ul className="space-y-3.5 text-xs text-slate-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-rose-500 shrink-0 select-none">✕</span>
                    <span>ধীরগতির লোডিং (৫-১০ সেকেন্ড)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rose-500 shrink-0">✕</span>
                    <span>সহজেই ভাইরাস ও ম্যালওয়্যার অ্যাটাক প্রবণ</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rose-500 shrink-0">✕</span>
                    <span>লিমিটেড ডিজাইন কাস্টমাইজেশন সুবিধা</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rose-500 shrink-0">✕</span>
                    <span>কোনো ডেডিকেটেড ডেভেলপার সাপোর্ট নেই</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rose-500 shrink-0">✕</span>
                    <span>বাৎসরিক অপ্রকাশিত হিডেন চার্জ বৃদ্ধি</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: REDESS Premium Custom */}
              <div className="bg-gradient-to-b from-indigo-950 to-slate-950 p-6 rounded-2xl border border-indigo-500/30 relative shadow-2xl">
                <span className="absolute -top-3 right-4 px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-[10px] rounded-full font-bold">সেরা পছন্দ</span>
                <h4 className="text-white font-black mb-4 font-sans mt-2 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-cyan-400 fill-current shrink-0" />
                  <span>REDESS TECH কাস্টম</span>
                </h4>
                <ul className="space-y-3.5 text-xs text-white">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 shrink-0 font-bold">✓</span>
                    <span className="font-semibold">রকেট স্পিড স্পেক (সর্বোচ্চ ১.২ সেকেন্ড)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    <span>১০০% ম্যালওয়্যারমুক্ত কাস্টম হ্যান্ডকোড</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    <span>আপনার ফ্যান্টাসি অনুযায়ী যেকোনো ডিজাইন</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    <span>২৪/৭ ডেডিকেটেড সরাসরি সাপোর্ট চ্যানেল</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    <span>সম্পূর্ণ ওয়ান-টাইম খরচে মালিকানা</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. FEATURED SOLUTIONS (Industry-Specific Tab Component) */}
      <section className="py-20 bg-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold uppercase">শিল্পভিত্তিক সমাধান</span>
            <h2 className="text-3xl font-bold font-sans">আপনার সুনির্দিষ্ট খাতের উপযুক্ত ডিজিটাল ফ্রেমওয়ার্ক</h2>
            <p className="text-slate-400 text-sm">ডোমেইন-নির্দিষ্ট দক্ষতা দিয়ে আমরা উৎপাদনশীলতা ও ব্যবসার ট্র্যাকিং সম্পূর্ণ অটোমেট করি।</p>
          </div>

          {/* Industry Selection Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {solutions.map((sol, index) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolutionIdx(index)}
                className={`px-4 py-2 text-xs rounded-xl font-semibold border transition duration-200 cursor-pointer ${
                  activeSolutionIdx === index 
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 border-indigo-500 text-white shadow-md' 
                    : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                }`}
              >
                {sol.industry}
              </button>
            ))}
          </div>

          {/* Active Industry Display Card */}
          <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-white font-sans">{solutions[activeSolutionIdx].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{solutions[activeSolutionIdx].description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">প্রধান সুযোগসমূহ</h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {solutions[activeSolutionIdx].benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">সফটওয়্যার ফিচারস</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {solutions[activeSolutionIdx].features.map((f, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4 text-center">
              <div className="p-4 bg-indigo-500/10 rounded-full w-fit mx-auto">
                <Award className="h-8 w-8 text-indigo-400 animate-bounce" />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">স্পেশাল ইন্ডাস্ট্রি প্ল্যান</h4>
              <p className="text-xs text-slate-400">আমরা এই সেবাটির জন্য কাস্টম ডেমো ফাইল প্রোটোটাইপ প্রস্তুত করতে পারি।</p>
              <button 
                onClick={() => navigateTo('quote')}
                className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 rounded-xl text-xs font-bold text-white shadow-md cursor-pointer"
              >
                পরামর্শ করুন ও কোটেশন নিন
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. DEVELOPMENT PROCESS TIMELINE */}
      <section className="py-20 bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold uppercase">কাজের পাইপলাইন</span>
            <h2 className="text-3xl font-bold font-sans">ধাপে ধাপে অত্যন্ত স্বচ্ছ প্রজেক্ট ডেভেলপমেন্ট প্রক্রিয়া</h2>
            <p className="text-slate-400 text-sm">কোন লুপহোল বা বিভ্রান্তি ছাড়াই, প্রথম থেকে লাইভ ডেক্স পর্যন্ত একটি পেশাদার কর্মধারা।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative group">
              <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition duration-300 space-y-4">
                <span className="text-4xl font-extrabold text-indigo-500/30 block font-mono">০১.</span>
                <h4 className="text-base font-bold text-white font-sans">বিশ্লেষণ ও আলোচনা</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  আপনার সাথে দীর্ঘ মিটিংয়ের মাধ্যমে আইটি প্রয়োজনীয়তা ও স্কেলিং ফিচারস নথিভুক্ত করি।
                </p>
                <span className="inline-block px-2.5 py-1 bg-white/5 rounded-lg text-[9px] text-indigo-400">১-৩ দিন সময়</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 hover:border-purple-500/30 transition duration-300 space-y-4">
                <span className="text-4xl font-extrabold text-purple-500/30 block font-mono">০২.</span>
                <h4 className="text-base font-bold text-white font-sans">ইউআই/ইউএক্স প্রোটোটাইপ</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ক্লিন ডিজাইনে ফিগমা ওয়্যারফ্রেম এবং ইন্টারঅ্যাক্টিভ লাইভ স্লাইডিং মক-আপ তৈরি করি।
                </p>
                <span className="inline-block px-2.5 py-1 bg-white/5 rounded-lg text-[9px] text-purple-400">৩-৭ দিন সময়</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition duration-300 space-y-4">
                <span className="text-4xl font-extrabold text-cyan-500/30 block font-mono">০৩.</span>
                <h4 className="text-base font-bold text-white font-sans">প্রিমিয়াম কোডিং</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  নেক্সট-জেএস বা কাস্টম ইঞ্জিন ব্যবহার করে সম্পূর্ণ আল্ট্রা-ক্লিন রেডি কোডে রূপান্তর।
                </p>
                <span className="inline-block px-2.5 py-1 bg-white/5 rounded-lg text-[9px] text-cyan-400">৭-১৫ দিন সময়</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition duration-300 space-y-4">
                <span className="text-4xl font-extrabold text-emerald-500/30 block font-mono">০৪.</span>
                <h4 className="text-base font-bold text-white font-sans">কঠোর টেস্টিং ও ডেপ্লয়</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  বাগ-ফ্রি পারফরম্যান্স নিরীক্ষার পর আপনার ক্লাউড ভিপিএসে প্রজেক্ট লাইভ সম্প্রচার।
                </p>
                <span className="inline-block px-2.5 py-1 bg-white/5 rounded-lg text-[9px] text-emerald-400">৩-৫ দিন সময়</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. PORTFOLIO PREVIEW SHOWCASE */}
      <section className="py-20 bg-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div className="space-y-3 max-w-xl">
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase">সফল কাজসমূহ</span>
              <h2 className="text-3xl font-bold font-sans">সাদরে পরিবেশিত কতিপয় প্রজেক্ট গ্যালারি</h2>
              <p className="text-slate-400 text-sm">হালকা ফাস্ট লোড ও কাস্টম ডেভেলপমেন্টের কিছু জীবন্ত উদাহরণ যা ক্লায়েন্টদের এনে দিয়েছে আকাশচুম্বী লাভ ও কাস্টমার সন্তুষ্টি।</p>
            </div>
            <button 
              onClick={() => navigateTo('portfolio')}
              className="mt-4 sm:mt-0 text-cyan-400 hover:text-cyan-300 font-bold text-sm flex items-center space-x-1 cursor-pointer"
            >
              <span>আমাদের সকল প্রজেক্ট দেখুন</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition duration-300 flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 referrerPolicy='no-referrer'" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[10px] uppercase font-bold text-cyan-400 border border-cyan-400/30">
                    {proj.category}
                  </span>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">ক্লায়েন্ট: {proj.client}</span>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-sans">{proj.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-2">{proj.description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 my-3">
                      {proj.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/5 rounded border border-white/5 text-[9px] text-slate-400 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {proj.metrics && (
                      <span className="inline-block w-full py-1.5 px-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold rounded-lg text-center font-sans">
                        {proj.metrics}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. TESTIMONIAL GLASSMORPHISM CARDS */}
      <section className="py-20 bg-slate-900 text-left relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase">সন্তুষ্ট ক্লায়েন্টবৃন্দ</span>
            <h2 className="text-3xl font-bold font-sans">আমাদের গ্রাহকদের আন্তরিক মূল্যায়ন ও প্রতিক্রিয়া</h2>
            <p className="text-slate-400 text-sm">বাংলাদেশের স্বনামধন্য ব্যবসায়ীগণ REDESS TECH এর তৈরি প্রযুক্তি ব্যবহারের ফলাফল মূল্যায়ন করেছেন।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Review 1 */}
            <div className="bg-slate-950/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative flex flex-col justify-between">
              <div className="absolute top-6 right-8 flex space-x-1">
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "রেডেস টেক আমাদের সাপ্লাই চেইনকে আমূল বদলে দিয়েছে। তাদের কাস্টম ইআরপি মডিউলের মাধ্যমে আমাদের ম্যানুফ্যাকচারিং কস্ট প্রায় ১২% হ্রাস পেয়েছে এবং প্রতিটি ফ্লোরে সঠিক সমন্বয় তৈরি হয়েছে।"
                </p>
                <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Client 1" className="w-12 h-12 rounded-full object-cover referrerPolicy='no-referrer'" />
                  <div>
                    <h4 className="text-sm font-bold text-white">কাজী শাহেদ হোসেন</h4>
                    <p className="text-xs text-slate-500">অপারেশন ডিরেক্টর, প্যাসিফিক টেক্সটাইল</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-950/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative flex flex-col justify-between">
              <div className="absolute top-6 right-8 flex space-x-1">
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <Star className="h-4 w-4 text-amber-400 fill-current" />
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "আমাদের আগের এলএমএস ক্র্যাশ করত বারবার। কিন্তু রেডেস ভাইদের ডেভলপ করা Next.js প্ল্যাটফর্মটিতে এখন ৫০,০০০+ শিক্ষার্থী সম্পূর্ণ স্মুথ লার্নিং অভিজ্ঞতা উপভোগ করে।"
                </p>
                <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Client 2" className="w-12 h-12 rounded-full object-cover referrerPolicy='no-referrer'" />
                  <div>
                    <h4 className="text-sm font-bold text-white">মিসেস ফারিহা জান্নাত</h4>
                    <p className="text-xs text-slate-500">প্রতিষ্ঠাতা, আমার একাডেমি</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. FAQ ACCORDION PREVIEW */}
      <section className="py-20 bg-slate-950 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">জিজ্ঞাসিত প্রশ্নাবলি</span>
            <h2 className="text-3xl font-bold font-sans">সাধারণ গ্রাহক ও প্রযুক্তিজিজ্ঞাসা</h2>
            <p className="text-slate-400 text-sm">সাধারণ কিছু বিষয় যা আমাদের পার্টনারদের সিদ্ধান্ত নিতে প্রায়শই প্রয়োজন হয়।</p>
          </div>

          <div className="space-y-4">
            {faqItems.slice(0, 4).map((faq, index) => (
              <div 
                key={faq.id} 
                className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition duration-300 cursor-pointer"
                onClick={() => setOpenFaqIdx(openFaqIdx === index ? null : index)}
              >
                <div className="p-5 flex justify-between items-center bg-slate-900">
                  <h4 className="text-sm sm:text-base font-bold text-white font-sans">{faq.question}</h4>
                  <span className="text-indigo-400 font-bold ml-4">
                    {openFaqIdx === index ? '−' : '+'}
                  </span>
                </div>
                {openFaqIdx === index && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-slate-900/60 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => navigateTo('faq')}
              className="text-sm font-bold text-indigo-400 hover:text-indigo-300 cursor-pointer"
            >
              সকল প্রশ্নের উত্তর দেখুন
            </button>
          </div>

        </div>
      </section>

      {/* 12. FINAL HIGH-CONVERTING CALL TO ACTION (CTA) */}
      <section className="py-16 bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 relative" id="final-conversion-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-xs font-bold font-mono tracking-widest uppercase inline-block">শুরু করতে আজই কথা বলুন</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-sans">あなたのアイデア? আসুন একসাথে সেটিকে বাস্তব রূপ দিই!</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            কোন বাৎসরিক হিডেন চার্জ নেই, সম্পূর্ণ স্বচ্ছ চুক্তিপত্র ও নিবেদিত কাস্টমার সাপোর্ট। আপনার ব্যবসার ধরণ বুঝে আমাদের প্রকৌশলী টিম মাত্র ৩০ মিনিটে আপনাকে একটি প্রাথমিক বাজেট প্রপোজাল সরবরাহ করবে।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigateTo('quote')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/40 cursor-pointer text-sm"
              id="final-cta-request-proposal"
            >
              বাজেট কোটেশন ক্যালকুলেট করুন
            </button>
            <button
              onClick={onOpenOffer}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold cursor-pointer text-sm"
              id="final-cta-special-offer"
            >
              বিশেষ ছাড় পান
            </button>
          </div>

          <div className="pt-6 flex justify-center items-center space-x-6 text-slate-400 text-xs">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>১০০% হস্তান্তর সিকিউর</span>
            </span>
            <span>|</span>
            <span className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span>সহজ লাইভ সাপোর্ট আপডেট</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
