import React, { useState } from 'react';

import classes from './range-slider.module.scss';

/* eslint-disable-next-line */
export interface RangeSliderProps {}

export function RangeSlider(props: RangeSliderProps) {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div>
      <h1>Custom Range Slider</h1>

      <div className={classes.slidecontainer}>
        <p>Default range slider:</p>
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(+e.target.value)}
        />

        <p>Custom range slider:</p>
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(+e.target.value)}
          className={classes.slider}
        />
      </div>

       <p>{sliderValue}</p>
    </div>
  );
}

export default RangeSlider;
