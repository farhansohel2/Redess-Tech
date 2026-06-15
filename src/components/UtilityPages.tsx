import React from 'react';
import { ShieldCheck, Scale, Sparkles } from 'lucide-react';

export function PrivacySection() {
  return (
    <div className="text-white py-12 max-w-4xl mx-auto px-4 text-left space-y-8" id="privacy-policy-layout">
      
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full w-fit mx-auto">
          <ShieldCheck className="h-10 w-10 animate-pulse" />
        </div>
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase">লিগ্যাল ডকুমেন্ট</span>
        <h1 className="text-3xl font-extrabold font-sans">গোপনীয়তা নীতি ও নিরাপত্তা চুক্তি (Privacy Policy)</h1>
        <p className="text-slate-400 text-xs">সর্বশেষ পরিমার্জন: ১৫ জুন, ২০২৬</p>
      </section>

      {/* Main compliance text block */}
      <section className="bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">১. তথ্য সংগ্রহ ও ব্যবহার (Information Collection)</h3>
          <p>
            আমরা আপনাদের ব্যবসায়িক তথ্য, ইমেইল, মোবাইল এবং প্রজেক্টের রিকোয়ারমেন্টসমূহ সংগ্রহের সময় সম্পূর্ণ গোপনীয়তা নিশ্চিত করি। সংরক্ষিত তথ্য শুধুমাত্র আপনার কোটেশন এবং কনসালটেশন শিডিউল বুকিংয়ের উদ্দেশ্যে ব্যবহৃত হয়ে থাকে। কোনোভাবেই এই ডাটা কোনো তৃতীয় পক্ষের নিকট বিক্রি বা লেনদেন করা হয় না।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">২. কোড ও সিকিউরিটি নিরাপত্তা (Source Code Safety)</h3>
          <p>
            REDESS TECH এর উন্নত ব্যাকএন্ড সার্ভারগুলো সম্পূর্ণ ফায়ারওয়াল এবং এন্ড-টু-এন্ড এনক্রিপশন প্রটোকল দ্বারা সুরক্ষিত থাকে। আমরা ডাটাবেস সিকিউরিটি টেস্ট এবং ব্যাকআপ পলিসি কঠোরভাবে প্রতি সপ্তাহে পরিচালনা করি।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">৩. থার্ড-পার্টি লিঙ্ক ও কুকিজ নীতিমালা</h3>
          <p>
            আমাদের এই ওয়েবসাইটটি ব্যবহার করার সময় ব্রাউজার পারফরম্যান্স ট্র্যাক করতে কুকিজ (Cookies) সাময়িকভাবে ব্যবহার করা হতে পারে। আপনি চাইলে ব্রাউজার সেটিং থেকে যেকোনো সময় কুকিজ অফ করে রাখতে পারবেন।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">৪. যেকোনো জিজ্ঞাসায় আমাদের সাথে যোগাযোগ করুন</h3>
          <p>
            আমাদের গোপনীয়তা নীতি সম্পর্কিত যেকোনো পরিবর্তন দেখতে অনুগ্রহ করে মাঝে মধ্যে এই পেজ লিঙ্কে ক্লিক করে আপডেট দেখে নিন। কোনো প্রশ্ন থাকলে সরাসরি ইমেইল করতে পারেন: <span className="text-cyan-400 font-mono font-bold">support@redesstech.online</span>
          </p>
        </div>

      </section>

    </div>
  );
}

export function TermsSection() {
  return (
    <div className="text-white py-12 max-w-4xl mx-auto px-4 text-left space-y-8" id="terms-of-service-layout">
      
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full w-fit mx-auto">
          <Scale className="h-10 w-10 animate-pulse" />
        </div>
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">নিয়মাবলী</span>
        <h1 className="text-3xl font-extrabold font-sans">ব্যবহারের শর্তাবলী ও প্রাতিষ্ঠানিক পলিসি (Terms of Service)</h1>
        <p className="text-slate-400 text-xs font-mono">সর্বশেষ পরিমার্জন: ১৫ জুন, ২০২৬</p>
      </section>

      {/* Main legal documentation */}
      <section className="bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">১. পরিষেবার শর্তসমূহ</h3>
          <p>
            REDESS TECH এর যেকোনো ডিজাইন বা সফটওয়্যার প্রজেক্টের কার্যাবলী আমাদের সরবরাহকৃত মূল প্রস্তাবনা বা চুক্তিপত্রের (Work-Order) নিয়মাবলী অনুযায়ী সম্পাদিত হবে। ক্লায়েন্টকে কাজের শুরুতে চুক্তিপত্রের ৫০% অ্যাডভান্স পেমেন্ট ক্লিয়ার করতে হবে।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">২. সোর্স কোডের মালিকানা (IP Intellectual Property)</h3>
          <p>
            প্রজেক্টের সম্পূূর্ণ বিল বা পেমেন্ট ক্লিয়ারেন্স সম্পন্ন করার সাথে সাথে সংশ্লিষ্ট সোর্স কোড, সার্ভার ক্লাউড এক্সেস এবং আইপি রাইটস ১০০% ক্লায়েন্ট বা আবেদনকারীর মালিকানায় স্থানান্তরিত হয়ে যাবে।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">৩. হোস্টিং এবং ডোমেইন রক্ষণাবেক্ষণ</h3>
          <p>
            আমরা বিনামূল্যে প্রথম ১ বছরের জন্য যে সার্ভার হোস্টিং প্রদান করে থাকি, তা রিনিউয়াল করতে প্রতি বছর নির্দিষ্ট বার্ষিক ফি পরিশোধ করতে হবে। কাজের পর ফ্রি ওয়ারেন্টি সাপোর্ট সম্পন্ন হলে কাস্টম এগ্রিমেন্টের মাধ্যমে রক্ষণাবেক্ষণ মেয়াদ বৃদ্ধি করতে পারবেন।
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-white font-sans">৪. বিচারিক এখতিয়ার ও বিরোধ নিষ্পত্তি</h3>
          <p>
            যেকোনো প্রকার প্রাতিষ্ঠানিক বিরোধ বা মতানৈক্য দেখা দিলে তা বাংলাদেশ সরকারের বিদ্যমান বাণিজ্য আইন ও আইটি অ্যাক্ট বিধান অনুযায়ী আলোচনার মাধ্যমে বনানী বা ঢাকা সদর কার্যালয়ে নিষ্পত্তি করা হবে।
          </p>
        </div>

      </section>

    </div>
  );
}
