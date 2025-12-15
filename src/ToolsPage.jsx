import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const ToolsPage = () => {
  // Future me hum yahan aur tools add karte rahenge
  const toolsList = [
    {
      id: 1,
      title: "Age Calculator",
      desc: "Calculate your exact age for Sarkari Job eligibility (Years, Months, Days).",
      icon: "🧮",
      link: "/tools/age-calculator",
      color: "#e8f5e9", // Light Green bg
      textColor: "#2e7d32"
    },
    // { id: 2, title: "Image Resizer", desc: "Resize photo signature for forms...", icon: "🖼️", link: "/tools/image-resizer", color: "#e3f2fd", textColor: "#1565c0" },
    // { id: 3, title: "Typing Test", desc: "Check typing speed for SSC/Banking...", icon: "⌨️", link: "/tools/typing-test", color: "#fff3e0", textColor: "#ef6c00" },
  ];

  return (
    <div className="job-container">
      <SEO 
        title="Free Online Tools for Students - TopOnlineForm" 
        description="Access free tools for students like Age Calculator, Image Resizer, Typing Test, and Resume Builder. Best tools for Sarkari Naukri aspirants." 
        keywords="Sarkari Tools, Age Calculator, Image Resizer, Online Tools for Students"
        url="https://toponlineform.com/tools"
      />

      <h1 className="job-title" style={{textAlign: 'center', marginBottom: '10px'}}>🛠️ Student Tools Dashboard</h1>
      <p style={{textAlign: 'center', color: '#666', marginBottom: '40px'}}>
        Free, fast, and easy-to-use tools to help you with your exam preparation and form filling.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        padding: '10px'
      }}>
        {toolsList.map((tool) => (
          <Link to={tool.link} key={tool.id} style={{textDecoration: 'none'}}>
            <div style={{
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '25px',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{
                fontSize: '40px', 
                marginBottom: '15px', 
                background: tool.color, 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '50%'
              }}>
                {tool.icon}
              </div>
              <h2 style={{fontSize: '20px', color: '#333', marginBottom: '10px'}}>{tool.title}</h2>
              <p style={{fontSize: '14px', color: '#666', lineHeight: '1.5'}}>{tool.desc}</p>
              <span style={{
                marginTop: 'auto', 
                paddingTop: '15px', 
                color: tool.textColor, 
                fontWeight: 'bold', 
                fontSize: '14px'
              }}>Open Tool →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
