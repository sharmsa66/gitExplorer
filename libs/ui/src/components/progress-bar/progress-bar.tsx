import React, { useRef, useEffect, useCallback } from "react";
import Circle from './circle/circle';
import {Step}  from '@git-explorer/data';

import classes from  './progress-bar.module.scss';

/* eslint-disable-next-line */
export interface ProgressBarProps {
  steps: [Step];
  onStepActivated: (step:Step) => void;
  stepIndex: number;
}

export function ProgressBar(props:ProgressBarProps) {
  const barEl = useRef(null);
  const totalSteps = props.steps.length - 1;
  const steps: [Step] = props.steps;

  const calculateBar = useCallback( (step:Step) => {
     const idx =  step.id  - 1
     const counterVal = Math.floor((100 / totalSteps) * idx);
     return `calc(${counterVal}% )`;
  },[ totalSteps]);

  const clickHandler = useCallback( (step:Step) => {
    props.onStepActivated(step);
    barEl.current.style.width = calculateBar(step);
  },[calculateBar, props]);




  useEffect(() => {
    if(props.stepIndex > -1){
      barEl.current.style.width = calculateBar(props.steps[props.stepIndex]);
    }

  }, [props.steps,props.stepIndex, calculateBar]);

  return (
    <div className={classes.progressbar}>
      <div className={classes.bar} ref={barEl} style={{backgroundColor:'red'}}/>
        <div className={classes.stepContainer}>
          {steps.map((stepItem) => (
            <Circle
              key={stepItem.id}
              onCircleClick={clickHandler}
              step={stepItem}
            />
          ))}
      </div>
    </div>
  );
}

export default ProgressBar;
