import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// ✅ Icons
import { Search, X, ChevronDown, Calculator, Camera, Briefcase, Keyboard, Image, FileText, PenTool, Printer, Percent } from 'lucide-react';
import { jobsData } from './jobsData'; // Search Index

// Components
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';
import CategoryPage from './CategoryPage';
import ActiveJobs from './ActiveJobs';
import SearchResults from './SearchResults';
import StatePage from './StatePage';
import WhatsAppPopup from './WhatsAppPopup';

// ✅ TOOLS IMPORTS
import ToolsPage from './ToolsPage';
import AgeCalculator from './tools/AgeCalculator';
import ImageResizer from './tools/ImageResizer';
import TypingTest from './tools/TypingTest';
import JpgToPdf from './tools/JpgToPdf';
import ResumeBuilder from './tools/ResumeBuilder';
import DateOnPhoto from './tools/DateOnPhoto';
import SignatureMaker from './tools/SignatureMaker';
import PassportPhoto from './tools/PassportPhoto';
import CgpaCalculator from './tools/CgpaCalculator';

// --- Navbar ---
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
                <Link to="/tools" style={{ color: '#ffcc00', fontWeight: 'bold' }}>Tools</Link>

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

// --- Home ---
function Home() {
  const navigate = useNavigate();
  const [gridSearch, setGridSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [homeJobs, setHomeJobs] = useState({});

  const sortNewest = (a, b) => b.id - a.id;

  // ✨ Perfect Scrollable Banner (Responsive)
  const ToolsBanner = () => (
    <div style={{ 
      gridColumn: '1 / -1', 
      width: '100%', 
      marginBottom: '20px',
      marginTop: '10px' 
    }}>
      <style>{`
        .tools-scroll-container::-webkit-scrollbar { display: none; }
        .tools-scroll-container { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', padding: '0 5px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🔥 Student Tools <span style={{fontSize:'12px', background:'#ffcc00', padding:'2px 6px', borderRadius:'4px', color:'black'}}>Free</span>
        </h3>
        <Link to="/tools" style={{ fontSize: '14px', color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>View All &rarr;</Link>
      </div>
      
      {/* LOGIC:
         - display: flex + overflowX: auto = Horizontal Scroll
         - minWidth: 95px = Mobile me 3.5 items dikhenge (approx 360px width)
         - Desktop me 1000px+ space hota hai, toh saare 9 items ek saath dikhenge.
      */}
      <div className="tools-scroll-container" style={{ 
        display: 'flex', 
        gap: '12px', 
        overflowX: 'auto', 
        paddingBottom: '10px',
        paddingLeft: '2px', 
        paddingRight: '2px',
        whiteSpace: 'nowrap'
      }}>
        {[
          { icon: <Briefcase size={24} color="#673ab7"/>, title: "Resume", link: "/tools/resume-builder", bg: "#ede7f6" },
          { icon: <Camera size={24} color="#007bff"/>, title: "Date Photo", link: "/tools/date-on-photo", bg: "#e3f2fd" },
          { icon: <Keyboard size={24} color="#ef6c00"/>, title: "Typing", link: "/tools/typing-test", bg: "#fff3e0" },
          { icon: <Calculator size={24} color="#2e7d32"/>, title: "Age Calc", link: "/tools/age-calculator", bg: "#e8f5e9" },
          { icon: <Image size={24} color="#1565c0"/>, title: "Resizer", link: "/tools/image-resizer", bg: "#e3f2fd" },
          { icon: <PenTool size={24} color="#43a047"/>, title: "Sign Maker", link: "/tools/signature-maker", bg: "#e8f5e9" },
          { icon: <Printer size={24} color="#006064"/>, title: "Passport", link: "/tools/passport-photo-maker", bg: "#e0f7fa" },
          { icon: <FileText size={24} color="#c2185b"/>, title: "To PDF", link: "/tools/jpg-to-pdf", bg: "#fce4ec" },
          { icon: <Percent size={24} color="#ff5722"/>, title: "CGPA %", link: "/tools/cgpa-calculator", bg: "#fbe9e7" },
        ].map((tool, index) => (
          <Link to={tool.link} key={index} style={{ textDecoration: 'none' }}>
            <div style={{ 
              minWidth: '95px', // ✅ Mobile pe 3-4 items dikhenge, Desktop pe sab fail jayenge
              background: 'white', padding: '15px 5px', borderRadius: '12px', 
              border: '1px solid #eee', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
              height: '100%', flexShrink: 0
            }}>
              <div style={{ background: tool.bg, padding: '10px', borderRadius: '50%' }}>{tool.icon}</div>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#444' }}>{tool.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const JobBox = ({ title, jobs, linkTo }) => (
    <div className="box-column">
      <div className="box-header">{title}</div>
      <ul className="box-list">
        {loading ? (
          <li style={{padding:'10px', textAlign:'center', color:'#ab1e1e'}}>Loading...</li>
        ) : jobs && jobs.length > 0 ? jobs.map(job => (
          <li key={job.id}><Link to={`/${job.slug}`}>{job.shortTitle ? job.shortTitle : job.title}</Link></li>
        )) : <li style={{padding:'10px', textAlign:'center', color:'#666'}}>Coming Soon...</li>}
        <li style={{textAlign:'right'}}><Link to={linkTo} style={{fontWeight:'bold', fontSize:'13px'}}>View More...</Link></li>
      </ul>
    </div>
  );

  useEffect(() => {
    setLoading(true);
    // ✅ No .js extension (Safe Mode)
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
      
      const sortAndSlice = (data) => (data || []).sort(sortNewest).slice(0, 20);
      const sortAndSliceSmall = (data) => (data || []).sort(sortNewest).slice(0, 7);

      setHomeJobs({
        latestJobs: sortAndSlice(latestJobsData),
        admitCards: sortAndSlice(admitCardsData),
        results: sortAndSlice(resultsData),
        answerKeys: sortAndSliceSmall(answerKeysData),
        admissions: sortAndSliceSmall(admissionsData),
        syllabus: sortAndSliceSmall(syllabusData),
        previousPapers: sortAndSliceSmall(previousPapersData),
      });
      setLoading(false);
    }).catch(error => {
      console.error("Error loading Home data:", error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="main-grid">
      <SEO title="Sarkari Result 2025" description="Latest Govt Jobs" keywords="Sarkari Result" url="https://toponlineform.com/" />
      
      {/* ✅ Banner Ab Perfect Horizontal Scroll Hai */}
      <ToolsBanner />

      <div className="action-cell"><a href="https://whatsapp.com/channel/0029Vb7TcG06LwHoTXhZKn2D" target="_blank" className="social-btn whatsapp full-width">Join WhatsApp Group</a></div>
      <div className="action-cell"><a href="https://t.me/toponlineform" target="_blank" className="social-btn telegram full-width">Join Telegram Channel</a></div>
      <div className="action-cell">
         <form className="grid-search-form" onSubmit={(e) => { e.preventDefault(); if(gridSearch.trim()) navigate(`/search?q=${encodeURIComponent(gridSearch)}`); }}>
            <input type="text" placeholder="Search jobs..." value={gridSearch} onChange={(e) => setGridSearch(e.target.value)} />
            <button type="submit">Search</button>
         </form>
      </div>

      <JobBox title="Latest Jobs" jobs={homeJobs.latestJobs} linkTo="/latest-jobs" />
      <JobBox title="Admit Card" jobs={homeJobs.admitCards} linkTo="/admit-card" />
      <JobBox title="Result" jobs={homeJobs.results} linkTo="/results" />
      <JobBox title="Answer Key" jobs={homeJobs.answerKeys} linkTo="/answer-key" />
      <JobBox title="Admission" jobs={homeJobs.admissions} linkTo="/admission" />
      <JobBox title="Previous Paper" jobs={homeJobs.previousPapers} linkTo="/previous-papers" />
    </div>
  );
}

// --- Job Details ---
function JobDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    Promise.all([
      import('./myAkey').then(mod => mod.newAnswerKeys),
      import('./myLjobs').then(mod => mod.latestJobs),
      import('./myAcards').then(mod => mod.admitCards),
      import('./myRslt').then(mod => mod.results),
      import('./mySyl').then(mod => mod.syllabusData),
      import('./myPreviouspapers').then(mod => mod.previousPapers),
      import('./myAdmission').then(mod => mod.admissionData),
    ]).then(allDataArrays => {
      const allJobs = [].concat(...allDataArrays.map(arr => arr || []));
      const foundJob = allJobs.find((j) => j.slug === slug);
      if (foundJob) { setJob(foundJob); } else { setError(true); }
      setLoading(false);
    }).catch(e => {
      console.error("Failed to load JobDetails data:", e);
      setError(true);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div style={{textAlign:'center', padding: '50px'}}><h2 style={{color: '#ab1e1e'}}>Loading Job Details...</h2></div>;
  if (error || !job) return <div style={{textAlign:'center', padding: '50px'}}><h2>Job Not Found</h2><button onClick={() => navigate('/')} style={{padding: '10px', background: '#ab1e1e', color: 'white', border:'none', cursor:'pointer'}}>Go Home</button></div>;

  const isSimpleMode = job.category.toLowerCase().includes("syllabus") || 
                       job.category.toLowerCase().includes("previous") || 
                       job.category.toLowerCase().includes("paper");

  const relatedJobs = jobsData
    .filter(j => j.category === job.category && j.id !== job.id)
    .slice(0, 5);

  const convertDate = (dateStr) => {
    if(!dateStr) return new Date().toISOString().split('T')[0];
    try {
        const parts = dateStr.split('/');
        if(parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`;
        return new Date().toISOString().split('T')[0];
    } catch(e) { return new Date().toISOString().split('T')[0]; }
  };

  const lastDateItem = job.importantDates?.find(d => d.label.toLowerCase().includes('last'));
  const validThrough = lastDateItem ? convertDate(lastDateItem.value) : null;
  const datePosted = job.postDate ? convertDate(job.postDate) : new Date().toISOString().split('T')[0];

  let stepsHeader = "How to Apply";
  if (isSimpleMode) stepsHeader = "How to Download";
  else {
    const cat = job.category.toLowerCase();
    if (cat.includes("admit card")) stepsHeader = "How to Download Admit Card";
    else if (cat.includes("result")) stepsHeader = "How to Check Result";
    else if (cat.includes("answer key")) stepsHeader = "How to Download Answer Key";
    else if (cat.includes("admission")) stepsHeader = "How to Apply for Admission";
  }

  const shareText = `*${job.title}*\n\nCheck Details Here:\nhttps://toponlineform.com/${job.slug}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const formatHeader = (key) => {
    const upperKeys = ["ur", "obc", "sc", "st", "ews", "pwbd", "esm", "gen", "ph"];
    if (upperKeys.includes(key.toLowerCase())) return key.toUpperCase();
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  };

  const RenderSmartTable = ({ data, title }) => {
    if (!data || data.length === 0) return null;
    const isPet = Object.keys(data[0]).includes('activity');
    return (
      <div style={{marginBottom: '20px'}}>
         {title && <div className="section-header" style={{fontSize:'16px', marginTop:'15px', marginBottom:'0'}}>{title}</div>}
         <div style={{overflowX: 'auto'}}>
           <table style={{minWidth: '100%'}}>
             <thead><tr style={{background: '#f2f2f2'}}>{isPet ? <><th>Activity</th><th>Male</th><th>Female</th></> : <><th>Subject</th><th>Questions</th><th>Marks</th></>}</tr></thead>
             <tbody>{data.map((row, i) => <tr key={i}>{isPet ? <><td>{row.activity}</td><td>{row.male}</td><td>{row.female}</td></> : <><td>{row.subject}</td><td>{row.questions}</td><td>{row.marks}</td></>}</tr>)}</tbody>
           </table>
         </div>
      </div>
    );
  };

  const RenderTable = ({ data, title, autoTotal = true, overrideFirstCol, showNote, skipCols = [] }) => {
    if (!data || data.length === 0) return null;
    const headers = Object.keys(data[0]);
    let showTotal = false;
    let colTotals = {};

    if (autoTotal) {
        headers.forEach(header => {
            if (skipCols.includes(header)) return;
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
             <thead><tr style={{background: '#f2f2f2'}}>{headers.map((h, i) => <th key={i}>{i === 0 && overrideFirstCol ? overrideFirstCol : formatHeader(h)}</th>)}</tr></thead>
             <tbody>
               {data.map((row, i) => <tr key={i}>{headers.map((h, j) => <td key={j}>{row[h]}</td>)}</tr>)}
               {showTotal && <tr style={{fontWeight: 'bold', background: '#e9e9e9'}}>{headers.map((h, i) => i === 0 ? <td key={i} style={{color:'black'}}>Total</td> : <td key={i} style={{color:'red'}}>{colTotals[h] || "-"}</td>)}</tr>}
             </tbody>
           </table>
           {showNote && <div style={{textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '5px', fontStyle: 'italic'}}>*Check detailed notification for more specific breakup.</div>}
         </div>
      </div>
    );
  };

  return (
    <div className="job-container">
      <div style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link>
        {' > '}
        <span style={{ color: '#444' }}>{job.category}</span>
        {' > '}
        <span style={{ color: '#888' }}>{job.shortTitle || job.title.substring(0, 20) + "..."}</span>
      </div>

      <SEO 
        title={job.title} 
        description={job.shortInfo} 
        keywords={`${job.title}, ${job.shortTitle}, Sarkari Result, ${job.state || 'India'} Jobs`} 
        url={`https://toponlineform.com/${job.slug}`}
        postDate={datePosted}
        lastDate={validThrough}
        salary={job.salary}
        vacancy={job.vacancyDetails?.reduce((acc, curr) => acc + (parseInt(curr.totalPost) || 0), 0) || job.totalPost}
        location={job.state}
        type="JobPosting"
        faqs={job.faqs}
      />

      <h1 className="job-title">{job.title}</h1>
      {job.postDate && (<p style={{marginBottom:'10px', textAlign:'justify'}}><strong>Post Date : </strong> {job.postDate}</p>)}
      <p style={{marginBottom:'20px', textAlign:'justify'}}><strong>Short Info : </strong> {job.shortInfo}</p>
       
      {!isSimpleMode && job.importantDates && job.importantDates.length > 0 && (
        <table><tbody><tr><th className="green-header" width="50%">Dates</th><th className="green-header" width="50%">Fees</th></tr><tr><td><ul>{job.importantDates.map((d, i) => <li key={i}><strong>{d.label}:</strong> {d.value}</li>)}</ul></td><td><ul>{job.applicationFee ? job.applicationFee.map((f, i) => <li key={i}><strong>{f.category}:</strong> {f.amount}</li>) : <li>Check Notification</li>}</ul></td></tr></tbody></table>
      )}
       
      {!isSimpleMode && job.ageLimit && (<><div className="section-header">Age Limit</div><p style={{textAlign: 'center', border: '1px solid #000', padding: '10px'}}>{job.ageLimit}</p>{job.ageRelaxation && (<div style={{marginTop: '15px', padding: '0 10px'}}><strong>Age Relaxation:</strong><ul style={{listStyleType: 'disc', marginLeft: '30px', marginTop: '5px'}}>{job.ageRelaxation.map((item, index) => <li key={index} style={{marginBottom: '5px'}}>{item}</li>)}</ul></div>)}</>)}

      {!isSimpleMode && job.vacancyDetails && <RenderTable data={job.vacancyDetails} title="Vacancy Details" />}
      
      {!isSimpleMode && (job.stateWiseVacancy || job.zoneWiseGraduate) && (<>{job.stateWiseVacancy && <RenderTable data={job.stateWiseVacancy} title={job.vacancyTableTitle} overrideFirstCol={job.vacancyColumnName} showNote={job.stateTableNote} skipCols={job.skipTotalFor} />}{job.zoneWiseGraduate && <RenderTable data={job.zoneWiseGraduate} title="Graduate Level Vacancy" overrideFirstCol={job.vacancyColumnName} />}</>)}

      {!isSimpleMode && job.salary && (<><div className="section-header">Pay Scale / Salary</div><div style={{textAlign: 'center', border: '1px solid #000', padding: '15px', fontWeight: 'bold', fontSize: '16px', backgroundColor: '#f9f9f9', color: '#008000'}}>{job.salary}</div></>)}
      {!isSimpleMode && job.salaryDetails && <RenderTable data={job.salaryDetails} title="Post Wise Salary / Pay Level" autoTotal={false} />}

      {job.selectionProcess && (<><div className="section-header">Selection Process</div><ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.selectionProcess.map((item, index) => <li key={index} style={{marginBottom: '5px'}}><strong>{item}</strong></li>)}</ol></>)}

      {job.examPattern && (
        <>
          <div className="section-header">{(job.examPattern.pet || (job.examPattern.stages && job.examPattern.stages.some(s => s.type === 'pet'))) ? "Exam Pattern & Physical Test" : "Exam Pattern"}</div>
          <div style={{padding: '10px'}}>
            {job.examPattern.details && <ul style={{listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px'}}>{job.examPattern.details.map((item, i) => <li key={i} style={{marginBottom: '5px'}}>{item}</li>)}</ul>}
            {job.examPattern.table && <RenderSmartTable data={job.examPattern.table} />}
            {job.examPattern.tier1 && <RenderSmartTable data={job.examPattern.tier1} title="Tier-I Exam Pattern" />}
            {job.examPattern.tier2 && <RenderSmartTable data={job.examPattern.tier2} title="Tier-II Exam Pattern" />}
            {job.examPattern.cbt1 && <RenderSmartTable data={job.examPattern.cbt1} title={job.examPattern.cbt1Title || "CBT-1 Pattern"} />}
            {job.examPattern.cbt2 && <RenderSmartTable data={job.examPattern.cbt2} title={job.examPattern.cbt2Title || "CBT-2 Pattern"} />}
            {job.examPattern.pet && <RenderSmartTable data={job.examPattern.pet} title="Physical Efficiency Test (PET)" />}
            {job.examPattern.stages && job.examPattern.stages.map((stage, index) => (<RenderSmartTable key={index} data={stage.data} title={stage.title} />))}
          </div>
        </>
      )}

      {job.extraSections && job.extraSections.map((section, index) => (<div key={index}>{section.tableData ? <RenderTable data={section.tableData} title={section.title} autoTotal={false} /> : (<><div className="section-header">{section.title}</div><div style={{padding: '10px'}}>{section.text && <p style={{textAlign: 'justify', whiteSpace: 'pre-line'}}>{section.text}</p>}{section.list && <ul style={{listStyleType: 'disc', marginLeft: '30px'}}>{section.list.map((li, i) => <li key={i} style={{marginBottom: '5px'}}>{li}</li>)}</ul>}</div></>)}</div>))}

      {job.howToApply && (<><div className="section-header">{stepsHeader}</div><ol style={{marginLeft: '30px', padding: '10px 0'}}>{job.howToApply.map((item, index) => <li key={index} style={{marginBottom: '10px'}}>{item}</li>)}</ol></>)}
      
      <div className="section-header">{isSimpleMode ? "Download Links" : "Important Links"}</div>
      <table className="important-links"><tbody>{job.links && job.links.map((link, index) => (<tr key={index}><td><strong>{link.title}</strong></td><td align="center"><a href={link.url} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>))}</tbody></table>
      
      {job.faqs && (<><div className="section-header">FAQs</div><div style={{padding: '15px', border: '1px solid #ddd', marginTop: '10px'}}>{job.faqs.map((faq, index) => (<div key={index} style={{marginBottom: '15px'}}><div style={{fontWeight: 'bold', color: '#d32f2f', marginBottom: '5px'}}>Q.{index + 1}: {faq.question}</div><div style={{color: '#333'}}>Ans: {faq.answer}</div></div>))}</div></>)}

      <div style={{ margin: '30px 0', textAlign: 'center' }}>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{backgroundColor: '#25D366', color: 'white', padding: '12px 24px', fontSize: '18px', fontWeight: 'bold', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
           Share on WhatsApp ✈️
        </a>
      </div>

      {relatedJobs.length > 0 && (
        <div style={{ marginTop: '40px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '20px', color: '#d32f2f', marginBottom: '15px', borderLeft: '4px solid #d32f2f', paddingLeft: '10px' }}>You May Also Like</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {relatedJobs.map((rJob) => (
              <li key={rJob.id} style={{ marginBottom: '12px', borderBottom: '1px dashed #ccc', paddingBottom: '8px' }}>
                <Link to={`/${rJob.slug}`} style={{ textDecoration: 'none', color: '#000', fontSize: '16px', display: 'block' }} onClick={() => window.scrollTo(0, 0)}>
                  👉 <span style={{ color: '#007bff', fontWeight: '500' }}>{rJob.shortTitle || rJob.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (<div style={{background: '#000', color: 'white', padding: '25px', textAlign: 'center', marginTop: '20px', borderTop: '3px solid #ab1e1e'}}><div style={{marginBottom: '15px'}}><Link to="/about" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>About Us</Link> | <Link to="/contact" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Contact Us</Link> | <Link to="/privacy" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Privacy Policy</Link></div><p style={{fontWeight: 'bold', marginBottom: '10px'}}>Copyright © 2025 TopOnlineForm.com. All Rights Reserved.</p></div>);
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
        
        {/* ✅ TOOLS ROUTES */}
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/age-calculator" element={<AgeCalculator />} />
        <Route path="/tools/image-resizer" element={<ImageResizer />} />
        <Route path="/tools/typing-test" element={<TypingTest />} />
        <Route path="/tools/jpg-to-pdf" element={<JpgToPdf />} />
        <Route path="/tools/resume-builder" element={<ResumeBuilder />} />
        <Route path="/tools/date-on-photo" element={<DateOnPhoto />} />
        <Route path="/tools/signature-maker" element={<SignatureMaker />} />
        <Route path="/tools/passport-photo-maker" element={<PassportPhoto />} />
        <Route path="/tools/cgpa-calculator" element={<CgpaCalculator />} />
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
