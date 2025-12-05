// 1. Import all separate data files
// Note: Adding .js extension to ensure exact path matching

import { latestJobsData } from './data/latestJobs.js';       
import { admitCardsData } from './data/admitCards.js';       
import { resultsData } from './data/results.js';             
import { answerKeysData } from './data/answerKeys.js';       
import { syllabusData } from './data/syllabus.js';           
import { previousPapersData } from './data/previousPapers.js'; 

// 2. Merge them into one single list
export const jobsData = [
  ...latestJobsData,
  ...admitCardsData,
  ...resultsData,
  ...answerKeysData,
  ...syllabusData,
  ...previousPapersData
];
