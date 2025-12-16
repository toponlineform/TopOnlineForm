import React, { useState, useRef } from 'react';
import SEO from '../SEO';
import { Upload, Download, Calendar, Type } from 'lucide-react';

const DateOnPhoto = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => drawCanvas(img, name, date);
        img.src = event.target.result;
        setImage(img);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawCanvas = (img, nameText, dateText) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match image
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw Image
    ctx.drawImage(img, 0, 0);

    if (nameText || dateText) {
      // Bottom Strip Settings
      const stripHeight = img.height * 0.25; // 25% of image height
      const yPos = img.height - stripHeight;
      
      // Draw White Strip
      ctx.fillStyle = 'white';
      ctx.fillRect(0, yPos, img.width, stripHeight);

      // Text Settings
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      
      // Dynamic Font Size
      const fontSize = img.width * 0.08;
      ctx.font = `bold ${fontSize}px Arial`;

      // Draw Name
      if (nameText) {
        ctx.fillText(nameText.toUpperCase(), img.width / 2, yPos + (stripHeight * 0.4));
      }
      
      // Draw Date (DOP: DD-MM-YYYY)
      if (dateText) {
        // Format date to DD-MM-YYYY
        const d = new Date(dateText);
        const formattedDate = `DOP: ${d.getDate().toString().padStart(2,'0')}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getFullYear()}`;
        ctx.fillText(formattedDate, img.width / 2, yPos + (stripHeight * 0.8));
      }
    }
  };

  // Update canvas when inputs change
  const handleUpdate = (newName, newDate) => {
    setName(newName);
    setDate(newDate);
    if (image) drawCanvas(image, newName, newDate);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'photo-with-date.jpg';
    link.href = canvasRef.current.toDataURL('image/jpeg');
    link.click();
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Add Date on Photo Online - SSC & Railway Format" description="Add Name and Date of Photo (DOP) on your passport size photo for SSC CGL, CHSL, and other exams." url="https://toponlineform.com/tools/date-on-photo" />
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333', fontSize: '24px' }}>📸 Add Date on Photo (SSC)</h1>
        
        <div style={{ margin: '20px 0', border: '2px dashed #007bff', padding: '20px', textAlign: 'center', borderRadius: '10px', background: '#e3f2fd' }}>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="upload-dop" />
          <label htmlFor="upload-dop" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Upload size={40} color="#007bff" />
            <span style={{ fontWeight: 'bold', color: '#007bff' }}>Upload Photo</span>
          </label>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => handleUpdate(e.target.value, date)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date of Photo</label>
            <input type="date" value={date} onChange={(e) => handleUpdate(name, e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <canvas ref={canvasRef} style={{ maxWidth: '100%', maxHeight: '400px', border: '1px solid #ddd', borderRadius: '5px' }} />
        </div>

        {image && (
          <button onClick={downloadImage} style={{ marginTop: '20px', width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Download size={20} /> Download Photo
          </button>
        )}
      </div>
    </div>
  );
};

export default DateOnPhoto;
