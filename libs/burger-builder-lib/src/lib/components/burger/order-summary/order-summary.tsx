import React from 'react';

import {Button} from '@git-explorer/ui';

import './order-summary.module.scss';

/* eslint-disable-next-line */
export interface OrderSummaryProps {
  ingredients: unknown;
  purchasecanceld: () => void;
  totalPrice: number;
}

export const OrderSummary = ({ ingredients, purchaseCanceled, totalPrice,  purchaseContinue }) => {
  const ingrdientsList = Object.keys(ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
    </li>
  ));



  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>{ingrdientsList}</ul>
      <p>Total Price: <strong>{totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout...</p>
      <Button btnType="secondary" clicked={purchaseCanceled}> Cancel</Button>
      <Button btnType="primary"  clicked={purchaseContinue}> Continue</Button>
    </>
  );
};

export default OrderSummary;
