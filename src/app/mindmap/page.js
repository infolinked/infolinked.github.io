'use client'
import React from 'react';

const HomePage = () => {
    return (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0 
      }}>
          <h1 style={{ position: 'absolute', zIndex: 1 }}>Welcome to My Next.js App</h1>
          <iframe
              src="/index.html" // Use /index.html to reference the file correctly
              style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 0 // Make sure the iframe is behind the heading
              }}
              title="External HTML Page"
          />
      </div>
    );
};

export default HomePage;