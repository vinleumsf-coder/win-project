
import React from 'react';
import { TranslationSet, Language } from '../types';

interface FooterProps {
  t: TranslationSet;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            {/* Mimicked Logo in Footer */}
            <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-slate-900 overflow-hidden">
               <span className="text-red-600 font-black text-2xl transform -translate-x-1">L</span>
               <span className="text-slate-900 font-bold text-[8px] transform translate-y-1">JOB</span>
            </div>
            <h1 className="text-xl font-black tracking-tighter">LAOS JOB</h1>
          </div>
          <p className="text-slate-400 font-medium mb-6">
            {lang === 'lo' 
              ? 'ເວທີຮັບສະໝັກງານອັນດັບ 1 ໃນລາວ ເຊື່ອມຕໍ່ບຸກຄະລາກອນທີ່ມີທັກສະເຂົ້າກັບໂອກາດລະດັບໂລກ.' 
              : 'The No.1 Job Recruitment platform in Laos. Connecting skilled individuals with world-class opportunities.'}
          </p>
          <div className="flex space-x-4">
            {['fb', 'tw', 'ig', 'li'].map(social => (
              <div key={social} className="w-10 h-10 bg-white/5 hover:bg-red-600 transition-colors rounded-full flex items-center justify-center cursor-pointer font-bold uppercase text-[10px]">
                {social}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-6 text-red-500">{lang === 'lo' ? 'ສຳລັບຜູ້ຊອກວຽກ' : 'For Job Seekers'}</h4>
          <ul className="space-y-4 text-slate-400 font-bold">
            <li><a href="#" className="hover:text-white transition-colors">{t.findJobs}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{lang === 'lo' ? 'ເຄືອຂ່າຍສາກົນ' : 'International Networks'}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t.partTime}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{lang === 'lo' ? 'ຄຳແນະນຳອາຊີບ' : 'Career Advice'}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-6 text-blue-500">{lang === 'lo' ? 'ສຳລັບບໍລິສັດ' : 'For Employers'}</h4>
          <ul className="space-y-4 text-slate-400 font-bold">
            <li><a href="#" className="hover:text-white transition-colors">{lang === 'lo' ? 'ລົງປະກາດວຽກ' : 'Post a Job'}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{lang === 'lo' ? 'ຄົ້ນຫາບຸກຄະລາກອນ' : 'Talent Solutions'}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{lang === 'lo' ? 'ການບໍລິຫານບຸກຄົນ' : 'Hiring Advice'}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{lang === 'lo' ? 'ລາຄາ' : 'Pricing'}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-6 text-slate-500">{lang === 'lo' ? 'ເຄືອຂ່າຍພາກພື້ນ' : 'Regional Support'}</h4>
          <ul className="space-y-4 text-slate-400 font-bold">
            <li className="flex items-center">🇹🇭 Thailand Network</li>
            <li className="flex items-center">🇻🇳 Vietnam Network</li>
            <li className="flex items-center">🇲🇲 Myanmar Network</li>
            <li className="flex items-center">🇨🇳 China Network</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} LAOS JOB. All rights reserved.
        </p>
        <div className="flex space-x-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white">{lang === 'lo' ? 'ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ' : 'Privacy Policy'}</a>
          <a href="#" className="hover:text-white">{lang === 'lo' ? 'ເງື່ອນໄຂການນຳໃຊ້' : 'Terms of Service'}</a>
          <a href="#" className="hover:text-white">{lang === 'lo' ? 'ຄຸກກີ້' : 'Cookies'}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
