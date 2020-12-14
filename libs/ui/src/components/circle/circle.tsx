import React from 'react';

import classes from './circle.module.scss';

const Circle = ({ headerText, onCircleClick }) => {
  return (
    <div
      className={classes.circle}
      onClick={() => onCircleClick(headerText)}
    >
      <span>{headerText}</span>
    </div>
  );
};

export default Circle;
