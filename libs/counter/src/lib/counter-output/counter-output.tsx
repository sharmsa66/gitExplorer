
import React, {FC} from 'react';


import classes from  './counter-output.module.scss';

/* eslint-disable-next-line */
export interface CounterOutputProps {
  value: number;
}

export const CounterOutput:FC<CounterOutputProps> =({value}) => {
  return (
    <div className={classes['counter-output']}>
        Current Counter: {value}
    </div>
  );
}

export default CounterOutput;
