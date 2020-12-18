import { createSlice} from '@reduxjs/toolkit';
import {gitRootState} from '@git-explorer/data';


const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    addition: (state,action) =>  state +=action.payload,
    substraction:(state,action) => state -=action.payload
  },
});

export const { increment, decrement, addition,substraction } = counterSlice.actions;
export const selectCounter =  (state:gitRootState) => state.counter;
export const { reducer } = counterSlice;
