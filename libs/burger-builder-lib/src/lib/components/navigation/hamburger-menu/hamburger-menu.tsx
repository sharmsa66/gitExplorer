import { checkPropTypes } from 'prop-types';
import React from 'react';

import classes from './hamburger-menu.module.scss';

const hamburgerMenu = (props) => (
  <div onClick={props.toggle} className ={classes.hamburgerMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default hamburgerMenu;
