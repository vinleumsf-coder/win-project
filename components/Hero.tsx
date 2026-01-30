
import React, { useState } from 'react';
import { TranslationSet } from '../types';

interface HeroProps {
  t: TranslationSet;
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ t, onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <section className="relative mesh-gradient pt-16 pb-12 sm:pt-24 sm:pb-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 sm:w-96 sm:h-96 bg-red-600/20 rounded-full blur-[80px] sm:blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 mb-6 sm:mb-8 animate-bounce">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
          <span className="text-white text-[8px] sm:text-xs font-bold tracking-widest uppercase">Trusted by 1000+ Companies</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
          {t.heroTitle}
        </h1>
        
        <p className="text-sm sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 font-medium max-w-2xl mx-auto">
          {t.heroSub}
        </p>

        {/* Search Bar - Optimized for Mobile */}
        <div className="glass-morphism p-1.5 sm:p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center shadow-2xl max-w-2xl mx-auto">
          <div className="flex-grow flex items-center px-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 py-3 sm:py-4 font-semibold text-sm sm:text-base"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button 
            onClick={handleSearch}
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-3 sm:py-4 px-10 rounded-xl md:rounded-full transition-all shadow-lg active:scale-95 text-sm sm:text-base mt-2 md:mt-0"
          >
            {t.searchBtn}
          </button>
        </div>

        {/* Stats - Horizontal scroll on small mobile */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-4 gap-4 mt-12 sm:mt-16 no-scrollbar pb-2">
          {[
            { label: 'Active Jobs', val: '2,400+' },
            { label: 'Partners', val: '500+' },
            { label: 'Applicants', val: '12,000+' },
            { label: 'Success Rate', val: '98%' },
          ].map((stat, i) => (
            <div key={i} className="text-white/80 border-r border-white/10 last:border-0 flex-shrink-0 px-4 sm:px-0 min-w-[100px] sm:min-w-0">
              <div className="text-lg sm:text-2xl font-black text-white">{stat.val}</div>
              <div className="text-[8px] sm:text-xs uppercase tracking-widest font-bold opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
