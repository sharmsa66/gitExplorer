import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import {
  Layout,
  BurgerBuilder,
  Checkout,
  Orders,
  Auth,
  Logout,
} from '@git-explorer/burger-builder-lib';
import { checkAuthToken, selectAuthState } from '@git-explorer/data';

export function App() {
  const dispatch = useDispatch();
  const authSate = useSelector(selectAuthState);
  useEffect(() => {
    dispatch(checkAuthToken());
  }, [dispatch]);
 
  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerBuilder} />
    </Switch>
  );
  if (authSate.isAuth) {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    );
  }
  console.log('routes', routes);
  return (<Layout>{routes}</Layout>);
}

export default App;
