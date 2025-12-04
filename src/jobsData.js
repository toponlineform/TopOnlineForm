import { latestJobsData } from './data/latestJobs';
import { admitCardData } from './data/admitCards';
import { resultData } from './data/results';
import { answerKeyData } from './data/answerKeys';
import { syllabusData } from './data/syllabus';
import { previousPaperData } from './data/previousPapers';

export const jobsData = [
  ...latestJobsData,
  ...admitCardData,
  ...resultData,
  ...answerKeyData,
  ...syllabusData,
  ...previousPaperData
];
