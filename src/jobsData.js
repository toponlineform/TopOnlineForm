import { latestJobsData } from './data/latestJobs';
import { admitCardsData } from './data/admitCards';
import { resultsData } from './data/results';
import { answerKeysData } from './data/answerKeys';
import { syllabusData } from './data/syllabus';
import { previousPapersData } from './data/previousPapers';

export const jobsData = [
  ...latestJobsData,
  ...admitCardsData,
  ...resultsData,
  ...answerKeysData,
  ...syllabusData,
  ...previousPapersData
];
