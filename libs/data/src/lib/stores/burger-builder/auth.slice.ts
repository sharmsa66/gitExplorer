import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthRequest, AuthResponse } from './interfaces';
import { burgerState } from './store';

export const checkAuthTimeout = createAsyncThunk(
  'auth/checkTimeout',
  async (expirationTime: number, thunkApi) => {
    console.log('exp time', expirationTime);
    return setTimeout(() => {
      return thunkApi.dispatch(authSlice.actions.setLogOut());
    }, expirationTime);
  }
);

export const authenticateUser = createAsyncThunk(
  'auth/gettoken',
  async (arg: AuthRequest, thunkApi) => {
    let url = ''; // 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    if (arg.mode === 'sign-in') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    }
    const tokenData = await axios.post(
      `${url}AIzaSyD77l8Hq0woLcX3m_1DIZe5OpAFVOUtohA`,
      arg.request,
    );
    localStorage.setItem('token', JSON.stringify(tokenData.data));
    thunkApi.dispatch(authSlice.actions.setAuthToken(tokenData.data));
    return thunkApi.dispatch( checkAuthTimeout(+tokenData.data.expiresIn * 1000));
  }
);

export const checkAuthToken = createAsyncThunk(
  'auth/checkToken',
  async(_, thunkApi) => {
    const authData = JSON.parse(localStorage.getItem('token')) as AuthResponse;
     const expireTime =  new Date(new Date().getTime() + (+authData.expiresIn * 1000));
     console.log('authDAta....', authData);
    if(!authData.idToken){
      console.log('not auth');
     thunkApi.dispatch(setLogOut());
    } else {
      console.log('expire time', expireTime);
       if(expireTime < new Date()) {
         thunkApi.dispatch(setLogOut())
       } else {
         console.log('authdata', JSON.stringify(authData));
         thunkApi.dispatch(setAuthToken(authData));
       }
    }
  }
)

const initialState =   {
  idToken : '',
  email: '',
  refreshToken: '',
  expiresIn: '',
  localId: '',
  registered:  null,
  isAuth: false
}

const authSlice = createSlice({
  name: 'Auth',
  initialState:  initialState,
  reducers: {
    setAuthToken: {
      reducer: (state, action: PayloadAction<AuthResponse>) => {
        return {
          ...state,
           ...action.payload,
           isAuth: true
        };
      },
      prepare(authData: AuthResponse) {
        return { payload: authData };
      },
    },


    setLogOut: {
      reducer: (state) => {
        localStorage.removeItem('token');
        return (state = initialState);
      },
      prepare: () => {
        return { payload: '' };
      },
    },
  },
});

export const { reducer } = authSlice;
export const { setLogOut, setAuthToken } = authSlice.actions;
export const selectAuthState = (state: burgerState) => state.auth as AuthResponse;
