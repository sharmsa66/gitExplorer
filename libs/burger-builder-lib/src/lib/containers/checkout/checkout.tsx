import React from 'react';
import {
  Route,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import CheckoutSummary from '../../components/order/checkout-summary/checkout-summary';
import {useSelector} from 'react-redux';
import {selectIngredients} from '@git-explorer/data'


import ContactData from './contact-data/contact-data';

/* eslint-disable-next-line */
export interface CheckoutProps {}

export const Checkout = () => {
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const {ingredients} = useSelector(selectIngredients);

  const checkoutCancelHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };

  const checkoutContinueHandler = (event) => {
    event.preventDefault();
    history.replace('/checkout/contact-data');
  };


  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCanceled={checkoutCancelHandler}
        checkoutContiue={checkoutContinueHandler}
      />
      <Route
        path={ routeMatch.path + '/contact-data'}
        component={ContactData}
      />
    </div>
  );
};

export default Checkout;
