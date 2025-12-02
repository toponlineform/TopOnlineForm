export const jobsData = [
  {
        // --- 0. KVS & NVS Recruitment (NEWEST) ---
  {
    id: 6,
    slug: "kvs-nvs-recruitment-2025",
    shortTitle: "KVS & NVS Recruitment 2025",
    title: "KVS & NVS Recruitment 2025 Apply Online for 14,900+ Posts | Teaching & Non-Teaching",
    shortInfo: "Kendriya Vidyalaya Sangathan (KVS) and Navodaya Vidyalaya Samiti (NVS) have released a combined recruitment notification for over 14,900 vacancies. Posts include Principal, PGT, TGT, PRT, Librarian, Clerk (JSA/SSA), and MTS. Eligible candidates can apply online through the CBSE portal.",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "Level 1 to Level 12 (Post Wise)",

    importantDates: [
      { label: "Application Begin", value: "14/11/2025" },
      { label: "Last Date for Apply", value: "04/12/2025" },
      { label: "Fee Payment Last Date", value: "04/12/2025" },
      { label: "Correction Window", value: "06/12/2025 to 08/12/2025" },
      { label: "Exam Date", value: "To be notified" }
    ],

    // Fee structure as per Page 33-34 of PDF (Exam Fee + Processing Fee)
    applicationFee: [
      { category: "Principal / VP / Asst. Comm.", amount: "₹2800 (₹2300+500)" },
      { category: "PGT / TGT / PRT / Librarian", amount: "₹2000 (₹1500+500)" },
      { category: "Clerk (JSA/SSA) / Steno / MTS", amount: "₹1700 (₹1200+500)" },
      { category: "SC / ST / PwBD / Ex-SM", amount: "₹500 (Processing Fee Only)" }
    ],

    ageLimit: "PRT: Max 30 Yrs | TGT: Max 35 Yrs | PGT: Max 40 Yrs | Principal: Max 50 Yrs. (Age Relaxation: SC/ST+5, OBC+3, Women+10 for Teaching Posts)",

    // Combined Vacancy Summary for Quick View
    vacancyDetails: [
      { postName: "Primary Teacher (PRT) - KVS", totalPost: 3365, eligibility: "12th + D.Ed/B.El.Ed + CTET Paper I" },
      { postName: "Trained Graduate Teacher (TGT) - KVS & NVS", totalPost: 5772, eligibility: "Degree + B.Ed + CTET Paper II" },
      { postName: "Post Graduate Teacher (PGT) - KVS & NVS", totalPost: 2978, eligibility: "Master's Degree + B.Ed" },
      { postName: "Principal / Vice Principal", totalPost: 285, eligibility: "Master's + B.Ed + Experience" },
      { postName: "Non-Teaching (JSA/SSA/Steno/MTS)", totalPost: 2000, eligibility: "10th / 12th / Degree + Typing" }
    ],

    // Using Smart Table for Category Wise Breakup (Data from PDF Tables)
    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { state: "PRT (KVS)", ur: 1369, ews: 335, obc: 906, sc: 505, st: 250, total: 3365 },
      { state: "TGT (KVS)", ur: 1153, ews: 275, obc: 749, sc: 414, st: 203, total: 2794 },
      { state: "PGT (KVS)", ur: 615, ews: 141, obc: 390, sc: 214, st: 105, total: 1465 },
      { state: "TGT (NVS)", ur: 1230, ews: 292, obc: 798, sc: 441, st: 217, total: 2978 },
      { state: "PGT (NVS)", ur: 634, ews: 146, obc: 403, sc: 222, st: 108, total: 1513 },
      { state: "Jr. Secretariat Asst (KVS)", ur: 277, ews: 68, obc: 184, sc: 108, st: 77, total: 714 },
      { state: "Jr. Secretariat Asst (NVS)", ur: 225, ews: 55, obc: 149, sc: 82, st: 41, total: 552 },
      { state: "MTS / Lab Attendant", ur: 89, ews: 19, obc: 38, sc: 32, st: 11, total: 189 }
    ],

    selectionProcess: [
      "Computer Based Test (CBT)",
      "Demo Teaching & Interview (For Teaching Posts)",
      "Skill Test / Typing Test (For Non-Teaching Posts)",
      "Document Verification"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Duration: 180 Minutes (3 Hours)",
        "Total Marks: 180",
        "No Negative Marking (Generally)"
      ],
      table: [
        { subject: "Proficiency in Languages (Eng/Hindi)", questions: 20, marks: 20 },
        { subject: "General Awareness & Current Affairs", questions: 10, marks: 10 },
        { subject: "Reasoning Ability", questions: 5, marks: 5 },
        { subject: "Computer Literacy", questions: 5, marks: 5 },
        { subject: "Perspectives on Education (Pedagogy)", questions: 60, marks: 60 },
        { subject: "Subject Concerned", questions: 80, marks: 80 }
      ]
    },

    howToApply: [
      "Visit the official website (cbse.gov.in / kvsangathan.nic.in).",
      "Click on 'Recruitment for KVS/NVS 2025'.",
      "Register using Email and Mobile Number.",
      "Fill in personal details and educational qualifications.",
      "Upload scanned Photo and Signature.",
      "Pay the application fee online (Processing fee applies to all).",
      "Submit the form and take a printout."
    ],

    links: [
      { title: "Download Exam Date/Corrigendum Notice", url: "https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2025/11/2025112112.pdf" },
      { title: "Apply Online (NVS & KVS)", url: "https://examinationservices.nic.in/recsys2025/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFbEsl0hvvhEEwgxfU0IzC28jtU4yhpqb3pomlo4g+VC8" },
      { title: "Download Notification", url: "https://www.cbse.gov.in/cbsenew/documents/Detailed_Notification_KVS_NVS_2025_13112025.pdf" },
      { title: "Official Website (KVS)", url: "https://kvsangathan.nic.in/" },
      { title: "Official Website (NVS)", url: "https://navodaya.gov.in/" }
      { title: "Official Website (CBSE)", url: "https://www.cbse.gov.in/" }
    ]
  },
  // --- 1. RRB NTPC (ID 5) ---
  {
    id: 5,
    slug: "rrb-ntpc-recruitment-2025",
    shortTitle: "RRB NTPC Recruitment 2025",
    title: "RRB NTPC Recruitment 2025 Apply Online for 8868 Posts (Graduate & UG) | Notification CEN 05/2025 & 06/2025",
    shortInfo: "Railway Recruitment Board (RRB) has released the official notifications (CEN 05/2025 & CEN 06/2025) for the recruitment of Non-Technical Popular Categories (NTPC). A total of 8868 vacancies are available for Graduate and Undergraduate posts like Station Master, TTE, Clerk, and Goods Guard. Check Zone-wise Vacancy, Eligibility, and Exam Date here.",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "Level 2 to Level 6 (As per 7th CPC)",

    importantDates: [
      { label: "Application Start (Graduate)", value: "14/09/2025" },
      { label: "Last Date (Graduate)", value: "13/10/2025" },
      { label: "Application Start (Undergraduate)", value: "21/09/2025" },
      { label: "Last Date (Undergraduate)", value: "20/10/2025" },
      { label: "Exam Date (CBT-1)", value: "To be notified" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹500 (₹400 Refundable)" },
      { category: "SC / ST / Ex-SM / PwBD / Female", amount: "₹250 (₹250 Refundable)" },
      { category: "Payment Mode", amount: "Online" }
    ],

    ageLimit: "Graduate: 18-33 Years | Undergraduate: 18-30 Years (As on 01/01/2026)",

    ageRelaxation: [
      "OBC (NCL): 3 Years",
      "SC/ST: 5 Years",
      "PwBD: 10 Years",
      "Ex-Servicemen: As per rules"
    ],

    vacancyDetails: [
      { postName: "Chief Commercial cum Ticket Supervisor", totalPost: 1736, eligibility: "Bachelor Degree" },
      { postName: "Station Master", totalPost: 994, eligibility: "Bachelor Degree" },
      { postName: "Goods Train Manager", totalPost: 3144, eligibility: "Bachelor Degree" },
      { postName: "Junior Account Assistant cum Typist", totalPost: 1507, eligibility: "Bachelor Degree + Typing" },
      { postName: "Senior Clerk cum Typist", totalPost: 732, eligibility: "Bachelor Degree + Typing" },
      { postName: "Commercial cum Ticket Clerk", totalPost: 2022, eligibility: "12th Pass (50% Marks)" },
      { postName: "Accounts Clerk cum Typist", totalPost: 361, eligibility: "12th Pass + Typing" },
      { postName: "Junior Clerk cum Typist", totalPost: 990, eligibility: "12th Pass + Typing" },
      { postName: "Trains Clerk", totalPost: 72, eligibility: "12th Pass (50% Marks)" }
    ],
    
    // Zone Wise Data
    zoneWiseGraduate: [
        { state: "RRB AHMEDABAD", ur: 43, sc: 12, st: 3, obc: 15, ews: 6, total: 79 },
        { state: "RRB AJMER", ur: 121, sc: 64, st: 12, obc: 111, ews: 37, total: 345 },
        { state: "RRB BANGALORE", ur: 115, sc: 32, st: 17, obc: 47, ews: 30, total: 241 },
        { state: "RRB BHOPAL", ur: 151, sc: 60, st: 27, obc: 106, ews: 38, total: 382 },
        { state: "RRB BHUBANESWAR", ur: 64, sc: 37, st: 21, obc: 56, ews: 53, total: 231 },
        { state: "RRB BILASPUR", ur: 350, sc: 126, st: 64, obc: 236, ews: 88, total: 864 },
        { state: "RRB CHANDIGARH", ur: 85, sc: 27, st: 16, obc: 51, ews: 20, total: 199 },
        { state: "RRB CHENNAI", ur: 73, sc: 31, st: 22, obc: 43, ews: 18, total: 187 },
        { state: "RRB GORAKHPUR", ur: 48, sc: 16, st: 10, obc: 27, ews: 10, total: 111 },
        { state: "RRB GUWAHATI", ur: 20, sc: 10, st: 4, obc: 14, ews: 8, total: 56 },
        { state: "RRB JAMMU-SRINAGAR", ur: 15, sc: 5, st: 3, obc: 8, ews: 1, total: 32 },
        { state: "RRB KOLKATA", ur: 284, sc: 103, st: 46, obc: 186, ews: 66, total: 685 },
        { state: "RRB MALDA", ur: 213, sc: 83, st: 46, obc: 133, ews: 47, total: 522 },
        { state: "RRB MUMBAI", ur: 254, sc: 89, st: 43, obc: 153, ews: 57, total: 596 },
        { state: "RRB MUZAFFARPUR", ur: 8, sc: 4, st: 2, obc: 5, ews: 2, total: 21 },
        { state: "RRB PATNA", ur: 0, sc: 10, st: 12, obc: 0, ews: 1, total: 23 },
        { state: "RRB PRAYAGRAJ", ur: 51, sc: 19, st: 18, obc: 16, ews: 6, total: 110 },
        { state: "RRB RANCHI", ur: 255, sc: 118, st: 45, obc: 166, ews: 67, total: 651 },
        { state: "RRB SECUNDERABAD", ur: 145, sc: 59, st: 32, obc: 119, ews: 41, total: 396 },
        { state: "RRB SILIGURI", ur: 8, sc: 4, st: 1, obc: 6, ews: 2, total: 21 },
        { state: "RRB THIRUVANANTHAPURAM", ur: 18, sc: 13, st: 13, obc: 10, ews: 4, total: 58 }
    ],
    zoneWiseUG: [
        { state: "RRB AHMEDABAD", ur: 58, sc: 23, st: 13, obc: 43, ews: 16, total: 153 },
        { state: "RRB AJMER", ur: 65, sc: 13, st: 5, obc: 25, ews: 8, total: 116 },
        { state: "RRB BANGALORE", ur: 27, sc: 9, st: 4, obc: 7, ews: 7, total: 54 },
        { state: "RRB BHOPAL", ur: 53, sc: 21, st: 8, obc: 30, ews: 11, total: 123 },
        { state: "RRB BHUBANESWAR", ur: 10, sc: 2, st: 2, obc: 3, ews: 1, total: 18 },
        { state: "RRB BILASPUR", ur: 26, sc: 11, st: 5, obc: 19, ews: 8, total: 69 },
        { state: "RRB CHANDIGARH", ur: 10, sc: 3, st: 3, obc: 6, ews: 2, total: 24 },
        { state: "RRB CHENNAI", ur: 33, sc: 11, st: 5, obc: 23, ews: 8, total: 80 },
        { state: "RRB GORAKHPUR", ur: 68, sc: 25, st: 15, obc: 48, ews: 17, total: 173 },
        { state: "RRB GUWAHATI", ur: 57, sc: 21, st: 8, obc: 36, ews: 13, total: 135 },
        { state: "RRB JAMMU-SRINAGAR", ur: 58, sc: 21, st: 13, obc: 34, ews: 11, total: 137 },
        { state: "RRB KOLKATA", ur: 215, sc: 76, st: 38, obc: 129, ews: 41, total: 499 },
        { state: "RRB MALDA", ur: 79, sc: 29, st: 16, obc: 52, ews: 20, total: 196 },
        { state: "RRB MUMBAI", ur: 190, sc: 72, st: 39, obc: 140, ews: 53, total: 494 },
        { state: "RRB MUZAFFARPUR", ur: 16, sc: 5, st: 3, obc: 11, ews: 4, total: 39 },
        { state: "RRB PATNA", ur: 9, sc: 3, st: 4, obc: 5, ews: 3, total: 24 },
        { state: "RRB PRAYAGRAJ", ur: 128, sc: 53, st: 54, obc: 50, ews: 18, total: 303 },
        { state: "RRB RANCHI", ur: 21, sc: 10, st: 3, obc: 16, ews: 6, total: 56 },
        { state: "RRB SECUNDERABAD", ur: 115, sc: 40, st: 25, obc: 68, ews: 24, total: 272 },
        { state: "RRB SILIGURI", ur: 3, sc: 1, st: 0, obc: 2, ews: 1, total: 7 },
        { state: "RRB THIRUVANANTHAPURAM", ur: 39, sc: 12, st: 1, obc: 26, ews: 8, total: 86 }
    ],
    
    salaryDetails: [
      { post: "Station Master / Commercial Supervisor", level: "Level 6 (₹35,400 + Allowances)" },
      { post: "Goods Train Manager / Sr. Clerk", level: "Level 5 (₹29,200 + Allowances)" },
      { post: "Commercial cum Ticket Clerk", level: "Level 3 (₹21,700 + Allowances)" },
      { post: "Junior Clerk / Trains Clerk", level: "Level 2 (₹19,900 + Allowances)" }
    ],

    selectionProcess: [
      "CBT-1 (Common for all posts)",
      "CBT-2 (Separate for each Pay Level)",
      "Computer Based Aptitude Test (CBAT) - For Station Master/Traffic Asst",
      "Typing Skill Test (TST) - For Clerk/Typist posts",
      "Document Verification & Medical Exam"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT-1 & CBT-2)",
        "Duration: 90 Minutes (For each Stage)",
        "Total Questions: 100 (CBT-1) / 120 (CBT-2)",
        "Negative Marking: 1/3rd Marks deducted for each wrong answer."
      ],
      cbt1: [
        { subject: "General Awareness", questions: 40, marks: 40 },
        { subject: "Mathematics", questions: 30, marks: 30 },
        { subject: "General Intelligence & Reasoning", questions: 30, marks: 30 }
      ],
      cbt2: [
        { subject: "General Awareness", questions: 50, marks: 50 },
        { subject: "Mathematics", questions: 35, marks: 35 },
        { subject: "General Intelligence & Reasoning", questions: 35, marks: 35 }
      ]
    },

    howToApply: [
      "Visit the official RRB website (rrbapply.gov.in).",
      "Create an account if you are a new user.",
      "Select the notification (CEN 05/2025 for Graduate OR CEN 06/2025 for UG).",
      "Fill in the application form and upload required documents.",
      "Pay the application fee online.",
      "Select your RRB Zone carefully (Zone cannot be changed later).",
      "Submit the form and print the receipt."
    ],

    // Updated Links to Array Format (Corrected)
    links: [
      { title: "Apply Online", url: "https://www.rrbapply.gov.in/" },
      { title: "Download Notification", url: "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281" },
      { title: "Official Website", url: "https://indianrailways.gov.in/" }
    ]
  },

  // --- 2. WBSSC Group C & D (ID 4) ---
  {
    id: 4,
    slug: "wbssc-group-c-d-recruitment-2025",
    shortTitle: "WBSSC Group C & D Recruitment 2025",
    title: "WBSSC Group C & D Recruitment 2025 Apply Online for 8477 Posts | Clerk & Non-Teaching Staff",
    shortInfo: "The West Bengal Central School Service Commission (WBSSC) has released the notification for the 1st State Level Selection Test (SLST) 2025 to recruit Non-Teaching Staff (Clerk & Group D). Eligible candidates can apply online for 8000+ vacancies in Govt. Aided/Sponsored Schools.",
    postDate: "09/10/2025",
    category: "Latest Jobs",
    salary: "As per State Govt Norms (Pay Level 6 for Clerk / Level 1 for Group D)",
    importantDates: [{ label: "Application Begin", value: "03/11/2025" }, { label: "Last Date for Apply", value: "03/12/2025 (Upto 5:00 PM)" }, { label: "Fee Payment Last Date", value: "03/12/2025" }, { label: "Written Exam Date", value: "January 2026 (Tentative)" }],
    applicationFee: [{ category: "General / OBC / EWS", amount: "₹400/-" }, { category: "SC / ST / PH", amount: "₹150/-" }],
    ageLimit: "Min: 18 Years | Max: 40 Years (As on 01/01/2025)",
    ageRelaxation: ["SC/ST: 5 Years", "OBC: 3 Years", "Physically Handicapped (PH): 8 Years"],
    vacancyDetails: [{ postName: "Clerk (Group C)", totalPost: 2989, eligibility: "Passed Madhyamik (10th) or Equivalent" }, { postName: "Group D Staff", totalPost: 5488, eligibility: "Passed Class VIII from recognized School" }],
    selectionProcess: ["Written Examination (OMR Based)", "Academic Evaluation (For Clerk)", "Typing/Computer Proficiency Test (For Clerk)", "Personality Test / Interview"],
    examPattern: { details: ["Mode: OMR Based Written Examination", "Marking: 1 Mark for each correct answer", "Negative Marking: No Negative Marking", "Language: English and Bengali"], table: [{ subject: "General Knowledge", questions: 15, marks: 15 }, { subject: "Current Affairs", questions: 15, marks: 15 }, { subject: "General English", questions: 15, marks: 15 }, { subject: "Arithmetic", questions: 15, marks: 15 }] },
    howToApply: ["Visit the official website westbengalssc.com.", "Click on 'Application for 1st SLST (NTS) 2025'.", "Register with Name, Father's Name, DOB (as per Madhyamik Certificate).", "Fill the application form carefully (No rectification allowed later).", "Upload Photo and Signature.", "Pay the examination fee online.", "Submit the form and print the confirmation page."],
    links: [
      { title: "Apply Online", url: "https://www.westbengalssc.com/otrgrpcd/register/" },
      { title: "Download Notification", url: "http://old.westbengalssc.com/sscorg/wbssc/download/notice/Notification_1stSLST_2025_NTS_09_October_2025.pdf" },
      { title: "Official Website", url: "https://www.westbengalssc.com" }
    ]
  },

  // --- 3. ECGC PO (ID 3) - FIXED HEADER ---
  {
    id: 3,
    slug: "ecgc-po-recruitment-2025",
    shortTitle: "ECGC PO Recruitment 2025",
    title: "ECGC PO Recruitment 2025 Apply Online for 30 Posts | Salary ₹20 Lakh CTC | Exam Date",
    shortInfo: "ECGC Limited has released the official notification for the recruitment of Probationary Officers (PO). Eligible graduates can apply online for Generalist and Specialist posts. The selection will be based on an Online Exam and Interview.",
    postDate: "11/11/2025",
    category: "Latest Jobs",
    salary: "Basic Pay ₹88,635 - ₹1,69,025 (CTC ≈ ₹20 LPA)",
    importantDates: [{ label: "Application Begin", value: "11/11/2025" }, { label: "Last Date for Apply", value: "02/12/2025" }, { label: "Online Exam Date", value: "11/01/2026" }, { label: "Result Declaration", value: "31/01/2026 (Tentative)" }],
    applicationFee: [{ category: "General / OBC / EWS", amount: "₹950/-" }, { category: "SC / ST / PwBD", amount: "₹175/-" }],
    ageLimit: "21-30 Years (As on 01/04/2025). Relaxation: SC/ST+5, OBC+3.",
    vacancyDetails: [{ postName: "PO (Generalist)", totalPost: 28, eligibility: "Graduation in Any Discipline" }, { postName: "PO (Specialist)", totalPost: 2, eligibility: "Master's in Hindi/English (Rajbhasha)" }],
    
    // --- FIX: Headers Added ---
    vacancyTableTitle: "Category Wise Vacancy Details",
    vacancyColumnName: "Category",

    stateWiseVacancy: [
      { state: "Unreserved (UR)", total: 12, sc: "N/A", st: "N/A", obc: "N/A", ews: "N/A", ur: 12 },
      { state: "OBC", total: 10, sc: "N/A", st: "N/A", obc: 10, ews: "N/A", ur: "N/A" },
      { state: "SC", total: 5, sc: 5, st: "N/A", obc: "N/A", ews: "N/A", ur: "N/A" },
      { state: "EWS", total: 3, sc: "N/A", st: "N/A", obc: "N/A", ews: 3, ur: "N/A" }
    ],
    selectionProcess: ["Online Written Examination (Objective + Descriptive)", "Interview", "Document Verification", "Medical Examination"],
    examPattern: {
      details: ["Mode: Online Computer Based Test", "Negative Marking: 0.25 Marks deducted for each wrong answer.", "Descriptive Paper: 40 Marks (40 Minutes)."],
      generalistObjective: [{ subject: "Reasoning Ability (40 Mins)", questions: 50, marks: 50 }, { subject: "English Language (30 Mins)", questions: 40, marks: 40 }, { subject: "Computer Knowledge (10 Mins)", questions: 20, marks: 20 }, { subject: "General Awareness (20 Mins)", questions: 40, marks: 40 }, { subject: "Quantitative Aptitude (40 Mins)", questions: 50, marks: 50 }],
      generalistDescriptive: [{ subject: "Essay Writing", questions: 1, marks: 20 }, { subject: "Precis Writing", questions: 1, marks: 20 }],
      specialistObjective: [{ subject: "Reasoning Ability (30 Mins)", questions: 40, marks: 40 }, { subject: "English Language (20 Mins)", questions: 40, marks: 40 }, { subject: "General Awareness (10 Mins)", questions: 30, marks: 30 }, { subject: "Quantitative Aptitude (40 Mins)", questions: 40, marks: 40 }, { subject: "Professional Knowledge (40 Mins)", questions: 50, marks: 50 }],
      specialistDescriptive: [{ subject: "Essay Writing", questions: 1, marks: 20 }, { subject: "Translation", questions: 1, marks: 20 }]
    },
    howToApply: ["Visit the official website ecgc.in.", "Click on 'Career with ECGC' and select 'Click here to Apply Online'.", "Register and fill in the details.", "Upload Photo, Signature, Left Thumb Impression, and Handwritten Declaration.", "Pay the application fee online and submit."],
    links: [
      { title: "Apply Online", url: "https://ibpsreg.ibps.in/ecgcsep25/" },
      { title: "Download Notification", url: "https://www.ecgc.in/acad/Recruitment_PO_2025.pdf" },
      { title: "Official Website", url: "https://www.ecgc.in/" }
    ]
  },

  // --- 4. AIIMS (ID 2) ---
  {
    id: 2,
    slug: "aiims-cre-4-recruitment-2025",
    shortTitle: "AIIMS CRE-4 Group B & C Recruitment 2025",
    title: "AIIMS CRE-4 Recruitment 2025 Apply Online for Group B & C Posts | Exam Date, Salary & Syllabus",
    shortInfo: "All India Institute of Medical Sciences (AIIMS), New Delhi has released the Detailed Recruitment Advertisement (DRA) for the Common Recruitment Examination (CRE-4). This exam is for the recruitment of various Group B and Group C posts.",
    postDate: "11/11/2025",
    category: "Latest Jobs",
    salary: "Level 1 to Level 7 (Post Wise)",
    importantDates: [{ label: "Application Begin", value: "14/11/2025" }, { label: "Last Date for Apply", value: "02/12/2025" }, { label: "Admit Card Status", value: "08/12/2025" }, { label: "CBT Exam Date", value: "22/12/2025 to 24/12/2025" }],
    applicationFee: [{ category: "General / OBC", amount: "₹3000/-" }, { category: "SC / ST / EWS", amount: "₹2400/-" }, { category: "PwBD", amount: "₹0 (Exempted)" }],
    ageLimit: "Varies Post Wise (Mostly 18-30 or 21-35 Years)",
    ageRelaxation: ["SC/ST: 5 Years", "OBC (NCL): 3 Years", "PwBD: 10 Years", "Central Govt. Civilian Employees: As per rules"],
    salaryDetails: [{ post: "Assistant Administrative Officer", level: "Level 7" }, { post: "Junior Engineer (Civil/Elect/Mech)", level: "Level 6" }, { post: "Lower Division Clerk (LDC) / Jr Admin Asst", level: "Level 2" }, { post: "Stenographer / Personal Assistant", level: "Level 4 / Level 6" }, { post: "Hospital Attendant (Nursing Orderly)", level: "Level 1" }],
    selectionProcess: ["Computer Based Test (CBT)", "Skill Test (Typing/Steno) - If applicable", "Document Verification", "Medical Examination"],
    examPattern: { details: ["Mode: Computer Based Test (CBT)", "Duration: 90 Minutes", "Total Questions: 100 MCQs", "Total Marks: 400 (4 Marks per question)", "Negative Marking: 1 Mark deduction for each wrong answer."], table: [{ subject: "General Knowledge & Aptitude + Computer", questions: 20, marks: 80 }, { subject: "Domain Specific (Subject Knowledge)", questions: 80, marks: 320 }] },
    vacancyDetails: [{ postName: "Junior Admin Asst (LDC)", totalPost: "Various", eligibility: "12th Pass + Typing" }, { postName: "Store Keeper / Clerk", totalPost: "Various", eligibility: "Degree / PG Diploma" }, { postName: "Junior Engineer (JE)", totalPost: "Various", eligibility: "Diploma/Degree in Engineering" }, { postName: "Lab Technician", totalPost: "Various", eligibility: "10+2 + DMLT / B.Sc MLT" }, { postName: "Hospital Attendant", totalPost: "Various", eligibility: "10th Pass + First Aid Certificate" }],
    howToApply: ["Visit the official website aiimsexams.ac.in.", "Click on 'Recruitments' and select 'Common Recruitment Examination (CRE-4)'.", "Register and fill the application form.", "Pay the examination fee online and submit."],
    links: [
      { title: "Apply Online", url: "https://aiimsexams.ac.in/advertisement/6915d3056d76b75af3e2187d" },
      { title: "Download Notification", url: "https://aiimsexams.ac.in/notification/6915d3056d76b75af3e2187d" },
      { title: "Official Website", url: "https://www.aiimsexams.ac.in/" }
    ]
  },

  // --- 5. Bank of Baroda (ID 1) ---
  {
    id: 1,
    slug: "bank-of-baroda-apprentice-recruitment-2025",
    shortTitle: "Bank of Baroda Apprentice Recruitment 2025",
    title: "Bank of Baroda Apprentice Recruitment 2025 Apply Online for 2700 Posts | Notification PDF",
    shortInfo: "Bank of Baroda (BOB) has released the official notification for the recruitment of 2700 Apprentice posts across various states. Candidates holding a Graduation Degree in any stream can apply online before the last date. Check State-wise Vacancy, Age Limit, Selection Process, and Exam Pattern here.",
    postDate: "11/11/2025",
    category: "Latest Jobs",
    salary: "Rs. 15,000/- per month (Stipend)",
    importantDates: [{ label: "Application Begin", value: "11/11/2025" }, { label: "Last Date for Apply", value: "01/12/2025" }, { label: "Exam Date", value: "To be notified" }],
    applicationFee: [{ category: "General / OBC / EWS", amount: "₹800 + Taxes" }, { category: "SC / ST / Female", amount: "₹0 (Nil)" }, { category: "PwBD", amount: "₹400 + Taxes" }],
    ageLimit: "Min: 20 Years | Max: 28 Years (As on 01/11/2025)",
    ageRelaxation: ["SC/ST: 5 years", "OBC (Non-Creamy Layer): 3 years", "PwBD (UR/EWS): 10 years", "PwBD (OBC): 13 years", "PwBD (SC/ST): 15 years"],
    vacancyDetails: [{ postName: "Apprentice", totalPost: 2700, eligibility: "Bachelor Degree in Any Stream from a Recognized University." }],
    stateWiseVacancy: [
      { state: "Andhra Pradesh", total: 38, sc: 6, st: 3, obc: 10, ews: 4, ur: 15 }, { state: "Assam", total: 21, sc: 1, st: 1, obc: 7, ews: 2, ur: 10 }, { state: "Bihar", total: 47, sc: 11, st: 0, obc: 10, ews: 3, ur: 23 },
      { state: "Chandigarh (UT)", total: 12, sc: 2, st: 0, obc: 3, ews: 1, ur: 6 }, { state: "Chhattisgarh", total: 48, sc: 5, st: 24, obc: 1, ews: 4, ur: 14 }, { state: "Dadra and Nagar Haveli (UT)", total: 5, sc: 0, st: 2, obc: 0, ews: 0, ur: 3 },
      { state: "Delhi (UT)", total: 119, sc: 17, st: 12, obc: 38, ews: 10, ur: 42 }, { state: "Goa", total: 10, sc: 0, st: 1, obc: 1, ews: 1, ur: 7 }, { state: "Gujarat", total: 400, sc: 28, st: 77, obc: 144, ews: 37, ur: 114 },
      { state: "Haryana", total: 36, sc: 4, st: 0, obc: 13, ews: 5, ur: 14 }, { state: "Jammu and Kashmir", total: 5, sc: 0, st: 0, obc: 2, ews: 1, ur: 2 }, { state: "Jharkhand", total: 15, sc: 1, st: 3, obc: 2, ews: 3, ur: 6 },
      { state: "Karnataka", total: 440, sc: 74, st: 36, obc: 138, ews: 51, ur: 141 }, { state: "Kerala", total: 52, sc: 5, st: 0, obc: 14, ews: 6, ur: 27 }, { state: "Madhya Pradesh", total: 56, sc: 6, st: 16, obc: 5, ews: 6, ur: 23 },
      { state: "Maharashtra", total: 297, sc: 34, st: 29, obc: 92, ews: 29, ur: 113 }, { state: "Manipur", total: 2, sc: 0, st: 1, obc: 0, ews: 0, ur: 1 }, { state: "Mizoram", total: 5, sc: 0, st: 2, obc: 0, ews: 0, ur: 3 },
      { state: "ODISHA", total: 29, sc: 6, st: 8, obc: 2, ews: 2, ur: 11 }, { state: "Puducherry (UT)", total: 6, sc: 1, st: 0, obc: 1, ews: 1, ur: 3 }, { state: "Punjab", total: 96, sc: 33, st: 0, obc: 27, ews: 6, ur: 30 },
      { state: "Rajasthan", total: 215, sc: 45, st: 39, obc: 58, ews: 15, ur: 58 }, { state: "Tamil Nadu", total: 159, sc: 33, st: 2, obc: 51, ews: 14, ur: 59 }, { state: "Telangana", total: 154, sc: 26, st: 12, obc: 49, ews: 18, ur: 49 },
      { state: "Uttar Pradesh", total: 307, sc: 50, st: 4, obc: 113, ews: 27, ur: 113 }, { state: "Uttarakhand", total: 22, sc: 5, st: 0, obc: 3, ews: 2, ur: 12 }, { state: "West Bengal", total: 104, sc: 19, st: 6, obc: 27, ews: 10, ur: 42 },
      { state: "Himachal/Other", total: 32, sc: 4, st: 5, obc: 5, ews: 3, ur: 15 } 
    ],
    selectionProcess: ["Online Written Examination", "Document Verification", "Language Proficiency Test", "Medical Examination"],
    examPattern: { details: ["Mode: Online Computer Based Test", "Total Marks: 100", "Duration: 60 Minutes", "No Negative Marking"], table: [{ subject: "General/Financial Awareness", questions: 25, marks: 25 }, { subject: "Quantitative & Reasoning Aptitude", questions: 25, marks: 25 }, { subject: "Computer Knowledge", questions: 25, marks: 25 }, { subject: "General English", questions: 25, marks: 25 }] },
    howToApply: ["Register on Apprenticeship Portals (NATS: nats.education.gov.in or NAPS: apprenticeshipindia.gov.in).", "After registration, apply for 'Bank of Baroda Apprentice Recruitment 2025' by searching for 'Bank of Baroda' on the portal.", "Receive an email from BFSI SSC with a link to fill the final application form and pay the fee.", "Upload necessary documents (Aadhaar, PAN, mark sheets, passport-size photo).", "Submit the application and note down the acknowledgment number for future reference."],
    links: [
      { title: "Apply Online", url: "https://nats.education.gov.in" },
      { title: "Download Notification", url: "https://bankofbaroda.bank.in/-/media/Project/BOB/CountryWebsites/India/Career/2025/25-11/11-11-2025-Advertisement-Apprenticeship-10-34.pdf" },
      { title: "Official Website", url: "https://www.bankofbaroda.in/" }
    ]
  }
];
