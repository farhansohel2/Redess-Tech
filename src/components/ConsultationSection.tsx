import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  UserCheck, 
  Laptop,
  Sparkles 
} from 'lucide-react';

export default function ConsultationSection() {
  const [selectedDay, setSelectedDay] = useState('tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [meetingGoal, setMeetingGoal] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingPasscode, setBookingPasscode] = useState('');

  const daysList = [
    { id: 'tomorrow', label: 'আগামীকাল (Tomorrow)', date: '১৬ জুন, ২০২৬' },
    { id: 'day-after', label: '২ দিন পর (Day After)', date: '১৭ জুন, ২০২৬' },
    { id: 'next-week', label: 'আগামী সোমবার (Mon)', date: '২২ জুন, ২০২৬' }
  ];

  const timesList = [
    { id: '10:00', label: 'সকাল ১০:০০ - ১০:৩০' },
    { id: '12:00', label: 'দুপুর ১২:০০ - ১২:৩০' },
    { id: '15:00', label: 'বিকাল ০৩:০০ - ০৩:৩০' },
    { id: '16:30', label: 'বিকাল ০৪:৩০ - ০৫:০০' }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail && clientPhone) {
      setBookingPasscode('RDT-CONF-' + Math.floor(100000 + Math.random() * 900000));
      setIsBooked(true);
    }
  };

  const getDayLabel = () => {
    const item = daysList.find(d => d.id === selectedDay);
    return item ? `${item.label} (${item.date})` : '';
  };

  const getTimeLabel = () => {
    const item = timesList.find(t => t.id === selectedTime);
    return item ? item.label : '';
  };

  return (
    <div className="text-white py-12 max-w-3xl mx-auto px-4 text-left" id="consultation-wrapper">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-10">
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase">ভিডিও সেশন</span>
        <h1 className="text-3xl font-extrabold font-sans">৩০ মিনিটের কফি ও ফ্রি আইটি কনসালটেশন</h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          আপনার সফটওয়্যার ধারণা বা ব্যবসার ডিজিটাল মডিউল সম্পর্কে সরাসরি আমাদের সলিউশন আর্কিটেক্টদের সাথে ৩০ মিনিটে ফ্রি জুম/মিট আলোচনা নির্ধারণ করুন।
        </p>
      </div>

      {isBooked ? (
        /* CONFRIMATION CARD */
        <div className="bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 text-center shadow-2xl relative">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px]" />
          
          <div className="p-3 bg-emerald-500/10 rounded-full w-fit mx-auto text-emerald-400">
            <CheckCircle2 className="h-12 w-12 animate-bounce" />
          </div>

          <div className="space-y-2 relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">আপনার আলোচনার অ্যাপয়েন্টমেন্ট সফলভাবে বুক করা হয়েছে!</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              আপনার নির্বাচিত সময়ে জুম (Zoom) মিটিংয়ের আমন্ত্রন লিংক এবং ক্যালেন্ডার ইনভাইট আপনার ইমেইলে প্রেরণ করা হয়েছে। আমাদের সলিউশন আর্কিটেক্ট ফারহান সোহেল সেশনে উপস্থিত থাকবেন।
            </p>
          </div>

          {/* Details bullet points */}
          <div className="p-5 bg-slate-950 rounded-2xl text-left border border-white/5 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-slate-500">নির্ধারিত তারিখ</p>
                <p className="font-bold text-white mt-0.5">{getDayLabel()}</p>
              </div>
              <div>
                <p className="text-slate-500">নির্ধারিত সময়</p>
                <p className="font-bold text-white mt-0.5">{getTimeLabel()}</p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-3 flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
              <Video className="h-5 w-5 text-indigo-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider leading-none">ভিডিও কল প্ল্যাটফর্ম</p>
                <p className="text-xs font-semibold text-cyan-400 mt-1">Zoom Meetings BD (Password protected)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs border-t border-white/5 pt-3">
              <div>
                <p className="text-slate-500">মিটিং আইডি</p>
                <p className="font-mono font-bold text-slate-300">৮২৪ ৫৬৯১ ৩৮২৪</p>
              </div>
              <div>
                <p className="text-slate-500">কনফার্মেশন কুপন</p>
                <p className="font-mono font-bold text-indigo-400 tracking-wider text-xs">{bookingPasscode}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsBooked(false)}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl cursor-pointer"
          >
            অন্য আরেকটি সেশন বুক করুন
          </button>
        </div>
      ) : (
        /* WIZARD FORM LAYOUT */
        <form onSubmit={handleBooking} className="bg-slate-900 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
          
          {/* Day selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white font-sans flex items-center space-x-2">
              <Calendar className="h-4.5 w-4.5 text-indigo-400" />
              <span>১. মিটিংয়ের কাঙ্ক্ষিত দিনটি পছন্দ করুন *</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {daysList.map((day) => (
                <button
                  type="button"
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedDay === day.id 
                      ? 'bg-indigo-500/10 border-indigo-500 text-white' 
                      : 'bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold font-sans">{day.label}</span>
                  <span className="text-[10px] text-slate-500 mt-1 font-mono leading-none">{day.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time slot selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white font-sans flex items-center space-x-2">
              <Clock className="h-4.5 w-4.5 text-cyan-400" />
              <span>২. সুবিধাজনক সময় বাছাই করুন *</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              {timesList.map((time) => (
                <button
                  type="button"
                  key={time.id}
                  onClick={() => setSelectedTime(time.id)}
                  className={`p-3.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    selectedTime === time.id 
                      ? 'bg-cyan-500/10 border-cyan-500 text-white' 
                      : 'bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-400'
                  }`}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>

          {/* User details inputs */}
          <div className="space-y-3 border-t border-white/5 pt-6">
            <h3 className="text-sm font-bold text-white font-sans flex items-center space-x-2">
              <UserCheck className="h-4.5 w-4.5 text-purple-400" />
              <span>৩. যোগাযোগের প্রয়োজনীয় তথ্য দিন (Information)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400">আপনার পূর্ণ নাম *</label>
                <input 
                  type="text" 
                  required
                  placeholder="যেমন: ফারহান আহমেদ সোহেল"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400">ইমেইল ঠিকানা *</label>
                <input 
                  type="email" 
                  required
                  placeholder="যেমন: client@outlook.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400">সচল মোবাইল / হোয়াটসঅ্যাপ নম্বর *</label>
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
                <label className="text-xs font-semibold text-slate-400">প্রধান সেশন উদ্দেশ্য (Goal)</label>
                <input 
                  type="text" 
                  placeholder="যেমন: কাস্টম ইআরপি মডিউল ডিজাইন"
                  value={meetingGoal}
                  onChange={(e) => setMeetingGoal(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer flex items-center justify-center space-x-1.5"
            id="consultation-booking-btn"
          >
            <span>ফ্রি পরামর্শ সেশন কনফার্ম করুন</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </form>
      )}

    </div>
  );
}
