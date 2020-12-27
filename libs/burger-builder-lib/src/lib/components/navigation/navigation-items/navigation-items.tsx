import React from 'react';

import classes from './navigation-items.module.scss';

import NavigationItem from './navigation-item/navigation-item';

/* eslint-disable-next-line */
export interface NavigationItemsProps {
  isAuth: boolean;
}

export function NavigationItems(props: NavigationItemsProps) {
  return (
    <ul className={classes['navigation-items']}>
      <NavigationItem link="/">Burger Builder</NavigationItem>

      {props.isAuth ? (
        <>
         <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
        </>
      ) : (
        <NavigationItem link="/auth">Authentication</NavigationItem>
      )}
    </ul>
  );
}

export default NavigationItems;
