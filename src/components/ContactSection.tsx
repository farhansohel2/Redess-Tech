import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Compass,
  Plus,
  Minus 
} from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setIsSuccess(true);
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="text-white py-12 space-y-16 text-left" id="contact-parent">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">যোগাযোগ করুন</span>
        <h1 className="text-4xl font-extrabold font-sans">নতুন প্রজেক্ট নিয়ে আজই কথা বলুন</h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          আপনার যেকোনো প্রযুক্তি অনুসন্ধান বা এন্টারপ্রাইজ চালুর প্রাক্কালে আমাদের সাথে সরাসরি যোগাযোগ করুন। আমাদের বিজনেস এনালিস্ট টিম খুব অল্প সময়ে প্রপোজাল রিপোর্ট বুঝিয়ে দেবে।
        </p>
      </section>

      {/* Main layout column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold font-sans">REDESS প্রাতিষ্ঠানিক তথ্য কেন্দ্র</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              সরাসরি অফিসে এসে কফি খেতে খেতে আমাদের সিইও বা প্রযুক্তি প্রধানের সাথে আপনার ব্যবসায়িক সফটওয়্যার মডিউল ডিজাইন নিয়ে দীর্ঘ আলোচনার জন্য সাদর আমন্ত্রণ।
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wide">সরাসরি অফিস ঠিকানা (Headquarters)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    রুম ৫০২, লেভেল ৫, জাব্বার টাওয়ার,<br />
                    রোড ১১, বনানী, ঢাকা-১২১৩, বাংলাদেশ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wide">ফোন এবং মোবাইল কন্ট্যাক্ট</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    মোবাইল হটলাইন: +৮৮০ ১৭৪৫-৬৮৫৩৪৪<br />
                    সাপোর্ট ডেস্ক: +৮৮০ ২-৯৮৪৫৭৬৫ (রবি-বৃহস্পতিবার)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl shrink-0 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wide">অফিসিয়াল ইমেইল বার্তা</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    ব্যবসায়িক তথ্য: info@redesstech.online<br />
                    পরামর্শ ও ক্যোয়ারী: support@redesstech.online
                  </p>
                </div>
              </div>
            </div>

            {/* Quick whatsapp floating link */}
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-6 w-6 text-emerald-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white">ইনস্ট্যান্ট হোয়াটসঅ্যাপ রেসপন্স</h5>
                  <p className="text-[10px] text-slate-400">৩ সেকেন্ডের মধ্যে প্রতিনিধি চ্যাট</p>
                </div>
              </div>
              <a 
                href="https://wa.me/8801745685344"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                চ্যাট শুরু করুন
              </a>
            </div>
          </div>

          {/* Right form submission columns */}
          <div className="lg:col-span-7 bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white font-sans">কর্পোরেট ক্যোয়ারী ফর্ম</h3>
            <p className="text-xs text-slate-400">আমাদের প্রযুক্তি প্রকৌশলী টিম এই ফ্রম সাবমিটের ২৪ ঘন্টার মধ্যে বিস্তারিত এস্টিমেট রিপ্লাই বুকিং করবে।</p>

            {isSuccess ? (
              <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center space-y-4">
                <div className="p-3 bg-emerald-500/10 rounded-full w-fit mx-auto text-emerald-400">
                  <CheckCircle2 className="h-10 w-10 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white font-sans">ধন্যবাদ, আপনার বার্তাটি সফলভাবে প্রেরণ করা হয়েছে!</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  আমাদের একজন ডেডিকেটেড বিজনেস ডেভেলপমেন্ট কনসালটেন্ট দ্রুতই আপনার সরবরাহকৃত ইমেইল ও মোবাইল নম্বরে যোগাযোগ সম্পাদন করবেন।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">আপনার নাম *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="যেমন: মো: হাসিব রহমান"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">প্রতিষ্ঠানের নাম</label>
                    <input 
                      type="text" 
                      placeholder="যেমন: হাসিব গ্রুপ অব ইন্ডাস্ট্রিজ"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">ইমেইল অ্যাড্রেস *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="যেমন: hasib@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">মোবাইল নম্বর *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="যেমন: ০১৭********"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">মেসেজ / প্রজেক্ট রিকোয়ারমেন্ট বিবরণ *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="আপনার কাজের বিবরণ সংক্ষেপে লিখুন। কোন কোন মডিউল বা কন্টেন্ট যুক্ত করা প্রয়োজন..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>বার্তা সম্পন্ন প্রেরণ করুন</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* STUNNING PREMIUM DARK CSS MAP SIMULATOR ENVELOPE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white font-sans">গুগল ম্যাপ সিমুলেশন (Jabbar Tower Offices Location)</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-0.5">LOCATION SATELLITE: JABBAR TOWER, BANANI ROAD 11, DHAKA</p>
            </div>
            
            {/* Zoom Controls mock */}
            <div className="flex space-x-2">
              <button 
                onClick={() => setZoomLevel(Math.min(3, zoomLevel + 1))}
                className="p-2 bg-slate-950 border border-white/10 hover:bg-slate-800 text-white rounded-xl text-xs shrink-0 cursor-pointer"
                title="Zoom In"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(Math.max(1, zoomLevel - 1))}
                className="p-2 bg-slate-950 border border-white/10 hover:bg-slate-800 text-white rounded-xl text-xs shrink-0 cursor-pointer"
                title="Zoom Out"
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Map canvas mock */}
          <div className="h-80 w-full bg-slate-950 rounded-2xl relative overflow-hidden border border-white/5 flex items-center justify-center">
            
            {/* Grid street layout mockup */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Simulated streets lines */}
            <div className="absolute top-1/2 left-0 w-full h-8 bg-slate-900 -translate-y-1/2 flex items-center pl-6 pointer-events-none">
              <span className="text-[10px] font-mono tracking-widest text-slate-700">BANANI ROAD 11 // STREET</span>
            </div>
            <div className="absolute left-1/3 top-0 w-10 h-full bg-slate-900 flex items-center justify-center rotate-12 pointer-events-none">
              <span className="text-[10px] font-mono tracking-widest text-slate-700 rotate-90">BANANI AVENUE</span>
            </div>

            {/* Neon coordinate pinpoint pin marker */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 bg-slate-900/90 border border-indigo-500/40 rounded-xl shadow-2xl z-15">
              <div className="relative flex justify-center mb-1">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500" />
              </div>
              <h5 className="text-xs font-bold text-white font-sans">JABBAR TOWER (রুম ৫০২)</h5>
              <p className="text-[9px] text-cyan-400 leading-none mt-1">REDESS TECH HEADQUARTERS</p>
            </div>

            {/* Coordinate compass widget */}
            <div className="absolute bottom-4 left-4 p-2 bg-slate-900 border border-white/10 rounded-lg text-[9px] text-slate-500 font-mono tracking-tight flex items-center space-x-1">
              <Compass className="h-3.5 w-3.5 text-indigo-400 animate-spin-slow" />
              <span>LAT: 23.7937° N, LON: 90.4066° E</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
