import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, X, Share2 } from 'lucide-react'; 
import { jobsData } from './jobsData';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';
import CategoryPage from './CategoryPage';
import ActiveJobs from './ActiveJobs';
import SearchResults from './SearchResults';
// import NotFound from './NotFound'; // Agar future me use karna ho to uncomment karein

// --- Navbar ---
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setIsSearchOpen(false); 
    }
  };

  return (
    <>
      <div className="sticky-top">
        <div className="header"><h1>TOP ONLINE FORM</h1><p>www.TopOnlineForm.com</p></div>
        
        {/* --- NAVBAR WITH TOGGLE LOGIC --- */}
        <div className="navbar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '45px', padding: '0 10px' }}>
          
          {!isSearchOpen ? (
            // --- VIEW 1: LINKS + SEARCH ICON ---
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', position: 'relative' }}>
              <div className="nav-links" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/">Home</Link>
                <Link to="/active-jobs">Active Jobs</Link>
                <Link to="/latest-jobs">Latest Jobs</Link>
                <Link to="/results">Results</Link>
                <Link to="/admit-card">Admit Card</Link>
                <Link to="/answer-key">Answer Key</Link>
                <Link to="/syllabus">Syllabus</Link>
              </div>
              
              {/* Search Icon Button */}
              <button 
                onClick={() => setIsSearchOpen(true)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', marginLeft: '15px', display: 'flex', alignItems: 'center' }}
                title="Search Jobs"
              >
                <Search size={20} />
              </button>
            </div>
          ) : (
            // --- VIEW 2: SEARCH INPUT + CLOSE ICON ---
            <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%', maxWidth: '600px', alignItems: 'center' }}>
              <input 
                autoFocus
                type="text" 
                placeholder="Search jobs (e.g. SSC, Railway)..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1, 
                  padding: '8px', 
                  borderRadius: '4px', 
                  border: 'none', 
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
              <button 
                type="submit" 
                style={{ 
                  padding: '8px 15px', 
                  background: '#ffcc00', 
                  color: 'black', 
                  border: 'none', 
                  borderRadius: '4px', 
                  marginLeft: '5px', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Go
              </button>
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', marginLeft: '10px' }}
              >
                <X size={24} />
              </button>
            </form>
          )}
        </div>
      </div> 
      <div className="clean-note"><p>✨ Welcome to TopOnlineForm.com — No Ads, Just Information. ✨</p></div>
    </>
  );
}

// --- Home Component ---
function Home() {
  const navigate = useNavigate();
  const [gridSearch, setGridSearch] = useState("");
  const sortNewest = (a, b) => b.id - a.id;

  const hasCategory = (job, cat) => {
    if (Array.isArray(job.category)) return job.category.includes(cat);
    return job.category === cat;
  };

  // --- Filtering Data ---
  const latestJobs = jobsData.filter(j => hasCategory(j, "Latest Jobs")).sort(sortNewest).slice(0, 20);
  const admitCards = jobsData.filter(j => hasCategory(j, "Admit Card")).sort(sortNewest).slice(0, 20);
  const results = jobsData.filter(j => hasCategory(j, "Result")).sort(sortNewest).slice(0, 20);
  const answerKeys = jobsData.filter(j => hasCategory(j, "Answer Key")).sort(sortNewest).slice(0, 7);
  
  // ✅ NEW: Admission Category Logic Added
  const admissions = jobsData.filter(j => hasCategory(j, "Admission")).sort(sortNewest).slice(0, 7);
  
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
      
      {/* ✅ CHANGED: Syllabus box replaced with Admission */}
      <JobBox title="Admission" jobs={admissions} linkTo="/admission" />
      
      <JobBox title="Previous Paper" jobs={previousPapers} linkTo="/previous-papers" />
    </div>
  );
}

// --- Job Details ---
function JobDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((j) => j.slug === slug);
  
  if (!job) return (
    <div style={{textAlign:'center', padding: '50px'}}>
      <h2>Job Not Found</h2>
      <p>The job you are looking for might have been removed or the link is incorrect.</p>
      <button onClick={() => navigate('/')} style={{marginTop: '10px', padding: '10px 20px', background: '#ab1e1e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Go Home</button>
    </div>
  );

  const convertDate = (dateStr) => {
    if(!dateStr) return new Date().toISOString().split('T')[0];
    const parts = dateStr.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`; 
  };
  const lastDateItem = job.importantDates.find(d => d.label.toLowerCase().includes('last'));
  const validThrough = lastDateItem ? convertDate(lastDateItem.value) : null;
  const datePosted = convertDate(job.postDate);

  // --- Dynamic Header Logic ---
  let stepsHeader = "How to Apply";
  const cat = job.category.toLowerCase();
  
  if (cat.includes("admit card")) {
    stepsHeader = "How to Download Admit Card";
  } else if (cat.includes("result")) {
    stepsHeader = "How to Check Result";
  } else if (cat.includes("answer key") || cat.includes("syllabus") || cat.includes("paper")) {
    stepsHeader = "How to Download";
  } else if (cat.includes("admission")) { // ✅ Added Admission Logic
    stepsHeader = "How to Apply for Admission";
  }

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
                             const totalIndex = headers.indexOf(totalKey);
                             const currentIndex = headers.indexOf(h);
                             if (h === totalKey) {
                                 return <td key={i} style={{color:'red'}}>{colTotals[h]}</td>;
                             } else if (currentIndex < totalIndex) {
                                 return <td key={i}></td>;
                             }
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
      {job.postDate && (<p style={{marginBottom:'10px', textAlign:'justify'}}><strong>Post Date : </strong> {job.postDate}</p>)}
      <p style={{marginBottom:'20px', textAlign:'justify'}}><strong>Short Info : </strong> {job.shortInfo}</p>
       
      {job.importantDates.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th className="green-header" width="50%">Dates</th>
              <th className="green-header" width="50%">Fees</th>
            </tr>
            <tr>
              <td><ul>{job.importantDates.map((d, i) => <li key={i}><strong>{d.label}:</strong> {d.value}</li>)}</ul></td>
              <td><ul>{job.applicationFee && job.applicationFee.length > 0 ? job.applicationFee.map((f, i) => <li key={i}><strong>{f.category}:</strong> {f.amount}</li>) : <li>Check Notification</li>}</ul></td>
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
          <div className="section-header">{(job.examPattern.pet || (job.examPattern.stages && job.examPattern.stages.some(s => s.type === 'pet'))) ? "Exam Pattern & Physical Test" : "Exam Pattern"}</div>
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
          {section.tableData ? <RenderTable data={section.tableData} title={section.title} autoTotal={false} /> : (<><div className="section-header">{section.title}</div><div style={{padding: '10px'}}>{section.text && <p style={{textAlign: 'justify', whiteSpace: 'pre-line'}}>{section.text}</p>}{section.list && (<ul style={{listStyleType: 'disc', marginLeft: '30px'}}>{section.list.map((li, i) => <li key={i} style={{marginBottom: '5px'}}>{li}</li>)}</ul>)}</div></>)}
        </div>
      ))}

      {job.howToApply && (<><div className="section-header">{stepsHeader}</div><ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.howToApply.map((item, index) => <li key={index} style={{marginBottom: '10px'}}>{item}</li>)}</ol></>)}
      
      <div className="section-header">Important Links</div>
      <table className="important-links"><tbody>{job.links && job.links.map((link, index) => (<tr key={index}><td><strong>{link.title}</strong></td><td align="center"><a href={link.url} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>))}</tbody></table>
      {job.faqs && job.faqs.length > 0 && (<><div className="section-header">Frequently Asked Questions (FAQs)</div><div style={{padding: '15px', border: '1px solid #ddd', marginTop: '10px'}}>{job.faqs.map((faq, index) => (<div key={index} style={{marginBottom: '15px'}}><div style={{fontWeight: 'bold', color: '#d32f2f', marginBottom: '5px'}}>Q.{index + 1}: {faq.question}</div><div style={{color: '#333'}}>Ans: {faq.answer}</div></div>))}</div></>)}
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
        <Route path="/search" element={<SearchResults />} />
        <Route path="/:slug" element={<JobDetails />} />
        <Route path="/active-jobs" element={<ActiveJobs />} />
        <Route path="/latest-jobs" element={<CategoryPage category="Latest Jobs" title="All Latest Jobs" />} />
        <Route path="/results" element={<CategoryPage category="Result" title="All Results" />} />
        <Route path="/admit-card" element={<CategoryPage category="Admit Card" title="All Admit Cards" />} />
        <Route path="/answer-key" element={<CategoryPage category="Answer Key" title="All Answer Keys" />} />
        <Route path="/syllabus" element={<CategoryPage category="Syllabus" title="Syllabus" />} />
        <Route path="/previous-papers" element={<CategoryPage category="Previous Paper" title="Previous Papers" />} />
        
        {/* ✅ NEW: Route for Admission Category */}
        <Route path="/admission" element={<CategoryPage category="Admission" title="Admission Forms" />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* --- FLOATING SOCIAL BUTTONS --- */}
      <div className="floating-container">
        
        {/* Telegram Button */}
        <a href="https://telegram.org" target="_blank" rel="noreferrer" className="float-btn float-tg" title="Join Telegram">
          {/* Telegram Icon SVG */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a href="https://whatsapp.com/channel/0029Vb7TcG06LwHoTXhZKn2D" target="_blank" rel="noreferrer" className="float-btn float-wa" title="Join WhatsApp">
          {/* WhatsApp Icon SVG */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
      <Footer />
    </>
  );
}
export default App;
