
import React, { FC } from 'react';

import classes from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string
}

export const Button :FC<ButtonProps> =({label, ...props}) => {
  return (
     <button className={classes.Button} {...props}>{label}</button>
  );
}

export default Button;
