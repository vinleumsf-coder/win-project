
import React from 'react';
import { Job, TranslationSet, Language } from '../types';

interface JobDetailPageProps {
  job: Job;
  t: TranslationSet;
  lang: Language;
  onBack: () => void;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ job, t, lang, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-in slide-in-from-right-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-slate-400 hover:text-red-600 font-bold transition-colors mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{lang === 'lo' ? 'ກັບຄືນສູ່ລາຍການວຽກ' : 'Back to listings'}</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black text-slate-800 leading-tight mb-2">{job.title}</h1>
                <p className="text-xl font-bold text-blue-600">{job.companyName}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-red-50 text-red-600 font-bold px-4 py-2 rounded-full text-sm mb-2">{job.type}</span>
                <span className="text-xs font-bold text-slate-400 uppercase">{job.postedDate}</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h4 className="font-black text-slate-800 text-xl mb-4">{lang === 'lo' ? 'ລາຍລະອຽດວຽກ' : 'Description'}</h4>
              <p className="text-slate-600 leading-relaxed mb-8">{job.description}</p>

              <h4 className="font-black text-slate-800 text-xl mb-4">{lang === 'lo' ? 'ຄຸນສົມບັດຜູ້ສະໝັກ' : 'Requirements'}</h4>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Company */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-6 mb-6">
              <img src={job.companyLogo} className="w-20 h-20 rounded-2xl object-cover" alt={job.companyName} />
              <div>
                <h3 className="text-2xl font-black">{lang === 'lo' ? 'ກ່ຽວກັບ' : 'About'} {job.companyName}</h3>
                <p className="opacity-60 font-bold uppercase text-xs tracking-widest">{job.category}</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Founded in 2018, {job.companyName} is a pioneer in its field, dedicated to innovation and sustainable growth in {job.location}, {job.country}. 
              Join a team of visionaries and shape the future.
            </p>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t.salary}</p>
              <p className="text-2xl font-black text-slate-900">{job.salaryRange}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm">
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3 text-blue-600">📍</span>
                <span className="font-bold text-slate-700">{job.location}, {job.country}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mr-3 text-red-600">💼</span>
                <span className="font-bold text-slate-700">{job.type}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mr-3 text-green-600">📅</span>
                <span className="font-bold text-slate-700">{lang === 'lo' ? 'ໝົດເຂດໃນ 2 ອາທິດ' : 'Expires in 2 weeks'}</span>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://script.google.com/macros/s/AKfycbxx3W-ZWRz3mcWAAqg07-O9oiJkpDvV6RTVl0ZRTjEnKsw_Jup6WuSWq_1lANoCduuNKg/exec', '_blank')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl shadow-lg transition-all active:scale-95 mb-4"
            >
              {t.applyNow}
            </button>
            <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-3 rounded-2xl border border-gray-100 transition-all">
              {lang === 'lo' ? 'ບັນທຶກວຽກ' : 'Save Job'}
            </button>
            
            <p className="text-[10px] text-center text-slate-400 font-bold mt-4 uppercase">Direct application to company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
