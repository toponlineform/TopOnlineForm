// --- Home ---
function Home() {
  const navigate = useNavigate();
  const [gridSearch, setGridSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [homeJobs, setHomeJobs] = useState({});

  const sortNewest = (a, b) => b.id - a.id;

  // ✨ Tools Banner Component
  const ToolsBanner = () => (
    <div style={{ 
      gridColumn: '1 / -1', // 🔥 YE WALI LINE MAGIC KAREGI (Full Width & Top)
      width: '100%', 
      marginBottom: '15px',
      marginTop: '5px' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '0 5px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🔥 Useful Tools <span style={{fontSize:'12px', background:'#ffcc00', padding:'2px 6px', borderRadius:'4px', color:'black'}}>New</span>
        </h3>
        <Link to="/tools" style={{ fontSize: '14px', color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>View All &rarr;</Link>
      </div>
      
      <div style={{ 
        display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px', 
        scrollbarWidth: 'none', msOverflowStyle: 'none' 
      }}>
        {[
          { icon: <Camera size={24} color="#007bff"/>, title: "Date on Photo", link: "/tools/date-on-photo", bg: "#e3f2fd" },
          { icon: <Briefcase size={24} color="#673ab7"/>, title: "Resume Builder", link: "/tools/resume-builder", bg: "#ede7f6" },
          { icon: <Keyboard size={24} color="#ef6c00"/>, title: "Typing Test", link: "/tools/typing-test", bg: "#fff3e0" },
          { icon: <Calculator size={24} color="#2e7d32"/>, title: "Age Calculator", link: "/tools/age-calculator", bg: "#e8f5e9" },
        ].map((tool, index) => (
          <Link to={tool.link} key={index} style={{ textDecoration: 'none' }}>
            <div style={{ 
              minWidth: '130px', background: 'white', padding: '15px', borderRadius: '12px', 
              border: '1px solid #eee', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
            }}>
              <div style={{ background: tool.bg, padding: '10px', borderRadius: '50%' }}>{tool.icon}</div>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#444' }}>{tool.title}</span>
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
      
      {/* ✅ Banner Ab Sabse Upar Aur Full Width Mein Aayega */}
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
