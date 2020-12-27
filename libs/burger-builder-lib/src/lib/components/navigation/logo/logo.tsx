import React from 'react';

import burgerLogo from '../../../../../../../assets/images/burger-logo.png';

import classes from './logo.module.scss';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div className={classes.logo}>
       <img src={burgerLogo} alt="logo" />
    </div>
  );
}

export default Logo;
