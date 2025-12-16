import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
// ✅ Import All Icons
import { Calculator, Image, Keyboard, FileText, Briefcase, Camera, PenTool, Printer, Percent } from 'lucide-react';

const ToolsPage = () => {
  const toolsList = [
    {
      id: 1,
      title: "Age Calculator",
      desc: "Calculate your exact age in years, months & days.",
      icon: <Calculator size={32} color="#2e7d32" />,
      link: "/tools/age-calculator",
      bg: "#e8f5e9", border: "#c8e6c9"
    },
    {
      id: 2,
      title: "Date on Photo",
      desc: "Add Name & Date (DOP) on photo for SSC/Govt exams.",
      icon: <Camera size={32} color="#007bff" />,
      link: "/tools/date-on-photo",
      bg: "#e3f2fd", border: "#90caf9"
    },
    {
      id: 3,
      title: "Resume Builder",
      desc: "Create professional ATS-friendly resumes in minutes.",
      icon: <Briefcase size={32} color="#673ab7" />, 
      link: "/tools/resume-builder",
      bg: "#ede7f6", border: "#d1c4e9"
    },
    {
      id: 4,
      title: "Image Resizer",
      desc: "Compress & Resize images (KB) for online forms.",
      icon: <Image size={32} color="#1565c0" />,
      link: "/tools/image-resizer",
      bg: "#e3f2fd", border: "#bbdefb"
    },
    {
      id: 5,
      title: "Typing Test",
      desc: "Check your WPM speed & accuracy online.",
      icon: <Keyboard size={32} color="#ef6c00" />,
      link: "/tools/typing-test",
      bg: "#fff3e0", border: "#ffe0b2"
    },
    {
      id: 6,
      title: "JPG to PDF",
      desc: "Convert images to PDF format instantly.",
      icon: <FileText size={32} color="#c2185b" />,
      link: "/tools/jpg-to-pdf",
      bg: "#fce4ec", border: "#f8bbd0"
    },
    {
      id: 7,
      title: "Signature Maker",
      desc: "Create transparent digital signature (E-Sign).",
      icon: <PenTool size={32} color="#43a047" />,
      link: "/tools/signature-maker",
      bg: "#e8f5e9", border: "#a5d6a7"
    },
    {
      id: 8,
      title: "Passport Photo Maker",
      desc: "Generate printable A4 sheet with 30 photos.",
      icon: <Printer size={32} color="#006064" />,
      link: "/tools/passport-photo-maker",
      bg: "#e0f7fa", border: "#80deea"
    },
    {
      id: 9,
      title: "CGPA to %",
      desc: "Convert CGPA to Percentage (CBSE/University).",
      icon: <Percent size={32} color="#ff5722" />,
      link: "/tools/cgpa-calculator",
      bg: "#fbe9e7", border: "#ffccbc"
    }
  ];

  return (
    <div style={{ padding: '40px 15px', maxWidth: '1100px', margin: '0 auto' }}>
      <SEO 
        title="Free Online Tools - Resume, Date on Photo, Typing Test & More" 
        description="All-in-one student tools: Resume Builder, Date on Photo Adder, Signature Maker, Typing Test, and more." 
        keywords="Online Tools, Date on Photo, Resume Builder, Signature Maker, Passport Photo"
        url="https://toponlineform.com/tools"
      />

      <h1 className="job-title" style={{textAlign: 'center', marginBottom: '10px'}}>🛠️ Student Utility Tools</h1>
      <p style={{textAlign: 'center', color: '#666', marginBottom: '50px', fontSize: '16px'}}>
        Everything you need for your Exam Preparation & Form Filling.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '50px', // 🔥 Gap Increased to 50px
        padding: '20px' // 🔥 Padding Increased to 20px
      }}>
        {toolsList.map((tool) => (
          <Link to={tool.link} key={tool.id} style={{textDecoration: 'none'}}>
            <div style={{
              background: 'white',
              border: `1px solid ${tool.border}`,
              borderRadius: '16px',
              padding: '25px',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              position: 'relative',
              top: 0
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{
                marginBottom: '15px', 
                background: tool.bg, 
                width: '70px', 
                height: '70px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '50%'
              }}>
                {tool.icon}
              </div>
              <h2 style={{fontSize: '18px', color: '#333', marginBottom: '8px', fontWeight: '700'}}>{tool.title}</h2>
              <p style={{fontSize: '14px', color: '#666', lineHeight: '1.4', margin: 0}}>{tool.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
