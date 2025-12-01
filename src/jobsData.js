export const jobsData = [
  // --- 1. ECGC PO (NEWEST) ---
  {
    id: 3,
    slug: "ecgc-po-recruitment-2025",
    shortTitle: "ECGC PO Recruitment 2025",
    title: "ECGC PO Recruitment 2025 Apply Online for 30 Posts | Salary ₹20 Lakh CTC | Exam Date",
    shortInfo: "ECGC Limited has released the official notification for the recruitment of Probationary Officers (PO). Eligible graduates can apply online for Generalist and Specialist posts. The selection will be based on an Online Exam and Interview.",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "Basic Pay ₹88,635 - ₹1,69,025 (CTC ≈ ₹20 LPA)",

    importantDates: [
      { label: "Application Begin", value: "11/11/2025" },
      { label: "Last Date for Apply", value: "02/12/2025" },
      { label: "Online Exam Date", value: "11/01/2026" },
      { label: "Result Declaration", value: "31/01/2026 (Tentative)" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹950/-" },
      { category: "SC / ST / PwBD", amount: "₹175/-" },
      { category: "Payment Mode", amount: "Online" }
    ],

    ageLimit: "21-30 Years (As on 01/04/2025). Relaxation: SC/ST+5, OBC+3.",

    vacancyDetails: [
      { postName: "PO (Generalist)", totalPost: 28, eligibility: "Graduation in Any Discipline" },
      { postName: "PO (Specialist)", totalPost: 2, eligibility: "Master's in Hindi/English (Rajbhasha)" }
    ],

    // Special Header for ECGC Table
    vacancyTableTitle: "Category Wise Vacancy Details",
    vacancyColumnName: "Category",

    stateWiseVacancy: [
      { state: "Unreserved (UR)", total: 12, sc: "N/A", st: "N/A", obc: "N/A", ews: "N/A", ur: 12 },
      { state: "OBC", total: 10, sc: "N/A", st: "N/A", obc: 10, ews: "N/A", ur: "N/A" },
      { state: "SC", total: 5, sc: 5, st: "N/A", obc: "N/A", ews: "N/A", ur: "N/A" },
      { state: "EWS", total: 3, sc: "N/A", st: "N/A", obc: "N/A", ews: 3, ur: "N/A" }
    ],

    selectionProcess: [
      "Online Written Examination (Objective + Descriptive)",
      "Interview",
      "Document Verification",
      "Medical Examination"
    ],

    examPattern: {
      details: [
        "Mode: Online Computer Based Test",
        "Negative Marking: 0.25 Marks deducted for each wrong answer.",
        "Descriptive Paper: 40 Marks (40 Minutes)."
      ],
      generalistObjective: [
        { subject: "Reasoning Ability (40 Mins)", questions: 50, marks: 50 },
        { subject: "English Language (30 Mins)", questions: 40, marks: 40 },
        { subject: "Computer Knowledge (10 Mins)", questions: 20, marks: 20 },
        { subject: "General Awareness (20 Mins)", questions: 40, marks: 40 },
        { subject: "Quantitative Aptitude (40 Mins)", questions: 50, marks: 50 }
      ],
      generalistDescriptive: [
        { subject: "Essay Writing", questions: 1, marks: 20 },
        { subject: "Precis Writing", questions: 1, marks: 20 }
      ],
      specialistObjective: [
        { subject: "Reasoning Ability (30 Mins)", questions: 40, marks: 40 },
        { subject: "English Language (20 Mins)", questions: 40, marks: 40 },
        { subject: "General Awareness (10 Mins)", questions: 30, marks: 30 },
        { subject: "Quantitative Aptitude (40 Mins)", questions: 40, marks: 40 },
        { subject: "Professional Knowledge (40 Mins)", questions: 50, marks: 50 }
      ],
      specialistDescriptive: [
        { subject: "Essay Writing", questions: 1, marks: 20 },
        { subject: "Translation", questions: 1, marks: 20 }
      ]
    },

    howToApply: [
      "Visit the official website ecgc.in.",
      "Click on 'Career with ECGC' and select 'Click here to Apply Online'.",
      "Register and fill in the details.",
      "Upload Photo, Signature, Left Thumb Impression, and Handwritten Declaration.",
      "Pay the application fee online and submit."
    ],

    links: {
      applyOnline: "https://ibpsonline.ibps.in/ecgcoct25/", 
      notification: "https://www.ecgc.in/acad/Recruitment_PO_2025.pdf", 
      officialWebsite: "https://www.ecgc.in/" 
    }
  },

  // --- 2. AIIMS CRE-4 ---
  {
    id: 2,
    slug: "aiims-cre-4-recruitment-2025",
    shortTitle: "AIIMS CRE-4 Group B & C Recruitment 2025",
    title: "AIIMS CRE-4 Recruitment 2025 Apply Online for Group B & C Posts | Exam Date, Salary & Syllabus",
    shortInfo: "All India Institute of Medical Sciences (AIIMS), New Delhi has released the Detailed Recruitment Advertisement (DRA) for the Common Recruitment Examination (CRE-4). This exam is for the recruitment of various Group B and Group C posts.",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "Level 1 to Level 7 (Post Wise)",

    importantDates: [
      { label: "Application Begin", value: "14/11/2025" },
      { label: "Last Date for Apply", value: "02/12/2025" },
      { label: "Admit Card Status", value: "08/12/2025" },
      { label: "CBT Exam Date", value: "22/12/2025 to 24/12/2025" }
    ],

    applicationFee: [
      { category: "General / OBC", amount: "₹3000/-" },
      { category: "SC / ST / EWS", amount: "₹2400/-" },
      { category: "PwBD", amount: "₹0 (Exempted)" }
    ],

    ageLimit: "Varies Post Wise (Mostly 18-30 or 21-35 Years)",

    ageRelaxation: [
      "SC/ST: 5 Years",
      "OBC (NCL): 3 Years",
      "PwBD: 10 Years",
      "Central Govt. Civilian Employees: As per rules"
    ],

    salaryDetails: [
      { post: "Assistant Administrative Officer", level: "Level 7" },
      { post: "Junior Engineer (Civil/Elect/Mech)", level: "Level 6" },
      { post: "Lower Division Clerk (LDC) / Jr Admin Asst", level: "Level 2" },
      { post: "Stenographer / Personal Assistant", level: "Level 4 / Level 6" },
      { post: "Hospital Attendant (Nursing Orderly)", level: "Level 1" }
    ],

    selectionProcess: [
      "Computer Based Test (CBT)",
      "Skill Test (Typing/Steno) - If applicable",
      "Document Verification",
      "Medical Examination"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Duration: 90 Minutes",
        "Total Questions: 100 MCQs",
        "Total Marks: 400 (4 Marks per question)",
        "Negative Marking: 1 Mark deduction for each wrong answer."
      ],
      table: [
        { subject: "General Knowledge & Aptitude + Computer", questions: 20, marks: 80 },
        { subject: "Domain Specific (Subject Knowledge)", questions: 80, marks: 320 }
      ]
    },

    vacancyDetails: [
      { postName: "Junior Admin Asst (LDC)", totalPost: "Various", eligibility: "12th Pass + Typing" },
      { postName: "Store Keeper / Clerk", totalPost: "Various", eligibility: "Degree / PG Diploma" },
      { postName: "Junior Engineer (JE)", totalPost: "Various", eligibility: "Diploma/Degree in Engineering" },
      { postName: "Lab Technician", totalPost: "Various", eligibility: "10+2 + DMLT / B.Sc MLT" },
      { postName: "Hospital Attendant", totalPost: "Various", eligibility: "10th Pass + First Aid Certificate" }
    ],

    howToApply: [
      "Visit the official website aiimsexams.ac.in.",
      "Click on 'Recruitments' and select 'Common Recruitment Examination (CRE-4)'.",
      "Register and fill the application form.",
      "Pay the examination fee online and submit."
    ],

    links: {
      applyOnline: "https://www.aiimsexams.ac.in/", 
      notification: "https://www.aiimsexams.ac.in/", 
      officialWebsite: "https://www.aiimsexams.ac.in/" 
    }
  },

  // --- 3. BANK OF BARODA (ID: 1) - FULLY UPDATED ---
  {
    id: 1,
    slug: "bank-of-baroda-apprentice-recruitment-2025",
    shortTitle: "Bank of Baroda Apprentice Recruitment 2025",
    title: "Bank of Baroda Apprentice Recruitment 2025 Apply Online for 2700 Posts | Notification PDF",
    shortInfo: "Bank of Baroda (BOB) has released the official notification for the recruitment of 2700 Apprentice posts across various states. Candidates holding a Graduation Degree in any stream can apply online before the last date. Check State-wise Vacancy, Age Limit, Selection Process, and Exam Pattern here.",
    postDate: "01/12/2025",
    category: "Latest Jobs",
    
    salary: "Rs. 15,000/- per month (Stipend)",

    importantDates: [
      { label: "Application Begin", value: "11/11/2025" },
      { label: "Last Date for Apply", value: "01/12/2025" },
      { label: "Exam Date", value: "To be notified" }
    ],
    
    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹800 + Taxes" },
      { category: "SC / ST / Female", amount: "₹0 (Nil)" },
      { category: "PwBD", amount: "₹400 + Taxes" }
    ],

    ageLimit: "Min: 20 Years | Max: 28 Years (As on 01/11/2025)",
    
    // --- Age Relaxation (Added) ---
    ageRelaxation: [
      "SC/ST: 5 years",
      "OBC (Non-Creamy Layer): 3 years",
      "PwBD (UR/EWS): 10 years",
      "PwBD (OBC): 13 years",
      "PwBD (SC/ST): 15 years"
    ],

    vacancyDetails: [
      { 
        postName: "Apprentice", 
        totalPost: 2700, 
        eligibility: "Bachelor Degree in Any Stream from a Recognized University." 
      }
    ],

    // --- State Wise Vacancy Data (Corrected) ---
    stateWiseVacancy: [
      { state: "Andhra Pradesh", total: 38, sc: 6, st: 3, obc: 10, ews: 4, ur: 15 },
      { state: "Assam", total: 21, sc: 1, st: 1, obc: 7, ews: 2, ur: 10 },
      { state: "Bihar", total: 47, sc: 11, st: 0, obc: 10, ews: 3, ur: 23 },
      { state: "Chandigarh (UT)", total: 12, sc: 2, st: 0, obc: 3, ews: 1, ur: 6 },
      { state: "Chhattisgarh", total: 48, sc: 5, st: 24, obc: 1, ews: 4, ur: 14 },
      { state: "Dadra and Nagar Haveli (UT)", total: 5, sc: 0, st: 2, obc: 0, ews: 0, ur: 3 },
      { state: "Delhi (UT)", total: 119, sc: 17, st: 12, obc: 38, ews: 10, ur: 42 },
      { state: "Goa", total: 10, sc: 0, st: 1, obc: 1, ews: 1, ur: 7 },
      { state: "Gujarat", total: 400, sc: 28, st: 77, obc: 144, ews: 37, ur: 114 },
      { state: "Haryana", total: 36, sc: 4, st: 0, obc: 13, ews: 5, ur: 14 },
      { state: "Jammu and Kashmir", total: 5, sc: 0, st: 0, obc: 2, ews: 1, ur: 2 },
      { state: "Jharkhand", total: 15, sc: 1, st: 3, obc: 2, ews: 3, ur: 6 },
      { state: "Karnataka", total: 440, sc: 74, st: 36, obc: 138, ews: 51, ur: 141 },
      { state: "Kerala", total: 52, sc: 5, st: 0, obc: 14, ews: 6, ur: 27 },
      { state: "Madhya Pradesh", total: 56, sc: 6, st: 16, obc: 5, ews: 6, ur: 23 },
      { state: "Maharashtra", total: 297, sc: 34, st: 29, obc: 92, ews: 29, ur: 113 },
      { state: "Manipur", total: 2, sc: 0, st: 1, obc: 0, ews: 0, ur: 1 },
      { state: "Mizoram", total: 5, sc: 0, st: 2, obc: 0, ews: 0, ur: 3 },
      { state: "ODISHA", total: 29, sc: 6, st: 8, obc: 2, ews: 2, ur: 11 },
      { state: "Puducherry (UT)", total: 6, sc: 1, st: 0, obc: 1, ews: 1, ur: 3 },
      { state: "Punjab", total: 96, sc: 33, st: 0, obc: 27, ews: 6, ur: 30 },
      { state: "Rajasthan", total: 215, sc: 45, st: 39, obc: 58, ews: 15, ur: 58 },
      { state: "Tamil Nadu", total: 159, sc: 33, st: 2, obc: 51, ews: 14, ur: 59 },
      { state: "Telangana", total: 154, sc: 26, st: 12, obc: 49, ews: 18, ur: 49 },
      { state: "Uttar Pradesh", total: 307, sc: 50, st: 4, obc: 113, ews: 27, ur: 113 },
      { state: "Uttarakhand", total: 22, sc: 5, st: 0, obc: 3, ews: 2, ur: 12 },
      { state: "West Bengal", total: 104, sc: 19, st: 6, obc: 27, ews: 10, ur: 42 },
      { state: "Himachal/Other", total: 32, sc: 4, st: 5, obc: 5, ews: 3, ur: 15 } 
    ],

    // --- Selection Process (Added) ---
    selectionProcess: [
      "Online Written Examination",
      "Document Verification",
      "Language Proficiency Test",
      "Medical Examination"
    ],

    // --- Exam Pattern (Added from your image) ---
    examPattern: {
      details: [
        "Mode: Online Computer Based Test",
        "Total Marks: 100",
        "Duration: 60 Minutes",
        "No Negative Marking"
      ],
      table: [
        { subject: "General/Financial Awareness", questions: 25, marks: 25 },
        { subject: "Quantitative & Reasoning Aptitude", questions: 25, marks: 25 },
        { subject: "Computer Knowledge", questions: 25, marks: 25 },
        { subject: "General English", questions: 25, marks: 25 }
      ]
    },

    // --- How to Apply (Added) ---
    howToApply: [
      "Register on Apprenticeship Portals (NATS: nats.education.gov.in or NAPS: apprenticeshipindia.gov.in).",
      "After registration, apply for 'Bank of Baroda Apprentice Recruitment 2025' by searching for 'Bank of Baroda' on the portal.",
      "Receive an email from BFSI SSC with a link to fill the final application form and pay the fee.",
      "Upload necessary documents (Aadhaar, PAN, mark sheets, passport-size photo).",
      "Submit the application and note down the acknowledgment number for future reference."
    ],

    links: {
      applyOnline: "https://www.bankofbaroda.in/career",
      notification: "https://www.bankofbaroda.in/career",
      officialWebsite: "https://www.bankofbaroda.in/"
    }
  }
];
