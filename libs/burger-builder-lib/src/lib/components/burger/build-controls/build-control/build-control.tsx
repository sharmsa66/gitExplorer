import React from 'react';

import classes from  './build-control.module.scss';

/* eslint-disable-next-line */
export interface BuildControlProps {
  label:string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}

export const BuildControl =({label, added, removed,disabled}) => {
  return (
    <div className={classes['build-control']}>
      <div className={classes.label}>{label}</div>
      <button className={classes.less} disabled={disabled} onClick={() =>  removed()} style={{}} >Less</button>
      <button className={classes.more} onClick={() => added() } >More</button>
    </div>
  );
}

export default BuildControl;
