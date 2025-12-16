import React, { useState, useRef } from 'react';
import SEO from '../SEO';
import { Upload, Printer, Scissors } from 'lucide-react';

const PassportPhoto = () => {
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => generateSheet(img);
        img.src = event.target.result;
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSheet = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // A4 Size at 300 DPI (approx 2480 x 3508 pixels)
    canvas.width = 2480;
    canvas.height = 3508;
    
    // Fill white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Passport Photo Size (3.5cm x 4.5cm) -> approx 413 x 531 pixels at 300 DPI
    const pWidth = 413;
    const pHeight = 531;
    const gap = 30; // Gap between photos
    const margin = 100; // Page margin

    let x = margin;
    let y = margin;

    // Grid Loop (6 columns x 5 rows approx)
    for (let i = 0; i < 30; i++) {
        // Draw photo
        ctx.drawImage(img, x, y, pWidth, pHeight);
        
        // Draw Border
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, pWidth, pHeight);

        x += pWidth + gap;
        
        // Move to next row if width exceeds
        if (x + pWidth > canvas.width - margin) {
            x = margin;
            y += pHeight + gap;
        }
    }
  };

  const downloadSheet = () => {
    const link = document.createElement('a');
    link.download = 'passport-photos-A4.jpg';
    link.href = canvasRef.current.toDataURL('image/jpeg');
    link.click();
  };

  return (
    <div style={{ background: '#e0f7fa', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Passport Photo Maker - Create Printable A4 Sheet" description="Convert any photo into passport size and generate a printable A4 sheet with 30 photos. Save money on printing." url="https://toponlineform.com/tools/passport-photo-maker" />
      
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center' }}>
        <h1 style={{ color: '#006064', fontSize: '26px' }}>🖨️ Passport Photo Maker</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>Upload a photo & get a ready-to-print A4 sheet with 30 copies.</p>

        <div style={{ marginBottom: '20px' }}>
            <input type="file" accept="image/*" onChange={handleImageUpload} id="pp-upload" style={{display:'none'}} />
            <label htmlFor="pp-upload" style={{ background: '#00bcd4', color: 'white', padding: '12px 25px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={20} /> Select Photo
            </label>
        </div>

        <div style={{ overflow: 'auto', border: '1px solid #ddd', maxHeight: '500px', marginBottom: '20px' }}>
            <canvas ref={canvasRef} style={{ width: '100%', maxWidth: '500px', background: 'white' }} />
            {!image && <div style={{padding:'50px', color:'#999'}}>Preview will appear here...</div>}
        </div>

        {image && (
            <button onClick={downloadSheet} style={{ background: '#006064', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <Printer size={22} /> Download A4 Sheet
            </button>
        )}
      </div>
    </div>
  );
};

export default PassportPhoto;
