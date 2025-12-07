import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage
    const isClosed = localStorage.getItem('whatsapp_popup_joined');
    
    if (!isClosed) {
      // 3 second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAlreadyJoined = () => {
    setIsVisible(false);
    localStorage.setItem('whatsapp_popup_joined', 'true');
  };

  const handleJoin = () => {
    window.open("https://whatsapp.com/channel/0029Vb7TcG06LwHoTXhZKn2D", "_blank");
    handleAlreadyJoined();
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        
        <div style={{ textAlign: 'center' }}>
          {/* WhatsApp Icon Circle */}
          <div style={{ background: '#25D366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: '0 4px 10px rgba(37, 211, 102, 0.4)' }}>
            <MessageCircle size={32} color="white" />
          </div>
          
          {/* ✅ BRAND NAME HEADER */}
          <h2 style={{ fontSize: '22px', marginBottom: '10px', color: '#ab1e1e', fontWeight: '800', letterSpacing: '0.5px' }}>
            Top Online Form (TOF)
          </h2>
          
          {/* ✅ HINDI MESSAGE */}
          <p style={{ fontSize: '15px', color: '#333', marginBottom: '25px', lineHeight: '1.5', fontWeight: '500' }}>
            Government Jobs ki update sabse phele paane k liye WhatsApp channel join kren.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Join Button */}
            <button 
              onClick={handleJoin}
              style={{
                background: '#25D366', color: 'white', border: 'none', padding: '12px', 
                borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px',
                boxShadow: '0 4px 6px rgba(37, 211, 102, 0.3)', transition: 'background 0.3s'
              }}
            >
              Join WhatsApp Now
            </button>
            
            {/* Already Joined Button */}
            <button 
              onClick={handleAlreadyJoined}
              style={{
                background: '#f1f1f1', color: '#666', border: '1px solid #ccc', padding: '10px', 
                borderRadius: '5px', cursor: 'pointer', fontSize: '13px', fontWeight: '500'
              }}
            >
              I have Already Joined
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
