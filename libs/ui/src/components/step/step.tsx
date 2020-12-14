import React from 'react';
import Circle from '../circle/circle';

import classes from './step.module.scss';

export interface StepProps {
  headerText;
  onCircleClick;
  labelText;
}

export function Step(props: StepProps) {
  return (
    <div className={classes.step}>
        <Circle
          headerText={props.headerText}
          onCircleClick={props.onCircleClick}
        />
      <div className={classes["step-description"]}>{props.labelText}</div>
    </div>
  );
}

export default Step;
