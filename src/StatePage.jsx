import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData';
import SEO from './SEO';

const StatePage = () => {
  const [selectedState, setSelectedState] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const states = [
    { name: "All", keywords: [] },
    { name: "Bihar", keywords: ["Bihar", "BPSC", "BSSC", "Patna", "Patwari"] },
    { name: "Uttar Pradesh", keywords: ["UP", "Uttar Pradesh", "UPPSC", "UPSSSC", "Allahabad"] },
    { name: "Rajasthan", keywords: ["Rajasthan", "RPSC", "RSMSSB", "RSSB", "Jaipur"] },
    { name: "Delhi", keywords: ["Delhi", "DSSSB", "DDA", "AIIMS", "Supreme Court"] },
    { name: "Haryana", keywords: ["Haryana", "HSSC", "HPSC", "Hartron", "HTET"] },
    { name: "Central Govt", keywords: ["SSC", "UPSC", "Railway", "RRB", "IBPS", "Navy", "Army", "Air Force", "DRDO", "ISRO"] },
    { name: "MP / Chhattisgarh", keywords: ["MP", "Madhya Pradesh", "Chhattisgarh", "CG"] },
  ];

  useEffect(() => {
    if (selectedState === "All") {
      setFilteredJobs(jobsData.slice(0, 50));
    } else {
      const stateObj = states.find(s => s.name === selectedState);
      const keywords = stateObj ? stateObj.keywords : [];

      const filtered = jobsData.filter(job => {
        const textToSearch = (job.title + " " + job.shortInfo + " " + job.shortTitle).toLowerCase();
        return keywords.some(key => textToSearch.includes(key.toLowerCase()));
      });
      setFilteredJobs(filtered);
    }
  }, [selectedState]);

  return (
    <div className="job-container">
      <SEO 
        title="State Wise Govt Jobs 2025 | UP, Bihar, Rajasthan, Delhi" 
        description="Find government jobs state-wise. Check recruitment in UP, Bihar, Haryana, Rajasthan, Delhi and Central Govt." 
        keywords="State wise jobs, UP Govt Jobs, Bihar Sarkari Naukri, Rajasthan Jobs" 
        url="https://toponlineform.com/states"
      />

      <div className="section-header" style={{textAlign:'center', marginBottom:'20px'}}>
        Browse Jobs by State
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px'}}>
        {states.map((state) => (
          <button
            key={state.name}
            onClick={() => setSelectedState(state.name)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: selectedState === state.name ? '#ab1e1e' : '#e0e0e0',
              color: selectedState === state.name ? 'white' : '#333',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'all 0.3s'
            }}
          >
            {state.name}
          </button>
        ))}
      </div>

      <div className="box-column">
        <div className="box-header" style={{backgroundColor: '#004080'}}>
          {selectedState === "All" ? "Latest Updates (All States)" : `${selectedState} Govt Jobs`}
        </div>
        <ul className="box-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <li key={job.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Link to={`/${job.slug}`} style={{textDecoration:'none', color:'#0056b3', fontWeight:'500'}}>
                  {job.shortTitle || job.title}
                </Link>
                <span style={{fontSize:'12px', color:'#666', minWidth:'80px', textAlign:'right'}}>
                   {job.category === "Latest Jobs" ? "Job" : job.category}
                </span>
              </li>
            ))
          ) : (
            <li style={{padding:'20px', textAlign:'center', color:'#ab1e1e'}}>
              No active jobs found for {selectedState} right now.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default StatePage;
