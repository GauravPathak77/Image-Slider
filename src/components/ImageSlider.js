"use client";

import { useState } from "react";
import styles from "../styles/style.module.css";

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className={styles.sliderContainer}>
      <img
        src={`/images/${sliderValue}.jpg`}
        alt={`Image ${sliderValue}`}
        className={styles.image}
      />
      <input
        type="range"
        min="0"
        max="10000"
        value={sliderValue}
        onChange={handleSliderChange}
        className={styles.slider}
      />
    </div>
  );
};

export default ImageSlider;
