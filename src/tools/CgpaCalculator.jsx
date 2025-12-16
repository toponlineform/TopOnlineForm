import React, { useState } from 'react';
import SEO from '../SEO';
import { Calculator, Percent } from 'lucide-react';

const CgpaCalculator = () => {
  const [cgpa, setCgpa] = useState('');
  const [multiplier, setMultiplier] = useState(9.5);
  const [percentage, setPercentage] = useState(null);

  const calculate = () => {
    const val = parseFloat(cgpa);
    if (!isNaN(val)) {
        setPercentage((val * multiplier).toFixed(2));
    } else {
        setPercentage(null);
    }
  };

  return (
    <div style={{ background: '#fff3e0', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="CGPA to Percentage Calculator" description="Convert your CGPA to Percentage easily. Supports CBSE (9.5x) and University (10x) multipliers." url="https://toponlineform.com/tools/cgpa-calculator" />
      
      <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#e65100', fontSize: '26px', marginBottom: '30px' }}>🎓 CGPA Converter</h1>
        
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Enter CGPA:</label>
            <input type="number" placeholder="e.g. 8.5" value={cgpa} onChange={(e) => setCgpa(e.target.value)} style={{ width: '100%', padding: '12px', fontSize: '18px', borderRadius: '8px', border: '1px solid #ccc' }} />
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Multiplier Factor:</label>
            <select value={multiplier} onChange={(e) => setMultiplier(parseFloat(e.target.value))} style={{ width: '100%', padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}>
                <option value={9.5}>9.5 (CBSE Standard)</option>
                <option value={10}>10.0 (Many Universities)</option>
            </select>
        </div>

        <button onClick={calculate} style={{ width: '100%', padding: '15px', background: '#ff9800', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
            Calculate Percentage
        </button>

        {percentage && (
            <div style={{ marginTop: '30px', background: '#fff8e1', padding: '20px', borderRadius: '10px', border: '2px dashed #ffb74d' }}>
                <div style={{ fontSize: '14px', color: '#666' }}>Your Percentage</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: '#e65100' }}>{percentage}%</div>
            </div>
        )}
      </div>
    </div>
  );
};

export default CgpaCalculator;
