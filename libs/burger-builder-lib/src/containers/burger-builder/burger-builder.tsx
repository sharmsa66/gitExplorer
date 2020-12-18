import React from 'react';

import './burger-builder.module.scss';

/* eslint-disable-next-line */
export interface BurgerBuilderProps {}

export function BurgerBuilder(props: BurgerBuilderProps) {
  return (
    <>
      <div className="burger">Burger</div>
      <div>Build Controls</div>
    </>
  );
}

export default BurgerBuilder;
