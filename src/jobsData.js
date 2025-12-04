// 1. Import section
// import { previousPaperData } from './data/previousPapers'; // <--- ISKO COMMENT KAR DEIN ( // laga dein)

// ...

// 2. Merge section
export const jobsData = [
  ...latestJobsData,
  ...admitCardData,
  ...resultData,
  ...answerKeyData,
  ...syllabusData,
  // ...previousPaperData  // <--- ISKO BHI COMMENT KAR DEIN
];
