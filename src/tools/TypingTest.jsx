import React, { useState, useEffect, useRef } from 'react';
import SEO from '../SEO';
import { RotateCcw, Keyboard, Trophy, Zap, Target, Activity } from 'lucide-react';

const paragraphs = [
  "The quick brown fox jumps over the lazy dog. Programming is the art of telling another human what one wants the computer to do.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. Believe you can and you're halfway there.",
  "In the middle of difficulty lies opportunity. Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Government jobs provide stability and security but require immense dedication to crack the exams. Consistency is the key to success.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
];

const TypingTest = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]); 
  const [startCounting, setStartCounting] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isFinished, setIsFinished] = useState(false);
  
  const inputRef = useRef(null);

  useEffect(() => {
    resetTest();
  }, []);

  useEffect(() => {
    let interval;
    if (startCounting && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endTest();
    }
    return () => clearInterval(interval);
  }, [startCounting, timeLeft]);

  const resetTest = () => {
    const randomText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    setText(randomText);
    setUserInput('');
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setStartCounting(false);
    setWpm(0);
    setAccuracy(0);
    setTimeLeft(60);
    setTimeElapsed(0);
    setIsFinished(false);
    if(inputRef.current) setTimeout(() => inputRef.current.focus(), 100);
  };

  const endTest = () => {
    setStartCounting(false);
    setIsFinished(true);
    calculateResults();
  };

  const processInput = (value) => {
    if (!startCounting) setStartCounting(true);
    if (isFinished) return;

    if (activeWordIndex === text.split(' ').length - 1 && value.endsWith(' ')) {
        endTest();
        return;
    }
    setUserInput(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' && !isFinished) {
      e.preventDefault();
      const words = text.split(' ');
      const currentWord = words[activeWordIndex];
      const typedWord = userInput.trim();

      const newCorrectArray = [...correctWordArray, typedWord === currentWord];
      setCorrectWordArray(newCorrectArray);

      setActiveWordIndex((prev) => prev + 1);
      setUserInput('');
    }
  };

  const calculateResults = () => {
    const correctWords = correctWordArray.filter(Boolean).length;
    const totalWords = correctWordArray.length;
    
    // Final WPM Calculation
    // Using simple logic: Words / Minutes
    // If finished early, use timeElapsed, else use 60s
    const timeUsed = timeElapsed === 0 ? 60 : timeElapsed; 
    const timeInMinutes = timeUsed / 60;
    
    const finalWpm = Math.round(correctWords / timeInMinutes);
    const acc = totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 0;

    setWpm(finalWpm);
    setAccuracy(acc);
  };

  const getPerformanceMessage = () => {
    if (wpm > 60) return "🔥 God Mode! You are a Typing Machine!";
    if (wpm > 40) return "🚀 Professional Speed! Great Job!";
    if (wpm > 25) return "👍 Good Average! Keep Practicing.";
    return "🐢 Slow & Steady! You can do better.";
  };

  const renderText = () => {
    return text.split(' ').map((word, index) => {
      let color = '#666';
      let backgroundColor = 'transparent';
      let fontWeight = 'normal';

      if (index < activeWordIndex) {
        color = correctWordArray[index] ? '#2e7d32' : '#d32f2f'; // Green or Red
        fontWeight = 'bold';
      } else if (index === activeWordIndex) {
        backgroundColor = '#e3f2fd'; // Blue Highlight
        color = '#000';
        fontWeight = 'bold';
      }

      return (
        <span key={index} style={{ color, backgroundColor, fontWeight, padding: '4px 6px', borderRadius: '4px', margin: '0 2px', fontSize: '20px', lineHeight: '2' }}>
          {word}
        </span>
      );
    });
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Pro Typing Speed Test - Check WPM & Accuracy" description="Test your typing speed with real-time feedback. Professional typing test for SSC, Banking, and Railways." url="https://toponlineform.com/tools/typing-test" />

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Keyboard size={40} color="#007bff" /> Typing Speed Test
          </h1>
          <p style={{ color: '#666' }}>Check your WPM (Words Per Minute) & Accuracy instantly.</p>
        </div>

        {/* --- RESULT CARD (THE PRO LOOK) --- */}
        {isFinished ? (
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <Trophy size={80} color="#ffb300" style={{ marginBottom: '20px' }} />
            
            <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '5px' }}>Test Completed!</h2>
            <p style={{ fontSize: '18px', color: '#007bff', fontWeight: 'bold', marginBottom: '30px' }}>
              {getPerformanceMessage()}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              {/* WPM Box */}
              <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}><Zap color="#1976d2" /></div>
                <div style={{ fontSize: '40px', fontWeight: '800', color: '#1976d2' }}>{wpm}</div>
                <div style={{ fontSize: '14px', color: '#555', fontWeight: 'bold' }}>WPM (Speed)</div>
              </div>

              {/* Accuracy Box */}
              <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}><Target color="#2e7d32" /></div>
                <div style={{ fontSize: '40px', fontWeight: '800', color: '#2e7d32' }}>{accuracy}%</div>
                <div style={{ fontSize: '14px', color: '#555', fontWeight: 'bold' }}>Accuracy</div>
              </div>

              {/* Stats Box */}
              <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}><Activity color="#ef6c00" /></div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ef6c00', marginTop: '10px' }}>
                  {correctWordArray.filter(Boolean).length} / {correctWordArray.length}
                </div>
                <div style={{ fontSize: '14px', color: '#555', fontWeight: 'bold', marginTop: '5px' }}>Correct Words</div>
              </div>
            </div>

            <button onClick={resetTest} style={{ padding: '15px 40px', background: '#333', color: 'white', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
              <RotateCcw size={20} /> Restart Test
            </button>
          </div>
        ) : (
          <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            
            {/* Timer Bar */}
            <div style={{ background: '#007bff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Start Typing...</span>
              <span style={{ fontWeight: 'bold', fontSize: '20px', background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px' }}>
                ⏱ {timeLeft}s
              </span>
            </div>

            <div style={{ padding: '30px' }}>
              {/* Text Display */}
              <div 
                onClick={() => inputRef.current.focus()}
                style={{ 
                  background: '#fafafa', padding: '25px', borderRadius: '10px', 
                  border: '2px solid #eee', minHeight: '120px', textAlign: 'left', 
                  marginBottom: '25px', fontFamily: 'monospace', cursor: 'text',
                  fontSize: '18px', lineHeight: '1.8'
                }}
              >
                {renderText()}
              </div>

              {/* Input Area */}
              <div style={{ position: 'relative' }}>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={userInput} 
                  onChange={(e) => processInput(e.target.value)} 
                  onKeyDown={handleKeyDown}
                  style={{ 
                    width: '100%', padding: '18px', fontSize: '20px', borderRadius: '12px', 
                    border: '2px solid #007bff', outline: 'none', fontFamily: 'monospace',
                    textAlign: 'center', boxShadow: '0 4px 10px rgba(0,123,255,0.1)'
                  }} 
                  placeholder={startCounting ? "" : "Click here & start typing..."}
                  autoFocus
                />
                <div style={{ position: 'absolute', right: '15px', top: '20px', color: '#999', fontSize: '12px', pointerEvents: 'none' }}>
                  Press SPACE
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TypingTest;
