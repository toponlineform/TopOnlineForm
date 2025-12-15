import React, { useState, useEffect, useRef } from 'react';
import SEO from '../SEO';
import { RotateCcw, Keyboard, Zap } from 'lucide-react';

const TypingTest = () => {
  const paragraph = "The quick brown fox jumps over the lazy dog. Technology is changing the world at a rapid pace. Practice is the key to success in any field. Government jobs require dedication and patience to crack.";
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);

    if (!startTime) setStartTime(Date.now());

    if (val === paragraph) {
      finishTest(val);
    } else {
        // Calculate live WPM roughly
        const timeElapsed = (Date.now() - startTime) / 60000;
        if(timeElapsed > 0) {
            const words = val.trim().split(/\s+/).length;
            setWpm(Math.round(words / timeElapsed));
        }
    }
  };

  const finishTest = (val) => {
    setIsFinished(true);
    const timeElapsed = (Date.now() - startTime) / 60000;
    const words = paragraph.split(' ').length;
    setWpm(Math.round(words / timeElapsed));
    
    // Simple accuracy check
    let correctChars = 0;
    for(let i=0; i< val.length; i++) {
        if(val[i] === paragraph[i]) correctChars++;
    }
    setAccuracy(Math.round((correctChars / paragraph.length) * 100));
  };

  const resetTest = () => {
    setInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    inputRef.current.focus();
  };

  return (
    <div style={{ background: '#fff8e1', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Typing Speed Test - Check WPM Online" description="Test your typing speed (WPM) and accuracy for SSC, Banking, and Railway exams. Free online typing tutor." url="https://toponlineform.com/tools/typing-test" />

      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ background: '#f57c00', padding: '25px', textAlign: 'center', color: 'white' }}>
          <h1 style={{ margin: 0, fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Keyboard size={28} /> Typing Speed Test
          </h1>
        </div>

        <div style={{ padding: '30px' }}>
          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', fontSize: '18px', lineHeight: '1.6', fontFamily: 'monospace', marginBottom: '20px', border: '1px solid #ddd', color: '#555' }}>
            {paragraph}
          </div>

          <textarea 
            ref={inputRef}
            value={input} 
            onChange={handleChange} 
            disabled={isFinished}
            placeholder="Start typing the text above..." 
            style={{ width: '100%', height: '120px', padding: '15px', fontSize: '18px', borderRadius: '8px', border: '2px solid #f57c00', outline: 'none', fontFamily: 'monospace' }}
          ></textarea>

          {/* Results Dashboard */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff3e0', padding: '15px 30px', borderRadius: '10px', textAlign: 'center', border: '1px solid #ffe0b2', flex: 1 }}>
               <span style={{ display: 'block', fontSize: '32px', fontWeight: 'bold', color: '#e65100' }}>{wpm}</span>
               <span style={{ fontSize: '14px', color: '#f57c00', fontWeight: 'bold' }}>WPM</span>
            </div>
            
            {isFinished && (
                <div style={{ background: '#e8f5e9', padding: '15px 30px', borderRadius: '10px', textAlign: 'center', border: '1px solid #c8e6c9', flex: 1 }}>
                <span style={{ display: 'block', fontSize: '32px', fontWeight: 'bold', color: '#2e7d32' }}>{accuracy}%</span>
                <span style={{ fontSize: '14px', color: '#4caf50', fontWeight: 'bold' }}>ACCURACY</span>
                </div>
            )}
          </div>

          <div style={{textAlign: 'center', marginTop: '30px'}}>
             <button onClick={resetTest} style={{ padding: '12px 25px', background: '#333', color: 'white', border: 'none', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <RotateCcw size={18} /> Restart Test
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TypingTest;
