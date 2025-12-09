import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData';

function ActiveJobs() {
  const activeJobs = jobsData.filter(job => {
    const lastDateItem = job.importantDates.find(d => d.label.toLowerCase().includes("last"));
    if (!lastDateItem) return true;
    
    const parts = lastDateItem.value.split('/'); 
    if (parts.length === 3) {
       const jobDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
       const today = new Date();
       return jobDate >= today;
    }
    return true;
  });

  return (
    <div className="job-container">
      <h1 className="page-title">All Active Government Jobs</h1>
      <p style={{textAlign:'center', marginBottom:'20px'}}>List of ongoing application forms. Apply before the last date!</p>
      
      <div style={{overflowX: 'auto'}}>
        <table className="category-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Last Date</th>
              <th>Apply Link</th>
            </tr>
          </thead>
          <tbody>
            {activeJobs.map((job) => {
               const lastDate = job.importantDates.find(d => d.label.toLowerCase().includes("last"))?.value || "Check Notification";
               return (
                 <tr key={job.id}>
                   <td>
                     <Link to={`/${job.slug}`} style={{textDecoration:'none', color:'#000', fontWeight:'500'}}>
                       {job.shortTitle || job.title}
                     </Link>
                   </td>
                   <td style={{color:'red', fontWeight:'bold'}}>{lastDate}</td>
                   <td>
                     <Link to={`/${job.slug}`} style={{color:'blue', fontWeight:'bold'}}>View Details</Link>
                   </td>
                 </tr>
               );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveJobs;
