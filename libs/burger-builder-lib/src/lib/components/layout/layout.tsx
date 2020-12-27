import React, {FC, useState}from 'react';
import SideDrawer from '../navigation/sidedrawer/sidedrawer';
import Toolbar from '../navigation/toolbar/toolbar';
import { useSelector  } from 'react-redux';
import {
  selectAuthState
} from '@git-explorer/data';
import classes from  './layout.module.scss';

export const Layout:FC = ({children}) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const authObj= useSelector(selectAuthState);
  const isAuth = authObj.isAuth;

  const sideDrawerClosedHandler = () => {
     setShowSideDrawer(false);
  }

  const sideDrawertoggleHandler =() => {
    setShowSideDrawer(! showSideDrawer);
  }

  return (
    <>
     <Toolbar isAuthenticated={isAuth} clicked={sideDrawertoggleHandler}
      />
     <SideDrawer isAuthenticated={isAuth}
      open={showSideDrawer}
     closed= {sideDrawerClosedHandler}/>
      <main className={classes.main}>
        {children}
      </main>
    </>
  );
}

export default Layout;
