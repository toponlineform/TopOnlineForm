import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// OLD: import { jobsData } from './jobsData'; - यह अब अनावश्यक है, क्योंकि jobsData अब सिर्फ़ Search Index है।
import SEO from './SEO';

function CategoryPage({ category, title }) {
  const [jobs, setJobs] = useState([]); // Dynamic Data Storage
  const [loading, setLoading] = useState(true); // Loading State

  useEffect(() => {
    setLoading(true); // जब भी category बदलती है, loading शुरू करें
    let dataImportPromise;
    
    // 1. Category के आधार पर सही फ़ाइल चुनें
    if (category === "Latest Jobs") {
      dataImportPromise = import('./myLjobs').then(mod => mod.latestJobs);
    } else if (category === "Result") {
      dataImportPromise = import('./myRslt').then(mod => mod.results);
    } else if (category === "Admit Card") {
      dataImportPromise = import('./myAcards').then(mod => mod.admitCards);
    } else if (category === "Answer Key") {
      dataImportPromise = import('./myAkey').then(mod => mod.newAnswerKeys);
    } else if (category === "Syllabus") {
      dataImportPromise = import('./mySyl').then(mod => mod.syllabusData);
    } else if (category === "Previous Paper") {
      dataImportPromise = import('./myPreviouspapers').then(mod => mod.previousPapers);
    } else if (category === "Admission") {
      dataImportPromise = import('./myAdmission').then(mod => mod.admissionData);
    } else {
      setJobs([]);
      setLoading(false);
      return;
    }

    // 2. फ़ाइल को Dynamically लोड करें, सॉर्ट करें, और State अपडेट करें
    dataImportPromise.then(jobsDataArray => {
        // हम सीधे उस फ़ाइल को लोड कर रहे हैं जिसमें केवल यही कैटेगरी है,
        // इसलिए .filter() की ज़रूरत नहीं है, बस sorting कर रहे हैं।
        const sortedJobs = jobsDataArray.sort((a, b) => b.id - a.id);
        
        setJobs(sortedJobs);
        setLoading(false);
    }).catch(error => {
        console.error(`Error loading ${category} data:`, error);
        setLoading(false);
    });

  }, [category]); // 'category' बदलने पर ही यह कोड फिर से चलेगा

  const seoDescription = `Find all latest ${title} updates here. Check list of all announcements related to ${category}.`;

  // 3. Loading Screen
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{color: '#ab1e1e'}}>Loading {title}...</h2>
        <p>Fetching the latest updates, please wait...</p>
      </div>
    );
  }
  
  // 4. Final Render (filteredJobs के बजाय jobs का उपयोग करें)
  return (
    <div className="main-grid" style={{ display: 'block' }}> 
      <SEO
        title={`${title} List 2025 | TopOnlineForm`}
        description={seoDescription}
        keywords={`${category}, latest ${category} 2025, sarkari ${category.toLowerCase()}`}
        url={`https://toponlineform.com/${category.toLowerCase().replace(' ', '-')}`}
      />
      
      <div className="box-column" style={{ maxWidth: '800px', margin: '20px auto' }}>
        <div className="box-header" style={{ fontSize: '22px' }}>{title} (All Updates)</div>
        <ul className="box-list">
          {jobs.length > 0 ? (
            jobs.map(job => (
              <li key={job.id} style={{ padding: '15px' }}>
                <Link to={`/${job.slug}`} style={{ fontSize: '16px', fontWeight: '500' }}>
                  {job.shortTitle ? job.shortTitle : job.title}
                </Link>
              </li>
            ))
          ) : (
            <li style={{ padding: '20px', textAlign: 'center' }}>No updates found in this category yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CategoryPage;
