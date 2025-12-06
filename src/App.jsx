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
import SearchResults from './SearchResults'; // <--- NEW IMPORT

// --- Navbar ---
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to Search Page with Query
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // Clear input after search
    }
  };

  return (
    <>
      <div className="sticky-top">
        <div className="header"><h1>TOP ONLINE FORM</h1><p>www.TopOnlineForm.com</p></div>
        <div className="navbar">
          <Link to="/">Home</Link><Link to="/active-jobs">Active Jobs</Link><Link to="/latest-jobs">Latest Jobs</Link>
          <Link to="/results">Results</Link><Link to="/admit-card">Admit Card</Link><Link to="/answer-key">Answer Key</Link><Link to="/syllabus">Syllabus</Link>
        </div>
        
        {/* --- ADDED SEARCH BAR IN NAVBAR (Mobile Friendly) --- */}
        <div style={{background: '#f1f1f1', padding: '10px', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #ccc'}}>
           <form onSubmit={handleSearch} style={{display:'flex', width: '100%', maxWidth: '600px'}}>
             <input 
               type="text" 
               placeholder="Search jobs (e.g. SSC, Railway)..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               style={{flex: 1, padding: '8px', borderRadius: '4px 0 0 4px', border: '1px solid #ccc', outline: 'none'}}
             />
             <button type="submit" style={{padding: '8px 15px', background: '#333', color: '#fff', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer'}}>Search</button>
           </form>
        </div>
      </div> 
      <div className="clean-note"><p>✨ Welcome to TopOnlineForm.com — No Ads, Just Information. ✨</p></div>
    </>
  );
}

// --- Home Component ---
function Home() {
  // Added hooks for Grid Search
  const navigate = useNavigate();
  const [gridSearch, setGridSearch] = useState("");

  const sortNewest = (a, b) => b.id - a.id;

  // Helper to check category (Handles both String and Array)
  const hasCategory = (job, cat) => {
    if (Array.isArray(job.category)) {
      return job.category.includes(cat);
    }
    return job.category === cat;
  };

  const latestJobs = jobsData.filter(j => hasCategory(j, "Latest Jobs")).sort(sortNewest).slice(0, 20);
  const admitCards = jobsData.filter(j => hasCategory(j, "Admit Card")).sort(sortNewest).slice(0, 20);
  const results = jobsData.filter(j => hasCategory(j, "Result")).sort(sortNewest).slice(0, 20);
  const answerKeys = jobsData.filter(j => hasCategory(j, "Answer Key")).sort(sortNewest).slice(0, 7);
  const syllabus = jobsData.filter(j => hasCategory(j, "Syllabus")).sort(sortNewest).slice(0, 7);
  const previousPapers = jobsData.filter(j => hasCategory(j, "Previous Paper")).sort(sortNewest).slice(0, 7);

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
       
      <div className="action-cell"><a href="https://whatsapp.com/channel/0029Vb7TcG06LwHoTXhZKn2D" target="_blank" className="social-btn whatsapp full-width">Join WhatsApp Group</a></div>
      <div className="action-cell"><a href="https://telegram.org" target="_blank" className="social-btn telegram full-width">Join Telegram Channel</a></div>
      
      {/* --- UPDATED GRID SEARCH FORM --- */}
      <div className="action-cell">
         <form className="grid-search-form" onSubmit={(e) => {
            e.preventDefault();
            if(gridSearch.trim()) navigate(`/search?q=${encodeURIComponent(gridSearch)}`);
         }}>
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={gridSearch}
              onChange={(e) => setGridSearch(e.target.value)}
            />
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

  let faqSchema = null;
  if (job.faqs && job.faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": job.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };
  }

  const formatHeader = (key) => {
    const upperKeys = ["ur", "obc", "sc", "st", "ews", "pwbd", "esm", "gen", "ph"];
    if (upperKeys.includes(key.toLowerCase())) {
      return key.toUpperCase();
    }
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  };

  const RenderSmartTable = ({ data, title }) => {
    if (!data || data.length === 0) return null;
    const isPet = Object.keys(data[0]).includes('activity');
     
    const totalQuestions = data.reduce((sum, item) => {
      const val = parseFloat(item.questions);
      return !isNaN(val) ? sum + val : sum;
    }, 0);

    const totalMarks = data.reduce((sum, item) => {
      const val = parseFloat(item.marks);
      return !isNaN(val) ? sum + val : sum;
    }, 0);

    const showTotalRow = !isPet && (totalQuestions > 0 || totalMarks > 0);

    return (
      <div style={{marginBottom: '20px'}}>
         {title && <div className="section-header" style={{fontSize:'16px', marginTop:'15px', marginBottom:'0'}}>{title}</div>}
         <div style={{overflowX: 'auto'}}>
           <table style={{minWidth: '100%'}}>
             <thead>
               <tr style={{background: '#f2f2f2'}}>
                 {isPet ? (
                   <><th>Activity</th><th>Male</th><th>Female</th></>
                 ) : (
                   <><th>Subject</th><th>Questions</th><th>Marks</th></>
                 )}
               </tr>
             </thead>
             <tbody>
               {data.map((row, i) => (
                 <tr key={i}>
                   {isPet ? (
                     <><td>{row.activity}</td><td>{row.male}</td><td>{row.female}</td></>
                   ) : (
                     <><td>{row.subject}</td><td>{row.questions}</td><td>{row.marks}</td></>
                   )}
                 </tr>
               ))}
               {showTotalRow && (
                  <tr style={{fontWeight: 'bold', background: '#e9e9e9'}}>
                    <td>Total</td>
                    <td>{totalQuestions}</td>
                    <td>{totalMarks}</td>
                  </tr>
               )}
             </tbody>
           </table>
         </div>
      </div>
    );
  };

  // --- UPDATED RenderTable Component with Fix ---
  const RenderTable = ({ data, title, autoTotal = true }) => {
    if (!data || data.length === 0) return null;
    const headers = Object.keys(data[0]);
    const totalKey = headers.find(h => h.toLowerCase().includes('total'));
    const isVacancyTable = headers.some(h => ['ur', 'sc', 'st', 'obc'].includes(h.toLowerCase()));

    let showTotal = false;
    let colTotals = {};

    if (autoTotal) {
        headers.forEach(header => {
            if (totalKey && header !== totalKey) return;
            const sum = data.reduce((acc, row) => {
                const val = parseFloat(row[header]);
                return !isNaN(val) ? acc + val : acc;
            }, 0);
            if (sum > 0) {
                colTotals[header] = sum;
                showTotal = true;
            }
        });
    }

    return (
      <div style={{marginBottom: '20px'}}>
         {title && <div className="section-header" style={{fontSize:'16px', marginTop:'15px', marginBottom:'0'}}>{title}</div>}
         <div style={{overflowX: 'auto'}}>
           <table style={{minWidth: '100%'}}>
             <thead>
               <tr style={{background: '#f2f2f2'}}>
                 {headers.map((h, i) => <th key={i}>{formatHeader(h)}</th>)}
               </tr>
             </thead>
             <tbody>
               {data.map((row, i) => (
                 <tr key={i}>
                   {headers.map((h, j) => <td key={j}>{row[h]}</td>)}
                 </tr>
               ))}
               {showTotal && (
                  <tr style={{fontWeight: 'bold', background: '#e9e9e9'}}>
                      {isVacancyTable && totalKey ? (
                        <>
                          <td>Total</td>
                          {headers.slice(1).map((h, i) => {
                             // --- Logic Fixed Here ---
                             const totalIndex = headers.indexOf(totalKey);
                             const currentIndex = headers.indexOf(h);

                             if (h === totalKey) {
                                 return <td key={i} style={{color:'red'}}>{colTotals[h]}</td>;
                             } else if (currentIndex < totalIndex) {
                                 // Add empty cell if the column is before Total (e.g. Group, Pay Level)
                                 return <td key={i}></td>;
                             }
                             // Return null for columns AFTER Total (covered by colSpan below)
                             return null;
                          })}
                          <td colSpan={headers.length - 1 - headers.indexOf(totalKey)} style={{textAlign:'center', fontSize:'12px', color:'#555'}}>
                            Check Notification for detailed breakup
                          </td>
                        </>
                      ) : (
                        headers.map((h, i) => {
                          if (i === 0) return <td key={i} style={{color:'black'}}>Total</td>;
                          return <td key={i} style={{color:'red'}}>{colTotals[h] || "-"}</td>;
                        })
                      )}
                  </tr>
               )}
             </tbody>
           </table>
         </div>
      </div>
    );
  };

  return (
    <div className="job-container">
      <SEO title={job.title} description={job.shortInfo} keywords={job.title} url={`https://toponlineform.com/${job.slug}`} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <h1 className="job-title">{job.title}</h1>

      {/* --- SMART POST DATE (Conditional) --- */}
      {job.postDate && (
        <p style={{marginBottom:'10px', textAlign:'justify'}}><strong>Post Date : </strong> {job.postDate}</p>
      )}

      <p style={{marginBottom:'20px', textAlign:'justify'}}><strong>Short Info : </strong> {job.shortInfo}</p>
       
      {/* Dates & Fees Section */}
      {job.importantDates.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th className="green-header" width="50%">Dates</th>
              <th className="green-header" width="50%">Fees</th>
            </tr>
            <tr>
              <td>
                <ul>
                  {job.importantDates.map((d, i) => (
                    <li key={i}><strong>{d.label}:</strong> {d.value}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {job.applicationFee && job.applicationFee.length > 0 ? (
                    job.applicationFee.map((f, i) => (
                      <li key={i}><strong>{f.category}:</strong> {f.amount}</li>
                    ))
                  ) : (
                    <li>Check Notification</li>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      )}
       
      {job.ageLimit && (
        <><div className="section-header">Age Limit</div><p style={{textAlign: 'center', border: '1px solid #000', padding: '10px'}}>{job.ageLimit}</p>
        {job.ageRelaxation && (<div style={{marginTop: '15px', padding: '0 10px'}}><strong>Age Relaxation:</strong><ul style={{listStyleType: 'disc', marginLeft: '30px', marginTop: '5px'}}>{job.ageRelaxation.map((item, index) => <li key={index} style={{marginBottom: '5px'}}>{item}</li>)}</ul></div>)}</>
      )}

      {job.vacancyDetails.length > 0 && <RenderTable data={job.vacancyDetails} title="Vacancy Details" />}
       
      {(job.stateWiseVacancy || job.zoneWiseGraduate || job.zoneWiseUG) && (
          <>
            {job.stateWiseVacancy && <RenderTable data={job.stateWiseVacancy} title={job.vacancyTableTitle || "State Wise Vacancy Details"} />}
            {job.zoneWiseGraduate && <RenderTable data={job.zoneWiseGraduate} title="Graduate Level Vacancy (Zone Wise)" />}
            {job.zoneWiseUG && <RenderTable data={job.zoneWiseUG} title="Undergraduate Level Vacancy (Zone Wise)" />}
          </>
      )}

      {job.salary && (<><div className="section-header">Pay Scale / Salary</div><div style={{textAlign: 'center', border: '1px solid #000', padding: '15px', fontWeight: 'bold', fontSize: '16px', backgroundColor: '#f9f9f9', color: '#008000'}}>{job.salary}</div></>)}
      {job.salaryDetails && <RenderTable data={job.salaryDetails} title="Post Wise Salary / Pay Level" autoTotal={false} />}

      {job.selectionProcess && (<><div className="section-header">Selection Process</div><ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.selectionProcess.map((item, index) => <li key={index} style={{marginBottom: '5px'}}><strong>{item.includes(":") ? item : `Step ${index+1}: ${item}`}</strong></li>)}</ol></>)}

      {job.examPattern && (
        <>
          <div className="section-header">
            {(job.examPattern.pet || (job.examPattern.stages && job.examPattern.stages.some(s => s.type === 'pet'))) ? "Exam Pattern & Physical Test" : "Exam Pattern"}
          </div>
          <div style={{padding: '10px'}}>
            {job.examPattern.details && (<ul style={{listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px'}}>{job.examPattern.details.map((item, i) => <li key={i} style={{marginBottom: '5px'}}>{item}</li>)}</ul>)}
             
            {job.examPattern.table && <RenderSmartTable data={job.examPattern.table} />}
            {job.examPattern.tier1 && <RenderSmartTable data={job.examPattern.tier1} title="Tier-I Exam Pattern" />}
            {job.examPattern.tier2 && <RenderSmartTable data={job.examPattern.tier2} title="Tier-II Exam Pattern" />}
            {job.examPattern.cbt1 && <RenderSmartTable data={job.examPattern.cbt1} title={job.examPattern.cbt1Title || "CBT-1 Pattern"} />}
            {job.examPattern.cbt2 && <RenderSmartTable data={job.examPattern.cbt2} title={job.examPattern.cbt2Title || "CBT-2 Pattern"} />}
            {job.examPattern.generalistObjective && <RenderSmartTable data={job.examPattern.generalistObjective} title="1. Generalist - Objective Test" />}
            {job.examPattern.generalistDescriptive && <RenderSmartTable data={job.examPattern.generalistDescriptive} title="2. Generalist - Descriptive Test" />}
            {job.examPattern.specialistObjective && <RenderSmartTable data={job.examPattern.specialistObjective} title="3. Specialist - Objective Test" />}
            {job.examPattern.specialistDescriptive && <RenderSmartTable data={job.examPattern.specialistDescriptive} title="4. Specialist - Descriptive Test" />}
            {job.examPattern.pet && <RenderSmartTable data={job.examPattern.pet} title="Physical Efficiency Test (PET)" />}
            {job.examPattern.stages && job.examPattern.stages.map((stage, index) => (<RenderSmartTable key={index} data={stage.data} title={stage.title} />))}
          </div>
        </>
      )}

      {job.extraSections && job.extraSections.map((section, index) => (
        <div key={index}>
          {section.tableData ? (
             <RenderTable data={section.tableData} title={section.title} autoTotal={false} />
          ) : (
             <>
               <div className="section-header">{section.title}</div>
               <div style={{padding: '10px'}}>
                 {section.text && <p style={{textAlign: 'justify', whiteSpace: 'pre-line'}}>{section.text}</p>}
                 {section.list && (<ul style={{listStyleType: 'disc', marginLeft: '30px'}}>{section.list.map((li, i) => <li key={i} style={{marginBottom: '5px'}}>{li}</li>)}</ul>)}
               </div>
             </>
          )}
        </div>
      ))}

      {job.howToApply && (<><div className="section-header">How to Apply</div><ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.howToApply.map((item, index) => <li key={index} style={{marginBottom: '10px'}}>{item}</li>)}</ol></>)}
       
      <div className="section-header">Important Links</div>
      <table className="important-links"><tbody>
          {job.links && job.links.map((link, index) => (
            <tr key={index}><td><strong>{link.title}</strong></td><td align="center"><a href={link.url} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
          ))}
      </tbody></table>

      {job.faqs && job.faqs.length > 0 && (
        <>
          <div className="section-header">Frequently Asked Questions (FAQs)</div>
          <div style={{padding: '15px', border: '1px solid #ddd', marginTop: '10px'}}>
            {job.faqs.map((faq, index) => (
              <div key={index} style={{marginBottom: '15px'}}>
                <div style={{fontWeight: 'bold', color: '#d32f2f', marginBottom: '5px'}}>Q.{index + 1}: {faq.question}</div>
                <div style={{color: '#333'}}>Ans: {faq.answer}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Footer() {
  return (<div style={{background: '#000', color: 'white', padding: '25px', textAlign: 'center', marginTop: '20px', borderTop: '3px solid #ab1e1e'}}><div style={{marginBottom: '15px'}}><Link to="/about" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>About Us</Link> | <Link to="/contact" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Contact Us</Link> | <Link to="/privacy" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Privacy Policy</Link></div><p style={{fontWeight: 'bold', marginBottom: '10px'}}>Copyright © 2025 TopOnlineForm.com. All Rights Reserved.</p><div style={{fontSize: '12px', color: '#bbb', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5'}}><p><strong>Disclaimer:</strong> This is NOT an official government website. We provide information gathered from official notifications and newspapers. While we make every effort to provide accurate information, errors may occur. Please verify details from the official website before applying.</p></div></div>);
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} /> {/* <--- ADDED ROUTE */}
        <Route path="/:slug" element={<JobDetails />} />
        <Route path="/active-jobs" element={<ActiveJobs />} />
        <Route path="/latest-jobs" element={<CategoryPage category="Latest Jobs" title="All Latest Jobs" />} />
        <Route path="/results" element={<CategoryPage category="Result" title="All Results" />} />
        <Route path="/admit-card" element={<CategoryPage category="Admit Card" title="All Admit Cards" />} />
        <Route path="/answer-key" element={<CategoryPage category="Answer Key" title="All Answer Keys" />} />
        <Route path="/syllabus" element={<CategoryPage category="Syllabus" title="Syllabus" />} />
        <Route path="/previous-papers" element={<CategoryPage category="Previous Paper" title="Previous Papers" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
