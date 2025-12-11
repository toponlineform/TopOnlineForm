// --- Home Component ---
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

  }, []);

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
      {/* Syllabus box जोड़ा गया है */}
      <JobBox title="Syllabus" jobs={homeJobs.syllabus} linkTo="/syllabus" /> 
    </div>
  );
}
