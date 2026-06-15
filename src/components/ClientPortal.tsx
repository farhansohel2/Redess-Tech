import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  DollarSign, 
  Lock, 
  LogOut, 
  MessageSquare, 
  Send, 
  Sparkles, 
  TrendingUp, 
  User, 
  Wand2, 
  Clock, 
  Check, 
  CreditCard, 
  AlertCircle,
  Bell
} from 'lucide-react';

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('client@redess.com');
  const [password, setPassword] = useState('123456');
  const [loginError, setLoginError] = useState('');
  
  // Dashboard states
  const [paidAmount, setPaidAmount] = useState(17500);
  const [dueAmount, setDueAmount] = useState(17500);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('progress'); // progress | billing | chat

  // Live support messages
  const [messages, setMessages] = useState([
    { id: '1', sender: 'admin', text: 'আপনার ফিগমা প্রোটোটাইপ ডিজাইনটি অত্যন্ত সফলভাবে শেষ হয়েছে। লিঙ্কটি রি-চেক দিন।' },
    { id: '2', sender: 'client', text: 'হ্যাঁ, ড্যাশবোর্ডের ফ্লো চমৎকার হয়েছে। রিয়্যাক্ট ব্যাকএন্ড কোডিং শুরু করতে পারেন।' },
    { id: '3', sender: 'admin', text: 'ধন্যবাদ হাসিব সাহেব। আমাদের প্রকৌশলী টিম কোডি মডিউল ইন্টিগ্রেশন শুরু করেছে।' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'client@redess.com' && password === '123456') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('ভুল ইমেইল বা পাসওয়ার্ড! অনুগ্রহ করে নিচে দেওয়া ডেমো ক্রেডেনশিয়াল ব্যবহার করুন।');
    }
  };

  const handleSimulatePayment = () => {
    setPaidAmount(35000);
    setDueAmount(0);
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 5000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMsg = { id: Date.now().toString(), sender: 'client', text: newMessage };
      setMessages([...messages, userMsg]);
      setNewMessage('');

      // Auto AI support robot reply simulation after 1.5 seconds
      setTimeout(() => {
        const botMsg = { 
          id: (Date.now() + 1).toString(), 
          sender: 'admin', 
          text: 'ধন্যবাদ, আপনার বার্তাটি আমাদের হেল্প ডেস্কে নিবন্ধিত হয়েছে। প্রজেক্ট ইঞ্জিনিয়ার হাসিবুল হাসান আগামী ১৫ মিনিটের মধ্যে আপনার সাথে যুক্ত হচ্ছেন।' 
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1500);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPaidAmount(17500);
    setDueAmount(17500);
  };

  return (
    <div className="text-white py-12 max-w-5xl mx-auto px-4 text-left" id="client-portal-section">
      
      {!isLoggedIn ? (
        /* LOGIN FRAME */
        <div className="max-w-md mx-auto bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-indigo-500/5 rounded-full blur-[70px]" />
          
          <div className="text-center space-y-2">
            <span className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow mr-2 inline-flex items-center justify-center">
              <Lock className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold font-sans text-white mt-3">ক্লায়েন্ট পোর্টাল লগইন</h2>
            <p className="text-xs text-slate-400">
              আপনার চলমান প্রজেক্টের লাইভ কোডিং প্রোগ্রেস ও মডিউল ট্র্যাকিং করতে পোর্টালে সাইন-ইন করুন।
            </p>
          </div>

          {loginError && (
            <p className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl flex items-center space-x-1">
              <AlertCircle className="h-4.5 w-4.5 shrink-0" />
              <span>{loginError}</span>
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">রেজিস্টার্ড ইমেইল অ্যাড্রেস *</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">পাসওয়ার্ড *</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
              id="submit-portal-login-btn"
            >
              ড্যাশবোর্ডে প্রবেশ করুন
            </button>
          </form>

          {/* Quick Mock Credentials Assist Box */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 space-y-2 text-[11px] text-slate-400">
            <p className="font-bold text-cyan-400 flex items-center space-x-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>অনুশীলনের জন্য ডেমো ক্রেডেনশিয়ালস</span>
            </p>
            <p>আপনার টেস্ট ড্রাইভ ও পর্যালোচনার জন্য প্রাক-সংরক্ষিত অ্যাকাউন্ট:</p>
            <div className="bg-slate-900 p-2.5 rounded-xl border border-white/5 font-mono text-[10px] space-y-1">
              <p>ইমেইল: <span className="text-white">client@redess.com</span></p>
              <p>পাসওয়ার্ড: <span className="text-white">123456</span></p>
            </div>
            <p className="text-[10px] text-slate-500">এই আইডি ব্যবহার করে ড্যাশবোর্ড মাইলস্টোন পরিবর্তন দেখতে পারবেন।</p>
          </div>
        </div>
      ) : (
        /* ENTERPRISE CLIENT DASHBOARD */
        <div className="bg-slate-950 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center space-x-3 text-left">
              <span className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl">
                <Building2 className="h-6 w-6" />
              </span>
              <div>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest font-mono">CLIENT PORTAL ACTIVE</span>
                <h2 className="text-xl font-bold text-white font-sans">হ্যাল্লো, হাসিব রহমান (CEO)</h2>
                <p className="text-xs text-slate-400">হাসিব লার্নিং একাডেমি লিমিটেড // ক্লায়েন্ট কোড: #RDT-C-284</p>
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-bold border border-white/10 transition cursor-pointer flex items-center space-x-1.5 self-start sm:self-center"
            >
              <LogOut className="h-4 w-4" />
              <span>লগআউট করুন</span>
            </button>
          </div>

          {/* Quick Stats overview cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-900 rounded-2xl border border-white/5 space-y-1 text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">চলমান প্রজেক্ট</p>
              <p className="text-base font-bold text-white font-sans">বাংলা LMS ৪.০ ড্যাশবোর্ড</p>
              <p className="text-[10px] text-indigo-400">টোটাল মডিউল: ১৬টি</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-2xl border border-white/5 space-y-1 text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">ডেভেলপমেন্ট প্রোগ্রেস</p>
              <div className="flex items-baseline space-x-1.5">
                <p className="text-2xl font-black text-cyan-400">৭৫%</p>
                <p className="text-xs text-slate-400 animate-pulse">কোডিং রানিং</p>
              </div>
              <div className="w-full bg-slate-950 h-1.5 rounded-full mt-2">
                <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1.5 rounded-full w-3/4" />
              </div>
            </div>
            <div className="p-4 bg-slate-900 rounded-2xl border border-white/5 space-y-1 text-left">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">পেমেন্ট স্ট্যাটাস</p>
              <p className="text-xl font-bold text-white font-sans">
                {dueAmount === 0 ? '৳৩৫,০০০ (সম্পূর্ণ পরিশোধিত)' : '৳১৭,৫০০ (অ্যাডভান্স সম্পন্ন)'}
              </p>
              <p className={`text-[10px] font-bold ${dueAmount === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {dueAmount === 0 ? '✓ সম্পূর্ণ পেইড' : `বকেয়া: ৳${dueAmount}`}
              </p>
            </div>
          </div>

          {/* TAB OPTION NAVIGATION SECTOR */}
          <div className="flex border-b border-white/10">
            <button 
              onClick={() => setActiveTab('progress')}
              className={`px-4 py-2.5 text-xs font-bold transition cursor-pointer ${
                activeTab === 'progress' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-400'
              }`}
            >
              প্রজেক্ট টাইমলাইন ও মাইলস্টোন
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={`px-4 py-2.5 text-xs font-bold transition cursor-pointer ${
                activeTab === 'billing' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-400'
              }`}
            >
              ইনভয়েস ও বিলিং ক্লিয়ারেন্স
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`px-4 py-2.5 text-xs font-bold transition cursor-pointer ${
                activeTab === 'chat' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-400'
              }`}
            >
              প্রজেক্ট পিএম চ্যাট সাপোর্ট ({messages.length})
            </button>
          </div>

          {/* TAB 1: MILESTONES */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-white font-sans px-2 border-l-4 border-indigo-500 leading-none">৪-ধাপের চলমান মাইলস্টোনস স্ট্যাটাস</h3>
              
              <div className="space-y-4 pt-2">
                {/* Step 1 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900 border border-white/5 rounded-2xl">
                  <span className="p-1 px-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-bold shrink-0">০১</span>
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans flex items-center space-x-1.5">
                      <span>প্রজেক্ট রিকোমেন্ট তালিকা চূড়ান্তকরণ</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug mt-1">সবগুলো এপিআই, ইউজার রোলস, পেমেন্ট ডাটাবেস ম্যাপিং ও চুক্তিপত্র সফল সম্পন্ন।</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900 border border-white/5 rounded-2xl">
                  <span className="p-1 px-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-bold shrink-0">০২</span>
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans flex items-center space-x-1.5">
                      <span>ফিগমা ওয়্যারফ্রেম ও ইউআই প্রোটোটাইপ সেশন</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug mt-1">ক্লিন মোডাল, প্যানেল ভিউ ও লাইভ অ্যানিমেটেড স্লাইডিং মক-আপ অনুমোদন লাভ করেছেন হাসিবুল সাহেব।</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900 border border-indigo-500/30 rounded-2xl relative">
                  <span className="p-1 px-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-bold shrink-0">০৩</span>
                  <span className="absolute top-4 right-4 bg-cyan-400 text-slate-950 font-bold text-[9px] px-2 py-0.5 rounded-full animate-pulse uppercase">
                    রানিং কোডিং
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans">কোর রিঅ্যাক্ট ও নেক্সট-জেএস ব্যাকএন্ড কোডিং</h4>
                    <p className="text-xs text-slate-400 leading-snug mt-1">প্রধান এপিআই রুটস, ডাটাবেস মাইগ্রেশন ও পেমেন্ট স্ক্র্যাপ পেজ রেডি হচ্ছে।</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900 border border-white/5 rounded-2xl opacity-50">
                  <span className="p-1 px-2.5 bg-slate-950 text-slate-500 rounded-lg text-xs font-bold shrink-0">০৪</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 font-sans">সার্ভার ট্র্যাফিক লোড ব্যাল্যান্সিং পরীক্ষা ও পাবলিক লাঞ্চ</h4>
                    <p className="text-xs text-slate-500 leading-snug mt-1">বাগ ফিক্সিং ট্রাভেল ফিনিশিং করে প্রজেক্ট ক্লাউড ভিপিএসে ডেপ্লয় ও লাইভ লঞ্চ।</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BILLING & SIMULATED PAYMENTS */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-white font-sans px-2 border-l-4 border-indigo-500 leading-none">রানিং ইনভয়েস তালিকা (Bill Invoices)</h3>

              <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] bg-slate-950 px-2.5 py-1 text-amber-400 border border-amber-400/20 rounded font-bold uppercase font-mono">
                      PARTIAL INVOICE #RDT-INV-849
                    </span>
                    <h4 className="text-sm font-bold text-white">বাংলাদেশ লার্নিং এলএমএস ৪.০ (বকেয়া বিল)</h4>
                    <p className="text-xs text-slate-400">টোটাল প্রজেক্ট মূল্য: ৳৩৫,০০০ // প্রজেক্টের চুক্তি অনুযায়ী বকেয়া পেমেন্ট</p>
                  </div>
                  
                  {dueAmount > 0 ? (
                    <button
                      onClick={handleSimulatePayment}
                      className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center space-x-1 shrink-0"
                    >
                      <CreditCard className="h-4 w-4 shrink-0" />
                      <span>৳১৭,৫০০ পরিশোধ করুন</span>
                    </button>
                  ) : (
                    <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-xl flex items-center space-x-1">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>পরিশোধিত সম্পন্ন</span>
                    </span>
                  )}
                </div>

                {paymentSuccess && (
                  <p className="text-emerald-400 text-xs flex items-center space-x-1 p-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl leading-none">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>পেমেন্ট সফল সিমুলেট হয়েছে! আপনার মোট বকেয়া এখন ৳০। ধন্যবাদ।</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: SUPPORT MESSAGES WORKPLACE */}
          {activeTab === 'chat' && (
            <div className="space-y-4 font-sans bg-slate-900 p-4 rounded-2xl border border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-white/5 pb-2.5">
                প্রজেক্ট ম্যানেজার (PM) ও প্রকৌশলী হট সিট
              </h3>

              {/* Chat Thread */}
              <div className="h-60 overflow-y-auto p-4 bg-slate-950 rounded-xl border border-white/5 space-y-3 flex flex-col">
                {messages.map((msg) => {
                  const isAdmin = msg.sender === 'admin';
                  return (
                    <div 
                      key={msg.id}
                      className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed text-xs relative ${
                        isAdmin 
                          ? 'bg-slate-900 border border-white/5 text-slate-300 self-start' 
                          : 'bg-indigo-600 text-white self-end'
                      }`}
                    >
                      <p className="font-sans leading-relaxed">{msg.text}</p>
                      <span className="text-[8px] opacity-40 uppercase block mt-1 tracking-wider text-right">
                        {isAdmin ? 'REDESS PM' : 'HASIB CLIENT'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chat Entry control */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="আপনার মেসেজ বা আপডেট এখানে লিখুন..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="text-[10px] text-slate-500">আপনার যেকোনো মেসেজের উত্তর দিতে ৩ সেকেন্ড রুল সেট করা আছে ডেমো সাপোর্টে।</p>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
