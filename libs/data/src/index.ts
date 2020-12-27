export * from './lib/data';
export { Step } from './lib/interfaces/step';

export { StepDirection } from './lib/enums/enum';

export {
  store as gitExpStore,
  RootState as gitRootState,
} from './lib/stores/git-explorer-store/store';
export * from './lib/stores/git-explorer-store/counter.slice';

export { burgerStore, burgerState } from './lib/stores/burger-builder/store';

export {
  reducer as burgerReducer,
  addIngredient,
  removeIngredient,
  selectIngredients,
  fetchIngredients,
} from './lib/stores/burger-builder/ingredient.slice';

export { instance as axios } from '../../data/src/lib/api/axios.orders';
export * from './lib/stores/burger-builder/interfaces';

export { addOrder, getOrders, selectOrderState, orderErrorState, orderLoadingState} from './lib/stores/burger-builder/order.slice';

export {authenticateUser, selectAuthState, setLogOut, checkAuthToken} from './lib/stores/burger-builder/auth.slice';
