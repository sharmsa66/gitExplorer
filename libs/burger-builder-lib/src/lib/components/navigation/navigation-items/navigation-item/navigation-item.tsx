import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navigation-item.module.scss';

const navigationItem = (props) => (
  <li className={classes['navigation-item']}>
    <NavLink to={props.link} exact activeClassName={classes.active}>{props.children}</NavLink>
  </li>
);

export default navigationItem;
