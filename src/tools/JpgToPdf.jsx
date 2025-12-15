import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import SEO from '../SEO';
import { FileText, Download, ImagePlus } from 'lucide-react';

const JpgToPdf = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if(file) {
        setPreview(URL.createObjectURL(file));
        const reader = new FileReader();
        reader.onload = (event) => setImage(event.target.result);
        reader.readAsDataURL(file);
    }
  };

  const generatePDF = () => {
    if(!image) return;
    const doc = new jsPDF();
    const imgProps = doc.getImageProperties(image);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    doc.addImage(image, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    doc.save("toponlineform-doc.pdf");
  };

  return (
    <div style={{ background: '#ffebee', minHeight: '90vh', padding: '40px 15px' }}>
      <SEO title="JPG to PDF Converter - Free Online Tool" description="Convert your images (JPG/PNG) to PDF format instantly. No watermark, fully free." url="https://toponlineform.com/tools/jpg-to-pdf" />

      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ background: '#d32f2f', padding: '25px', textAlign: 'center', color: 'white' }}>
          <h1 style={{ margin: 0, fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <FileText size={28} /> JPG to PDF
          </h1>
        </div>

        <div style={{ padding: '30px', textAlign: 'center' }}>
          
          <div style={{ border: '2px dashed #d32f2f', borderRadius: '12px', padding: '40px', background: '#FFEBEE', cursor: 'pointer', position: 'relative', marginBottom: '25px' }}>
            <input type="file" accept="image/*" onChange={handleImage} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
            <ImagePlus size={48} color="#d32f2f" />
            <p style={{ margin: '10px 0 0', fontWeight: 'bold', color: '#b71c1c' }}>Select Image to Convert</p>
          </div>

          {preview && (
            <div style={{ marginBottom: '25px' }}>
                <img src={preview} alt="Preview" style={{ maxWidth: '150px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
            </div>
          )}

          {image && (
             <button onClick={generatePDF} style={{ padding: '14px 30px', background: '#d32f2f', color: 'white', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 10px rgba(211, 47, 47, 0.3)' }}>
                <Download size={20} /> Download PDF
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JpgToPdf;
