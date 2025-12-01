import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData';
import SEO from './SEO';

function ActiveJobs() {
  // Helper: Date parser (Handles "02/12/2025 (Upto 5 PM)")
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const cleanDateStr = dateStr.split(' ')[0]; // Sirf date uthao, time hatao
    const parts = cleanDateStr.split('/'); 
    if(parts.length < 3) return null;
    return new Date(parts[2], parts[1] - 1, parts[0]); 
  };

  // Helper: Last Date string nikalna
  const getLastDateString = (job) => {
    if (!job.importantDates) return null;
    const lastDateObj = job.importantDates.find(d => d.label.toLowerCase().includes("last date"));
    return lastDateObj ? lastDateObj.value : null;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const activeJobsList = jobsData
    .filter(job => {
      // 1. Sirf Latest Jobs dikhani hain
      if (job.category !== "Latest Jobs") return false;

      // 2. Expired Jobs hatani hain
      const lastDateStr = getLastDateString(job);
      if (!lastDateStr) return true; 
      const lastDate = parseDate(lastDateStr);
      return lastDate ? lastDate >= today : true;
    })
    .sort((a, b) => {
      // --- SORTING LOGIC CHANGED ---
      // Pehle ID se sort tha, ab Date se sort hoga (Ascending: Jo pehle expire hoga wo upar)
      const dateA = parseDate(getLastDateString(a));
      const dateB = parseDate(getLastDateString(b));
      
      // Agar date nahi hai to sabse neeche phenk do
      if (!dateA) return 1;
      if (!dateB) return -1;

      return dateA - dateB; // Ascending (Pass wali date pehle)
    });

  return (
    <div className="job-container">
      <SEO
        title="Active Govt Jobs 2025 - Ongoing Application Forms | TopOnlineForm"
        description="List of all currently active government jobs. Check last dates and apply online for ongoing recruitment."
        keywords="active jobs, ongoing forms, last date govt jobs, apply online now"
        url="https://toponlineform.com/active-jobs"
      />

      <div className="section-header" style={{ backgroundColor: '#007bff', fontSize: '20px', marginBottom: '10px' }}>
        Active Govt Jobs (Live Forms)
      </div>
      
      <p style={{ padding: '0 10px 15px', fontSize: '14px', color: '#555' }}>
        Currently active government jobs are listed below according to their Last Date. Expired jobs are automatically removed.
      </p>

      <div style={{overflowX: 'auto'}}>
        <table className="data-table" style={{ border: '1px solid #ccc', minWidth: '100%' }}>
          <thead>
            <tr style={{ background: '#f8f9fa' }}>
              <th style={{ width: '30%', textAlign: 'center', background: '#eee', padding: '10px' }}>Last Date</th>
              <th style={{ textAlign: 'left', background: '#eee', padding: '10px' }}>Post Details</th>
            </tr>
          </thead>
          <tbody>
            {activeJobsList.length > 0 ? (
              activeJobsList.map(job => (
                <tr key={job.id} style={{borderBottom: '1px solid #ddd'}}>
                  <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#ab1e1e', padding: '12px', whiteSpace: 'nowrap' }}>
                    {getLastDateString(job)}
                  </td>
                  <td style={{padding: '12px'}}>
                    <Link to={`/${job.slug}`} style={{ textDecoration: 'none', color: 'blue', fontWeight: '500', fontSize: '15px' }}>
                      {/* --- TITLE FIX: Use Short Title --- */}
                      {job.shortTitle ? job.shortTitle : job.title}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" style={{textAlign: 'center', padding: '20px'}}>No Active Jobs Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveJobs;
