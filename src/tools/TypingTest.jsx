import React, { useState, useEffect, useRef } from 'react';
import SEO from '../SEO';
import { RotateCcw, Keyboard, Trophy, Zap, Target, Activity, Clock } from 'lucide-react';

// Long Paragraphs for prolonged typing
const dataText = [
  "Technology has transformed the way we live and work. The internet allows us to connect with people from all over the globe in an instant. Education has become more accessible through online courses and digital resources. However, with these advancements come challenges such as data privacy and screen addiction. It is crucial to find a balance between utilizing technology for productivity and maintaining our mental well-being. Innovation continues to drive society forward, creating new opportunities for those willing to adapt.",
  "Success is not something that happens overnight; it is the result of consistent effort and resilience. Many people give up just when they are about to achieve their goals because they lack patience. Failure should not be seen as a dead end but as a stepping stone towards improvement. Every mistake teaches a valuable lesson that books cannot provide. Keep pushing forward, stay disciplined, and eventually, your hard work will pay off in ways you never imagined.",
  "Government jobs in India are highly sought after due to the stability and respect they offer. Preparing for exams like SSC, UPSC, and Banking requires immense dedication and a strategic approach. It is not just about studying hard but studying smart. Time management, accuracy, and regular practice are the pillars of cracking these competitive exams. Aspirants must stay updated with current affairs and maintain a positive mindset throughout their journey.",
  "Health is wealth, a saying we have heard since childhood, yet often ignore. In today's fast-paced world, people prioritize work over their physical and mental health. Regular exercise, a balanced diet, and adequate sleep are essential for a happy life. Neglecting health can lead to severe consequences in the long run. Taking small steps today, like walking for thirty minutes or reducing sugar intake, can make a massive difference in the future."
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
  
  // Time Settings
  const [selectedDuration, setSelectedDuration] = useState(60); // Default 1 min
  const [timeLeft, setTimeLeft] = useState(60);
  
  const [isFinished, setIsFinished] = useState(false);
  
  const inputRef = useRef(null);
  const activeWordRef = useRef(null); // To scroll to active word

  // Init
  useEffect(() => {
    resetTest();
  }, [selectedDuration]); // Reset if duration changes

  // Timer Logic
  useEffect(() => {
    let interval;
    if (startCounting && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft === 0 && startCounting) {
      endTest();
    }
    return () => clearInterval(interval);
  }, [startCounting, timeLeft]);

  // Auto Scroll Logic
  useEffect(() => {
    if (activeWordRef.current) {
      activeWordRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeWordIndex]);

  const resetTest = () => {
    // Generate a very long text by combining random paragraphs to ensure it lasts 5 mins
    const baseText = dataText[Math.floor(Math.random() * dataText.length)];
    const longText = `${baseText} ${dataText[(Math.floor(Math.random() * dataText.length))]} ${baseText}`; // Repeat to make it long
    
    setText(longText);
    setUserInput('');
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setStartCounting(false);
    setWpm(0);
    setAccuracy(0);
    setTimeLeft(selectedDuration);
    setTimeElapsed(0);
    setIsFinished(false);
    if(inputRef.current) setTimeout(() => inputRef.current.focus(), 100);
  };

  const changeDuration = (seconds) => {
    setSelectedDuration(seconds);
    setStartCounting(false);
    // UseEffect will trigger resetTest
  };

  const endTest = () => {
    setStartCounting(false);
    setIsFinished(true);
    calculateResults();
  };

  const processInput = (value) => {
    if (!startCounting) setStartCounting(true);
    if (isFinished) return;
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
    
    const timeUsed = timeElapsed === 0 ? selectedDuration : timeElapsed; 
    const timeInMinutes = timeUsed / 60;
    
    const finalWpm = Math.round(correctWords / timeInMinutes);
    const acc = totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 0;

    setWpm(finalWpm);
    setAccuracy(acc);
  };

  const renderText = () => {
    return text.split(' ').map((word, index) => {
      let color = '#555';
      let backgroundColor = 'transparent';
      let fontWeight = 'normal';

      if (index < activeWordIndex) {
        color = correctWordArray[index] ? '#2e7d32' : '#d32f2f';
      } else if (index === activeWordIndex) {
        backgroundColor = '#e3f2fd';
        color = '#000';
        fontWeight = 'bold';
      }

      return (
        <span 
          key={index} 
          ref={index === activeWordIndex ? activeWordRef : null}
          style={{ color, backgroundColor, fontWeight, padding: '3px 6px', borderRadius: '4px', margin: '0 2px', fontSize: '22px', lineHeight: '2.2', display: 'inline-block' }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div style={{ background: '#f0f4f8', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Typing Speed Test (1, 3, 5 Min) - Check WPM" description="Free online typing test with 1 minute, 3 minutes, and 5 minutes options. Check your typing speed for SSC and Banking exams." url="https://toponlineform.com/tools/typing-test" />

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header & Controls */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '30px', color: '#333', marginBottom: '15px' }}>
            <Keyboard size={35} style={{verticalAlign:'middle', marginRight:'10px', color:'#007bff'}} /> 
            Professional Typing Test
          </h1>
          
          {/* Time Selector Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
            {[60, 180, 300].map((time) => (
                <button 
                    key={time}
                    onClick={() => changeDuration(time)}
                    disabled={startCounting}
                    style={{
                        padding: '8px 20px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: startCounting ? 'not-allowed' : 'pointer',
                        background: selectedDuration === time ? '#007bff' : '#fff',
                        color: selectedDuration === time ? '#fff' : '#333',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s'
                    }}
                >
                    {time / 60} Min
                </button>
            ))}
          </div>
        </div>

        {isFinished ? (
          // --- RESULT SECTION ---
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <Trophy size={80} color="#ffb300" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '28px', color: '#333' }}>Time's Up!</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Here is your performance report</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '15px' }}>
                <div style={{ fontSize: '14px', color: '#1565c0', fontWeight: 'bold' }}>SPEED</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: '#1565c0' }}>{wpm} <span style={{fontSize:'16px'}}>WPM</span></div>
              </div>
              <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '15px' }}>
                <div style={{ fontSize: '14px', color: '#2e7d32', fontWeight: 'bold' }}>ACCURACY</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: '#2e7d32' }}>{accuracy}%</div>
              </div>
            </div>

            <button onClick={resetTest} style={{ padding: '15px 40px', background: '#333', color: 'white', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <RotateCcw size={20} /> Retake Test
            </button>
          </div>
        ) : (
          // --- TYPING SECTION ---
          <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
            
            {/* Timer Bar */}
            <div style={{ background: '#f8f9fa', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
              <span style={{ fontWeight: 'bold', color: '#555', fontSize: '16px' }}>
                Mode: {selectedDuration / 60} Minutes
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: timeLeft < 10 ? '#d32f2f' : '#333', fontWeight: 'bold', fontSize: '20px' }}>
                <Clock size={20} /> 
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </div>
            </div>

            <div style={{ padding: '30px' }}>
              {/* Text Display Area (Scrollable) */}
              <div 
                onClick={() => inputRef.current.focus()}
                style={{ 
                  background: '#fafafa', padding: '25px', borderRadius: '10px', 
                  border: '2px solid #eee', height: '200px', overflowY: 'hidden', // Hidden scroll for clean look, logic handles scroll
                  textAlign: 'left', marginBottom: '25px', fontFamily: 'monospace', 
                  cursor: 'text', position: 'relative'
                }}
              >
                {/* Fade overlay for better focus look */}
                <div style={{position:'absolute', top:0, left:0, right:0, height:'30px', background: 'linear-gradient(to bottom, #fafafa, transparent)', zIndex:2, pointerEvents:'none'}}></div>
                <div style={{position:'absolute', bottom:0, left:0, right:0, height:'30px', background: 'linear-gradient(to top, #fafafa, transparent)', zIndex:2, pointerEvents:'none'}}></div>
                
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
                    border: startCounting ? '2px solid #007bff' : '2px solid #ccc', 
                    outline: 'none', fontFamily: 'monospace', textAlign: 'center', 
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                  }} 
                  placeholder={startCounting ? "" : "Click here & start typing..."}
                  autoFocus
                />
                <div style={{ position: 'absolute', right: '15px', top: '22px', color: '#aaa', fontSize: '12px', pointerEvents: 'none', background:'white', paddingLeft:'5px' }}>
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
