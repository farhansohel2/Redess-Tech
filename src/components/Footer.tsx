import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Facebook, 
  CheckCircle,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center cursor-pointer mb-6" onClick={() => navigateTo('home')}>
              <span className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 mr-2 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white tracking-widest font-sans">
                REDESS <span className="text-cyan-400">TECH</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              REDESS TECH হলো একটি বহুমুখী ও আধুনিক প্রযুক্তি সমাধান প্রদানকারী প্রতিষ্ঠান। আমরা আপনার ব্যবসাকে ডিজিটাল ড্রাইভে রূপান্তরিত করতে সেরা ওয়েব, অ্যাপ ও কাস্টম সফটওয়্যার তৈরিতে সদা প্রস্তুত।
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="referrer" className="p-2 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="referrer" className="p-2 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="referrer" className="p-2 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">গুরুত্বপূর্ণ লিংকসমূহ</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  আমাদের গল্প ও লক্ষ্য
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  আমাদের সেবাসমূহ
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  সফল প্রজেক্ট গ্যালারি
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('case-studies')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  বাস্তব কেস স্টাডিজ
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  প্যাকেজ ও মূল্য তালিকা
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('career')} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  ক্যারিয়ার (চাকরির তালিকা)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">সরাসরি যোগাযোগ</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  রুম ৫০২, লেভেল ৫, জাব্বার টাওয়ার,<br />
                  রোড ১১, বনানী, ঢাকা-১২১৩, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>+৮৮০ ১৭৪৫-৬৮৫৩৪৪</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                <span>info@redesstech.online</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-cyan-400 font-semibold cursor-pointer" onClick={() => navigateTo('contact')}>হোয়াটসঅ্যাপ চ্যাট সাপোর্ট</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">নিউজলেটার সাবস্ক্রিপশন</h3>
            <p className="text-sm mb-4">
              নতুন ফ্রেমওয়ার্ক, আপডেট এবং আমাদের বিশেষ অফার সম্পর্কিত খবরাখবর সবার আগে আপনার ইমেইলে পেতে সাবস্ক্রাইব করুন।
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল ঠিকানা..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors pr-10"
                  required
                />
                <button type="submit" className="absolute right-2 top-2 p-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-colors" title="Send">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-xs mt-2 flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>আপনার সাবস্ক্রিপশন সফল হয়েছে! ধন্যবাদ।</span>
              </p>
            )}
          </div>

        </div>

        {/* Separator / Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
          <div>
            <p>© ২০২৬ REDESS TECH (redesstech.online)। সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="text-slate-600 mt-1">কারিগরি সহযোগিতায়: REDESS Engineering Team</p>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">গোপনীয়তা নীতি</button>
            <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">শর্তাবলী ও নীতিমালা</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
