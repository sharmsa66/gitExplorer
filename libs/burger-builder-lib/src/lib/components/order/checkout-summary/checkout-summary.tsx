import React from 'react';

import classes from './checkout-summary.module.scss';
import Burger from '../../burger/burger';
import { Button } from '@git-explorer/ui';

const CheckoutSummary = ({
  ingredients,
  checkoutCanceled,
  checkoutContiue,
}) => {
  return (
    <div className={classes['checkout-summary']}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="secondary" clicked={checkoutCanceled}>
        CANCEL
      </Button>
      <Button btnType="primary" clicked={checkoutContiue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
