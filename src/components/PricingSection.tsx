import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  Star, 
  ArrowRight,
  TrendingUp,
  Percent
} from 'lucide-react';
import { pricingPlans } from '../data';

interface PricingSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function PricingSection({ setCurrentPage }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const comparisonFeatures = [
    { name: 'পৃষ্ঠার সংখ্যা (Pages Included)', starter: '৫টি ইউনিক পেজ', pro: '১৫টি ইউনিক পেজ', enterprise: 'সীমাহীন পেজ' },
    { name: 'অ্যাডমিন কন্ট্রোল প্যানেল (CMS)', starter: '✕ (স্ট্যাটিক)', pro: '১০০% কাস্টম সিএমএস', enterprise: 'উন্নত রোল-অথরাইজেশন প্যানেল' },
    { name: 'পেমেন্ট গেটওয়ে ইন্টিগ্রেশন', starter: '✕', pro: 'বিকাশ, রকেট, নগদ, ভিসা', enterprise: 'মাল্টি-কারেন্সি ও সাবস্ক্রিপশন গেটওয়ে' },
    { name: 'হোস্টিং সার্ভার স্পেক', starter: '১ বছরের ফ্রি ক্লাউড', pro: 'লাইভ নোড ক্যাশিং সার্ভার', enterprise: 'ডেডিকেটেড ভিপিএস ক্লাউড ক্লাস্টার' },
    { name: 'সার্ভিস কোড ও ব্যাকওভার', starter: '২ মাস', pro: '৬ মাস', enterprise: '১২ মাস প্রাইওরিটি' },
    { name: 'মোবাইল অ্যান্ড্রয়েড অ্যাপ', starter: '✕', starterAlt: 'চার্জ প্রযোজ্য', pro: 'ঐচ্ছিক অ্যাড-অন', enterprise: '১টি সম্পূর্ণ হাইব্রিড অ্যাপ ফ্রি' }
  ];

  return (
    <div className="text-white py-12 space-y-16 text-left" id="pricing-layout">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase">বাজেট ও প্লাকস</span>
        <h1 className="text-4xl font-extrabold font-sans">আপনার বিজনেসের উপযোগী নিখুঁত বাজেট প্ল্যান</h1>
        <p className="text-slate-400 text-sm">
          কোনো বাৎসরিক অপ্রকাশিত চার্জ নেই। আপনার ক্রাফট মেকিং প্রয়োজন অনুযায়ী সঠিক প্যাকেজটি বেছে নিন অথবা কাস্টম কোটেশন বিল্ডার দিয়ে বাজেট নিজেই হিসেব করুন।
        </p>

        {/* Dynamic Monthly/Yearly Toggle with discount flag */}
        <div className="flex items-center justify-center space-x-4 pt-6">
          <span className={`text-xs font-bold font-sans ${!isYearly ? 'text-indigo-400' : 'text-slate-400'}`}>মাসিক বিলিং</span>
          
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 flex items-center bg-slate-800 rounded-full p-1 border border-white/10 transition duration-300 focus:outline-none cursor-pointer"
            id="toggle-billing-cycle"
          >
            <div className={`bg-gradient-to-r from-indigo-500 to-cyan-500 w-6 h-6 rounded-full shadow-md transform transition duration-300 ${isYearly ? 'translate-x-6' : ''}`} />
          </button>

          <span className={`text-xs font-bold font-sans flex items-center ${isYearly ? 'text-cyan-400' : 'text-slate-400'}`}>
            <span>বাৎসরিক প্যাকেজ</span>
            <span className="ml-1.5 px-2 py-0.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[9px] rounded-full font-bold flex items-center">
              <Percent className="h-2.5 w-2.5 mr-0.5" />
              <span>২ মাস সম্পূর্ণ ফ্রি!</span>
            </span>
          </span>
        </div>
      </section>

      {/* Plan Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-slate-900 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition duration-300 ${
                plan.isPopular 
                  ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-2xl scale-102 bg-gradient-to-b from-indigo-950/20 to-slate-900' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              id={`price-plan-card-${plan.id}`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <span className={`absolute -top-3.5 right-6 px-3 py-1 text-[10px] font-bold rounded-full ${
                  plan.isPopular ? 'bg-indigo-500 text-white shadow' : 'bg-white/5 border border-white/10 text-slate-400'
                }`}>
                  {plan.badge}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-sans text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">{plan.description}</p>
                </div>

                {/* Pricing amount displays */}
                <div className="py-4 border-t border-b border-white/5 space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">
                    / {isYearly ? 'প্রতি বছর সাল হিসাব' : 'মাসিক কিস্তিতে'}
                  </span>
                </div>

                {/* Features point checklist */}
                <ul className="space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action purchase */}
              <div className="pt-8">
                <button
                  onClick={() => navigateTo('quote')}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 border border-white/15 text-white'
                  }`}
                  id={`pricing-btn-${plan.id}`}
                >
                  <span>কর্পোরেট কন্ট্যাক্ট সাবমিট করুন</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* DETAILED FEATURES COMPARISON GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 overflow-x-auto">
          <h3 className="text-lg font-bold text-white font-sans px-2 border-l-4 border-indigo-500 leading-none">ফিচার ও মডিউল তুলনামূলক তালিকা</h3>
          
          <table className="w-full text-sm text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-2">পরিষেবার ফিচার</th>
                <th className="py-4 px-2 text-center">স্টার্টার (Starter)</th>
                <th className="py-4 px-2 text-center">প্রফেশনাল (Professional)</th>
                <th className="py-4 px-2 text-center">এন্টারপ্রাইজ (Enterprise)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((f, i) => (
                <tr key={i} className="border-b border-white/5 text-xs text-slate-300 hover:bg-white/5">
                  <td className="py-4 px-2 font-semibold text-slate-300">{f.name}</td>
                  <td className="py-4 px-2 text-center text-slate-400">{f.starter}</td>
                  <td className="py-4 px-2 text-center font-semibold text-indigo-400">{f.pro}</td>
                  <td className="py-4 px-2 text-center font-bold text-cyan-400">{f.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Prompt for Custom Quote build */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="p-8 bg-gradient-to-r from-indigo-950/20 to-cyan-950/20 border border-white/10 rounded-3xl space-y-4">
          <h3 className="text-xl font-bold font-sans text-white">আপনার রিকোয়ারমেন্ট এই তালিকার বাইর কি?</h3>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            আমরা সম্পূর্ণ স্বয়ংক্রিয় ৫-ধাপবিশিষ্ট ইন্টারেক্টিভ Quote Calculator তৈরি করেছি যেখানে আপনি আপনার নিজের মনের মতো সার্ভিস টাইপ, ডেডলাইন ও কাজের পরিধি নির্ধারণ করে তাত্ক্ষণিক বাজেট এস্টিমেট জেনারেট করতে পারবেন।
          </p>
          <button
            onClick={() => navigateTo('quote')}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer inline-flex items-center space-x-1.5"
            id="pricing-redirect-quote-wizard-cta"
          >
            <span>ইন্টারেক্টিভ Quote বিল্ডার ট্রাই করুন</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
