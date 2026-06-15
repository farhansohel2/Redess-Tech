import React from 'react';
import { 
  Award, 
  Target, 
  Eye, 
  Check, 
  Users, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';
import { teamMembers } from '../data';

export default function AboutSection() {
  const values = [
    {
      title: 'নিখুঁত কোড ও নিরাপত্তা',
      desc: 'আমরা স্প্যাগেটি কোড পরিহার করে শতভাগ মডুলার আর্কিটেকচার অনুসরন করি, যা সিকিউরিটি অডিট দ্বারা প্রত্যয়িত।',
      icon: ShieldCheck,
      color: 'text-indigo-400 bg-indigo-500/10'
    },
    {
      title: 'গ্রাহকের ব্যবসায়িক সন্তুষ্টি',
      desc: 'আমাদের চূড়ান্ত লক্ষ্য গ্রাহকের রেভিনিউ প্রবৃদ্ধি নিশ্চিত করা। তাই আমরা প্রতিটি প্রজেক্টে রূপান্তর ট্র্যাকিং করি।',
      icon: Target,
      color: 'text-cyan-400 bg-cyan-500/10'
    },
    {
      title: 'সর্বদা নতুন উদ্ভাবন',
      desc: '২০২৬ সালের সর্বাধুনিক সার্ভারহীন আর্কিটেকচার, এজ ডেলিভারি এবং জেনারেটিভ এআই মডিউল আমরা কাজে লাগাই।',
      icon: Compass,
      color: 'text-purple-400 bg-purple-500/10'
    }
  ];

  const timeline = [
    { year: '২০২২', title: 'যাত্রা শুরু', desc: 'বনানীর একটি ছোট কার্যালয়ে ৩ জন দূরদর্শী ইঞ্জিনিয়ার ও ডিজাইনার নিয়ে সীমিত পরিসরে REDESS TECH শুরু হয়।' },
    { year: '২০২৩', title: '৫০+ সফল ডিল', desc: 'বাংলাদেশের শীর্ষ খাদ্য ও টেক্সটাইল কোম্পানিদের কাস্টম সফটওয়্যার ও ডাটাবেস মাইগ্রেশন সাপোর্ট সমাধান দিয়ে বিশেষ খ্যাতি অর্জন।' },
    { year: '২০২৪', title: 'এআই প্রজেক্ট লঞ্চ', desc: 'বাংলা প্রাকৃতিক বাচনভঙ্গিতে গ্রাহক সেবা দিতে সক্ষম প্রথম জেনারেটিভ এআই চ্যাটবট ফ্রেমওয়ার্ক উদ্ভাবন ও বাজারে মুক্তি।' },
    { year: '২০২৫-২৬', title: 'শীর্ষে পদার্পণ', desc: '২৮০টির বেশি সফল সলিউশন ডেলিভারি সম্পন্ন করে redesstech.online বর্তমানে দেশের স্বনামধন্য বিশ্বস্ত প্রিমিয়াম আইটি সলিউশন।' }
  ];

  return (
    <div className="text-white py-12 space-y-20 text-left" id="about-section">
      
      {/* Page Header */}
      <section className="relative text-center max-w-3xl mx-auto px-4">
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase">আমাদের পরিচয়</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-6 font-sans">আমরা পরিবর্তন আনছি প্রযুক্তির তুলিতে</h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          REDESS TECH কেবল একটি আইটি ফার্ম নয়, আমরা এমন একদল সাহসী প্রকৌশলী, ডিজাইনার ও পণ্য পরিকল্পনাকারী যাদের লক্ষ্য দেশীয় ব্যবসাকে বিশ্বমানের ডিজিটাল রূপ দেয়া।
        </p>
      </section>

      {/* Story & Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-sans">লক্ষে অবিচল আমাদের পেছনের ইতিহাস</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              উন্নত মানের কাস্টম কোডিং এবং স্বচ্ছ ব্যবসায়িক লেনদেন এই দুটি মূল স্তম্ভকে ভিত্তি ধরে ২০২২ সালে আমাদের যাত্রা আরম্ভ হয়। বাজারে অনেক কম-দামী নিম্নমানের ওয়ার্ডপ্রেস থিম মেকার ছিল, কিন্তু নিরাপদ ও স্কেলেবল কাস্টম সফটওয়্যার তৈরি করার মতো নির্ভরযোগ্য প্রতিষ্ঠানের অভাব আমরা পূরণ করেছি।
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              আজ আমাদের ডেডিকেটেড সাপোর্ট টিম চব্বিশ ঘণ্টা বাংলাদেশের যেকোনো কোণ থেকে প্রজেক্টগুলোর হেলথ ও আপ-টাইম চেকআপ মনিটর করছে। আমরা আমাদের প্রতিটি হস্তান্তরকৃত সোর্স ফাইলের ওপর স্বাধীন মালিকানা নিশ্চিত করি।
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-3xl font-extrabold text-cyan-400">৯৯.৪%</span>
                <p className="text-xs text-slate-400 mt-1">ক্লায়েন্টের ইতিবাচক সন্তুষ্টি রিভিউ</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-3xl font-extrabold text-indigo-400">১০+ দেশ</span>
                <p className="text-xs text-slate-400 mt-1">আন্তর্জাতিক পোর্টফোলিও ক্লায়েন্ট সেবা</p>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-3xl opacity-20" />
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="p-4 bg-indigo-500/10 rounded-full w-fit">
                <Globe2 className="h-8 w-8 text-indigo-400" />
              </div>
              <blockquote className="text-base italic text-slate-300">
                "আমরা কোনো সস্তা শর্টকাট নিই না। আমাদের তৈরি সফটওয়্যারের প্রতিটি লাইন সযত্নে হ্যান্ড-কোডেড, যা গ্রাহকদের ব্যবসার স্থায়ী নিরাপত্তা নিশ্চিত করে।"
              </blockquote>
              <div>
                <h4 className="text-sm font-bold text-white">ফারহান আহমেদ সোহেল</h4>
                <p className="text-xs text-slate-500">প্রতিষ্ঠাতা ও সিইও, REDESS TECH</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl w-fit">
              <Target className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold font-sans">আমাদের সুনির্দিষ্ট মিশন (Mission)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              সুলভ মূল্যে দেশীয় মাঝারি ও বৃহৎ ব্যবসা প্রতিষ্ঠানগুলোকে বিশ্বমানের স্কেলেবল কাস্টম সফটওয়্যার, দক্ষ ইউআই/ইউএক্স ডিজাইন কাঠামো এবং প্রিমিয়াম হোস্টিং সলিউশন প্রদানের মাধ্যমে ১০০% স্বয়ংক্রিয় করা।
            </p>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl w-fit">
              <Eye className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold font-sans">আমাদের বৈপ্লবিক ভিশন (Vision)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              আগামী ২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার অন্যতম শীর্ষ নির্ভরযোগ্য প্রযুক্তি অংশীদার হিসেবে স্থান অধিকার করা এবং কাস্টম বিজ কোড ও এআই অটোমেশনে একচ্ছত্র আধিপত্য ও বিশ্বাসযোগ্যতা বজায় রাখা।
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">আমাদের মূল চালিকাশক্তি ও মূল্যবোধ</h2>
          <p className="text-slate-400 text-sm">যেসব চিরন্তন আদর্শের ওপর দাঁড়িয়ে আছে REDESS TECH এর প্রতিটি কর্মপ্রয়াস।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 bg-slate-950 rounded-2xl border border-white/5 space-y-4">
                <div className={`p-3 rounded-xl w-fit ${v.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-white font-sans">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Company Timeline */}
      <section className="bg-slate-950 py-16 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-sans">আমাদের প্রগতিশীল টাইমলাইন</h2>
            <p className="text-slate-400 text-sm mt-2">সংক্ষিপ্ত যাত্রাপথ থেকে বর্তমানের শীর্ষ আইটি লিডার রূপে আত্মপ্রকাশের গল্প।</p>
          </div>

          <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-32 space-y-8">
            {timeline.map((t, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-950 group-hover:bg-cyan-400 group-hover:scale-125 transition" />
                
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-cyan-400 tracking-wide">{t.year}</span>
                  <h4 className="text-base font-bold text-white font-sans">{t.title}</h4>
                  <p className="text-xs text-slate-400 max-w-2xl">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase">দক্ষ নেতৃত্ব</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">আমাদের লিডারশিপ ও প্রকৌশলী টিম</h2>
          <p className="text-slate-400 text-sm">আপনার স্বপ্ন ও বাণিজ্যিক কল্পনাকে কোড লাইনে যারা সজীব করে তোলেন।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-slate-950 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/40 transition duration-300 space-y-4 text-center">
              <div className="h-44 w-44 mx-auto rounded-full overflow-hidden border-2 border-indigo-500/30">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover referrerPolicy='no-referrer'" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans">{member.name}</h4>
                <p className="text-xs text-cyan-400 font-mono mt-1">{member.role}</p>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements / Certifications */}
      <section className="py-12 bg-slate-900/60 max-w-7xl mx-auto px-4 rounded-3xl border border-white/5 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 font-sans">আন্তর্জাতিক প্রাতিষ্ঠানিক স্বীকৃতিপাক</h3>
        <div className="flex flex-wrap items-center justify-around gap-6 opacity-80">
          <div className="p-4 bg-slate-950 rounded-xl border border-white/5 w-40 text-center">
            <Award className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-white">ISO 9001:2015</h4>
            <p className="text-[9px] text-slate-500 mt-1">কোয়ালিটি ম্যানেজমেন্ট সিস্টেম</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-white/5 w-40 text-center">
            <ShieldCheck className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-white">OWASP Secure</h4>
            <p className="text-[9px] text-slate-500 mt-1">কঠোর ডেটা প্রটেকশন</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-white/5 w-40 text-center">
            <Users className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-white">AWS Member Partner</h4>
            <p className="text-[9px] text-slate-500 mt-1">ক্লাউড সার্ভিসেস</p>
          </div>
        </div>
      </section>

    </div>
  );
}
