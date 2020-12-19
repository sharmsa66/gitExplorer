import React,{useState, useCallback} from 'react';

import Burger from '../../components/burger/burger';

import './burger-builder.module.scss';
import BuildControls from '../../components/burger/build-controls/build-controls';

/* eslint-disable-next-line */
export interface BurgerBuilderProps {}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: .07
  
}

const baseIngredients ={
   salad: 0,
   meat: 0,
   cheese: 0,
   bacon: 0,
  };



export function BurgerBuilder(props: BurgerBuilderProps) {
  const [ingredients, setIngredients] = useState(baseIngredients);
  const [totalPrice,setTotalPrice] = useState(4);
 
  const addIngredientHandler = (type) =>{
    console.log('in add ingredient handler');
   
    const newIngredients  = {...ingredients};
    newIngredients[type] +=1;
    setIngredients(newIngredients);
    const itemPrice = INGREDIENT_PRICES[type];
    const newPrice = totalPrice + itemPrice;
    setTotalPrice(newPrice);
    
  } 

  const removeIngredientHandler = useCallback((type) =>{

    const newIngredients  = {...ingredients};
    newIngredients[type] -=1;
    setIngredients(newIngredients);
    const itemPrice = INGREDIENT_PRICES[type];
    const newPrice = totalPrice  - itemPrice;
    setTotalPrice(newPrice);
 },[totalPrice,ingredients]) ;
  
  
  
  return (
    <>
        <Burger ingredients ={ingredients} />
       <BuildControls ingredientAdded={addIngredientHandler} ingredientRemoved ={removeIngredientHandler} />
    </>
  );
}

export default BurgerBuilder;
