// src/pages/Gallery.js
import React from 'react';

const images = [
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/201',
  'https://via.placeholder.com/202',
  'https://via.placeholder.com/203',
  'https://via.placeholder.com/204',
  'https://via.placeholder.com/205',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/201',
  'https://via.placeholder.com/202',
  'https://via.placeholder.com/203',
  'https://via.placeholder.com/205',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/201',
  'https://via.placeholder.com/202',
  'https://via.placeholder.com/203',

];

const Gallery = () => {
  return (
    <div style={galleryContainerStyle}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index}`} style={imageStyle} />
      ))}
    </div>
  );
};

export default Gallery;

// Inline styles
const galleryContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '16px',
  padding: '20px',
  flex: '1' // Ensure it takes up the remaining space
};

const imageStyle = {
  width: '300px',
  height: 'auto',
  borderRadius: '8px',
};
