import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Sparkles, 
  FolderLock, 
  Tag, 
  ChevronDown 
} from 'lucide-react';
import { faqItems } from '../data';

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(x => x !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const categories = ['All', 'সাধারণ প্রশ্নাবলি', 'টেকনিক্যাল জিজ্ঞাসা', 'পেমেন্ট ও বাজেট'];

  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="text-white py-12 space-y-12 text-left" id="faq-parent">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">জিজ্ঞাসাবাদ</span>
        <h1 className="text-4xl font-extrabold font-sans">সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ ও টেকনিক্যাল ব্যাখ্যা</h1>
        <p className="text-slate-400 text-sm">
          REDESS TECH এর পরিষেবা গ্রহণ, কাজের সময়সীমা, সোর্স কোডের মালিকানা এবং রক্ষণাবেক্ষণ পলিসি সম্পর্কিত সকল প্রশ্নের তাত্ক্ষণিক উত্তর।
        </p>
      </section>

      {/* SEARCH AND CATEGORY SELECTION FILTER ROW */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="space-y-4 pb-6 border-b border-white/5">
          {/* Keyword search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="আপনার মনের যেকোনো প্রশ্ন লিখে খুঁজুন (যেমন: সোর্স কোড, বিলিং)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Categorized filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs rounded-lg font-medium border transition duration-150 cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 border-indigo-500 text-white shadow' 
                    : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'সব ক্যাটাগরি' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED FAQ COLLAPSIBLES */}
      <section className="max-w-4xl mx-auto px-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center p-8 bg-slate-900 border border-white/5 rounded-2xl text-slate-400 text-xs">
            আপনার অনুসন্ধানকৃত বিষয়ের কোনো প্রশ্নাবলি আমাদের ডেটাবেসে পাওয়া যায়নি। অনুগ্রহ করে সহজ কথায় ভিন্ন কিওয়ার্ড ট্রাই করুন।
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div 
                  key={faq.id}
                  className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition duration-200"
                  id={`accordion-item-${faq.id}`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center bg-slate-900/80 hover:bg-slate-900 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                      <h4 className="text-sm sm:text-base font-bold text-white font-sans">{faq.question}</h4>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-indigo-400 shrink-0 transition-transform duration-250 ${isOpen ? 'transform rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/20 border-t border-white/5 font-sans">
                      {faq.answer}
                      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 border-t border-white/5 pt-2.5">
                        <span>ক্যাটাগরি: {faq.category}</span>
                        <span>রেফারেন্স কোড: #RDT-{faq.id.toUpperCase()}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Support CTA footer card */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="p-6 bg-gradient-to-r from-slate-950 to-indigo-950/20 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">আপনার কোনো বিশেষ প্রশ্ন রয়েছে কি, যা এখানে উল্লেখ করা নেই?</h4>
            <p className="text-xs text-slate-400">আমাদের কাস্টমার কেয়ার প্রতিনিধিবৃন্দ সরাসরি ২৪ ঘণ্টা হোয়াটসঅ্যাপে সাহায্য করতে সদা প্রস্তুত।</p>
          </div>
          <a
            href="https://wa.me/8801745685344"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            সরাসরি হোয়াটসঅ্যাপ করুন
          </a>
        </div>
      </section>

    </div>
  );
}
