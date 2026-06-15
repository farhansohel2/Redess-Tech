import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  X, 
  Upload, 
  ChevronRight,
  TrendingUp,
  Award 
} from 'lucide-react';
import { jobListings } from '../data';
import { Job } from '../types';

export default function CareerSection() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [applyCode, setApplyCode] = useState('');

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
    setIsSubmitSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail) {
      const randomCode = 'RDT-APPLY-' + Math.floor(100000 + Math.random() * 900000);
      setApplyCode(randomCode);
      setIsSubmitSuccess(true);
      
      // Clear forms
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setPortfolioLink('');
      setResumeName('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    }
  };

  return (
    <div className="text-white py-12 space-y-16 text-left" id="career-parent">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-semibold uppercase">ক্যারিয়ার ও সুযোগ</span>
        <h1 className="text-4xl font-extrabold font-sans">REDESS ক্যালিবারে আপনার স্বপ্নের ক্যারিয়ার গড়ুন</h1>
        <p className="text-slate-400 text-sm">
          আমরা কোনো সাধারণ আইটি ফার্ম নই। আমরা একটি সহায়ক পরিবার যেখানে প্রকৌশলী টিম নিজেদের দক্ষতাকে শাণিত করার সীমাহীন স্বাধীনতা ও প্রফেশনাল মডুলার সেশন পান।
        </p>
      </section>

      {/* Dynamic Benefits Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl space-y-3">
          <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 w-fit">
            <Award className="h-6 w-6" />
          </div>
          <h4 className="text-base font-bold text-white font-sans">১০০% বৈজ্ঞানিক কাজের পরিবেশ</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            কোনো অতিরিক্ত ওয়ার্ক-লোড বা প্যানিক ছাড়াই একটি নিয়মতান্ত্রিক কর্মধারা যেখানে শনি ও রবিবার সপ্তাহে ২ দিন সম্পূর্ণ প্রাতিষ্ঠানিক ছুটি।
          </p>
        </div>

        <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl space-y-3">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 w-fit">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h4 className="text-base font-bold text-white font-sans">হাই-এন্ড স্যালারি ও হেলথ কভারেজ</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            মার্কেটের সেরা বেসিক স্যালারির পাশাপাশি বার্ষিক উৎসব বোনাস ও পরিবারের সদস্যদের জন্য জরুরি চিকিৎসা ইন্সুরেন্স কভারেজ সুবিধা।
          </p>
        </div>

        <div className="p-6 bg-slate-900 border border-white/5 rounded-2xl space-y-3">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 w-fit">
            <Clock className="h-6 w-6" />
          </div>
          <h4 className="text-base font-bold text-white font-sans">ফ্রি স্ন্যাক্স ও আনলিমিটেড কফি</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            অফিসে প্রতিদিন দুপুরের জন্য সুস্বাদু বুফে লাঞ্চের পাশাপাশি আনলিমিটেড কফি, স্ন্যাক্স ও গেমিং রুমে সময় কাটানোর সুযোগ।
          </p>
        </div>
      </section>

      {/* JOB LISTINGS ROW */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <h3 className="text-lg font-bold text-white font-sans px-2 border-l-4 border-indigo-500 leading-none">চলমান চাকরির সুযোগসমূহ</h3>

        <div className="space-y-4">
          {jobListings.map((job) => (
            <div 
              key={job.id}
              className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition duration-300 space-y-4"
              id={`job-listing-item-${job.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] rounded font-bold uppercase tracking-wide">
                    {job.department}
                  </span>
                  <h4 className="text-lg font-bold text-white font-sans">{job.title}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <DollarSign className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{job.salary}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-slate-500" />
                      <span>{job.type}</span>
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
                    id={`btn-apply-job-${job.id}`}
                  >
                    আবেদন করুন
                  </button>
                </div>
              </div>

              {/* Requirements & Benefits details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs text-slate-300 font-sans leading-relaxed">
                <div>
                  <h5 className="font-bold text-indigo-400 mb-1.5 uppercase tracking-wide">প্রয়োজনীয় যোগ্যতা</h5>
                  <ul className="space-y-1 list-disc list-inside">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-cyan-400 mb-1.5 uppercase tracking-wide">আমাদের প্রাতিষ্ঠানিক সুযোগ-সুবিধা</h5>
                  <ul className="space-y-1 list-disc list-inside">
                    {job.benefits.map((ben, idx) => (
                      <li key={idx}>{ben}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* RESUME APPLY MODAL */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-xl overflow-hidden relative p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
            id="job-apply-modal-box"
          >
            {/* Close */}
            <button 
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-950 text-slate-400 hover:text-white rounded-full border border-white/10 cursor-pointer"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-wide">
                JOB APPLICATION PORTAL
              </span>
              <h3 className="text-xl font-bold font-sans text-white mt-2">আবেদন করুন: {selectedJob.title}</h3>
              <p className="text-xs text-slate-400 leading-snug">
                অনুগ্রহ করে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করে আপনার সর্বশেষ সিভি বা রিজিউম পিডিএফ আপলোড করুন।
              </p>
            </div>

            {isSubmitSuccess ? (
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center space-y-4">
                <div className="p-3 bg-emerald-500/10 rounded-full w-fit mx-auto text-emerald-400">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h4 className="text-base font-bold text-white font-sans">আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে!</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  আমাদের এইচআর রিক্রুটমেন্ট টিম অতিসত্বর সিভি যাচাইপূর্বক আগামী ৩ কার্যদিবসের মধ্যে আপনার সাথে ইমেইলে যোগাযোগ করবে।
                </p>
                <div className="p-3 bg-slate-950 rounded-xl">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">আবেদন ট্র্যাকিং রেফারেন্স কোড</p>
                  <p className="text-sm font-mono font-bold text-cyan-400 tracking-wider mt-0.5">{applyCode}</p>
                </div>
                <button 
                  onClick={() => setShowApplyModal(false)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl cursor-pointer"
                >
                  উইন্ডো বন্ধ করুন
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">আপনার পূর্ণ নাম *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="যেমন: তানজিম আহমেদ"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">ইমেইল ঠিকানা *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="যেমন: tanzim@gmail.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">ফোন নম্বর *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="যেমন: ০১৭********"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">পোর্টফোলিও লিংক / গিটহাব</label>
                    <input 
                      type="url" 
                      placeholder="যেমন: https://github.com/profile"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Simulated File Upload Card with drag and drop support */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">সিভি / রিজিউম পিডিএফ আপলোড করুন *</label>
                  <div className="border-2 border-dashed border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 text-center bg-white/5 hover:bg-white/10 transition duration-200 relative cursor-pointer group">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      required={!resumeName}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="h-8 w-8 text-slate-500 mx-auto mb-2 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-xs text-slate-400">
                      {resumeName ? `ফাইল সিলেক্ট হয়েছে: ${resumeName}` : 'ড্র্যাগ এন্ড ড্রপ করুন অথবা এখানে ক্লিক করে সিভি ফাইল আপলোড করুন'}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">শুধুমাত্র PDF, DOC অথবা DOCX ফরম্যাট (সর্বোচ্চ ৪ এমবি)</p>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center gap-4">
                  <p className="text-[10px] text-slate-500">* চিহ্নিত ঘরগুলো পূরণ করা বাধ্যতামূলক</p>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    আবেদন সম্পূর্ণ সাবমিট করুন
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
