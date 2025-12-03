import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { jobsData } from './jobsData';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';
import CategoryPage from './CategoryPage';
import ActiveJobs from './ActiveJobs';

// --- Navbar ---
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.trim()) alert("Search functionality coming soon for: " + searchTerm); 
  };
  return (
    <>
      <div className="sticky-top">
        <div className="header"><h1>TOP ONLINE FORM</h1><p>www.TopOnlineForm.com</p></div>
        <div className="navbar">
          <Link to="/">Home</Link><Link to="/active-jobs">Active Jobs</Link><Link to="/latest-jobs">Latest Jobs</Link>
          <Link to="/results">Results</Link><Link to="/admit-card">Admit Card</Link><Link to="/answer-key">Answer Key</Link><Link to="/syllabus">Syllabus</Link>
        </div>
      </div> 
      <div className="clean-note"><p>✨ Welcome to TopOnlineForm.com — No Ads, Just Information. ✨</p></div>
    </>
  );
}

// --- Home Component ---
function Home() {
  const sortNewest = (a, b) => b.id - a.id;

  const latestJobs = jobsData.filter(j => j.category === "Latest Jobs").sort(sortNewest).slice(0, 20);
  const admitCards = jobsData.filter(j => j.category === "Admit Card").sort(sortNewest).slice(0, 20);
  const results = jobsData.filter(j => j.category === "Result").sort(sortNewest).slice(0, 20);
  const answerKeys = jobsData.filter(j => j.category === "Answer Key").sort(sortNewest).slice(0, 7);
  const syllabus = jobsData.filter(j => j.category === "Syllabus").sort(sortNewest).slice(0, 7);
  const previousPapers = jobsData.filter(j => j.category === "Previous Paper").sort(sortNewest).slice(0, 7);

  const JobBox = ({ title, jobs, linkTo }) => (
    <div className="box-column">
      <div className="box-header">{title}</div>
      <ul className="box-list">
        {jobs.length > 0 ? jobs.map(job => (
          <li key={job.id}>
            <Link to={`/${job.slug}`}>{job.shortTitle ? job.shortTitle : job.title}</Link>
          </li>
        )) : <li style={{padding:'10px', textAlign:'center', color:'#666'}}>Coming Soon...</li>}
        <li style={{textAlign:'right'}}><Link to={linkTo} style={{fontWeight:'bold', fontSize:'13px'}}>View More...</Link></li>
      </ul>
    </div>
  );

  return (
    <div className="main-grid">
      <SEO title="Sarkari Result 2025" description="Latest Govt Jobs" keywords="Sarkari Result" url="https://toponlineform.com/" />
      
      <div className="action-cell"><a href="https://whatsapp.com" target="_blank" className="social-btn whatsapp full-width">Join WhatsApp Group</a></div>
      <div className="action-cell"><a href="https://telegram.org" target="_blank" className="social-btn telegram full-width">Join Telegram Channel</a></div>
      <div className="action-cell">
         <form className="grid-search-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search jobs..." />
            <button type="submit">Search</button>
          </form>
      </div>

      <JobBox title="Latest Jobs" jobs={latestJobs} linkTo="/latest-jobs" />
      <JobBox title="Admit Card" jobs={admitCards} linkTo="/admit-card" />
      <JobBox title="Result" jobs={results} linkTo="/results" />
      <JobBox title="Answer Key" jobs={answerKeys} linkTo="/answer-key" />
      <JobBox title="Syllabus" jobs={syllabus} linkTo="/syllabus" />
      <JobBox title="Previous Paper" jobs={previousPapers} linkTo="/previous-papers" />
    </div>
  );
}

