import React from 'react'

import classes from  './order.module.scss';


export const Order = ({ingredients, price}) =>  {
 const ingredientObj = Object.keys(ingredients).map(ingredient => {
    return <span key={ingredient}>{ingredient} ({ingredients[ingredient]})</span>
 })

 return (
    <div className={classes.order}>
      <p>Ingredients: {ingredientObj}</p>
       <p>Price: <strong>USD {price.toFixed(2)}</strong></p>
    </div>
  )

}


export default Order;
