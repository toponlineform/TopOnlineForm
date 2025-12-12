import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const ActiveJobs = () => {
  const [activeList, setActiveList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 

  // 1. Helper: Parse Date nicely
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const lowerDate = dateStr.toLowerCase();
    
    // Future placeholders
    if (lowerDate.includes("notify") || lowerDate.includes("soon") || lowerDate.includes("tbd")) {
      return new Date("2099-12-31");
    }
    
    try {
      // Clean up date string (remove extra text like " (5 PM)")
      const cleanDate = dateStr.split(' ')[0].replace(/-/g, '/');
      const parts = cleanDate.split('/');
      if (parts.length === 3) {
        // Format: DD/MM/YYYY -> YYYY, MM-1, DD
        return new Date(parts[2], parts[1] - 1, parts[0]);
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  // 2. Helper: Get Last Date String safely (Updated for Re-Open Logic)
  const getLastDateString = (job) => {
    if (!job.importantDates) return "Check Notice";

    // Priority 1: Check for "Re-Open" or "Extended" Last Date
    const reopenDate = job.importantDates.find(d => 
      (d.label.toLowerCase().includes("re-open") || d.label.toLowerCase().includes("extended")) &&
      (d.label.toLowerCase().includes("last") || d.label.toLowerCase().includes("closing"))
    );

    if (reopenDate) return reopenDate.value;

    // Priority 2: Check for Normal "Last Date" (but ignore "Old")
    const normalDate = job.importantDates.find(d => 
      (d.label.toLowerCase().includes("last") || d.label.toLowerCase().includes("closing")) &&
      !d.label.toLowerCase().includes("old") // Old dates ko ignore karein
    );

    return normalDate ? normalDate.value : "Check Notice";
  };

  useEffect(() => {
    setLoading(true);

    // ✅ FIXED: Added .js extension to imports so Vite/Node finds the files correctly
    Promise.all([
      import('./myLjobs.js').then(mod => mod.latestJobs || []), // Added fallback || []
      import('./myAdmission.js').then(mod => mod.admissionData || []), // Added fallback || []
    ]).then(([latestJobsData, admissionData]) => {
      
      // Dono data ko ek saath mila lein
      const allJobs = [...latestJobsData, ...admissionData];
      
      const today = new Date();
      today.setHours(0, 0, 0, 0); 

      // 3. Filter Logic (Active Forms Only)
      const filtered = allJobs.filter(job => {
        const isRelevant = job.category === "Latest Jobs" || job.category === "Admission";
        if (!isRelevant) return false;

        const lastDateStr = getLastDateString(job);
        const expDate = parseDate(lastDateStr);

        // Agar valid date hai, to check karein ki wo aaj ya future ki hai
        if (expDate) {
          return expDate >= today;
        }
        // Agar date "Check Notice" ya invalid hai, to use dikhayein (safe side)
        return true; 
      });

      // 4. Sort Logic: Closing Soonest First
      const sorted = filtered.sort((a, b) => {
        const dateA = parseDate(getLastDateString(a)) || new Date("2099-12-31");
        const dateB = parseDate(getLastDateString(b)) || new Date("2099-12-31");
        return dateA - dateB; 
      });

      setActiveList(sorted);
      setLoading(false); 
      
    }).catch(error => {
        console.error("Error loading Active Jobs data:", error);
        setActiveList([]);
        setLoading(false);
    });
  }, []);

  // Search Filter
  const displayList = activeList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.shortTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading Screen
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{color: '#004080'}}>Loading Active Jobs...</h2>
        <p>Fetching live application forms, please wait...</p>
      </div>
    );
  }

  // Final Render
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <SEO 
        title="Active Govt Jobs 2025 | Live Application Forms" 
        description="Check list of all currently active government jobs, online application forms, and admissions ending soon." 
        keywords="Active Jobs, Ongoing Recruitment, Sarkari Naukri Active Forms" 
        url="https://toponlineform.com/active-jobs"
      />

      <div className="section-header" style={{ backgroundColor: '#004080', color: 'white', padding: '10px', fontSize: '20px', marginBottom: '15px', borderRadius: '5px', textAlign: 'center' }}>
        Active Govt Jobs & Admissions (Live)
      </div>

      <div style={{marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px auto'}}>
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

      {/* Table Container */}
      <div style={{maxWidth: '800px', margin: '0 auto', overflowX: 'auto'}}>
        <table className="vacancy-table" style={{width: '100%', borderCollapse: 'collapse', border: '2px solid black'}}>
          <thead>
            <tr style={{background: '#f2f2f2'}}>
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
                const lastDate = getLastDateString(job);
                const isAdmission = job.category === "Admission";
                
                return (
                  <tr key={job.id} style={{background: 'white'}}>
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
