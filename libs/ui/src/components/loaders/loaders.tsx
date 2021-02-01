import classes from './loaders.module.scss';
import React from 'react';


/* eslint-disable-next-line */
export interface LoadersProps {
  show: boolean;
}

export function Loaders(props: LoadersProps) {
  const display = props.show? 'display': 'none';

  return (
    <div className={classes.loader} style={{display : display}}/>
  );
}

export default Loaders;
