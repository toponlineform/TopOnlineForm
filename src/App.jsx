// --- Job Details ---
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
  
  if (loading) return (
    <div style={{textAlign:'center', padding: '50px'}}>
      <h2 style={{color: '#ab1e1e'}}>Loading Job Details...</h2>
      <p>Please wait while we fetch the complete notification.</p>
    </div>
  );

  if (error || !job) return (
    <div style={{textAlign:'center', padding: '50px'}}>
      <h2>Job Not Found</h2>
      <p>The job you are looking for might have been removed or the link is incorrect.</p>
      <button onClick={() => navigate('/')} style={{marginTop: '10px', padding: '10px 20px', background: '#ab1e1e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Go Home</button>
    </div>
  );
  
  // (यहां से नीचे का सारा कोड, जिसमें स्कीमा और रेंडरिंग लॉजिक है, 
  //  वह पहले जैसा ही रहेगा, लेकिन अब वह 'job' state पर निर्भर करेगा)

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
// ...
}

function App() {
// ...
}

export default App;