// --- Job Details ---
function JobDetails() {
  const { slug } = useParams();
  const job = jobsData.find((j) => j.slug === slug);
  if (!job) return <h2 style={{textAlign:'center', marginTop:'20px'}}>Job Not Found</h2>;

  const convertDate = (dateStr) => {
    if(!dateStr) return new Date().toISOString().split('T')[0];
    const parts = dateStr.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`; 
  };
  const lastDateItem = job.importantDates.find(d => d.label.toLowerCase().includes('last'));
  const validThrough = lastDateItem ? convertDate(lastDateItem.value) : null;
  const datePosted = convertDate(job.postDate);

  const jobSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.shortInfo,
    "datePosted": datePosted,
    "validThrough": validThrough || datePosted,
    "hiringOrganization": { "@type": "Organization", "name": "Top Online Form", "sameAs": "https://toponlineform.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "IN" } }
  };

  // Helper to render Exam Pattern Table
  const RenderExamTable = ({ data, title }) => (
    <>
      {title && <div className="section-header">{title}</div>}
      <div style={{overflowX: 'auto'}}>
        <table style={{minWidth: '100%'}}>
          <thead>
            <tr style={{background: '#f2f2f2'}}>
              <th>Subject</th><th>No. of Questions</th><th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.subject}</td>
                <td>{row.questions}</td>
                <td>{row.marks}</td>
              </tr>
            ))}
            <tr style={{fontWeight: 'bold', background: '#e9e9e9'}}>
              <td>Total</td>
              <td>{data.reduce((sum, item) => sum + Number(item.questions), 0)}</td>
              <td>{data.reduce((sum, item) => sum + Number(item.marks), 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <div className="job-container">
      <SEO title={job.title} description={job.shortInfo} keywords={job.title} url={`https://toponlineform.com/${job.slug}`} />
      <Helmet><script type="application/ld+json">{JSON.stringify(jobSchema)}</script></Helmet>

      <h1 className="job-title">{job.title}</h1>
      <p style={{marginBottom:'10px', textAlign:'justify'}}><strong>Post Date : </strong> {job.postDate}</p>
      <p style={{marginBottom:'20px', textAlign:'justify'}}><strong>Short Info : </strong> {job.shortInfo}</p>
      
      {/* Dates & Fees */}
      {job.importantDates.length > 0 && (
        <table><tbody><tr><th className="green-header" width="50%">Dates</th><th className="green-header" width="50%">Fees</th></tr>
        <tr><td><ul>{job.importantDates.map((d,i)=><li key={i}><strong>{d.label}:</strong> {d.value}</li>)}</ul></td>
        <td><ul>{job.applicationFee.map((f,i)=><li key={i}><strong>{f.category}:</strong> {f.amount}</li>)}</ul></td></tr></tbody></table>
      )}
      
      {/* Age Limit */}
      {job.ageLimit && (
        <>
          <div className="section-header">Age Limit</div>
          <p style={{textAlign: 'center', border: '1px solid #000', padding: '10px'}}>{job.ageLimit}</p>
          {job.ageRelaxation && (
            <div style={{marginTop: '15px', padding: '0 10px'}}>
              <strong>Age Relaxation:</strong>
              <ul style={{listStyleType: 'disc', marginLeft: '30px', marginTop: '5px'}}>
                {job.ageRelaxation.map((item, index) => <li key={index} style={{marginBottom: '5px'}}>{item}</li>)}
              </ul>
            </div>
          )}
        </>
      )}

      {/* Vacancy Details */}
      {job.vacancyDetails.length > 0 && (
        <>
          <div className="section-header">Vacancy Details</div>
          <table><thead><tr style={{background: '#f2f2f2'}}><th>Post Name</th><th>Total</th><th>Eligibility</th></tr></thead>
          <tbody>{job.vacancyDetails.map((item, index) => (<tr key={index}><td>{item.postName}</td><td>{item.totalPost}</td><td>{item.eligibility}</td></tr>))}</tbody></table>
        </>
      )}

      {/* State Wise Vacancy */}
      {job.stateWiseVacancy && (
        <>
          <div className="section-header">{job.vacancyTableTitle || "State Wise Vacancy Details"}</div>
          <div style={{overflowX: 'auto'}}>
            <table style={{minWidth: '100%'}}>
              <thead><tr style={{background: '#f2f2f2'}}><th>{job.vacancyColumnName || "State/UT"}</th><th>Total Seats</th><th>UR</th><th>EWS</th><th>OBC</th><th>SC</th><th>ST</th></tr></thead>
              <tbody>
                {job.stateWiseVacancy.map((row, index) => (
                  <tr key={index}><td style={{fontWeight:'500'}}>{row.state}</td><td style={{fontWeight:'bold', color:'blue'}}>{row.total}</td><td>{row.ur}</td><td>{row.ews}</td><td>{row.obc}</td><td>{row.sc}</td><td>{row.st}</td></tr>
                ))}
                <tr style={{background: '#e9e9e9', fontWeight: 'bold'}}><td>TOTAL</td><td style={{color:'red'}}>{job.stateWiseVacancy.reduce((sum, item) => sum + (Number(item.total) || 0), 0)}</td><td colSpan="5" style={{textAlign:'center', fontSize:'12px'}}>Check Notification for PwBD details</td></tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      
      {/* RRB Zone Wise Graduate */}
      {job.zoneWiseGraduate && (
        <>
          <div className="section-header">RRB NTPC Graduate Level Vacancy (Zone Wise)</div>
          <div style={{overflowX: 'auto'}}>
            <table style={{minWidth: '100%'}}>
              <thead><tr style={{background: '#f2f2f2'}}><th>RRB Zone</th><th>Total</th><th>UR</th><th>SC</th><th>ST</th><th>OBC</th><th>EWS</th></tr></thead>
              <tbody>
                {job.zoneWiseGraduate.map((row, index) => (
                  <tr key={index}><td style={{fontWeight:'500'}}>{row.state}</td><td style={{fontWeight:'bold', color:'blue'}}>{row.total}</td><td>{row.ur}</td><td>{row.sc}</td><td>{row.st}</td><td>{row.obc}</td><td>{row.ews}</td></tr>
                ))}
                <tr style={{background: '#e9e9e9', fontWeight: 'bold'}}><td>TOTAL</td><td style={{color:'red'}}>{job.zoneWiseGraduate.reduce((sum, item) => sum + (Number(item.total) || 0), 0)}</td><td colSpan="5"></td></tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* RRB Zone Wise Undergraduate */}
      {job.zoneWiseUG && (
        <>
          <div className="section-header">RRB NTPC Undergraduate Level Vacancy (Zone Wise)</div>
          <div style={{overflowX: 'auto'}}>
            <table style={{minWidth: '100%'}}>
              <thead><tr style={{background: '#f2f2f2'}}><th>RRB Zone</th><th>Total</th><th>UR</th><th>SC</th><th>ST</th><th>OBC</th><th>EWS</th></tr></thead>
              <tbody>
                {job.zoneWiseUG.map((row, index) => (
                  <tr key={index}><td style={{fontWeight:'500'}}>{row.state}</td><td style={{fontWeight:'bold', color:'blue'}}>{row.total}</td><td>{row.ur}</td><td>{row.sc}</td><td>{row.st}</td><td>{row.obc}</td><td>{row.ews}</td></tr>
                ))}
                <tr style={{background: '#e9e9e9', fontWeight: 'bold'}}><td>TOTAL</td><td style={{color:'red'}}>{job.zoneWiseUG.reduce((sum, item) => sum + (Number(item.total) || 0), 0)}</td><td colSpan="5"></td></tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Salary */}
      {job.salary && (
        <>
          <div className="section-header">Pay Scale / Salary</div>
          <div style={{textAlign: 'center', border: '1px solid #000', padding: '15px', fontWeight: 'bold', fontSize: '16px', backgroundColor: '#f9f9f9', color: '#008000'}}>{job.salary}</div>
        </>
      )}

      {/* Salary Details Table */}
      {job.salaryDetails && (
        <>
          <div className="section-header">Post Wise Salary / Pay Level</div>
          <div style={{overflowX: 'auto'}}>
            <table style={{minWidth: '100%'}}>
              <thead><tr style={{background: '#f2f2f2'}}><th>Post Name</th><th>Pay Level (7th CPC)</th></tr></thead>
              <tbody>
                {job.salaryDetails.map((row, index) => (
                  <tr key={index}><td>{row.post}</td><td style={{fontWeight:'bold', color:'var(--sarkari-blue)'}}>{row.level}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Selection Process */}
      {job.selectionProcess && (
        <>
          <div className="section-header">Selection Process</div>
          <ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.selectionProcess.map((item, index) => <li key={index} style={{marginBottom: '5px'}}><strong>Stage {index + 1}:</strong> {item}</li>)}</ol>
        </>
      )}

      {/* Exam Pattern (UPDATED: Now supports CBT 1/2, Dynamic Tables & PET) */}
      {job.examPattern && (
        <>
          <div className="section-header">Exam Pattern & Physical Test</div>
          <div style={{padding: '10px'}}>
            
            {/* Details List */}
            {job.examPattern.details && (
              <ul style={{listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px'}}>
                {job.examPattern.details.map((item, i) => <li key={i} style={{marginBottom: '5px'}}>{item}</li>)}
              </ul>
            )}
            
            {/* Standard Table */}
            {job.examPattern.table && <RenderExamTable data={job.examPattern.table} />}
            
            {/* RRB NTPC Specific */}
            {job.examPattern.cbt1 && <RenderExamTable data={job.examPattern.cbt1} title="1st Stage Computer Based Test (CBT-1)" />}
            {job.examPattern.cbt2 && <RenderExamTable data={job.examPattern.cbt2} title="2nd Stage Computer Based Test (CBT-2)" />}

            {/* ECGC Specific */}
            {job.examPattern.generalistObjective && <RenderExamTable data={job.examPattern.generalistObjective} title="1. Generalist - Objective Test" />}
            {job.examPattern.generalistDescriptive && <RenderExamTable data={job.examPattern.generalistDescriptive} title="2. Generalist - Descriptive Test" />}
            {job.examPattern.specialistObjective && <RenderExamTable data={job.examPattern.specialistObjective} title="3. Specialist - Objective Test" />}
            {job.examPattern.specialistDescriptive && <RenderExamTable data={job.examPattern.specialistDescriptive} title="4. Specialist - Descriptive Test" />}

            {/* --- NEW: Physical Efficiency Test (PET) Table --- */}
            {job.examPattern.pet && (
              <>
                <div className="section-header" style={{marginTop: '20px', fontSize: '16px'}}>Physical Efficiency Test (PET)</div>
                <div style={{overflowX: 'auto'}}>
                  <table style={{minWidth: '100%'}}>
                    <thead>
                      <tr style={{background: '#f2f2f2'}}>
                        <th>Activity</th>
                        <th>Male Candidates</th>
                        <th>Female Candidates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {job.examPattern.pet.map((row, i) => (
                        <tr key={i}>
                          <td>{row.activity}</td>
                          <td>{row.male}</td>
                          <td>{row.female}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* How to Apply */}
      {job.howToApply && (
        <>
          <div className="section-header">How to Apply</div>
          <ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.howToApply.map((item, index) => <li key={index} style={{marginBottom: '10px'}}>{item}</li>)}</ol>
        </>
      )}
      
      {/* --- DYNAMIC LINKS SECTION (UPDATED) --- */}
      <div className="section-header">Important Links</div>
      <table className="important-links">
        <tbody>
          {/* Ab yeh jobsData.js se links lega, hardcoded nahi hai */}
          {job.links && job.links.map((link, index) => (
            <tr key={index}>
              <td><strong>{link.title}</strong></td>
              <td align="center">
                <a href={link.url} className="click-here" target="_blank" rel="noreferrer">Click Here</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Footer() {
  return (
    <div style={{background: '#000', color: 'white', padding: '25px', textAlign: 'center', marginTop: '20px', borderTop: '3px solid #ab1e1e'}}>
      <div style={{marginBottom: '15px'}}>
        <Link to="/about" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>About Us</Link> | <Link to="/contact" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Contact Us</Link> | <Link to="/privacy" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Privacy Policy</Link>
      </div>
      <p style={{fontWeight: 'bold', marginBottom: '10px'}}>Copyright © 2025 TopOnlineForm.com. All Rights Reserved.</p>
      <div style={{fontSize: '12px', color: '#bbb', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5'}}>
        <p><strong>Disclaimer:</strong> This is NOT an official government website. We provide information gathered from official notifications and newspapers. While we make every effort to provide accurate information, errors may occur. Please verify details from the official website before applying.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/:slug" element={<JobDetails />} /><Route path="/active-jobs" element={<ActiveJobs />} /><Route path="/latest-jobs" element={<CategoryPage category="Latest Jobs" title="All Latest Jobs" />} /><Route path="/results" element={<CategoryPage category="Result" title="All Results" />} /><Route path="/admit-card" element={<CategoryPage category="Admit Card" title="All Admit Cards" />} /><Route path="/answer-key" element={<CategoryPage category="Answer Key" title="All Answer Keys" />} /><Route path="/syllabus" element={<CategoryPage category="Syllabus" title="Syllabus" />} /><Route path="/previous-papers" element={<CategoryPage category="Previous Paper" title="Previous Papers" />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/privacy" element={<Privacy />} /></Routes><Footer />
    </>
  );
}
export default App;
