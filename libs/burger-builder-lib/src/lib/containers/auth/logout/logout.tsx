import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setLogOut } from '@git-explorer/data';

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogOut());
  },[dispatch]);

  return <Redirect to="/" />;
};

export default Logout;
