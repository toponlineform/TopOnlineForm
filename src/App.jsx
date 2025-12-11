import React, { useState, useEffect } from 'react'; // useEffect जोड़ा गया
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, X, ChevronDown } from 'lucide-react'; 
// NOTE: jobsData अब केवल एक Lightweight Search Index है, इसलिए इसका Import यहाँ सही है।
import { jobsData } from './jobsData'; 

// अन्य कंपोनेंट्स
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';
import CategoryPage from './CategoryPage';
import ActiveJobs from './ActiveJobs';
import SearchResults from './SearchResults';
import StatePage from './StatePage'; 
import WhatsAppPopup from './WhatsAppPopup'; 

// --- Navbar (NO CHANGES NEEDED, as jobsData is now the lightweight index) ---
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [suggestions, setSuggestions] = useState([]); 
  const [isMoreOpen, setIsMoreOpen] = useState(false); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 1) { 
      // jobsData (जो अब Search Index है) का उपयोग सर्च के लिए
      const filtered = jobsData.filter(job => 
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        (job.shortTitle && job.shortTitle.toLowerCase().includes(value.toLowerCase()))
      ).slice(0, 10); 
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setSuggestions([]);
      setIsSearchOpen(false); 
    }
  };

  const handleSuggestionClick = (slug) => {
    navigate(`/${slug}`);
    setSearchTerm("");
    setSuggestions([]);
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="sticky-top">
        <div className="header"><h1>TOP ONLINE FORM</h1><p>www.TopOnlineForm.com</p></div>
        <div className="navbar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '45px', padding: '0 10px', position: 'relative' }}>
          {!isSearchOpen ? (
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', position: 'relative' }}>
              <div className="nav-links" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/">Home</Link>
                <Link to="/active-jobs">Active Jobs</Link>
                <Link to="/latest-jobs">Latest Jobs</Link>
                <Link to="/results">Results</Link>
                <Link to="/admit-card">Admit Card</Link>
                <Link to="/answer-key">Answer Key</Link>
                <div className="dropdown" onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)} style={{position: 'relative', display: 'inline-block'}}>
                  <button onClick={() => setIsMoreOpen(!isMoreOpen)} style={{ background: 'transparent', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
                    More <ChevronDown size={16} style={{marginLeft: '5px'}}/>
                  </button>
                  {isMoreOpen && (
                    <div className="dropdown-content" style={{ position: 'absolute', backgroundColor: '#333', minWidth: '180px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1000, textAlign: 'left', top: '100%', left: '0' }}>
                      <Link to="/syllabus" style={{display: 'block', padding: '12px 16px', color: 'white', textDecoration: 'none', borderBottom: '1px solid #444'}}>Syllabus</Link>
                      <Link to="/admission" style={{display: 'block', padding: '12px 16px', color: 'white', textDecoration: 'none', borderBottom: '1px solid #444'}}>Admission</Link>
                      <Link to="/previous-papers" style={{display: 'block', padding: '12px 16px', color: 'white', textDecoration: 'none', borderBottom: '1px solid #444'}}>Previous Papers</Link>
                      <Link to="/states" style={{display: 'block', padding: '12px 16px', color: 'white', textDecoration: 'none'}}>State Wise Jobs</Link>
                    </div>
                  )}
                </div>
              </div>
              <button onClick={() => setIsSearchOpen(true)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', marginLeft: '15px', display: 'flex', alignItems: 'center' }} title="Search Jobs"><Search size={20} /></button>
            </div>
          ) : (
            <div style={{ width: '100%', maxWidth: '600px', position: 'relative' }}>
              <form onSubmit={handleSearch} className="grid-search-form" style={{display:'flex'}}>
                <input autoFocus type="text" placeholder="Search jobs (e.g. SSC, Railway)..." value={searchTerm} onChange={handleInputChange} style={{ flex: 1, padding: '8px', borderRadius: '4px 0 0 4px', border: 'none', outline: 'none', fontSize: '14px' }} />
                <button type="submit" style={{ padding: '8px 15px', background: '#ffcc00', color: 'black', border: 'none', borderRadius: '0 4px 4px 0', marginLeft: '0px', cursor: 'pointer', fontWeight: 'bold' }}>Go</button>
                <button type="button" onClick={() => { setIsSearchOpen(false); setSuggestions([]); setSearchTerm(""); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', marginLeft: '10px' }}><X size={24} /></button>
              </form>
              {suggestions.length > 0 && (
                <ul className="search-suggestions" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'white', border: '1px solid #ccc', listStyle: 'none', padding: 0, margin: 0, zIndex: 1001, maxHeight: '300px', overflowY: 'auto', borderRadius: '0 0 5px 5px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                  {suggestions.map((job) => (
                    <li key={job.id} onClick={() => handleSuggestionClick(job.slug)} style={{padding: '10px', borderBottom: '1px solid #eee', cursor: 'pointer', color: '#333', textAlign:'left'}}>
                      {job.shortTitle || job.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div> 
      <div className="clean-note"><p>✨ Welcome to TopOnlineForm.com — No Ads, Just Information. ✨</p></div>
    </>
  );
}

// --- Home Component (Updated for Dynamic Import) ---
function Home() {
  const navigate = useNavigate();
  const [gridSearch, setGridSearch] = useState("");
  const [loading, setLoading] = useState(true); // Loading State जोड़ा गया
  const [homeJobs, setHomeJobs] = useState({}); // सभी कैटेगरी का डेटा रखने के लिए नया State

  const sortNewest = (a, b) => b.id - a.id;

  const JobBox = ({ title, jobs, linkTo }) => (
    <div className="box-column">
      <div className="box-header">{title}</div>
      <ul className="box-list">
        {loading ? ( // Loading के दौरान यह दिखाएँ
          <li style={{padding:'10px', textAlign:'center', color:'#ab1e1e'}}>Loading...</li>
        ) : jobs && jobs.length > 0 ? jobs.map(job => (
          <li key={job.id}><Link to={`/${job.slug}`}>{job.shortTitle ? job.shortTitle : job.title}</Link></li>
        )) : <li style={{padding:'10px', textAlign:'center', color:'#666'}}>Coming Soon...</li>}
        
        {/* View More Link Loading के दौरान भी दिखता रहेगा */}
        <li style={{textAlign:'right'}}><Link to={linkTo} style={{fontWeight:'bold', fontSize:'13px'}}>View More...</Link></li>
      </ul>
    </div>
  );

  useEffect(() => {
    setLoading(true);
    
    // सभी आवश्यक डेटा फ़ाइलों को Dynamically लोड करें
    Promise.all([
      import('./myLjobs').then(mod => mod.latestJobs),
      import('./myAcards').then(mod => mod.admitCards),
      import('./myRslt').then(mod => mod.results),
      import('./myAkey').then(mod => mod.newAnswerKeys),
      import('./myAdmission').then(mod => mod.admissionData),
      import('./mySyl').then(mod => mod.syllabusData),
      import('./myPreviouspapers').then(mod => mod.previousPapers)
    ]).then(([
      latestJobsData, admitCardsData, resultsData, 
      answerKeysData, admissionsData, syllabusData, previousPapersData
    ]) => {
      
      // डेटा को सॉर्ट करें और स्टेट में सेव करें
      const sortAndSlice = (data) => data.sort(sortNewest).slice(0, 20); // 20 latest jobs/results/admit cards
      const sortAndSliceSmall = (data) => data.sort(sortNewest).slice(0, 7); // 7 for smaller boxes

      setHomeJobs({
        latestJobs: sortAndSlice(latestJobsData),
        admitCards: sortAndSlice(admitCardsData),
        results: sortAndSlice(resultsData),
        answerKeys: sortAndSliceSmall(answerKeysData),
        admissions: sortAndSliceSmall(admissionsData),
        syllabus: sortAndSliceSmall(syllabusData),
        previousPapers: sortAndSliceSmall(previousPapersData),
      });

      setLoading(false); // डेटा लोड होने के बाद Loading बंद करें
      
    }).catch(error => {
      console.error("Error loading Home page data:", error);
      setLoading(false);
    });

  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="main-grid">
      <SEO title="Sarkari Result 2025" description="Latest Govt Jobs" keywords="Sarkari Result" url="https://toponlineform.com/" />
      <div className="action-cell"><a href="https://whatsapp.com/channel/0029Vb7TcG06LwHoTXhZKn2D" target="_blank" className="social-btn whatsapp full-width">Join WhatsApp Group</a></div>
      <div className="action-cell"><a href="https://t.me/toponlineform" target="_blank" className="social-btn telegram full-width">Join Telegram Channel</a></div>
      <div className="action-cell">
         <form className="grid-search-form" onSubmit={(e) => { e.preventDefault(); if(gridSearch.trim()) navigate(`/search?q=${encodeURIComponent(gridSearch)}`); }}>
            <input type="text" placeholder="Search jobs..." value={gridSearch} onChange={(e) => setGridSearch(e.target.value)} />
            <button type="submit">Search</button>
          </form>
      </div>
      {/* HomeJobs State से डेटा पास करें */}
      <JobBox title="Latest Jobs" jobs={homeJobs.latestJobs} linkTo="/latest-jobs" />
      <JobBox title="Admit Card" jobs={homeJobs.admitCards} linkTo="/admit-card" />
      <JobBox title="Result" jobs={homeJobs.results} linkTo="/results" />
      <JobBox title="Answer Key" jobs={homeJobs.answerKeys} linkTo="/answer-key" />
      <JobBox title="Admission" jobs={homeJobs.admissions} linkTo="/admission" />
      <JobBox title="Previous Paper" jobs={homeJobs.previousPapers} linkTo="/previous-papers" />
      {/* Note: Syllabus box original Home component में मिसिंग था, 
          लेकिन क्योंकि आपने डेटा प्रदान किया है, मैंने इसे जोड़ा है। 
          अगर आपको यह नहीं चाहिए तो इसे हटा दें। */}
      <JobBox title="Syllabus" jobs={homeJobs.syllabus} linkTo="/syllabus" /> 
    </div>
  );
}

// --- Job Details (Updated for Dynamic Import) ---
function JobDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [job, setJob] = useState(null); // Job Data State
  const [loading, setLoading] = useState(true); // Loading State
  const [error, setError] = useState(false); // Error State

  // Dynamic Loading Logic
  useEffect(() => {
    setLoading(true);
    setError(false);
    
    // सभी डेटा फ़ाइलों को एक साथ Load करें
    Promise.all([
      import('./myAkey').then(mod => mod.newAnswerKeys),
      import('./myLjobs').then(mod => mod.latestJobs),
      import('./myAcards').then(mod => mod.admitCards),
      import('./myRslt').then(mod => mod.results),
      import('./mySyl').then(mod => mod.syllabusData),
      import('./myPreviouspapers').then(mod => mod.previousPapers),
      import('./myAdmission').then(mod => mod.admissionData),
    ]).then(allDataArrays => {
      
      // सभी डेटा Arrays को एक साथ मिलाएँ (Temp variable)
      const allJobs = [].concat(...allDataArrays); 
      
      // Slug के आधार पर नौकरी खोजें
      const foundJob = allJobs.find((j) => j.slug === slug);
      
      if (foundJob) {
        setJob(foundJob);
      } else {
        setError(true); // Job नहीं मिली
      }
      setLoading(false);

    }).catch(e => {
      console.error("Failed to load JobDetails data:", e);
      setError(true); // Loading में Error
      setLoading(false);
    });

  }, [slug]);

  // --- RENDERING LOGIC ---
  
  // 1. Loading Screen
  if (loading) return (
    <div style={{textAlign:'center', padding: '50px'}}>
      <h2 style={{color: '#ab1e1e'}}>Loading Job Details...</h2>
      <p>Please wait while we fetch the complete notification.</p>
    </div>
  );

  // 2. Not Found Screen
  if (error || !job) return (
    <div style={{textAlign:'center', padding: '50px'}}>
      <h2>Job Not Found</h2>
      <p>The job you are looking for might have been removed or the link is incorrect.</p>
      <button onClick={() => navigate('/')} style={{marginTop: '10px', padding: '10px 20px', background: '#ab1e1e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Go Home</button>
    </div>
  );
  
  // (Note: The rest of the JobDetails content rendering functions (convertDate, 
  // formatHeader, RenderSmartTable, RenderTable) remain unchanged, 
  // using the now loaded 'job' object.)

  const convertDate = (dateStr) => {
    if(!dateStr) return new Date().toISOString().split('T')[0];
    const parts = dateStr.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`; 
  };
  const lastDateItem = job.importantDates?.find(d => d.label.toLowerCase().includes('last'));
  const validThrough = lastDateItem ? convertDate(lastDateItem.value) : null;
  const datePosted = job.postDate ? convertDate(job.postDate) : new Date().toISOString().split('T')[0];

  let stepsHeader = "How to Apply";
  const cat = job.category.toLowerCase();
  
  if (cat.includes("admit card")) { stepsHeader = "How to Download Admit Card"; } 
  else if (cat.includes("result")) { stepsHeader = "How to Check Result"; } 
  else if (cat.includes("answer key") || cat.includes("syllabus") || cat.includes("paper")) { stepsHeader = "How to Download"; } 
  else if (cat.includes("admission")) { stepsHeader = "How to Apply for Admission"; }

  const jobSchema = {
    "@context": "https://schema.org/", "@type": "JobPosting", "title": job.title, "description": job.shortInfo, "datePosted": datePosted, "validThrough": validThrough || datePosted,
    "hiringOrganization": { "@type": "Organization", "name": "Top Online Form", "sameAs": "https://toponlineform.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "IN" } }
  };

  let faqSchema = null;
  if (job.faqs && job.faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": job.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    };
  }

  const formatHeader = (key) => {
    const upperKeys = ["ur", "obc", "sc", "st", "ews", "pwbd", "esm", "gen", "ph"];
    if (upperKeys.includes(key.toLowerCase())) { return key.toUpperCase(); }
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  };

  const RenderSmartTable = ({ data, title }) => {
    if (!data || data.length === 0) return null;
    const isPet = Object.keys(data[0]).includes('activity');
    const totalQuestions = data.reduce((sum, item) => sum + (parseFloat(item.questions) || 0), 0);
    const totalMarks = data.reduce((sum, item) => sum + (parseFloat(item.marks) || 0), 0);
    const showTotalRow = !isPet && (totalQuestions > 0 || totalMarks > 0);

    return (
      <div style={{marginBottom: '20px'}}>
         {title && <div className="section-header" style={{fontSize:'16px', marginTop:'15px', marginBottom:'0'}}>{title}</div>}
         <div style={{overflowX: 'auto'}}>
           <table style={{minWidth: '100%'}}>
             <thead>
               <tr style={{background: '#f2f2f2'}}>
                 {isPet ? <><th>Activity</th><th>Male</th><th>Female</th></> : <><th>Subject</th><th>Questions</th><th>Marks</th></>}
               </tr>
             </thead>
             <tbody>
               {data.map((row, i) => (
                 <tr key={i}>
                   {isPet ? <><td>{row.activity}</td><td>{row.male}</td><td>{row.female}</td></> : <><td>{row.subject}</td><td>{row.questions}</td><td>{row.marks}</td></>}
                 </tr>
               ))}
               {showTotalRow && <tr style={{fontWeight: 'bold', background: '#e9e9e9'}}><td>Total</td><td>{totalQuestions}</td><td>{totalMarks}</td></tr>}
             </tbody>
           </table>
         </div>
      </div>
    );
  };

  const RenderTable = ({ data, title, autoTotal = true, overrideFirstCol, showNote }) => {
    if (!data || data.length === 0) return null;
    const headers = Object.keys(data[0]);
    
    let showTotal = false;
    let colTotals = {};

    if (autoTotal) {
        headers.forEach(header => {
            // ✅ FIX: Don't calculate totals for Text Columns like Eligibility or Name
            const h = header.toLowerCase();
            if (h.includes("eligibility") || h.includes("name") || h.includes("qualification")) return;

            const sum = data.reduce((acc, row) => acc + (parseFloat(row[header]) || 0), 0);
            if (sum > 0) { colTotals[header] = sum; showTotal = true; }
        });
    }

    return (
      <div style={{marginBottom: '20px'}}>
         {title && <div className="section-header" style={{fontSize:'16px', marginTop:'15px', marginBottom:'0'}}>{title}</div>}
         <div style={{overflowX: 'auto'}}>
           <table style={{minWidth: '100%'}}>
             <thead>
               <tr style={{background: '#f2f2f2'}}>
                 {headers.map((h, i) => (
                    <th key={i}>{i === 0 && overrideFirstCol ? overrideFirstCol : formatHeader(h)}</th>
                 ))}
               </tr>
             </thead>
             <tbody>
               {data.map((row, i) => (
                 <tr key={i}>{headers.map((h, j) => <td key={j}>{row[h]}</td>)}</tr>
               ))}
               {showTotal && (
                  <tr style={{fontWeight: 'bold', background: '#e9e9e9'}}>
                      {headers.map((h, i) => {
                          if (i === 0) return <td key={i} style={{color:'black'}}>Total</td>;
                          return <td key={i} style={{color:'red'}}>{colTotals[h] || "-"}</td>;
                      })}
                  </tr>
               )}
             </tbody>
           </table>
           
           {/* ✅ NOTE LOGIC */}
           {showNote && (
             <div style={{textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '5px', fontStyle: 'italic'}}>
               *Check detailed notification for more specific breakup.
             </div>
           )}
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
       
      {job.importantDates && job.importantDates.length > 0 && (
        <table>
          <tbody>
            <tr><th className="green-header" width="50%">Dates</th><th className="green-header" width="50%">Fees</th></tr>
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

      {job.vacancyDetails && job.vacancyDetails.length > 0 && <RenderTable data={job.vacancyDetails} title="Vacancy Details" />}
       
      {(job.stateWiseVacancy || job.zoneWiseGraduate || job.zoneWiseUG) && (
          <>
            {job.stateWiseVacancy && <RenderTable data={job.stateWiseVacancy} title={job.vacancyTableTitle || "State Wise Vacancy Details"} overrideFirstCol={job.vacancyColumnName} showNote={job.stateTableNote || job.tableNote} />}
            {job.zoneWiseGraduate && <RenderTable data={job.zoneWiseGraduate} title="Graduate Level Vacancy (Zone Wise)" overrideFirstCol={job.vacancyColumnName} showNote={job.graduateTableNote} />}
            {job.zoneWiseUG && <RenderTable data={job.zoneWiseUG} title="Undergraduate Level Vacancy (Zone Wise)" overrideFirstCol={job.vacancyColumnName} showNote={job.ugTableNote} />}
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
          {section.tableData ? <RenderTable data={section.tableData} title={section.title} autoTotal={false} showNote={section.note} /> : (<><div className="section-header">{section.title}</div><div style={{padding: '10px'}}>{section.text && <p style={{textAlign: 'justify', whiteSpace: 'pre-line'}}>{section.text}</p>}{section.list && (<ul style={{listStyleType: 'disc', marginLeft: '30px'}}>{section.list.map((li, i) => <li key={i} style={{marginBottom: '5px'}}>{li}</li>)}</ul>)}</div></>)}
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
        <Route path="/admission" element={<CategoryPage category="Admission" title="Admission Forms" />} />
        <Route path="/states" element={<StatePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <div className="floating-container">
        <a href="https://whatsapp.com/channel/0029Vb7TcG06LwHoTXhZKn2D" target="_blank" rel="noreferrer" className="float-btn float-wa" style={{ width: '60px', height: '60px' }} title="Join WhatsApp Group">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '32px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>
      <WhatsAppPopup />
      <Footer />
    </>
  );
}
export default App;
