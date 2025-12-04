// 1. Import all separate data files
import { latestJobsData } from './data/latestJobs';
import { admitCardData } from './data/admitCards';
import { resultData } from './data/results';
import { answerKeyData } from './data/answerKeys';
import { syllabusData } from './data/syllabus';
// import { previousPaperData } from './data/previousPapers'; // <--- ISKO COMMENT KAR DIYA

// 2. Merge them into one single list
export const jobsData = [
  ...latestJobsData,
  ...admitCardData,
  ...resultData,
  ...answerKeyData,
  ...syllabusData,
  // ...previousPaperData // <--- ISKO BHI COMMENT KAR DIYA
];
