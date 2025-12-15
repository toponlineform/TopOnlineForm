import React, { useState } from 'react';
import SEO from '../SEO';
import { Image, Download, Sliders, UploadCloud } from 'lucide-react';

const ImageResizer = () => {
  const [image, setImage] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [quality, setQuality] = useState(0.8);
  const [resizedImage, setResizedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOriginalSize((file.size / 1024).toFixed(2)); // KB
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        const img = new window.Image();
        img.src = event.target.result;
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
        };
      };
      reader.readAsDataURL(file);
      setResizedImage(null);
    }
  };

  const handleResize = () => {
    if (!image) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new window.Image();
    img.src = image;
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const url = canvas.toDataURL('image/jpeg', parseFloat(quality));
      setResizedImage(url);
      
      // Calculate approx size
      const head = 'data:image/jpeg;base64,';
      const size = Math.round((url.length - head.length) * 3 / 4) / 1024;
      setCompressedSize(size.toFixed(2));
    };
  };

  return (
    <div style={{ background: '#f0f4f8', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="Image Resizer & Compressor - Reduce Image Size in KB" description="Free online tool to resize and compress JPG/PNG images. Perfect for government forms, signatures, and profile pictures." url="https://toponlineform.com/tools/image-resizer" />

      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ background: '#1976d2', padding: '25px', textAlign: 'center', color: 'white' }}>
          <h1 style={{ margin: 0, fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Image size={28} /> Image Resizer Pro
          </h1>
        </div>

        <div style={{ padding: '30px' }}>
          {/* Upload Area */}
          <div style={{ border: '2px dashed #1976d2', borderRadius: '12px', padding: '30px', textAlign: 'center', background: '#e3f2fd', cursor: 'pointer', position: 'relative' }}>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
            <UploadCloud size={40} color="#1976d2" />
            <p style={{ margin: '10px 0 0', fontWeight: 'bold', color: '#1565c0' }}>Click to Upload Image</p>
            <p style={{ fontSize: '12px', color: '#666' }}>Supports JPG, PNG, JPEG</p>
          </div>

          {image && (
            <div style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              {/* Controls */}
              <div style={{ flex: 1, minWidth: '280px' }}>
                <h3 style={{ fontSize: '18px', borderBottom: '1px solid #eee', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><Sliders size={18} /> Settings</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px', fontWeight: 'bold' }}>Width (px)</label>
                  <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px', fontWeight: 'bold' }}>Height (px)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px', fontWeight: 'bold' }}>Quality (Compression): {Math.round(quality * 100)}%</label>
                  <input type="range" min="0.1" max="1" step="0.1" value={quality} onChange={(e) => setQuality(e.target.value)} style={{ width: '100%' }} />
                </div>

                <button onClick={handleResize} style={{ width: '100%', padding: '12px', background: '#1976d2', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Resize & Compress</button>
              </div>

              {/* Preview */}
              <div style={{ flex: 1, minWidth: '280px', textAlign: 'center', background: '#f5f5f5', padding: '15px', borderRadius: '12px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Original: {originalSize} KB</p>
                <img src={image} alt="Original" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', marginBottom: '20px' }} />
                
                {resizedImage && (
                  <>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px', color: 'green' }}>Result: {compressedSize} KB</p>
                    <img src={resizedImage} alt="Resized" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', border: '2px solid green' }} />
                    <a href={resizedImage} download="toponlineform-image.jpg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '15px', padding: '10px', background: '#2e7d32', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                      <Download size={18} /> Download Image
                    </a>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageResizer;
