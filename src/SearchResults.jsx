import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { jobsData } from './jobsData';
import SEO from './SEO';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ''; // URL se 'q' parameter nikalo
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      // Filter Logic: Check Title, Short Info, or Category
      const filtered = jobsData.filter(job => 
        job.title.toLowerCase().includes(lowerQuery) ||
        job.shortInfo.toLowerCase().includes(lowerQuery) ||
        job.category.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="main-grid" style={{ display: 'block' }}>
      <SEO 
        title={`Search Results for "${query}" | TopOnlineForm`}
        description={`Search results for ${query}. Find latest govt jobs, admit cards, and results matching your search.`}
        keywords="search jobs, govt job search, sarkari result search"
        url={`https://toponlineform.com/search?q=${query}`}
      />

      <div className="box-column" style={{ maxWidth: '800px', margin: '20px auto' }}>
        <div className="box-header" style={{ fontSize: '20px' }}>
          Search Results for: "{query}"
        </div>
        
        <ul className="box-list">
          {results.length > 0 ? (
            results.map(job => (
              <li key={job.id} style={{ padding: '15px' }}>
                <Link to={`/${job.slug}`} style={{ fontSize: '16px', fontWeight: '500', display:'block' }}>
                  {job.shortTitle || job.title}
                </Link>
                <div style={{fontSize: '12px', color: '#666', marginTop:'5px'}}>
                   {job.category} | Post Date: {job.postDate}
                </div>
              </li>
            ))
          ) : (
            <li style={{ padding: '30px', textAlign: 'center', color: 'red' }}>
              No results found for "<strong>{query}</strong>". <br/>
              <span style={{color: '#333', fontSize: '14px'}}>Try checking your spelling or use general terms like "SSC", "Police", "Railway".</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;
