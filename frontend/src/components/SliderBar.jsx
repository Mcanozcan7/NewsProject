/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// SliderBar.jsx
import React from 'react';

const SliderBar = ({ totalSlides, currentSlide, onChangeSlide }) => {
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalSlides; i++) {
      buttons.push(
        <button key={i} onClick={() => onChangeSlide(i)} disabled={currentSlide === i}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{renderButtons()}</div>;
};

export default SliderBar;
