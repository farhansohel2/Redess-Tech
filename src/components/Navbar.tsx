import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  LogIn, 
  PhoneCall, 
  Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const navItems = [
    { id: 'home', name: 'হোম' },
    { id: 'about', name: 'আমাদের সম্পর্কে' },
    { id: 'services', name: 'সেবাসমূহ', hasSub: true },
    { id: 'solutions', name: 'শিল্প সমাধান' },
    { id: 'portfolio', name: 'পোর্টফোলিও' },
    { id: 'case-studies', name: 'কেস স্টাডিজ' },
    { id: 'pricing', name: 'মূল্য তালিকা' },
    { id: 'blog', name: 'ব্লগ' },
    { id: 'career', name: 'ক্যারিয়ার' },
    { id: 'faq', name: 'জিজ্ঞাসাবাদ' },
    { id: 'contact', name: 'যোগাযোগ' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    setShowMegaMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg mr-2 mr-3 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </span>
            <div>
              <span className="text-xl font-bold text-white tracking-widest font-sans">
                REDESS <span className="text-cyan-400">TECH</span>
              </span>
              <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">Smart Future Solution</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.hasSub) {
                return (
                  <div 
                    key={item.id}
                    className="relative cursor-pointer"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <button 
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center ${
                        currentPage === 'services' ? 'text-indigo-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* Mega Menu / Dropdown */}
                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 bg-slate-950 border border-white/10 rounded-xl shadow-2xl p-4 z-50 grid grid-cols-1 gap-2"
                        >
                          <h4 className="text-xs font-semibold uppercase text-slate-500 px-3 tracking-widest mb-1">সেবাসমূহ</h4>
                          <button onClick={() => { handleNavClick('services'); }} className="flex flex-col text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-400">ওয়েব ডেভেলপমেন্ট</span>
                            <span className="text-xs text-slate-400">নেক্সট-জেন ল্যান্ডিং ও আধুনিক ওয়েব পোর্টাল</span>
                          </button>
                          <button onClick={() => { handleNavClick('services'); }} className="flex flex-col text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-400">কাস্টম সফটওয়্যার</span>
                            <span className="text-xs text-slate-400">জটিল ব্যবসায়িক ক্রিয়াকলাপের ১০০% অটোমেশন</span>
                          </button>
                          <button onClick={() => { handleNavClick('services'); }} className="flex flex-col text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-400">মোবাইল অ্যাপস</span>
                            <span className="text-xs text-slate-400">অ্যান্ড্রয়েড এবং আইওএস ক্রস-প্ল্যাটফর্ম অ্যাপস</span>
                          </button>
                          <button onClick={() => { handleNavClick('services'); }} className="flex flex-col text-left px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-400">ইআরপি ও এলএমএস</span>
                            <span className="text-xs text-slate-400">স্মার্ট অ্যাকাউন্টিং এবং লার্নিং ড্যাশবোর্ড</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id 
                      ? 'text-indigo-400 bg-white/5 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => handleNavClick('client-login')}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 rounded-xl transition duration-200 flex items-center space-x-1"
              id="btn-portal-login"
            >
              <LogIn className="h-4 w-4" />
              <span>পোর্টাল লগইন</span>
            </button>

            <button 
              onClick={() => handleNavClick('consultation')}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-indigo-500/20 transition duration-200 flex items-center space-x-1"
              id="btn-free-consultation"
            >
              <PhoneCall className="h-4 w-4 animate-pulse" />
              <span>পরামর্শ নিন</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => handleNavClick('client-login')}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
              title="Portal"
            >
              <LogIn className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              id="btn-mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    currentPage === item.id 
                      ? 'text-cyan-400 bg-white/5 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-white/10 px-4 grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleNavClick('client-login')}
                  className="w-full py-2.5 text-center text-sm font-semibold text-slate-300 border border-white/10 rounded-xl hover:text-white hover:bg-white/5 flex items-center justify-center space-x-1"
                >
                  <LogIn className="h-4 w-4" />
                  <span>ক্লায়েন্ট পোর্টাল</span>
                </button>
                <button 
                  onClick={() => handleNavClick('consultation')}
                  className="w-full py-2.5 text-center text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 shadow flex items-center justify-center space-x-1"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>পরামর্শ নিন</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
