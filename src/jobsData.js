export const jobsData = [
  // --- 1. RRB NTPC (ID 5) - SPLIT TABLES & ZONE WISE DATA ---
  {
    id: 5,
    slug: "rrb-ntpc-recruitment-2025",
    shortTitle: "RRB NTPC Recruitment 2025",
    title: "RRB NTPC Recruitment 2025 Apply Online for 8868 Posts (Graduate & UG) | Notification CEN 05/2025 & 06/2025",
    shortInfo: "Railway Recruitment Board (RRB) has released the notifications for 8868 NTPC vacancies. Check Zone-wise Vacancy for Graduate and Undergraduate posts separately below.",
    postDate: "02/12/2025",
    category: "Latest Jobs",
    salary: "Level 2 to Level 6 (7th CPC)",

    importantDates: [
      { label: "App. Start (Graduate)", value: "14/09/2025" },
      { label: "Last Date (Graduate)", value: "13/10/2025" },
      { label: "App. Start (UG)", value: "21/09/2025" },
      { label: "Last Date (UG)", value: "20/10/2025" },
      { label: "Exam Date", value: "To be notified" }
    ],

    applicationFee: [
      { category: "Gen / OBC / EWS", amount: "₹500 (₹400 Refundable)" },
      { category: "SC / ST / Female", amount: "₹250 (₹250 Refundable)" }
    ],

    ageLimit: "Graduate: 18-33 Yrs | UG: 18-30 Yrs",

    vacancyDetails: [
      { postName: "Station Master / Goods Guard", totalPost: 5810, eligibility: "Bachelor Degree" },
      { postName: "Clerk / Typist / TTE", totalPost: 3058, eligibility: "12th Pass" }
    ],

    // --- FIX: Split Zone Wise Tables (Graduate & UG Separately) ---
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

    links: [
      { title: "Apply Online", url: "https://www.rrbapply.gov.in/" },
      { title: "Download Notification", url: "https://indianrailways.gov.in/" },
      { title: "Official Website", url: "https://indianrailways.gov.in/" }
    ]
  },

  // --- 2. WBSSC (ID 4) ---
  {
    id: 4,
    slug: "wbssc-group-c-d-recruitment-2025",
    shortTitle: "WBSSC Group C & D Recruitment 2025",
    title: "WBSSC Group C & D Recruitment 2025 Apply Online for 8477 Posts",
    shortInfo: "West Bengal School Service Commission has released the notification for Clerk & Group D posts.",
    postDate: "02/12/2025",
    category: "Latest Jobs",
    salary: "As per State Govt Norms",
    importantDates: [{ label: "Last Date", value: "03/12/2025" }],
    applicationFee: [{ category: "Gen/OBC", amount: "₹400" }, { category: "SC/ST", amount: "₹150" }],
    ageLimit: "18-40 Years",
    vacancyDetails: [{ postName: "Clerk & Group D", totalPost: 8477, eligibility: "8th/10th Pass" }],
    links: [{ title: "Apply Online", url: "https://www.westbengalssc.com" }]
  },

  // --- 3. ECGC PO (ID 3) - FIXED HEADER & TOTAL ---
  {
    id: 3,
    slug: "ecgc-po-recruitment-2025",
    shortTitle: "ECGC PO Recruitment 2025",
    title: "ECGC PO Recruitment 2025 Apply Online for 30 Posts | Salary ₹20 Lakh CTC",
    shortInfo: "ECGC Limited has released the official notification for the recruitment of Probationary Officers (PO).",
    postDate: "02/12/2025",
    category: "Latest Jobs",
    salary: "Basic Pay ₹88,635 (CTC ₹20 LPA)",
    importantDates: [{ label: "Application Begin", value: "11/11/2025" }, { label: "Last Date", value: "02/12/2025" }],
    applicationFee: [{ category: "General", amount: "₹950" }, { category: "SC/ST", amount: "₹175" }],
    ageLimit: "21-30 Years",
    vacancyDetails: [{ postName: "Probationary Officer", totalPost: 30, eligibility: "Graduation/Masters" }],
    
    // --- FIX: Category Header ---
    vacancyTableTitle: "Category Wise Vacancy Details",
    vacancyColumnName: "Category",
    
    stateWiseVacancy: [
      { state: "Unreserved (UR)", total: 12, sc: "N/A", st: "N/A", obc: "N/A", ews: "N/A", ur: 12 },
      { state: "OBC", total: 10, sc: "N/A", st: "N/A", obc: 10, ews: "N/A", ur: "N/A" },
      { state: "SC", total: 5, sc: 5, st: "N/A", obc: "N/A", ews: "N/A", ur: "N/A" },
      { state: "EWS", total: 3, sc: "N/A", st: "N/A", obc: "N/A", ews: 3, ur: "N/A" }
    ],
    links: [{ title: "Apply Online", url: "https://ibpsonline.ibps.in/ecgcoct25/" }]
  },

  // --- 4. AIIMS (ID 2) ---
  {
    id: 2,
    slug: "aiims-cre-4-recruitment-2025",
    shortTitle: "AIIMS CRE-4 Recruitment 2025",
    title: "AIIMS CRE-4 Recruitment 2025 Apply Online for Group B & C Posts",
    shortInfo: "AIIMS New Delhi has released the advertisement for CRE-4.",
    postDate: "02/12/2025",
    category: "Latest Jobs",
    salary: "Level 1 to 7",
    importantDates: [{ label: "Last Date", value: "02/12/2025" }],
    applicationFee: [{ category: "General", amount: "₹3000" }, { category: "SC/ST", amount: "₹2400" }],
    ageLimit: "18-30 Years",
    vacancyDetails: [{ postName: "Various Posts", totalPost: "Various", eligibility: "10th/12th/Degree" }],
    links: [{ title: "Apply Online", url: "https://www.aiimsexams.ac.in/" }]
  },

  // --- 5. Bank of Baroda (ID 1) - FIXED DATA ---
  {
    id: 1,
    slug: "bank-of-baroda-apprentice-recruitment-2025",
    shortTitle: "Bank of Baroda Apprentice Recruitment 2025",
    title: "Bank of Baroda Apprentice Recruitment 2025 Apply Online for 2700 Posts",
    shortInfo: "Bank of Baroda has released notification for 2700 Apprentice posts.",
    postDate: "01/12/2025",
    category: "Latest Jobs",
    salary: "Rs. 15,000/- per month",
    importantDates: [{ label: "Last Date", value: "01/12/2025" }],
    applicationFee: [{ category: "General", amount: "₹800" }, { category: "SC/ST", amount: "Nil" }],
    ageLimit: "20-28 Years",
    vacancyDetails: [{ postName: "Apprentice", totalPost: 2700, eligibility: "Graduation" }],
    
    // --- FIX: Correct Data (Total 2700) ---
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
    
    // --- FIX: Links as Array (Important!) ---
    links: [
      { title: "Apply Online", url: "https://nats.education.gov.in/" },
      { title: "Download Notification", url: "https://bankofbaroda.bank.in/career" },
      { title: "Official Website", url: "https://www.bankofbaroda.in/" }
    ]
  }
];
