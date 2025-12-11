// src/jobsData.js

// Import all data files
import { newAnswerKeys } from './myAkey';
import { latestJobs } from './myLjobs';
import { admitCards } from './myAcards';
import { results } from './myRslt';
import { syllabusData } from './mySyl';
import { previousPapers } from './myPreviouspapers';
import { admissionData } from './myAdmission';

// 1. Combine all data arrays into one main variable
const allJobs = [
  ...newAnswerKeys, 
  ...latestJobs,
  ...admitCards,
  ...results,
  ...syllabusData,
  ...previousPapers,
  ...admissionData
];

// ✅ CORRECTED: Export FULL Data (Do NOT use .map here)
// Hum pura data export kar rahe hain taaki Job Details page par sab kuch dikhe.
export const jobsData = allJobs;
