import React, { useRef, useEffect, useCallback } from "react";
import Step from '../step/step';

import classes from  './progress-bar.module.scss';

/* eslint-disable-next-line */
export interface ProgressBarProps {}

export function ProgressBar({ steps, onStepActivated, currentStep}) {
  const barEl = useRef(null);
  const totalSteps = steps.length - 1;

  const calculateBar = useCallback( (val) => {
     const step = steps.find( step => step.id === val);
     let idx = 0;
     if(step) {
        idx = step.id;
     }
     const  offset = Math.ceil(32 / totalSteps);
     const counterVal = Math.floor((100 / totalSteps) * idx);
     return `calc(${counterVal}% - ${offset}px)`;
  },[steps, totalSteps]);

  const clickHandler = useCallback( (val) => {
    onStepActivated(val - 1);
    barEl.current.style.width = calculateBar( val - 1);
  },[calculateBar,onStepActivated]);


  useEffect(() => {
    barEl.current.style.width = calculateBar();
  }, [currentStep, calculateBar]);

  return (
    <div className={classes.progressbar}>
      <div className={classes.bar} ref={barEl}/>
        <div className={classes.stepContainer}>
          {steps.map((stepItem) => (
            <Step
              key={stepItem.id}
              onCircleClick={clickHandler}
              headerText={stepItem.id}
              labelText={stepItem.name}
            />
          ))}
      </div>
    </div>
  );
}

export default ProgressBar;
