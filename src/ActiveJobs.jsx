import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData';
import SEO from './SEO';

function ActiveJobs() {
  // Helper: Date parser jo extra text (jaise "Upto 5 PM") ko ignore karega
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    
    // Step 1: Sirf pehla hissa (DD/MM/YYYY) uthao, baaki space ke baad ka hata do
    const cleanDateStr = dateStr.split(' ')[0]; 
    
    const parts = cleanDateStr.split('/'); 
    if(parts.length < 3) return null; // Agar date sahi format me nahi hai to chod do
    
    return new Date(parts[2], parts[1] - 1, parts[0]); 
  };

  // Helper: Last Date nikalne ke liye
  const getLastDateString = (job) => {
    if (!job.importantDates) return null;
    const lastDateObj = job.importantDates.find(d => d.label.toLowerCase().includes("last date"));
    return lastDateObj ? lastDateObj.value : null;
  };

  // --- MAGIC LOGIC ---
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const activeJobsList = jobsData
    .filter(job => {
      if (job.category !== "Latest Jobs") return false;
      const lastDateStr = getLastDateString(job);
      if (!lastDateStr) return true; 
      
      const lastDate = parseDate(lastDateStr);
      // Agar date invalid thi (null), to job ko dikha do (safe side), warna check karo
      return lastDate ? lastDate >= today : true;
    })
    .sort((a, b) => {
      // Sort by ID descending (Newest first)
      return b.id - a.id; 
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
        Currently active government jobs are listed below. Expired jobs are automatically removed.
      </p>

      <table className="data-table" style={{ border: '1px solid #ccc' }}>
        <thead>
          <tr style={{ background: '#f8f9fa' }}>
            <th style={{ width: '25%', textAlign: 'center', background: '#eee' }}>Last Date</th>
            <th style={{ textAlign: 'left', background: '#eee' }}>Post Details</th>
          </tr>
        </thead>
        <tbody>
          {activeJobsList.length > 0 ? (
            activeJobsList.map(job => (
              <tr key={job.id} style={{borderBottom: '1px solid #ddd'}}>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#ab1e1e', padding: '12px' }}>
                  {getLastDateString(job)}
                </td>
                <td style={{padding: '12px'}}>
                  <Link to={`/${job.slug}`} style={{ textDecoration: 'none', color: 'blue', fontWeight: '500', fontSize: '15px' }}>
                    {job.title}
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
  );
}

export default ActiveJobs;
