import React, { useState } from 'react';

import { useDispatch, useSelector} from 'react-redux';

import  classes from './auth.module.scss';

import {Input, Button} from '@git-explorer/ui';

import {authenticateUser, selectAuthState } from '@git-explorer/data';
import { Redirect } from 'react-router';

interface  AuthData {
  email: string,
  password: string,
  returnSecureToken: boolean
}

/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth() {
    const[isSignUp, setIsSignUp] = useState(true);
    const dispatch = useDispatch();
    const authData = useSelector(selectAuthState);

    const [auth, setAuth] = useState<AuthData>({
        email: '',
        password: '',
        returnSecureToken: true
    });


  const inputChnageHandler =(event) =>{
    const newAuth = { ...auth };
     newAuth[event.target.name] = event.target.value;
     setAuth(newAuth);
  }

  const submitEventHandler =(event) => {
    event.preventDefault();
    const  authResponse = {
      request: auth,
      mode: isSignUp ? 'sign-up' : 'sign-in',

    }
    dispatch(authenticateUser(authResponse));
  }
  const switchSignUpHandler =(event) => {
    event.preventDefault();
    setIsSignUp(prevState =>{
       return !prevState;
    });
  }
  let authRedirect = null;
   if(authData.isAuth) {
    authRedirect =  <Redirect to="/" />
   }

  return (
    <div className={classes.auth}>
      {authRedirect}
      <form onSubmit={submitEventHandler}>
        <Input inputtype="input"
        elementConfig={{type:"email", placeholder:"Email..."}}
        handleInputChange={inputChnageHandler}
        name="email"
        value={auth.email} />
        <Input inputtype="input"
        elementConfig={{type:"password", placeholder:"Password..."}}
        handleInputChange={inputChnageHandler}
        name="password"
        value={auth.password} />
        <Button btnType="primary">Submit</Button>
      </form>
       <Button btnType="secondary" clicked={switchSignUpHandler}>Switch to {isSignUp? 'SignIn': 'SignUp' }</Button>
    </div>
  );
}

export default Auth;
