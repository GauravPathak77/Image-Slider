// src/components/ImageSlider.js
"use client";

import {useState} from 'react';

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleSliderChange = (event) => {
    const newIndex = Math.max(Math.min(parseInt(event.target.value), 100), 0);
    setImageIndex(newIndex);
  };

  return (
    <div>
      <img src={`/images/${imageIndex}.jpg`} alt={`Image ${imageIndex}`} />
      <input
        type="range"
        min={0}
        max={100}
        value={imageIndex}
        onChange={handleSliderChange}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default ImageSlider;