import React, { useRef, useState, useEffect } from 'react';
import SEO from '../SEO';
import { PenTool, Download, Eraser, RefreshCw } from 'lucide-react';

const SignatureMaker = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#000000');
  const [penSize, setPenSize] = useState(2);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = getCoordinates(nativeEvent);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(nativeEvent);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.closePath();
    setIsDrawing(false);
  };

  const getCoordinates = (event) => {
    if (event.touches && event.touches[0]) {
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        offsetX: event.touches[0].clientX - rect.left,
        offsetY: event.touches[0].clientY - rect.top
      };
    }
    return { offsetX: event.offsetX, offsetY: event.offsetY };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSignature = () => {
    const link = document.createElement('a');
    link.download = 'my-signature.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ background: '#eef2f3', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Free Digital Signature Maker Online - E-Sign" description="Create your digital signature online for free. Draw, sign, and download transparent PNG signature for documents." url="https://toponlineform.com/tools/signature-maker" />
      
      <div style={{ maxWidth: '700px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginBottom:'20px' }}>✍️ Digital Signature Maker</h1>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '15px', flexWrap: 'wrap' }}>
          <div>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Color:</label>
            <input type="color" value={penColor} onChange={(e) => setPenColor(e.target.value)} />
          </div>
          <div>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Thickness:</label>
            <input type="range" min="1" max="10" value={penSize} onChange={(e) => setPenSize(e.target.value)} />
          </div>
        </div>

        <div style={{ border: '2px solid #ddd', borderRadius: '8px', cursor: 'crosshair', overflow: 'hidden', touchAction: 'none' }}>
          <canvas
            ref={canvasRef}
            width={600}
            height={300}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            style={{ width: '100%', background: 'white' }}
          />
        </div>
        <p style={{ textAlign: 'center', color: '#888', fontSize: '12px', marginTop: '5px' }}>Draw your signature in the box above</p>

        <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
          <button onClick={clearCanvas} style={{ flex: 1, padding: '12px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Eraser size={20} /> Clear
          </button>
          <button onClick={downloadSignature} style={{ flex: 1, padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Download size={20} /> Download PNG
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureMaker;
