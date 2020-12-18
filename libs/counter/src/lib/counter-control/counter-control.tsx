
import React, { FC, MouseEvent } from 'react';

import classes from  './counter-control.module.scss';

/* eslint-disable-next-line */
export interface CounterControlProps {
  label: string;
  clicked: (MouseEvent) => void
}

export const CounterControl: FC<CounterControlProps> = ({ label, clicked }) => {
  return (
    <div className={classes['counter-control']} onClick={clicked}>
      {label}
    </div>
  );
};

export default CounterControl;
