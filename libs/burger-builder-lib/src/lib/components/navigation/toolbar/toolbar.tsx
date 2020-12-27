import React from 'react';
import HamburgerMenu from '../hamburger-menu/hamburger-menu';
import Logo from '../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';

import classes from  './toolbar.module.scss';

/* eslint-disable-next-line */
export interface ToolbarProps {
  clicked: () => void;
  isAuthenticated: boolean
}

export function Toolbar(props: ToolbarProps) {
   console.log('toolbar', props.isAuthenticated);

  return (
      <header className={classes.header}>
         <HamburgerMenu toggle={props.clicked} />
        <div className={classes.logo}>
        <Logo />
        </div>
        <nav className={classes.desktopOnly}>
          <NavigationItems isAuth={props.isAuthenticated}/>
        </nav>
      </header>
  );
}

export default Toolbar;
