import React from 'react';

import classes from './backdrop.module.scss';

/* eslint-disable-next-line */
export interface BackdropProps {
  show: boolean;
  clicked: ()=> void;
}

export function Backdrop(props: BackdropProps) {
  return (
    props.show ? <div className={classes.backdrop} onClick={props.clicked}></div>: null
  );
}

export default Backdrop;
