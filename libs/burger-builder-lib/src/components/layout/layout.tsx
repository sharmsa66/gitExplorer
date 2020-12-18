import React, {FC}from 'react';

import classes from  './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  title:string,
}

export const Layout:FC<LayoutProps> = ({title, children}) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.main}>
        {children}
      </main>
    </>
  );
}

export default Layout;
