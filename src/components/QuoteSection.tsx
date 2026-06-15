import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  DollarSign, 
  Calendar 
} from 'lucide-react';

export default function QuoteSection() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('web-dev');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['cms']);
  const [budgetRange, setBudgetRange] = useState('medium');
  const [timelineRange, setTimelineRange] = useState('1m');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  const servicesOption = [
    { id: 'web-dev', label: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট', desc: ' Next.js ও আধুনিক রিয়্যাক্ট হ্যান্ডকোড ওয়েবসাইট' },
    { id: 'custom-software', label: 'কাস্টম সফ্টওয়্যার অটোমেশন', desc: 'ব্যবসায়িক ক্রিয়াকলাপের জন্য কাস্টম সলিউশন' },
    { id: 'mobile-app', label: 'মোবাইল অ্যাপ্লিকেশন', desc: 'অ্যান্ড্রয়েড এবং আইওএস ক্রস-প্ল্যাটফর্ম অ্যাপস' },
    { id: 'erp-lms', label: 'সম্মিলিত ERP / LMS ইঞ্জিন', desc: 'স্মার্ট অ্যাকাউন্টিং পেরোল বা লার্নিং ড্যাশবোর্ড' },
    { id: 'ecommerce', label: 'ই-কমার্স ওয়েবসাইট', desc: 'পেমেন্ট গেটওয়ে বিকাশ-রকেট অটোমেশনসহ স্টোরফ্রন্ট' },
    { id: 'ai-bot', label: 'এআই ও চ্যাটবট ইন্টিগ্রেশন', desc: 'বাংলা জেনারেটিভ চ্যাটবট ও প্রেডিক্টিভ সেলস মডেল' }
  ];

  const featuresOption = [
    { id: 'cms', label: 'নিজস্ব কাস্টম এডমিন প্যানেল (CMS)' },
    { id: 'payment', label: 'বিকাশ-রকেট-নগদ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন' },
    { id: 'multilang', label: 'মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট (বাংলা ও ইংরেজি)' },
    { id: 'auth', label: 'মাল্টি-রোল ইউজার লগইন সিকিউরিটি' },
    { id: 'seo', label: 'হাই-এন্ড গুগল এসইও অন-পেজ অপ্টিমাইজেশন' },
    { id: 'chat', label: 'লাইভ চ্যাট ও হোয়াটসঅ্যাপ কাস্টমার সাপোর্ট উইজেট' }
  ];

  const budgetOption = [
    { id: 'economy', label: '৳১৫,০০০ - ৳৩৫,০০০ (স্টার্টার স্কেলিং)' },
    { id: 'medium', label: '৳৩৫,০০০ - ৳৮৫,০০০ (প্রফেশনাল স্কেলিং)' },
    { id: 'enterprise', label: '৳৮৫,০০০+ (এন্টারপ্রাইজ সলিউশন)' }
  ];

  const timelineOption = [
    { id: '2w', label: 'খুব দ্রুত (২ সপ্তাহ সময়)' },
    { id: '1m', label: 'স্বাভাবিক (১ মাস সময়)' },
    { id: '3m', label: 'নিয়মতান্ত্রিক দীর্ঘমেয়াদী (২-৩ মাস সময়)' }
  ];

  const handleFeatureToggle = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(x => x !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail && clientPhone) {
      const generatedCode = 'RDT-QUOTE-' + Math.floor(100000 + Math.random() * 900000);
      setQuoteId(generatedCode);
      setIsDone(true);
    }
  };

  const getServiceLabel = () => {
    const item = servicesOption.find(s => s.id === serviceType);
    return item ? item.label : '';
  };

  const getBudgetLabel = () => {
    const item = budgetOption.find(b => b.id === budgetRange);
    return item ? item.label : '';
  };

  return (
    <div className="text-white py-12 max-w-3xl mx-auto px-4 text-left" id="quote-parent-wrapper">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-10">
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase">কোটেশন ক্যালকুলেটর</span>
        <h1 className="text-3xl font-extrabold font-sans">প্রজেক্ট বাজেট এবং প্রস্তাবনা জেনারেটর</h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          আপনার প্রয়োজনীয় সেবাসমূহ সিলেক্ট করে ৫টি সহজ ধাপে আপনার প্রজেক্টের আনুমানিক মূল্য ও কাজের সময়কাল বের করুন।
        </p>

        {/* Step progress count indicators */}
        {!isDone && (
          <div className="flex items-center justify-center space-x-2 pt-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <div 
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step ? 'w-10 bg-indigo-500' : s < step ? 'w-3 bg-emerald-500' : 'w-3 bg-slate-800'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {isDone ? (
        /* SUCCESS RESULTS PAGE */
        <div className="bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 text-center shadow-2xl">
          <div className="p-3 bg-emerald-500/10 rounded-full w-fit mx-auto text-emerald-400">
            <CheckCircle2 className="h-12 w-12 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">আপনার রিকোয়ারমেন্ট প্রপোজাল সফল হয়েছে!</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              আপনার সরবরাহকৃত তথ্যের ওপর ভিত্তি করে আমাদের স্বয়ংক্রিয় সিস্টেম একটি প্রাথমিক বাজেট কোট এস্টিমেট জেনারেট করেছে। ৩ ঘন্টার মধ্যে আমাদের বিজনেস এনালিস্ট কাস্টম প্রপোজাল শীট পিডিএফ ফাইল সহ আপনার হোয়াটসঅ্যাপে যোগাযোগ করবেন।
            </p>
          </div>

          {/* Code summary */}
          <div className="p-5 bg-slate-950 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">নির্বাচিত পরিষেবা</span>
              <p className="text-xs font-bold text-white">{getServiceLabel()}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">টার্গেট আনুমানিক বাজেট</span>
              <p className="text-xs font-bold text-emerald-400">{getBudgetLabel()}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">যোগাযোগের রেফারেন্স আইডি</span>
              <p className="text-xs font-mono font-bold text-cyan-400 tracking-wider font-semibold">{quoteId}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">আবেদনকারী ইমেইল</span>
              <p className="text-xs font-mono font-bold text-slate-300">{clientEmail}</p>
            </div>
          </div>

          <button
            onClick={() => {
              setStep(1);
              setIsDone(false);
            }}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold border border-white/10 cursor-pointer"
          >
            নতুন কোটেশন হিসাব করুন
          </button>
        </div>
      ) : (
        /* ACTIVE STEP WIZARD FORM */
        <div className="bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 relative shadow-2xl">
          
          {/* STEP 1: SERVICE TYPE */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-sans text-white border-l-4 border-indigo-500 pl-2.5 leading-none">ধাপ ১: আপনার কাঙ্ক্ষিত পরিষেবাটি বাছাই করুন</h3>
              <p className="text-xs text-slate-400">REDESS TECH-এর যে সুনির্দিষ্ট শাখায় আপনি কাজ করাতে আগ্রহী:</p>
              
              <div className="grid grid-cols-1 gap-3 pt-2">
                {servicesOption.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setServiceType(opt.id)}
                    className={`w-full p-4 rounded-xl text-left border transition duration-150 flex items-center justify-between cursor-pointer ${
                      serviceType === opt.id 
                        ? 'bg-indigo-500/10 border-indigo-500 text-white shadow' 
                        : 'bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold font-sans">{opt.label}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                    </div>
                    {serviceType === opt.id && (
                      <span className="p-1 bg-indigo-500 rounded-full text-white">
                        <Check className="h-4.5 w-4.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: PROJECT FEATURES */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-sans text-white border-l-4 border-indigo-500 pl-2.5 leading-none">ধাপ ২: প্রজেক্টে আর কি কি মডিউল প্রয়োজন?</h3>
              <p className="text-xs text-slate-400">আপনার ওয়েবসাইটে যেসব কার্যকরী টুলস বা মেক ইন সেশন যুক্ত করতে চান:</p>
              
              <div className="grid grid-cols-1 gap-3 pt-2">
                {featuresOption.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleFeatureToggle(opt.id)}
                    className={`w-full p-4 rounded-xl text-left border transition duration-150 flex items-center justify-between cursor-pointer ${
                      selectedFeatures.includes(opt.id) 
                        ? 'bg-purple-500/10 border-purple-500 text-white shadow' 
                        : 'bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold font-sans">{opt.label}</span>
                    <div className={`h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                      selectedFeatures.includes(opt.id) ? 'bg-purple-500 border-purple-500 text-white' : 'border-white/20'
                    }`}>
                      {selectedFeatures.includes(opt.id) && <Check className="h-3 w-3" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: BUDGET RANGE */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-sans text-white border-l-4 border-indigo-500 pl-2.5 leading-none">ধাপ ৩: আপনার আনুমানিক বা টার্গেট বাজেট</h3>
              <p className="text-xs text-slate-400 font-sans">এই প্রজেক্টের কাজের জন্য আপনার বরাদ্দকৃত বাজেটের ধারণা দিন:</p>
              
              <div className="grid grid-cols-1 gap-3 pt-2">
                {budgetOption.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBudgetRange(opt.id)}
                    className={`w-full p-4 rounded-xl text-left border transition duration-155 flex items-center justify-between cursor-pointer ${
                      budgetRange === opt.id 
                        ? 'bg-cyan-500/10 border-cyan-500 text-white' 
                        : 'bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold font-sans">{opt.label}</span>
                    {budgetRange === opt.id && (
                      <span className="p-1 bg-cyan-500 rounded-full text-white">
                        <Check className="h-4.5 w-4.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: TIMELINE */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-sans text-white border-l-4 border-indigo-500 pl-2.5 leading-none">ধাপ ৪: প্রজেক্ট ডেলিভারি সময়সীমা (Timeline)</h3>
              <p className="text-xs text-slate-400">এই আইডিয়াটি কত দিনের মধ্যে সম্পন্ন করা প্রয়োজন:</p>
              
              <div className="grid grid-cols-1 gap-3 pt-2">
                {timelineOption.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setTimelineRange(opt.id)}
                    className={`w-full p-4 rounded-xl text-left border transition duration-150 flex items-center justify-between cursor-pointer ${
                      timelineRange === opt.id 
                        ? 'bg-emerald-500/10 border-emerald-500 text-white' 
                        : 'bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold font-sans">{opt.label}</span>
                    {timelineRange === opt.id && (
                      <span className="p-1 bg-emerald-500 rounded-full text-white">
                        <Check className="h-4.5 w-4.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: CONTACT CREDENTIALS */}
          {step === 5 && (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h3 className="text-lg font-bold font-sans text-white border-l-4 border-indigo-500 pl-2.5 leading-none">ধাপ ৫: প্রস্তাবনা প্রেরণের জন্য আপনার কন্ট্যাক্ট</h3>
              <p className="text-xs text-slate-400">অনুগ্রহ করে নিজের সচল ইমেইল ও মোবাইল নম্বরটি নিশ্চিত করুন:</p>

              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400">আপনার নাম *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="যেমন: হাসিব আহমেদ"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400">ইমেইল ঠিকানা *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="যেমন: hasib@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400">মোবাইল নম্বর *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="যেমন: ০১৭********"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400">কোম্পানির নাম (ঐচ্ছিক)</label>
                    <input 
                      type="text" 
                      placeholder="যেমন: হাসিব এন্টারপ্রাইজ"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="hidden" 
                id="hidden-submit-quote-btn" 
              />
            </form>
          )}

          {/* BACK AND NEXT BUTTONS CONTROL CONTAINER */}
          <div className="pt-6 border-t border-white/5 flex justify-between items-center bg-slate-900">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
                step === 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>পূর্ববর্তী ধাপ</span>
            </button>

            {step === 5 ? (
              <button
                onClick={() => {
                  const submitBtn = document.getElementById('hidden-submit-quote-btn');
                  if (submitBtn) submitBtn.click();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold shadow transition flex items-center space-x-1.5 cursor-pointer"
              >
                <span>বাজেট প্রপোজাল তৈরি করুন</span>
                <Check className="h-4.5 w-4.5" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition flex items-center space-x-1.5 cursor-pointer"
              >
                <span>পরবর্তী ধাপ</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
