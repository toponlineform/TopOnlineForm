import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO'; // SEO Component का उपयोग हो रहा है

// 💥 FINAL PERMANENT LIST OF ALL STATES AND UTS (38 Entries)
const PERMANENT_STATES = [
    "All", 
    "Central Govt", 
    
    // 28 States
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    
    // 8 Union Territories
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman & Diu",
    "Delhi", 
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",

    "Other States" // Catch-all for non-identified jobs
].sort((a, b) => {
    // Custom sort logic to keep key categories fixed at the top/bottom
    if (a === "All") return -1;
    if (b === "All") return 1;
    if (a === "Central Govt") return -1; 
    if (b === "Central Govt") return 1;
    if (a === "Other States") return 1;
    if (b === "Other States") return -1;
    return a.localeCompare(b); // Alphabetical sort for the rest
});


// Component to render individual job listings inside a box/table
const JobListingTable = ({ jobs, title, getLastDateString }) => (
  <div style={{maxWidth: '800px', margin: '20px auto', overflowX: 'auto'}}>
    <div className="section-header" style={{ 
      backgroundColor: '#ab1e1e', // Red header for group clarity
      color: 'white', 
      padding: '10px', 
      fontSize: '18px', 
      marginBottom: '5px', 
      borderRadius: '5px', 
      textAlign: 'center' 
    }}>
      {title}
    </div>
    
    <table className="vacancy-table" style={{width: '100%', borderCollapse: 'collapse', border: '2px solid black'}}>
      <thead>
        <tr style={{background: '#f2f2f2'}}>
          <th style={{padding: '12px', border: '1px solid black', width: '130px', textAlign: 'center', background:'#eee', color:'#333', fontSize:'14px'}}>
            Last Date
          </th>
          <th style={{padding: '12px', border: '1px solid black', textAlign: 'left', background:'#eee', color:'#333', fontSize:'14px'}}>
            Post Name / Recruitment
          </th>
        </tr>
      </thead>
      <tbody>
        {jobs.length > 0 ? (
          jobs.map((job) => {
            const lastDate = getLastDateString(job);
            return (
              <tr key={job.id} style={{background: 'white'}}>
                <td style={{
                    padding: '10px', 
                    border: '1px solid black', 
                    textAlign: 'center', 
                    color: '#d32f2f', 
                    fontWeight: 'bold',
                    fontSize: '13px' 
                  }}>
                  {lastDate}
                </td>
                <td style={{padding: '10px', border: '1px solid black'}}>
                  <Link to={`/${job.slug}`} style={{textDecoration: 'none', color: '#0056b3', fontWeight: '500', fontSize: '15px', display:'block'}}>
                    {job.shortTitle || job.title}
                  </Link>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="2" style={{padding: '30px', textAlign: 'center', border: '1px solid black', color: '#666'}}>
              No active jobs found for {title} at the moment.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);


const StatePage = () => {
  const [selectedState, setSelectedState] = useState("All");
  const [groupedJobs, setGroupedJobs] = useState({}); 
  const [singleStateJobs, setSingleStateJobs] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // --- Helper 1: Get Last Date String safely (No Change) ---
  const getLastDateString = (job) => {
    return job.importantDates?.find(d => 
      d.label.toLowerCase().includes("last") || 
      d.label.toLowerCase().includes("closing")
    )?.value || "Check Notice";
  };

  // --- Helper 2: Smart State Detector (UPDATED with full list keywords) ---
  const getJobState = (job) => {
    if (job.state) return job.state; 

    const text = (job.title + " " + job.shortInfo).toLowerCase();
    
    // State/UT specific checks (Use full name or major commission abbreviation)
    if (text.includes("andhra pradesh")) return "Andhra Pradesh";
    if (text.includes("bihar") || text.includes("bpsc") || text.includes("btsc")) return "Bihar";
    if (text.includes("gujarat") || text.includes("gssc")) return "Gujarat";
    if (text.includes("haryana") || text.includes("hssc") || text.includes("hpsc")) return "Haryana";
    if (text.includes("hp") || text.includes("himachal")) return "Himachal Pradesh";
    if (text.includes("jharkhand")) return "Jharkhand";
    if (text.includes("karnataka") || text.includes("bangalore")) return "Karnataka";
    if (text.includes("kerala")) return "Kerala";
    if (text.includes("mp") || text.includes("madhya pradesh")) return "Madhya Pradesh";
    if (text.includes("maharashtra") || text.includes("mumbai")) return "Maharashtra";
    if (text.includes("odisha") || text.includes("ossc")) return "Odisha";
    if (text.includes("punjab") || text.includes("psssb")) return "Punjab";
    if (text.includes("rajasthan") || text.includes("rsmssb") || text.includes("rpsc")) return "Rajasthan";
    if (text.includes("tamil nadu") || text.includes("mrb")) return "Tamil Nadu";
    if (text.includes("telangana") || text.includes("tspsc")) return "Telangana";
    if (text.includes("up") || text.includes("uttar pradesh") || text.includes("uppsc")) return "Uttar Pradesh";
    if (text.includes("west bengal") || text.includes("wbsedcl")) return "West Bengal";
    
    // UT checks
    if (text.includes("delhi") || text.includes("dsssb") || text.includes("dda")) return "Delhi";
    if (text.includes("chandigarh")) return "Chandigarh";
    if (text.includes("jammu") || text.includes("kashmir")) return "Jammu and Kashmir";
    if (text.includes("puducherry")) return "Puducherry";
    
    // Central Govt Check (Common keywords)
    if (text.includes("ssc") || text.includes("railway") || text.includes("upsc") || text.includes("ibps") || text.includes("drdo") || text.includes("aiims") || text.includes("mha") || text.includes("rites")) return "Central Govt";
    
    return "Other States"; 
  };

  // --- Helper 3 & 4 (No Change) ---
  const isRecruitmentJob = (job) => {
    const cat = job.category.toLowerCase();
    return cat === "latest jobs" || cat === "admission";
  };
  
  const groupByState = (jobs) => {
    const groups = {};
    jobs.forEach(job => {
      const stateName = getJobState(job);
      if (!groups[stateName]) {
        groups[stateName] = [];
      }
      groups[stateName].push(job);
    });
    
    for (const state in groups) {
      groups[state].sort((a, b) => b.id - a.id);
    }
    return groups;
  };

  useEffect(() => {
    setLoading(true);

    // Dynamic Import: केवल लेटेस्ट जॉब्स और एडमिशन डेटा लोड करें
    Promise.all([
      import('./myLjobs').then(mod => mod.latestJobs),
      import('./myAdmission').then(mod => mod.admissionData),
    ]).then(([latestJobsData, admissionData]) => {
      
      const jobsData = [...latestJobsData, ...admissionData]; 
      const recruitmentJobs = jobsData.filter(isRecruitmentJob);

      const grouped = groupByState(recruitmentJobs);
      setGroupedJobs(grouped);
      
      // Filter for the selected state 
      if (selectedState !== "All") {
        const jobs = grouped[selectedState] || [];
        setSingleStateJobs(jobs);
      } else {
        setSingleStateJobs([]);
      }
      
      setLoading(false);

    }).catch(error => {
      console.error("Error loading State Page data:", error);
      setLoading(false);
      setGroupedJobs({});
      setSingleStateJobs([]);
    });

  }, [selectedState]);


  // Loading Screen
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{color: '#ab1e1e'}}>Loading State Jobs...</h2>
        <p>Analyzing job openings across all states, please wait.</p>
      </div>
    );
  }


  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <SEO 
        title={`${selectedState === "All" ? "State Wise" : selectedState} Govt Jobs 2025 | Recruitment Notification`} 
        description={`Find latest government jobs in ${selectedState}. Check vacancy, last date and apply online links for ${selectedState} recruitment.`} 
        keywords={`${selectedState} Govt Jobs, Sarkari Naukri ${selectedState}, State Wise Vacancy`} 
        url="https://toponlineform.com/states"
      />

      {/* Header */}
      <div className="section-header" style={{ backgroundColor: '#004080', color: 'white', padding: '10px', fontSize: '20px', marginBottom: '20px', borderRadius: '5px', textAlign: 'center' }}>
        {selectedState === "All" ? "All State Govt Jobs 2025" : `${selectedState} Recruitment`}
      </div>

      {/* ✅ Automatic State Buttons (Using the Permanent List) */}
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px'}}>
        {PERMANENT_STATES.map((state) => ( // Permanent list का उपयोग
          <button
            key={state}
            onClick={() => setSelectedState(state)}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              backgroundColor: selectedState === state ? '#ab1e1e' : '#f0f0f0',
              color: selectedState === state ? 'white' : '#333',
              boxShadow: selectedState === state ? '0 4px 8px rgba(171,30,30,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'all 0.3s'
            }}
          >
            {state}
          </button>
        ))}
      </div>

      {/* ======================================================= */}
      {/* 💥 RENDERING LOGIC: Multiple Tables for "All" */}
      {/* ======================================================= */}
      
      {selectedState === "All" ? (
        // "All" selected: Loop through the permanent state list to ensure order
        PERMANENT_STATES.filter(s => s !== "All").map(stateName => (
          <JobListingTable 
            key={stateName}
            title={`${stateName} Jobs`}
            // Use groupedJobs (which might be empty if no jobs for this state)
            jobs={groupedJobs[stateName] || []} 
            getLastDateString={getLastDateString}
          />
        ))
      ) : (
        /* Single State selected */
        <JobListingTable 
            title={`${selectedState} Jobs`}
            jobs={singleStateJobs}
            getLastDateString={getLastDateString}
        />
      )}
      
    </div>
  );
};

export default StatePage;
