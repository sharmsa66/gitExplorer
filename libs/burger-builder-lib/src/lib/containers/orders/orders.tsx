import React, { useEffect } from 'react';
import Order from '../../components/order/order';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOrders,
  selectOrderState,
  selectAuthState,
  AuthResponse,
} from '@git-explorer/data';
import './orders.module.scss';
import { Loaders } from '@git-explorer/ui';

export function Orders() {
  const { orders, loading } = useSelector(selectOrderState);
  const authState: AuthResponse = useSelector(selectAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchOrders() {
       dispatch(getOrders({token:authState.idToken, userId: authState.localId}));
    }
    fetchOrders();
  }, [dispatch, authState.idToken, authState.localId]);

  let orderGrid;

  if (orders.length > 0) {
    orderGrid = orders.map((order) => (
      <Order
        key={order.key}
        ingredients={order.ingredients}
        price={order.totalPrice}
      />
    ));
  } else {
    orderGrid = <Loaders show={loading} />;
  }

  return (
    <div>
      <h1>Welcome to orders!</h1>
      {orderGrid}
    </div>
  );
}

export default Orders;
