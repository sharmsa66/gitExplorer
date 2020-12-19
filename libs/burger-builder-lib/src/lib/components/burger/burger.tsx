import React, { FC, useCallback, useEffect } from 'react';
import BurgerIngredient, {
} from './burger-ingredient/burger-ingredient';

import classes from './buger.module.scss';

/* eslint-disable-next-line */
export interface BurgerProps {
  ingredients: any
}

export const Burger: FC<BurgerProps> = React.memo(({ ingredients }) => {
  let transformedIngredients =[];

 
    Object.keys(ingredients).map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i } type={igKey} />
      )); 
    }).reduce((acc, curr) => {
        return acc.concat(curr);
    },[]);
  
    if(transformedIngredients.length === 0) {
       transformedIngredients.push( <p key="empty">Please start adding ingredients</p>);
    }
  
 

  return (
    <div className={classes.Burger}>
      <BurgerIngredient key={'breadTop'} type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient key={'breadBottom'} type="bread-bottom" />
    </div>
  );
});

export default Burger;
