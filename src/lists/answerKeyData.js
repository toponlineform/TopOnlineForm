export const newAnswerKeys = [
{
    id: 2051,
    slug: "hartron-it-professionals-recruitment-2025",
    shortTitle: "HARTRON Recruitment 2025 Apply Online for IT Professionals",
    title: "HARTRON Recruitment 2025 Apply Online for IT Professionals | Programmer, Analyst & Developer [Rolling]",
    shortInfo: "Haryana State Electronics Development Corporation Limited (HARTRON) has released a rolling advertisement (Hartron/ICTET/2025/01) for the recruitment of IT Professionals including Software Developers, System Analysts, and Programmers. Applications are invited every alternate month. Eligible candidates can apply online for positions in Panchkula, Chandigarh, and other districts of Haryana.",
    postDate: "07/12/2025",
    category: "Answer Key",

    salary: "₹24,100/- to ₹65,000/- per month (Post Wise)",

    importantDates: [
      { label: "Cycle Frequency", value: "Every Alternate Month (Rolling)" },
      { label: "Application Start", value: "04/12/2025" },
      { label: "Last Date for Apply", value: "10/12/2025" },
      { label: "Admit Card", value: "12/12/2025" },
      { label: "Date of 1st Test", value: "2nd week of December 2025" },
      { label: "Training Start", value: "Next month (3rd week onwards)" }
    ],

    // Source: PDF Page 7
    applicationFee: [
      { category: "General (Male) / Other State Male", amount: "₹300/- + GST" },
      { category: "General (Female) / Other State Female", amount: "₹150/- + GST" },
      { category: "SC / BC / EWS / ESM (Haryana)", amount: "₹75/- + GST" },
      { category: "PwD (Person with Disability)", amount: "₹0/- (Nil)" },
      { category: "Payment Mode", amount: "Online / Demand Draft" }
    ],

    ageLimit: "As per Haryana Government Rules applicable at the time of advertisement.",

    // Source: PDF Page 2 & 3
    vacancyDetails: [
      { postName: "Software Developer (ASP.NET/JAVA)", totalPost: "Rolling", eligibility: "B.E./B.Tech/M.Sc/MCA (60%) OR PGDCA (60%) + 5 Years Exp." },
      { postName: "Mobile App Developer", totalPost: "Rolling", eligibility: "B.E./B.Tech/M.Sc/MCA (60%) OR PGDCA (60%) + 5 Years Exp." },
      { postName: "Sr. System Analyst", totalPost: "Rolling", eligibility: "B.E./B.Tech/M.Sc/MCA (60%) + 5 Years Exp. as System Analyst." },
      { postName: "System Analyst", totalPost: "Rolling", eligibility: "B.E./B.Tech/M.Sc/MCA (60%) + 5 Years Exp. as Programmer." },
      { postName: "Programmer (ASP.NET/PHP/JAVA)", totalPost: "Rolling", eligibility: "B.E./B.Tech/M.Sc/MCA (60%) OR PGDCA (60%). Knowledge of Software Dev." },
      { postName: "Networking Engineer", totalPost: "Rolling", eligibility: "B.E./B.Tech/M.Sc/MCA (60%) + Certification (CCNA/MCSE) + 1 Yr Exp." },
      { postName: "Networking Assistant", totalPost: "Rolling", eligibility: "3 Yr Diploma (Comp/IT/Electronics) (55%) + 1 Yr Exp." }
    ],

    // Adapted for Salary Table since vacancy counts change monthly (Source: PDF Page 2)
    vacancyTableTitle: "Post Wise Salary & Remuneration Details",
    vacancyColumnName: "Post Name",

    stateWiseVacancy: [
      { "Post Name": "Software / Mobile Developer", "Salary": "₹ 65,000/-", "District": "Pkl/Chd" },
      { "Post Name": "Sr. System Analyst", "Salary": "₹ 61,500/-", "District": "Pkl/Chd" },
      { "Post Name": "System Analyst", "Salary": "₹ 56,100/-", "District": "Pkl/Chd" },
      { "Post Name": "Programmer", "Salary": "₹ 35,400/-", "District": "All Districts" },
      { "Post Name": "Networking Engineer", "Salary": "₹ 35,400/-", "District": "All Districts" },
      { "Post Name": "Networking Assistant", "Salary": "₹ 24,100/-", "District": "All Districts" }
    ],

    selectionProcess: [
      "Stage 1: Domain Knowledge Test (MCQ) - Computer Based",
      "Stage 2: Training (1 Month) - For those who clear Stage 1",
      "Stage 3: Practical / Project Test (After Training)",
      "Final Selection based on Merit of Test 1 + Test 2"
    ],

    examPattern: {
      details: [
        "Mode: Computer Based Test (CBT)",
        "Validity of 1st Test: 1 Year",
        "Training: Mandatory 1 month training at Ambala/Gurugram (Security Deposit ₹1500 refundable).",
        "Practical Test: Using MVC (Model-View-Controller) architecture for Programmers/Developers.",
        "Attempt Limit: Maximum 2 attempts allowed for Practical Test."
      ],
      // Custom Stages for Hartron Process
      stages: [
        {
          title: "Selection Stages & Weightage",
          data: [
            { subject: "1st Test: Domain Knowledge (MCQ)", questions: "Varies", marks: "Qualifying" },
            { subject: "Training Phase (1 Month)", questions: "Attendance", marks: "75% Mandatory" },
            { subject: "2nd Test: Practical / Project Test", questions: "Coding/Task", marks: "Final Merit" }
          ]
        }
      ]
    },

    extraSections: [
      {
        title: "Security Deposit for Training",
        text: "Candidates who clear the 1st Test must undergo 1 month training. A refundable security deposit of ₹1500/- is required. It is refunded if the candidate attends 75% training and clears the 2nd Test."
      },
      {
        title: "Important Rules",
        list: [
          "A candidate can apply for a maximum of 2 applications.",
          "Two applications should be of similar category only (e.g., Programmer & Jr. Software Developer).",
          "Test Centers: IDDC Ambala & HMSDC Gurugram only."
        ]
      }
    ],

    howToApply: [
      "Visit the official website hartron.org.in.",
      "Check the 'Public Notice' section for the current month's active link.",
      "Register and fill the online application form.",
      "Upload scanned Photo, Signature, and Educational Documents.",
      "Pay the application fee online (Fee + GST).",
      "Submit the form and take a printout of the Registration/Admit Card."
    ],

    links: [
      { title: "Apply Online", url: "https://deployment.setchartron.in" },
      { title: "Download Notification PDF", url: "https://deployment.setchartron.in" }, // Update if you have the direct PDF link
      { title: "Official Website", url: "https://hartron.org.in/" }
    ],

    faqs: [
      { question: "When can I apply for HARTRON Recruitment?", answer: "Applications open in the first week of every alternate month." },
      { question: "What is the salary of a Programmer in HARTRON?", answer: "The monthly remuneration is ₹35,400/-." },
      { question: "Is there any interview?", answer: "No, selection is based on a Domain Knowledge Test and a Practical Test." },
      { question: "What is the application fee?", answer: "₹300 + GST for General Male, ₹150 + GST for General Female, and ₹75 + GST for Reserved Categories of Haryana." },
      { question: "Can I apply for multiple posts?", answer: "Yes, a maximum of 2 applications (of similar category) are allowed per candidate." }
    ]
  },  
// --- 2010. DSSSB Answer Key ---
  {
    id: 2050,
    slug: "try-dsssb-various-posts-answer-key-2025",
    shortTitle: "try DSSSB Answer Key 2025",
    title: "DSSSB Answer Key 2025 Released for Various Post Codes",
    shortInfo: "Delhi Subordinate Services Selection Board (DSSSB) has released the Draft Answer Keys.",
    postDate: "07/12/2025",
    category: "Answer Key",
    importantDates: [
      { label: "Answer Key Released", value: "06/12/2025" }
    ],
    applicationFee: [],
    vacancyDetails: [
      { postName: "Various Posts", totalPost: "Various", eligibility: "As per Post Code" }
    ],
    howToApply: ["Check official website"],
    links: [
      { title: "Download Key", url: "https://dsssb.delhi.gov.in/" }
    ]
  }
];
