import React, { useState, useRef } from 'react';
import SEO from '../SEO';
import { Download, Plus, Trash2, Printer, Palette } from 'lucide-react';
import './ResumeBuilder.css'; // Importing Custom CSS

const ResumeBuilder = () => {
  // --- STATES ---
  const [themeColor, setThemeColor] = useState('#2c3e50');
  
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Rohit Sharma',
    role: 'Software Developer',
    email: 'rohit@example.com',
    phone: '+91 98765 43210',
    address: 'New Delhi, India',
    linkedin: 'linkedin.com/in/rohit',
    summary: 'Passionate developer with 3+ years of experience in building scalable web applications using React and Node.js. Dedicated to writing clean, efficient code.'
  });

  const [experience, setExperience] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Solutions', duration: '2022 - Present', desc: 'Developed responsive websites using React.js. Improved site performance by 40%.' },
  ]);

  const [education, setEducation] = useState([
    { id: 1, degree: 'B.Tech in Computer Science', college: 'Delhi University', year: '2018 - 2022', grade: '8.5 CGPA' },
  ]);

  const [skills, setSkills] = useState(['React.js', 'JavaScript', 'CSS', 'Node.js', 'Git']);
  const [newSkill, setNewSkill] = useState('');

  // --- HANDLERS ---
  const handlePrint = () => {
    window.print();
  };

  const handleInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  // Experience Logic
  const addExperience = () => {
    setExperience([...experience, { id: Date.now(), title: '', company: '', duration: '', desc: '' }]);
  };
  const removeExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };
  const updateExperience = (id, field, value) => {
    const updated = experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp);
    setExperience(updated);
  };

  // Education Logic
  const addEducation = () => {
    setEducation([...education, { id: Date.now(), degree: '', college: '', year: '', grade: '' }]);
  };
  const removeEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };
  const updateEducation = (id, field, value) => {
    const updated = education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu);
    setEducation(updated);
  };

  // Skills Logic
  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div style={{ background: '#f0f2f5', minHeight: '100vh', paddingBottom: '50px' }}>
      <SEO title="Free Professional Resume Builder - Download PDF" description="Create a professional, ATS-friendly resume in minutes. Live preview and PDF download." url="https://toponlineform.com/tools/resume-builder" />

      {/* Header Bar */}
      <div className="no-print" style={{ background: '#333', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ margin: 0, fontSize: '20px' }}>📄 Pro Resume Builder</h2>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <Palette size={18}/>
                <input type="color" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} style={{border:'none', width:'30px', height:'30px', cursor:'pointer', background:'transparent'}} title="Change Theme Color"/>
            </div>
            <button onClick={handlePrint} style={{ background: '#27ae60', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Printer size={18} /> Download PDF
            </button>
        </div>
      </div>

      <div className="resume-container">
        
        {/* --- LEFT: EDITOR SECTION --- */}
        <div className="editor-section no-print">
          
          {/* Personal Info */}
          <div className="section-title">Personal Information</div>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={personalInfo.name} onChange={handleInfoChange} />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input type="text" name="role" value={personalInfo.role} onChange={handleInfoChange} />
          </div>
          <div style={{display:'flex', gap:'10px'}}>
            <div className="form-group" style={{flex:1}}>
                <label>Email</label>
                <input type="text" name="email" value={personalInfo.email} onChange={handleInfoChange} />
            </div>
            <div className="form-group" style={{flex:1}}>
                <label>Phone</label>
                <input type="text" name="phone" value={personalInfo.phone} onChange={handleInfoChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Professional Summary</label>
            <textarea rows="4" name="summary" value={personalInfo.summary} onChange={handleInfoChange}></textarea>
          </div>

          {/* Experience */}
          <div className="section-title">
            Experience 
            <button onClick={addExperience} style={{background:'transparent', border:'none', color:'#007bff', cursor:'pointer'}}><Plus size={20}/></button>
          </div>
          {experience.map((exp) => (
            <div key={exp.id} style={{background:'#f9f9f9', padding:'10px', borderRadius:'8px', marginBottom:'10px', position:'relative'}}>
              <button onClick={() => removeExperience(exp.id)} style={{position:'absolute', top:'5px', right:'5px', background:'transparent', border:'none', color:'red', cursor:'pointer'}}><Trash2 size={16}/></button>
              <div className="form-group"><input placeholder="Job Title" value={exp.title} onChange={(e) => updateExperience(exp.id, 'title', e.target.value)} /></div>
              <div className="form-group"><input placeholder="Company Name" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} /></div>
              <div className="form-group"><input placeholder="Duration (e.g. 2022 - Present)" value={exp.duration} onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)} /></div>
              <div className="form-group"><textarea placeholder="Description" rows="2" value={exp.desc} onChange={(e) => updateExperience(exp.id, 'desc', e.target.value)} /></div>
            </div>
          ))}

          {/* Education */}
          <div className="section-title">
            Education
            <button onClick={addEducation} style={{background:'transparent', border:'none', color:'#007bff', cursor:'pointer'}}><Plus size={20}/></button>
          </div>
          {education.map((edu) => (
            <div key={edu.id} style={{background:'#f9f9f9', padding:'10px', borderRadius:'8px', marginBottom:'10px', position:'relative'}}>
              <button onClick={() => removeEducation(edu.id)} style={{position:'absolute', top:'5px', right:'5px', background:'transparent', border:'none', color:'red', cursor:'pointer'}}><Trash2 size={16}/></button>
              <div className="form-group"><input placeholder="Degree / Course" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} /></div>
              <div className="form-group"><input placeholder="College / University" value={edu.college} onChange={(e) => updateEducation(edu.id, 'college', e.target.value)} /></div>
              <div style={{display:'flex', gap:'10px'}}>
                 <input placeholder="Year" value={edu.year} onChange={(e) => updateEducation(edu.id, 'year', e.target.value)} style={{flex:1}} />
                 <input placeholder="Grade/CGPA" value={edu.grade} onChange={(e) => updateEducation(edu.id, 'grade', e.target.value)} style={{flex:1}} />
              </div>
            </div>
          ))}

          {/* Skills */}
          <div className="section-title">Skills</div>
          <div style={{display:'flex', gap:'10px', marginBottom:'10px'}}>
            <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add a skill (e.g. Java)" onKeyPress={(e) => e.key === 'Enter' && addSkill()} />
            <button onClick={addSkill} style={{background:themeColor, color:'white', border:'none', padding:'0 15px', borderRadius:'5px', cursor:'pointer'}}>Add</button>
          </div>
          <div style={{display:'flex', flexWrap:'wrap', gap:'8px'}}>
            {skills.map((skill, index) => (
                <span key={index} style={{background:'#e0e0e0', padding:'5px 10px', borderRadius:'15px', fontSize:'13px', display:'flex', alignItems:'center', gap:'5px'}}>
                    {skill} <Trash2 size={12} style={{cursor:'pointer'}} onClick={() => removeSkill(skill)}/>
                </span>
            ))}
          </div>

        </div>

        {/* --- RIGHT: PREVIEW SECTION (A4 PAPER) --- */}
        <div className="preview-section">
          <div className="resume-paper resume-preview-area" id="resume-to-print">
            
            {/* Header */}
            <div className="res-header" style={{ borderColor: themeColor }}>
              <h1 className="res-name" style={{ color: themeColor }}>{personalInfo.name}</h1>
              <p style={{ fontSize: '18px', margin: '5px 0', fontWeight: '500' }}>{personalInfo.role}</p>
              <div className="res-contact">
                <span>📧 {personalInfo.email}</span>
                <span>📱 {personalInfo.phone}</span>
                <span>📍 {personalInfo.address}</span>
              </div>
            </div>

            {/* Summary */}
            {personalInfo.summary && (
              <div style={{ marginBottom: '20px' }}>
                <p>{personalInfo.summary}</p>
              </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
              <div className="res-section">
                <div className="res-section-head" style={{ color: themeColor, borderColor: themeColor }}>Experience</div>
                {experience.map((exp) => (
                  <div key={exp.id} className="res-item">
                    <div className="res-item-title">{exp.title}</div>
                    <div className="res-item-subtitle">
                      <span>{exp.company}</span>
                      <span>{exp.duration}</span>
                    </div>
                    {exp.desc && <div className="res-list">{exp.desc}</div>}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="res-section">
                <div className="res-section-head" style={{ color: themeColor, borderColor: themeColor }}>Education</div>
                {education.map((edu) => (
                  <div key={edu.id} className="res-item">
                    <div className="res-item-title">{edu.degree}</div>
                    <div className="res-item-subtitle">
                      <span>{edu.college}</span>
                      <span>{edu.year}</span>
                    </div>
                    {edu.grade && <div style={{ fontSize: '13px', marginTop: '2px' }}>Grade: {edu.grade}</div>}
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div className="res-section">
                <div className="res-section-head" style={{ color: themeColor, borderColor: themeColor }}>Skills</div>
                <div className="res-skills">
                  {skills.map((skill, i) => (
                    <span key={i} className="res-skill-tag" style={{ border: `1px solid ${themeColor}`, color: themeColor, background: 'transparent' }}>{skill}</span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeBuilder;
