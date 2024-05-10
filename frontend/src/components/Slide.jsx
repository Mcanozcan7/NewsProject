/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Slide.jsx
import React from 'react';

const Slide = ({ content }) => {
  return (
    <div style={{ width: '100%', height: '300px', border: '1px solid #ddd', padding: '20px' }}>
      {content}
    </div>
  );
};

export default Slide;
