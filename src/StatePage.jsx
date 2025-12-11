import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// OLD: import { jobsData } from './jobsData'; // Master Data (Hata diya gaya hai)
import SEO from './SEO';

// Component to render individual job listings inside a box/table
const JobListingTable = ({ jobs, title, getLastDateString }) => (
  <div style={{maxWidth: '800px', margin: '20px auto', overflowX: 'auto'}}>
    {/* Box Header for the State/Group */}
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
  const [groupedJobs, setGroupedJobs] = useState({}); // Grouped data for All view
  const [singleStateJobs, setSingleStateJobs] = useState([]); // Flat list for single state view
  const [availableStates, setAvailableStates] = useState([]);
  const [loading, setLoading] = useState(true); // Loading State जोड़ा गया
  
  // --- Helper 1: Get Last Date String safely (नो चेंज) ---
  const getLastDateString = (job) => {
    return job.importantDates?.find(d => 
      d.label.toLowerCase().includes("last") || 
      d.label.toLowerCase().includes("closing")
    )?.value || "Check Notice";
  };

  // --- Helper 2: Smart State Detector (नो चेंज) ---
  const getJobState = (job) => {
    if (job.state) return job.state; 

    const text = (job.title + " " + job.shortInfo).toLowerCase();
    
    if (text.includes("bihar") || text.includes("bpsc") || text.includes("btsc")) return "Bihar";
    if (text.includes("up") || text.includes("uttar pradesh") || text.includes("uppsc")) return "Uttar Pradesh";
    if (text.includes("rajasthan") || text.includes("rsmssb") || text.includes("rpsc")) return "Rajasthan";
    if (text.includes("delhi") || text.includes("dsssb") || text.includes("dda")) return "Delhi";
    if (text.includes("haryana") || text.includes("hssc") || text.includes("hpsc")) return "Haryana";
    if (text.includes("mp") || text.includes("madhya pradesh")) return "MP / Chhattisgarh";
    if (text.includes("ssc") || text.includes("railway") || text.includes("upsc") || text.includes("ibps") || text.includes("drdo") || text.includes("aiims")) return "Central Govt";
    
    return "Other States"; 
  };

  // --- Helper 3: Filter Recruitment Jobs Only (नो चेंज) ---
  const isRecruitmentJob = (job) => {
    const cat = job.category.toLowerCase();
    // Only Latest Jobs (Recruitment) and Admissions
    return cat === "latest jobs" || cat === "admission";
  };

  // --- Helper 4: Grouping Function ---
  const groupByState = (jobs) => {
    const groups = {};
    jobs.forEach(job => {
      const stateName = getJobState(job);
      if (!groups[stateName]) {
        groups[stateName] = [];
      }
      groups[stateName].push(job);
    });
    
    // Sort jobs within each state by ID (newest first)
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
      
      const jobsData = [...latestJobsData, ...admissionData]; // डेटा को मिलाएं
      const recruitmentJobs = jobsData.filter(isRecruitmentJob);

      // 1. Group Data for the "All" view
      const grouped = groupByState(recruitmentJobs);
      setGroupedJobs(grouped);
      
      // 2. Generate list of available states
      const statesInGroups = Object.keys(grouped).filter(s => s !== "Other States").sort();
      setAvailableStates(["All", ...statesInGroups, "Other States"]);

      // 3. Filter for the selected state (runs once on initial load)
      if (selectedState !== "All") {
        const jobs = grouped[selectedState] || [];
        setSingleStateJobs(jobs);
      } else {
        // When All is selected, we use the grouped data, no need for flat list
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

      {/* ✅ Automatic State Buttons */}
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px'}}>
        {availableStates.map((state) => (
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
      {/* 💥 NEW RENDERING LOGIC: Multiple Tables for "All" */}
      {/* ======================================================= */}
      
      {selectedState === "All" ? (
        Object.keys(groupedJobs).sort().map(stateName => (
          <JobListingTable 
            key={stateName}
            title={`${stateName} Jobs`}
            jobs={groupedJobs[stateName]}
            getLastDateString={getLastDateString}
          />
        ))
      ) : (
        /* OLD RENDERING LOGIC: Single Table for specific state */
        <JobListingTable 
            title={`${selectedState} Jobs`}
            jobs={singleStateJobs}
            getLastDateString={getLastDateString}
        />
      )}
      
      {/* ======================================================= */}
      
      
      {/* NOTE: The original closing message below is now handled inside JobListingTable component */}
      
    </div>
  );
};

export default StatePage;
