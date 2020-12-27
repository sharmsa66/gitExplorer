import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import axios from '../../api/axios.orders';
import { AxiosError } from 'axios';
import { Customer } from './interfaces';
import { burgerState } from './store';


interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export interface Order {
  ingredients: unknown;
  totalPrice: number;
  customer: Customer;
  key?: string;
}

export const addOrder = createAsyncThunk<
  { id: string },
  {Order,token},
  {
    rejectValue: ValidationErrors;
  }
>('ingredients/addOrder', async ({Order, token}, { rejectWithValue }) => {
  try {
    const response = await axios.post('/orders.json?auth='+ token, Order);
    return response.data;
  } catch (err) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getOrders = createAsyncThunk< unknown,{token, userId}>('Orders/getOrders',
 async ({token,userId},thunkApi) => {
  const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId +'"';
  const resp = await axios.get('/orders.json'+ queryParams);
  const arr = Array<Order>();
         for( const i in resp.data){
           arr.push({
             ingredients:resp.data[i].ingredients,
             customer: resp.data[i].customer,
             totalPrice: +resp.data[i].totalPrice,
             key: i});
         }
  return  await thunkApi.dispatch(OrderSlice.actions.addOrders(arr));
});

const OrderSlice = createSlice({
  name: 'Order',
  initialState: {
    loading: false,
    error: null,
    orders: Array<Order>(),
    currentRequestId: undefined,
  },
  reducers:  {
    addOrders: {
      reducer:(state,action:PayloadAction<{orders:Order[], loading:boolean}>) => {
        return {
          ...state,
          orders: [...action.payload.orders],
          loading: action.payload.loading
        }
      },
      prepare:(orders: Order[]) =>{
        return {payload:{orders, loading: false}};
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state) => {
      state.loading = true;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload['errorMessage'];
      } else {
        state.error = action.error.message;
      }
    });

    builder.addCase(getOrders.pending, (state, action) => {
      if (!state.loading) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });

    builder.addCase(getOrders.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading && state.currentRequestId === requestId) {
        console.log('fulffilled, getOrders', action.payload)
        state.loading = false;
        state.currentRequestId = undefined;
      }
    });

    builder.addCase(getOrders.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading && state.currentRequestId === requestId) {
        state.loading = false;
        state.currentRequestId = undefined;
        state.error = action.error;
      }
    });
  },
});

export const { reducer } = OrderSlice;

export const selectOrderState = (state: burgerState) => state.order;

export const orderLoadingState = createSelector(
  selectOrderState,
  (state) => state.loading
);

export const orderErrorState = createSelector(
  selectOrderState,
  (state) => state.error
);
