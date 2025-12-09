import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData'; // Master Data File
import SEO from './SEO';

const ActiveJobs = () => {
  const [activeList, setActiveList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Compare from midnight today

    // 1. Helper: Parse Date nicely
    const parseDate = (dateStr) => {
      if (!dateStr) return null;
      const lowerDate = dateStr.toLowerCase();
      if (lowerDate.includes("notify") || lowerDate.includes("soon") || lowerDate.includes("tbd")) {
        return new Date("2099-12-31");
      }
      
      try {
        const cleanDate = dateStr.split(' ')[0].replace(/-/g, '/');
        const parts = cleanDate.split('/');
        if (parts.length === 3) {
          return new Date(parts[2], parts[1] - 1, parts[0]);
        }
      } catch (e) {
        return null;
      }
      return null;
    };

    // 2. Helper: Get Last Date String safely
    const getLastDateString = (job) => {
       return job.importantDates?.find(d => 
         d.label.toLowerCase().includes("last") || 
         d.label.toLowerCase().includes("closing")
       )?.value || "Check Notice";
    };

    // 3. Filter Logic
    const filtered = jobsData.filter(job => {
      const isRelevant = job.category === "Latest Jobs" || job.category === "Admission";
      if (!isRelevant) return false;

      const lastDateStr = getLastDateString(job);
      const expDate = parseDate(lastDateStr);

      if (expDate) {
        return expDate >= today;
      }
      return true; 
    });

    // 4. Sort Logic: Closing Soonest First
    const sorted = filtered.sort((a, b) => {
       const dateA = parseDate(getLastDateString(a)) || new Date("2099-12-31");
       const dateB = parseDate(getLastDateString(b)) || new Date("2099-12-31");
       return dateA - dateB; 
    });

    setActiveList(sorted);
  }, []);

  // Search Filter
  const displayList = activeList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.shortTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // ✅ ADDED CLASS "job-container" TO FIX WIDTH
    <div className="job-container">
      <SEO 
        title="Active Govt Jobs 2025 | Live Application Forms" 
        description="Check list of all currently active government jobs, online application forms, and admissions ending soon." 
        keywords="Active Jobs, Ongoing Recruitment, Sarkari Naukri Active Forms" 
        url="https://toponlineform.com/active-jobs"
      />

      <div className="section-header" style={{ backgroundColor: '#004080', color: 'white', padding: '10px', fontSize: '20px', marginBottom: '15px', borderRadius: '5px', textAlign: 'center' }}>
        Active Govt Jobs & Admissions (Live)
      </div>

      <div style={{marginBottom: '20px'}}>
        <input 
          type="text" 
          placeholder="Search within active jobs..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <div style={{overflowX: 'auto'}}>
        {/* ✅ Keeps your exact table style with black borders */}
        <table className="vacancy-table" style={{width: '100%', borderCollapse: 'collapse', border: '2px solid black'}}>
          <thead>
            <tr style={{background: '#f2f2f2'}}>
              {/* ✅ Header Border changed to Black */}
              <th style={{padding: '12px', border: '1px solid black', width: '140px', textAlign: 'center', background:'#eee', color:'#333'}}>
                Last Date
              </th>
              
              <th style={{padding: '12px', border: '1px solid black', textAlign: 'left', background:'#eee', color:'#333'}}>
                Post Name / Details
              </th>
            </tr>
          </thead>
          <tbody>
            {displayList.length > 0 ? (
              displayList.map((job) => {
                const lastDate = job.importantDates?.find(d => d.label.toLowerCase().includes("last"))?.value || "Check Notice";
                const isAdmission = job.category === "Admission";
                
                return (
                  <tr key={job.id} style={{background: 'white'}}>
                    
                    {/* ✅ Cell Border changed to Black */}
                    <td style={{
                        padding: '12px', 
                        border: '1px solid black', 
                        textAlign: 'center', 
                        color: '#d32f2f', 
                        fontWeight: 'bold',
                        fontSize: '14px' 
                      }}>
                      {lastDate}
                    </td>
                    
                    {/* ✅ Cell Border changed to Black */}
                    <td style={{padding: '12px', border: '1px solid black'}}>
                      <Link to={`/${job.slug}`} style={{textDecoration: 'none', color: '#0056b3', fontWeight: '500', fontSize: '15px', display:'block'}}>
                        {job.shortTitle || job.title}
                        {isAdmission && <span style={{marginLeft:'8px', fontSize:'11px', background:'#ff9800', color:'white', padding:'2px 6px', borderRadius:'4px'}}>Admission</span>}
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="2" style={{padding: '20px', textAlign: 'center', border: '1px solid black'}}>No active forms found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveJobs;
