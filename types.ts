
export type Language = 'lo' | 'th' | 'en' | 'zh' | 'vi' | 'my' | 'km' | 'id';

export enum JobType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  CONTRACT = 'Contract',
  FREELANCE = 'Freelance'
}

export interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  country: string;
  salaryRange: string;
  type: JobType;
  description: string;
  requirements: string[];
  companyName: string;
  companyLogo: string;
  postedDate: string;
  isHot?: boolean;
}

export interface TranslationSet {
  heroTitle: string;
  heroSub: string;
  searchPlaceholder: string;
  searchBtn: string;
  findJobs: string;
  contactUs: string;
  partTime: string;
  hotJobs: string;
  viewAll: string;
  jobTitle: string;
  location: string;
  salary: string;
  applyNow: string;
  categories: string;
}
