import React, { useState } from 'react';
import SEO from '../SEO';
import { RefreshCcw, Calculator, Calendar } from 'lucide-react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
  const [age, setAge] = useState(null);
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

    if (birth > target) {
      setError("Date of Birth cannot be in the future relative to the 'As on Date'.");
      setAge(null);
      return;
    }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const resetCalculator = () => {
    setBirthDate('');
    setTargetDate(new Date().toISOString().split('T')[0]);
    setAge(null);
    setError('');
  };

  return (
    <div style={{ background: '#f0f2f5', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO 
        title="Age Calculator for Sarkari Naukri 2025 - Exact Age Checker" 
        description="Calculate your exact age in Years, Months, and Days for SSC, UPSC, IBPS, and Railway exams. The most accurate age calculator for government jobs." 
        keywords="Age Calculator, Sarkari Age Calculator, DOB Calculator, Age Difference, SSC Age Calculator"
        url="https://toponlineform.com/tools/age-calculator"
      />

      {/* --- Main Card Container --- */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        border: '1px solid #e1e4e8'
      }}>
        
        {/* Header Section */}
        <div style={{ background: '#2c3e50', padding: '25px', textAlign: 'center', color: 'white' }}>
          <h1 style={{ margin: 0, fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Calculator size={28} /> Sarkari Age Calculator
          </h1>
          <p style={{ margin: '10px 0 0', opacity: 0.9, fontSize: '14px' }}>
            Check your eligibility for Online Forms instantly.
          </p>
        </div>

        {/* Form Section */}
        <div style={{ padding: '30px' }}>
          <form onSubmit={calculateAge}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '25px' }}>
              
              {/* Input 1: DOB */}
              <div style={{ flex: '1 1 250px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                  Date of Birth (DOB)
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="date" 
                    value={birthDate} 
                    onChange={(e) => setBirthDate(e.target.value)} 
                    style={{
                      width: '100%', padding: '12px 15px', borderRadius: '8px', 
                      border: '2px solid #e0e0e0', fontSize: '16px', outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
              </div>

              {/* Input 2: As on Date */}
              <div style={{ flex: '1 1 250px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                  Age as on Date
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="date" 
                    value={targetDate} 
                    onChange={(e) => setTargetDate(e.target.value)} 
                    style={{
                      width: '100%', padding: '12px 15px', borderRadius: '8px', 
                      border: '2px solid #e0e0e0', fontSize: '16px', outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && <p style={{ color: '#d32f2f', background: '#ffebee', padding: '10px', borderRadius: '5px', fontSize: '14px', marginBottom: '20px', textAlign: 'center' }}>{error}</p>}

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="submit" style={{
                flex: 2, padding: '14px', background: '#27ae60', color: 'white', 
                border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', 
                cursor: 'pointer', boxShadow: '0 4px 6px rgba(39, 174, 96, 0.2)',
                transition: 'transform 0.1s'
              }}
              onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
              >
                Calculate Age
              </button>
              
              <button type="button" onClick={resetCalculator} style={{
                flex: 1, padding: '14px', background: '#ecf0f1', color: '#2c3e50', 
                border: '1px solid #bdc3c7', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', 
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}>
                <RefreshCcw size={18} /> Reset
              </button>
            </div>
          </form>

          {/* --- RESULT SECTION (THE PRO LOOK) --- */}
          {age && (
            <div style={{ marginTop: '30px', borderTop: '2px dashed #eee', paddingTop: '30px' }}>
              <h3 style={{ textAlign: 'center', color: '#7f8c8d', fontSize: '16px', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                You are currently
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                {/* Years Box */}
                <div style={{ background: '#e8f5e9', padding: '20px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid #c8e6c9' }}>
                  <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: '#2e7d32' }}>{age.years}</span>
                  <span style={{ fontSize: '14px', color: '#66bb6a', fontWeight: '600' }}>YEARS</span>
                </div>
                {/* Months Box */}
                <div style={{ background: '#e3f2fd', padding: '20px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid #bbdefb' }}>
                  <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: '#1565c0' }}>{age.months}</span>
                  <span style={{ fontSize: '14px', color: '#42a5f5', fontWeight: '600' }}>MONTHS</span>
                </div>
                {/* Days Box */}
                <div style={{ background: '#fff3e0', padding: '20px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid #ffe0b2' }}>
                  <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: '#ef6c00' }}>{age.days}</span>
                  <span style={{ fontSize: '14px', color: '#ff9800', fontWeight: '600' }}>DAYS</span>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#95a5a6' }}>
                <Calendar size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                Calculated based on {new Date(targetDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- SEO Content (Hidden in visual hierarchy but present) --- */}
      <div style={{ maxWidth: '700px', margin: '40px auto', background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #e1e4e8', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '2px solid #f0f2f5', paddingBottom: '10px', marginBottom: '15px' }}>
          Why is Exact Age Calculation Important?
        </h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          For aspirants of government exams like <strong>UPSC, SSC CGL, IBPS PO, RRB NTPC</strong>, knowing your exact age down to the day is crucial. A difference of even one day can make you ineligible for a post.
        </p>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          Most notifications specify an age limit (e.g., 18-27 years) as on a specific "Cut-off Date" (usually 1st January or 1st August). Our tool helps you:
        </p>
        <ul style={{ color: '#555', lineHeight: '1.8' }}>
          <li>✅ Verify eligibility before paying application fees.</li>
          <li>✅ Check age relaxation benefits (OBC/SC/ST).</li>
          <li>✅ Avoid form rejection due to age miscalculation.</li>
        </ul>
      </div>
    </div>
  );
};

export default AgeCalculator;
