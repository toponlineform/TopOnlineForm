export const jobsData = [
  
  // ==================================================
  //                  LATEST JOBS (ID 1 - 1000)
  // ==================================================

  // --- 21. AAI NER Recruitment 2025 ---
  {
    id: 21,
    slug: "aai-ner-recruitment-2025-non-executives",
    shortTitle: "AAI NER Recruitment 2025",
    title: "AAI NER Recruitment 2025 Apply Online for 14 Posts | Sr. Assistant & Jr. Assistant (Fire/HR)",
    shortInfo: "Airports Authority of India (AAI), Regional Headquarters, North Eastern Region has released Notification Advt. No. 01/2025/DR/NER for the recruitment of Non-Executives. Vacancies are available for Senior Assistant (Electronics), Junior Assistant (HR), and Junior Assistant (Fire Services). Only candidates who are DOMICILE of Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura are eligible to apply.",
    postDate: "06/12/2025",
    category: "Latest Jobs",

    salary: "Rs. 31,000 - Rs. 1,10,000 (IDA Pattern)",

    importantDates: [
      { label: "Notification Release", value: "12/12/2025" },
      { label: "Application Begin", value: "12/12/2025" },
      { label: "Last Date for Apply", value: "11/01/2026" },
      { label: "Fee Payment Last Date", value: "11/01/2026" },
      { label: "Exam Date", value: "To be announced" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹1000/-" },
      { category: "SC / ST / PwBD / Women", amount: "₹0/- (Nil)" },
      { category: "Ex-Servicemen / Apprentices", amount: "₹0/- (Nil)" },
      { category: "Payment Mode", amount: "Online (Net Banking / Debit / Credit Card / UPI)" }
    ],

    ageLimit: "18-30 Years (As on 06/12/2025). Relaxation: OBC +3 Yrs, SC/ST +5 Yrs, PwBD +10 Yrs.",

    vacancyDetails: [
      { postName: "Senior Assistant (Electronics)", totalPost: 5, eligibility: "Diploma in Electronics / Telecommunication / Radio Engineering + 2 Years Experience." },
      { postName: "Junior Assistant (HR)", totalPost: 2, eligibility: "Graduate Degree from a recognized University." },
      { postName: "Junior Assistant (Fire Services)", totalPost: 7, eligibility: "10th + 3 Yr Diploma (Mech/Auto/Fire) OR 12th Pass. Must hold Valid Heavy/Medium/Light Vehicle Driving License." }
    ],

    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    vacancyColumnName: "Post Name",

    postWiseVacancy: [
      { post: "Senior Assistant (Electronics)", total: 5, ur: 5, sc: 0, st: 0, obc: 0, ews: 0 },
      { post: "Junior Assistant (HR)", total: 2, ur: 1, sc: 0, st: 1, obc: 0, ews: 0 },
      { post: "Junior Assistant (Fire Services)", total: 7, ur: 0, sc: 0, st: 6, obc: 1, ews: 0 }
    ],

    salaryDetails: [
      { post: "Senior Assistant (Electronics)", level: "NE-6 (₹36,000 - ₹1,10,000)" },
      { post: "Junior Assistant (HR / Fire Services)", level: "NE-4 (₹31,000 - ₹92,000)" }
    ],

    selectionProcess: [
      "Computer Based Test (CBT)",
      "Document Verification",
      "Computer Literacy Test (For Jr. Asst HR)",
      "Physical Measurement & PET (For Fire Services)",
      "Driving Test (For Fire Services)",
      "Medical Examination"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Duration: 2 Hours",
        "Negative Marking: No Negative Marking"
      ],
      table: [
        { subject: "Subject Knowledge (Educational Qual.)", questions: "50% / 70%", marks: "Technical" },
        { subject: "General Knowledge, Intelligence, Aptitude, English", questions: "50% / 30%", marks: "Non-Tech" }
      ],
      cbt1Title: "Note on Syllabus Weightage",
      cbt1: [
        { subject: "Sr. Assistant (Electronics)", questions: "70% Technical + 30% General", marks: "-" },
        { subject: "Jr. Assistant (HR / Fire Services)", questions: "50% Technical + 50% General", marks: "-" }
      ]
    },

    extraSections: [
      {
        title: "Physical Standards (For Fire Services Only)",
        tableData: [
          { parameter: "Height", male: "Min 167 cm", female: "Min 157 cm" },
          { parameter: "Chest", male: "81 cm (Min 5 cm expansion)", female: "N/A" },
          { parameter: "Weight", male: "Min 55 kg", female: "Min 45 kg" },
          { parameter: "Vision", male: "6/6 without glasses", female: "6/6 without glasses" }
        ]
      },
      {
        title: "Physical Endurance Test (PET) - Fire Services",
        text: "Candidates must score minimum 60 marks out of 100 in PET. The test includes:",
        list: [
          "100m Running",
          "Rope Climbing",
          "Pole Climbing",
          "Ladder Climbing",
          "Casualty Carrying (Lifting sandbag)"
        ]
      },
      {
        title: "Domicile Requirement",
        text: "Only candidates who are Domicile of the following states can apply: Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura."
      }
    ],

    howToApply: [
      "Visit the AAI official website www.aai.aero under the 'Careers' tab.",
      "Click on the recruitment advertisement for NER 01/2025.",
      "Register with a valid Email ID and Mobile Number.",
      "Fill the online application form and upload scanned Photo (20-50KB) and Signature (10-20KB).",
      "Upload Domicile Certificate, Caste Certificate (if applicable), and Educational Documents.",
      "Pay the application fee online (if applicable).",
      "Submit the form and take a printout for future reference."
    ],

    links: [
      { title: "Apply Online", url: "https://www.aai.aero/en/careers/recruitment" },
      { title: "Download Notification", url: "https://www.aai.aero/sites/default/files/examdashboard_advertisement/DR%20Notification%20for%20Non%20Executives%20in%20North%20Eastern%20Region%20_English.pdf" },
      { title: "Official Website", url: "https://www.aai.aero/" }
    ],

    faqs: [
      { question: "Who can apply for AAI NER Recruitment?", answer: "Only Domicile candidates of Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura." },
      { question: "Is there any negative marking in the exam?", answer: "No, there is no negative marking in the AAI CBT exam." },
      { question: "What is the age limit?", answer: "18 to 30 Years as on 06/12/2025. Relaxations apply for reserved categories." },
      { question: "Is a Driving License required for Fire Services?", answer: "Yes, a valid Heavy, Medium, or Light Motor Vehicle license is mandatory." },
      { question: "What is the salary for Sr. Assistant?", answer: "The pay scale is Rs. 36,000 - 1,10,000 (Level NE-6)." }
    ]
  },
  // --- 20. DDA Recruitment 2025 (ID 20) - ALL 26 POSTS FIXED ---
  {
    id: 20,
    slug: "dda-recruitment-2025",
    shortTitle: "DDA Recruitment 2025 Apply Online for 1732 Posts",
    title: "DDA Recruitment 2025 Apply Online for 1732 Posts | All 26 Categories (MTS, JE, ASO, Patwari)",
    shortInfo: "Delhi Development Authority (DDA) has released the official notification (Advt. No. 09/2025) for the recruitment of 1732 vacancies across 26 different posts in Group A, B, and C cadres. Posts include Junior Engineer (JE), Assistant Section Officer (ASO), Patwari, JSA, and MTS. Eligible candidates can apply online.",
    postDate: "06/12/2025",
    category: "Latest Jobs",

    salary: "Level-1 to Level-11 (Post Wise Pay Matrix)",

    importantDates: [
      { label: "Notification Date", value: "26/09/2025" },
      { label: "Application Begin", value: "06/10/2025 (10:00 AM)" },
      { label: "Last Date for Apply", value: "05/11/2025 (06:00 PM)" },
      { label: "Fee Payment Last Date", value: "07/11/2025" },
      { label: "Exam Date", value: "16 Dec 2025 to 03 Jan 2026" }
    ],

    applicationFee: [
      { category: "Group A Officers", amount: "₹2500/-" },
      { category: "Group B Posts (JE/ASO)", amount: "₹2500/-" },
      { category: "Group C Posts (MTS/JSA)", amount: "₹1000/-" },
      { category: "SC / ST / PwBD / Female", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online" }
    ],

    ageLimit: "MTS/Mali: 18-25 Yrs | JSA/Steno/JE: 18-27 Yrs | ASO/Patwari: 21-30 Yrs | Group A: Upto 40 Yrs.",

    // FULL 26 POSTS IN VACANCY DETAILS (No Shortcuts)
    vacancyDetails: [
      { postName: "01. Deputy Director (Architect)", totalPost: 4, eligibility: "Master's Degree in Architecture" },
      { postName: "02. Deputy Director (Public Relation)", totalPost: 1, eligibility: "PG Degree in Journalism/Mass Comm." },
      { postName: "03. Deputy Director (Planning)", totalPost: 4, eligibility: "PG Degree in Planning/Architecture" },
      { postName: "04. Assistant Director (Planning)", totalPost: 19, eligibility: "Bachelor's/Master's in Planning/Arch" },
      { postName: "05. Assistant Director (Architect)", totalPost: 8, eligibility: "Degree in Architecture" },
      { postName: "06. Assistant Director (Landscape)", totalPost: 1, eligibility: "PG Diploma in Landscape Architecture" },
      { postName: "07. Assistant Director (System)", totalPost: 3, eligibility: "BE/B.Tech (CS/IT) or MCA" },
      { postName: "08. Asst. Executive Engineer (Civil)", totalPost: 10, eligibility: "Degree in Civil Engineering" },
      { postName: "09. Asst. Executive Engineer (Elect.)", totalPost: 3, eligibility: "Degree in Electrical Engineering" },
      { postName: "10. Assistant Director (Ministerial)", totalPost: 15, eligibility: "MBA / PG Diploma in Management" },
      { postName: "11. Legal Assistant", totalPost: 7, eligibility: "Degree in Law (LLB) + 3 Yrs Exp." },
      { postName: "12. Planning Assistant", totalPost: 23, eligibility: "Degree in Planning/Architecture" },
      { postName: "13. Architectural Assistant", totalPost: 9, eligibility: "Degree in Architecture" },
      { postName: "14. Programmer", totalPost: 6, eligibility: "Degree in CS/IT/Electronics" },
      { postName: "15. Junior Engineer (Civil)", totalPost: 104, eligibility: "Diploma in Civil Engineering" },
      { postName: "16. Junior Engineer (Elect/Mech)", totalPost: 67, eligibility: "Diploma in Elect/Mech Engineering" },
      { postName: "17. Sectional Officer (Horticulture)", totalPost: 75, eligibility: "Degree in Agriculture/Horticulture" },
      { postName: "18. Naib Tehsildar", totalPost: 6, eligibility: "Degree in any stream + Knowledge of Law" },
      { postName: "19. Junior Translator (Official Lang)", totalPost: 6, eligibility: "Master's in Hindi/English + Diploma" },
      { postName: "20. Assistant Security Officer", totalPost: 6, eligibility: "Graduate + Experience in Army/Police" },
      { postName: "21. Surveyor", totalPost: 6, eligibility: "Diploma/Certificate in Surveying" },
      { postName: "22. Stenographer Grade 'D'", totalPost: 44, eligibility: "12th Pass + Stenography Skill" },
      { postName: "23. Patwari", totalPost: 79, eligibility: "Graduate in any stream" },
      { postName: "24. Junior Secretariat Assistant (JSA)", totalPost: 199, eligibility: "12th Pass + Typing (35/30 wpm)" },
      { postName: "25. Mali", totalPost: 282, eligibility: "10th Pass + Gardening Training" },
      { postName: "26. Multi Tasking Staff (MTS)", totalPost: 745, eligibility: "10th Class Pass" }
    ],

    // FULL DETAILED BREAKUP (Corrected Key Order for Alignment)
    vacancyTableTitle: "Complete Vacancy Details (Post Code 01-26)",
    vacancyColumnName: "Post Code & Name",
    
    stateWiseVacancy: [
      { "Post Code & Name": "01. Dy. Director (Arch)", "Group": "A", "Pay Level": "L-11", "Total": 4, "UR": 1, "EWS": 1, "SC": 1, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "02. Dy. Director (PR)", "Group": "A", "Pay Level": "L-11", "Total": 1, "UR": 1, "EWS": 0, "SC": 0, "ST": 0, "OBC": 0 },
      { "Post Code & Name": "03. Dy. Director (Plan)", "Group": "A", "Pay Level": "L-11", "Total": 4, "UR": 2, "EWS": 0, "SC": 0, "ST": 0, "OBC": 2 },
      { "Post Code & Name": "04. Asst. Dir (Planning)", "Group": "A", "Pay Level": "L-10", "Total": 19, "UR": 10, "EWS": 2, "SC": 3, "ST": 1, "OBC": 3 },
      { "Post Code & Name": "05. Asst. Dir (Arch)", "Group": "A", "Pay Level": "L-10", "Total": 8, "UR": 6, "EWS": 1, "SC": 1, "ST": 0, "OBC": 0 },
      { "Post Code & Name": "06. Asst. Dir (Landscape)", "Group": "A", "Pay Level": "L-10", "Total": 1, "UR": 0, "EWS": 0, "SC": 0, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "07. Asst. Dir (System)", "Group": "A", "Pay Level": "L-10", "Total": 3, "UR": 2, "EWS": 0, "SC": 0, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "08. AEE (Civil)", "Group": "A", "Pay Level": "L-10", "Total": 10, "UR": 7, "EWS": 0, "SC": 0, "ST": 1, "OBC": 2 },
      { "Post Code & Name": "09. AEE (Electrical)", "Group": "A", "Pay Level": "L-10", "Total": 3, "UR": 1, "EWS": 0, "SC": 1, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "10. Asst. Dir (Min.)", "Group": "B", "Pay Level": "L-8", "Total": 15, "UR": 9, "EWS": 1, "SC": 2, "ST": 1, "OBC": 2 },
      { "Post Code & Name": "11. Legal Assistant", "Group": "B", "Pay Level": "L-7", "Total": 7, "UR": 5, "EWS": 0, "SC": 0, "ST": 0, "OBC": 2 },
      { "Post Code & Name": "12. Planning Assistant", "Group": "B", "Pay Level": "L-7", "Total": 23, "UR": 17, "EWS": 1, "SC": 1, "ST": 3, "OBC": 1 },
      { "Post Code & Name": "13. Architectural Asst", "Group": "B", "Pay Level": "L-7", "Total": 9, "UR": 4, "EWS": 1, "SC": 1, "ST": 1, "OBC": 2 },
      { "Post Code & Name": "14. Programmer", "Group": "B", "Pay Level": "L-6", "Total": 6, "UR": 2, "EWS": 1, "SC": 0, "ST": 1, "OBC": 2 },
      { "Post Code & Name": "15. JE (Civil)", "Group": "B", "Pay Level": "L-6", "Total": 104, "UR": 45, "EWS": 7, "SC": 11, "ST": 3, "OBC": 38 },
      { "Post Code & Name": "16. JE (Elect/Mech)", "Group": "B", "Pay Level": "L-6", "Total": 67, "UR": 32, "EWS": 6, "SC": 8, "ST": 4, "OBC": 17 },
      { "Post Code & Name": "17. SO (Horticulture)", "Group": "B", "Pay Level": "L-6", "Total": 75, "UR": 51, "EWS": 7, "SC": 8, "ST": 3, "OBC": 6 },
      { "Post Code & Name": "18. Naib Tehsildar", "Group": "B", "Pay Level": "L-6", "Total": 6, "UR": 5, "EWS": 0, "SC": 0, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "19. Jr. Translator (OL)", "Group": "B", "Pay Level": "L-6", "Total": 6, "UR": 4, "EWS": 0, "SC": 1, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "20. Asst. Security Officer", "Group": "B", "Pay Level": "L-5", "Total": 6, "UR": 5, "EWS": 0, "SC": 0, "ST": 0, "OBC": 1 },
      { "Post Code & Name": "21. Surveyor", "Group": "C", "Pay Level": "L-5", "Total": 6, "UR": 1, "EWS": 1, "SC": 0, "ST": 1, "OBC": 3 },
      { "Post Code & Name": "22. Stenographer Gr D", "Group": "C", "Pay Level": "L-4", "Total": 44, "UR": 24, "EWS": 2, "SC": 5, "ST": 8, "OBC": 5 },
      { "Post Code & Name": "23. Patwari", "Group": "C", "Pay Level": "L-3", "Total": 79, "UR": 33, "EWS": 8, "SC": 12, "ST": 4, "OBC": 22 },
      { "Post Code & Name": "24. JSA", "Group": "C", "Pay Level": "L-2", "Total": 199, "UR": 86, "EWS": 20, "SC": 26, "ST": 14, "OBC": 53 },
      { "Post Code & Name": "25. Mali", "Group": "C", "Pay Level": "L-1", "Total": 282, "UR": 118, "EWS": 30, "SC": 35, "ST": 22, "OBC": 77 },
      { "Post Code & Name": "26. MTS", "Group": "C", "Pay Level": "L-1", "Total": 745, "UR": 298, "EWS": 84, "SC": 91, "ST": 63, "OBC": 209 }
    ],

    salaryDetails: [
      { post: "Group A (Post 01-09)", level: "Level-10 / Level-11 (Rs 56,100 - Rs 2,08,700)" },
      { post: "Group B (Post 10-20)", level: "Level-6 / Level-7 / Level-8 (Rs 35,400 - Rs 1,51,100)" },
      { post: "Group C (Post 21-26)", level: "Level-1 to Level-5 (Rs 18,000 - Rs 92,300)" }
    ],

    selectionProcess: [
      "Stage 1: Computer Based Examination (CBT) - For All Posts",
      "Stage 2: Skill Test / Typing / Stenography (Post Specific)",
      "Stage 3: Stage-II Mains Exam (For ASO / JSA / Patwari)",
      "Stage 4: Document Verification"
    ],

    examPattern: {
      details: ["Mode: Online CBT", "Duration: 1 Hour (Stage 1)", "Negative Marking: 0.33 Marks (MTS/JSA) / 0.25 (JE)"],
      stages: [
        {
          title: "Exam Pattern: MTS / Mali (Single Stage)",
          data: [
            { subject: "General Intelligence & Reasoning", questions: 25, marks: 25 },
            { subject: "General Awareness", questions: 25, marks: 25 },
            { subject: "Quantitative Aptitude", questions: 25, marks: 25 },
            { subject: "English Language", questions: 25, marks: 25 }
          ]
        },
        {
          title: "Exam Pattern: Junior Engineer (Single Stage)",
          data: [
            { subject: "Reasoning & GK", questions: 20, marks: 20 },
            { subject: "Quant & English", questions: 20, marks: 20 },
            { subject: "Respective Engineering Discipline", questions: 80, marks: 80 }
          ]
        },
        {
          title: "Exam Pattern: JSA / Patwari (Stage-I)",
          data: [
            { subject: "General Intelligence & Reasoning", questions: 25, marks: 50 },
            { subject: "General Awareness", questions: 25, marks: 50 },
            { subject: "Quantitative Aptitude", questions: 25, marks: 50 },
            { subject: "English Comprehension", questions: 25, marks: 50 }
          ]
        }
      ]
    },

    howToApply: [
      "Visit the official website dda.gov.in.",
      "Click on 'Jobs' -> 'Direct Recruitment 2025' -> 'Apply Online'.",
      "Register using Name, Email, and Mobile Number.",
      "Login and fill the application form for your desired post.",
      "Upload Scanned Photo and Signature.",
      "Pay the application fee online.",
      "Submit the form and take a printout."
    ],

    links: [
      { title: "Apply Online", url: "https://https://cdn.digialm.com/EForms/configuredHtml/1258/95962/Index.html" },
      { title: "Download Notification PDF", url: "https://www.dda.gov.in/sites/default/files/latest_jobs/advertisement_no_09_2025_dr_2025.pdf" },
      { title: "Official Website", url: "https://dda.gov.in/" }
    ],
    
    faqs: [
      { question: "What is the full form of DDA?", answer: "Delhi Development Authority." },
      { question: "Can I apply for both MTS and JSA?", answer: "Yes, you can apply for multiple posts, but you have to fill separate forms and pay separate fees for each." },
      { question: "Is there any interview?", answer: "No, there is no interview for Group B (Non-Gazetted) and Group C posts. Selection is based on CBT and Skill Test." }
    ]
  },
  
  // --- 19. WBSEDCL Recruitment 2025 ---
  {
    id: 19,
    slug: "wbsedcl-recruitment-2025",
    shortTitle: "WBSEDCL Recruitment 2025",
    title: "WBSEDCL Recruitment 2025 Apply Online for 447 Posts | Assistant Manager & Junior Engineer",
    shortInfo: "West Bengal State Electricity Distribution Company Limited (WBSEDCL) has released Notification No. MPP/2025/04 for the recruitment of Assistant Manager (HR&A / F&A) and Junior Engineer (Electrical) Grade-II. A total of 447 vacancies are available. Eligible candidates can apply online from 27th November 2025.",
    postDate: "24/11/2025",
    category: "Latest Jobs",
    
    salary: "Level-6 to Level-8 (Pay Matrix ROPA 2020)",

    importantDates: [
      { label: "Notification Date", value: "24/11/2025" },
      { label: "Application Begin", value: "27/11/2025" },
      { label: "Last Date for Apply", value: "29/12/2025" },
      { label: "Fee Payment Last Date", value: "29/12/2025" },
      { label: "CBT Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "Asst. Manager (UR/OBC/EWS)", amount: "₹400/- + GST" },
      { category: "Junior Engineer (UR/OBC/EWS)", amount: "₹300/- + GST" },
      { category: "SC / ST / PwBD / Exempted", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online" }
    ],

    ageLimit: "18-32 Years (As on 01/01/2025). Relaxation: SC/ST (WB) +5 Yrs, OBC +3 Yrs.",

    vacancyDetails: [
      { postName: "Assistant Manager (HR&A)", totalPost: 20, eligibility: "MBA / PG Degree / Diploma (2 Years) in HR" },
      { postName: "Assistant Manager (F&A)", totalPost: 26, eligibility: "CA / ICWA / MBA (Finance)" },
      { postName: "Junior Engineer (Electrical)", totalPost: 401, eligibility: "Diploma in Electrical Engineering" }
    ],

    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    vacancyColumnName: "Post Name",
    
    stateWiseVacancy: [
      { state: "Assistant Manager (HR&A)", total: 20, ur: 8, sc: 5, st: 1, "obc-a": 2, "obc-b": 2, ews: 2 },
      { state: "Assistant Manager (F&A)", total: 26, ur: 11, sc: 5, st: 2, "obc-a": 3, "obc-b": 2, ews: 3 },
      { state: "Junior Engineer (Electrical)", total: 401, ur: 178, sc: 88, st: 25, "obc-a": 41, "obc-b": 28, ews: 41 }
    ],

    salaryDetails: [
      { post: "Assistant Manager", level: "Level-8 (₹56,100 - ₹1,60,500)" },
      { post: "Junior Engineer", level: "Level-6 (₹36,800 - ₹1,06,700)" }
    ],

    selectionProcess: [
      "Computer Based Test (CBT) - 85 Marks",
      "Personal Interview - 15 Marks",
      "Document Verification",
      "Pre-Employment Medical Examination"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Total Questions: 85 | Marks: 85",
        "Negative Marking: 0.33 Marks",
        "Duration: 90 Minutes"
      ],
      table: [
        { subject: "Domain Knowledge", questions: 50, marks: 50 },
        { subject: "General English", questions: 5, marks: 5 },
        { subject: "Quantitative Aptitude", questions: 10, marks: 10 },
        { subject: "Computer Proficiency", questions: 10, marks: 10 },
        { subject: "Vernacular (Bengali/Nepali)", questions: 10, marks: 10 }
      ]
    },

    howToApply: [
      "Visit the official website www.wbsedcl.in.",
      "Go to 'Careers' -> 'Recruitment of AM & JE 2025'.",
      "Register with valid Email ID and Mobile Number.",
      "Login and fill the application form.",
      "Upload Scanned Photo, Signature and required documents.",
      "Pay the application fee online.",
      "Submit and Print the application form."
    ],

    links: [
      { title: "Apply Online", url: "https://cdn3.digialm.com/EForms/configuredHtml/32902/95673/login.html" },
      { title: "Download Notification", url: "https://www.wbsedcl.in/irj/go/km/docs/internet/new_website/pdf/Careers/Website%20Notification%20w.r.t%20Notification%20No.%20MPP-2025-04%20Dt.%2024.11.2025_27_11.pdf" },
      { title: "Official Website", url: "https://www.wbsedcl.in/" }
    ],
    
    faqs: [
      { question: "What is the last date to apply?", answer: "29th December 2025." },
      { question: "Is B.Tech eligible for JE post?", answer: "Notification specifies Diploma. Higher qualification rules apply as per WBSEDCL norms." },
      { question: "What is the full form of WBSEDCL?", answer: "West Bengal State Electricity Distribution Company Limited." },
      { question: "Can final year students apply?", answer: "No, candidates must possess the final degree/certificate on or before the closing date of application." },
      { question: "Is there any bond period?", answer: "Yes, candidates have to execute a bond to serve the company for a minimum period of 4 years (₹1,50,000 for AM, ₹1,00,000 for JE)." }
    ]
  },
  
  // --- 18. BTSC Various Posts (ID 18) - FULLY COMPLETED ---
  {
    id: 18,
    slug: "btsc-various-posts-recruitment-2025",
    shortTitle: "BTSC Recruitment 2025 (1907 Posts)",
    title: "BTSC Recruitment 2025 Apply Online for 1907 Posts | Work Inspector, Dental Hygienist & Hostel Manager",
    shortInfo: "Bihar Technical Service Commission (BTSC) has released official notifications for the recruitment of Work Inspector, Dental Hygienist, and Hostel Manager under Advertisement Nos. 25/2025, 26/2025, and 27/2025. Eligible candidates can apply online.",
    postDate: "05/12/2025",
    category: "Latest Jobs",
    
    salary: "Level-2 to Level-4 (Post Wise)",

    importantDates: [
      { label: "Application Begin", value: "05/12/2025" },
      { label: "Last Date for Apply", value: "05/01/2026" },
      { label: "Fee Payment Last Date", value: "05/01/2026" },
      { label: "Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "All Candidates", amount: "₹100/-" },
      { category: "Payment Mode", amount: "Online" }
    ],

    ageLimit: "18-37 Years (Work Inspector/Dental). 21-37 Years (Hostel Manager). Relaxation: BC/EBC/Female +3 Yrs, SC/ST +5 Yrs.",

    // 1. Basic Vacancy Details
    vacancyDetails: [
      { postName: "Work Inspector (Advt 25/2025)", totalPost: 1114, eligibility: "10th Pass + ITI" },
      { postName: "Dental Hygienist (Advt 26/2025)", totalPost: 702, eligibility: "10+2 (Bio) + Diploma" },
      { postName: "Hostel Manager (Advt 27/2025)", totalPost: 91, eligibility: "Degree/Diploma in Hotel Mgmt" }
    ],

    // 2. Post & Category Wise Vacancy
    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    stateWiseVacancy: [
      { 
        "Post Name": "Work Inspector (25/2025)", 
        "Total": 1114, 
        "UR": 444, "EWS": 111, "SC": 179, "ST": 13, "EBC": 200, "BC": 133, "BC(W)": 34 
      },
      { 
        "Post Name": "Dental Hygienist (26/2025)", 
        "Total": 702, 
        "UR": 281, "EWS": 70, "SC": 112, "ST": 7, "EBC": 127, "BC": 84, "BC(W)": 21 
      },
      { 
        "Post Name": "Hostel Manager (27/2025)", 
        "Total": 91, 
        "UR": 37, "EWS": 9, "SC": 14, "ST": 1, "EBC": 16, "BC": 11, "BC(W)": 3 
      }
    ],

    // 3. Selection Process
    selectionProcess: [
      "Work Inspector: Written Exam (CBT) & Doc Verification",
      "Dental Hygienist: Written Exam (CBT) & Experience Weightage",
      "Hostel Manager: Written Exam (CBT) & Doc Verification"
    ],

    // 4. Exam Pattern (Added Hostel Manager Table)
    examPattern: {
      details: ["Mode: CBT", "Type: MCQ", "Language: Hindi/English", "Marks: 100 Total"],
      stages: [
        {
          title: "1. Work Inspector Exam Pattern",
          data: [{ subject: "Trade Related (Civil/Surveyor/Plumber)", questions: 80, marks: 80 }, { subject: "General Studies", questions: 20, marks: 20 }]
        },
        {
          title: "2. Dental Hygienist Exam Pattern",
          data: [{ subject: "Dental Hygiene Subjects", questions: 75, marks: 75 }, { subject: "Experience Weightage", questions: "-", marks: "25" }]
        },
        {
          title: "3. Hostel Manager Exam Pattern",
          data: [{ subject: "Hotel Management & Hospitality", questions: 80, marks: 80 }, { subject: "General Studies", questions: 20, marks: 20 }]
        }
      ]
    },

    howToApply: [
      "Visit btsc.bihar.gov.in.",
      "Click on 'Apply Online' for respective Advt No.",
      "Register and fill form.",
      "Upload documents and Pay Fee.",
      "Submit."
    ],

    links: [
      { title: "Apply Online", url: "https://btsc.pariksha.nic.in/Agencies.aspx?KZhCrm9B4QPkl0gO2rAMuw==" },
      { title: "Download Notification (Work Inspector)", url: "https://btsc.bihar.gov.in/sites/default/files/Advertisement/25_2025.pdf" }, // Replace with direct PDF link if available
      { title: "Download Notification (Dental Hygienist)", url: "https://btsc.bihar.gov.in/sites/default/files/Advertisement/26_2025.pdf" },
      { title: "Download Notification (Hostel Manager)", url: "https://btsc.bihar.gov.in/sites/default/files/Advertisement/27_2025.pdf" },
      { title: "Official Website", url: "https://btsc.bihar.gov.in/" }
    ],

    // --- ADDED FAQs ---
    faqs: [
      { question: "How many vacancies are released in BTSC Recruitment 2025?", answer: "A total of 1907 vacancies are released (1114 Work Inspector, 702 Dental Hygienist, 91 Hostel Manager)." },
      { question: "What is the qualification for Work Inspector?", answer: "Candidate must have passed 10th and possess an ITI certificate in Draftsman Civil / Surveyor / Plumber trade." },
      { question: "Is there any exam for these posts?", answer: "Yes, selection will be based on a Computer Based Test (CBT) for all posts." },
      { question: "What is the application fee?", answer: "The application fee is ₹100/- for all candidates." }
    ]
  },
  // --- 17. Haryana Health Department Medical Officer ---
  {
    id: 17,
    slug: "haryana-health-department-medical-officer-recruitment-2025",
    shortTitle: "Haryana Medical Officer Recruitment 2025",
    title: "Haryana Health Department Medical Officer Recruitment 2025 Apply Online for 450 Posts | HCMS Group-A",
    shortInfo: "Director General Health Services, Haryana has released the official notification for the recruitment of 450 Medical Officers (Group-A HCMS-I). Eligible MBBS candidates can apply online from 08 December 2025.",
    postDate: "05/12/2025",
    category: "Latest Jobs",
    salary: "FPL-10 (₹56,100 - ₹1,77,500)",
    
    importantDates: [
      { label: "Notification Date", value: "05/12/2025" },
      { label: "Application Begin", value: "08/12/2025 (09:00 AM)" },
      { label: "Last Date for Apply", value: "07/01/2026 (Upto 11:59 PM)" },
      { label: "Exam Date", value: "To be notified" }
    ],
    
    applicationFee: [
      { category: "Male (General / DESM of Haryana)", amount: "₹1000/-" },
      { category: "Male (General - Other States)", amount: "₹1000/-" },
      { category: "Female (General - Haryana)", amount: "₹250/-" },
      { category: "SC / BC-A / BC-B / EWS / ESM (Haryana)", amount: "₹250/-" },
      { category: "PwBD (Haryana)", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online (Net Banking/Debit/Credit Card)" }
    ],

    ageLimit: "22-35 Years (As on 07/01/2026). Age Relaxation: SC/BC +5 Years, PwBD +10 Years.",

    vacancyDetails: [
      { postName: "Medical Officer (Group-A)", totalPost: 450, eligibility: "MBBS Degree from recognized University + Registered with Medical Council (NMC/State) + Hindi/Sanskrit upto Matric." }
    ],

    vacancyTableTitle: "Category Wise Vacancy Details",
    
    // Using lowercase keys to ensure App.jsx formats them correctly (e.g. 'sc(DSC)' becomes 'Sc (DSC)')
    stateWiseVacancy: [
      { 
        category: "Medical Officer (Group-A)", 
        total: 450, 
        ur: 238, 
        "sc(OSC)": 45, 
        "sc(DSC)": 45, 
        "bc-A": 50, 
        "bc-B": 27, 
        ews: 45,
        "esm(Total)": 22,
        "pwbd(Total)": 18 
      }
    ],

    selectionProcess: [
      "Stage 1: Written Examination (100 Marks)",
      "Stage 2: Post Graduate Degree/Diploma Weightage (Max 14 Marks)",
      "Stage 3: Experience Weightage (Max 10 Marks - 2 Marks/Year)",
      "Stage 4: Document Verification"
    ],

    howToApply: [
      "Visit the official website haryanahealth.gov.in or uhsr.ac.in.",
      "Click on the link for 'Recruitment of Medical Officers (HCMS-I)'.",
      "Register using your basic details.",
      "Fill the online application form and upload MBBS/PG Degree, Photo, and Signature.",
      "Pay the application fee online.",
      "Submit the form and take a printout."
    ],

    links: [
      { title: "Apply Online (Active on 08/12/2025)", url: "http://haryanahealth.gov.in/" },
      { title: "Download Notification PDF", url: "https://cdnbbsr.s3waas.gov.in/s31177967c7957072da3dc1db4ceb30e7a/uploads/2025/12/20251205838210414.pdf" }, 
      { title: "Official Website", url: "http://haryanahealth.gov.in/" }
    ],

    faqs: [
      { question: "What is the last date to apply for Haryana Medical Officer?", answer: "The last date to apply is 07 January 2026." },
      { question: "How many vacancies are there in Haryana Health Department?", answer: "There are a total of 450 vacancies for Medical Officers." },
      { question: "What is the age limit?", answer: "Candidate must be between 22 to 35 years as on 07/01/2026." }
    ]
  },
  // --- 16. HPRCA Scientific Assistant (ID 16) ---
  {
    id: 16,
    slug: "hprca-scientific-assistant-recruitment-2025",
    shortTitle: "HPRCA Scientific Assistant Recruitment 2025",
    title: "HPRCA Scientific Assistant Recruitment 2025 Apply Online for Digital Forensics Post | Advt No. 05/2025",
    shortInfo: "Himachal Pradesh Rajya Chayan Aayog (HPRCA), Hamirpur has released Advertisement No. 05/2025 for the recruitment of Scientific Assistant (Digital Forensics) on a contract/job trainee basis. Eligible candidates with Master's/Bachelor's in Forensic Science or IT can apply online.",
    postDate: "27/11/2025",
    category: "Latest Jobs",

    salary: "As per HP Govt. Norms (Job Trainee)",

    importantDates: [
      { label: "Application Begin", value: "03/12/2025 (10:00 AM)" },
      { label: "Last Date for Apply", value: "07/01/2026 (Upto 11:59 PM)" },
      { label: "Fee Payment Last Date", value: "07/01/2026" },
      { label: "Exam Date", value: "To be notified" }
    ],

    // Fee based on PDF Page 6
    applicationFee: [
      { category: "All Categories (Exam + Processing)", amount: "₹800/-" },
      { category: "Correction Fee", amount: "₹100/-" },
      { category: "Payment Mode", amount: "Online (Credit/Debit Card/Net Banking)" }
    ],

    ageLimit: "18-45 Years (As on 01/01/2025). Relaxation applicable for HP reserved categories.",

    vacancyDetails: [
      { postName: "Scientific Assistant (Digital Forensics)", totalPost: 1, eligibility: "Master's in Forensic Science/Digital Forensics/MCA OR B.E./B.Tech (CS/IT/Electronics) + 2 Years Experience" }
    ],

    vacancyTableTitle: "Post Wise Vacancy Details",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { state: "Scientific Assistant", total: 1, ur: 1, ews: 0, obc: 0, sc: 0, st: 0 }
    ],

    selectionProcess: [
      "Stage 1: Computer Based Test (CBT) - 100 Marks (2 Hours)",
      "Stage 2: Document Verification"
    ],

    // Exam Pattern (PDF Page 4 - 200 MCQs converted to 100 Marks weightage logic or standard pattern)
    // Note: PDF says "200 Multiple Choice Question carrying 1/2 mark per question" = 100 Marks.
    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Total Questions: 200 MCQs",
        "Total Marks: 100 (0.5 Mark per question)",
        "Duration: 2 Hours",
        "Negative Marking: As per HPRCA rules"
      ],
      stages: [
        {
          title: "Written Screening Test Pattern",
          data: [
            { subject: "Subject Field (Digital Forensics/CS/IT)", questions: 140, marks: 70 },
            { subject: "GK (HP), Current Affairs, Science, Logic, English, Hindi", questions: 60, marks: 30 }
          ]
        }
      ]
    },

    howToApply: [
      "Visit the official HPRCA website hprca.hp.gov.in.",
      "Register on the 'One Time Registration (OTR)' portal.",
      "Login and select Advertisement No. 05/2025.",
      "Fill the application form and upload required documents.",
      "Pay the application fee of ₹800/- online.",
      "Submit the form and take a printout."
    ],

    links: [
      { title: "Apply Online", url: "https://hprca.hp.gov.in/homepage" },
      { title: "Download Notification", url: "https://hprca.hp.gov.in/advertisements" }, // Replace with direct PDF link if hosted
      { title: "Official Website", url: "https://hprca.hp.gov.in" }
    ],
    
    faqs: [
      { question: "What is the qualification for Scientific Assistant?", answer: "M.Sc (Forensic/IT/MCA) OR B.Tech/B.E (CS/IT) with 2 years experience." },
      { question: "What is the exam pattern?", answer: "The exam will have 200 questions (140 Technical + 60 General) carrying 0.5 marks each." }
    ]
  }, 
    // --- 15. HPRCA Hamirpur Recruitment (ID 15) ---
  {
    id: 15,
    slug: "hprca-hamirpur-recruitment-2025",
    shortTitle: "HPRCA Hamirpur Recruitment 2025",
    title: "HPRCA Hamirpur Recruitment 2025 Apply Online for 270 Posts | Special Educator & JOA (Library)",
    shortInfo: "Himachal Pradesh Rajya Chayan Aayog (HPRCA), Hamirpur has released Advertisement No. 06/2025 for the recruitment of Special Educators, Junior Office Assistant (Library), and Steno Typist on a contract/regular basis. A total of 270 vacancies are available. Candidates with 12th/Diploma/Graduation and HP Domicile/Education can apply online.",
    postDate: "28/11/2025",
    category: "Latest Jobs",

    salary: "Level-8 to Level-10 (As per HP Civil Services Pay Rules)",

    importantDates: [
      { label: "Application Begin", value: "04/12/2025 (10:00 AM)" },
      { label: "Last Date for Apply", value: "08/01/2026 (Upto 11:59 PM)" },
      { label: "Correction Window", value: "Will open for 7 days after closing date" },
      { label: "Exam Date", value: "To be notified" }
    ],

    // Fee based on PDF Page 9 (Total Fee Column)
    applicationFee: [
      { category: "General / Unreserved", amount: "₹800/- (Exam ₹100 + Processing ₹700)" },
      { category: "Reserved Categories (SC/ST/OBC/EWS of HP)", amount: "As per HPRCA Norms (Check Notification)" },
      { category: "Payment Mode", amount: "Online (Debit/Credit Card/Net Banking)" }
    ],

    // Age Limit as on 01/01/2025 (PDF Page 1)
    ageLimit: "18-45 Years. Relaxation: 5 Years for SC/ST/OBC/PwD of Himachal Pradesh.",

    vacancyDetails: [
      { postName: "Special Educator (Pre-Primary to Class-V)", totalPost: 108, eligibility: "12th (50%) + D.Ed (Special Edu) OR D.El.Ed + 6 Month Training + TET Pass" },
      { postName: "Special Educator (Class VI-XII)", totalPost: 83, eligibility: "Graduation (50%) + B.Ed (Special Edu) OR B.Ed + 6 Month Training + TET Pass" },
      { postName: "Junior Office Assistant (Library)", totalPost: 78, eligibility: "12th + Diploma/Degree in Library Science (Candidate must be from HP Schools/Bonafide Himachali)" },
      { postName: "Steno Typist (Trainee)", totalPost: 1, eligibility: "12th Pass + Shorthand (60 wpm) + Typing (25 wpm)" }
    ],

    // Smart Table for Category Wise Vacancy (Calculated from PDF Page 4 breakdown)
    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { state: "Special Educator (Pre-Primary)", total: 108, ur: 42, ews: 14, obc: 21, sc: 26, st: 5 },
      { state: "Special Educator (VI-XII)", total: 83, ur: 32, ews: 10, obc: 17, sc: 20, st: 4 },
      { state: "JOA (Library)", total: 78, ur: 29, ews: 10, obc: 16, sc: 19, st: 4 },
      { state: "Steno Typist", total: 1, ur: 1, ews: 0, obc: 0, sc: 0, st: 0 }
    ],
    // Note: Sub-categories like WFF/BPL are merged into main categories for the table above.

    salaryDetails: [
      { post: "Special Educator (Pre-Primary)", level: "Level-8 (₹29,700 Initial)" },
      { post: "Special Educator (VI-XII)", level: "Level-10 (₹38,100 Initial)" },
      { post: "JOA (Library) / Steno Typist", level: "As per Govt. Policy for Trainee" }
    ],

    selectionProcess: [
      "Stage 1: Computer Based Test (CBT) / OMR Test (120 Marks)",
      "Stage 2: Skill Test / Typing Test (Where applicable)",
      "Stage 3: Document Verification"
    ],

    // Detailed Exam Pattern (PDF Page 7)
    examPattern: {
      details: [
        "Mode: CBT or OMR Based",
        "Total Questions: 120 MCQs",
        "Total Marks: 120 (1 Mark each)",
        "Duration: 90 Minutes",
        "Qualifying Marks: 45% (Gen), 40% (Reserved)"
      ],
      // Custom Table using 'stages' feature of our Smart App.jsx
      stages: [
        {
          title: "Written Screening Test Pattern",
          data: [
            { subject: "Subject Related (Education/Library Science etc.)", questions: 85, marks: 85 },
            { subject: "GK (HP), Current Affairs, Science, Logic, English, Hindi", questions: 35, marks: 35 }
          ]
        }
      ]
    },

    howToApply: [
      "Visit the official HPRCA website hprca.hp.gov.in.",
      "Register on the 'One Time Registration (OTR)' portal.",
      "Login and fill the Online Recruitment Application (ORA).",
      "Upload scanned Photo, Signature, and Educational Documents.",
      "Pay the application fee online.",
      "Submit the form and keep the printout for future reference."
    ],

    links: [
      { title: "Apply Online", url: "https://hprca.hp.gov.in/login" },
      { title: "Download Notification", url: "https://hprca.hp.gov.in/advertisements" }, // Replace with direct PDF link if hosted
      { title: "Official Website", url: "https://hprca.hp.gov.in" }
    ],

    faqs: [
      { question: "What is the last date to apply for HPRCA Recruitment 2025?", answer: "The last date to apply online is 08 January 2026." },
      { question: "Can candidates from other states apply?", answer: "Yes, but candidates from other states will be treated as General category and must have passed 10th & 12th from Himachal Pradesh (unless they are Bonafide Himachalis)." },
      { question: "Is there any negative marking in HPRCA exam?", answer: "The notification does not explicitly specify negative marking, but standard HPRCA rules usually apply. Check the admit card instructions." },
      { question: "What is the syllabus for Special Educator?", answer: "85 questions will be from the subject (Special Education/Pedagogy) and 35 questions from GK of HP, Current Affairs, and General Aptitude." }
    ]
  },
    {
    id: 14,
    slug: "ib-mts-recruitment-2025",
    shortTitle: "IB MTS Recruitment 2025",
    title: "IB MTS Recruitment 2025 Apply Online for 362 Posts | 10th Pass Govt Job",
    shortInfo: "Intelligence Bureau (IB) under Ministry of Home Affairs (MHA) has released the notification for the recruitment of Multi-Tasking Staff (General) [MTS/Gen]. A total of 362 vacancies are available across 37 Subsidiary Intelligence Bureaux (SIBs). This is a General Central Service, Group 'C' (Non-Gazetted, Non-Ministerial) post. Selection will be based on Tier-I (Objective) and Tier-II (Descriptive) exams.",
    postDate: "04/12/2025",
    category: "Latest Jobs",

    salary: "Level-1 (₹18,000 - ₹56,900) + 20% Special Security Allowance",

    importantDates: [
      { label: "Application Begin", value: "22/11/2025" },
      { label: "Last Date for Apply", value: "14/12/2025 (Upto 11:59 PM)" },
      { label: "Fee Payment Last Date", value: "14/12/2025 (Online) / 16/12/2025 (SBI Challan)" },
      { label: "Tier-I Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "Male (UR / OBC / EWS)", amount: "₹650/- (Exam Fee ₹100 + Processing ₹550)" },
      { category: "SC / ST / Female / PwBD / ESM", amount: "₹550/- (Processing Charges Only)" },
      { category: "Payment Mode", amount: "Online (Debit/Credit Card/Net Banking/UPI) or SBI Challan" }
    ],

    ageLimit: "18-25 Years (As on 14/12/2025). Relaxation: SC/ST +5 Yrs, OBC +3 Yrs.",

    vacancyDetails: [
      { postName: "Multi-Tasking Staff (General)", totalPost: 362, eligibility: "Matriculation (10th Pass) from a recognized Board + Domicile Certificate of the respective State applied for." }
    ],

    vacancyTableTitle: "SIB Wise Vacancy Details",
    vacancyColumnName: "SIB / Centre",

    stateWiseVacancy: [
      { state: "Agartala", total: 6, ur: 2, obc: 0, sc: 1, st: 2, ews: 1 },
      { state: "Ahmedabad", total: 4, ur: 0, obc: 1, sc: 1, st: 1, ews: 1 },
      { state: "Aizawl", total: 11, ur: 6, obc: 0, sc: 0, st: 4, ews: 1 },
      { state: "Amritsar", total: 7, ur: 4, obc: 1, sc: 2, st: 0, ews: 0 },
      { state: "Bengaluru", total: 4, ur: 1, obc: 1, sc: 2, st: 0, ews: 0 },
      { state: "Bhopal", total: 11, ur: 2, obc: 3, sc: 2, st: 3, ews: 1 },
      { state: "Bhubaneswar", total: 7, ur: 3, obc: 0, sc: 3, st: 0, ews: 1 },
      { state: "Chandigarh", total: 7, ur: 2, obc: 5, sc: 0, st: 0, ews: 0 },
      { state: "Chennai", total: 10, ur: 4, obc: 1, sc: 5, st: 0, ews: 0 },
      { state: "Dehradun", total: 8, ur: 6, obc: 1, sc: 1, st: 0, ews: 0 },
      { state: "Delhi / IB Hqrs", total: 108, ur: 44, obc: 30, sc: 4, st: 17, ews: 13 },
      { state: "Gangtok", total: 8, ur: 4, obc: 1, sc: 0, st: 2, ews: 1 },
      { state: "Guwahati", total: 10, ur: 3, obc: 4, sc: 0, st: 2, ews: 1 },
      { state: "Hyderabad", total: 6, ur: 3, obc: 1, sc: 2, st: 0, ews: 0 },
      { state: "Imphal", total: 0, ur: 0, obc: 0, sc: 0, st: 0, ews: 0 },
      { state: "Itanagar", total: 25, ur: 12, obc: 0, sc: 0, st: 11, ews: 2 },
      { state: "Jaipur", total: 0, ur: 0, obc: 0, sc: 0, st: 0, ews: 0 },
      { state: "Jammu", total: 7, ur: 5, obc: 1, sc: 1, st: 0, ews: 0 },
      { state: "Kalimpong", total: 3, ur: 1, obc: 0, sc: 2, st: 0, ews: 0 },
      { state: "Kohima", total: 6, ur: 2, obc: 0, sc: 0, st: 3, ews: 1 },
      { state: "Kolkata", total: 1, ur: 0, obc: 1, sc: 0, st: 0, ews: 0 },
      { state: "Leh", total: 10, ur: 6, obc: 3, sc: 0, st: 0, ews: 1 },
      { state: "Lucknow", total: 12, ur: 6, obc: 1, sc: 3, st: 0, ews: 2 },
      { state: "Meerut", total: 2, ur: 0, obc: 0, sc: 1, st: 0, ews: 1 },
      { state: "Mumbai", total: 22, ur: 10, obc: 4, sc: 4, st: 1, ews: 3 },
      { state: "Nagpur", total: 2, ur: 0, obc: 1, sc: 0, st: 0, ews: 1 },
      { state: "Panaji", total: 2, ur: 2, obc: 0, sc: 0, st: 0, ews: 0 },
      { state: "Patna", total: 6, ur: 4, obc: 0, sc: 1, st: 0, ews: 1 },
      { state: "Raipur", total: 4, ur: 2, obc: 0, sc: 1, st: 1, ews: 0 },
      { state: "Ranchi", total: 2, ur: 0, obc: 1, sc: 1, st: 0, ews: 0 },
      { state: "Shillong", total: 7, ur: 4, obc: 0, sc: 0, st: 2, ews: 1 },
      { state: "Shimla", total: 5, ur: 1, obc: 2, sc: 2, st: 0, ews: 0 },
      { state: "Siliguri", total: 6, ur: 3, obc: 1, sc: 2, st: 0, ews: 0 },
      { state: "Srinagar", total: 14, ur: 6, obc: 4, sc: 1, st: 2, ews: 1 },
      { state: "Trivandrum", total: 13, ur: 9, obc: 4, sc: 0, st: 0, ews: 0 },
      { state: "Varanasi", total: 3, ur: 2, obc: 0, sc: 1, st: 0, ews: 0 },
      { state: "Vijayawada", total: 3, ur: 1, obc: 0, sc: 2, st: 0, ews: 0 }
    ],

    selectionProcess: [
      "Stage 1: Tier-I Written Examination (Online Objective Type)",
      "Stage 2: Tier-II Descriptive Test (English Language)",
      "Stage 3: Document Verification",
      "Stage 4: Medical Examination",
      "Note: Final Merit is based on Tier-I marks (provided Tier-II is qualified)."
    ],

    examPattern: {
      details: [
        "Mode: Online Computer Based Test (CBT)",
        "Negative Marking: 1/4th mark for each wrong answer in Tier-I.",
        "Tier-II is of Qualifying Nature (Minimum 20/50 marks required).",
        "Resolution of Tie: Date of Birth (Older candidate placed higher)."
      ],
      stages: [
        {
          title: "Tier-I Exam Pattern (Objective Type)",
          data: [
            { subject: "General Awareness", questions: 40, marks: 40 },
            { subject: "Quantitative Aptitude", questions: 20, marks: 20 },
            { subject: "Numerical/Analytical/Logical Ability", questions: 20, marks: 20 },
            { subject: "English Language", questions: 20, marks: 20 }
          ]
        },
        {
          title: "Tier-II Exam Pattern (Descriptive Type)",
          data: [
            { subject: "Descriptive Test on English Language and Comprehension (Essay, Precis, etc.)", questions: "Descriptive", marks: "50 (1 Hour)" }
          ]
        }
      ]
    },

    howToApply: [
      "Visit the official website mha.gov.in or ncs.gov.in.",
      "Register with valid Email and Mobile Number.",
      "Login and select the SIB/Centre you want to apply for (You can apply for only one SIB).",
      "Upload Photo (not older than 12 weeks) and Signature.",
      "Pay the examination/processing fee online via SBI EPAY LITE.",
      "Submit the form and print the confirmation page for future reference."
    ],

    links: [
      { title: "Apply Online", url: "https://cdn.digialm.com/EForms/configuredHtml/1258/96684/Index.html" }, // Usually redirects to TCS link
      { title: "Download Notification", url: "https://g03.tcsion.com//per/g03/pub/726/EForms/image/ImageDocUpload/71161/2/8401422694.pdf" }, // Direct link when available
      { title: "Official Website", url: "https://www.mha.gov.in/" }
    ],

    // --- NEW: FAQs for SEO ---
    faqs: [
      { question: "What is the salary of IB MTS 2025?", answer: "The salary is Level-1 (₹18,000 - ₹56,900) plus a special 20% security allowance, making the gross salary around ₹30,000 - ₹35,000 per month." },
      { question: "What is the last date to apply for IB MTS Recruitment 2025?", answer: "The last date to apply online is 14th December 2025." },
      { question: "Is there any negative marking in the IB MTS Exam?", answer: "Yes, there is a negative marking of 1/4 mark for each wrong answer in the Tier-I exam." },
      { question: "Can I apply for more than one SIB in IB MTS?", answer: "No, a candidate can opt for only one SIB (Subsidiary Intelligence Bureau) and will be considered for vacancies of that SIB only." },
      { question: "What is the age limit for IB MTS 2025?", answer: "The age limit is 18 to 25 years as on 14.12.2025. Age relaxation applies for SC/ST/OBC candidates." }
    ]
  },
  
    // --- ITBP Deputy Judge Attorney General (ID 12) ---
  {
    id: 13,
    slug: "itbp-deputy-judge-attorney-general-recruitment-2025",
    shortTitle: "ITBP Deputy Judge Attorney General Recruitment 2025",
    title: "ITBP Deputy Judge Attorney General Recruitment 2025 Apply Online for 07 Posts | Deputy Commandant (Law)",
    shortInfo: "Indo-Tibetan Border Police Force (ITBP) has released the notification for the recruitment of Deputy Judge Attorney General (Deputy Commandant) in Group 'A' Gazetted cadre. Eligible Law Graduates with experience can apply online. Selection will be based on Physical Standards, Written Test, and Interview.",
    postDate: "03/12/2025",
    category: "Latest Jobs",

    salary: "Level-11 (₹67,700 - ₹2,08,700) + Allowances",

    importantDates: [
      { label: "Application Begin", value: "02/12/2025" },
      { label: "Last Date for Apply", value: "31/12/2025 (Upto 11:59 PM)" },
      { label: "Fee Payment Last Date", value: "31/12/2025" },
      { label: "Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹400/-" },
      { category: "SC / ST / Female / Ex-SM", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online (Net Banking/Cards/UPI)" }
    ],

    ageLimit: "Max 40 Years (As on 31/12/2025). Relaxation: SC/ST+5, OBC+3, Govt Servants+5 Years.",

    vacancyDetails: [
      { postName: "Deputy Judge Attorney General (Dy Commandant)", totalPost: 7, eligibility: "Bachelor Degree in Law + 7 Yrs Exp. OR Master Degree in Law + 5 Yrs Exp. (Must be registered Advocate)" }
    ],

    // --- FIX: Table Structure Changed to Post Wise ---
    vacancyTableTitle: "Vacancy Distribution (Category Wise)",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { state: "Dy. Judge Attorney General", total: 7, ur: 5, sc: 0, st: 1, obc: 1, ews: 0 }
    ],
    // Ab ye table Post Name dikhayega aur aage category ka breakup.

    salaryDetails: [
      { post: "Deputy Commandant (JAG)", level: "Pay Matrix Level-11 (7th CPC)" }
    ],

    selectionProcess: [
      "Physical Standard Test (PST) & Biometric",
      "Physical Efficiency Test (PET) - Qualifying",
      "Written Examination (Paper I & II)",
      "Documentation & Interview (50 Marks)",
      "Medical Examination (DME/RME)"
    ],

    // --- EXAM PATTERN + PET ADDED ---
    examPattern: {
      details: [
        "Paper-I: Objective Type (2 Hours, 100 Marks)",
        "Paper-II: Professional Subject (3 Hours, 100 Marks - MCQ + Subjective)",
        "Negative Marking: 1/4th marks deducted for wrong answers (MCQ).",
        "PST: Height - 165cm (Male) / 157cm (Female)."
      ],
      cbt1: [
        { subject: "General Intelligence & Reasoning", questions: 25, marks: 25 },
        { subject: "General Awareness", questions: 25, marks: 25 },
        { subject: "General English", questions: 50, marks: 50 }
      ],
      cbt2: [
        { subject: "Professional Subject (Objective)", questions: 60, marks: 60 },
        { subject: "Professional Subject (Subjective)", questions: 20, marks: 40 }
      ],
      
      // --- NEW: PET Table Data ---
      pet: [
        { activity: "Race 100 Meters", male: "Within 28 Seconds", female: "Within 30 Seconds" },
        { activity: "Race 800 Meters", male: "Within 6 Minutes", female: "Within 7 Minutes" },
        { activity: "Shot Put (7.26 Kg)", male: "4.5 Meters (3 Chances)", female: "Not Applicable" }
      ]
    },

    howToApply: [
      "Visit the official ITBP recruitment website recruitment.itbpolice.nic.in.",
      "Register and fill the online application form.",
      "Upload required documents (Law Degree, Experience Certificate, Photo, Signature).",
      "Pay the application fee online (if applicable).",
      "Submit the form and take a printout.",
      "Note: Prepare for PET as per the physical standards mentioned."
    ],

    links: [
      { title: "Apply Online", url: "https://recruitment.itbpolice.nic.in/" },
      { title: "Download Notification", url: "https://recruitment.itbpolice.nic.in/" },
      { title: "Official Website", url: "https://itbpolice.nic.in/" }
    ]
  },
  
    {
    id: 12,
    slug: "cbse-recruitment-2025-group-a-b-c",
    shortTitle: "CBSE Recruitment 2025 (Group A, B, C)",
    title: "CBSE Recruitment 2025 Apply Online for 138 Posts | Jr Assistant, Accountant & Officer",
    shortInfo: "Central Board of Secondary Education (CBSE) has released the official notification for Direct Recruitment Quota Examination 2026 (DRQ 2026). A total of 138 vacancies are available for Group A, B, and C posts including Assistant Secretary, Accounts Officer, Junior Engineer, Junior Accountant, and Junior Assistant. Eligible candidates can apply online.",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "Level 2 to Level 10 (As per 7th CPC)",

    importantDates: [
      { label: "Application Begin", value: "02/12/2025" },
      { label: "Last Date for Apply", value: "22/12/2025 (Upto 11:59 PM)" },
      { label: "Fee Payment Last Date", value: "22/12/2025" },
      { label: "Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "Group A (Unreserved/OBC/EWS)", amount: "₹1750/-" },
      { category: "Group B & C (Unreserved/OBC/EWS)", amount: "₹1050/-" },
      { category: "SC / ST / PwBD / Ex-SM / Women", amount: "₹250/- (Processing Fee Only)" },
      { category: "Payment Mode", amount: "Online (Net Banking/Cards/UPI)" }
    ],

    ageLimit: "Max 27-35 Years (Varies Post Wise). Relaxation: SC/ST+5, OBC+3, PwBD+10.",

    vacancyDetails: [
      { postName: "Assistant Secretary (Group A)", totalPost: 49, eligibility: "Bachelor's/Master's Degree + Experience (Varies by Dept)" },
      { postName: "Accounts Officer (Group A)", totalPost: 2, eligibility: "Degree in Commerce/Accounts/Finance/Economics OR CA/ICWA/MBA" },
      { postName: "Superintendent (Group B)", totalPost: 27, eligibility: "Bachelor's Degree + Computer Knowledge" },
      { postName: "Junior Translation Officer (Group B)", totalPost: 9, eligibility: "Master's in Hindi/English + Diploma in Translation" },
      { postName: "Junior Accountant (Group C)", totalPost: 16, eligibility: "12th Pass with Commerce/Accounts + Typing" },
      { postName: "Junior Assistant (Group C)", totalPost: 35, eligibility: "12th Pass + Typing (35 wpm Eng / 30 wpm Hindi)" }
    ],

    // Smart Table for Category Wise Breakup (Exact Data from PDF Page 1)
    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { state: "Assistant Secretary (Admin)", total: 18, ur: 11, ews: 1, obc: 4, sc: 1, st: 1 },
      { state: "Asst. Professor (Academics)", total: 16, ur: 8, ews: 1, obc: 4, sc: 2, st: 1 },
      { state: "Asst. Professor (Training)", total: 8, ur: 5, ews: 0, obc: 2, sc: 1, st: 0 },
      { state: "Asst. Professor (Skill Edu)", total: 7, ur: 5, ews: 0, obc: 1, sc: 1, st: 0 },
      { state: "Accounts Officer", total: 2, ur: 2, ews: 0, obc: 0, sc: 0, st: 0 },
      { state: "Superintendent", total: 27, ur: 12, ews: 2, obc: 7, sc: 4, st: 2 },
      { state: "Junior Translation Officer", total: 9, ur: 5, ews: 0, obc: 2, sc: 1, st: 1 },
      { state: "Junior Accountant", total: 16, ur: 7, ews: 1, obc: 4, sc: 3, st: 1 },
      { state: "Junior Assistant", total: 35, ur: 14, ews: 3, obc: 10, sc: 5, st: 3 }
    ],

    salaryDetails: [
      { post: "Assistant Secretary / Accounts Officer", level: "Level 10" },
      { post: "Superintendent / Translation Officer", level: "Level 6" },
      { post: "Junior Accountant", level: "Level 2" },
      { post: "Junior Assistant", level: "Level 2" }
    ],

    selectionProcess: [
      "Tier-1: MCQ Based Written Examination (OMR)",
      "Tier-2: Descriptive Test (For Group A & B posts) / Objective (For Jr Accountant)",
      "Skill Test: Typing / Dictation (For Jr Assistant, Accountant etc.)",
      "Interview (For Group A posts)",
      "Document Verification"
    ],

    // Exam Pattern for Tier 1 (Common for most posts - Page 10/11/12 of PDF)
    examPattern: {
      details: [
        "Mode: Tier-1 (OMR Based MCQ)",
        "Duration: 2 Hours",
        "Total Questions: 100",
        "Total Marks: 300 (3 Marks per question)",
        "Negative Marking: 1 Mark deducted for each wrong answer."
      ],
      table: [
        { subject: "Current Affairs & General Awareness", questions: 20, marks: 60 },
        { subject: "Reasoning & Mathematical Ability", questions: 20, marks: 60 },
        { subject: "General Hindi & English", questions: 20, marks: 60 },
        { subject: "Basic Computer Knowledge", questions: 20, marks: 60 },
        { subject: "School Education & Board Administration", questions: 20, marks: 60 }
      ]
    },

    howToApply: [
      "Visit the official website cbse.gov.in.",
      "Click on 'Main Website' -> 'Latest @ CBSE' -> 'Recruitment'.",
      "Register online for 'Direct Recruitment Quota Examination 2026'.",
      "Fill in the application form and upload documents (Photo, Signature).",
      "Pay the application fee online.",
      "Submit the form and print the confirmation page."
    ],

    links: [
      { title: "Apply Online", url: "https://examinationservices.nic.in/recsys2025/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFSuabJtfdyH7GsL2cij2dPKFqA5XsHH8yMmK+6SEPU/E" },
      { title: "Download Notification", url: "https://www.cbse.gov.in/cbsenew/documents/Detailed_Advertisement_Direct_Recruitment_02122025.pdf" },
      { title: "Official Website", url: "https://www.cbse.gov.in/" }
    ]
  },
  
  {
    id: 11,
    slug: "drdo-ceptam-11-recruitment-2025",
    shortTitle: "DRDO CEPTAM-11 Recruitment 2025",
    title: "DRDO CEPTAM-11 Recruitment 2025 Apply Online for 764 Posts | STA-B & Technician-A",
    shortInfo: "Defence Research & Development Organisation (DRDO), Center for Personnel Talent Management (CEPTAM) has released a short notice for the recruitment of Senior Technical Assistant-B (STA-B) and Technician-A (Tech-A). A total of 764 vacancies have been announced. Online applications are tentatively scheduled to begin from 09th December 2025.",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "Level 2 to Level 6 (7th CPC)",

    importantDates: [
      { label: "Notification Released", value: "02/12/2025 (Short Notice)" },
      { label: "Application Begin (Tentative)", value: "09/12/2025" },
      { label: "Last Date for Apply", value: "To be notified" },
      { label: "Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹100/- (Expected)" },
      { category: "SC / ST / PwBD / Women", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online" }
    ],

    // Age Limit as per Image
    ageLimit: "18-28 Years (As on 09/12/2025). Relaxation as per Govt Rules.",

    vacancyDetails: [
      { postName: "Senior Technical Assistant-B (STA-B)", totalPost: 561, eligibility: "B.Sc. Degree OR Diploma in Engineering (Auto/Civil/Elect/Mech/CS etc.)" },
      { postName: "Technician-A (Tech-A)", totalPost: 203, eligibility: "10th Pass + ITI Certificate in relevant trade" }
    ],

    // Smart Table for Post Wise Vacancy
    vacancyTableTitle: "Post Wise Vacancy & Pay Scale",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { state: "Senior Technical Assistant-B (STA-B)", total: 561, ur: "TBD", ews: "TBD", obc: "TBD", sc: "TBD", st: "TBD" },
      { state: "Technician-A (Tech-A)", total: 203, ur: "TBD", ews: "TBD", obc: "TBD", sc: "TBD", st: "TBD" }
    ],
    // Note: Detailed category wise breakup will be updated after full notification.

    salaryDetails: [
      { post: "Senior Technical Assistant-B (STA-B)", level: "Pay Level-6 (₹35,400 - ₹1,12,400)" },
      { post: "Technician-A (Tech-A)", level: "Pay Level-2 (₹19,900 - ₹63,200)" }
    ],

    selectionProcess: [
      "Tier-I: Computer Based Test (CBT) - Screening/Provisional Selection",
      "Tier-II: Trade Test (For Tech-A) / Selection Test (For STA-B)",
      "Document Verification",
      "Medical Examination"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Exam Type: Objective Multiple Choice Questions (MCQ)",
        "Language: Hindi and English",
        "Negative Marking: No (Usually)"
      ],
      // Tier 1 Table (Screening for STA-B)
      tier1: [
        { subject: "Quantitative Ability & General Intelligence", questions: 40, marks: 40 },
        { subject: "General Awareness & English Language", questions: 40, marks: 40 },
        { subject: "General Science", questions: 40, marks: 40 }
      ],
      // Tier 2 Table (Selection for STA-B / Trade Test for Tech-A)
      tier2: [
        { subject: "Test specific to the subject of post (STA-B)", questions: 100, marks: 100 },
        { subject: "Trade Test (Technician-A)", questions: "Qualifying", marks: "-" }
      ]
    },

    howToApply: [
      "Visit the official website drdo.gov.in once the link activates.",
      "Navigate to 'Careers' -> 'CEPTAM-11 Advertisement'.",
      "Register with basic details and contact information.",
      "Fill the application form for STA-B or Tech-A post.",
      "Upload scanned Photo, Signature, and 10th/ITI/Diploma certificates.",
      "Pay the application fee (if applicable).",
      "Submit the form and print the acknowledgement."
    ],

    links: [
      { title: "Apply Online (Link Active on 09/12/2025)", url: "https://www.drdo.gov.in/drdo/careers/ceptam-11" },
      { title: "Download Notification (Soon)", url: "" },
      { title: "Download Short Notice", url: "https://www.drdo.gov.in" }, // Replace with direct PDF link if hosted
      { title: "Official Website", url: "https://www.drdo.gov.in" }
    ]
  },
  // --- 0. SBI SCO Wealth Management (NEWEST - SUPER SMART) ---
  {
    id: 10,
    slug: "sbi-sco-wealth-management-recruitment-2025",
    shortTitle: "SBI SCO Recruitment 2025 (Wealth Management)",
    title: "SBI SCO Recruitment 2025 Apply Online for 996 Wealth Management Posts | CTC up to ₹45 Lakhs",
    shortInfo: "State Bank of India (SBI) has released the official notification (CRPD/SCO/2025-26/17) for the recruitment of Specialist Cadre Officers (SCO) on a contract basis. A total of 996 vacancies are available for VP Wealth, AVP Wealth, and Customer Relationship Executive across 17 Circles. Selection will be based on Shortlisting and Interview only (No Written Exam).",
    postDate: "02/12/2025",
    category: "Latest Jobs",

    salary: "₹6.20 Lakhs - ₹44.70 Lakhs CTC per annum (Contractual)",

    importantDates: [
      { label: "Application Begin", value: "02/12/2025" },
      { label: "Last Date for Apply", value: "23/12/2025" },
      { label: "Fee Payment Last Date", value: "23/12/2025" },
      { label: "Interview Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹750/-" },
      { category: "SC / ST / PwBD", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online" }
    ],

    // Age Limit (As on 01/05/2025) - PDF Page 2
    ageLimit: "VP Wealth: 26-42 Yrs | AVP Wealth: 23-35 Yrs | Executive: 20-35 Yrs. (Relaxation: SC/ST+5, OBC+3, PwBD+10)",

    vacancyDetails: [
      { postName: "VP Wealth (Senior Relationship Manager)", totalPost: 506, eligibility: "Graduation + 6 Years Exp. in Wealth Management" },
      { postName: "AVP Wealth (Relationship Manager)", totalPost: 206, eligibility: "Graduation + 3 Years Exp. in Wealth Management" },
      { postName: "Customer Relationship Executive (CRE)", totalPost: 284, eligibility: "Graduation + Valid 2-Wheeler Driving License" }
    ],

    // --- TABLE 1: Category Wise Vacancy (Replaces State Wise Logic) ---
    // Note: Using 'state' key for Post Name to fit App.jsx logic
    vacancyTableTitle: "Post & Category Wise Vacancy Details",
    vacancyColumnName: "Post Name",
    
    stateWiseVacancy: [
      { state: "VP Wealth (SRM)", total: 506, ur: 188, ews: 46, obc: 119, sc: 77, st: 34 },
      { state: "AVP Wealth (RM)", total: 206, ur: 82, ews: 20, obc: 52, sc: 33, st: 15 },
      { state: "Customer Relationship Executive", total: 284, ur: 115, ews: 28, obc: 73, sc: 47, st: 21 }
    ],

    salaryDetails: [
      { post: "VP Wealth (SRM)", level: "CTC: ₹30.00L - ₹44.70L / Annum" },
      { post: "AVP Wealth (RM)", level: "CTC: ₹20.00L - ₹30.20L / Annum" },
      { post: "Customer Relationship Executive", level: "CTC: ₹4.00L - ₹6.20L / Annum" }
    ],

    selectionProcess: [
      "Stage 1: Shortlisting (Based on Qualification & Experience)",
      "Stage 2: Personal Interview (100 Marks)",
      "Stage 3: CTC Negotiation"
    ],

    examPattern: {
      details: [
        "Mode: Shortlisting & Interview Only",
        "No Written Examination.",
        "Merit List: Based on Interview Score (Min Qualifying Marks: 40% for UR, 35% for Others).",
        "Contract Period: 5 Years (Renewable for another 4 years)."
      ]
    },

    // --- TABLE 2: Circle Wise Vacancy (Using Extra Section) ---
    // This solves the 'Var Var' issue by creating a custom table
    extraSections: [
      {
        title: "Circle Wise Vacancy Details",
        tableData: [
          { "Circle Name": "Gandhinagar", "VP Wealth": 20, "AVP Wealth": 13, "Executive": 10, "Total": 43 },
          { "Circle Name": "Amaravati", "VP Wealth": 13, "AVP Wealth": 5, "Executive": 11, "Total": 29 },
          { "Circle Name": "Bengaluru", "VP Wealth": 53, "AVP Wealth": 22, "Executive": 29, "Total": 104 },
          { "Circle Name": "Bhopal", "VP Wealth": 12, "AVP Wealth": 7, "Executive": 14, "Total": 33 },
          { "Circle Name": "Bhubaneshwar", "VP Wealth": 13, "AVP Wealth": 6, "Executive": 5, "Total": 24 },
          { "Circle Name": "Chandigarh", "VP Wealth": 28, "AVP Wealth": 24, "Executive": 23, "Total": 75 },
          { "Circle Name": "Chennai", "VP Wealth": 31, "AVP Wealth": 12, "Executive": 12, "Total": 55 },
          { "Circle Name": "Guwahati", "VP Wealth": 17, "AVP Wealth": 6, "Executive": 8, "Total": 31 },
          { "Circle Name": "Hyderabad", "VP Wealth": 19, "AVP Wealth": 11, "Executive": 13, "Total": 43 },
          { "Circle Name": "Jaipur", "VP Wealth": 15, "AVP Wealth": 11, "Executive": 9, "Total": 35 },
          { "Circle Name": "Kolkata", "VP Wealth": 43, "AVP Wealth": 9, "Executive": 24, "Total": 76 },
          { "Circle Name": "Lucknow", "VP Wealth": 21, "AVP Wealth": 12, "Executive": 14, "Total": 47 },
          { "Circle Name": "Maharashtra", "VP Wealth": 38, "AVP Wealth": 8, "Executive": 7, "Total": 53 },
          { "Circle Name": "Mumbai Metro", "VP Wealth": 57, "AVP Wealth": 13, "Executive": 25, "Total": 95 },
          { "Circle Name": "New Delhi", "VP Wealth": 36, "AVP Wealth": 27, "Executive": 36, "Total": 99 },
          { "Circle Name": "Patna", "VP Wealth": 24, "AVP Wealth": 9, "Executive": 9, "Total": 42 },
          { "Circle Name": "Thiruvananthapuram", "VP Wealth": 66, "AVP Wealth": 11, "Executive": 35, "Total": 112 }
        ]
      }
    ],

    howToApply: [
      "Visit the official SBI Careers website (sbi.co.in/web/careers).",
      "Click on 'Join SBI' -> 'Current Openings' -> 'SCO Wealth Management'.",
      "Register and fill in the application form.",
      "Upload Resume, ID Proof, Age Proof, Educational & Experience Certificates.",
      "Pay the application fee online.",
      "Submit the form and print the system generated application."
    ],

    links: [
      { title: "Apply Online", url: "https://recruitment.sbi.bank.in/crpd-sco-2025-26-17/apply" },
      { title: "Download Notification", url: "https://sbi.bank.in/documents/77530/52947104/1_Advertisement+_Wealth+MGMT_02.12.2025.pdf/2788f63d-697c-ee09-2fb0-1c6502d171a7?t=1764654253632" },
      { title: "Official Website", url: "https://sbi.bank.in/web/careers/current-openings" }
    ],
    
    faqs: [
      { question: "Is there any written exam for SBI SCO?", answer: "No, selection is based on Shortlisting and Interview only." },
      { question: "Is this a permanent job?", answer: "No, this is a contractual position for 5 years, renewable further." },
      { question: "Can I apply for multiple circles?", answer: "You can give 3 preferences for circles, but you will be posted in one circle." }
    ]
  },
  
  {
    id: 9,
    slug: "ssc-gd-constable-recruitment-2025",
    shortTitle: "SSC GD Constable Recruitment 2025",
    title: "SSC GD Constable Recruitment 2025 Apply Online for 25,487 Posts | BSF, CISF, CRPF, SSB, ITBP, AR, SSF",
    shortInfo: "Staff Selection Commission (SSC) has released the official notification for the recruitment of Constable (General Duty) in Central Armed Police Forces (CAPFs), SSF, and Rifleman (GD) in Assam Rifles. A total of 25,487 vacancies are available for 10th Pass candidates. Check Force-wise Vacancy, Physical Standards, and Exam Date here.",
    postDate: "01/12/2025",
    category: "Latest Jobs",

    salary: "Pay Level-3 (₹21,700 - ₹69,100)",

    importantDates: [
      { label: "Application Begin", value: "01/12/2025" },
      { label: "Last Date for Apply", value: "31/12/2025 (Upto 11:00 PM)" },
      { label: "Fee Payment Last Date", value: "01/01/2026" },
      { label: "Correction Window", value: "08/01/2026 to 10/01/2026" },
      { label: "CBT Exam Date", value: "February - April 2026 (Tentative)" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹100/-" },
      { category: "SC / ST / Ex-SM", amount: "₹0 (Nil)" },
      { category: "All Category Female", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "Online (BHIM UPI, Net Banking, Cards)" }
    ],

    ageLimit: "18-23 Years (As on 01/01/2026). Relaxation: SC/ST +5 Yrs, OBC +3 Yrs, Ex-SM +3 Yrs.",

    vacancyDetails: [
      { postName: "Constable (General Duty) - Male", totalPost: 23467, eligibility: "Class 10th (Matriculation) Exam Passed from any Recognized Board in India." },
      { postName: "Constable (General Duty) - Female", totalPost: 2020, eligibility: "Class 10th (Matriculation) Exam Passed from any Recognized Board in India." }
    ],

    // Using Smart Table for Force Wise Vacancy
    vacancyTableTitle: "Force Wise Vacancy Details",
    vacancyColumnName: "Force Name",

    stateWiseVacancy: [
      { state: "BSF (Border Security Force)", total: 616, ur: 271, ews: 58, obc: 133, sc: 89, st: 65 },
      { state: "CISF (Central Industrial Security Force)", total: 14595, ur: 6174, ews: 1471, obc: 3284, sc: 2123, st: 1543 },
      { state: "CRPF (Central Reserve Police Force)", total: 5490, ur: 2589, ews: 606, obc: 1370, sc: 885, st: 40 },
      { state: "SSB (Sashastra Seema Bal)", total: 1764, ur: 752, ews: 176, obc: 412, sc: 257, st: 167 },
      { state: "ITBP (Indo Tibetan Border Police)", total: 1293, ur: 577, ews: 125, obc: 257, sc: 170, st: 164 },
      { state: "AR (Assam Rifles)", total: 1706, ur: 729, ews: 167, obc: 303, sc: 175, st: 332 },
      { state: "SSF (Secretariat Security Force)", total: 23, ur: 10, ews: 2, obc: 6, sc: 3, st: 2 }
    ],

    selectionProcess: [
      "Computer Based Examination (CBE)",
      "Physical Efficiency Test (PET)",
      "Physical Standard Test (PST)",
      "Medical Examination (DME/RME) & Document Verification"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Duration: 60 Minutes (1 Hour)",
        "Total Questions: 80",
        "Total Marks: 160 (2 Marks per question)",
        "Negative Marking: 0.25 Marks for each wrong answer",
        "--- PHYSICAL STANDARDS ---",
        "Height: Male - 170 cm | Female - 157 cm (Relaxation for ST)",
        "Chest (Male): 80-85 cm (Relaxation for ST)",
        "Race (PET): Male - 5 km in 24 min | Female - 1.6 km in 8.5 min"
      ],
      table: [
        { subject: "Part A: General Intelligence & Reasoning", questions: 20, marks: 40 },
        { subject: "Part B: General Knowledge & Awareness", questions: 20, marks: 40 },
        { subject: "Part C: Elementary Mathematics", questions: 20, marks: 40 },
        { subject: "Part D: English / Hindi", questions: 20, marks: 40 }
      ]
    },

    howToApply: [
      "Visit the official SSC website ssc.gov.in.",
      "Register using One-Time Registration (OTR) if not already registered.",
      "Log in and click on 'Apply' for 'Constable (GD) Examination 2026'.",
      "Fill in the details, upload live photo and signature.",
      "Select preference of Forces (BSF, CISF, etc.) carefully.",
      "Pay the application fee online.",
      "Submit the form and take a printout."
    ],

    links: [
      { title: "Apply Online", url: "https://ssc.gov.in" },
      { title: "Download Notification", url: "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_CTGD_2026.pdf" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },
  
  {
    id: 8,
    slug: "rites-apprentice-recruitment-2025",
    shortTitle: "RITES Apprentice Recruitment 2025",
    title: "RITES Apprentice Recruitment 2025 Apply Online for 252 Posts | No Exam, Direct Merit",
    shortInfo: "RITES Limited (A Navratna CPSE under Ministry of Railways) has invited applications for the engagement of 252 Apprentices for the year 2025-26. Engineering & Non-Engineering Graduates, Diploma holders, and ITI Pass-outs can apply. Selection will be based on Merit (Marks obtained in qualifying exam). No Written Test/Interview.",
    postDate: "13/11/2025",
    category: "Latest Jobs",

    salary: "Stipend ₹10,000 - ₹14,000 per month",

    importantDates: [
      { label: "Application Begin", value: "17/11/2025" },
      { label: "Last Date for Apply (NATS/NAPS)", value: "05/12/2025" },
      { label: "Last Date for RITES Form", value: "05/12/2025" },
      { label: "Merit List Release", value: "To be notified" }
    ],

    applicationFee: [
      { category: "All Candidates", amount: "₹0 (Nil)" },
      { category: "Payment Mode", amount: "N/A" }
    ],

    ageLimit: "Minimum 18 Years (As on 05/12/2025). No upper age limit specified (As per Apprenticeship Rules).",

    vacancyDetails: [
      { postName: "Graduate Apprentice (Engineering)", totalPost: 110, eligibility: "BE / B.Tech (Civil/Mech/Elect/etc)" },
      { postName: "Graduate Apprentice (Non-Engg)", totalPost: 36, eligibility: "BA / BBA / B.Com / B.Sc / BCA" },
      { postName: "Diploma Apprentice", totalPost: 49, eligibility: "Diploma in Engineering" },
      { postName: "Trade Apprentice (ITI)", totalPost: 57, eligibility: "ITI Pass (Fitter/Turner/Welder/etc)" }
    ],

    // Using Smart Table for Category Wise Vacancy
    vacancyTableTitle: "Category Wise Vacancy Details",
    vacancyColumnName: "Apprenticeship Category",

    stateWiseVacancy: [
      { state: "Graduate (Engineering)", total: 110, ur: 52, ews: 8, obc: 27, sc: 14, st: 6 },
      { state: "Graduate (Non-Engg)", total: 36, ur: 18, ews: 2, obc: 9, sc: 5, st: 2 },
      { state: "Diploma Apprentice", total: 49, ur: 28, ews: 3, obc: 10, sc: 6, st: 2 },
      { state: "Trade Apprentice (ITI)", total: 57, ur: 28, ews: 4, obc: 14, sc: 7, st: 3 }
    ],

    salaryDetails: [
      { post: "Graduate Apprentice", level: "₹14,000/- per month" },
      { post: "Diploma Apprentice", level: "₹12,000/- per month" },
      { post: "Trade Apprentice (ITI)", level: "₹10,000/- per month" }
    ],

    selectionProcess: [
      "Shortlisting based on Merit (Percentage of Marks in Essential Qualification)",
      "Document Verification"
    ],

    // No Exam Pattern because there is NO EXAM
    // Hum 'examPattern' ko skip kar sakte hain ya simple note daal sakte hain
    examPattern: {
      details: [
        "No Written Examination.",
        "No Interview.",
        "Selection is purely based on Academic Merit."
      ]
    },

    howToApply: [
      "Step 1: Register on NATS (nats.education.gov.in) for Degree/Diploma OR NAPS (apprenticeshipindia.gov.in) for ITI.",
      "Step 2: Login and Apply for 'RITES Limited' opportunity.",
      "Step 3: Fill the 'RITES Application Form' (Google Form Link) available in notification.",
      "Step 4: Upload scanned copies of documents (Qualification, DOB, ID Proof, Caste Cert.) in a single PDF.",
      "Step 5: Submit the form before 05/12/2025."
    ],

    links: [
      { title: "Apply Online (Degree/Diploma - NATS)", url: "https://nats.education.gov.in/" },
      { title: "Apply Online (ITI - NAPS)", url: "https://www.apprenticeshipindia.gov.in/" },
      { title: "Submit RITES Form (Mandatory)", url: "https://apprentice.rites.com:444/ApprenticeForm" },
      { title: "Download Notification", url: "https://www.rites.com/Upload/Career/Advertisement_for_Engagement_of_Apprentices_in_RITES_for_FY_2025-26_pdf-2025-Nov-13-14-32-47.pdf" }, // Replace with actual link if dynamic
      { title: "Official Website", url: "https://www.rites.com/Career" }
    ]
  },
 
  {
    id: 7,
    slug: "sail-mt-technical-recruitment-2025",
    shortTitle: "SAIL Management Trainee (Technical) Recruitment 2025",
    title: "SAIL MT Recruitment 2025 Apply Online for 124 Posts | Salary ₹17 Lakh CTC | Exam Date",
    shortInfo: "Steel Authority of India Limited (SAIL), a Maharatna CPSE, has invited online applications for 124 posts of Management Trainee (Technical) in E1 grade. Engineering graduates in Civil, Mechanical, Electrical, etc., can apply online. Selection is based on CBT, GD, and Interview.",
    postDate: "12/11/2025",
    category: "Latest Jobs",

    salary: "Basic Pay ₹60,000 - ₹1,80,000 (CTC ≈ ₹16-17 LPA)",

    importantDates: [
      { label: "Application Begin", value: "15/11/2025" },
      { label: "Last Date for Apply", value: "05/12/2025" },
      { label: "Online Exam Date", value: "January / February 2026 (Tentative)" }
    ],

    // Fee including Processing Fee (Page 5 of PDF)
    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹1050/-" },
      { category: "SC / ST / PwBD / ESM", amount: "₹300/-" },
      { category: "Payment Mode", amount: "Online (Net Banking/Credit/Debit Card)" }
    ],

    ageLimit: "Max 28 Years (As on 05/12/2025). Relaxation: SC/ST+5, OBC+3, PwBD+10.",

    vacancyDetails: [
      { postName: "Management Trainee (Technical)", totalPost: 124, eligibility: "BE / B.Tech in Related Discipline with 65% Marks (55% for SC/ST/PwBD)" }
    ],

    // Using Smart Table for Discipline Wise Vacancy
    vacancyTableTitle: "Discipline Wise Vacancy Details",
    vacancyColumnName: "Engineering Discipline",

    // Note: PDF only gives Total posts per discipline, not category wise for each.
    stateWiseVacancy: [
      { state: "Electrical", total: 44, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" },
      { state: "Mechanical", total: 30, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" },
      { state: "Metallurgy", total: 20, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" },
      { state: "Civil", total: 14, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" },
      { state: "Instrumentation", total: 7, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" },
      { state: "Chemical", total: 5, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" },
      { state: "Computer", total: 4, ur: "-", ews: "-", obc: "-", sc: "-", st: "-" }
    ],

    salaryDetails: [
      { post: "During Training (1 Year)", level: "Basic Pay ₹50,000/month" },
      { post: "After Confirmation (E1 Grade)", level: "Scale ₹60,000 - 1,80,000 (CTC ₹17 LPA)" }
    ],

    selectionProcess: [
      "Online Examination (CBT) - 200 Marks",
      "Group Discussion (GD)",
      "Interview"
    ],

    // Accurate Exam Pattern (Page 3 of PDF)
    examPattern: {
      details: [
        "Mode: Online Computer Based Test",
        "Total Duration: 120 Minutes (40 + 80)",
        "Total Marks: 200",
        "Negative Marking: Yes (as per norms)",
        "Qualifying Marks: 50%ile (UR/EWS), 40%ile (Others)"
      ],
      table: [
        { subject: "Domain Knowledge (Technical)", questions: 100, marks: 100 },
        { subject: "Aptitude Test (Quant, English, Reasoning, GK)", questions: 100, marks: 100 }
      ]
    },

    howToApply: [
      "Visit the official website sailcareers.com.",
      "Click on 'Login' -> 'Fresh Candidate' to create One Time Registration (OTR).",
      "Login with User ID and Password.",
      "Fill the application form for 'Management Trainee (Technical)'.",
      "Upload Photo, Signature, and required certificates.",
      "Pay the application fee online.",
      "Download the Provisional Registration Slip."
    ],

    links: [
      { title: "Apply Online", url: "https://sailcareers.com/sail2025mt/" },
      { title: "Download Notification", url: "https://sailcareers.com/sail2025mt/" }, // Replace with direct PDF link if available
      { title: "Official Website", url: "https://sailcareers.com/#Notification" }
    ]
  },
// --- 0. KVS & NVS Recruitment (NEWEST) ---
  {
    id: 6,
    slug: "kvs-nvs-recruitment-2025",
    shortTitle: "KVS & NVS Recruitment 2025",
    title: "KVS & NVS Recruitment 2025 Apply Online for 14,900+ Posts | Teaching & Non-Teaching",
    shortInfo: "Kendriya Vidyalaya Sangathan (KVS) and Navodaya Vidyalaya Samiti (NVS) have released a combined recruitment notification for over 14,900 vacancies. Posts include Principal, PGT, TGT, PRT, Librarian, Clerk (JSA/SSA), and MTS. Eligible candidates can apply online through the CBSE portal.",
    postDate: "21/11/2025",
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
      { title: "Official Website (NVS)", url: "https://navodaya.gov.in/" },
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
    postDate: "28/10/2025",
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
  },

  // ==================================================
  //                ADMIT CARDS (ID 1001 - 2000)
  // ==================================================

  // --- 1016. SSC CHTE Paper-II (Latest) ---
  {
    id: 1016,
    slug: "ssc-chte-paper-ii-exam-city-2025",
    shortTitle: "SSC CHTE Paper-II Exam City 2025",
    title: "SSC JHT / CHT Paper-II Exam City Intimation 2025 Out | Check Status",
    shortInfo: "Staff Selection Commission (SSC) has released the Exam City Intimation Slip for Junior Hindi Translator, Senior Hindi Translator & Hindi Pradhyapak Examination, 2025 (Paper-II). The descriptive exam is scheduled for 14th December 2025.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-6 to Level-8",

    importantDates: [
      { label: "Paper-II Exam Date", value: "14/12/2025" },
      { label: "City Slip Released", value: "04/12/2025" },
      { label: "Admit Card", value: "Available Soon" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Junior/Senior Hindi Translator", totalPost: 552, eligibility: "Master's Degree in Hindi/English + Diploma/Certificate" }
    ],

    examPattern: {
      details: ["Mode: Descriptive (Pen & Paper)", "Total Marks: 200", "Time: 2 Hours"],
      table: [
        { subject: "Translation & Essay", questions: "Descriptive", marks: 200 }
      ]
    },

    howToApply: [
      "Visit ssc.gov.in.",
      "Login with Registration Number and Password.",
      "Check 'Exam City Status' in the dashboard.",
      "Admit Card will be available 3-4 days before the exam."
    ],

    links: [
      { title: "Check Exam City / Status", url: "https://ssc.gov.in/login" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },

  // --- 1015. Bihar Jeevika ---
  {
    id: 1015,
    slug: "bihar-jeevika-admit-card-2025",
    shortTitle: "Bihar Jeevika Admit Card 2025",
    title: "Bihar Jeevika Admit Card 2025 Out | Download Hall Ticket for 2747 Posts",
    shortInfo: "Bihar Rural Livelihoods Promotion Society (BRLPS) has released the Admit Card for various posts like Community Coordinator, Area Coordinator, and Office Assistant. Exam is scheduled from 19 Nov to 15 Dec 2025.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "₹15,000 - ₹45,000 (Approx)",

    importantDates: [
      { label: "Exam Date", value: "19 Nov to 15 Dec 2025" },
      { label: "Admit Card Released", value: "13/11/2025" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Community Coordinator", totalPost: 1177, eligibility: "10th/12th Pass" },
      { postName: "Area Coordinator", totalPost: "Various", eligibility: "Graduate" },
      { postName: "Total Vacancies", totalPost: 2747, eligibility: "-" }
    ],

    howToApply: [
      "Visit brlps.in.",
      "Click on 'Career' -> 'Download Admit Card'.",
      "Enter Application No. and DOB.",
      "Print the Hall Ticket."
    ],

    links: [
      { title: "Download Admit Card", url: "https://brlps.in/Career" },
      { title: "Official Website", url: "https://brlps.in/" }
    ]
  },

  // --- 1014. UP LT Grade Teacher ---
  {
    id: 1014,
    slug: "up-lt-grade-assistant-teacher-admit-card-2025",
    shortTitle: "UP LT Grade Admit Card 2025",
    title: "UPPSC LT Grade Assistant Teacher Admit Card 2025 Out | Exam Date & Shift",
    shortInfo: "Uttar Pradesh Public Service Commission (UPPSC) has released the Admit Card for LT Grade Assistant Teacher Recruitment 2025. Exams for Math, Hindi, Science etc. are scheduled in Dec 2025 & Jan 2026.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Pay Scale ₹44,900-₹1,42,400 (Level 7)",

    importantDates: [
      { label: "Exam Dates", value: "06, 07, 21 Dec 2025 & Jan 2026" },
      { label: "Admit Card Status", value: "Released" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Assistant Teacher (Male)", totalPost: 4860, eligibility: "Graduate + B.Ed" },
      { postName: "Assistant Teacher (Female)", totalPost: 2525, eligibility: "Graduate + B.Ed" },
      { postName: "Total Vacancies", totalPost: 7466, eligibility: "-" }
    ],

    howToApply: [
      "Visit uppsc.up.nic.in.",
      "Click on 'Download Admit Card' in Activity Dashboard.",
      "Enter OTR Number / Reg No and DOB.",
      "Download the Hall Ticket."
    ],

    links: [
      { title: "Download Admit Card", url: "https://uppsc.up.nic.in/" },
      { title: "Check Exam Schedule", url: "https://uppsc.up.nic.in/" },
      { title: "Official Website", url: "https://uppsc.up.nic.in/" }
    ]
  },

  // --- 1013. Delhi Police Constable Slot Selection ---
  {
    id: 1013,
    slug: "ssc-delhi-police-constable-slot-selection-2025",
    shortTitle: "Delhi Police Constable Slot Selection",
    title: "SSC Delhi Police Constable Self Slot Selection 2025 Open | Book Exam Date",
    shortInfo: "SSC has activated the link for Self Slot Selection for Delhi Police Constable (Executive) Male & Female Examination 2025. Candidates must book their exam date and city to generate the admit card.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-3 (₹21,700 - ₹69,100)",

    importantDates: [
      { label: "Slot Booking Dates", value: "05 Dec to 30 Dec 2025" },
      { label: "Exam Date", value: "18 Dec 2025 to 06 Jan 2026" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Constable (Exe.) Male", totalPost: 4453, eligibility: "12th Pass + DL" },
      { postName: "Constable (Exe.) Female", totalPost: 2491, eligibility: "12th Pass" },
      { postName: "Total Vacancies", totalPost: 7547, eligibility: "-" }
    ],

    howToApply: [
      "Login to ssc.gov.in.",
      "Go to 'Self Slot Selection' tab.",
      "Select 'Delhi Police Constable Exam'.",
      "Choose preferred Date and City.",
      "Confirm to generate Admit Card (later)."
    ],

    links: [
      { title: "Slot Selection Link", url: "https://ssc.gov.in/login" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },

  // --- 1012. RRB Group D (Oldest in Batch) ---
  {
    id: 1012,
    slug: "railway-rrb-group-d-admit-card-2025",
    shortTitle: "RRB Group D Admit Card 2025",
    title: "RRB Group D Admit Card 2025 Out | CBT-1 Hall Ticket Download Link",
    shortInfo: "Railway Recruitment Board (RRB) has released the Admit Card and City Intimation for Group D (Level-1) Recruitment 2025 (CEN RRC 01/2019). Exam starts from 27 November 2025.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-1 (₹18,000 Basic)",

    importantDates: [
      { label: "Exam Date", value: "27 Nov 2025 to 16 Jan 2026" },
      { label: "Admit Card", value: "4 Days before Exam" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Group D (Track Maintainer etc.)", totalPost: 32438, eligibility: "10th Pass / ITI" }
    ],

    howToApply: [
      "Visit regional RRB website (e.g., rrbcdg.gov.in).",
      "Click on 'E-Call Letter for CBT'.",
      "Enter Registration Number and DOB.",
      "Download the Hall Ticket."
    ],

    links: [
      { title: "Download Admit Card (All Regions)", url: "https://rrbcdg.gov.in/" },
      { title: "Check Exam City", url: "https://rrbcdg.gov.in/" },
      { title: "Official Website", url: "https://indianrailways.gov.in/" }
    ]
  },
  // --- 1011. Delhi Police Driver ---
  {
    id: 1011,
    slug: "ssc-delhi-police-driver-admit-card-2025",
    shortTitle: "Delhi Police Driver Admit Card 2025",
    title: "Delhi Police Constable (Driver) Admit Card 2025 | Trade Test & Exam Date",
    shortInfo: "SSC has announced the Exam Date and Status for Constable (Driver) Male in Delhi Police Examination 2025.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-3 (₹21,700 - ₹69,100)",

    importantDates: [
      { label: "CBT Exam Date", value: "16 & 17 Dec 2025" },
      { label: "Admit Card", value: "Available Soon" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Constable (Driver) - Male", totalPost: 737, eligibility: "12th Pass + Heavy Motor Vehicle (HMV) License" }
    ],

    examPattern: {
      details: ["Mode: CBT (100 Marks)", "Time: 90 Minutes", "Trade Test: Qualifying"],
      table: [
        { subject: "General Awareness", questions: 20, marks: 20 },
        { subject: "General Intelligence", questions: 20, marks: 20 },
        { subject: "Numerical Ability", questions: 10, marks: 10 },
        { subject: "Road Sense, Vehicle Maintenance, Traffic Rules", questions: 50, marks: 50 }
      ]
    },

    extraSections: [
      {
        title: "Physical Endurance Test (PET)",
        list: ["Race: 1600m in 7 Minutes", "Long Jump: 12.5 Feet", "High Jump: 3.5 Feet"]
      }
    ],

    howToApply: ["Check SSC Website for Regional Links", "Enter details", "Download PDF"],

    links: [
      { title: "Check Status (NR Region)", url: "https://sscnr.nic.in/" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },
  // --- 1010. Delhi Police HC (Ministerial) ---
  {
    id: 1010,
    slug: "ssc-delhi-police-hc-ministerial-admit-card-2025",
    shortTitle: "Delhi Police HC (Ministerial) Admit Card",
    title: "Delhi Police Head Constable (Ministerial) Admit Card 2025 | Exam City & Date",
    shortInfo: "SSC has released the Admit Card and Status for Delhi Police Head Constable (Ministerial) Examination 2025.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-4 (₹25,500 - ₹81,100)",

    importantDates: [
      { label: "CBT Exam Date", value: "07 Jan to 12 Jan 2026" },
      { label: "Admit Card", value: "4 Days before Exam" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Head Constable (Ministerial) Male", totalPost: 341, eligibility: "12th Pass + Typing Speed" },
      { postName: "Head Constable (Ministerial) Female", totalPost: 168, eligibility: "12th Pass + Typing Speed" }
    ],

    examPattern: {
      details: ["Mode: CBT (100 Marks)", "Time: 90 Minutes", "Typing Test: 30 wpm (Eng) / 25 wpm (Hindi)"],
      table: [
        { subject: "English Language", questions: 25, marks: 25 },
        { subject: "Quant", questions: 20, marks: 20 },
        { subject: "General Intelligence", questions: 25, marks: 25 },
        { subject: "General Awareness", questions: 20, marks: 20 },
        { subject: "Computer Basics", questions: 10, marks: 10 }
      ]
    },

    howToApply: ["Go to SSC Regional Website", "Login with Roll No", "Download Ticket"],

    links: [
      { title: "Check Application Status (All Regions)", url: "https://ssc.gov.in/" },
      { title: "Download Admit Card", url: "https://ssc.gov.in/" },
      { title: "Official Website", url: "https://delhipolice.gov.in/" }
    ]
  },
  // --- 1009. Delhi Police HC (AWO/TPO) ---
  {
    id: 1009,
    slug: "ssc-delhi-police-hc-awo-tpo-admit-card-2025",
    shortTitle: "Delhi Police HC (AWO/TPO) Admit Card",
    title: "Delhi Police Head Constable (AWO/TPO) Admit Card 2025 | Exam Date & Status",
    shortInfo: "SSC has released the Exam Date and Application Status for Delhi Police Head Constable (Assistant Wireless Operator / Tele-Printer Operator) Exam 2025.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-4 (₹25,500 - ₹81,100)",

    importantDates: [
      { label: "CBT Exam Date", value: "15 Jan to 22 Jan 2026" },
      { label: "Admit Card Status", value: "Available Region Wise" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Head Constable (AWO/TPO) Male", totalPost: 370, eligibility: "12th (Science/Maths) + Mechanic/Operator Trade" },
      { postName: "Head Constable (AWO/TPO) Female", totalPost: 182, eligibility: "12th (Science/Maths)" }
    ],

    examPattern: {
      details: ["Mode: CBT (100 Marks) + Trade Test (Qualifying)", "Time: 90 Minutes", "No Negative Marking"],
      table: [
        { subject: "General Awareness", questions: 20, marks: 20 },
        { subject: "General Science", questions: 25, marks: 25 },
        { subject: "Mathematics", questions: 25, marks: 25 },
        { subject: "Reasoning", questions: 20, marks: 20 },
        { subject: "Computer Fundamentals", questions: 10, marks: 10 }
      ]
    },
    
    howToApply: ["Check status on SSC Regional website", "Download Admit Card 4 days before exam"],

    links: [
      { title: "Check Status / Admit Card (NR)", url: "https://sscnr.nic.in/" },
      { title: "Check Status / Admit Card (CR)", url: "http://www.ssc-cr.org/" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },
  // --- 1008. UP Police SI Exam Date ---
  {
    id: 1008,
    slug: "up-police-si-exam-date-admit-card-2025",
    shortTitle: "UP Police SI Exam Date & Admit Card",
    title: "UP Police SI Exam Date 2025 Announced | Sub Inspector Admit Card & City Details",
    shortInfo: "Uttar Pradesh Police Recruitment & Promotion Board (UPPRPB) has announced the written exam dates for Sub Inspector (SI) Recruitment 2025. The exam will be held on 14th & 15th March 2026. Admit Cards will be available soon.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "₹9,300 - ₹34,800 (Grade Pay ₹4200)",

    importantDates: [
      { label: "Written Exam Date", value: "14 & 15 March 2026" },
      { label: "Admit Card Available", value: "10 Days before Exam" }
    ],

    applicationFee: [],

    vacancyDetails: [
      { postName: "Sub Inspector (Civil Police)", totalPost: 4242, eligibility: "Graduation" },
      { postName: "Platoon Commander", totalPost: 135, eligibility: "Graduation" },
      { postName: "Fire Service Officer", totalPost: 23, eligibility: "Science Graduate" },
      { postName: "Total Vacancies", totalPost: 4543, eligibility: "-" }
    ],

    examPattern: {
      details: ["Mode: Online CBT", "Total Marks: 400", "Time: 2 Hours", "No Negative Marking"],
      table: [
        { subject: "General Hindi", questions: 40, marks: 100 },
        { subject: "GK / Law / Constitution", questions: 40, marks: 100 },
        { subject: "Numerical & Mental Ability", questions: 40, marks: 100 },
        { subject: "Mental Aptitude / IQ / Reasoning", questions: 40, marks: 100 }
      ]
    },

    extraSections: [
      {
        title: "Physical Efficiency Test (PET)",
        list: [
          "Male: 4.8 km Run in 28 Minutes.",
          "Female: 2.4 km Run in 16 Minutes."
        ]
      }
    ],

    howToApply: ["Visit uppbpb.gov.in", "Click on Admit Card Link", "Enter Reg No & DOB", "Download"],
    
    links: [
      { title: "Download Exam Date Notice", url: "https://uppbpb.gov.in/" },
      { title: "Download Admit Card (Link Soon)", url: "https://uppbpb.gov.in/" },
      { title: "Official Website", url: "https://uppbpb.gov.in/" }
    ]
  },
  // --- 1007. SSC CHSL Tier-I 2025 ---
  {
    id: 1007,
    slug: "ssc-chsl-tier-i-admit-card-2025",
    shortTitle: "SSC CHSL Tier-I Admit Card 2025",
    title: "SSC CHSL Tier-I Admit Card 2025 Out | 10+2 LDC, DEO & JSA Hall Ticket",
    shortInfo: "Staff Selection Commission (SSC) has released the Admit Card and Application Status for Combined Higher Secondary Level (CHSL) 10+2 Examination 2025. Candidates can download their Tier-I Hall Ticket region-wise.",
    postDate: "05/12/2025",
    category: "Admit Card",
    salary: "Level-2 to Level-5 (₹19,900 - ₹92,300)",
    
    importantDates: [
      { label: "Tier-I Exam Date", value: "12 Nov 2025 to 30 Nov 2025" },
      { label: "Status/Admit Card", value: "Available Now" },
      { label: "Tier-II Exam Date", value: "March 2026 (Tentative)" }
    ],
    
    applicationFee: [],

    vacancyDetails: [
      { postName: "Lower Division Clerk (LDC) / JSA", totalPost: "Various", eligibility: "12th Pass" },
      { postName: "Data Entry Operator (DEO)", totalPost: "Various", eligibility: "12th Pass (Science/Maths)" },
      { postName: "Total Vacancies", totalPost: 3131, eligibility: "-" }
    ],

    examPattern: {
      details: ["Tier-I: Online Objective Test", "Time: 60 Minutes", "Negative Marking: 0.50 Marks"],
      cbt1Title: "Tier-I Exam Pattern",
      cbt1: [
        { subject: "English Language", questions: 25, marks: 50 },
        { subject: "General Intelligence", questions: 25, marks: 50 },
        { subject: "Quantitative Aptitude", questions: 25, marks: 50 },
        { subject: "General Awareness", questions: 25, marks: 50 }
      ]
    },

    howToApply: [
      "Visit the SSC Regional Website.",
      "Click on 'Know Your Status' or 'Download Admit Card'.",
      "Enter Registration ID & Date of Birth.",
      "Download the PDF and print it."
    ],

    links: [
      { title: "Download Admit Card (NR - Delhi)", url: "https://sscnr.nic.in/" },
      { title: "Download Admit Card (CR - UP/Bihar)", url: "http://www.ssc-cr.org/" },
      { title: "Download Admit Card (WR - Mumbai)", url: "http://www.sscwr.net/" },
      { title: "Download Admit Card (ER - Kolkata)", url: "http://www.sscer.org/" },
      { title: "Download Admit Card (SR - Chennai)", url: "http://www.sscsr.gov.in/" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },
  // --- 6. SSC CPO SI Paper-I (ID 1006) ---
  {
    id: 1006,
    slug: "ssc-cpo-si-paper-i-admit-card-2025",
    shortTitle: "SSC CPO SI Admit Card 2025 (Paper-I)",
    title: "SSC CPO SI Admit Card 2025 Out | Paper-I Exam City, Status & Pattern [3073 Posts]",
    shortInfo: "Staff Selection Commission (SSC) has released the Exam City Intimation Slip and Application Status for Sub-Inspector in Delhi Police and CAPFs Examination 2025 (Paper-I). The Computer Based Examination (CBE) is scheduled from 09th to 12th December 2025. Candidates can check their exam date, shift, and city for all regions.",
    postDate: "05/12/2025",
    category: "Admit Card",

    salary: "Level-6 (₹35,400 - ₹1,12,400) + Allowances",

    importantDates: [
      { label: "Application Begin", value: "26/09/2025" },
      { label: "Last Date for Apply", value: "16/10/2025" },
      { label: "Paper-I Exam Date", value: "09/12/2025 to 12/12/2025" },
      { label: "Exam City / Status", value: "Available Now" },
      { label: "Admit Card Download", value: "4 Days before Exam Date" }
    ],

    applicationFee: [
      { category: "General / OBC / EWS", amount: "₹100/-" },
      { category: "SC / ST / Ex-Servicemen", amount: "₹0 (Exempted)" },
      { category: "All Female Candidates", amount: "₹0 (Exempted)" },
      { category: "Payment Mode", amount: "Online (BHIM UPI, Net Banking, Cards)" }
    ],
    
    vacancyDetails: [
      { postName: "Sub-Inspector (Exe.) in Delhi Police (Male)", totalPost: 142, eligibility: "Bachelor Degree + LMV Driving License" },
      { postName: "Sub-Inspector (Exe.) in Delhi Police (Female)", totalPost: 70, eligibility: "Bachelor Degree" },
      { postName: "Sub-Inspector (GD) in CAPFs (BSF, CISF, CRPF, ITBP, SSB)", totalPost: 2861, eligibility: "Bachelor Degree in Any Stream" }
    ],

    examPattern: {
      details: [
        "Mode: Online Computer Based Examination (CBE)",
        "Time Duration: 2 Hours",
        "Total Questions: 200 | Total Marks: 200",
        "Negative Marking: 0.25 marks for each wrong answer."
      ],
      cbt1Title: "Paper-I Exam Pattern",
      cbt1: [
        { subject: "General Intelligence and Reasoning", questions: 50, marks: 50 },
        { subject: "General Knowledge and General Awareness", questions: 50, marks: 50 },
        { subject: "Quantitative Aptitude", questions: 50, marks: 50 },
        { subject: "English Comprehension", questions: 50, marks: 50 }
      ]
    },

    extraSections: [
      {
        title: "Physical Standard Test (PST)",
        tableData: [
          { "Category": "Male (General/OBC/SC)", "Height": "170 cm", "Chest": "80-85 cm" },
          { "Category": "Male (Hill Areas)", "Height": "165 cm", "Chest": "80-85 cm" },
          { "Category": "Male (ST)", "Height": "162.5 cm", "Chest": "77-82 cm" },
          { "Category": "Female (General/OBC/SC)", "Height": "157 cm", "Chest": "NA" },
          { "Category": "Female (Hill Areas)", "Height": "155 cm", "Chest": "NA" },
          { "Category": "Female (ST)", "Height": "154 cm", "Chest": "NA" }
        ]
      },
      {
        title: "Physical Efficiency Test (PET)",
        list: [
          "Male: 100m race in 16 sec, 1.6 Km race in 6.5 min, Long Jump 3.65m, High Jump 1.2m, Shot Put 4.5m.",
          "Female: 100m race in 18 sec, 800m race in 4 min, Long Jump 2.7m, High Jump 0.9m."
        ]
      }
    ],

    howToApply: [
      "Visit the official SSC regional website (Links given below).",
      "Click on 'Know Your Status / Download Admit Card' for SI in Delhi Police & CAPFs Exam 2025.",
      "Enter your Registration Number and Date of Birth (or Name/Father's Name).",
      "Check your Exam Date, Shift, and City details.",
      "Download the full Admit Card 3-4 days before your exam date."
    ],
    
    links: [
      { title: "Check Status / Admit Card (NR - Delhi/Raj/UK)", url: "https://sscnr.nic.in/" },
      { title: "Check Status / Admit Card (CR - UP/Bihar)", url: "http://www.ssc-cr.org/" },
      { title: "Check Status / Admit Card (WR - Maha/Guj/Goa)", url: "http://www.sscwr.net/" },
      { title: "Check Status / Admit Card (ER - WB/Odisha/Jhar)", url: "http://www.sscer.org/" },
      { title: "Check Status / Admit Card (SR - AP/Tel/TN)", url: "http://www.sscsr.gov.in/" },
      { title: "Check Status / Admit Card (KKR - Kar/Ker)", url: "http://www.ssckkr.kar.nic.in/" },
      { title: "Check Status / Admit Card (MPR - MP/Chattis)", url: "http://www.sscmpr.org/" },
      { title: "Check Status / Admit Card (NWR - Chd/Pun/Har)", url: "http://www.sscnwr.org/" },
      { title: "Check Status / Admit Card (NER - North East)", url: "http://www.sscner.org.in/" },
      { title: "Download Exam City Slip (SSC HQ Login)", url: "https://ssc.gov.in/login" },
      { title: "Download Notification PDF", url: "https://ssc.gov.in/api/attachment/uploads/master/notice_2025_09_26.pdf" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },

  // --- 5. SSC JE (ID 1005) ---
  {
    id: 1005,
    slug: "ssc-je-tier-1-admit-card-2025",
    shortTitle: "SSC JE Admit Card 2025 (All Regions)",
    title: "SSC JE Admit Card 2025 Out | Tier-1 Status & Hall Ticket for Civil, Mech, Electrical",
    shortInfo: "Staff Selection Commission (SSC) has released the Application Status and Admit Cards for Junior Engineer (JE) Tier-1 Examination 2025. Candidates can check their exam date, shift, and city for all regions (NR, CR, WR, ER, SR, KKR, MPR, NER, NWR).",
    category: "Admit Card",

    importantDates: [
      { label: "Tier-1 Exam Date", value: "03/12/2025 to 06/12/2025" },
      { label: "Status/Admit Card", value: "Released (Region Wise)" }
    ],
    
    applicationFee: [], // Added for consistency
    vacancyDetails: [
      { postName: "Junior Engineer (Civil/Mech/Elect)", totalPost: 1731, eligibility: "Diploma/Degree in Engineering" }
    ],

    howToApply: [
      "Visit the official SSC regional website (e.g., sscnr.nic.in, ssc-cr.org).",
      "Click on 'Admit Card' or 'Status of Junior Engineer Exam 2025'.",
      "Enter your Registration ID and Date of Birth.",
      "Check your City & Date.",
      "Download the Admit Card (available 4 days before exam)."
    ],
    
    links: [
      { title: "Download Admit Card (All Regions)", url: "https://ssc.gov.in/" },
      { title: "Check Application Status", url: "https://ssc.gov.in/" },
      { title: "Official Website", url: "https://ssc.gov.in/" }
    ]
  },

  // --- 4. TN MRB Health Inspector (ID 1004) ---
  {
    id: 1004,
    slug: "tn-mrb-health-inspector-admit-card-2025",
    shortTitle: "TN MRB Health Inspector Admit Card 2025",
    title: "TN MRB Health Inspector Grade-II Admit Card 2025 Out | Exam Date 07 Dec",
    shortInfo: "Tamil Nadu Medical Services Recruitment Board (TN MRB) has released the Hall Ticket for the post of Health Inspector Grade-II. The Computer Based Test (CBT) is scheduled to be held on 07th December 2025.",
    postDate: "04/12/2025",
    category: "Admit Card",

    importantDates: [
      { label: "CBT Exam Date", value: "07/12/2025 (Sunday)" },
      { label: "Admit Card Released", value: "29/11/2025" }
    ],
    
    applicationFee: [], // Added for consistency
    vacancyDetails: [
      { postName: "Health Inspector Gr-II", totalPost: 1429, eligibility: "12th + Health Inspector Course" }
    ],

    howToApply: [
      "Go to the official website mrb.tn.gov.in.",
      "Click on 'Notifications' tab.",
      "Find 'Health Inspector Grade II' and click on 'Download Admit Card'.",
      "Enter your Application Number and Date of Birth.",
      "Download and save the PDF."
    ],
    
    links: [
      { title: "Download Hall Ticket", url: "https://www.mrb.tn.gov.in/" },
      { title: "Official Website", url: "https://www.mrb.tn.gov.in/" }
    ]
  },

  // --- 3. IBPS RRB Clerk (ID 1003) ---
  {
    id: 1003,
    slug: "ibps-rrb-clerk-prelims-admit-card-2025",
    shortTitle: "IBPS RRB Clerk Prelims Admit Card 2025",
    title: "IBPS RRB Clerk Admit Card 2025 Out | Office Assistant Prelims Hall Ticket Download",
    shortInfo: "Institute of Banking Personnel Selection (IBPS) has released the Prelims Admit Card for RRB Office Assistant (Clerk) Recruitment 2025. The preliminary examination will be conducted in December 2025. Download your hall ticket from the direct link below.",
    postDate: "04/12/2025",
    category: "Admit Card",

    importantDates: [
      { label: "Prelims Exam Date", value: "06, 07, 13 & 14 Dec 2025" },
      { label: "Admit Card Released", value: "30/11/2025" },
      { label: "Mains Exam Date", value: "February 2026" }
    ],
    
    applicationFee: [], // Added for consistency
    vacancyDetails: [
      { postName: "Office Assistant (Clerk)", totalPost: 8002, eligibility: "Bachelor Degree" }
    ],

    howToApply: [
      "Visit the official website ibps.in.",
      "Click on 'CRP RRBs' on the left side.",
      "Select 'Common Recruitment Process - Regional Rural Banks Phase XIV'.",
      "Click on 'Click here to download Online Preliminary Exam Call Letter'.",
      "Enter Registration No / Roll No and Password / DOB.",
      "Take a printout of your Admit Card."
    ],
    
    links: [
      { title: "Download Admit Card", url: "https://ibps.in/" },
      { title: "Official Website", url: "https://ibps.in/" }
    ]
  },

  // --- 2. Indian Overseas Bank LBO (ID 1002) ---
  {
    id: 1002,
    slug: "iob-lbo-interview-call-letter-2025",
    shortTitle: "IOB LBO Interview Call Letter 2025",
    title: "Indian Overseas Bank (IOB) LBO Interview Call Letter 2025 Released | Download Hall Ticket",
    shortInfo: "Indian Overseas Bank has released the Interview Call Letter for the post of Local Bank Officer (LBO). Candidates who qualified the written exam and LPT can now download their interview admit card. The interview is scheduled for December 2025.",
    postDate: "04/12/2025",
    category: "Admit Card",

    importantDates: [
      { label: "LPT Exam Date", value: "03/12/2025 & 04/12/2025" },
      { label: "Interview Date", value: "08/12/2025 to 15/12/2025" },
      { label: "Interview Call Letter", value: "03/12/2025" }
    ],
    
    applicationFee: [], // Added for consistency
    vacancyDetails: [
      { postName: "Local Bank Officer (LBO)", totalPost: 400, eligibility: "Bachelor Degree + Experience" }
    ],

    howToApply: [
      "Visit the official website iob.in.",
      "Go to the 'Careers' section.",
      "Click on 'Recruitment of Local Bank Officers'.",
      "Click on 'Download Interview Call Letter'.",
      "Login with Roll Number and Password/DOB.",
      "Download and print the hall ticket."
    ],
    
    links: [
      { title: "Download Interview Call Letter", url: "https://www.iob.in/careers.aspx" },
      { title: "Download LPT Call Letter", url: "https://www.iob.in/careers.aspx" },
      { title: "Official Website", url: "https://www.iob.in/" }
    ]
  },

  // --- 1. RRC Central Railway Sports Quota (ID 1001) ---
  {
    id: 1001,
    slug: "rrc-cr-sports-quota-dv-call-letter-2025",
    shortTitle: "RRC CR Sports Quota DV Call Letter 2025",
    title: "RRC Central Railway Sports Quota Group C & D DV Call Letter 2025 Out | Download Link",
    shortInfo: "Railway Recruitment Cell (RRC), Central Railway has released the E-Call Letter for Document Verification (DV) of Sports Quota (Group C & D) Recruitment 2025. Candidates can download their admit card using Registration Number and Date of Birth.",
    postDate: "04/12/2025",
    category: "Admit Card",

    importantDates: [
      { label: "DV Date", value: "02/12/2025 to 05/12/2025" },
      { label: "Call Letter Released", value: "29/11/2025" },
      { label: "Result Declaration", value: "To be notified" }
    ],
    
    applicationFee: [],
    
    vacancyDetails: [
      { postName: "Sports Quota (Group C & D)", totalPost: 59, eligibility: "Sports Achievement + 10th/12th/ITI" }
    ], 

    howToApply: [
      "Visit the official website rrccr.com.",
      "Click on 'Click here to download E-Call Letter for DV'.",
      "Enter your Registration Number and Date of Birth.",
      "Click on 'Login' and download your Call Letter.",
      "Bring all original documents mentioned in the call letter."
    ],
    
    links: [
      { title: "Download DV Call Letter", url: "https://rrccr.com/" },
      { title: "Download Notification", url: "https://rrccr.com/" },
      { title: "Official Website", url: "https://rrccr.com/" }
    ]
  },
  // ==================================================
  //              ANSWER KEY (ID 2001 - 3000)
  // ==================================================
  // ==================================================
  //              RESULTS (ID 3001 - 4000)
  // ==================================================
  // --- 3005. IPPB GDS Executive (ID 3005) ---
  {
    id: 3005,
    slug: "ippb-gds-executive-result-2025",
    shortTitle: "IPPB GDS Executive Result 2025",
    title: "IPPB GDS Executive Result 2025 Out | Download State-Wise Merit List PDF",
    shortInfo: "India Post Payments Bank (IPPB) has declared the Result and Merit List for the recruitment of Gramin Dak Sevak (GDS) Executive. The result is based on graduation merit. Shortlisted candidates will be called for Document Verification.",
    category: "Result",
    
    importantDates: [
      { label: "Result Declared", value: "02/12/2025" },
      { label: "DV Dates", value: "Check Merit List" }
    ],

    applicationFee: [],
    vacancyDetails: [
      { postName: "GDS Executive", totalPost: 348, eligibility: "Graduation + GDS Experience" }
    ],

    howToApply: [
      "Visit ippbonline.com -> Careers.",
      "Click on 'Recruitment of GDS Executive'.",
      "Download the State-Wise Merit List PDF.",
      "Search for your Name/Roll Number.",
      "If selected, check email for DV details."
    ],

    links: [
      { title: "Download Result (Merit List PDF)", url: "https://www.ippbonline.com/web/ippb/current-openings" },
      { title: "Official Website", url: "https://www.ippbonline.com/" }
    ]
  },

  // --- 3004. ONGC Apprentice (ID 3004) ---
  {
    id: 3004,
    slug: "ongc-apprentice-result-2025",
    shortTitle: "ONGC Apprentice Result 2025",
    title: "ONGC Apprentice Result 2025 Declared | Download Merit List & Cut Off",
    shortInfo: "Oil and Natural Gas Corporation (ONGC) has released the Merit List for Apprentice Recruitment 2025. Candidates selected for Document Verification can check their names in the result PDF.",
    category: "Result",

    importantDates: [
      { label: "Result Declared", value: "03/12/2025" },
      { label: "DV Dates", value: "Check Email/SMS" }
    ],

    applicationFee: [],
    vacancyDetails: [
      { postName: "Apprentice", totalPost: 2623, eligibility: "10th/12th/ITI/Degree/Diploma" }
    ],

    howToApply: [
      "Visit ongcindia.com.",
      "Go to 'Career' -> 'Apprentice Recruitment'.",
      "Download the Result PDF for your Work Centre.",
      "Search your Registration Number.",
      "Follow instructions for Document Verification."
    ],

    links: [
      { title: "Download Result (Merit List)", url: "https://ongcindia.com/" },
      { title: "Official Website", url: "https://ongcindia.com/" }
    ]
  },

  // --- 3003. RSSB Rajasthan Patwari (ID 3003) ---
  {
    id: 3003,
    slug: "rssb-rajasthan-patwari-result-2025",
    shortTitle: "Rajasthan Patwari Result 2025",
    title: "RSSB Rajasthan Patwari Result 2025 Out | Cut Off & Merit List PDF",
    shortInfo: "Rajasthan Staff Selection Board (RSSB) has declared the Result for Patwari Direct Recruitment 2025. Candidates can download the list of selected candidates for Document Verification.",
    category: "Result",

    importantDates: [
      { label: "Result Declared", value: "02/12/2025" },
      { label: "Exam Date", value: "17/08/2025" }
    ],

    applicationFee: [],
    vacancyDetails: [
      { postName: "Patwari", totalPost: "4543+", eligibility: "Graduate + Computer Diploma" }
    ],
    
    // Cut Off Table (From Search Result)
    extraSections: [
      {
        title: "Category Wise Cut-Off Marks (Non-TSP)",
        tableData: [
          { "Category": "General (GEN)", "Cut Off": "220.35" },
          { "Category": "General (Fem)", "Cut Off": "210.78" },
          { "Category": "EWS (Gen)", "Cut Off": "210.05" },
          { "Category": "SC (Gen)", "Cut Off": "191.45" },
          { "Category": "ST (Gen)", "Cut Off": "187.30" },
          { "Category": "OBC (Gen)", "Cut Off": "219.22" },
          { "Category": "MBC (Gen)", "Cut Off": "206.10" }
        ]
      }
    ],

    howToApply: [
      "Visit rssb.rajasthan.gov.in.",
      "Click on 'Results'.",
      "Download 'Patwari 2025: List of Selected Candidates'.",
      "Search your Roll Number in the PDF."
    ],

    links: [
      { title: "Download Result & Cut Off PDF", url: "https://rssb.rajasthan.gov.in/" },
      { title: "Official Website", url: "https://rssb.rajasthan.gov.in/" }
    ]
  },

  // --- 3002. KTET Result (ID 3002) ---
  {
    id: 3002,
    slug: "ktet-result-2025-may-june",
    shortTitle: "KTET Result May/June 2025",
    title: "KTET Result 2025 Declared (May & June Session) | Check Score Card",
    shortInfo: "Kerala Pareeksha Bhavan has released the results for Kerala Teacher Eligibility Test (KTET) May & June 2025 sessions. Candidates can check their marks by entering Registration Number and DOB.",
    category: "Result",

    importantDates: [
      { label: "Result Date", value: "03/12/2025" },
      { label: "Exam Date", value: "18 & 19 Sep 2025" }
    ],

    applicationFee: [],
    vacancyDetails: [
      { postName: "KTET (Category I, II, III, IV)", totalPost: "N/A", eligibility: "Teacher Eligibility Test" }
    ],

    howToApply: [
      "Visit ktet.kerala.gov.in.",
      "Click on 'KTET RESULT JUNE 2025'.",
      "Select Category, Enter Register No & DOB.",
      "Click 'Check Results'.",
      "Download and print Score Card."
    ],

    links: [
      { title: "Check Result (Direct Link)", url: "https://ktet.kerala.gov.in/results_june_2025/" },
      { title: "Official Website", url: "https://ktet.kerala.gov.in/" }
    ]
  },

  // --- 3001. Rajasthan Librarian Grade 3 (ID 3001) ---
  {
    id: 3001,
    slug: "rajasthan-librarian-grade-3-result-2025",
    shortTitle: "Rajasthan Librarian Grade 3 Result",
    title: "Rajasthan Librarian Grade 3 Result 2025 Out | Merit List & Cut Off Marks",
    shortInfo: "Rajasthan Staff Selection Board (RSSB) has declared the result for Librarian Grade-III Direct Recruitment 2025. Candidates selected for Document Verification can download the PDF.",
    category: "Result",

    importantDates: [
      { label: "Result Date", value: "02/12/2025" },
      { label: "Exam Date", value: "27/07/2025" }
    ],

    applicationFee: [],
    vacancyDetails: [
      { postName: "Librarian Grade-III", totalPost: 600, eligibility: "Certificate in Library Science" }
    ],

    extraSections: [
      {
        title: "Cut-Off Marks (Non-TSP)",
        tableData: [
          { "Category": "General", "Cut Off": "281.57" },
          { "Category": "EWS", "Cut Off": "263.66" },
          { "Category": "SC", "Cut Off": "249.72" },
          { "Category": "ST", "Cut Off": "233.67" },
          { "Category": "OBC", "Cut Off": "270.77" },
          { "Category": "MBC", "Cut Off": "259.10" }
        ]
      }
    ],

    links: [
      { title: "Download Result PDF", url: "https://rssb.rajasthan.gov.in/" },
      { title: "Official Website", url: "https://rssb.rajasthan.gov.in/" }
    ]
  },
  // ==================================================
  //              SYLLABUS (ID 4001 - 5000)
  // ==================================================
  // ==================================================
  //              PREVIOUS PAPERS (ID 5001 - 5999)
  // ==================================================
];
