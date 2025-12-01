import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData';
import SEO from './SEO';

function CategoryPage({ category, title }) {
  // 1. Filter jobs by category
  // 2. Sort them: Newest First (Descending Order by ID)
  const filteredJobs = jobsData
    .filter(job => job.category === category)
    .sort((a, b) => b.id - a.id); 

  const seoDescription = `Find all latest ${title} updates here. Check list of all announcements related to ${category}.`;

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
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <li key={job.id} style={{ padding: '15px' }}>
                <Link to={`/${job.slug}`} style={{ fontSize: '16px', fontWeight: '500' }}>
                  {/* --- FIX: Use Short Title if available --- */}
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
