
import React, { useState, useMemo } from 'react';
import { TranslationSet, Job, JobType, Language } from '../types';
import { MOCK_JOBS, CATEGORIES } from '../data/jobs';
import JobCard from '../components/JobCard';

interface JobListingPageProps {
  t: TranslationSet;
  lang: Language;
  initialSearch: string;
  onJobSelect: (job: Job) => void;
}

const JobListingPage: React.FC<JobListingPageProps> = ({ t, lang, initialSearch, onJobSelect }) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                            job.companyName.toLowerCase().includes(search.toLowerCase());
      const matchesType = !selectedType || job.type === selectedType;
      const matchesCategory = !selectedCategory || job.category === selectedCategory;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [search, selectedType, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-black text-slate-800 mb-6 uppercase tracking-wider text-sm">{lang === 'lo' ? 'ການຕັ້ງຄ່າການຄົ້ນຫາ' : 'Filters'}</h3>
            
            {/* Search Input in Sidebar */}
            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">{lang === 'lo' ? 'ຄຳຄົ້ນຫາ' : 'Keywords'}</label>
              <input 
                type="text"
                placeholder={lang === 'lo' ? 'ຊື່ວຽກ...' : 'Job title...'}
                className="w-full bg-slate-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-600 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Job Type Filter */}
            <div className="mb-8">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">{lang === 'lo' ? 'ປະເພດວຽກ' : 'Job Type'}</label>
              <div className="space-y-2">
                {[null, ...Object.values(JobType)].map(type => (
                  <button
                    key={type || 'all'}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedType === type ? 'bg-red-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {!type ? (lang === 'lo' ? 'ທຸກປະເພດ' : 'All Types') : (lang === 'lo' ? (type === JobType.FULL_TIME ? 'ວຽກເຕັມເວລາ' : type === JobType.PART_TIME ? 'ວຽກນອກເວລາ' : type === JobType.CONTRACT ? 'ສັນຍາຈ້າງ' : 'ວຽກອິດສະຫຼະ') : type)}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">{t.categories}</label>
              <div className="space-y-2 overflow-y-auto max-h-64 pr-2 custom-scrollbar">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === null ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {lang === 'lo' ? 'ທຸກໝວດໝູ່' : 'All Categories'}
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === cat.name ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ad Card */}
          <div className="bg-gradient-to-br from-red-600 to-blue-900 p-6 rounded-2xl text-white shadow-xl">
            <h4 className="font-black text-xl mb-2">{lang === 'lo' ? 'ເຕີບໂຕໄປກັບພວກເຮົາ!' : 'Grow with us!'}</h4>
            <p className="text-sm opacity-80 mb-4 font-medium">{lang === 'lo' ? 'ລົງປະກາດວຽກທຳອິດຟຣີ ແລະ ເຂົ້າເຖິງຜູ້ສະໝັກກວ່າ 12,000 ຄົນ.' : 'Post your first job for free and reach 12K+ applicants.'}</p>
            <button className="w-full bg-white text-blue-900 font-bold py-2 rounded-xl text-sm">{lang === 'lo' ? 'ລົງປະກາດວຽກ' : 'Post a Job'}</button>
          </div>
        </aside>

        {/* Listings Grid */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
              {lang === 'lo' ? 'ພົບ' : 'Found'} <span className="text-red-600 font-black">{filteredJobs.length}</span> {lang === 'lo' ? 'ຕຳແໜ່ງ' : 'opportunities'}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-400">{lang === 'lo' ? 'ຈັດລຽງ:' : 'Sort:'}</span>
              <select className="bg-transparent border-none text-sm font-bold text-slate-700 outline-none">
                <option>{lang === 'lo' ? 'ໃໝ່ລ່າສຸດ' : 'Newest'}</option>
                <option>{lang === 'lo' ? 'ເງິນເດືອນສູງສຸດ' : 'Highest Salary'}</option>
              </select>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} t={t} onClick={onJobSelect} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="text-6xl mb-4 opacity-20">🔍</div>
              <h3 className="text-xl font-black text-slate-800">{lang === 'lo' ? 'ບໍ່ພົບວຽກທີ່ຄົ້ນຫາ' : 'No jobs found'}</h3>
              <p className="text-slate-500">{lang === 'lo' ? 'ລອງປັບປ່ຽນຄຳຄົ້ນຫາ ຫຼື ປະເພດວຽກຄືນໃໝ່.' : 'Try adjusting your filters or search keywords.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
