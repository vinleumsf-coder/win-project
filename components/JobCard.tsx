
import React from 'react';
import { Job, TranslationSet, JobType } from '../types';

interface JobCardProps {
  job: Job;
  t: TranslationSet;
  onClick: (job: Job) => void;
  lang: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, t, onClick, lang }) => {
  const getJobTypeLabel = (type: JobType) => {
    if (lang !== 'lo') return type;
    switch (type) {
      case JobType.FULL_TIME: return 'ວຽກເຕັມເວລາ';
      case JobType.PART_TIME: return 'ວຽກນອກເວລາ';
      case JobType.CONTRACT: return 'ສັນຍາຈ້າງ';
      case JobType.FREELANCE: return 'ວຽກອິດສະຫຼະ';
      default: return type;
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
      onClick={() => onClick(job)}
    >
      <div className="relative h-44 mb-4 overflow-hidden rounded-xl bg-slate-100">
        <img 
          src={job.companyLogo} 
          alt={job.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {job.isHot && (
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg uppercase tracking-tighter">🔥 {lang === 'lo' ? 'ວຽກເດັ່ນ' : 'Hot Job'}</span>
          )}
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg uppercase">
            {getJobTypeLabel(job.type)}
          </span>
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-black text-slate-800 leading-tight mb-2 group-hover:text-red-600 transition-colors">
          {job.title}
        </h3>
        
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <span className="font-bold text-blue-600">{job.companyName}</span>
          <span className="mx-2 text-slate-300">•</span>
          <span>{job.category}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{job.location}, {job.country}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-50 pt-4 mt-auto flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{t.salary}</p>
          <p className="text-md font-black text-slate-900">{job.salaryRange}</p>
        </div>
        <button className="bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-full text-xs group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
          {t.applyNow}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
