import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // SEO Schema ke liye Import kiya
import { jobsData } from './jobsData';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';
import CategoryPage from './CategoryPage';
import ActiveJobs from './ActiveJobs';

// --- Navbar & Search Component ---
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.trim()) {
      alert("Search functionality coming soon for: " + searchTerm); 
    }
  };

  return (
    <>
      <div className="sticky-top">
        <div className="header">
          <h1>TOP ONLINE FORM</h1>
          <p>www.TopOnlineForm.com</p>
        </div>

        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/active-jobs">Active Jobs</Link>
          <Link to="/latest-jobs">Latest Jobs</Link>
          <Link to="/results">Results</Link>
          <Link to="/admit-card">Admit Card</Link>
          <Link to="/answer-key">Answer Key</Link>
          <Link to="/syllabus">Syllabus</Link>
        </div>
      </div> 

      <div className="clean-note">
        <p>✨ Welcome to TopOnlineForm.com — No Ads, Just Information. ✨</p>
      </div>
    </>
  );
}

// --- Home Component ---
function Home() {
  const latestJobs = jobsData.filter(j => j.category === "Latest Jobs").slice(0, 20);
  const admitCards = jobsData.filter(j => j.category === "Admit Card").slice(0, 20);
  const results = jobsData.filter(j => j.category === "Result").slice(0, 20);
  const answerKeys = jobsData.filter(j => j.category === "Answer Key").slice(0, 7);
  const syllabus = jobsData.filter(j => j.category === "Syllabus").slice(0, 7);
  const previousPapers = jobsData.filter(j => j.category === "Previous Paper").slice(0, 7);

  const JobBox = ({ title, jobs, linkTo }) => (
    <div className="box-column">
      <div className="box-header">{title}</div>
      <ul className="box-list">
        {jobs.length > 0 ? jobs.map(job => (
          <li key={job.id}><Link to={`/${job.slug}`}>{job.title}</Link></li>
        )) : <li style={{padding:'10px', textAlign:'center', color:'#666'}}>Coming Soon...</li>}
        <li style={{textAlign:'right'}}><Link to={linkTo} style={{fontWeight:'bold', fontSize:'13px'}}>View More...</Link></li>
      </ul>
    </div>
  );

  return (
    <div className="main-grid">
      <SEO title="Sarkari Result 2025" description="Latest Govt Jobs" keywords="Sarkari Result" url="https://toponlineform.com/" />
      
      {/* Action Row Inside Grid */}
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

// --- Job Details (WITH SCHEMA MARKUP) ---
function JobDetails() {
  const { slug } = useParams();
  const job = jobsData.find((j) => j.slug === slug);
  if (!job) return <h2 style={{textAlign:'center', marginTop:'20px'}}>Job Not Found</h2>;

  // 1. Date Converter Helper (27/10/2025 -> 2025-10-27)
  const convertDate = (dateStr) => {
    if(!dateStr) return new Date().toISOString().split('T')[0];
    const parts = dateStr.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // YYYY-MM-DD
  };

  // 2. Find Last Date for Schema
  const lastDateItem = job.importantDates.find(d => d.label.toLowerCase().includes('last'));
  const validThrough = lastDateItem ? convertDate(lastDateItem.value) : null;
  const datePosted = convertDate(job.postDate);

  // 3. Schema Object Construction (Google Jobs Code)
  const jobSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.shortInfo,
    "datePosted": datePosted,
    "validThrough": validThrough || datePosted,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Top Online Form",
      "sameAs": "https://toponlineform.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="job-container">
      <SEO title={job.title} description={job.shortInfo} keywords={job.title} url={`https://toponlineform.com/${job.slug}`} />
      
      {/* INJECT SCHEMA INTO HEAD (Adrishya Code for Google) */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      </Helmet>

      <h1 className="job-title">{job.title}</h1>
      <p style={{marginBottom:'10px', textAlign:'justify'}}><strong>Post Date : </strong> {job.postDate}</p>
      <p style={{marginBottom:'20px', textAlign:'justify'}}><strong>Short Info : </strong> {job.shortInfo}</p>
      
      {job.importantDates.length > 0 && (
        <table><tbody><tr><th className="green-header">Dates</th><th className="green-header">Fees</th></tr>
        <tr><td><ul>{job.importantDates.map((d,i)=><li key={i}><strong>{d.label}:</strong> {d.value}</li>)}</ul></td>
        <td><ul>{job.applicationFee.map((f,i)=><li key={i}><strong>{f.category}:</strong> {f.amount}</li>)}</ul></td></tr></tbody></table>
      )}
      
      {job.ageLimit && (<><div className="section-header">Age Limit</div><p style={{textAlign: 'center', border: '1px solid #000', padding: '10px'}}>{job.ageLimit}</p></>)}
      
      {job.vacancyDetails.length > 0 && (
        <>
          <div className="section-header">Vacancy Details</div>
          <table><thead><tr style={{background: '#f2f2f2'}}><th>Post Name</th><th>Total</th><th>Eligibility</th></tr></thead>
          <tbody>{job.vacancyDetails.map((item, index) => (<tr key={index}><td>{item.postName}</td><td>{item.totalPost}</td><td>{item.eligibility}</td></tr>))}</tbody></table>
        </>
      )}
      
      <div className="section-header">Important Links</div>
      <table className="important-links"><tbody>
        <tr><td><strong>Apply Online</strong></td><td align="center"><a href={job.links.applyOnline} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
        <tr><td><strong>Download Notification</strong></td><td align="center"><a href={job.links.notification} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
        <tr><td><strong>Official Website</strong></td><td align="center"><a href={job.links.officialWebsite} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
      </tbody></table>
    </div>
  );
}

function Footer() {
  return (
    <div style={{background: '#000', color: 'white', padding: '25px', textAlign: 'center', marginTop: '20px', borderTop: '3px solid #ab1e1e'}}>
      <div style={{marginBottom: '15px'}}>
        <Link to="/about" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>About Us</Link> | 
        <Link to="/contact" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Contact Us</Link> | 
        <Link to="/privacy" style={{color: 'white', margin: '0 10px', textDecoration:'none'}}>Privacy Policy</Link>
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<JobDetails />} />
        <Route path="/active-jobs" element={<ActiveJobs />} />
        <Route path="/latest-jobs" element={<CategoryPage category="Latest Jobs" title="All Latest Jobs" />} />
        <Route path="/results" element={<CategoryPage category="Result" title="All Results" />} />
        <Route path="/admit-card" element={<CategoryPage category="Admit Card" title="All Admit Cards" />} />
        <Route path="/answer-key" element={<CategoryPage category="Answer Key" title="All Answer Keys" />} />
        <Route path="/syllabus" element={<CategoryPage category="Syllabus" title="Syllabus & Exam Pattern" />} />
        <Route path="/previous-papers" element={<CategoryPage category="Previous Paper" title="Previous Year Papers" />} />
        <Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
