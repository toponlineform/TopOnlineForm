import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData'; // Master Data File
import SEO from './SEO';

const ActiveJobs = () => {
  const [activeList, setActiveList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Aaj ki raat 12 baje se compare karein

    // 1. Function to parse "DD/MM/YYYY" to Date Object
    const parseDate = (dateStr) => {
      if (!dateStr) return null;
      // Agar date me "To be notified" ya text hai, to use Active maanein
      if (dateStr.toLowerCase().includes("notified") || dateStr.toLowerCase().includes("soon")) {
        return new Date("2099-12-31"); // Future date (Always Active)
      }
      
      try {
        // Date format "10/12/2025" ya "10-12-2025" ko handle karein
        const parts = dateStr.replace(/-/g, '/').split('/'); 
        if (parts.length === 3) {
          // new Date(Year, Month - 1, Day)
          return new Date(parts[2], parts[1] - 1, parts[0]);
        }
      } catch (e) {
        return null;
      }
      return null;
    };

    // 2. Filter Jobs
    const filtered = jobsData.filter(job => {
      // Sirf 'Latest Jobs' aur 'Admission' ko dikhayein
      const isRelevantCategory = 
        job.category === "Latest Jobs" || 
        job.category === "Admission";

      if (!isRelevantCategory) return false;

      // Last Date check karein
      const lastDateObj = job.importantDates?.find(d => 
        d.label.toLowerCase().includes("last date") || 
        d.label.toLowerCase().includes("closing")
      );

      if (!lastDateObj) return true; // Agar Last Date nahi mili, to safe side Active maanein

      const expDate = parseDate(lastDateObj.value);
      
      // Agar date valid hai aur aaj ya future ki hai, to rakhein
      if (expDate && expDate >= today) {
        return true;
      }
      
      return false; // Expired jobs ko hata dein
    });

    // 3. Sort by ID (Newest First) or Last Date (Jo pehle khatam ho raha hai)
    // Abhi hum Newest First rakh rahe hain
    const sorted = filtered.sort((a, b) => b.id - a.id);

    setActiveList(sorted);
  }, []);

  // Search Logic
  const displayList = activeList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.shortTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container" style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
      <SEO 
        title="Active Govt Jobs 2025 | Live Application Forms" 
        description="Check list of all currently active government jobs, online application forms, and admissions ending soon." 
        keywords="Active Jobs, Ongoing Recruitment, Sarkari Naukri Active Forms" 
        url="https://toponlineform.com/active-jobs"
      />

      <h1 style={{color: '#ab1e1e', borderBottom: '3px solid #004080', paddingBottom: '10px', marginBottom: '20px'}}>
        Active Jobs (Currently Open)
      </h1>

      {/* Search Bar for Active Jobs */}
      <div style={{marginBottom: '20px'}}>
        <input 
          type="text" 
          placeholder="Search within active jobs..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '5px'
          }}
        />
      </div>

      {/* Desktop Table View */}
      <div className="desktop-view">
        <table className="vacancy-table" style={{width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <thead>
            <tr style={{background: '#004080', color: 'white', textAlign: 'left'}}>
              <th style={{padding: '12px'}}>Post Name</th>
              <th style={{padding: '12px'}}>Last Date</th>
              <th style={{padding: '12px'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayList.length > 0 ? (
              displayList.map((job) => {
                const lastDate = job.importantDates?.find(d => d.label.toLowerCase().includes("last"))?.value || "Check Notice";
                return (
                  <tr key={job.id} style={{borderBottom: '1px solid #eee', background: 'white'}}>
                    <td style={{padding: '12px', fontWeight: '500'}}>
                      <Link to={`/${job.slug}`} style={{textDecoration: 'none', color: '#333'}}>
                        {job.shortTitle || job.title}
                        {job.category === "Admission" && <span style={{fontSize:'10px', background:'orange', color:'white', padding:'2px 5px', borderRadius:'3px', marginLeft:'5px'}}>Admission</span>}
                      </Link>
                    </td>
                    <td style={{padding: '12px', color: '#d32f2f', fontWeight: 'bold'}}>{lastDate}</td>
                    <td style={{padding: '12px'}}>
                      <Link to={`/${job.slug}`} style={{textDecoration: 'none', background: '#28a745', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '14px'}}>
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3" style={{padding: '20px', textAlign: 'center'}}>No active jobs found matching your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (Hidden on Desktop via CSS ideally, or Rendered conditionally) */}
      <div className="mobile-view-only" style={{display: 'none'}}> {/* CSS Media Query se handle karein ise */}
         {/* ... Mobile view logic ... */}
      </div>
      
      {/* Fallback Mobile View using simple divs if media queries are tricky */}
      <div className="mobile-list">
        {displayList.map((job) => {
           const lastDate = job.importantDates?.find(d => d.label.toLowerCase().includes("last"))?.value || "Check Notice";
           return (
             <div key={job.id} style={{background: 'white', padding: '15px', marginBottom: '10px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderLeft: '5px solid #004080'}}>
               <Link to={`/${job.slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                 <h3 style={{fontSize: '16px', margin: '0 0 8px 0', color: '#004080'}}>{job.shortTitle || job.title}</h3>
               </Link>
               <div style={{fontSize: '14px', marginBottom: '5px'}}>
                 <strong>Last Date:</strong> <span style={{color: '#d32f2f'}}>{lastDate}</span>
               </div>
               <div style={{textAlign: 'right'}}>
                  <Link to={`/${job.slug}`} style={{textDecoration: 'none', color: '#007bff', fontWeight: 'bold', fontSize: '14px'}}>
                    View Details →
                  </Link>
               </div>
             </div>
           )
        })}
      </div>

    </div>
  );
};

export default ActiveJobs;
