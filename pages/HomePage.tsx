
import React from 'react';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import { TranslationSet, Job, Language } from '../types';
import { MOCK_JOBS, CATEGORIES } from '../data/jobs';

interface HomePageProps {
  t: TranslationSet;
  lang: Language;
  onSearch: (query: string) => void;
  onJobSelect: (job: Job) => void;
}

const HomePage: React.FC<HomePageProps> = ({ t, lang, onSearch, onJobSelect }) => {
  const hotJobs = MOCK_JOBS.filter(j => j.isHot).slice(0, 4);
  const recentJobs = MOCK_JOBS.slice(0, 8);

  return (
    <div className="animate-in fade-in duration-700">
      <Hero t={t} onSearch={onSearch} />

      {/* Categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
               <span className="live-dot"></span>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'lo' ? 'ກຳລັງອັບເດດ' : 'Live Updates'}</span>
            </div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">{t.categories}</h2>
            <p className="text-slate-500 font-medium">{lang === 'lo' ? 'ຄົ້ນຫາວຽກຕາມປະເພດອຸດສາຫະກຳທີ່ຫຼາກຫຼາຍ' : 'Browse opportunities by diverse industries'}</p>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center group">
            {t.viewAll} 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-red-200 hover:shadow-xl transition-all cursor-pointer group active:scale-95 float-anim" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{cat.icon}</div>
              <h3 className="font-bold text-slate-800 text-xs mb-1 truncate leading-tight h-8 flex items-center justify-center">{cat.name}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{cat.count} {lang === 'lo' ? 'ຕຳແໜ່ງ' : 'jobs'}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hot Jobs Section */}
      <section className="py-20 bg-slate-50 border-y border-gray-100 relative overflow-hidden">
        {/* Animated background shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-1 bg-red-600 animate-pulse"></div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase italic">{t.hotJobs}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotJobs.map(job => (
              <JobCard key={job.id} job={job} t={t} onClick={onJobSelect} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase italic">{lang === 'lo' ? 'ວຽກໃໝ່ລ່າສຸດ' : 'Recent Openings'}</h2>
          <div className="flex items-center space-x-2">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lang === 'lo' ? 'ອັບເດດທຸກ 5 ນາທີ' : 'Updates every 5m'}</span>
             <svg className="w-3 h-3 text-green-500 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
               <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recentJobs.map(job => (
            <JobCard key={job.id} job={job} t={t} onClick={onJobSelect} lang={lang} />
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-slate-400 font-bold tracking-[0.3em] uppercase text-xs mb-10">{lang === 'lo' ? 'ເຄືອຂ່າຍຮັບສະໝັກງານທີ່ໄດ້ຮັບຄວາມໄວ້ວາງໃຈ' : 'Trusted Recruitment Network'}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {['SAMSUNG', 'COCA COLA', 'LAO TELECOM', 'BEELINE', 'PRUDENTIAL', 'ADIDAS', 'NESTLE', 'FORD'].map((brand) => (
              <span key={brand} className="text-xl md:text-3xl font-black tracking-tighter cursor-default hover:text-red-600 transition-colors">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
