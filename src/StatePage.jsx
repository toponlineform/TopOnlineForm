import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData'; // Master Data
import SEO from './SEO';

const StatePage = () => {
  const [selectedState, setSelectedState] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [availableStates, setAvailableStates] = useState([]);

  // --- Helper 1: Get Last Date String safely ---
  const getLastDateString = (job) => {
    return job.importantDates?.find(d => 
      d.label.toLowerCase().includes("last") || 
      d.label.toLowerCase().includes("closing")
    )?.value || "Check Notice";
  };

  // --- Helper 2: Smart State Detector ---
  // Priority 1: Check 'state' field in data (New method)
  // Priority 2: Check keywords in Title (Old method backup)
  const getJobState = (job) => {
    if (job.state) return job.state; 

    const text = (job.title + " " + job.shortInfo).toLowerCase();
    
    if (text.includes("bihar") || text.includes("bpsc") || text.includes("btsc")) return "Bihar";
    if (text.includes("up") || text.includes("uttar pradesh") || text.includes("uppsc")) return "Uttar Pradesh";
    if (text.includes("rajasthan") || text.includes("rsmssb") || text.includes("rpsc")) return "Rajasthan";
    if (text.includes("delhi") || text.includes("dsssb") || text.includes("dda")) return "Delhi";
    if (text.includes("haryana") || text.includes("hssc") || text.includes("hpsc")) return "Haryana";
    if (text.includes("mp") || text.includes("madhya pradesh")) return "MP / Chhattisgarh";
    if (text.includes("ssc") || text.includes("railway") || text.includes("upsc") || text.includes("ibps")) return "Central Govt";
    
    return "Other States"; 
  };

  // --- Helper 3: Filter Recruitment Jobs Only ---
  const isRecruitmentJob = (job) => {
    const cat = job.category.toLowerCase();
    return !cat.includes("admission") && 
           !cat.includes("syllabus") && 
           !cat.includes("result") && 
           !cat.includes("admit") && 
           !cat.includes("answer") &&
           !cat.includes("paper");
  };

  useEffect(() => {
    // 1. Get all recruitment jobs
    const recruitmentJobs = jobsData.filter(isRecruitmentJob);

    // 2. Automatically generate list of States present in data
    const statesSet = new Set();
    recruitmentJobs.forEach(job => {
      const stateName = getJobState(job);
      if (stateName !== "Other States") statesSet.add(stateName);
    });
    
    // Convert Set to Array, Sort it, and add "All" & "Other States"
    const sortedStates = Array.from(statesSet).sort();
    setAvailableStates(["All", ...sortedStates, "Other States"]);

    // 3. Filter jobs based on selection
    let displayList = [];
    if (selectedState === "All") {
      displayList = recruitmentJobs;
    } else {
      displayList = recruitmentJobs.filter(job => getJobState(job) === selectedState);
    }

    // 4. Sort by Newest First (ID)
    setFilteredJobs(displayList.sort((a, b) => b.id - a.id));

  }, [selectedState]);

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

      {/* ✅ Professional Table (Active Jobs Style) */}
      <div style={{maxWidth: '800px', margin: '0 auto', overflowX: 'auto'}}>
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
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
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
                  No active jobs found for "{selectedState}" at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatePage;
