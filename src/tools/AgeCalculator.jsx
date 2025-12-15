// File Path: src/tools/AgeCalculator.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO'; // 👈 Note: Path changed to '../SEO'

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate || !targetDate) return;

    const birth = new Date(birthDate);
    const target = new Date(targetDate);

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonthDate = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonthDate.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const clearFields = () => {
    setBirthDate('');
    setTargetDate(new Date().toISOString().split('T')[0]);
    setAge(null);
  };

  return (
    <div className="main-grid" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <SEO 
        title="Age Calculator for Sarkari Naukri 2025 - Check Your Exact Age" 
        description="Best Age Calculator for Government Jobs. Calculate your age in Years, Months, and Days for UPSC, SSC, Banking, and Railway exams." 
        keywords="Age Calculator, Age Calculator for Govt Jobs, Sarkari Naukri Age Limit, DOB Calculator" 
        url="https://toponlineform.com/tools/age-calculator"
        type="WebApplication"
      />

      <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#d32f2f', marginBottom: '20px' }}>🧮 Age Calculator</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          Check your exact age for <strong>Government Job Applications</strong>.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Date of Birth (DOB):</label>
            <input 
              type="date" 
              value={birthDate} 
              onChange={(e) => setBirthDate(e.target.value)} 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Age as on Date:</label>
            <input 
              type="date" 
              value={targetDate} 
              onChange={(e) => setTargetDate(e.target.value)} 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={calculateAge} style={{ padding: '12px 30px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>Calculate Age</button>
          <button onClick={clearFields} style={{ padding: '12px 30px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>Reset</button>
        </div>

        {age && (
          <div style={{ marginTop: '30px', padding: '20px', background: '#e8f5e9', border: '2px dashed #25D366', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ margin: '0', color: '#2e7d32' }}>Your Age is:</h2>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#000', margin: '10px 0' }}>{age.years} Years, {age.months} Months, {age.days} Days</div>
            <p style={{ color: '#555' }}>As on: {new Date(targetDate).toDateString()}</p>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '40px', background: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h3>Why use TopOnlineForm Age Calculator?</h3>
        <p>While applying for <strong>Sarkari Naukri</strong>, the age limit is crucial. Official notifications often state: <em>"Age as on 01/01/2025"</em>. Our tool helps you find your exact age so your form doesn't get rejected.</p>
        <div style={{marginTop: '20px'}}><Link to="/" className="back-btn">Go to Home Page</Link></div>
      </div>
    </div>
  );
};

export default AgeCalculator;
