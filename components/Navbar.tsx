
import React, { useState } from 'react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSet;
  onNavigateHome: () => void;
  onNavigateListings: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onNavigateHome, onNavigateListings }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'lo', label: 'ພາສາລາວ', flag: '🇱🇦' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'my', label: 'မြັນມາစာ', flag: '🇲🇲' },
    { code: 'km', label: 'ພາສາខ្មែ Khmer', flag: '🇰🇭' },
    { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  ];

  const currentLangObj = languages.find(l => l.code === lang);

  const handleJoinUs = () => {
    window.open('https://script.google.com/macros/s/AKfycbxx3W-ZWRz3mcWAAqg07-O9oiJkpDvV6RTVl0ZRTjEnKsw_Jup6WuSWq_1lANoCduuNKg/exec', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-16 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Brand Logo & Name with Active Animations */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => { onNavigateHome(); setIsMobileMenuOpen(false); }}
        >
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full border-2 border-slate-900 overflow-hidden shadow-inner flex-shrink-0 logo-active">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-red-600 font-black text-2xl sm:text-3xl transform -translate-x-1 -translate-y-0.5">L</span>
               <div className="flex flex-col items-center justify-center -ml-0.5">
                 <div className="flex items-center">
                    <span className="text-slate-900 font-bold text-[10px] sm:text-[12px] transform translate-y-0.5">J</span>
                    <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-blue-500 mx-0.5 mt-0.5 flex items-center justify-center overflow-hidden">
                       <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                       {/* Spinning effect for circle to show "working" */}
                       <div className="absolute inset-0 border-t border-blue-400 animate-spin"></div>
                    </div>
                    <span className="text-slate-900 font-bold text-[10px] sm:text-[12px] transform translate-y-0.5">B</span>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <h1 className="text-lg sm:text-xl font-black text-slate-800 tracking-tighter leading-none uppercase shimmer-text">LAOS JOB</h1>
              <div className="live-dot" title="Live Platform Status"></div>
            </div>
            <div className="flex items-center space-x-1 mt-0.5">
               <p className="text-[8px] sm:text-[10px] text-red-600 font-bold tracking-[0.15em] uppercase leading-none">No.1 Platform</p>
               <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
               <p className="text-[7px] sm:text-[9px] text-slate-400 font-medium uppercase tracking-widest animate-pulse">Online</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-semibold text-slate-600">
          <button onClick={onNavigateHome} className="hover:text-red-600 transition-colors relative group">
            {lang === 'lo' ? 'ໜ້າຫຼັກ' : 'Home'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </button>
          <button onClick={onNavigateListings} className="hover:text-red-600 transition-colors relative group">
            {t.findJobs}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </button>
          <button className="hover:text-red-600 transition-colors relative group">
            {t.partTime}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </button>
          <button className="text-red-600 font-bold flex items-center space-x-1 group">
            <span>{lang === 'lo' ? 'ຕ່າງປະເທດ' : 'International'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Actions Container */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* Minimal Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => { setIsLangOpen(!isLangOpen); setIsMobileMenuOpen(false); }}
              className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-full border transition-all duration-300 ${
                isLangOpen 
                ? 'bg-slate-900 border-slate-900 text-white shadow-md' 
                : 'bg-white border-gray-200 text-slate-700 hover:border-slate-400'
              }`}
            >
              <span className="text-lg sm:text-xl leading-none transform transition-transform group-hover:scale-110">
                {currentLangObj?.flag}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-2.5 w-2.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown Menu */}
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                  <div className="px-4 py-2 border-b border-gray-50 mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {lang === 'lo' ? 'ເລືອກພາສາ' : 'Select Language'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 px-2">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                          lang === l.code 
                          ? 'bg-red-600 text-white shadow-md' 
                          : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl shadow-sm rounded-md overflow-hidden">{l.flag}</span>
                          <span className="text-sm font-bold">{l.label}</span>
                        </div>
                        {lang === l.code && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Contact/Join Button */}
          <button 
             className="bg-red-600 text-white font-black py-1.5 sm:py-2.5 px-4 sm:px-7 rounded-full hover:bg-red-700 transition-all active:scale-95 text-[10px] sm:text-sm whitespace-nowrap shadow-lg shadow-red-600/20 flex items-center space-x-2"
             onClick={handleJoinUs}
          >
            <span>{lang === 'lo' ? 'ເຂົ້າຮ່ວມ' : 'Join'}</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-full bg-gray-100 text-slate-800 transition-colors hover:bg-gray-200"
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsLangOpen(false); }}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="p-5 space-y-4 font-black text-slate-800">
            <button 
              onClick={() => { onNavigateHome(); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-4 px-5 rounded-2xl hover:bg-slate-50 flex items-center justify-between group bg-slate-50/50"
            >
              <span>{lang === 'lo' ? 'ໜ້າຫຼັກ' : 'Home'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
            <button 
              onClick={() => { onNavigateListings(); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-4 px-5 rounded-2xl hover:bg-slate-50 flex items-center justify-between group"
            >
              <span>{t.findJobs}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left py-4 px-5 rounded-2xl hover:bg-slate-50 flex items-center justify-between group"
            >
              <span>{t.partTime}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left py-4 px-5 rounded-2xl hover:bg-slate-50 flex items-center justify-between group text-red-600"
            >
              <span>{lang === 'lo' ? 'ເຄືອຂ່າຍຕ່າງປະເທດ' : 'International'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <button 
                onClick={() => window.open('https://wa.me/8562052361770', '_blank')}
                className="bg-green-600 text-white py-4 rounded-2xl flex items-center justify-center space-x-2 text-sm shadow-lg shadow-green-600/20 active:scale-95 transition-transform"
              >
                <span>WhatsApp</span>
              </button>
              <button 
                onClick={handleJoinUs}
                className="bg-slate-900 text-white py-4 rounded-2xl flex items-center justify-center space-x-2 text-sm shadow-lg shadow-slate-900/20 active:scale-95 transition-transform"
              >
                <span>{lang === 'lo' ? 'ສະໝັກວຽກ' : 'Apply Now'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
