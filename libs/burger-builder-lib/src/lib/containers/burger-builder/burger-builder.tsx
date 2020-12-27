import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Burger from '../../components/burger/burger';

import { Modal, Loaders } from '@git-explorer/ui';

import './burger-builder.module.scss';
import BuildControls from '../../components/burger/build-controls/build-controls';
import OrderSummary from '../../components/burger/order-summary/order-summary';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIngredient,
  removeIngredient,
  selectIngredients,
  fetchIngredients,
  selectAuthState
} from '@git-explorer/data';

/* eslint-disable-next-line */
export interface BurgerBuilderProps {}

export function BurgerBuilder() {
  const [purchasing, setPurchasing] = useState(false);
  const dispatch = useDispatch();
  const { ingredients, totalPrice } = useSelector(selectIngredients);
  const history = useHistory();
  const authState = useSelector(selectAuthState);

  const addIngredientHandler = (type) => {
    dispatch(addIngredient(type));
  };

  const removeIngredientHandler = (type) => {
    dispatch(removeIngredient(type));
  };

  const purchaseHandler = () => {
    if(authState.isAuth) {
      setPurchasing(true);
    } else{
      history.push('/auth');
    }

  };

  const purchaseCancelHandler = () => {
    setPurchasing(false)
  };

  const purchaseContinueHandler = () => {
    history.push('/checkout');
  };

  const disabledInfo = {
    ...ingredients,
  };

  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  let burger = <> <Loaders show={true} /> </>;

  if (ingredients) {
    burger = (
      <>
        <Modal
          header="Burger"
          show={purchasing}
          modalClicked={purchaseCancelHandler}
        >
          <OrderSummary
            totalPrice={totalPrice}
            ingredients={ingredients}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinue={purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          disabledItems={disabledInfo}
          isAuth = { !!authState}
          price={totalPrice}
          ordered={purchaseHandler}
        />
      </>
    );
  }

  return (
    <> {burger } </>);
}

export default BurgerBuilder;
