import React, { useState } from 'react';
import SEO from '../SEO';
import { RefreshCcw, Calculator, Calendar, Clock } from 'lucide-react';

const AgeCalculator = () => {
  // Default target date is today
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
  const [age, setAge] = useState(null);
  const [nextBirthday, setNextBirthday] = useState(null); // Added Feature
  const [error, setError] = useState('');

  const calculateAge = (e) => {
    e.preventDefault();
    setError('');
    
    if (!birthDate) {
      setError("Please select your Date of Birth.");
      return;
    }

    const birth = new Date(birthDate);
    const target = new Date(targetDate);

    // Logic to calculate Age
    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Logic for Next Birthday (Bonus Feature like Calculator.net)
    const currentYear = new Date().getFullYear();
    let nextBday = new Date(birthDate);
    nextBday.setFullYear(currentYear);
    if (nextBday < new Date()) {
        nextBday.setFullYear(currentYear + 1);
    }
    const diffTime = Math.abs(nextBday - new Date());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    setAge({ years, months, days });
    setNextBirthday(diffDays);
  };

  const resetCalculator = () => {
    setBirthDate('');
    setTargetDate(new Date().toISOString().split('T')[0]);
    setAge(null);
    setNextBirthday(null);
    setError('');
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO 
        title="Age Calculator - Calculate Your Exact Age Online" 
        description="Free online Age Calculator to calculate your age in years, months, and days. Useful for admissions, job forms, eligibility, and birthday calculations." 
        keywords="Age Calculator, How old am I, Date of Birth Calculator, Calculate Age, Age Difference"
        url="https://toponlineform.com/tools/age-calculator"
      />

      {/* --- Main Card Container --- */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        border: '1px solid #e9ecef'
      }}>
        
        {/* Universal Header */}
        <div style={{ background: '#333', padding: '20px', textAlign: 'center', color: 'white' }}>
          <h1 style={{ margin: 0, fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontWeight: '600' }}>
            <Calculator size={30} color="#ffcc00" /> Age Calculator
          </h1>
        </div>

        {/* Form Section */}
        <div style={{ padding: '30px' }}>
          <form onSubmit={calculateAge}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', marginBottom: '25px' }}>
              
              {/* Input 1: DOB */}
              <div style={{ flex: '1 1 250px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#444' }}>
                  Date of Birth
                </label>
                <input 
                  type="date" 
                  value={birthDate} 
                  onChange={(e) => setBirthDate(e.target.value)} 
                  style={{
                    width: '100%', padding: '12px 15px', borderRadius: '8px', 
                    border: '1px solid #ccc', fontSize: '16px', outline: 'none',
                    background: '#fcfcfc'
                  }}
                />
              </div>

              {/* Input 2: Age at the Date of */}
              <div style={{ flex: '1 1 250px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#444' }}>
                  Age at the Date of
                </label>
                <input 
                  type="date" 
                  value={targetDate} 
                  onChange={(e) => setTargetDate(e.target.value)} 
                  style={{
                    width: '100%', padding: '12px 15px', borderRadius: '8px', 
                    border: '1px solid #ccc', fontSize: '16px', outline: 'none',
                    background: '#fcfcfc'
                  }}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && <p style={{ color: '#d32f2f', background: '#ffebee', padding: '10px', borderRadius: '5px', fontSize: '14px', marginBottom: '20px', textAlign: 'center' }}>{error}</p>}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="submit" style={{
                flex: 2, padding: '14px', background: '#007bff', color: 'white', 
                border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', 
                cursor: 'pointer', transition: 'background 0.2s'
              }}>
                Calculate Age
              </button>
              
              <button type="button" onClick={resetCalculator} style={{
                flex: 1, padding: '14px', background: '#e9ecef', color: '#333', 
                border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', 
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}>
                <RefreshCcw size={18} /> Clear
              </button>
            </div>
          </form>

          {/* --- RESULT DISPLAY --- */}
          {age && (
            <div style={{ marginTop: '30px', animation: 'fadeIn 0.5s ease-in' }}>
              <h3 style={{ textAlign: 'center', color: '#555', fontSize: '18px', margin: '0 0 20px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                Age Result
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                {/* Years */}
                <div style={{ background: '#e3f2fd', padding: '15px 5px', borderRadius: '10px', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '28px', fontWeight: 'bold', color: '#1565c0' }}>{age.years}</span>
                  <span style={{ fontSize: '13px', color: '#555', textTransform: 'uppercase' }}>Years</span>
                </div>
                {/* Months */}
                <div style={{ background: '#e8f5e9', padding: '15px 5px', borderRadius: '10px', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '28px', fontWeight: 'bold', color: '#2e7d32' }}>{age.months}</span>
                  <span style={{ fontSize: '13px', color: '#555', textTransform: 'uppercase' }}>Months</span>
                </div>
                {/* Days */}
                <div style={{ background: '#fff3e0', padding: '15px 5px', borderRadius: '10px', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '28px', fontWeight: 'bold', color: '#ef6c00' }}>{age.days}</span>
                  <span style={{ fontSize: '13px', color: '#555', textTransform: 'uppercase' }}>Days</span>
                </div>
              </div>

              {/* Text Summary */}
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', textAlign: 'center', fontSize: '16px', color: '#333' }}>
                 You are <strong>{age.years} years, {age.months} months, and {age.days} days</strong> old.
              </div>

              {/* Extra Feature: Next Birthday */}
              {nextBirthday && (
                 <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Clock size={16} /> Next Birthday in: <strong>{nextBirthday} days</strong> 🎂
                 </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* --- SEO Content (Generic & Helpful) --- */}
      <div style={{ maxWidth: '700px', margin: '40px auto', background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>
          About Age Calculator
        </h2>
        <p style={{ lineHeight: '1.7', color: '#555', marginBottom: '15px' }}>
          The <strong>Age Calculator</strong> is a smart and easy-to-use tool designed to determine your exact age in years, months, and days. It calculates the time difference between your birth date and the current date (or any specific date you choose).
        </p>
        
        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
          Common Uses:
        </h3>
        <ul style={{ color: '#555', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>📝 <strong>Job Applications:</strong> Check eligibility for Govt Jobs (UPSC, SSC, Banking) where strict age limits apply.</li>
          <li>🏫 <strong>School Admissions:</strong> Calculate a child's age for nursery or school entry.</li>
          <li>🗳️ <strong>Voting & Legal Rights:</strong> Confirm if you have crossed 18 or 21 years of age.</li>
          <li>🏥 <strong>Medical & Insurance:</strong> Determine precise age for policies and forms.</li>
          <li>🎂 <strong>Birthday Planning:</strong> Find out exactly how many days are left for your next birthday.</li>
        </ul>
      </div>
    </div>
  );
};

export default AgeCalculator;
