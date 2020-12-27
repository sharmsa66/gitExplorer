import React from 'react';

import classes from './circle.module.scss';

const Circle = ({ step, onCircleClick }) => {
  return (
    <div className={classes["circle-container"]}>
      <div className={classes.circle} onClick={() => onCircleClick(step)}>
        <span>{step.id}</span>
      </div>
      <div className={classes["circle-description"]}>{step.name}</div>
    </div>
  );
};

export default Circle;
