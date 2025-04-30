import React, { useState } from 'react';

const SecondBirthdayPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleRedirectFirst = () => {
    window.location.href = '/birthdaycard/index.html';
  };

  const handleRedirectSecond = () => {
    window.location.href = '/birthdaycard/index2.html';
  };

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'sans-serif' }}>
      {/* First Surprise - Gift Box Button */}
      <button
        onClick={handleRedirectFirst}
        style={{
          padding: '16px 32px',
          fontSize: '18px',
          backgroundColor: '#FFD700',
          color: '#000',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          marginBottom: '20px',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        🎁 First Surprise: Click here Sanjana 💌
      </button>
      <br />

      {/* Second Surprise Button */}
      <button
        onClick={handleRedirectSecond}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#ff69b4',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          marginBottom: '30px',
          cursor: 'pointer',
        }}
      >
        💝 Second Surprise
      </button>
      <br />

      {/* Third Surprise Button - Opens Video */}
      <button
        onClick={handleToggleVideo}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#8a2be2',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        🎬 Third Surprise: Watch a Video
      </button>

      {/* Modal Video Overlay */}
      {showVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <div style={{ position: 'relative' }}>
            <iframe
              width="360"
              height="640"
              src="https://drive.google.com/file/d/1RxAOFeZ_V7YjFDKEVAzb0necEWfJFOJN/preview"
              title="Birthday Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ borderRadius: '12px', border: 'none' }}
            ></iframe>
            <button
              onClick={handleToggleVideo}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-10px',
                background: '#fff',
                border: 'none',
                fontSize: '20px',
                padding: '5px 10px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondBirthdayPage;
