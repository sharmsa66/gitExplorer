import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import  {burgerState} from  './store';

import axios from '../../api/axios.orders';



const initialState ={
  ingredients: null,
  totalPrice: 4,
  error:  null,
  building: false,

};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.07,
};

interface ingredient{
  name: string;
  price: number
}




export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async() =>{
    const response = await axios.get('https://burgershop-88c01.firebaseio.com/ingredients.json');
    return response.data;
  }
)


const BurgerSlice = createSlice({
  name: "Burger",
  initialState: initialState,
  reducers: {
    addIngredient:  {
       reducer(state, action:PayloadAction<ingredient>) {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.payload.name]:state.ingredients[action.payload.name] + 1

          },
          totalPrice: state.totalPrice + action.payload.price,
          building: true
        }
       },
       prepare(ingredientName: string){
        return {payload:{name:ingredientName, price: INGREDIENT_PRICES[ingredientName]}}
       }
    },
    removeIngredient:  {
      reducer(state, action:PayloadAction<ingredient>) {
       return {
         ...state,
         ingredients: {
           ...state.ingredients,
           [action.payload.name]:state.ingredients[action.payload.name] - 1

         },
         totalPrice: state.totalPrice - action.payload.price,
         building: true
       }
      },
      prepare(ingredientName: string){
        return {payload:{name:ingredientName, price: INGREDIENT_PRICES[ingredientName]}}
      }
   },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action)=> {
      state.ingredients =  action.payload;
      state.totalPrice = 4;
      state.building = false;
    });
  }
  });

export const {reducer } = BurgerSlice;
export const{ addIngredient, removeIngredient} = BurgerSlice.actions;
export const selectIngredients = (state:burgerState) => state.burger;





