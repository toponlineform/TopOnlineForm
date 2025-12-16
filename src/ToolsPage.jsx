import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
// ✅ Added 'FileUser' icon for Resume Builder
import { Calculator, Image, Keyboard, FileText, FileUser } from 'lucide-react';

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
      title: "Image Resizer",
      desc: "Compress & Resize images (KB) for online forms.",
      icon: <Image size={32} color="#1565c0" />,
      link: "/tools/image-resizer",
      bg: "#e3f2fd", border: "#bbdefb"
    },
    {
      id: 3,
      title: "Typing Test",
      desc: "Check your WPM speed & accuracy online.",
      icon: <Keyboard size={32} color="#ef6c00" />,
      link: "/tools/typing-test",
      bg: "#fff3e0", border: "#ffe0b2"
    },
    {
      id: 4,
      title: "JPG to PDF",
      desc: "Convert images to PDF format instantly.",
      icon: <FileText size={32} color="#c2185b" />,
      link: "/tools/jpg-to-pdf",
      bg: "#fce4ec", border: "#f8bbd0"
    },
    // ✅ NEW RESUME BUILDER TOOL ADDED HERE
    {
      id: 5,
      title: "Resume Builder",
      desc: "Create professional ATS-friendly resumes in minutes.",
      icon: <FileUser size={32} color="#673ab7" />, // Purple Icon
      link: "/tools/resume-builder",
      bg: "#ede7f6", border: "#d1c4e9" // Light Purple Theme
    }
  ];

  return (
    <div style={{ padding: '40px 15px', maxWidth: '1000px', margin: '0 auto' }}>
      <SEO 
        title="Free Online Tools - Resume Builder, Age Calculator & More" 
        description="Access free pro tools: Resume Builder, Age Calculator, Image Resizer, Typing Test, and PDF Converter. Best utility tools for students and professionals." 
        keywords="Online Tools, Resume Builder, Age Calculator, Image Resizer, Typing Test, PDF Converter"
        url="https://toponlineform.com/tools"
      />

      <h1 className="job-title" style={{textAlign: 'center', marginBottom: '10px'}}>🛠️ Online Tools Dashboard</h1>
      <p style={{textAlign: 'center', color: '#666', marginBottom: '40px', fontSize: '16px'}}>
        Premium tools available for free. Fast, Secure, and Easy to use.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
      }}>
        {toolsList.map((tool) => (
          <Link to={tool.link} key={tool.id} style={{textDecoration: 'none'}}>
            <div style={{
              background: 'white',
              border: `1px solid ${tool.border}`,
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
            }}
            >
              <div style={{
                marginBottom: '20px', 
                background: tool.bg, 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '50%'
              }}>
                {tool.icon}
              </div>
              <h2 style={{fontSize: '20px', color: '#333', marginBottom: '10px', fontWeight: '700'}}>{tool.title}</h2>
              <p style={{fontSize: '15px', color: '#666', lineHeight: '1.5', margin: 0}}>{tool.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
