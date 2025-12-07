import { newAnswerKeys } from './myAkey';
import { latestJobs } from './myLjobs';
import { admitCards } from './myAcards';
import { results } from './myRslt';
import { syllabusData } from './mySyl';


  
  

export const jobsData = [
  ...newAnswerKeys, // Naya Data
  ...latestJobs,
  ...admitCards,
  ...results,
  ...syllabusData
];
