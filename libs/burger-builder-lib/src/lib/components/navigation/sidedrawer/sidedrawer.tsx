import { Backdrop } from '@git-explorer/ui';
import React from 'react';
import Logo from '../logo/logo';
import NavigationItems from '../navigation-items/navigation-items';

 import classes from './sidedrawer.module.scss';


const sideDrawer = (props) => {
   let attachedClasses = [classes.sidedrawer, classes.close];

   if(props.open) {
     attachedClasses = [classes.sidedrawer, classes.open]
   } else {
     attachedClasses = [classes.sidedrawer, classes.close];
   }

  return (
    <>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
     <div className={classes.logo}>
     <Logo />
     </div>
      <nav>
        <NavigationItems isAuth={props.isAuthenticated} />
      </nav>
    </div>
    </>
  );
};

export default sideDrawer;
