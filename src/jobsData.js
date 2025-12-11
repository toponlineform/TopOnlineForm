// src/jobsData.js
// Purpose: Create a lightweight index for the Navbar's Instant Search functionality.
// This prevents the entire dataset (800KB+) from loading on every page.

// Import all data files to create a lightweight index
import { newAnswerKeys } from './myAkey';
import { latestJobs } from './myLjobs';
import { admitCards } from './myAcards';
import { results } from './myRslt';
import { syllabusData } from './mySyl';
import { previousPapers } from './myPreviouspapers';
import { admissionData } from './myAdmission';


// 1. Combine all data arrays into one temporary variable
const allJobs = [
  ...newAnswerKeys, 
  ...latestJobs,
  ...admitCards,
  ...results,
  ...syllabusData,
  ...previousPapers,
  ...admissionData
];

// 2. Export only the essential fields (id, slug, and titles) for search, 
//    keeping the variable name 'jobsData' to avoid changing App.jsx.
export const jobsData = allJobs.map(job => ({
  id: job.id,
  slug: job.slug,
  title: job.title,
  // Short title is optional, but useful for search suggestions
  shortTitle: job.shortTitle
}));

// IMPORTANT: The full combined list is no longer exported, 
// ensuring only a tiny index file is loaded initially.
