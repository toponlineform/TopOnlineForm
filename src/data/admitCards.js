export const admitCardsData = [
  // --- 6. SSC CPO SI Paper-I (ID 1006) - FULLY DETAILED ---
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
      // Note: 'Total Vacancies' row removed to prevent double counting by App.jsx
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
        { subject: "English Comprehension", questions: 50, marks: 50 },
        { subject: "Total", questions: 200, marks: 200 }
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
