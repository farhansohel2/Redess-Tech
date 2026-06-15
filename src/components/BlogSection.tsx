import React, { useState } from 'react';
import { 
  Search, 
  Tag, 
  Calendar, 
  User, 
  X, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark,
  Sparkles 
} from 'lucide-react';
import { blogArticles } from '../data';
import { Article } from '../types';

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [emailSub, setEmailSub] = useState('');
  const [showSubSuccess, setShowSubSuccess] = useState(false);

  // Filter Articles
  const filteredArticles = blogArticles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || art.category === selectedTag || art.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allCategories = ['All', 'প্রযুক্তি ও ব্যবসা', 'আর্টিফিশিয়াল ইন্টেলিজেন্স', 'এন্টারপ্রাইজ সলিউশন', 'ওয়েব ডেভেলপমেন্ট', 'এসইও'];

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub) {
      setShowSubSuccess(true);
      setEmailSub('');
      setTimeout(() => setShowSubSuccess(false), 4000);
    }
  };

  return (
    <div className="text-white py-12 space-y-12 text-left" id="blog-parent">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">টেক ব্লগ ও ডায়েরি</span>
        <h1 className="text-4xl font-extrabold font-sans">REDESS Insights - প্রযুক্তি ও কৌশলগত বিশ্লষণ</h1>
        <p className="text-slate-400 text-sm">
          ওয়েব ও মোবাইল প্রযুক্তির সর্বাধুনিক ট্রেন্ড, জেনারেটিভ এআই মডিউল ব্যবহারের কৌশল এবং ব্যবসায়ের প্রবৃদ্ধি বাড়ানোর সুনির্দিষ্ট গাইডলাইন।
        </p>
      </section>

      {/* FILTER & SEARCH ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pb-8 border-b border-white/5">
          
          {/* Active Search */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="আর্টিকেল বা বিষয়বস্তু খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Category Selection pills */}
          <div className="md:col-span-7 flex flex-wrap gap-2 md:justify-end">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  selectedTag === cat 
                    ? 'bg-indigo-600 border-indigo-500 text-white' 
                    : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-300'
                }`}
              >
                {cat === 'All' ? 'সবগুলো' : cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* LIST OF BLOG ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 p-8 bg-slate-900 rounded-3xl border border-white/5">
            <p className="text-slate-400 text-sm font-sans">দুঃখিত, আপনার অনুসন্ধানকৃত বিষয়ের কোনো আর্টিকেল পাওয়া যায়নি। অনুগ্রহ করে অন্য কিওয়ার্ড ট্রাই করুন।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article 
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:shadow-2xl transition duration-300 flex flex-col justify-between cursor-pointer group"
                id={`blog-item-${art.id}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 referrerPolicy='no-referrer'" />
                  <span className="absolute top-3 left-3 bg-indigo-600 border border-indigo-500/30 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{art.date}</span>
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-sans leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  {/* Author Meta Bottom row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img src={art.author.avatar} alt={art.author.name} className="w-8 h-8 rounded-full object-cover referrerPolicy='no-referrer'" />
                      <div>
                        <p className="text-[11px] font-bold text-white leading-none">{art.author.name}</p>
                        <p className="text-[9px] text-slate-500 leading-none mt-1">{art.author.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-indigo-400 font-bold group-hover:underline">পড়ুন →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* BIG ENTERPRISE NEWSLETTER BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-950 p-8 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-3">
            <span className="px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-bold uppercase tracking-wide inline-block">REDESS NEWS DIGEST</span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">নতুন টেক আর্টিকেল ও আপডেট সবার আগে চান কি?</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              আমরা কোনো স্প্যাম মেইল পাঠাই না। শুধুমাত্র প্রযুক্তি খাতের শ্রেষ্ঠ সমাধান ও বিশেষ ডিসকাউন্ট ভাউচার সরাসরি আপনার ইনবক্সে প্রেরণ করব প্রতিমাসে ১ বার।
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <form onSubmit={handleSub} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল অ্যাড্রেস..."
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors pr-10"
                  required
                />
                <button type="submit" className="absolute right-2 top-1.5 p-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-xs transition font-semibold" title="Subscribe">
                  <Send className="h-4.5 w-4.5" />
                </button>
              </div>
              {showSubSuccess && (
                <p className="text-emerald-400 text-xs flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>আপনি সফলভাবে নিউজলেটারে জয়েন করেছেন!</span>
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* DETAILED ARTICLE MODAL DIALOG */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
            id="blog-reading-modal"
          >
            {/* Close */}
            <button 
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-white rounded-full border border-white/10 z-10 cursor-pointer"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              {/* Image banner */}
              <div className="h-60 sm:h-72 w-full overflow-hidden relative">
                <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover referrerPolicy='no-referrer'" />
                <span className="absolute bottom-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                  {activeArticle.category}
                </span>
              </div>

              {/* Main reading content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Author row info */}
                <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                  <img src={activeArticle.author.avatar} alt={activeArticle.author.name} className="w-10 h-10 rounded-full object-cover referrerPolicy='no-referrer'" />
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">লিখনকারী</span>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-none mt-0.5">{activeArticle.author.name}</h4>
                    <p className="text-[9px] text-slate-500 leading-none mt-1">{activeArticle.author.role}</p>
                  </div>
                  <span className="text-[9.5px] bg-white/5 border border-white/5 px-2 py-0.5 text-slate-400 font-mono rounded-md ml-auto">
                    {activeArticle.date}
                  </span>
                </div>

                <div className="space-y-4 font-sans">
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">{activeArticle.title}</h2>
                  <p className="text-sm text-cyan-400 font-semibold leading-relaxed p-3 bg-white/5 border-l-4 border-cyan-400 rounded-r-lg">
                    {activeArticle.summary}
                  </p>
                  
                  {/* Long content block */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-4">
                    {activeArticle.content}
                  </p>
                </div>

                {/* Tags block */}
                <div className="space-y-2 pt-4">
                  <h4 className="text-[10px] text-slate-500 uppercase tracking-wider font-bold font-mono">ট্যাগসমূহ</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeArticle.tags.map((tg) => (
                      <span key={tg} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-[10.5px] text-slate-400">
                        #{tg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-end">
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl text-xs font-bold font-sans cursor-pointer"
                  >
                    পড়ুন বিবরণ সমাপ্ত
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
