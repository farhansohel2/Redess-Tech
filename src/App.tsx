import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, Sparkles, PhoneCall } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page imports
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SolutionsSection from './components/SolutionsSection';
import PortfolioSection from './components/PortfolioSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import CareerSection from './components/CareerSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import QuoteSection from './components/QuoteSection';
import ConsultationSection from './components/ConsultationSection';
import ClientPortal from './components/ClientPortal';
import { PrivacySection, TermsSection } from './components/UtilityPages';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State router renderer helper
  const renderActiveSection = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeSection 
            setCurrentPage={setCurrentPage} 
            onOpenOffer={() => {
              setCurrentPage('pricing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        );
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection setCurrentPage={setCurrentPage} />;
      case 'solutions':
        return <SolutionsSection setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'case-studies':
        return <CaseStudiesSection />;
      case 'pricing':
        return <PricingSection setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogSection />;
      case 'career':
        return <CareerSection />;
      case 'faq':
        return <FAQSection />;
      case 'contact':
        return <ContactSection />;
      case 'quote':
        return <QuoteSection />;
      case 'consultation':
        return <ConsultationSection />;
      case 'client-portal':
        return <ClientPortal />;
      case 'privacy':
        return <PrivacySection />;
      case 'terms':
        return <TermsSection />;
      default:
        return (
          <HomeSection 
            setCurrentPage={setCurrentPage} 
            onOpenOffer={() => {
              setCurrentPage('pricing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30 selection:text-white" id="main-root-workspace">
      
      {/* 1. Global Navigation Bar Header, passing router hook */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* 2. Main content pages with premium motion transition effects */}
      <main className="flex-grow pt-24 pb-12 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              id="active-animated-page"
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 3. conversion elements - FLOATING TELECOM WHATSAPP DIRECT ACTION CTA */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Back to top widget */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-full border border-white/10 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
            title="Scroll to Top"
            id="back-to-top-btn"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* WhatsApp Instant Support floating button */}
        <a
          href="https://wa.me/8801745685344"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 hover:text-white rounded-full font-bold shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center relative group"
          id="floating-whatsapp-action"
          title="WhatsApp Solution Chat"
        >
          {/* Animated beacon ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25"></span>
          <MessageSquare className="h-6 w-6 text-white shrink-0" />
          
          {/* Custom micro-tip badge */}
          <span className="absolute right-14 bg-slate-900 border border-white/15 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
            সরাসরি হোয়াটসঅ্যাপ চ্যাট (২৪/৭)
          </span>
        </a>
      </div>

      {/* 4. Global Footer layout */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
