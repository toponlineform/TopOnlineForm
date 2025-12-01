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

// --- Home Component (SORTED NEWEST FIRST) ---
function Home() {
  // Helper to sort by ID descending (Newest First)
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
  const job = jobsData.find((j) => j.slug === slug
